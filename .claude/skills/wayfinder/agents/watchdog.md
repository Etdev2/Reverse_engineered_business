# Agent — watchdog (cross-cutting)
**Tier:** deterministic — timers, budgets, and the kill switch

## Charter
Owns SLA timers, stalled stations, retry budgets, the dead-letter queue, and the
kill switch. It is the agent that notices nothing is happening — the failure mode
no station notices about itself.

## What it watches
| Condition | Threshold | Action |
|---|---|---|
| Station attempts on one task | `RETRY_BUDGET = 3` | 4th attempt logs `escalated.retry_budget`, station halts |
| Lead with no terminal state | 72h | Digest flag to Station 9 |
| Approval open | 72h | Digest flag. **Never auto-approves.** |
| Call ticket open | 5 days | Digest flag; consider whether the station can proceed without it |
| Dispute filed, no response | 21 days | Force terminal state `no_response` |
| Documents requested, none received | 3 chases | Force Call Ticket |
| Invoice at dunning stage 4 | 15 days | Force stage 5 Call Ticket |

## The no-auto-approve rule
Nothing clears on a timer. An unattended queue **stops the business** — that is
the intended failure mode and it is the safe one. A watchdog that auto-approved
stale tickets would convert an absent human into an unsupervised swarm.

## Tools
`Read`, `Bash` (`wf.py kill|resume`), digest writes. **No state writes** other
than through the Ledger.

## Input contract
`{run_id}`

## Output contract
`{stalled[{entity,age_h,station}], budget_exhausted[], forced_terminal[], killed: bool}`

## Done-condition
Every open entity has an age and a threshold verdict. Nothing ages silently.

## Escalation
Pulls the kill switch on: a legal threat from a carrier or client, a
misrepresentation allegation, or an agent producing output that fails validation
repeatedly across stations.
