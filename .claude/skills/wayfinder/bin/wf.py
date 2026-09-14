#!/usr/bin/env python3
"""
wayfinder runtime.

Deterministic spine for the swarm. Agents reason; this file is what actually
commits. Nothing reaches state/ except through ledger_commit(), which is the
single writer of record.

Enforced here, not in prose:
  - envelope validation      every inter-agent message carries provenance
  - idempotency              a rerun never double-orders or double-emails
  - boundary gates           money/binding/irreversible never auto-execute
  - retry budget             N attempts then escalate, never loop
  - kill switch              one file halts every station
  - append-only audit        state is reconstructible from the log alone

Usage:
  wf.py init
  wf.py map [--run RUN]
  wf.py dispatch [--run RUN]
  wf.py commit <envelope.json|->
  wf.py ticket call --entity ID --payload JSON
  wf.py ticket approval --entity ID --payload JSON
  wf.py debrief <CALL-ID> --file notes.txt
  wf.py approve <APR-ID> [--by NAME]
  wf.py queue
  wf.py digest
  wf.py audit [--entity ID]
  wf.py kill "<reason>" | wf.py resume
"""
import argparse, hashlib, json, os, re, sys, time
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATE = os.path.join(ROOT, "state")
LOG = os.path.join(STATE, "audit", "log.ndjson")
KILL = os.path.join(STATE, "KILL")
REGISTRY = os.path.join(ROOT, "stations", "stations.json")

COLLECTIONS = ["runs", "leads", "quotes", "engagements", "suppliers", "invoices",
               "findings", "disputes", "calls", "approvals", "outbox"]

ENVELOPE_REQUIRED = ["envelope_version", "run_id", "station", "agent", "entity_type",
                     "entity_id", "action", "payload", "provenance", "confidence", "timestamp"]

# Boundaries that never auto-execute. Matched against action names.
# Threshold is $0 per charter: any money movement gates, regardless of size.
GATED_ACTIONS = {
    "pay": "moves money",
    "transfer": "moves money",
    "refund": "moves money",
    "payroll": "moves money",
    "sign": "binding commitment",
    "contract": "binding commitment",
    "credential": "credentials or identifiers",
    "file_gov": "government filing",
    "publish": "publicly irreversible under the business name",
    "mass_email": "publicly irreversible under the business name",
    "file_dispute_as_client": "acts under the client's name with the carrier",
    "commit_spend": "outbound commitment",
}
RETRY_BUDGET = 3


def now():
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def jload(p, default=None):
    if not os.path.exists(p):
        return default
    with open(p) as f:
        return json.load(f)


def jdump(p, obj):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    tmp = p + ".tmp"
    with open(tmp, "w") as f:
        json.dump(obj, f, indent=2, sort_keys=True)
        f.write("\n")
    os.replace(tmp, p)


def registry():
    return jload(REGISTRY)


def killed():
    return os.path.exists(KILL)


def digest_of(obj):
    return hashlib.sha256(json.dumps(obj, sort_keys=True).encode()).hexdigest()[:16]


def next_id(prefix, collection):
    d = os.path.join(STATE, collection)
    os.makedirs(d, exist_ok=True)
    n = len([f for f in os.listdir(d) if f.endswith(".json")]) + 1
    return f"{prefix}-{n:04d}"


# --------------------------------------------------------------------------
# Scribe: append-only audit log. Every commit, refusal and gate lands here.
# --------------------------------------------------------------------------
def scribe(event, **fields):
    os.makedirs(os.path.dirname(LOG), exist_ok=True)
    rec = {"ts": now(), "event": event}
    rec.update(fields)
    with open(LOG, "a") as f:
        f.write(json.dumps(rec, sort_keys=True) + "\n")
    return rec


