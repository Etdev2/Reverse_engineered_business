# Station 13 — Dispute Filing & Carrier Credit Confirmation

**Owner:** `dispute-handler` · **Tier:** opus · **Deps:** 12 · **Cadence:** per entity
**Next:** 14 (Invoicing), 15 (Support)

> **Renamed** from "Shipping, Customs & Delivery Confirmation." Same shape:
> dispatch the thing, confirm it arrived, confirm it was accepted, handle
> exceptions. What ships is a dispute; proof of delivery is a carrier credit.

## ⚠ This station is the weakest link in the business

Its done-condition **is** the charter's load-bearing assumption:

> Ocean carriers will pay out refund claims based on third-party audits, without
> requiring legal representation or direct API integration.

Phase 4 ruled this **UNRESOLVED-NEEDS-EVIDENCE**. Nothing downstream — Station 14
invoicing, Station 16 books, the entire revenue model — completes until this
station succeeds at least once. **Treat every filing as an experiment that
produces evidence, not as a routine step that produces cash.**

## Input contract
`{findings: entity:findings}`

## What this station does
1. Select findings above threshold with a valid basis.
2. Determine the **filing path** — the unresolved variable:
   - `third_party` — from our address, as the client's authorized auditor.
   - `client` — drafted by us, sent from the client's account holder address.
   Per debate Q2, `client` may be the only path carriers accept. It is also the
   path that puts fee pressure on Station 10's contingency.
3. Respect the carrier's dispute window — **15–30 days from invoice date**, per
   carrier. A finding outside its window is dead; record it as such rather than
   filing and being rejected.
4. File (stubbed → `state/outbox/`), then track.
5. Chase on a ladder: day 7, day 14, day 21.
6. **Record the outcome to `docs/EVIDENCE_LOG.md` §A4 on every filing** — including
   rejections and silence. A rejection is a result; an unlogged filing is not.

## The hard boundary
Filing **under the client's name** is `file_dispute_as_client` and **gates to an
Approval Ticket, every time.** It is the account holder's identity. Written
authorization from Station 3 must exist before the ticket is even raised.

## Done-condition
Every filed finding reaches a terminal state: `approved`, `rejected`,
`partial`, or `expired-window`. `days_to_response` recorded. `evidence_log_row`
written. Silence past day 21 is a terminal state named `no_response`, not an
open item that drifts.

## Output contract
```json
{"filed_by": "third_party|client", "filed_at": "iso", "carrier": "str",
 "amount_claimed_usd": 0, "carrier_response": "approved|rejected|partial|no_response|expired-window",
 "rejection_reason": "str", "days_to_response": 0, "amount_recovered_usd": 0,
 "evidence_log_row": "A4:str", "authorization_ref": "APR-0001"}
```

## Escalation
- Filing as the client → Approval Ticket. Always.
- Carrier demands the account holder file → **this is the answer to debate Q2.**
  Write it to `EVIDENCE_LOG.md` §A5 Q2 verbatim, flag to Station 10 that fee
  pressure is now expected, and surface it in the digest as a business-model event.
- Carrier rejects on basis grounds → route to Station 15, root cause back to 12.
- Carrier threatens legal escalation → **kill switch**, then Call Ticket.
- Three consecutive rejections on the same basis type → stop filing that basis,
  escalate to Station 18. The model is wrong, not the paperwork.
