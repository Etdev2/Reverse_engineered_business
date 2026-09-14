# Station 1 — Charter & Constraints

**Owner:** `charter-clerk` · **Tier:** opus · **Deps:** none · **Cadence:** once
**Next:** 2 (Market), 3 (Compliance) — both dispatch in parallel on completion.

## Input contract
`{charter_path: str}` — path to the filled charter in `charters/`.

## What this station does
Reads the charter and commits it to state as the binding constraint set every
other station reads. It does not interpret generously. A blank field is a
refusal, not a default — the station stops and asks rather than assuming.

1. Parse every section of the charter.
2. Assert each required field is present and non-null.
3. Extract the refusal list into machine-checkable form.
4. Record the approval threshold, margin floor and walk-away as numbers.
5. Commit.

## Done-condition
Objective: all seven required output fields non-null, `approval_threshold_usd` is
a number (not "low"), `will_not_do` has at least one entry, and
`capital_at_risk` ≤ the figure in the charter. Checkable by reading the committed
entity.

## Output contract
```json
{"business": "str", "serves": "str", "will_not_do": ["str"],
 "capital_at_risk": 5000, "jurisdiction": "US",
 "approval_threshold_usd": 0, "risk_tolerance": "low-irreversible/high-outbound",
 "hours_per_week": 15}
```

## Escalation
- Missing or ambiguous field → stop, surface in digest. **Never infer a threshold.**
- Charter contains a refusal that contradicts a station's core function →
  hard stop, report the contradiction. Do not silently disable the station.
