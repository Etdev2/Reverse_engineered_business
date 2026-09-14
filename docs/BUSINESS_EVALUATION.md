# Business Potential & Profitability Evaluation
## The Demurrage Detective — contingency ocean D&D invoice audit

**Analyst position:** skeptical-constructive. **Date:** 2026-09-14.
**Evidence state:** zero customer evidence. Every customer-side number below is an
assumption, labelled. External market and regulatory facts are cited.

> **Three external findings changed this analysis materially versus the repo's
> Phase 3 scoring.** They are set out in §0 because they move several scores.

---

## 0. What the research changed

### Finding 1 — There is now a *mechanical* basis for dispute (strong positive)

The FMC's final rule on Demurrage and Detention Billing Requirements (Docket 22-04,
effective **28 May 2024**) requires **20 data elements** on every D&D invoice — the
13 mandated by OSRA 2022 plus seven added by the Commission. Critically:

> Failing to include any of the required information in a detention or demurrage
> invoice **eliminates any obligation of the billed party to pay** the charge.
> — [Federal Register, Demurrage and Detention Billing Requirements](https://www.federalregister.gov/documents/2024/02/26/2024-02926/demurrage-and-detention-billing-requirements) · [FMC](https://www.fmc.gov/articles/fmc-publishes-final-rule-on-detention-and-demurrage-billing-practices/) · [Benesch](https://www.beneschlaw.com/insight/a-whole-new-world-fmc-issues-final-rule-on-demurrage-and-detention-billing-requirements/)

**Why this matters more than anything else in this document.** The repo's Station 12
bases findings on *arguable* mechanisms — was the terminal closed, was the chassis
shortage the carrier's fault. Those are judgement calls a carrier can contest, and
the dry run's synthetic carrier duly rejected the chassis finding.

A missing data element is **binary**. It is a checklist against a document, not an
argument about operational history. It is the single most automatable and most
defensible finding type available, and it did not exist before May 2024.

**Action:** add `missing_required_element` to Station 12's `basis` enum as the
highest-confidence class, and check it *first* on every invoice.

### Finding 2 — The dispute window is statutory, and forwarders have a special path (positive)

The rule establishes a **"30/30/30"** structure: 30 days to issue, **at least 30
calendar days** for the billed party to request mitigation/refund/waiver, and the
billing party **must attempt to resolve within 30 days** of a timely request
([FMC](https://www.fmc.gov/articles/final-rule-on-demurrage-detention-cleared-to-take-full-effect-may-28/) ·
[HFW](https://www.hfw.com/insights/fmcs-new-demurrage-and-detention-regulations-become-effective-may-2024/)).

This partially answers the repo's load-bearing assumption. The Phase 4 BEAR argued
carriers "simply ignore email claims." A mandated resolution attempt is a materially
different posture from goodwill.

And directly on the target customer: **where an NVOCC is acting as both billing party
and billed party, it may communicate disputed charges to its own billing party on
behalf of its billed party.** Regional ocean freight forwarders are typically NVOCCs.
The pass-through dispute the business depends on is explicitly contemplated by the rule.

### Finding 3 — The billed-party restriction was struck down, and funded competitors are arriving (negative)

In **September 2025**, the D.C. Circuit in *World Shipping Council v. FMC* held the
Commission had inadequately justified the portion of the rule restricting **which
party** carriers and terminals may bill. Billing-party assignment reverts to a
**contractual** question rather than a regulatory guarantee. The invoice-content
requirements — Finding 1 — were not what was at issue, but **verify current status
with counsel before relying on any of this.**

Separately, the search record indicates **several AI-native entrants raised seed and
Series A rounds across 2024–2025 doing NLP tariff interpretation and automated dispute
letter generation.** That is this idea, funded. The window is open but narrowing.

---

## 1. Idea summary

**What is built:** A service that compares a freight forwarder's ocean carrier D&D
invoices against terminal gate-out/gate-in records and the carrier's own free-time
terms, identifies charges that should not have been billed, and produces a
ready-to-file dispute package. Billed as a percentage of what is actually recovered.

**Customer:** Operations and billing leads at regional US ocean freight forwarders,
10–100 employees, port-adjacent (LA/LB, NY/NJ). Most are NVOCCs.

**Problem:** They are billed for container days they did not use — because of terminal
closures, holidays, cargo holds, carrier chassis shortages, and (since May 2024)
invoices that simply omit legally required data. They know it happens. They do not
have a spare person to check, so they pay.

**Why they'd pay:** They don't pay anything until money comes back. Contingency
removes budget approval, procurement, and risk from the buying decision. The adjacent
market already prices this at **20–30% contingency** (Ocean Audit, TransAudit,
Intelligent Audit).

**Model:** Contingency services first (25%, 20% floor), productized into a recurring
monthly audit, with a possible software/data endgame.

**Advantage:** Domain vernacular, a warm network, zero-API workarounds via file
exports, and — the durable one — an **accumulated per-carrier free-time and
invoice-compliance ruleset** built from real client data.

**What must be true:**
1. Defective invoices exist at a material rate in this segment. *(Finding 1 makes
   this much more likely than before.)*
2. Carriers actually pay out on disputes routed through the forwarder.
3. Forwarders under 100 staff will hand over commercial invoice data to a solo operator.
4. The founder can hold 20–25% contingency against in-housing pressure.

### Investment thesis

A regulatory change in May 2024 converted a judgement-based recovery argument into a
20-item compliance checklist, and made non-compliant D&D charges legally unowed. That
creates a narrow, mechanical, highly automatable audit product aimed at a segment the
incumbents ignore because the contracts are too small for enterprise sales. The founder
can reach that segment through public directories without an introduction, can charge on
contingency so there is no budget objection, and needs about $5,000 and two weeks to find
out if it works. The realistic outcome is a **$100–250K/year owner-operated cash
business**, not a venture asset — and the principal risks are fee compression once clients
realise how simple verification is, and funded AI-native competitors who are already
raising money to do exactly this.

---

## 2. Market opportunity

**Facts:** Global D&D penalties have exceeded **$26B annually** in recent years. The
D&D management platform market was valued at **$1.8B in 2025**, projected to **$4.6B by
2034 (10.9% CAGR)** ([Dataintelo](https://dataintelo.com/report/detention-and-demurrage-management-platform-market)).
Freight audit recovery typically returns **2–8% of total freight spend**
([Ct Global](https://ctglobal-freightaudit.com/ocean-freight-audit-management-making-the-stormier-seas-easier-to-navigate/)).

**Derived — assumptions labelled:**

| Layer | Estimate | Derivation (ASSUMPTION unless noted) |
|---|---|---|
| **TAM** | **$150–375M/yr** US audit-fee pool | $26B global D&D (fact) × ~25–30% US share × 10–25% defective/disputable × 25% contingency |
| **SAM** | **$25–40M/yr** | ~2,000–3,000 US forwarders with ≥100 containers/mo × $12–15K/yr audit fee |
| **SOM** (solo, 15 hrs/wk) | **$100–450K/yr** | 8–30 retained clients — capacity-bound, not demand-bound |

**Target customer purchasing power:** Strong relative to price. A forwarder billing
$40–70K/yr in recoverable errors pays a fee out of found money.

**Growth:** 10.9% CAGR on the platform market. Regulatory attention is increasing, not
decreasing — the FMC runs a permanent audit program over the top carriers
([Supply Chain Dive](https://www.supplychaindive.com/news/fmc-detention-demurrage-permanent-program-audits-top-9-carriers/603688/)).

**Maturity:** Early-transitional. The rule is ~2 years old; compliance and awareness
are uneven. This is the window.

**Competitive intensity:** **Moderate and rising.** Incumbents
([Ocean Audit](https://oceanaudit.com/), [TransAudit](https://transaudit.com/ocean-detention-and-demurrage/),
CT Global, Intelligent Audit) serve large shippers. Funded AI-native entrants are
arriving at the automation layer.

**Existing alternatives:** doing nothing (dominant); an internal billing clerk;
enterprise freight-audit providers; customs/maritime attorneys; D&D modules inside TMS
platforms.

**Fragmentation:** High on the buyer side (thousands of small forwarders), concentrated
on the counterparty side (3 carriers ≈ 50%+ of volume) — a favourable shape, because
parsing effort concentrates while the buyer market stays un-consolidated.

**Barriers to entry:** **Low.** This is the core structural weakness. No licence
required (subject to §12 legal risk), no capital, no technology barrier. What barriers
exist are earned: carrier-specific rule knowledge, and client trust with commercial data.

### Market Opportunity Score: **6/10**
Real, growing, with a genuine regulatory catalyst — but the obtainable slice for one
part-time operator is small, and entry barriers do not protect the position.

### Capture required

Against **SAM ≈ $30M**, at ~$13K average annual revenue per retained client:

| Revenue | % of SAM | Clients needed | Feasible for this founder? |
|---|---|---|---|
| $100K | 0.33% | **~8** | Yes — within 15 hrs/wk |
| $500K | 1.7% | **~38** | Needs 2–3 VAs + a salesperson |
| $1M | 3.3% | **~77** | Needs a real team; founder stops auditing |
| $5M | 17% | ~385 | Requires national scale + software; different company |
| $10M | 33% | ~770 | Implausible in US ocean D&D alone; requires adjacent expansion |

**The honest read:** $100K is a capacity question. $1M is an organisation-building
question the charter's constraints (15 hrs/wk, no agencies, $5K) explicitly rule out.

---

## 3. Business model

**Strongest monetization, ranked:**

1. **Contingency professional services (25%)** — best now. Zero buyer risk, fastest cash, teaches the domain.
2. **Retained monthly audit (flat $500–1,500/mo)** — best at scale. Converts lumpy contingency into predictable revenue and resists in-housing better, because the client is buying *not thinking about it*.
3. **Hybrid: small retainer + reduced contingency (10–15%)** — likely the durable equilibrium.
4. **Compliance-ruleset licensing / API** — the endgame if the data asset accumulates.
5. ~~Pure SaaS~~ — rejected. Requires the client to do the work, which is the thing they're paying not to do.

| Metric | Estimate | Basis |
|---|---|---|
| Price | 25% of recovery (20% floor) | Adjacent market 20–30% — **fact** |
| ARPU | **$10–18K/yr** retained; $2–5K first engagement | ASSUMPTION: 400 containers/mo, $8–15/container recoverable |
| **Gross margin** | **65–75%** | Revenue less VA (~$3–4K/yr/client) and compute (~$0). **Not** software margin |
| CAC (cash) | **~$50–150** | Directories are free; email tooling is the only spend |
| CAC (time-valued) | **$750–1,500** | 10–15 founder hours/client at ~$75–100/hr opportunity cost |
| LTV | **$15–30K** | ASSUMPTION: 18–30 month life at $12K/yr |
| **LTV:CAC** | **10–20:1** cash · **~12:1** time-valued | Strong — but see churn |
| **Churn** | **35–55%/yr** | ASSUMPTION, and the weakest number here. Driven by in-housing, not dissatisfaction |
| Contribution margin | ~$8–12K/client/yr | |
| **Break-even (cash)** | **2–3 clients** | Costs are ~$5K/yr all-in |
| **Break-even (incl. founder time)** | **6–8 clients** (~$80–100K revenue) | 15 hrs/wk × $75/hr ≈ $58K/yr opportunity cost |

**The churn number is the one to watch.** BEAR's Phase 4 argument was that a client who
sends the dispute emails learns how simple it is and in-houses. Finding 1 cuts against
this: a 20-element compliance check across hundreds of invoices is tedious in a way that
resists casual in-housing — which is precisely why they weren't doing it before.

---

## 4. Probability distribution of outcomes

This is **not** a normal distribution and **not** a venture power law. It is a
**services distribution**: a large mass at "small profitable business," a substantial
failure mass, and a thin, capped tail. There is no realistic $100M outcome without
becoming a different company.

| Scenario | P | Yr-3 revenue | Yr-3 profit (SDE) | Valuation | Time to reach |
|---|---|---|---|---|---|
| **LOW** — test fails, or outbound doesn't convert, or fee compresses below floor | **38%** | $0–30K | −$5K to +$5K | $0 | abandoned by month 6–12 |
| **BASE** — competent execution, 8–15 retained clients | **37%** | **$140K** | **$95K** | $240K (2.5× SDE) | 24–30 months |
| **HIGH** — strong execution, 30–45 clients, 2 VAs, partly productized | **18%** | **$420K** | **$250K** | $750K (3× SDE) | 36 months |
| **PRECISION** — compliance ruleset productized; platform/licensing deal | **7%** | **$1.3M** | **$550K** | $2.75M (5×) | 48–60 months |

### Forecast by horizon (base case)

| Horizon | Revenue | Profit | Note |
|---|---|---|---|
| 6 months | **$3–12K** | ~$0 | 1–3 contingency engagements; the test itself |
| 12 months | **$25–45K** | $10–20K | 4–6 clients, first retainers |
| 24 months | **$85–130K** | $55–85K | 8–12 clients; founder still auditing |
| 36 months | **$140K** | $95K | capacity ceiling approaching on 15 hrs/wk |
| 5 years | **$200–300K** | $130–190K | requires 1 hire or heavy automation to exceed |

### Probability statements

| Outcome | Probability | Driver |
|---|---|---|
| **Failure** (abandoned, <$25K cumulative) | **38%** | Dominated by conversion risk, not the audit mechanics |
| **Sustainable small business** (>$50K/yr profit) | **45%** | The modal outcome |
| **Exceeds $100K annual profit** | **33%** | ~10+ retained clients |
| **Exceeds $1M annual revenue** | **9%** | Requires hiring — contradicts the current charter |
| **Exceeds $1M annual profit** | **3%** | Requires productization + team |
| **Worth $10M+** | **2%** | Requires becoming a software/data company |
| **Worth $100M+** | **0.3%** | Requires category leadership in freight audit. Not this plan. |

**Assumptions driving these:** (a) Finding 1 makes defective invoices likely enough
that "zero findings" is now a low-probability STOP — I put it under 15%, down from the
repo's implied coin-flip; (b) the binding constraint is *conversion and capacity*, not
discovery; (c) funded competitors compress pricing from year 2–3.

---

## 5. Expected value

| Measure | Expected value | Calculation |
|---|---|---|
| **Annual revenue (yr 3)** | **$223K** | .38(12) + .37(140) + .18(420) + .07(1300) |
| **Annual profit (yr 3)** | **$118K** | .38(−2) + .37(95) + .18(250) + .07(550) |
| **Enterprise value** | **$416K** | .37(238) + .18(750) + .07(2750) |
| **Founder equity value** | **$416K** | 100% — no outside capital required |

### Against what it costs

| Input | Amount |
|---|---|
| Cash at risk | **$5,000** |
| Founder hours (3 yrs @ 15/wk) | **~2,340 hrs** |
| Opportunity cost of those hours @ $75/hr | **~$176K** |
| AI/agent labour | ~$1.5–4K over 3 years — immaterial |

**Verdict on the EV profile: ATTRACTIVE — with a sharp caveat.**

On **capital**, this is exceptional: $5K at risk against an EV of $118K/yr profit and
$416K equity is an ROIC that does not need a spreadsheet to justify.

On **time**, it is merely attractive: $176K of opportunity cost against $416K of EV
equity plus a growing profit stream — roughly 2.3×, over three years, with a 38%
chance of near-zero.

**The distinction matters more than the number.** If the founder's 15 hours are
genuinely spare — nights and weekends, as the charter states — the time cost is
notional and this reads as **very attractive**. If those hours have a real competing
use, it reads as **marginal**.

---

## 6. Time to profitability

| Milestone | Low | **Most likely** | High |
|---|---|---|---|
| Time to MVP (a working parse-and-match on real files) | 2 wks | **4–6 wks** | 3 mo |
| **First paying customer** | 3 wks | **6–10 wks** | 5 mo |
| Break-even on cash ($5K recovered) | 1 mo | **2–4 mo** | 8 mo |
| Break-even incl. founder time (~$80K/yr run-rate) | 9 mo | **18–24 mo** | never (38%) |
| Meaningful profitability (>$50K/yr) | 12 mo | **20–26 mo** | never |
| $100K annual revenue | 10 mo | **18–24 mo** | 36 mo |
| $1M annual revenue | 30 mo | **not in base case** | — |
| $1M annual profit | — | **not in base case** | 60 mo (3%) |

**Cash break-even inside one quarter is the standout number.** Very few businesses
reach positive cash flow before the founder has spent their capital. This one can,
because the service is delivered before it is billed and billed out of found money.

---

## 7. Capital requirements

| Line | Lean | **Recommended** | Aggressive |
|---|---|---|---|
| Development (parser toolchain) | $0 (founder) | $0 | $6,000 |
| Infrastructure / cloud | $0 (local) | $120/yr | $1,200 |
| AI / API costs | $150 | **$400** | $2,500 |
| Data (list enrichment, Apollo) | $0 (directories) | **$600** | $2,400 |
| **Legal — contingency agreement + licence opinion** | $0 (template) | **$1,800** | $5,000 |
| **E&O insurance** | $0 | **$900/yr** | $2,500 |
| Marketing | $0 | $200 | $8,000 |
| Sales | $0 (founder) | $0 | $30,000 (SDR) |
| Contractors (offshore ops assistant) | $0 | **$1,200** | $9,000 |
| Hardware | $0 | $0 | $2,000 |
| Customer service | $0 | $0 | $0 |
| Compliance | $0 | $300 | $1,500 |
| Working capital | $0 | $0 | $10,000 |
| Contingency (20%) | $30 | **$1,100** | $16,000 |
| **TOTAL** | **~$180** | **~$6,600** | **~$96,000** |

- **Capital required before first revenue: ~$200–600.** The Phase 5 test is genuinely
  near-free, because the first audit is done manually on files the client emails.
- **Capital required before break-even: ~$1,500–3,000.**
- **Outside funding requirement: $0.** Recommended exceeds the $5K charter limit by
  ~$1,600, entirely because of legal and E&O. **Do not cut those two** — see §12.

---

## 8. Human hours vs AI hours

| Area | Human init | AI init | Human /mo | AI /mo | Automatable |
|---|---|---|---|---|---|
| Initial research (carrier tariffs, 20-element rule) | 25 | 15 | 2 | 4 | 60% |
| Product design (workflow, SOP) | 12 | 6 | 1 | 1 | 50% |
| Software dev (parsers) | 30 | 40 | 3 | 8 | **75%** |
| Content/data (templates, rulesets) | 10 | 20 | 2 | 6 | 80% |
| Marketing | 4 | 12 | 1 | 6 | 85% |
| **Sales (calls)** | **20** | 8 | **8** | 4 | **25%** ← bottleneck |
| Legal/compliance | 10 | 4 | 1 | 1 | 30% |
| Customer support | 2 | 2 | 3 | 5 | 60% |
| **Operations (the audit itself)** | 30 | 25 | **10** | **30** | **70%** |
| **Carrier follow-through** | 8 | 6 | **6** | 8 | **45%** ← bottleneck |
| Accounting/finance | 5 | 5 | 1 | 3 | 85% |
| Administration | 4 | 3 | 1 | 2 | 80% |

### Initial build
- **Human hours: ~160** · **AI hours: ~146** · **AI-automatable: ~62%**

### Ongoing monthly
- **Human hours: ~39/mo** (≈ 9/wk — fits inside 15) · **AI hours: ~78/mo** · **AI-automatable: ~68%**

**AI-assisted vs AI-automated — honestly:**
- **Automated** (runs unattended): invoice parsing, gate-record matching, the
  **20-element compliance check** (Finding 1 — a checklist is genuinely automatable),
  dispute-letter drafting, chase ladders, bookkeeping, digests.
- **Assisted** (human drives): tariff interpretation for non-standard contracts,
  judgement findings (chassis, closure attribution), anything a carrier will contest,
  client relationship.
- **Not automatable:** the calls, the trust, the negotiation, the first read of a new
  carrier's invoice format.

**Biggest remaining human bottlenecks, in order:**
1. **Sales calls** — by design, and correctly so.
2. **Carrier follow-through** — the cost BULL conceded in Phase 4. Chasing is
   automatable; *judging when a carrier is stalling versus processing* is not.
3. **Per-carrier ruleset maintenance** — the asset and the tax at once.

---

## 9. Founder leverage

| Measure | Base case | High case |
|---|---|---|
| Revenue per founder hour | **$180/hr** ($140K ÷ 780 hrs) | $420/hr |
| Profit per founder hour | **$122/hr** | $250/hr |
| Ability to delegate | **Moderate** — VA handles data entry; calls and judgement don't delegate |
| Ability to automate | **Good** — ~68% of ongoing ops, raised by Finding 1 |
| Need for specialists | **Low** initially; a licensed broker or attorney on retainer, not staff |
| Operational complexity | **Moderate** — many small parallel disputes, each with a clock |
| **Founder dependency** | **High.** The domain vernacular moat *is* the founder. |

**Founder Leverage Score: 6/10.** Profit per hour comfortably exceeds the founder's
likely day rate, and automation potential is real. Capped because revenue scales with
audit volume, audit volume scales with hands, and the trust that opens accounts is
non-transferable. A 9–10 would require the compliance ruleset to become a product
customers self-serve — possible, and that is exactly the PRECISION scenario.

---

## 10. Scalability

| Dimension | Score | Note |
|---|---|---|
| Technical | 7/10 | Parsing scales well; format drift is the tax |
| Operational | **4/10** | Each engagement is a discrete project with its own clock |
| Geographic | 5/10 | US-bound: the FMC rule is the product's foundation |
| Customer | 6/10 | Thousands of similar buyers — genuinely homogeneous |
| Distribution | 7/10 | Directories are finite but far from exhausted |
| AI automation | 7/10 | Raised by the mechanical compliance check |
| Marginal cost | 6/10 | Falls but never approaches zero — VA time per audit is real |
| International | **3/10** | Rebuilding for EU/Asia means a different regulatory basis entirely |

### **Scalability Score: 5/10**

### What breaks first

- **~10 clients** — founder hours. The first real wall, and it arrives early.
- **~30 clients** — carrier follow-through. Dozens of open disputes on independent
  30-day clocks; the Watchdog station stops being a nicety.
- **~100 clients** — per-carrier ruleset maintenance across contract variants. Needs a
  real data model, not a script.
- **~500 clients** — becomes a software company, or stops growing. The charter's
  constraints do not survive this point.
- **1,000+** — not reachable on this model. US ocean D&D is not that big a pond for one operator.

---

## 11. Defensibility / moat

| Source | Strength | Honest note |
|---|---|---|
| Brand | **2/10** | None. Would take years in a relationship market |
| Network effects | **1/10** | None. Clients don't benefit from each other |
| **Proprietary data** | **7/10** | **The real one.** Accumulated per-carrier free-time terms, invoice-format signatures, and compliance-defect patterns across clients |
| AI/data flywheel | 6/10 | Every audit improves parse coverage and the defect library |
| Switching costs | **3/10** | Low. Contingency is transactional by nature |
| Community | 1/10 | None |
| Distribution | 5/10 | Directory access is public; *warmth* is not |
| Patents/IP | 1/10 | None available |
| Partnerships | 4/10 | Potential: TMS vendors, brokers, port associations |
| Cost advantage | 6/10 | Solo + offshore beats enterprise cost structure decisively |
| First-mover | 3/10 | Not first. Post-rule timing is the real advantage, not order |
| **Regulatory** | **6/10** | Fluency in the 20-element rule is a genuine, learnable-but-not-trivial edge |
| Technical | 3/10 | Parsing is not hard for a competent competitor |
| User-generated data | 5/10 | Client invoice corpus, subject to confidentiality |

### **Moat Score: 4/10**

### "What prevents a better-funded competitor from copying this?"

**Honestly: very little, and this is the idea's central weakness.**

What actually protects the position, in order of durability:

1. **Segment economics, not technology.** A funded competitor needs enterprise contract
   values to support an enterprise sales motion. Selling $12K/yr audits to 35-person
   forwarders is a bad business *for them* and an excellent one for a solo operator with
   no overhead. This is the most durable protection and it is structural.
2. **The accumulated ruleset.** After 18 months of real audits, the founder holds a
   per-carrier, per-contract free-time and defect library that cannot be bought.
   **This is the asymmetric upside and it should be built deliberately from day one, not
   as a by-product.**
3. **Trust with commercial data.** A forwarder hands carrier invoices to someone who
   sounds like them. That advantage is real and non-transferable — but it does not scale,
   which is exactly why it is a moat for a small business and not for a large one.

**What does not protect it:** the parsing, the matching, the dispute letters. All
replicable in a quarter by a funded team — and per the search record, several are
already funded and building precisely this.

---

## 12. Risk analysis

| Risk | P | Impact | Mitigation |
|---|---|---|---|
| **Carriers won't pay third-party-originated disputes** | **Medium** ↓ | **Critical** | Finding 2's NVOCC pass-through + 30-day mandated resolution. Route through the forwarder as billed party from day one. Was the #1 risk; now second. |
| **Fee compression to 10–15%** | **High** | **High** | Hard 20% floor at Station 10. Shift to retainer+reduced-contingency early. Sell *not thinking about it*, not the spreadsheet. |
| **Funded AI-native competitors** | **High** | **High** | Compete on segment, not features. Own the sub-$20K contract band they can't serve profitably. |
| **In-housing after they see the method** | **Medium-High** | **High** | Finding 1 helps: a 20-element check over hundreds of invoices resists casual in-housing. |
| **Legal — unlicensed practice / agency liability** | **Low-Medium** | **Critical** | Do **not** skip the $1,800 legal spend. The line between "billing audit" and "transacting customs business" must be written down by counsel. |
| **Regulatory reversal** | **Medium** | **High** | Already materialised once — *WSC v. FMC* (Sept 2025) struck the billed-party restriction. Verify current rule status before every material claim. |
| Data/document quality (scans, missing timestamps) | **High** | Medium | Station 5 failure modes; decline unusable engagements rather than absorb the cost |
| Client concentration | Medium | High | No client >25% of revenue past month 12 |
| **Key person** | **High** | **Critical** | The moat *is* the founder. No mitigation short of hiring from the industry. |
| Customer acquisition | Medium | High | Directories are finite; referrals (Station 17) must work by month 9 |
| Retention | Medium-High | High | Convert to retainer as fast as possible |
| Technical / platform | Low | Low | No platform dependency — the zero-API design pays off here |
| AI dependency | Low | Low | Model costs immaterial; the work degrades gracefully to manual |
| Financial | **Low** | Low | $5K at risk, cash-positive within a quarter |

### **Risk Score: 6/10**

Moderate-to-elevated. Notably, the risks are concentrated in **commercial** questions
(will they pay, will they stay, will someone cheaper arrive) rather than **existential**
ones (can it be built, is it legal, can it be afforded). That is the better distribution
to face, because commercial questions get answered by phone calls, cheaply.

---

## 13. Return on capital

| Measure | Value |
|---|---|
| Expected capital requirement | **$5,000–6,600** |
| Expected annual profit at maturity (base) | **$95K** |
| Expected annual profit (probability-weighted) | **$118K** |
| **Potential ROI on capital** | **~1,800%** base · **~2,300%** EV-weighted |
| **Payback period** | **2–4 months** on cash |
| Revenue per dollar invested | **~$21–28** |
| Profit per dollar invested | **~$14–18** |

### **Capital Efficiency: 10/10**

The highest score in this analysis, and it is not close. The business is delivered
before it is billed and billed out of recovered money — there is no inventory, no float,
no build phase to fund. Essentially all the risk sits in **founder time**, not capital.

---

## 14. Distribution & customer acquisition

| Channel | Fit | Note |
|---|---|---|
| **Association directories (PCC, NCBFAA)** | **9/10** | **Strongest.** Names, direct numbers, emails of ops leadership. Pre-qualified by membership. |
| **Port authority registries (LA/LB, NY/NJ)** | 8/10 | Public, complete, includes fleet size |
| Direct outbound email | 8/10 | Cheap, automatable, no gatekeeper |
| **Warm network (Moat #3)** | **9/10** | Highest conversion, smallest volume. Use it for the *test*, not the business. |
| Referral loops | 7/10 | Forwarders know forwarders; must work by month 9 |
| Partnerships (TMS, brokers) | 6/10 | Slow but high leverage |
| Content marketing / SEO | 5/10 | "FMC 20 data elements" is a genuinely searchable, high-intent topic |
| Communities / LinkedIn | 5/10 | Real but slow |
| Enterprise sales | 2/10 | Wrong segment entirely |
| Paid acquisition | 2/10 | Audience too small and too specific |
| App stores / viral / influencer | 1/10 | Not applicable |

**Strongest channel: association member directories → personalised cold email →
phone call.** The founder's structural advantage is that this list is *reachable
without an introduction* and the email will read as insider.

**Acquisition difficulty: MODERATE.** Not easy — cold B2B outbound to busy operators
converts in low single digits. Not difficult — the buyer is identifiable, reachable,
feels the pain, and faces zero financial risk in saying yes.

### **Distribution Score: 8/10**

---

## 15. Competitive position

| Competitor | Strengths | Weaknesses | Pricing | Position | Why switch to us | What we do better |
|---|---|---|---|---|---|---|
| **[Ocean Audit](https://oceanaudit.com/)** | Ocean-specialist, established, recovery track record | Aimed at large shippers; slow onboarding | 20–30% contingency | Incumbent specialist | Too small to matter to them | Serve sub-$20K accounts profitably |
| **[TransAudit](https://transaudit.com/ocean-detention-and-demurrage/)** | Explicit D&D practice, scale | Enterprise motion, impersonal | Contingency | Incumbent | Same | Founder-level attention |
| **Intelligent Audit / CT Global** | Full freight-audit suite, multimodal | Ocean D&D is one line among many | Contingency + SaaS | Broad incumbent | Depth beats breadth here | Purpose-built for the 20-element rule |
| **Funded AI-native entrants (2024–25)** | Capital, automation, NLP tariff work | No domain trust yet; will chase larger contracts to justify burn | Unknown, likely SaaS | **Emerging threat** | — | Segment economics + real operator credibility |
| **In-house billing clerk** | Free at the margin, owns the data | No time, no rule knowledge, no leverage | $0 | **The true default** | Found money at zero risk | Coverage the clerk can't reach |
| **Maritime attorneys** | Authority, escalation power | $250–400/hr, no volume capability | Hourly | Adjacent | 10× cheaper at volume | Systematic, not case-by-case |
| **TMS D&D modules (PortPro etc.)** | Embedded in workflow | Visibility ≠ recovery | Bundled | Adjacent | They alert; we recover | Close the loop to cash |

**Positioning verdict: DIFFERENTIATED** — not significantly differentiated, and not
category-creating.

The differentiation is **segment + timing + basis**: the only operator purpose-built
for the post-May-2024 compliance checklist, aimed at forwarders too small for the
incumbents to want. That is a real position. It is **not** a technology position, and
it should never be sold as one.

---

## 16. Key economic drivers & sensitivity

The five variables that move the outcome most, ±20%:

| # | Variable | Base | ±20% effect | Sensitivity |
|---|---|---|---|---|
| **1** | **Contingency rate** | 25% | 20% → revenue −20%, profit **−29%**. 30% → profit **+29%** | **EXTREME** — flows straight to the bottom line |
| **2** | **Recoverable $ per container** | $11 | $8.80 → base revenue $112K, several clients fall below margin floor. $13.20 → $168K | **EXTREME** — also gates which clients are viable at all |
| **3** | **Annual churn** | 45% | 54% → LTV −17%, must win ~4 more clients/yr just to stand still. 36% → LTV +25% | **HIGH** — compounds |
| **4** | **Outbound conversion (contact→client)** | 1.5% | 1.2% → ~25 more contacts per client, sales hours +25%. 1.8% → capacity binds sooner | **HIGH** — converts directly into founder hours |
| **5** | **Hours per audit** | 4.0 | 4.8 → capacity 12→10 clients, revenue ceiling **−17%**. 3.2 → ceiling +25% | **HIGH** — the automation lever |

**Most sensitive assumption: the contingency rate**, because Phase 4 already predicted
downward pressure on it and because it is the one variable a client negotiates directly.
A drop from 25% to 15% — entirely plausible if clients send their own disputes — takes
base-case profit from **$95K to roughly $45K** and moves this from "worth doing" to
"probably not worth the hours."

**Second most sensitive: hours per audit** — and it is the one most improved by
Finding 1. Automating the 20-element check is the highest-ROI engineering work available,
because it cuts hours *and* raises win rate simultaneously.

---

## 17. Kill criteria

Measurable. Pre-committed. They bind when the outcome is disappointing — that is the point.

1. **Zero recoverable findings across the first 3 completed audits** covering ≥300
   containers total. *(Repo's original STOP — retained.)*
2. **No carrier credit approved within 45 days** of the third filed dispute package.
   *(Tests the load-bearing assumption directly; the 30-day mandated resolution window
   makes 45 days a fair test.)*
3. **Fewer than 3 document-sharing agreements from 60 contacted forwarders** (<5%
   engagement rate) after two full sequences.
4. **Achieved contingency rate falls below 18%** across any 3 consecutive signed
   engagements. *(Below the floor, the hours stop clearing opportunity cost.)*
5. **Average audit exceeds 8 founder-hours** after the first 5 engagements. *(Capacity
   ceiling drops below 6 clients; the business cannot reach break-even on time.)*
6. **Cumulative revenue below $15K at month 12** with 15 hrs/wk sustained.
7. **Counsel advises the activity requires a customs broker licence** the founder does
   not hold. *(Immediate, non-negotiable stop — the Candidate 2 failure.)*

Any **two** triggering simultaneously = stop. **#7 alone** = stop immediately.

---

## 18. Validation plan

### Phase 1 — Demand test
- **Objective:** Will forwarders hand over real carrier invoices and gate records?
- **Cost:** ~$0 · **Human:** 15 hrs · **AI:** 10 hrs
- **Metric:** document sets received from contacted forwarders
- **Go/no-go:** **≥3 of 20 contacted share files within 14 days.** Below 2 → channel fails.

### Phase 2 — MVP (the audit itself)
- **Objective:** Do findings exist, and can they be produced repeatably?
- **Cost:** ~$50 · **Human:** 25 hrs · **AI:** 30 hrs
- **Metric:** $ found per 100 containers; % from the **20-element check** vs judgement bases
- **Go/no-go:** **≥$1,000 in defensible findings across the 3 sets.** Zero across all → Kill #1.

### Phase 3 — First paying customers (**the real test**)
- **Objective:** **Will a carrier actually pay?**
- **Cost:** ~$300 (legal review of the agreement) · **Human:** 20 hrs · **AI:** 15 hrs
- **Metric:** credits approved; days to response; whether `filed_by` = client or third party
- **Go/no-go:** **≥1 credit approved within 45 days.** Zero across 3 packages → Kill #2.
- **This phase answers the question the entire business rests on. Everything before it is preparation.**

### Phase 4 — Product-market fit
- **Objective:** Does it recur, and does it hold price?
- **Cost:** ~$1,500 · **Human:** 120 hrs over 3 months · **AI:** 180 hrs
- **Metric:** clients converting to monthly; realised contingency rate; hours per audit
- **Go/no-go:** **≥4 retained clients, realised rate ≥20%, ≤6 hrs per audit.**

### Phase 5 — Scale
- **Objective:** Break the founder-hours ceiling
- **Cost:** $5–10K (VA + automation) · **Human:** 15 hrs/wk sustained · **AI:** 100+ hrs/mo
- **Metric:** clients per founder hour; % of findings from automated checks
- **Go/no-go:** **≥60% of findings machine-generated** and **≥12 clients at ≤10 founder hrs/wk.**

---

## 19. Opportunity cost

| Measure | Estimate |
|---|---|
| Months of focused effort before meaningful validation | **2–3 months** (Phase 3) |
| Capital at risk | **$5,000** — and realistically under $1,000 before the answer arrives |
| Founder hours at risk before the go/no-go | **~120 hours** |
| Difficulty of abandoning | **Low.** No entity commitments, no staff, no client contracts beyond contingency work that self-terminates. |
| **Skills/assets retained on failure** | **Substantial.** A working document-parsing pipeline; deep fluency in the FMC billing rule; ~20 warm relationships with forwarder ops leadership; a validated (or invalidated) outbound channel; and a reusable business-operating system. Almost none of this is idea-specific. |

### **Opportunity Cost Score: 3/10** *(low cost)*

Unusually cheap to try. The 120 hours to a real answer is the true price, and most of
what it buys survives failure. The main competing use of these hours is a different
business idea — and this one costs less to disprove than almost anything comparable.

---

## 20. Business potential scorecard

| Category | Score | Weight | Note |
|---|---|---|---|
| Market Size | 6/10 | low | Real, growing, but SOM is capacity-bound |
| **Customer Pain** | **8/10** | **high** | Proven by the ugly workaround |
| **Willingness to Pay** | **8/10** | **high** | Adjacent market pays 20–30% today |
| Revenue Potential | 5/10 | med | Ceiling ~$250K solo |
| Profit Potential | 7/10 | med | 65–75% GM, negligible overhead |
| Scalability | 5/10 | low | Services, not software |
| **Capital Efficiency** | **10/10** | **high** | $5K to a real answer |
| AI Automation Potential | 7/10 | med | Raised by the mechanical compliance check |
| Founder Leverage | 6/10 | med-high | $122 profit/founder hour |
| **Distribution** | **8/10** | **high** | Directories are the unlock |
| Competitive Advantage | 6/10 | med | Segment + timing, not technology |
| **Defensibility / Moat** | **4/10** | med | The weak point |
| Ease of Execution | 7/10 | med | No build required to start |
| **Speed to Market** | **9/10** | **high** | Revenue possible in weeks |
| Probability of Success | 6/10 | **high** | 62% some form of success; 33% >$100K profit |
| Risk-Adjusted Return | 7/10 | high | Excellent on capital, fair on time |

### **OVERALL BUSINESS POTENTIAL: 7.0 / 10**

**Weighting rationale.** The heaviest weights went to **Capital Efficiency, Speed to
Market, Distribution, Willingness to Pay, Customer Pain, and Probability of Success** —
because the founder is bootstrapping $5,000 on 15 spare hours a week. For that operator,
*how fast can I find out and how little does it cost to be wrong* dominates *how big
could this get*. Market Size, Scalability and Moat were weighted **down** for the same
reason: a $250K/yr cash business that pays for itself in a quarter is a success against
these constraints, and no amount of TAM helps someone who cannot fund a build.

> **The same idea, scored on venture weights** — market size, scalability, moat and
> revenue potential heavy — comes out around **4.5/10**. Both numbers are correct. The
> difference is not analysis, it is the question being asked. Judged as a business to
> own, this is good. Judged as a business to raise money against, it is not.

---

## 21. Final investment verdict

### **Recommendation: 3 — VALIDATE CHEAPLY** *(upper end, adjacent to 4 — BUILD MVP)*

| Metric | Value |
|---|---|
| **Overall Business Potential** | **7.0/10** (bootstrap-weighted) · 4.5/10 (venture-weighted) |
| **Probability of commercial success** | **~62%** (reaching sustainable operation) |
| **Probability of failure** | **~38%** |
| Expected time to first revenue | **6–10 weeks** |
| Expected time to profitability | **2–4 months** (cash) · **18–24 months** (incl. founder time) |
| **Most likely 3-yr revenue** | **$140K** |
| **Most likely 3-yr profit** | **$95K** |
| **High-case 3-yr revenue** | **$420K** |
| **High-case 3-yr profit** | **$250K** |
| Estimated capital required | **$5,000–6,600** |
| Initial human hours | **~160** |
| Initial AI hours | **~146** |
| Ongoing human hours/month | **~39** |
| Ongoing AI hours/month | **~78** |
| **AI-automatable** | **~68%** ongoing |
| Risk Score | **6/10** |
| Scalability Score | **5/10** |
| Founder Leverage Score | **6/10** |
| Capital Efficiency Score | **10/10** |
| Moat Score | **4/10** |

**Why 3 and not 4:** the load-bearing assumption — a carrier actually paying — remains
untested. Finding 2 improves the odds considerably but does not replace a credit landing
in a client's account. **Why upper-end 3:** the validation cost is near-zero and the
regulatory catalyst is real, recent, and unexploited in this segment.

**Why not 5:** the ceiling. Even executed well, this is a $150–400K/yr business under
the stated constraints, with a 4/10 moat and funded competitors arriving. That is a good
outcome, not a rare one.

---

## 22. The one-sentence decision

> **If I were the founder, I would VALIDATE this opportunity** — because a regulatory
> change in May 2024 turned the core work from an argument into a checklist, the buyer
> is reachable without an introduction and risks nothing by saying yes, and the whole
> question can be settled for under $1,000 and 120 hours — while being clear-eyed that
> the realistic prize is a $100–250K/year business I own outright, not a company.

### What would change my mind

**Three pieces of evidence, in order of impact:**

1. **A carrier credit actually landing — and who filed it.** One approved credit moves
   Willingness to Pay and Probability of Success together and converts this to a **4 —
   BUILD MVP**. Conversely, three packages filed with zero credits in 45 days kills it
   outright. *This is the single highest-information event available, and it costs
   almost nothing to obtain.*

2. **The defect rate on the 20 mandatory data elements across real invoices.** If a
   large share of carrier invoices are non-compliant, the business gets a mechanical,
   automatable, hard-to-contest basis — automation potential rises toward 8/10, hours
   per audit fall, and the moat shifts from the founder to the ruleset. **This is
   checkable on the very first invoice the founder receives, before any dispute is
   filed, and it should be the first thing measured in Phase 2.** If the defect rate is
   negligible, the business falls back to arguable findings and the economics weaken
   sharply.

3. **The realised contingency rate across the first five signed engagements.** If it
   holds at 22–25%, the base case stands. If clients routinely push to 15% — Phase 4's
   BEAR prediction — base-case profit roughly halves to ~$45K and the hours stop
   justifying themselves. This is the quietest of the three risks and the most likely to
   be discovered too late.

---

### Analytical notes

- **Facts** are cited inline. **Assumptions** are labelled in §2 and §3 and carry the
  entire customer-side model — there is no customer evidence yet, and every revenue
  figure inherits that.
- Survivorship bias: the 38% failure rate is deliberately set above what founder
  enthusiasm suggests. Most part-time B2B services businesses do not reach $50K/yr.
- TAM is **not** used as evidence of capture anywhere; §2 works down to a
  capacity-bound SOM and the capture table shows what each revenue level actually requires.
- The **asymmetric upside** most likely to be missed: the per-carrier compliance and
  free-time ruleset. It is treated here as a by-product of doing the work, but it is the
  only asset in this business that a better-funded competitor cannot simply build. If it
  is deliberately constructed from engagement one, the PRECISION scenario's probability
  is meaningfully higher than the 7% assigned.
