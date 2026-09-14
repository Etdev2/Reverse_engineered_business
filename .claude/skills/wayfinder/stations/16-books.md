# Station 16 — Books, Tax Pack & Reporting

**Owner:** `bookkeeper` · **Tier:** sonnet · **Deps:** 14 · **Cadence:** continuous
**Next:** 18 (Retro)

Runs continuously. **Bookkeeping does not wait on sales** — it reconciles
whatever exists, including a month with no revenue, which is itself the report.

## Input contract
`{invoices: collection, costs: collection}`

## What this station does
Reconciles, categorises, and produces the monthly pack:

1. **P&L** — contingency revenue recognised on recovery, not on invoice issue.
2. **Cash position** against the $5,000 at risk. This number is the business's
   actual runway and belongs at the top of every pack.
3. **Pipeline** — leads by stage, with the capacity constraint from Station 5
   shown alongside. Pipeline exceeding capacity is a reported problem.
4. **Margin by engagement** — actual against Station 4's model, per engagement.
   The follow-through cost line is the one to watch: the debate predicted it is
   underestimated.
5. **Top three leaks** — where money or time left. Ranked, with amounts.

## The revenue recognition rule
Recognise on `carrier_response in (approved, partial)` **and**
`amount_recovered_usd > 0`. Filed-but-unanswered disputes are **not** revenue and
not receivables. They are contingent and must appear as a separate memo line —
counting them is how a contingency business convinces itself it is profitable
while running out of cash.

## Done-condition
P&L balances. Cash position reconciles to recorded movements. `top_three_leaks`
has exactly three entries with dollar amounts, or explicitly states fewer than
three leaks were identifiable and why.

## Output contract
```json
{"period": "YYYY-MM", "pnl": {"revenue":0,"cogs":0,"opex":0,"net":0},
 "cash_position": {"opening":0,"in":0,"out":0,"closing":0,"capital_remaining":0},
 "contingent_not_recognised": 0,
 "pipeline": [{"stage":"","count":0,"value":0}],
 "margin_by_engagement": [{"engagement":"","modelled":0,"actual":0,"variance":0}],
 "top_three_leaks": [{"leak":"","amount_usd":0}]}
```

## Escalation
- Cash position below 25% of capital at risk → Approval Ticket, flagged to the
  human as a runway event.
- Actual margin below modelled on 3+ engagements → Station 18, systemic.
- Any tax filing → `file_gov` gates. This station **prepares** the pack; it never
  files it.
