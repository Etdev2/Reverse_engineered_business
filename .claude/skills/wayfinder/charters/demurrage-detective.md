# Charter — The Demurrage Detective

Live charter. Binding on every station. Derived from
`docs/REVERSE_ENGINEERED_IDEATION.md` Phase 0 and the Phase 5 decision.

## Identity
- **Business:** Contingency-based audit of ocean carrier detention and demurrage
  invoices, comparing carrier billing against terminal gate-out/gate-in records to
  find and recover overcharges.
- **Sells:** A dispute package — the identified discrepancies, the basis for each,
  and a ready-to-send dispute email — plus follow-through to recovery. Billed as a
  percentage of what is actually recovered.
- **To:** Operations managers and billing leads at regional ocean freight
  forwarders, 10–100 employees, port-adjacent (LA/Long Beach, NY/NJ). Reachable
  via Pacific Coast Council and NCBFAA member directories without an introduction.
- **Jurisdiction:** United States. Federal (CBP) touches the domain but **not** the
  service — see refusals.

## Constraints
- **Capital at risk:** $5,000
- **Hours per week:** 15, nights and weekends. **The swarm must be fully async.**
  A station that requires the founder to be available in business hours is
  mis-designed; the only exception is a scheduled Call Ticket.
- **Approval threshold:** **$0.** Every money movement gates. With $5,000 total,
  a single unreviewed commitment is a meaningful fraction of the capital.
- **Risk tolerance:** Low on anything irreversible or regulatory. High on outbound
  volume — a cold email that fails costs nothing.

## Will not do
Hard refusals. No approval ticket clears these.
- **Issue a customs classification opinion or recommend an HTS code.** No broker
  licence is held. This killed Candidate 2 in Phase 4 and is not revisitable.
- **Anything presentable as licensed customs-broker advice**, including preparing
  or reviewing a customs entry for filing.
- Cold door-knocking or street sales.
- Native mobile app development.
- Managing offshore software agencies. (An offshore *operations assistant* for
  audit data entry is in scope — Specialist 18.4. An agency of developers is not.)

## Unit economics floor
- **Contingency rate:** 25% target, **20% floor.** Below 20% we decline.
- **Margin floor:** $250 net per engagement-month. An audit whose expected
  recovery cannot clear this is declined, not discounted.
- **Minimum finding worth filing:** $150. Below this the carrier's process cost
  exceeds the recovery.
- **Walk-away condition:** "It sounds like this isn't a fit right now — if your
  invoice volume changes, I'd be glad to look again."

## Existing accounts
All stubbed. Every external effect writes to `state/outbox/` as a file for a
human or a later adapter to send. No credentials exist anywhere in this system.
- Email: **stubbed** · Accounting: **stubbed** · E-sign: **stubbed** · Storage: **local `state/`**

## Evidence position
- **What is actually proven today:** Nothing about the market. The only verified
  facts are about the founder — domain vernacular, workflow knowledge, and a warm
  network (Dimensions 16 and 20, which score 8–10 today; everything else scores 2–4).
- **The load-bearing assumption:** *Ocean carriers will pay out refund claims based
  on third-party audits, without requiring legal representation or direct API
  integration.* If this is wrong, Stations 13 and 14 never complete and the
  business does not exist.
- **The specific unresolved question:** Do carriers require disputes to come from
  the email on the bill of lading, or will they accept a third-party auditor's
  address? Phase 4 judge ruled UNRESOLVED-NEEDS-EVIDENCE.
- **Where evidence is recorded:** `docs/EVIDENCE_LOG.md` — §A4 for dispute
  outcomes, §A5 for verbatim buyer answers. Station 13 writes there on every
  filing. Station 18 revises SCORE-TODAY from it.

## Regulatory basis (verified 2026-09-14)
The FMC final rule on Demurrage and Detention Billing Requirements (Docket 22-04,
effective **28 May 2024**) requires **20 data elements** on a D&D invoice; omitting any
of them **eliminates the billed party's obligation to pay** that charge. It also sets a
"30/30/30" structure — 30 days to invoice, ≥30 days for the billed party to request
mitigation, and a **mandated resolution attempt within 30 days**. Where an NVOCC is both
billing and billed party (which most target forwarders are), it may pass a dispute
through on behalf of its own billed party.

Two caveats, both binding on Station 3 and Station 13:
- In **September 2025** the D.C. Circuit (*World Shipping Council v. FMC*) held the
  Commission inadequately justified the restriction on **which party** may be billed.
  Billing-party assignment is contractual again, not guaranteed.
- **Verify current rule status with counsel before relying on any of this in client-facing
  copy or a filed dispute.** Station 7 may not state it as settled law.

## The STOP condition
Pre-committed, and it binds. From Phase 5:

> Three collections audited with **zero billing errors found** — or a forwarder
> says carriers ignore email claims that don't come through an active customer
> account.

If Station 12 completes three engagements with no findings, or Station 13 records
that answer, the swarm halts Station 8 outbound, writes the STOP into
`EVIDENCE_LOG.md`, and surfaces it in the digest. **It does not quietly keep
prospecting.** The point of a pre-committed STOP is that it binds when the
outcome is disappointing.
