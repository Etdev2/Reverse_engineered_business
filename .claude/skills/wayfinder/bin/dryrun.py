#!/usr/bin/env python3
"""
Dry run: one synthetic customer, one synthetic supplier, Station 1 -> 18.

Phone calls are stubbed as Call Tickets. Every boundary crossing is stubbed as
an Approval Ticket. Nothing is sent, nothing is paid, no credential exists.

Run:  python3 bin/dryrun.py
"""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import wf

RUN = "run_dry001"
OK, GATE, DUP, NO = "\033[32m✔\033[0m", "\033[33m⛔\033[0m", "\033[36m⇄\033[0m", "\033[31m✖\033[0m"


def env(station, agent, etype, eid, action, payload, derived, method, conf):
    return {"envelope_version": "1.0", "run_id": RUN, "station": station, "agent": agent,
            "entity_type": etype, "entity_id": eid, "action": action, "payload": payload,
            "provenance": {"derived_from": derived, "method": method},
            "confidence": conf, "timestamp": wf.now()}


def step(label, e):
    r = wf.ledger_commit(e)
    icon = {"committed": OK, "gated": GATE, "duplicate": DUP, "refused": NO}[r["status"]]
    extra = ""
    if r["status"] == "gated":
        extra = f"  -> {r['approval_id']} ({r['why']})"
    elif r["status"] == "refused":
        extra = f"  -> {r['why']}"
    print(f"  {icon} S{e['station']:<2} {label}{extra}")
    return r


def call(station, entity, payload):
    r = wf.create_call(entity, station, payload)
    if r["status"] == "open":
        print(f"  ☎  S{station:<2} Call Ticket {r['id']} — {payload['who'].split(',')[0]}")
    else:
        print(f"  {NO} S{station:<2} call refused: {r['why']} {r.get('missing','')}")
    return r


print(f"\n\033[1mWAYFINDER DRY RUN\033[0m  run={RUN}  charter=demurrage-detective\n")
print("UPSTREAM " + "-" * 60)

step("charter committed", env(1, "charter-clerk", "runs", RUN, "record_charter",
    {"charter": {"business": "Contingency ocean detention/demurrage invoice audit",
                 "serves": "Regional ocean freight forwarders, 10-100 staff, LA/LB + NY/NJ",
                 "will_not_do": ["customs classification opinions", "HTS recommendations",
                                 "door-knocking", "mobile apps", "offshore dev agencies"],
                 "capital_at_risk": 5000, "jurisdiction": "US",
                 "approval_threshold_usd": 0, "risk_tolerance": "low-irreversible/high-outbound",
                 "hours_per_week": 15}},
    ["charters/demurrage-detective.md"], "parsed", 1.0))

step("market sized, go/no-go", env(2, "demand-analyst", "runs", RUN, "record_market",
    {"market": {"competitors": [{"name": "Ocean Audit", "pricing": "20-30% contingency"},
                                {"name": "Intelligent Audit", "pricing": "20-30% contingency"}],
                "price_band_pct": [20, 30], "channels": ["PCC directory", "NCBFAA directory",
                                                          "Port of LA/LB motor carrier registry"],
                "seasonality": "Q3-Q4 peak season drives detention spikes",
                "go_no_go": "provisional-go, zero evidence",
                "evidence_refs": []}},
    ["docs/EVIDENCE_LOG.md", "runs/" + RUN], "computed", 0.55))

step("entity filing (gates: government)", env(3, "compliance-counsel", "runs", RUN, "file_gov_entity",
    {"compliance": {"entity_type": "LLC", "state": "CA"}},
    ["runs/" + RUN], "inferred", 0.8))

