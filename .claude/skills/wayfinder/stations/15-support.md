# Station 15 — Client Support & Finding Disputes

**Owner:** `support-triage` · **Tier:** sonnet · **Deps:** 13 · **Cadence:** continuous
**Next:** root-cause back to 12 or 5

> **Renamed** from "Customer Support & Warranty." There is no warranty on a
> service, but there is a direct analog: a finding we asserted that turns out to
> be wrong. That is a defect, and it routes exactly like one.

## Input contract
`{ticket: any}` — inbound from client email, a carrier rejection routed from 13,
or a fee dispute from 14.

## Categories and routing
| Category | Root cause station | Handling |
|---|---|---|
| Carrier rejected a finding on basis grounds | **12** | Re-derive. If our basis was wrong, withdraw the finding before the carrier generalises the rejection to the rest of the package. |
| Client disputes the fee calculation | **10** | Re-read the agreement's recovery definition. Freeze the dunning ladder while open. |
| Client says a finding is wrong on facts they hold | **12** | They have information we don't. Assume they are right until re-derived. |
| Documents were unusable / audit late | **5** | Capacity or toolchain failure, not a client problem. |
| Carrier reversed a credit | **13 → 14** | Approval Ticket, credit note. |

## The withdrawal rule
If a finding is wrong, **withdraw it in writing before the carrier raises it.**
A package containing one indefensible finding gets the whole package treated as
noise — the rejection generalises. Withdrawing costs one finding; not
withdrawing costs the engagement.

## Done-condition
Every ticket has a category, a resolution, and a named `root_cause_station`.
Where the root cause is systemic (same category three times), a Station 18 entry
exists. A closed ticket with no root cause recorded does not satisfy this.

## Output contract
```json
{"category": "str", "resolution": "str", "root_cause_station": 12,
 "reopened_entity": "FND-0001", "systemic": false, "retro_ref": null}
```

## Escalation
- Client threatens to terminate → **Call Ticket.** This is a live-voice situation
  and the swarm does not attempt it by email.
- Carrier alleges misrepresentation → **kill switch**, then Call Ticket.
- Same defect category three times → Station 18, flagged systemic. Three is not
  bad luck.