# --------------------------------------------------------------------------
# Envelope validation
# --------------------------------------------------------------------------
def validate_envelope(env):
    errs = []
    for k in ENVELOPE_REQUIRED:
        if k not in env:
            errs.append(f"missing required field: {k}")
    if errs:
        return errs
    if not isinstance(env["station"], int) or not 1 <= env["station"] <= 18:
        errs.append("station must be int 1..18")
    if env["entity_type"] not in COLLECTIONS:
        errs.append(f"entity_type must be one of {COLLECTIONS}")
    if not re.match(r"^[A-Z]{3,4}-\d{4}$|^run_[a-z0-9]+$", env["entity_id"]):
        errs.append("entity_id must look like ABC-0001 or run_xxx")
    if not isinstance(env["payload"], dict):
        errs.append("payload must be an object")
    prov = env.get("provenance")
    if not isinstance(prov, dict) or "derived_from" not in prov or "method" not in prov:
        errs.append("provenance requires {derived_from: [...], method: str}")
    elif not isinstance(prov["derived_from"], list):
        errs.append("provenance.derived_from must be a list")
    c = env.get("confidence")
    if not isinstance(c, (int, float)) or not 0.0 <= c <= 1.0:
        errs.append("confidence must be a number 0.0..1.0")
    return errs


def gate_for(action):
    for key, reason in GATED_ACTIONS.items():
        if key in action:
            return reason
    return None


# --------------------------------------------------------------------------
# Ledger: the single writer. Agents propose; this commits.
# --------------------------------------------------------------------------
def ledger_commit(env, force_gate_cleared=False):
    if killed():
        reason = open(KILL).read().strip()
        scribe("refused.killswitch", station=env.get("station"), entity=env.get("entity_id"), reason=reason)
        return {"status": "refused", "why": f"kill switch active: {reason}"}

    errs = validate_envelope(env)
    if errs:
        scribe("refused.invalid_envelope", errors=errs, agent=env.get("agent"))
        return {"status": "refused", "why": "invalid envelope", "errors": errs}

    key = env.get("idempotency_key") or digest_of(
        [env["station"], env["entity_type"], env["entity_id"], env["action"], env["payload"]])
    marker = os.path.join(STATE, ".idem", key)
    if os.path.exists(marker):
        prior = jload(marker, {})
        scribe("skipped.idempotent", key=key, station=env["station"], entity=env["entity_id"],
               action=env["action"], first_committed=prior.get("ts"))
        return {"status": "duplicate", "why": "already committed", "key": key, "first": prior.get("ts")}

    gate = gate_for(env["action"])
    if gate and not force_gate_cleared:
        apr = create_approval(env, gate)
        scribe("gated", station=env["station"], entity=env["entity_id"], action=env["action"],
               boundary=gate, approval=apr["id"])
        return {"status": "gated", "why": gate, "approval_id": apr["id"]}

    path = os.path.join(STATE, env["entity_type"], f'{env["entity_id"]}.json')
    entity = jload(path, {"id": env["entity_id"], "type": env["entity_type"],
                          "created": now(), "history": []})
    entity.update(env["payload"])
    entity["updated"] = now()
    entity["station"] = env["station"]
    entity.setdefault("history", []).append({
        "ts": now(), "station": env["station"], "agent": env["agent"], "action": env["action"],
        "confidence": env["confidence"], "provenance": env["provenance"], "key": key})
    jdump(path, entity)
    jdump(marker, {"ts": now(), "entity": env["entity_id"], "action": env["action"]})
    scribe("committed", station=env["station"], agent=env["agent"], entity=env["entity_id"],
           entity_type=env["entity_type"], action=env["action"], key=key,
           confidence=env["confidence"], provenance=env["provenance"],
           payload_digest=digest_of(env["payload"]))
    mark_station(env["run_id"], env["station"], "done")
    return {"status": "committed", "entity": env["entity_id"], "key": key}


# --------------------------------------------------------------------------
# Tickets
# --------------------------------------------------------------------------
def create_approval(env, boundary):
    aid = next_id("APR", "approvals")
    rec = {"id": aid, "type": "approval", "status": "open", "opened": now(),
           "boundary": boundary, "station": env["station"], "agent": env["agent"],
           "entity_type": env["entity_type"], "entity_id": env["entity_id"],
           "action": env["action"], "blocked_envelope": env,
           "one_word_to_clear": f"wf.py approve {aid}"}
    jdump(os.path.join(STATE, "approvals", f"{aid}.json"), rec)
    scribe("approval.opened", id=aid, boundary=boundary, entity=env["entity_id"])
    return rec


