# Station 9 — Lead Qualification & Routing

**Owner:** `qualifier` · **Tier:** sonnet · **Deps:** 8 · **Cadence:** per entity
**Next:** 10 (Deal)

**This station is the main producer of Call Tickets.**

## Input contract
`{lead: entity:leads}`

## What this station does
Scores, enriches, disqualifies ruthlessly, and books the call.

### Scoring (0–100)
| Signal | Weight | Why |
|---|---|---|
| Monthly container volume | 30 | Directly sets recoverable dollars. Under ~100/mo, findings can't clear the margin floor. |
| Handles own billing in-house | 25 | If billing is outsourced, the pain is someone else's and so is the decision. |
| Carrier mix includes Maersk/MSC/CMA CGM | 20 | >50% of import volume; our parsing is built for these first. |
| Named ops or billing lead reachable | 15 | Channel advantage is direct reach. No name, no call. |
| Prior engagement signal (opened, replied) | 10 | Weak but real. |

### Disqualify ruthlessly
Disqualification is a **success**, not a failure. A low score with no call booked
is the correct output and must not be reported apologetically.

Auto-disqualify: volume under 100 containers/month · billing fully outsourced to a
3PL · already contracted with Ocean Audit or Intelligent Audit · no named contact
· non-US jurisdiction.

**Score ≥ 60 and not disqualified → write a Call Ticket.** Below 60 → commit the
disqualification with its reason and stop. Never book a call to be polite.

## Done-condition
Every lead reaches a terminal state: `disqualified: true` with a non-null reason,
**or** a `call_ticket_id` exists. No lead sits in limbo. The Watchdog flags any
lead with neither after 72h.

## Output contract
```json
{"score": 0, "disqualified": false, "disqualify_reason": null,
 "enrichment": {"containers_month":0,"billing_inhouse":true,"carriers":["str"],"contact":{"name":"","title":"","phone":""}},
 "call_ticket_id": "CALL-0001"}
```

## Escalation
- Enrichment can't establish volume or billing arrangement → that is what the call
  is **for**. Write the ticket with the gap in `learn`. Do not guess the score.
- Inbound lead arriving already asking to buy → still qualify. An unqualified
  eager buyer below the margin floor is the most expensive customer there is.
