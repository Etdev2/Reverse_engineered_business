# Approval Ticket

Generated when an agent tries to cross a hard boundary. **The swarm is autonomous,
not unsupervised.** A human clears it with one word.

```bash
python3 bin/wf.py approve APR-0001 --by matt
```

On approval the runtime replays the **exact envelope that was blocked** — not a
re-derived one. What you approved is what commits.

## What gates, and why

| Boundary | Matches action containing | Why |
|---|---|---|
| Moves money | `pay` `transfer` `refund` `payroll` | Threshold is **$0** per charter. With $5,000 total at risk, no outbound money moves unreviewed. |
| Binding commitment | `sign` `contract` | A signature cannot be un-signed. |
| Credentials / IDs | `credential` | Never entered by an agent, anywhere, at any threshold. |
| Government filing | `file_gov` | Tax, entity, permits, customs. Wrong filings compound. |
| Publicly irreversible | `publish` `mass_email` | Cannot be recalled from the internet or from 400 inboxes. |
| Outbound commitment | `commit_spend` | Any single commitment, any size, at the $0 threshold. |
| **Under the client's name** | `file_dispute_as_client` | Charter-specific. Filing a carrier dispute as the account holder is their identity, not ours. |

Matching is **substring on the action name**, so `pay_supplier`,
`schedule_payment` and `repay_credit` all gate. An agent cannot opt out by
setting `requires: null` — the runtime gates independently of what the agent
declares.

## Refusals that do NOT produce a ticket

Some things are not gated, they are **outside the business**. No approval clears
these; the agent refuses and logs:

- Issuing a customs classification opinion or recommending an HTS code.
- Anything presentable as licensed customs-broker advice.
- Signing, or preparing for signature, a customs entry.

This boundary is what killed Candidate 2 in the Phase 4 debate. It is load-bearing
for the whole charter and is not a threshold to tune.

## Ageing

An approval open more than 72h appears in the digest under a stalled heading, and
the Watchdog escalates it. Nothing auto-approves on a timer, ever. An unattended
queue stops the business — that is the intended failure mode, and it is safe.