CALL_REQUIRED = ["who", "number", "objective", "learn", "must_not_concede",
                 "walk_away", "brief", "opening_line", "fields_required"]


def create_call(entity_id, station, payload):
    missing = [k for k in CALL_REQUIRED if not payload.get(k)]
    if missing:
        return {"status": "refused", "why": "call ticket is not a bare 'call this guy'",
                "missing": missing}
    if not isinstance(payload["learn"], list) or len(payload["learn"]) != 3:
        return {"status": "refused", "why": "learn must be exactly 3 things"}
    if not isinstance(payload["must_not_concede"], list) or len(payload["must_not_concede"]) != 2:
        return {"status": "refused", "why": "must_not_concede must be exactly 2 things"}
    cid = next_id("CALL", "calls")
    rec = {"id": cid, "type": "call", "status": "open", "opened": now(),
           "station": station, "blocks_entity": entity_id}
    rec.update(payload)
    jdump(os.path.join(STATE, "calls", f"{cid}.json"), rec)
    scribe("call.opened", id=cid, station=station, entity=entity_id, who=payload["who"])
    return {"status": "open", "id": cid}


def debrief(call_id, text):
    p = os.path.join(STATE, "calls", f"{call_id}.json")
    rec = jload(p)
    if not rec:
        return {"status": "error", "why": f"no such call {call_id}"}
    if rec["status"] == "debriefed":
        return {"status": "duplicate", "why": "already debriefed"}
    parsed = {}
    for field in rec.get("fields_required", []):
        m = re.search(rf"{re.escape(field)}\s*[:=]\s*(.+)", text, re.I)
        parsed[field] = m.group(1).strip() if m else None
    rec.update({"status": "debriefed", "debriefed_at": now(), "debrief_raw": text,
                "debrief_parsed": parsed,
                "unparsed_fields": [k for k, v in parsed.items() if v is None]})
    jdump(p, rec)
    scribe("call.debriefed", id=call_id, station=rec["station"], entity=rec.get("blocks_entity"),
           parsed=parsed, unparsed=rec["unparsed_fields"])
    return {"status": "debriefed", "parsed": parsed, "unparsed": rec["unparsed_fields"],
            "resumes_station": rec["station"]}


def approve(apr_id, by):
    p = os.path.join(STATE, "approvals", f"{apr_id}.json")
    rec = jload(p)
    if not rec:
        return {"status": "error", "why": f"no such approval {apr_id}"}
    if rec["status"] != "open":
        return {"status": "duplicate", "why": f"already {rec['status']}"}
    rec.update({"status": "approved", "approved_by": by, "approved_at": now()})
    jdump(p, rec)
    scribe("approval.cleared", id=apr_id, by=by, boundary=rec["boundary"])
    res = ledger_commit(rec["blocked_envelope"], force_gate_cleared=True)
    return {"status": "approved", "commit": res}


# --------------------------------------------------------------------------
# Dispatcher + Watchdog
# --------------------------------------------------------------------------
def run_path(run_id):
    return os.path.join(STATE, "runs", f"{run_id}.json")


def mark_station(run_id, sid, status):
    p = run_path(run_id)
    r = jload(p, {"id": run_id, "type": "runs", "created": now(), "stations": {}, "attempts": {}})
    r.setdefault("stations", {})[str(sid)] = {"status": status, "ts": now()}
    jdump(p, r)


def attempt(run_id, sid):
    """Retry budget. Returns remaining attempts, or None once exhausted."""
    p = run_path(run_id)
    r = jload(p, {"id": run_id, "type": "runs", "created": now(), "stations": {}, "attempts": {}})
    n = r.setdefault("attempts", {}).get(str(sid), 0) + 1
    r["attempts"][str(sid)] = n
    jdump(p, r)
    if n > RETRY_BUDGET:
        scribe("escalated.retry_budget", run=run_id, station=sid, attempts=n)
        return None
    return RETRY_BUDGET - n + 1