step("licence analysis + insurance", env(3, "compliance-counsel", "runs", RUN, "record_compliance",
    {"compliance_analysis": {
        "license_analysis": {"required": False,
            "reasoning": "Auditing a carrier invoice against terminal gate records and drafting a "
                         "billing dispute is a commercial billing matter between shipper and carrier. "
                         "It is not the filing of a customs entry, not classification of merchandise, "
                         "and not transacting customs business before CBP. VERIFY WITH COUNSEL.",
            "sources": ["19 CFR 111.1 (customs business definition)"]},
        "insurance_required": [{"type": "E&O / professional liability", "cover_usd": 500000}],
        "refusal_boundaries": ["no HTS advice", "no classification opinion", "no customs entry prep"]}},
    ["19 CFR 111.1"], "inferred", 0.6))

step("unit economics + margin floor", env(4, "economics-modeler", "runs", RUN, "record_offer",
    {"offer": {"contingency_pct": 25, "margin_floor_usd": 250, "walk_away_below_usd": 150,
               "cost_per_audit_usd": {"founder_hours": 180, "va": 95, "compute": 2,
                                      "followthrough": 35, "total": 312}}},
    ["runs/" + RUN], "computed", 0.7))

print("\nPARALLEL FAN-OUT (S5 + S7 dispatch together) " + "-" * 27)

step("supplier: ops assistant shortlisted", env(5, "supply-capacity-planner", "suppliers", "SUP-0001",
    "record_supplier",
    {"name": "Mira Santos", "role": "offshore ops assistant", "rate_usd_hr": 9.50,
     "timezone": "Asia/Manila", "nda": False, "status": "shortlisted",
     "data_sources": [{"name": "eModal gate history", "access": "client-exported CSV",
                       "format": "csv", "cost_usd": 0, "blocker": "client must export; we never take credentials"}],
     "parser_toolchain": ["python-pdfplumber", "pandas"],
     "audits_per_week_capacity": 3,
     "failure_modes": [{"mode": "scanned-image invoices", "mitigation": "request native format, then Call Ticket"},
                       {"mode": "missing gate timestamps", "mitigation": "drop container from scope, log coverage"},
                       {"mode": "carrier format drift", "mitigation": "parser regression set per carrier"}]},
    ["runs/" + RUN], "quoted", 0.75))

call(5, "SUP-0001", {
    "who": "Mira Santos, offshore operations assistant candidate",
    "number": "+63-2-5555-0188",
    "objective": "Agree an hourly rate and weekly hours for audit data entry, and get an NDA signed.",
    "learn": ["Actual availability in hours per week during our audit window",
              "Experience reading ocean carrier invoices and terminal gate reports",
              "Whether they will sign our NDA before touching client invoice data"],
    "must_not_concede": ["Rate does not exceed $12/hr — above that the Station 4 model breaks.",
                         "No client data moves before an NDA is signed."],
    "walk_away": "Above $12/hr, or unwilling to sign an NDA.",
    "brief": "Manila-based ops assistant, 4 years in freight back-office at a mid-size forwarder. "
             "Found via a logistics VA marketplace. Asking $9.50/hr. Timezone gives us overnight "
             "turnaround on audits, which fits a nights-and-weekends founder well.",
    "opening_line": "Hi Mira — thanks for the samples. I want to talk through hours and get the NDA squared away.",
    "fields_required": ["agreed_rate", "weekly_hours", "nda_signed", "start_date"]})

step("brand assets (reviewer passed)", env(7, "copywriter", "runs", RUN, "record_assets",
    {"assets": {"name": "Demurrage Detective", "reviewer_passed": True,
                "positioning_line": "We read your terminal gate logs against your carrier invoices "
                                    "and find the days you were billed for but didn't use.",
                "email_templates": [{"id": "cold-01", "subject": "who checks your demurrage invoices?"}],
                "claims_made": []}},
    ["runs/" + RUN], "computed", 0.8))

print("\nMIDSTREAM " + "-" * 59)

step("lead built from PCC directory", env(8, "outbound-operator", "leads", "LEAD-0001", "queue_sends",
    {"company": "Harbor Line Forwarding", "contact": {"name": "Dani Ramirez",
     "title": "Operations Manager", "phone": "+1-310-555-0142 x204"},
     "list_source": "Pacific Coast Council member directory",
     "sends_queued": [{"outbox_id": "OUT-0001", "domain": "harborlinefwd.example", "reviewer_passed": True}],
     "reviewer_passed": True, "capacity_checked_against": 3},
    ["runs/" + RUN, "PCC directory"], "parsed", 0.9))

