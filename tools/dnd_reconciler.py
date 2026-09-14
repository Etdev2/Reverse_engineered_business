#!/usr/bin/env python3
"""
dnd_reconciler.py - Detention & Demurrage (D&D) invoice reconciler (MVP)

Proof-of-concept for the "Last Free Day" recovery desk (Candidate #1).

It compares ocean-carrier D&D billings against actual terminal gate events
and documented exclusion windows (terminal closures, chassis shortages,
weather) and emits:

  * dispute_schedule.csv  - billed vs supported chargeable days per invoice line
  * dispute_packet.md     - human-readable discrepancy schedule + draft dispute notes

Standard library only. No terminal or carrier APIs are used (by design -
the business runs on exported PDFs/CSVs dragged into a folder).

Usage:
  python3 dnd_reconciler.py --demo                  # run a built-in demo
  python3 dnd_reconciler.py --init-sample-dir DIR   # write editable sample CSVs
  python3 dnd_reconciler.py invoices.csv events.csv [exclusions.csv]

Inputs
------
carrier_invoices.csv columns:
  invoice_id, carrier, container_number, charge_type, free_time_days,
  daily_rate, billed_chargeable_days, billed_amount, invoice_date
  charge_type is "detention" (outside terminal: GATE_OUT_FULL -> GATE_IN_EMPTY)
  or "demurrage"  (inside terminal: CONTAINER_AVAILABLE -> GATE_OUT_FULL).

terminal_events.csv columns:
  container_number, event, timestamp

exclusions.csv columns (optional):
  container_number, start_date, end_date, reason
"""

import argparse
import csv
import datetime as dt
import io
import os
import sys
from collections import defaultdict

# --------------------------------------------------------------------------
# ISO 6346 container number check digit
# --------------------------------------------------------------------------

_LETTER_VALUE = {}
_value = 10
for _c in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
    _LETTER_VALUE[_c] = _value
    _value += 1
    if _value % 11 == 0:  # values that are multiples of 11 are skipped
        _value += 1


def container_check_digit(owner_and_serial: str) -> int:
    """Compute the ISO 6346 check digit for the first 10 characters."""
    total = 0
    for i, ch in enumerate(owner_and_serial[:10]):
        num = _LETTER_VALUE[ch] if ch.isalpha() else int(ch)
        total += num * (2 ** i)
    rem = total % 11
    return 0 if rem == 10 else rem


def valid_container_number(number: str) -> bool:
    number = (number or "").strip().upper()
    if len(number) != 11 or not number[:4].isalpha() or not number[4:].isdigit():
        return False
    return container_check_digit(number[:10]) == int(number[10])


def make_container_number(owner: str, category: str, serial: int) -> str:
    """Build an 11-character ISO 6346 number: 3-letter owner + category letter
    (U/J/Z) + 6 serial digits + 1 check digit (e.g. MSCU1234567)."""
    assert len(owner) == 3 and len(category) == 1
    base = f"{owner}{category}{serial:06d}"
    return base + str(container_check_digit(base))


# --------------------------------------------------------------------------
# Reconciliation
# --------------------------------------------------------------------------

def parse_date(value: str) -> dt.date:
    value = value.strip()
    for fmt in ("%Y-%m-%d %H:%M", "%Y-%m-%d %H:%M:%S", "%Y-%m-%d", "%m/%d/%Y"):
        try:
            return dt.datetime.strptime(value, fmt).date()
        except ValueError:
            continue
    raise ValueError(f"Unrecognized date: {value!r}")


def load_csv(path: str):
    with open(path, newline="", encoding="utf-8-sig") as fh:
        return list(csv.DictReader(fh))


def load_exclusions(path: str | None):
    """container -> list of (start_date, end_date, reason) inclusive day windows."""
    windows = defaultdict(list)
    if not path or not os.path.exists(path):
        return windows
    for row in load_csv(path):
        start, end = parse_date(row["start_date"]), parse_date(row["end_date"])
        windows[row["container_number"].strip().upper()].append((start, end, row["reason"].strip()))
    return windows


