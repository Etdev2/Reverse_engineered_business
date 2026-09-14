# Station 8 — Channel & Demand Generation

**Owner:** `outbound-operator` · **Tier:** haiku (volume) · **Deps:** 7, 2 · **Cadence:** continuous
**Next:** 9 (Qualification)

## Input contract
`{assets: ref:7, market: ref:2}`

## What this station does
Builds the list and runs the sequence. All email is automated; none of it is sent
by a human.

**Channel, per the charter:** Pacific Coast Council and NCBFAA member directories
(names, direct office numbers, emails of operations leadership); port authority
registries for NY/NJ and LA/LB. These are the reachable-without-introduction
channels. Cold door-knocking is a charter refusal.

**Target from Phase 5:** 20 forwarders contacted in the test window, 3 sharing
historical billing files.

## The capacity rule
Read Station 5's `audits_per_week_capacity` **before queueing sends.** Booking
more audits than capacity is a failure, not a win — it converts a scalable
service into a missed-deadline business at exactly the moment the first
customers are forming an opinion. If the sequence would exceed capacity, throttle
and log it.

## The stub
Nothing sends. Every message writes to `state/outbox/<id>.json` with recipient,
subject, body, and `reviewer_passed`. A human or a later adapter sends them.
**No email reaches a new external domain until the Reviewer passes it** — enforced
at commit: `sends_queued` entries with `reviewer_passed: false` are refused.

## Done-condition
`contacts_built` ≥ target; every queued send has `reviewer_passed: true`; no send
queued to a domain already in `state/leads/` with an open sequence (dedupe by
domain, not by address — two people at one forwarder receiving the same cold
email reads as spam).

## Output contract
```json
{"list_source": "str", "contacts_built": 0, "sequence": [{"step":0,"day":0,"template_id":""}],
 "sends_queued": [{"outbox_id":"","domain":"","reviewer_passed":true}],
 "reviewer_passed": true, "capacity_checked_against": 0}
```

## Escalation
- Mass email to the full list → `mass_email` gates. Sequenced outbound to
  individually-qualified contacts does not; a blast does.
- Capacity exceeded → throttle, log, surface in digest. Do not queue anyway.
- Bounce rate over 15% on a batch → stop the sequence, escalate. The list source
  is wrong and continuing damages the sending domain.
