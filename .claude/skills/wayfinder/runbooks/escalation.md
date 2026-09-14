# Escalation

An agent escalates instead of retrying. Looping is the failure mode this
prevents: three attempts at the same task burn budget and produce three
subtly different wrong answers.

## Retry budget

`RETRY_BUDGET = 3` in `bin/wf.py`. The fourth attempt on the same station in the
same run logs `escalated.retry_budget` and returns `None` from `attempt()`. The
station stops. It does not try again with a different prompt.

## The escalation ladder

| Condition | Becomes |
|---|---|
| Needs a human voice on a live line | **Call Ticket** |
| Crosses a hard boundary | **Approval Ticket** |
| Confidence below 0.6 on a money or external-facing figure | **Approval Ticket**, with the low confidence stated |
| Required input missing and not derivable | Blocked entity + digest line. Never invent the input. |
| Retry budget exhausted | Halt that station, log, surface in digest |
| Two agents disagree on the same entity | Ledger holds the first commit; second gets `duplicate`. Reviewer arbitrates. |
| Outside the business (classification opinions) | **Hard refusal.** No ticket. Log and stop. |

## Confidence discipline

`confidence` is not decoration. It governs routing:

- **≥ 0.8** — commit.
- **0.6–0.8** — commit, but the Reviewer sees it before anything external ships.
- **< 0.6 on money or anything external-facing** — do not commit. Escalate.

A number you cannot source has confidence 0, not 0.5. `provenance.derived_from`
being empty is itself a validation failure.

## What escalation is not

It is not a way to hand the human work. The human does **phone calls**. If you
find yourself writing a ticket that asks a person to look something up, read a
document, or make a spreadsheet — that is a station's job that has not been
built yet. Write it into `stations/` via Station 18 instead.
