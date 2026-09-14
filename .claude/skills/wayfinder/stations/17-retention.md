# Station 17 — Retention, Re-Audit & Referral

**Owner:** `retention` · **Tier:** haiku · **Deps:** 14 · **Cadence:** per cycle
**Next:** 8 (Demand Gen) — referrals re-enter as leads

> **Renamed** from "Retention, Reorder & Referral." The reorder analog is the
> **re-audit**: demurrage billing errors recur every month because their causes
> are structural, which is what makes this a subscription rather than a one-off.

## Input contract
`{engagement: entity:engagements}`

## What this station does
1. **Re-audit trigger** — a client audited once has a new month of invoices 30
   days later. Fire automatically. This is the single highest-margin action in
   the business: the relationship exists, the formats are known, the parser is
   already tuned to their carriers.
2. **Renewal outreach** — automated, referencing their actual recovered amount.
3. **Review request** — only after a confirmed recovery. Never after a filing.
4. **Referral ask** — forwarders know other forwarders, and the PCC/NCBFAA
   directories that sourced them list their peers. A warm referral bypasses
   Station 8 entirely.
5. **Win-back** — clients whose re-audit lapsed for 60+ days.

## The evidence rule
Every retention message states the client's **own** recovered figure. No
industry averages, no "clients typically recover." With near-zero engagements
there is no typical, and an invented average is a Reviewer refusal.

## Done-condition
Every closed engagement has a `next_audit_due` date or an explicit
`no_reorder_reason`. Review requested only where `amount_recovered_usd > 0`.

## Output contract
```json
{"reorder_trigger": "monthly-invoice-cycle", "next_audit_due": "iso",
 "no_reorder_reason": null, "review_requested": false,
 "referral_asked": false, "referrals_received": [{"company":"","contact":""}],
 "recovered_to_date_usd": 0}
```

## Escalation
- Client declines re-audit → capture **why**, verbatim, and route to Station 18.
  A churn reason is the most valuable evidence the business produces.
- Referral received → create the lead at Station 9 directly, **skipping Station 8**.
  A referral that goes through cold outbound wastes the warmth.