def excluded_days(container: str, dwell_start: dt.date, dwell_end: dt.date, windows) -> tuple[int, list[str]]:
    """Count calendar days inside (start, end] covered by a documented exclusion window."""
    days, reasons = 0, []
    for start, end, reason in windows.get(container, []):
        overlap_start = max(start, dwell_start)
        overlap_end = min(end, dwell_end)
        if overlap_end >= overlap_start:
            count = (overlap_end - overlap_start).days + 1
            # only count days that actually fall within the dwell period boundaries
            count = min(count, (dwell_end - dwell_start).days)
            if count > 0:
                days += count
                reasons.append(f"{reason} ({overlap_start.isoformat()} to {overlap_end.isoformat()}, {count}d)")
    return days, reasons


def reconcile(invoice_rows, event_rows, exclusion_windows):
    events = defaultdict(dict)
    for row in event_rows:
        cnum = row["container_number"].strip().upper()
        events[cnum][row["event"].strip().upper()] = parse_date(row["timestamp"])

    findings = []
    for inv in invoice_rows:
        cnum = inv["container_number"].strip().upper()
        charge_type = inv["charge_type"].strip().lower()
        free_time = int(inv["free_time_days"])
        daily_rate = float(inv["daily_rate"])
        billed_days = int(inv["billed_chargeable_days"])
        billed_amount = float(inv["billed_amount"])

        finding = {
            "invoice_id": inv["invoice_id"], "carrier": inv["carrier"],
            "container_number": cnum, "charge_type": charge_type,
            "billed_days": billed_days, "billed_amount": billed_amount,
            "supported_days": "", "supported_amount": "", "variance": "",
            "status": "", "basis": "",
        }

        if not valid_container_number(cnum):
            finding["status"] = "EXCEPTION"
            finding["basis"] = "Container number failed ISO 6346 check digit - verify source document"
            findings.append(finding)
            continue

        ev = events.get(cnum, {})
        if charge_type == "detention":
            required = ("GATE_OUT_FULL", "GATE_IN_EMPTY")
        elif charge_type == "demurrage":
            required = ("CONTAINER_AVAILABLE", "GATE_OUT_FULL")
        else:
            finding["status"] = "EXCEPTION"
            finding["basis"] = f"Unrecognized charge type: {charge_type!r}"
            findings.append(finding)
            continue

        missing = [e for e in required if e not in ev]
        if missing:
            finding["status"] = "EXCEPTION"
            finding["basis"] = "Missing gate events: " + ", ".join(missing)
            findings.append(finding)
            continue

        start, end = (ev[e] for e in required)

        if end < start:
            finding["status"] = "EXCEPTION"
            finding["basis"] = f"Event timestamps out of order: {start} -> {end}"
            findings.append(finding)
            continue

        dwell_days = (end - start).days
        ex_days, reasons = excluded_days(cnum, start, end, exclusion_windows)
        supported_days = max(0, dwell_days - free_time - ex_days)
        supported_amount = round(supported_days * daily_rate, 2)
        variance = round(billed_amount - supported_amount, 2)

        basis_parts = [
            f"dwell {dwell_days}d ({start.isoformat()} -> {end.isoformat()})",
            f"free time {free_time}d",
        ]
        if ex_days:
            basis_parts.append(f"excluded {ex_days}d: " + "; ".join(reasons))

        finding.update({
            "supported_days": supported_days,
            "supported_amount": supported_amount,
            "variance": variance,
            "status": "OVERCHARGE" if variance > 0.01 else ("UNDERCHARGE" if variance < -0.01 else "OK"),
            "basis": "; ".join(basis_parts),
        })
        findings.append(finding)
    return findings


# --------------------------------------------------------------------------
# Output
# --------------------------------------------------------------------------