step("qualified: score 78", env(9, "qualifier", "leads", "LEAD-0001", "score_lead",
    {"score": 78, "disqualified": False, "disqualify_reason": None,
     "enrichment": {"containers_month": 400, "billing_inhouse": True,
                    "carriers": ["Maersk", "MSC"]}},
    ["leads/LEAD-0001"], "inferred", 0.7))

c1 = call(9, "LEAD-0001", {
    "who": "Dani Ramirez, Operations Manager, Harbor Line Forwarding",
    "number": "+1-310-555-0142 x204",
    "objective": "Get them to send last month's Maersk invoices and matching terminal gate-out records for a free audit.",
    "learn": ["What is their exact step-by-step process today for disputing a demurrage charge with Maersk or MSC?",
              "Do carriers require the dispute to come from the email on the bill of lading, or will they accept a third-party auditor's address?",
              "Roughly how many containers a month, and who currently checks those invoices?"],
    "must_not_concede": ["The contingency rate does not go below 20% on this call.",
                         "We do not agree to file disputes under their name without written authorization."],
    "walk_away": "No files shared and no second call booked by end of the conversation.",
    "brief": "Regional forwarder, ~35 staff, LA/Long Beach drayage-heavy, ~400 containers/month. "
             "From the PCC member directory. Opened our second outbound email, did not reply. "
             "Billing is in-house, so the person who feels this pain is one desk from Dani.",
    "opening_line": "Hi Dani — quick one. Who checks your ocean invoices for demurrage overcharges right now?",
    "fields_required": ["dispute_process", "third_party_accepted", "monthly_containers", "files_promised", "next_step"]})

print("\n  [human does the call, returns three sentences]")
debrief_text = (
    "Talked to Dani for about 12 minutes. dispute_process: they email their Maersk rep directly and "
    "it usually dies there, no portal, nobody follows up. third_party_accepted: unknown, she thinks it "
    "has to come from their account but isn't sure and will check with their rep. monthly_containers: 400. "
    "files_promised: yes, sending March Maersk invoices and the eModal export Thursday. "
    "next_step: call back once we have run it.")
open("/tmp/debrief1.txt", "w").write(debrief_text)
d = wf.debrief(c1["id"], debrief_text)
print(f"  {OK} debrief parsed: {len(d['parsed'])} fields, unparsed={d['unparsed']}")
print(f"      third_party_accepted = \033[33m{d['parsed']['third_party_accepted'][:46]}...\033[0m  <-- debate Q2, still open")

step("quote built, margin check", env(10, "deal-desk", "quotes", "QTE-0001", "build_quote",
    {"lead": "LEAD-0001", "contingency_pct": 25, "margin_check_passed": True,
     "margin_arithmetic": {"expected_recovery": 2600, "fee": 650, "cost": 312, "net": 338, "floor": 250},
     "quote_amount_basis": "25% of confirmed recovery", "requires_signature": True},
    ["leads/LEAD-0001", "runs/" + RUN], "computed", 0.75))

step("agreement signature (gates: binding)", env(10, "deal-desk", "quotes", "QTE-0001", "sign_agreement",
    {"agreement_path": "state/outbox/AGR-0001.md", "signed": True},
    ["quotes/QTE-0001"], "computed", 0.9))

print("\nDOWNSTREAM " + "-" * 58)

step("documents requisitioned + received", env(11, "intake-coordinator", "engagements", "ENG-0001",
    "requisition_documents",
    {"client": "Harbor Line Forwarding", "quote": "QTE-0001",
     "documents_requested": [{"type": "carrier invoices", "period": "2026-03", "format": "csv"},
                             {"type": "terminal gate history", "period": "2026-03", "format": "csv"},
                             {"type": "container/BOL list", "period": "2026-03", "format": "csv"}],
     "documents_received": [{"type": "carrier invoices", "containers": 124, "usable": True},
                            {"type": "terminal gate history", "containers": 120, "usable": True},
                            {"type": "container/BOL list", "containers": 124, "usable": True}],
     "coverage_pct": 96.8, "chase_attempts": 1, "expected_turnaround_days": 5},
    ["quotes/QTE-0001", "calls/" + c1["id"]], "parsed", 0.9))

