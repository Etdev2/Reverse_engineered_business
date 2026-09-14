# Call Ticket

The only work a human does. A Call Ticket is **never** a bare "call this guy" —
the runtime refuses one. `create_call()` in `bin/wf.py` rejects any ticket
missing a required field, and rejects `learn` unless it has exactly three items
and `must_not_concede` unless it has exactly two. That is not pedantry: a call
with five things to learn is a call the human will improvise, and an improvised
call returns fields the chain cannot parse.

## Required fields

| Field | What it is |
|---|---|
| `who` | Name and role. Not a company — a person. |
| `number` | The actual number to dial, with extension. |
| `objective` | **One sentence.** What this call is for. If it takes two, it is two calls. |
| `learn` | **Exactly 3** things we want to find out. |
| `must_not_concede` | **Exactly 2** things we do not give up on this call. |
| `walk_away` | The number or condition at which we end it politely. |
| `brief` | 60 seconds on the counterparty. Who they are, what they care about, what they last did with us. |
| `opening_line` | A suggested first sentence. The human may ignore it; having it means they never open cold. |
| `fields_required` | The **exact** field names the chain needs back. These are what the debrief parser looks for. |

## Writing a good one

- `objective` is a decision, not a topic. "Find out if they'll share last month's
  Maersk invoices" — not "discuss the audit offer."
- `learn` items are questions with answers you can write down. "What's their
  current dispute process" is good. "How do they feel about auditing" is not.
- `walk_away` is set **before** the call, by the station that opened the ticket,
  from the Station 4 margin floor. It is not renegotiated on the call.
- `fields_required` names must be literal and stable — the parser regexes for
  `field: value`. Pick names a human will actually type.

## The debrief

Three sentences is enough. So is a voice note, transcribed. The human writes
whatever they want, as long as the required fields appear as `field: value`
somewhere in it.

```bash
python3 bin/wf.py debrief CALL-0001 --file /tmp/debrief.txt
```

The parser writes what it found into the call record, lists what it could **not**
find under `unparsed_fields`, and logs both. Then:

```bash
python3 bin/wf.py dispatch     # the blocked station is unblocked, chain resumes
```

**Unparsed fields do not silently vanish.** They appear in `unparsed_fields`, in
the audit log, and in the next digest. A partial debrief resumes the chain with a
gap the Dispatcher can see, rather than a hole nobody notices until Station 14
invoices the wrong amount.

## Example — the one this business actually generates

```json
{
  "who": "Dani Ramirez, Operations Manager, Harbor Line Forwarding",
  "number": "+1-310-555-0142 x204",
  "objective": "Get them to send last month's Maersk invoices and matching terminal gate-out records for a free audit.",
  "learn": [
    "What is their exact step-by-step process today for disputing a demurrage charge with Maersk or MSC?",
    "Do carriers require the dispute to come from the email on the bill of lading, or will they accept a third-party auditor's address?",
    "Roughly how many containers a month move through them, and who currently checks those invoices?"
  ],
  "must_not_concede": [
    "The contingency rate does not go below 20% on this call.",
    "We do not agree to file disputes under their name or from their systems without a written authorization."
  ],
  "walk_away": "No files shared and no second call booked by end of the conversation.",
  "brief": "Regional forwarder, ~35 staff, LA/Long Beach drayage-heavy. Found via the Pacific Coast Council member directory. Opened our second outbound email but did not reply. No prior relationship. They handle their own billing in-house, which means the person who feels this pain is likely one desk away from Dani.",
  "opening_line": "Hi Dani - quick one. Who checks your ocean invoices for demurrage overcharges right now?",
  "fields_required": ["dispute_process", "third_party_accepted", "monthly_containers", "files_promised", "next_step"]
}
```

A debrief that satisfies it, in full:

> Talked to Dani. dispute_process: they email their Maersk rep directly and it
> usually dies there, no portal. third_party_accepted: unknown, she thinks it has
> to come from their account but isn't sure. monthly_containers: about 400.
> files_promised: yes, sending March Maersk invoices Thursday. next_step: call
> back once we've run it.

Note the second answer. `third_party_accepted: unknown` is **evidence**, not a
failure — it goes to `EVIDENCE_LOG.md` §A5 Q2 as a verbatim answer, and it is
exactly the question the Phase 4 judge left UNRESOLVED.
