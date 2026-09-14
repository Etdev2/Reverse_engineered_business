# Station 14 — Invoicing & Cash Collection

**Owner:** `collections` · **Tier:** haiku, escalating to opus at final stage · **Deps:** 13 · **Cadence:** per entity
**Next:** 16 (Books), 17 (Retention)

## Input contract
`{dispute: entity:disputes}`

## The trigger event — the thing that must not be got wrong
Invoice fires on **`carrier_response` in (`approved`, `partial`) with
`amount_recovered_usd` > 0.**

Not on findings. Not on filing. **On recovery.**

Invoicing a client for findings they never recovered is a contract breach under
the Station 10 agreement, and it is the fastest way to destroy a contingency
business. The runtime refuses a Station 14 commit whose `trigger_event` is not
`credit_confirmed`.

Note the partial case: a carrier **credit** counts as a recovery under the
Station 10 agreement even when no cash moves. That definition lives in the
agreement precisely because it is the most likely fee dispute.

## The dunning ladder
Automated by email. Escalates to a human voice only at the end.

| Stage | Day | Action |
|---|---|---|
| 1 | 0 | Invoice issued with the recovery evidence attached |
| 2 | 14 | Polite reminder, automated |
| 3 | 30 | Firmer reminder, automated, restates the recovery |
| 4 | 45 | Final notice, automated, references the agreement |
| 5 | 60 | **Call Ticket** — and only here |

## Done-condition
`paid_amount` equals `amount` (or a recorded, agreed variance), `paid_at` set. Or
the invoice reaches stage 5 and a Call Ticket exists. No invoice sits at stage 4
indefinitely.

## Output contract
```json
{"trigger_event": "credit_confirmed", "amount": 0, "basis": {"recovered":0,"pct":25},
 "sent_at": "iso", "dunning_stage": 1, "paid_amount": 0, "paid_at": null,
 "call_ticket_id": null}
```

## Escalation
- Client disputes the fee calculation → Station 15, do not advance the ladder
  while it is open. Dunning a client mid-dispute loses the account.
- Any refund → `refund` gates to an Approval Ticket.
- Carrier reverses a credit after we invoiced → **Approval Ticket**, then a
  credit note. Never silently adjust a sent invoice.
