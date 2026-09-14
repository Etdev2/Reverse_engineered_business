# D&D Reconciler MVP

Dependency-free Python proof-of-concept for the **Last Free Day** detention/demurrage
recovery desk (Candidate #1 in the analysis). It compares ocean-carrier D&D billings
against terminal gate events and documented exclusion windows (terminal closures,
chassis shortages, weather).

```
python3 dnd_reconciler.py --demo                    # built-in demo, prints findings
python3 dnd_reconciler.py --init-sample-dir sample_data   # write editable sample CSVs
python3 dnd_reconciler.py carrier_invoices.csv terminal_events.csv exclusion_windows.csv
```

The last command writes `dispute_schedule.csv` and `dispute_packet.md` to the
current directory. Rows it cannot prove are placed in a **human review queue** —
the script never auto-claims a line without complete gate evidence, and container
numbers are ISO 6346 check-digit validated.

Inputs:

- **carrier_invoices.csv** — `invoice_id, carrier, container_number, charge_type
  (detention|demurrage), free_time_days, daily_rate, billed_chargeable_days,
  billed_amount, invoice_date`
- **terminal_events.csv** — `container_number, event (CONTAINER_AVAILABLE |
  GATE_OUT_FULL | GATE_IN_EMPTY), timestamp`
- **exclusion_windows.csv** — `container_number, start_date, end_date, reason`

Roadmap (post-validation, per the plan): `pdfplumber` extractors for eModal
container-history PDFs and carrier invoice PDFs; per-carrier tariff free-time
rule library; drag-and-drop Streamlit wrapper. No carrier/terminal APIs, no
EDI, no CargoWise write-back — by design.
