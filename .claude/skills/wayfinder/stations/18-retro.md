# Station 18 — Retro & Reallocation

**Owner:** `retro-analyst` · **Tier:** opus · **Deps:** 16 · **Cadence:** per cycle
**Next:** closes the loop — edits the playbooks the next cycle runs on

## The unique privilege
**This is the only station permitted to write to `stations/`.** Every other agent
treats playbooks as read-only. That constraint is what makes the system
auditable: exactly one place changes the rules, and it must cite evidence to do it.

## Input contract
`{reports: ref:16, model: ref:4}`

## What this station does
1. **Compare actual to the Station 4 model**, per engagement. Name the variance
   and its cause.
2. **Kill what lost money.** A channel, a carrier basis type, a lead segment, a
   price point. Killing is the expected output, not a failure of the cycle.
3. **Double the capital on what didn't.**
4. **Rewrite the affected playbooks** — with the entity ids that justify each edit
   recorded in provenance. A playbook edit with no citation is refused.
5. **Write back to `docs/EVIDENCE_LOG.md`** — this is where the machine closes the
   loop with the method that produced it:
   - §A4 dispute outcomes, from Station 13
   - §A5 verbatim buyer answers
   - the **SCORE-TODAY revision table**, with the entry that justifies each move
   - the kills table

## The scoring discipline
SCORE-TODAY moves **only** on evidence recorded in the log, and each revision
names the entry justifying it. SCORE-IF-TRUE does not move unless the hypothesis
itself changed — and if it changed, that is a new candidate, not a re-score.

Dimensions 16 and 20 (moat, founder-market fit) already rest on verifiable
founder facts and score 8–10. **Expect them not to move.** If they do, the
Phase 0 constraints were wrong, which is a much larger finding than a score
change and must be reported as such.

## The STOP check
Every cycle, check the charter's pre-committed STOP condition against actuals. If
it is met, say so plainly and halt Station 8. The STOP was written before the
outcome was known, which is the entire reason it is worth anything.

## Done-condition
`actual_vs_model` covers every engagement closed this cycle. `killed` and
`doubled` are both present (either may be empty, but the field must be reasoned,
not omitted). Every entry in `playbooks_edited` cites ≥1 entity id.
`evidence_log_updates` lists the sections written.

## Output contract
```json
{"period": "YYYY-MM",
 "actual_vs_model": [{"engagement":"","modelled":0,"actual":0,"variance":0,"cause":""}],
 "killed": [{"what":"","evidence":["str"],"cost_to_learn_usd":0}],
 "doubled": [{"what":"","evidence":["str"],"new_allocation_usd":0}],
 "playbooks_edited": [{"station":0,"change":"","justified_by":["ENG-0001"]}],
 "evidence_log_updates": ["A4","A5","score-revision"],
 "score_today_revisions": [{"candidate":"C1","dimension":13,"from":3,"to":0,"entry":""}],
 "stop_condition_met": false}
```

## Escalation
- STOP condition met → halt Station 8, write it, digest it. **Do not soften it.**
- A playbook edit that would relax a hard refusal or a gate → **refused.** Station
  18 can retune thresholds and rewrite process; it cannot remove a boundary. That
  requires a charter change by a human.
- Model wrong by >50% on 3+ engagements → this is a Station 4 rebuild, not a tweak.