def write_schedule_csv(findings, path):
    fields = ["invoice_id", "carrier", "container_number", "charge_type",
              "billed_days", "billed_amount", "supported_days", "supported_amount",
              "variance", "status", "basis"]
    with open(path, "w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=fields)
        writer.writeheader()
        writer.writerows(findings)


def write_packet_md(findings, path):
    disputed = [f for f in findings if f["status"] == "OVERCHARGE"]
    exceptions = [f for f in findings if f["status"] == "EXCEPTION"]
    total_variance = sum(float(f["variance"]) for f in disputed)

    out = io.StringIO()
    out.write("# D&D Discrepancy Schedule - DRAFT for human review\n\n")
    out.write(f"- Disputed lines: **{len(disputed)}**\n")
    out.write(f"- Total claimed overcharge: **${total_variance:,.2f}**\n")
    out.write(f"- Exceptions needing manual review: **{len(exceptions)}**\n\n")
    out.write("> Every line below must be verified against the source PDF and the\n")
    out.write("> carrier tariff free-time rule before a dispute letter is sent.\n\n")
    out.write("| Invoice | Carrier | Container | Type | Billed days | Supported days | Variance | Basis |\n")
    out.write("|---|---|---|---|---:|---:|---:|---|\n")
    for f in findings:
        out.write(
            f"| {f['invoice_id']} | {f['carrier']} | {f['container_number']} | {f['charge_type']} "
            f"| {f['billed_days']} | {f['supported_days']} | {f['variance']} | {f['status']}: {f['basis']} |\n"
        )
    out.write("\n## Dispute letter notes per invoice\n\n")
    for f in disputed:
        out.write(f"- **{f['invoice_id']} / {f['container_number']} ({f['carrier']}, {f['charge_type']}):** "
                  f"billed {f['billed_days']} days / ${f['billed_amount']:.2f}; "
                  f"records support {f['supported_days']} days / ${f['supported_amount']:.2f}; "
                  f"request credit of ${f['variance']:.2f}. Basis: {f['basis']}. "
                  "Attach terminal gate-activity report and exclusion evidence; cite tariff free-time clause "
                  "and (where applicable) FMC 46 CFR Part 541 billing requirements.\n")
    if exceptions:
        out.write("\n## Human review queue\n\n")
        for f in exceptions:
            out.write(f"- {f['invoice_id']} / {f['container_number']}: {f['basis']}\n")
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(out.getvalue())
    return total_variance


def print_summary(findings):
    disputed = [f for f in findings if f["status"] == "OVERCHARGE"]
    exceptions = [f for f in findings if f["status"] == "EXCEPTION"]
    total = sum(float(f["variance"]) for f in disputed)
    print(f"{'INVOICE':<10}{'CONTAINER':<13}{'TYPE':<10}{'BILLED':>7}{'SUPPORTED':>10}{'VARIANCE':>11}  STATUS")
    for f in findings:
        print(f"{f['invoice_id']:<10}{f['container_number']:<13}{f['charge_type']:<10}"
              f"{f['billed_days']:>7}{str(f['supported_days']):>10}{str(f['variance']):>11}  {f['status']}")
    print(f"\nDisputed lines: {len(disputed)} | Claimed overcharge: ${total:,.2f} | Exceptions: {len(exceptions)}")


# --------------------------------------------------------------------------
# Demo / sample data
# --------------------------------------------------------------------------

def demo_rows():
    c1 = make_container_number("MSC", "U", 100001)
    c2 = make_container_number("TGH", "U", 200002)
    c3 = make_container_number("MED", "U", 300003)
    c4 = make_container_number("CSQ", "U", 400004)
    c5 = make_container_number("BMO", "U", 500005)

    invoices = [
        # Out Sep 1 -> empty back Sep 6 = 5d dwell, 5d free -> 0 chargeable, billed 2 (overcharge)
        dict(invoice_id="INV-1001", carrier="MAERSK", container_number=c1, charge_type="detention",
             free_time_days=5, daily_rate=180, billed_chargeable_days=2, billed_amount=360, invoice_date="2026-09-10"),
        # Out Sep 3 -> in Sep 12 = 9d, 5 free, 2 chassis-shortage days -> 2 supported, billed 6
        dict(invoice_id="INV-1002", carrier="MSC", container_number=c2, charge_type="detention",
             free_time_days=5, daily_rate=200, billed_chargeable_days=6, billed_amount=1200, invoice_date="2026-09-15"),
        # Available Sep 2 -> out Sep 8 = 6d demurrage, 4 free, 2 terminal-closure days -> 0 supported, billed 3
        dict(invoice_id="INV-1003", carrier="CMA CGM", container_number=c3, charge_type="demurrage",
             free_time_days=4, daily_rate=150, billed_chargeable_days=3, billed_amount=450, invoice_date="2026-09-12"),
        # Clean billing: out Sep 2 -> in Sep 10 = 8d, 4 free -> 4 supported, billed 4
        dict(invoice_id="INV-1004", carrier="MAERSK", container_number=c4, charge_type="detention",
             free_time_days=4, daily_rate=175, billed_chargeable_days=4, billed_amount=700, invoice_date="2026-09-14"),
        # Missing gate-in-empty event -> exception, never auto-claimed
        dict(invoice_id="INV-1005", carrier="ONE", container_number=c5, charge_type="detention",
             free_time_days=5, daily_rate=190, billed_chargeable_days=5, billed_amount=950, invoice_date="2026-09-16"),
    ]
    events = [
        (c1, "GATE_OUT_FULL", "2026-09-01 10:00"), (c1, "GATE_IN_EMPTY", "2026-09-06 14:00"),
        (c2, "GATE_OUT_FULL", "2026-09-03 08:30"), (c2, "GATE_IN_EMPTY", "2026-09-12 11:15"),
        (c3, "CONTAINER_AVAILABLE", "2026-09-02 07:00"), (c3, "GATE_OUT_FULL", "2026-09-08 09:45"),
        (c4, "GATE_OUT_FULL", "2026-09-02 09:00"), (c4, "GATE_IN_EMPTY", "2026-09-10 16:20"),
        (c5, "GATE_OUT_FULL", "2026-09-04 07:50"),
    ]
    exclusions = [
        (c2, "2026-09-07", "2026-09-08", "Carrier chassis shortage"),
        (c3, "2026-09-05", "2026-09-06", "Terminal closure (weather)"),
    ]
    return invoices, events, exclusions


def _write_csv(path, rows, columns):
    with open(path, "w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=columns)
        writer.writeheader()
        writer.writerows(rows)


def init_sample_dir(directory):
    os.makedirs(directory, exist_ok=True)
    invoices, events, exclusions = demo_rows()
    _write_csv(os.path.join(directory, "carrier_invoices.csv"), invoices, list(invoices[0].keys()))
    _write_csv(os.path.join(directory, "terminal_events.csv"),
               [dict(container_number=c, event=e, timestamp=t) for c, e, t in events],
               ["container_number", "event", "timestamp"])
    _write_csv(os.path.join(directory, "exclusion_windows.csv"),
               [dict(container_number=c, start_date=s, end_date=e, reason=r) for c, s, e, r in exclusions],
               ["container_number", "start_date", "end_date", "reason"])
    print(f"Sample inputs written to {directory}/")


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--demo", action="store_true", help="run the built-in demo")
    parser.add_argument("--init-sample-dir", metavar="DIR", help="write sample input CSVs to DIR")
    parser.add_argument("paths", nargs="*", help="invoices.csv events.csv [exclusions.csv]")
    args = parser.parse_args(argv)

    if args.init_sample_dir:
        init_sample_dir(args.init_sample_dir)
        return 0

    if args.demo:
        import tempfile
        invoices, event_tuples, exclusions = demo_rows()
        event_rows = [dict(container_number=c, event=e, timestamp=t) for c, e, t in event_tuples]
        tmp = tempfile.mkdtemp(prefix="dnd_demo_")
        inv_path = os.path.join(tmp, "invoices.csv")
        evt_path = os.path.join(tmp, "events.csv")
        exc_path = os.path.join(tmp, "exclusions.csv")
        _write_csv(inv_path, invoices, list(invoices[0].keys()))
        _write_csv(evt_path, event_rows, ["container_number", "event", "timestamp"])
        _write_csv(exc_path,
                   [dict(container_number=c, start_date=s, end_date=e, reason=r) for c, s, e, r in exclusions],
                   ["container_number", "start_date", "end_date", "reason"])
    elif len(args.paths) >= 2:
        inv_path, evt_path = args.paths[0], args.paths[1]
        exc_path = args.paths[2] if len(args.paths) > 2 else None
        invoices = load_csv(inv_path)
        event_rows = load_csv(evt_path)
    else:
        parser.print_help()
        return 1

    windows = load_exclusions(exc_path)
    findings = reconcile(invoices, event_rows, windows)
    print_summary(findings)
    write_schedule_csv(findings, "dispute_schedule.csv")
    write_packet_md(findings, "dispute_packet.md")
    print("\nWrote dispute_schedule.csv and dispute_packet.md")
    return 0


if __name__ == "__main__":
    sys.exit(main())
