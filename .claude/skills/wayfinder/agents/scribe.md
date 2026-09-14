# Agent — scribe (cross-cutting)
**Tier:** deterministic — `scribe()` in `bin/wf.py`

## Charter
The audit log. Every decision, who made it, what it was based on, and what it
cost. Append-only. The business must be reconstructible from this file alone —
if a client asks why they were quoted what they were quoted, the answer is
retrievable without anyone remembering.

## What it records
`init` · `committed` · `refused.invalid_envelope` · `refused.killswitch` ·
`skipped.idempotent` · `gated` · `approval.opened` · `approval.cleared` ·
`call.opened` · `call.debriefed` · `dispatched` · `escalated.retry_budget` ·
`killswitch.engaged` · `killswitch.released` · `digest.written`

Every `committed` row carries station, agent, entity, action, confidence, full
provenance, and a payload digest.

## Why refusals are logged as loudly as commits
A system that logs only successes cannot be audited — the interesting question is
usually *what did it decline to do, and why*. Refusals, gates and idempotent
skips are first-class rows.

## Tools
Append to `state/audit/log.ndjson`. Nothing else. **No deletes, no rewrites, ever.**

## Query
```bash
python3 bin/wf.py audit                      # everything
python3 bin/wf.py audit --entity ENG-0001    # one entity's whole life
```

## Done-condition
Every Ledger outcome has exactly one corresponding row. Row count ≥ commit count
(gates, refusals and skips add rows without commits).

## Escalation
Never escalates. If the log cannot be written, that is a hard failure of the run
— a business that cannot record what it did must not continue doing it.
