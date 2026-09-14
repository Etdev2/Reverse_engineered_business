# Station 2 — Market & Demand Intake

**Owner:** `demand-analyst` · **Tier:** opus · **Deps:** 1 · **Cadence:** per cycle
**Next:** 4 (Economics), 8 (Demand Gen)

## Input contract
`{charter: ref:1}`

## What this station does
Sizes demand, maps competitors, establishes price bands and channels, and
returns a **go/no-go with numbers attached**.

Known starting facts from the charter's source research — these are inputs to
verify, not conclusions:
- Competitors: Ocean Audit, Intelligent Audit. Contingency **20–30%**.
- Adjacent spend: visibility platforms at $5–12/container, $500/mo minimums.
- Pain size claimed: $5,000–$25,000/month per mid-sized importer in erroneous invoices.
- Channel: PCC and NCBFAA member directories; port authority registries.

## The rule that governs the go/no-go
**Read `docs/EVIDENCE_LOG.md` before producing it.** The go/no-go cites evidence
rows, not reasoning. If the log has zero entries, the honest output is
`go_no_go: "provisional-go, zero evidence"` with `evidence_refs: []`.

That is not a blocker and must not be reported as one. Phase 3 scored this
business 52/90 **today** precisely because no evidence exists yet. A station that
manufactures confidence here defeats the entire method.

## Done-condition
All seven output fields present; `go_no_go` is one of
`go | no-go | provisional-go, zero evidence`; `evidence_refs` is a list (empty is
valid) of entity ids or `EVIDENCE_LOG.md` section anchors.

## Output contract
```json
{"tam_estimate_usd": 0, "competitors": [{"name":"","pricing":""}],
 "price_band_pct": [20,30], "channels": ["str"], "seasonality": "str",
 "go_no_go": "str", "evidence_refs": ["str"]}
```

## Escalation
- A no-go → do **not** halt the swarm. Commit it, surface in digest, let the
  human decide. Stations 3, 5, 7 keep running; they are cheap and reusable.
- Competitor pricing that puts the 20% floor underwater → Approval Ticket, because
  it invalidates Station 4's model.
