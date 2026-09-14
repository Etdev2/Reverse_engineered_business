# Station 5 — Input Supply & Capacity

**Owner:** `supply-capacity-planner` · **Tier:** sonnet · **Deps:** 4 · **Cadence:** per cycle
**Next:** 12 (Audit Production)

> **Merged station.** This absorbs Station 6 (Capacity & Logistics Plan). Reason:
> with no physical goods, input sourcing and throughput planning share one
> done-condition — *can we run N audits a week and where do the inputs come from.*
> Splitting them produced two playbooks with the same output. See `06-MERGED.md`.

## Input contract
`{offer: ref:4}`

## What this station does
There is no goods supplier. The inputs to this business are **data and hands**:

1. **Data sources** — terminal portals (eModal / Advent eModal) for gate-out and
   gate-in history; the client's own carrier invoices; carrier free-time rules
   and tariff schedules per carrier. Establish for each: access method, format,
   cost, and whether access is the client's to grant.
2. **The offshore ops assistant** — discover, qualify, and shortlist. Rate,
   hours, timezone overlap, NDA. Negotiation is a **Call Ticket**.
3. **Parser toolchain** — what actually reads a terminal PDF and a carrier CSV.
   Per charter: Python parsing, no agency, no mobile.
4. **Capacity** — audits per week sustainable on 15 founder hours plus the VA.
   This is the real constraint on Station 8's outbound volume, and Station 8 must
   read it. Outbound that books more audits than capacity is a failure, not a win.
5. **Failure modes** — scanned-image invoices with no extractable text, missing
   timestamps, terminal portal access the client won't delegate, format drift.

## Done-condition
`audits_per_week_capacity` is a number derived from stated hours, not asserted.
Every data source has an access method **and** a named blocker or "none". At
least two VA candidates shortlisted with rates. `failure_modes` has ≥3 entries
with a mitigation each.

## Output contract
```json
{"data_sources": [{"name":"","access":"","format":"","cost_usd":0,"blocker":""}],
 "va_candidates": [{"name":"","rate_usd_hr":0,"timezone":"","nda":false}],
 "parser_toolchain": ["str"], "audits_per_week_capacity": 0,
 "failure_modes": [{"mode":"","mitigation":""}],
 "lead_times": {"portal_access_days":0,"va_onboard_days":0}}
```

## Escalation
- VA rate negotiation → **Call Ticket**.
- Terminal portal requires credentials → **hard boundary.** Agents never enter
  credentials. The client grants access under their own login, or the client
  exports and sends the file. Never an approval ticket — a redesign.
- Capacity below what Station 8 has already queued → escalate to Dispatcher and
  throttle Station 8. Overselling capacity is the failure mode that kills service
  businesses.
