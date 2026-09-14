# Station 12 — Audit Production & Dispute Assembly

**Owner:** `audit-engine` · **Tier:** sonnet · **Deps:** 11, 5 · **Cadence:** per entity
**Next:** 13 (Dispute Filing)

> **Renamed** from "Production / Fulfillment Tracking." This is the core
> production station — where the thing being sold is actually made.

## Input contract
`{engagement: entity:engagements, capacity: ref:5}`

## What this station does
Parses, matches, finds, and assembles. This is the founder's Zero-API workaround
(Moat #4) in mechanical form: no carrier integration, just files.

0. **Compliance check first.** Since the FMC final rule (effective 28 May 2024), a D&D
   invoice must carry **20 required data elements**; omitting any of them eliminates the
   billed party's obligation to pay that charge. Check this **before** any operational
   analysis — it is binary, it is the cheapest finding to produce, and it is the hardest
   for a carrier to contest.
1. **Parse** terminal gate history → container, gate-out ts, gate-in ts, terminal.
2. **Parse** carrier invoice → container, charge type, days billed, rate, amount.
3. **Match** on container number + date window.
4. **Recompute** free time from the carrier's own published rules, adjusted for:
   - terminal closures (weekends, holidays, published closures)
   - container holds (customs, line, terminal)
   - chassis shortage attributable to the carrier
   - the carrier's own tariff free-time grant for that contract
5. **Diff** billed days against recomputed owed days.
6. **Assemble** the dispute package per finding.

## The basis rule
Every finding carries a `basis` naming the mechanism:
`missing_required_element | closure | hold | free_time | chassis | holiday`.
**"Looks wrong" is not a basis
and will not commit.** A finding without a mechanism is an assertion, and a
carrier rejects assertions — that rejection then costs Station 13 credibility
across every other finding in the same package.

## Thresholds
- Findings below `walk_away_below_usd` ($150) are recorded but **not filed** —
  the carrier's process cost exceeds the recovery.
- Total package below the margin floor → flag to Station 13 before filing.

## Done-condition
`containers_reviewed` > 0; every discrepancy has a `basis` from the enum, a dollar
amount, and a source document reference in provenance. `confidence` per finding.
Package assembled at `dispute_package_path`.

## Output contract
```json
{"containers_reviewed": 0,
 "discrepancies": [{"container":"","basis":"","billed_days":0,"owed_days":0,"amount_usd":0,"confidence":0.0,"source_refs":["str"]}],
 "amount_at_issue_usd": 0, "dispute_package_path": "path",
 "findings_below_threshold": 0, "confidence": 0.0}
```

## Escalation
- **Zero discrepancies across three engagements → this is the charter's STOP
  condition.** Halt Station 8 outbound, write to `EVIDENCE_LOG.md`, surface in
  digest. Do not quietly keep prospecting.
- Parse failure on >20% of rows → escalate to Station 5. The toolchain, not the
  engagement, is broken.
- A finding whose basis is "the carrier's chassis shortage" → confidence cap 0.7.
  It is the most contestable basis and the most likely to be rejected.
- `missing_required_element` findings name **which** element is absent. A compliance
  finding that cannot say which of the 20 is missing is an assertion, and commits at
  confidence 0, not 0.9.

## Ranking findings within a package
File `missing_required_element` findings first and most prominently. They are mechanical
rather than argued, so they establish the package's credibility before the carrier reaches
a contestable operational finding. The dry run's rejection pattern shows why order matters:
one weak finding invites the carrier to treat the whole package as noise.
