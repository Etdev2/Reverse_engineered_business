# Station 10 — Quote, Proposal & Contract

**Owner:** `deal-desk` · **Tier:** opus · **Deps:** 9, 4, 3 · **Cadence:** per entity
**Next:** 11 (Intake)

Depends on **3** as well as 4 and 9: no agreement is drafted before the compliance
station has settled the licence question and the required contract terms.

## Input contract
`{lead: entity:leads, offer: ref:4, compliance: ref:3}`

## What this station does
Builds the quote from Station 4's unit economics, generates the proposal, routes
for signature, and **guards the margin floor**.

### The margin floor guard
Hard-checked before commit:
- `contingency_pct` ≥ 20 (charter floor). Below → refuse, do not negotiate down.
- Expected recovery × contingency − cost per audit ≥ `margin_floor_usd` ($250).
- Below → the walk-away line from the charter, verbatim. Not a discount.

The Phase 4 debate predicted exactly this pressure: *if the client's clerk sends
the emails, the forwarder will demand a lower contingency.* That prediction is
why the floor is hard-coded rather than left to judgement in the moment.

### The agreement
Contingency-fee terms from Station 3. Must specify: what counts as a recovery
(a carrier **credit** counts, not only a cash refund — this is the most likely
dispute), the fee basis, what happens on partial recovery, termination, and
confidentiality of the client's carrier invoices.

## Done-condition
`margin_check_passed: true` with the arithmetic recorded in provenance.
`agreement_path` exists. `requires_signature: true` — and the signature itself is
an **Approval Ticket**, because `sign` gates.

## Output contract
```json
{"quote_amount_basis": "str", "contingency_pct": 25, "margin_check_passed": true,
 "margin_arithmetic": {"expected_recovery":0,"fee":0,"cost":0,"net":0,"floor":250},
 "proposal_path": "path", "agreement_path": "path", "requires_signature": true}
```

## Escalation
- Client counters below 20% → walk away with the charter line. Not a ticket; a
  refusal the agent executes itself.
- Client counters between 20–25% → commit at the countered rate if the margin
  check still passes. This is inside the agent's authority.
- Signature → `sign` gates to an Approval Ticket. Always.
- Client wants us to file disputes under their name → **do not agree on the fly.**
  That is `file_dispute_as_client`, it gates, and it needs written authorization
  drafted by Station 3.
