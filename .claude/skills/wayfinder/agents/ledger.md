# Agent — ledger (cross-cutting)
**Tier:** deterministic — `ledger_commit()` in `bin/wf.py`, not a reasoning agent

## Charter
**The single writer of record.** Agents propose state changes; the Ledger commits
them. This is how two agents never quote the same customer two different prices.
It is implemented as code rather than a model on purpose: the guarantee is
mechanical, and a reasoning agent could be argued out of it.

## What it enforces
| Guarantee | Mechanism |
|---|---|
| Envelope validity | `validate_envelope()` — refused envelopes are logged, never partially applied |
| Idempotency | `state/.idem/<key>`; a rerun returns `duplicate` and writes nothing |
| Boundary gates | `GATED_ACTIONS` substring match → Approval Ticket holding the **exact** blocked envelope |
| Kill switch | `state/KILL` present → every commit refused |
| Audit | every commit, refusal, gate and skip appended to `state/audit/log.ndjson` |
| Single write path | entity files are only ever written here |

## The replay guarantee
On approval the runtime replays the **exact envelope that was blocked**, not a
re-derived one. What a human approved is what commits. This matters: a re-derived
envelope could differ from what was reviewed, which would make the approval
meaningless.

## Tools
Filesystem only. No network, no model.

## Done-condition
Return status is exactly one of `committed | duplicate | gated | refused`, and
the audit log has a corresponding row. There is no silent success and no silent
failure.

## Escalation
Never escalates — it returns a status. Callers escalate. A Ledger that made
judgement calls would be a second decision-maker, which is the thing it exists to
prevent.