def dispatch(run_id):
    """Which stations are unblocked right now. Everything unblocked runs in parallel."""
    if killed():
        return {"halted": True, "reason": open(KILL).read().strip(), "ready": []}
    reg = registry()
    r = jload(run_path(run_id), {"stations": {}})
    done = {int(k) for k, v in r.get("stations", {}).items() if v["status"] == "done"}
    ready, blocked = [], []
    for s in reg["stations"]:
        if s["cadence"] == "merged" or s["id"] in done:
            continue
        unmet = [d for d in s["deps"] if d not in done]
        (ready if not unmet else blocked).append(
            {"id": s["id"], "name": s["name"], "owner": s["owner"], "tier": s["tier"],
             "waiting_on": unmet})
    open_calls = [jload(os.path.join(STATE, "calls", f)) for f in sorted(os.listdir(os.path.join(STATE, "calls"))) if f.endswith(".json")]
    open_calls = [c for c in open_calls if c["status"] == "open"]
    open_aprs = [jload(os.path.join(STATE, "approvals", f)) for f in sorted(os.listdir(os.path.join(STATE, "approvals"))) if f.endswith(".json")]
    open_aprs = [a for a in open_aprs if a["status"] == "open"]
    scribe("dispatched", run=run_id, ready=[s["id"] for s in ready], idle=len(blocked))
    return {"halted": False, "ready": ready, "blocked": blocked,
            "open_calls": len(open_calls), "open_approvals": len(open_aprs),
            "parallel_width": len(ready)}


# --------------------------------------------------------------------------
# Queue + digest — the only two things a human reads
# --------------------------------------------------------------------------
def read_all(collection):
    d = os.path.join(STATE, collection)
    if not os.path.isdir(d):
        return []
    return [jload(os.path.join(d, f)) for f in sorted(os.listdir(d)) if f.endswith(".json")]


def queue():
    calls = [c for c in read_all("calls") if c["status"] == "open"]
    aprs = [a for a in read_all("approvals") if a["status"] == "open"]
    return {"calls": calls, "approvals": aprs}


def digest(run_id):
    q = queue()
    log = []
    if os.path.exists(LOG):
        with open(LOG) as f:
            log = [json.loads(l) for l in f if l.strip()]
    today = now()[:10]
    todays = [e for e in log if e["ts"][:10] == today]
    moved = [e for e in todays if e["event"] == "committed"]
    inv = read_all("invoices")
    cash_in = sum(i.get("paid_amount", 0) for i in inv)
    billed = sum(i.get("amount", 0) for i in inv)
    d = dispatch(run_id)
    lines = [f"# Wayfinder digest — {today}", "",
             f"**Run:** `{run_id}`  ·  **Status:** {'HALTED' if d['halted'] else 'running'}", ""]
    lines += ["## ☎ Waiting on you — calls", ""]
    if q["calls"]:
        for c in q["calls"]:
            lines.append(f"- **{c['id']}** — call **{c['who']}** ({c['number']})  \n  _{c['objective']}_  \n  Blocks: `{c.get('blocks_entity')}` at station {c['station']}")
    else:
        lines.append("_Nothing. No calls queued._")
    lines += ["", "## ✔ Waiting on you — approvals", ""]
    if q["approvals"]:
        for a in q["approvals"]:
            lines.append(f"- **{a['id']}** — {a['action']} on `{a['entity_id']}` — _{a['boundary']}_  \n  Clear with: `{a['one_word_to_clear']}`")
    else:
        lines.append("_Nothing. No approvals pending._")
    lines += ["", "## What moved today", ""]
    if moved:
        for e in moved:
            lines.append(f"- S{e['station']} `{e['agent']}` → {e['action']} on `{e['entity']}` (conf {e['confidence']})")
    else:
        lines.append("_Nothing committed today._")
    lines += ["", "## Blocked", ""]
    for s in d["blocked"][:10]:
        lines.append(f"- S{s['id']} {s['name']} — waiting on {s['waiting_on']}")
    if not d["blocked"]:
        lines.append("_Nothing blocked._")
    lines += ["", "## Cash", "",
              f"- Billed: ${billed:,.2f}", f"- Collected: ${cash_in:,.2f}",
              f"- Outstanding: ${billed - cash_in:,.2f}", "",
              f"_Parallel width now: {d['parallel_width']} stations dispatchable._"]
    out = os.path.join(STATE, "digest", f"{today}.md")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    open(out, "w").write("\n".join(lines) + "\n")
    scribe("digest.written", path=out, moved=len(moved), calls=len(q["calls"]), approvals=len(q["approvals"]))
    return out