step("audit run: 7 findings, $4,180", env(12, "audit-engine", "findings", "FND-0001", "assemble_package",
    {"engagement": "ENG-0001", "containers_reviewed": 120,
     "discrepancies": [
        {"container": "MSKU7741203", "basis": "closure", "billed_days": 6, "owed_days": 2, "amount_usd": 1120, "confidence": 0.9},
        {"container": "MSKU8830114", "basis": "holiday", "billed_days": 4, "owed_days": 2, "amount_usd": 560, "confidence": 0.9},
        {"container": "MEDU5512907", "basis": "hold",    "billed_days": 9, "owed_days": 5, "amount_usd": 1240, "confidence": 0.85},
        {"container": "MSKU2214880", "basis": "free_time","billed_days": 5, "owed_days": 3, "amount_usd": 560, "confidence": 0.8},
        {"container": "MEDU9008771", "basis": "chassis", "billed_days": 3, "owed_days": 1, "amount_usd": 580, "confidence": 0.7},
        {"container": "MSKU1190043", "basis": "free_time","billed_days": 1, "owed_days": 0, "amount_usd": 70,  "confidence": 0.8},
        {"container": "MEDU4432019", "basis": "closure", "billed_days": 1, "owed_days": 0, "amount_usd": 50,  "confidence": 0.8}],
     "amount_at_issue_usd": 4180, "findings_below_threshold": 2,
     "dispute_package_path": "state/outbox/PKG-0001.md", "confidence": 0.82},
    ["engagements/ENG-0001", "suppliers/SUP-0001"], "computed", 0.82))

step("file dispute AS CLIENT (gates: identity)", env(13, "dispute-handler", "disputes", "DSP-0001",
    "file_dispute_as_client",
    {"engagement": "ENG-0001", "carrier": "Maersk", "amount_claimed_usd": 4060,
     "findings_filed": 5, "filed_by": "client"},
    ["findings/FND-0001"], "computed", 0.7))

print("\n  [human clears the open approvals]")
for apr in ["APR-0001", "APR-0002", "APR-0003"]:
    r = wf.approve(apr, "founder")
    if r["status"] == "approved":
        print(f"  {OK} {apr} approved -> replayed envelope {r['commit']['status']}")

step("carrier responded: PARTIAL $2,600", env(13, "dispute-handler", "disputes", "DSP-0001",
    "record_carrier_response",
    {"carrier_response": "partial", "amount_recovered_usd": 2600, "days_to_response": 19,
     "rejection_reason": "chassis-basis finding rejected; carrier disputes attribution",
     "evidence_log_row": "A4: Maersk, $4,060 claimed, filed by client, partial, 19 days, $2,600 recovered",
     "authorization_ref": "APR-0003"},
    ["disputes/DSP-0001"], "human-debrief", 0.95))

step("invoice on credit_confirmed", env(14, "collections", "invoices", "INV-0001", "issue_invoice",
    {"engagement": "ENG-0001", "trigger_event": "credit_confirmed", "amount": 650,
     "basis": {"recovered": 2600, "pct": 25}, "dunning_stage": 1,
     "paid_amount": 650, "paid_at": wf.now()},
    ["disputes/DSP-0001"], "computed", 0.95))

step("support: chassis finding withdrawn", env(15, "support-triage", "findings", "FND-0001",
    "triage_ticket",
    {"category": "carrier rejected a finding on basis grounds", "root_cause_station": 12,
     "resolution": "chassis-basis finding withdrawn in writing before carrier generalised the rejection",
     "reopened_entity": "FND-0001", "systemic": False},
    ["disputes/DSP-0001"], "computed", 0.85))

