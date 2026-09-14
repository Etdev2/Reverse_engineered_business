# Station 4 — Offer Definition & Unit Economics

**Owner:** `economics-modeler` · **Tier:** opus · **Deps:** 2 · **Cadence:** per cycle
**Next:** 5 (Input Supply), 7 (Brand), 10 (Deal) — 5 and 7 dispatch in parallel.

## Input contract
`{market: ref:2}`

## What this station does
Defines the exact thing sold and the numbers that govern every later station.
Station 10 cannot quote outside what this station sets. Station 13 cannot file a
finding below the minimum. Station 18 compares actuals back to this model.

There is no COGS in the physical sense. Cost per audit is:
- Founder hours at an opportunity cost the charter sets.
- Offshore ops assistant time for data entry (Specialist 18.4).
- Parsing/compute — effectively zero.
- **Carrier follow-through time** — the cost BULL conceded in debate: *finding
  discrepancies is much easier than getting carriers to pay.* Model this
  explicitly. Underestimating it is the single most likely modelling error.

## Done-condition
`margin_floor_usd` and `walk_away_below_usd` are numbers. `contingency_pct` is
within the charter's 20–25 band. `cost_per_audit_usd` includes a non-zero
follow-through line. The model reconciles: at the floor recovery, contingency
revenue minus cost per audit ≥ margin floor.

## Output contract
```json
{"offer": "str", "cost_per_audit_usd": {"founder_hours":0,"va":0,"compute":0,"followthrough":0,"total":0},
 "contingency_pct": 25, "margin_floor_usd": 250, "walk_away_below_usd": 150,
 "price_ladder": [{"tier":"","basis":"","pct":0}]}
```

## Escalation
- Model shows the floor is unreachable at any plausible recovery → Approval
  Ticket. This is a business-model failure, not a pricing tweak.
- Follow-through cost estimated at zero → refuse to commit. The debate settled
  that it is not zero.