def audit(entity=None):
    if not os.path.exists(LOG):
        return []
    with open(LOG) as f:
        rows = [json.loads(l) for l in f if l.strip()]
    return [r for r in rows if r.get("entity") == entity] if entity else rows


# --------------------------------------------------------------------------
def main():
    ap = argparse.ArgumentParser(prog="wf.py")
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("init")
    for name in ("map", "dispatch", "digest", "queue"):
        p = sub.add_parser(name); p.add_argument("--run", default="run_main")
    p = sub.add_parser("commit"); p.add_argument("file")
    p = sub.add_parser("ticket"); p.add_argument("kind", choices=["call", "approval"])
    p.add_argument("--entity", required=True); p.add_argument("--station", type=int, required=True)
    p.add_argument("--payload", required=True)
    p = sub.add_parser("debrief"); p.add_argument("call_id"); p.add_argument("--file", required=True)
    p = sub.add_parser("approve"); p.add_argument("apr_id"); p.add_argument("--by", default="operator")
    p = sub.add_parser("audit"); p.add_argument("--entity")
    p = sub.add_parser("kill"); p.add_argument("reason")
    sub.add_parser("resume")
    a = ap.parse_args()

    if a.cmd == "init":
        for c in COLLECTIONS + ["audit", "digest", ".idem"]:
            os.makedirs(os.path.join(STATE, c), exist_ok=True)
        scribe("init", root=ROOT)
        print(json.dumps({"status": "ready", "state": STATE}, indent=2))
    elif a.cmd == "map":
        reg = registry()
        r = jload(run_path(a.run), {"stations": {}})
        for s in reg["stations"]:
            if s["cadence"] == "merged":
                print(f"  ~{s['id']:>2}  {s['name']}"); continue
            st = r.get("stations", {}).get(str(s["id"]), {}).get("status", "pending")
            mark = {"done": "✔", "pending": "·", "blocked": "✖"}.get(st, "·")
            print(f"  {mark} {s['id']:>2}  {s['name']:<48} {s['owner'] or '':<26} {s['tier'] or ''}")
    elif a.cmd == "dispatch":
        print(json.dumps(dispatch(a.run), indent=2))
    elif a.cmd == "commit":
        env = json.load(sys.stdin) if a.file == "-" else jload(a.file)
        print(json.dumps(ledger_commit(env), indent=2))
    elif a.cmd == "ticket":
        pl = json.loads(a.payload)
        if a.kind == "call":
            print(json.dumps(create_call(a.entity, a.station, pl), indent=2))
        else:
            env = {"envelope_version": "1.0", "run_id": "run_main", "station": a.station,
                   "agent": "manual", "entity_type": "approvals", "entity_id": a.entity,
                   "action": pl.get("action", "commit_spend"), "payload": pl,
                   "provenance": {"derived_from": ["manual"], "method": "cli"},
                   "confidence": 1.0, "timestamp": now()}
            print(json.dumps(create_approval(env, pl.get("boundary", "manual")), indent=2))
    elif a.cmd == "debrief":
        print(json.dumps(debrief(a.call_id, open(a.file).read()), indent=2))
    elif a.cmd == "approve":
        print(json.dumps(approve(a.apr_id, a.by), indent=2))
    elif a.cmd == "queue":
        print(json.dumps(queue(), indent=2))
    elif a.cmd == "digest":
        print(digest(a.run))
    elif a.cmd == "audit":
        for r in audit(a.entity):
            print(json.dumps(r, sort_keys=True))
    elif a.cmd == "kill":
        open(KILL, "w").write(a.reason)
        scribe("killswitch.engaged", reason=a.reason)
        print(json.dumps({"status": "halted", "reason": a.reason}, indent=2))
    elif a.cmd == "resume":
        if os.path.exists(KILL):
            os.remove(KILL)
        scribe("killswitch.released")
        print(json.dumps({"status": "running"}, indent=2))


if __name__ == "__main__":
    main()