print("\nCLOSING THE LOOP " + "-" * 53)

step("monthly pack", env(16, "bookkeeper", "runs", RUN, "record_books",
    {"books": {"period": "2026-03",
               "pnl": {"revenue": 650, "cogs": 312, "opex": 0, "net": 338},
               "cash_position": {"opening": 5000, "in": 650, "out": 312, "closing": 5338,
                                 "capital_remaining": 4688},
               "contingent_not_recognised": 1460,
               "margin_by_engagement": [{"engagement": "ENG-0001", "modelled": 338, "actual": 338, "variance": 0}],
               "top_three_leaks": [{"leak": "chassis-basis findings rejected", "amount_usd": 580},
                                   {"leak": "2 findings below $150 filing threshold", "amount_usd": 120},
                                   {"leak": "4 containers lost to missing gate timestamps", "amount_usd": 0}]}},
    ["invoices/INV-0001", "runs/" + RUN], "computed", 0.9))

step("re-audit scheduled", env(17, "retention", "engagements", "ENG-0001", "schedule_reaudit",
    {"reorder_trigger": "monthly-invoice-cycle", "next_audit_due": "2026-04-15",
     "review_requested": True, "referral_asked": True, "recovered_to_date_usd": 2600},
    ["invoices/INV-0001"], "computed", 0.9))

step("retro: killed chassis basis", env(18, "retro-analyst", "runs", RUN, "record_retro",
    {"retro": {"period": "2026-03",
        "actual_vs_model": [{"engagement": "ENG-0001", "modelled": 338, "actual": 338,
                             "variance": 0, "cause": "model held on one engagement — n=1, not validation"}],
        "killed": [{"what": "chassis-attribution findings", "evidence": ["DSP-0001"],
                    "cost_to_learn_usd": 580}],
        "doubled": [{"what": "closure + holiday basis findings", "evidence": ["FND-0001"],
                     "new_allocation_usd": 0}],
        "playbooks_edited": [{"station": 12, "change": "cap chassis-basis confidence at 0.7 and exclude from first-package filings",
                              "justified_by": ["FND-0001", "DSP-0001"]}],
        "evidence_log_updates": ["A4", "A5", "score-revision"],
        "score_today_revisions": [{"candidate": "C1", "dimension": 13, "from": 3, "to": 6,
                                   "entry": "DSP-0001 — carrier paid $2,600 on a client-filed dispute"}],
        "stop_condition_met": False}},
    ["runs/" + RUN, "disputes/DSP-0001"], "computed", 0.8))

print("\nGUARANTEE CHECKS " + "-" * 53)
step("replay same invoice (idempotency)", env(14, "collections", "invoices", "INV-0001", "issue_invoice",
    {"engagement": "ENG-0001", "trigger_event": "credit_confirmed", "amount": 650,
     "basis": {"recovered": 2600, "pct": 25}, "dunning_stage": 1,
     "paid_amount": 650, "paid_at": wf.now()},
    ["disputes/DSP-0001"], "computed", 0.95))

bad = env(12, "audit-engine", "findings", "FND-0002", "assemble_package", {"amount_at_issue_usd": 900},
          [], "computed", 0.82)
bad["provenance"]["derived_from"] = []
del bad["confidence"]
print(f"  {NO} S12 envelope with no confidence  -> {wf.ledger_commit(bad)['errors']}")

wf.mark_station(RUN, 6, "done")
print(f"\n  kill switch test:")
os.system(f"python3 {os.path.join(os.path.dirname(os.path.abspath(__file__)),'wf.py')} kill 'dry-run halt test' >/dev/null")
r = wf.ledger_commit(env(17, "retention", "engagements", "ENG-0001", "schedule_reaudit", {"x": 1},
                         ["invoices/INV-0001"], "computed", 0.9))
print(f"  {NO} commit while halted -> {r['why']}")
os.system(f"python3 {os.path.join(os.path.dirname(os.path.abspath(__file__)),'wf.py')} resume >/dev/null")
print(f"  {OK} resumed\n")

print(wf.digest(RUN))
