# Station 3 — Entity, Compliance & Insurance

**Owner:** `compliance-counsel` · **Tier:** opus · **Deps:** 1 · **Cadence:** once
**Next:** 10 (Deal) — the agreement cannot be drafted before this completes.

## Input contract
`{charter: ref:1}`

## What this station does
Establishes what must legally exist before a dollar is taken, and outputs the
filing checklist **as Approval Tickets** — never as completed filings.

1. Entity form and state.
2. **The licence question** (below) — the single most important output.
3. E&O / professional liability insurance: does auditing another company's
   invoices and drafting their disputes create exposure, and at what cover.
4. The contingency-fee agreement's required terms: fee basis, what counts as a
   recovery, what happens if the carrier credits rather than refunds, termination.
5. Client data handling — carrier invoices are confidential commercial data.

## The licence question
`license_analysis` must state explicitly whether a US Customs Broker Licence is
required, and why. The working position, which this station must verify rather
than inherit:

> Auditing a carrier's *invoice* against *terminal gate records* and drafting a
> billing dispute is a commercial billing matter between shipper and carrier. It
> is not the filing of a customs entry, not the classification of merchandise,
> and not the transaction of customs business on behalf of an importer before
> CBP. The licence requirement attaches to the latter.

If verification finds otherwise, this is a **kill**, not a constraint — and it
must be reported as one. It is the same failure that killed Candidate 2.

## Done-condition
`license_analysis` non-null and reasoned, not asserted. Every item in
`filings_required` has a corresponding Approval Ticket id. `refusal_boundaries`
restates the charter's hard refusals in checkable form.

## Output contract
```json
{"entity_type": "str", "filings_required": [{"what":"","approval_id":""}],
 "insurance_required": [{"type":"","cover_usd":0}],
 "license_analysis": {"required": false, "reasoning": "str", "sources": ["str"]},
 "refusal_boundaries": ["str"]}
```

## Escalation
- Any government filing → Approval Ticket. Always. `file_gov` gates in the runtime.
- Licence analysis lands ambiguous → **Call Ticket to a customs attorney.** This is
  a legitimate phone call: it is a live conversation with a professional, and it
  is cheaper than being wrong.
- Anything asking this station to opine on classification → hard refusal, no ticket.
