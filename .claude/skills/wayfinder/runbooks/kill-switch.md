# Kill Switch

```bash
python3 bin/wf.py kill "carrier sent a legal letter, stop all filings"
python3 bin/wf.py resume
```

Writes `state/KILL`. While that file exists:

- `ledger_commit()` refuses **every** commit and logs `refused.killswitch`.
- `dispatch()` returns `halted: true` with an empty ready list.
- Nothing in `state/outbox/` is sent.

Reads still work — `queue`, `audit`, `digest` and `map` all function while
halted, so you can see what you stopped without restarting it.

## When to pull it

- A carrier or client threatens legal action.
- A finding turns out to be systematically wrong and disputes are already out.
- An agent is producing output you don't recognise.
- You are about to be unreachable and there are open approvals.

## Restarting

`resume` deletes the file and logs `killswitch.released`. **Idempotency markers
survive the halt** — anything already committed will not re-fire on resume. That
is the whole point: a kill-and-restart is safe, and a nervous operator should
pull it early rather than reason about consequences.

Check what was in flight before resuming:

```bash
python3 bin/wf.py audit | tail -30
python3 bin/wf.py queue
```
