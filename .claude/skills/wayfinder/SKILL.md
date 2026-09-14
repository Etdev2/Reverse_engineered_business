---
name: wayfinder
description: Run a business end-to-end as a supply chain of specialist agents, where the only human-performed step is a phone call. Use when the user wants to run, advance, or check on their business operation - "run the business", "run a cycle", "what's blocked", "what's in the call queue", "what needs approving", "start the sourcing", "kick off outbound", "I finished the call with X", "here's the debrief", "invoice that", "chase the carrier", "where are we on the audit", "daily digest", "kill the run", "stop everything". Also use when a business charter needs writing or a station playbook needs changing. Built for the Demurrage Detective charter (contingency ocean detention/demurrage invoice audit) but the station engine is charter-driven.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# Wayfinder

A business run as a supply chain. Raw signal in at one end, cash and a served
customer out the other, with a named station at every point between. Eighteen
stations, one specialist agent each, five cross-cutting agents above them.

**The one human rule: humans only do phone calls.** Everything else — research,
writing, email, quoting, ordering, scheduling, invoicing, follow-up, bookkeeping,
reporting — is done by an agent. When a task genuinely needs a human voice on a
live line, the swarm writes a Call Ticket and moves to work that isn't blocked.

**The human looks at exactly one thing: the queue.** If you ever have to open a
spreadsheet, chase an email, or remember something, this was built wrong.

## Run a cycle

```bash
cd .claude/skills/wayfinder
python3 bin/wf.py dispatch        # what is unblocked right now
python3 bin/wf.py map             # station status at a glance
python3 bin/wf.py queue           # the only thing a human reads
python3 bin/wf.py digest          # write this morning's digest
```

Then, for each station the dispatcher returns as ready: read
`stations/NN-*.md`, adopt the agent in `agents/<owner>.md`, do the work, and
commit the result as an envelope. **Never write to `state/` directly** — the
Ledger is the single writer:

```bash
python3 bin/wf.py commit envelope.json
```

Everything unblocked runs **in parallel**. Sourcing does not wait on brand.
Bookkeeping does not wait on sales. The Dispatcher is measured on how few
stations sit idle.

## The routing table

| The user says | Do this |
|---|---|
| "run the business", "run a cycle" | `dispatch`, then work every ready station in parallel |
| "what's blocked", "where are we" | `dispatch` + `map`, report blocked stations and what each waits on |
| "what's in the call queue", "what do I need to do" | `queue` — read back only calls and approvals |
| "I finished the call with X", "here's the debrief" | `debrief CALL-000N --file notes.txt`, then `dispatch` to resume |
| "approve that", "go ahead", "yes" on a pending ticket | `approve APR-000N --by <name>` |
| "start the sourcing" / "kick off outbound" / any station by name | read that station's playbook, run it if its deps are met |
| "daily digest", "what moved" | `digest` and read the file back |
| "stop", "kill it", "halt everything" | `kill "<reason>"` — halts every station |
| "why was this customer quoted that" | `audit --entity <ID>` — reconstruct from the log |

## Before you touch anything

1. **Read the charter.** `charters/demurrage-detective.md` holds the live one.
   Constraints there are binding, not advisory.
2. **Check the kill switch.** If `state/KILL` exists, nothing runs. Say so and stop.
3. **Least privilege.** Adopt exactly one agent spec per station. A copywriter
   never touches payment actions; a bookkeeper never sends outbound mail. The
   agent spec's tool list is the whole permission set.
4. **Never fabricate a number.** Every figure entering state carries provenance —
   what it was derived from and by what method. A number with no source is a
   refusal, not a guess.

## Hard boundaries (refusals, not suggestions)

These never auto-execute. The runtime gates them in `GATED_ACTIONS` and opens an
Approval Ticket; a human clears it with one word.

- Moving money — payments, transfers, payroll, refunds. **Threshold is $0:** every
  money movement gates, regardless of size.
- Signing anything binding — contracts, leases, terms, credit applications.
- Entering credentials, card numbers, or government IDs anywhere.
- Filing with a government body (tax, entity, permits, customs).
- Anything publicly irreversible under the business's name — press release,
  public post, mass email to the full list.
- **Filing a carrier dispute under the client's name.** Charter-specific. It is
  the account holder's identity, and it may be the only filing path that works —
  which makes it both the likely mechanism and a thing that must never auto-fire.

Plus: no email to a new external domain until the Reviewer passes it; a global
kill switch; and any agent that would loop more than 3 times on one task
escalates instead of retrying (`RETRY_BUDGET` in `bin/wf.py`).

**Hard refusal, no ticket:** never issue a customs classification opinion, an HTS
code recommendation, or anything presentable as licensed customs-broker advice.
This is not a threshold — it is outside the business. See `stations/03-*.md`.

## Files

| Path | What it is |
|---|---|
| `charters/` | the live business definition — read first |
| `stations/NN-*.md` | one playbook per station: input, owner, done-condition, output, next |
| `stations/stations.json` | the registry the Dispatcher actually reads |
| `agents/*.md` | one spec per specialist: charter, tier, tools, contracts, escalation |
| `schemas/` | the handoff envelope and every input/output contract |
| `runbooks/` | call ticket, approval ticket, escalation, kill switch |
| `bin/wf.py` | the deterministic spine: Ledger, Dispatcher, Watchdog, Scribe |
| `state/` | the live business — one file per entity, append-only audit log |

Station 18 (Retro) is the **only** agent permitted to edit another station's
playbook. Everything else treats `stations/` as read-only.
