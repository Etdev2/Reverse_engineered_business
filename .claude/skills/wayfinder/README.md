# Wayfinder — operating this with only a phone

A business run as a supply chain of specialist agents. **You do phone calls.
The swarm does everything else.**

If you ever find yourself opening a spreadsheet, chasing an email, or trying to
remember something — that is a bug in this system, not a task for you. Report it
and it becomes a station.

## Your entire job

```bash
cd .claude/skills/wayfinder
python3 bin/wf.py queue
```

That prints two lists and nothing else:

- **Calls** — people to ring, with everything you need to ring them.
- **Approvals** — things the swarm refuses to do without one word from you.

Clear them. The chain resumes on its own.

## The three commands you actually use

```bash
python3 bin/wf.py queue                            # what needs me
python3 bin/wf.py debrief CALL-0002 --file notes.txt   # after a call
python3 bin/wf.py approve APR-0003 --by matt       # clear a boundary
```

Then, if you want to see what happened:

```bash
python3 bin/wf.py digest && cat state/digest/$(date +%F).md
```

## Doing a call

The ticket has everything: who, the number, one objective, three things to learn,
two things not to concede, your walk-away number, a 60-second brief, and an
opening line. It also lists `fields_required` — the things the chain needs back.

Afterwards write three sentences. Anywhere in them, put the required fields as
`field: value`:

> Talked to Dani. dispute_process: they email their Maersk rep and it dies there.
> third_party_accepted: unknown, she'll check. monthly_containers: 400.
> files_promised: yes, Thursday. next_step: call back after we run it.

A voice note works too — transcribe it and pass the text. Anything the parser
can't find shows up as `unparsed_fields` in the next digest rather than
disappearing.

## Clearing an approval

Six things never happen without you: **money moving, signing anything,
credentials, government filings, anything public and irreversible, and filing a
carrier dispute under a client's name.** The threshold is **$0** — every money
movement stops, regardless of size, because $5,000 is the whole stake.

When you approve, the runtime replays *the exact request that was blocked*.
What you approved is what happens.

Nothing ever auto-approves on a timer. If you go quiet, the business stops. That
is intentional and it is the safe direction to fail in.

## Stopping everything

```bash
python3 bin/wf.py kill "carrier sent a legal letter"
python3 bin/wf.py resume
```

Pull it early rather than reasoning about consequences — work already done is
not repeated on resume, so a kill-and-restart is safe.

## Answering "why did you quote them that?"

```bash
python3 bin/wf.py audit --entity QTE-0001
```

Every decision, who made it, what it derived from, and how confident it was. The
whole business is reconstructible from `state/audit/log.ndjson`.

## Try it

```bash
python3 bin/dryrun.py
```

Runs one synthetic customer and one synthetic supplier from Station 1 to Station
18 — including the gates, both call tickets, an idempotent replay, a rejected
envelope, and the kill switch.

## What is stubbed

Everything external. No email sends, no payments, no e-signature, no credentials
anywhere in this system. Outbound writes to `state/outbox/` as files. Wiring a
real adapter is a change at one seam per station, and the boundary gates sit
above that seam — they hold whether the adapter is a stub or live.

## The one thing to know about this business

Station 13 — getting a carrier to actually pay a third-party audit — is
unproven. Phase 4 ruled it **UNRESOLVED-NEEDS-EVIDENCE**, and every dollar
downstream depends on it. The swarm is built to *test* that assumption and log
what comes back, not to assume it. Read `charters/demurrage-detective.md` before
your first call, and treat the first three engagements as the experiment they are.
