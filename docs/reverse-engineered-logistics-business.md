# Reverse-Engineered Business — Logistics Operations Founder

**Status:** Complete analysis (Phases 0–4)
**Method:** Fix the founder constraints → define a "10" on each dimension (problem severity, willingness to pay, channels, moat, unit economics, time-to-first-dollar) → combine into candidates → score against the fixed constraints → pick one and execute.
**Date:** September 2026 (entry timing: beginning of trans-Pacific peak season, when detention/demurrage billing volume spikes).

---

## Phase 0 — Fixed constraints (input recap)

| Constraint | Locked value |
|---|---|
| Insider industries | Ocean freight forwarding, customs brokerage, port drayage |
| Reachable buyers (no intros) | Ops managers at regional forwarders (10–100 employees); customs compliance managers at mid-sized retail importers ($10M–$100M rev.); dispatch managers at port-adjacent trucking firms |
| Time | **15 hrs/week**, nights & weekends |
| Capital at risk | **$5,000** |
| Solo skills | No-code automation (Zapier/Make, Airtable), process mapping/SOP design, direct B2B outbound, basic Python (data parsing) |
| Hard refusals | Cold door-knocking/street sales; native mobile apps; managing offshore **software agencies** |

## Phase 1 — What a "10" looks like (input recap)

- **Pains (S11):** (1) carrier detention/demurrage (D&D) overcharges from bad gate times, $5–25k/month; (2) SKU/HTS classification backlogs; (3) chassis "ghost day" lease overcharges; (4) LCL cargo visibility, ~2 hrs/day of manual co-loader chasing; (5) ISF 10+2 chasing, $5,000 mandatory CBP fine per miss.
- **Proven invoices (S13):** audit recovery at **20–30% contingency**; classification help at **$250–400/hr or $5–15/SKU**; visibility at **$5–12/container, $500/mo minimums**; CargoWise at **$150–300/user + $1.50–6/entry**; dispatch SaaS at **$150–250/truck ($1.5–5k/mo)**.
- **Channels (S12/17):** LinkedIn Sales Nav + Apollo (480 importer compliance profiles); NCBFAA/PCC forwarder directories; port-authority motor-carrier registries (cold call/SMS 10am–2pm); BuiltWith → Shopify Plus brands; CBP.gov licensed-broker directory.
- **Moats (S16):** domain vernacular (demurrage *inside* the terminal vs detention *outside*); CargoWise/workflow blueprinting; 5–10 warm ops-manager relationships; zero-API file workarounds (XML/CSV, drag-and-drop, email attachments); CBP "reasonable care" regulatory fluency.
- **Low cost-to-serve engines (S18):** drag-and-drop file parser; hosted Airtable/Make workspace; Zapier+Twilio notification engine; productized audit; digital SOP templates.
- **Avoid (S18 traps):** GPS/IoT hardware; ocean-carrier EDI integrations; CargoWise write-back licensing; rate-optimization math engines; multi-tenant white-label customer portals.
- **Fast-money wedges (S19):** contingency D&D audit (25%); classification workspace ($950 setup + $150/mo); manual LCL monitoring ($300/mo pilot); flat-fee compliance pre-audit ($1,500); per-filing ISF concierge ($40/filing).

---

# Phase 2 — Combine: 8 candidate businesses

Each candidate is a deliberate cross-section of the specialist outputs. The DNA line under each name shows exactly which inputs were combined.

## Candidate map (DNA at a glance)

| # | Working name | Pain | Buyer & channel | Proven invoice | Delivery engine | First-dollar wedge |
|---|---|---|---|---|---|---|
| 1 | **Last Free Day** (D&D recovery desk) | P1 D&D overcharges | Importer compliance mgrs · LinkedIn/Apollo email | 20–30% audit contingency | File parser (PDF/CSV) + human review | Pure-contingency audit |
| 2 | **Ghost Day Finders** (chassis reconciliation) | P3 chassis ghost days | Drayage dispatch mgrs · port registries, call/SMS | Contingency recovery (same model as freight audit) | Gate-ticket parser + Airtable | First month audited free, contingent on findings |
| 3 | **ClassifyFlow** (SKU onboarding workspace) | P2 HTS backlog | DTC/Shopify Plus logistics dirs · BuiltWith + LinkedIn | $5–15/SKU, $250–400/hr consulting | Hosted Airtable/Make workspace + scripts | $950 setup + $150/mo |
| 4 | **MorningSheet** (LCL status desk) | P4 LCL visibility | Forwarder ops directors · NCBFAA/PCC directories | $5–12/container, $500/mo visibility spend | Manual desk → email-parser/Zapier engine | $300 paid monthly pilot |
| 5 | **ISF Ping** (filing chase service) | P5 ISF deadline risk | Small brokers/forwarders · CBP directory | $1.50–6/entry; $40/filing concierge | Zaper/Twilio reminder sequences | $40/filing from week 1 |
| 6 | **Reasonable Care Check** (entry pre-audit) | P2/P5 latent tariff errors | Importer compliance mgrs · LinkedIn/Apollo | $250–400/hr compliance consulting | Checklist + Python sampling script | $1,500 flat audit |
| 7 | **BrokerOps Kits** (SOP template store) | Workflow chaos (underlying P2/P5) | Independent small brokers · CBP directory + SEO landing pages | CargoWise license pain | Digital downloads / Airtable clones | $49–299 template packs |
| 8 | **AuditBox** (D&D parser SaaS for forwarders) | P1, but bought by the intermediary | Forwarder ops directors · warm network + NCBFAA | $500/mo visibility/tool minimums | Self-serve drag-and-drop parser | $500/mo paid beta, 3 design partners |

---

## 1. Last Free Day — detention & demurrage recovery desk

**DNA:** Pain P1 · Buyer: customs compliance managers at $10–100M importers · Channel: LinkedIn Sales Nav (480 profiles) → Apollo → cold email · Invoice: 20–30% recovery contingency (S13-1) · Engine: drag-and-drop file parser (S18-1) · Wedge: DFY contingency audit (S19-1) · Moats: vernacular (M1), warm network (M3), zero-API file workaround (M4).

**Offer:** *"Send me your ocean carriers' D&D invoices and the terminal gate-activity reports (eModal/terminal portal exports) for the last 6–12 months. I match every billed day against actual gate-out-full / gate-in-empty events, the carrier's own free-time tariff rules, terminal-closure and chassis-shortage days, and produce a line-item dispute schedule plus ready-to-send dispute letters. You pay 25% of credits/refunds actually issued. No recovery, no fee."*

**How the first dollar happens (days, not months):** contingency terms remove purchase risk; the sale is a 15-minute call and a signed one-page agreement. Cash itself arrives later (carrier credits take 60–120 days), so the first *signed engagement* can land in week 2 while operating burn stays near zero.

**How it runs at 15 hrs/week:** audits are batchable weekend work — no standing daily obligation. Documents arrive via a shared Drive/Dropbox upload folder (no API, no portal build). Early audits take 6–10 hours with partial scripting; within five audits the Python parser handles extraction and day-counting, and the founder only reviews exceptions and signs letters (target 2–3 hrs/client-month).

**Strengths:**
- The single most expensive, best-documented pain on the list, with a payment model the buyer already uses (Ocean Audit / Intelligent Audit have trained the market).
- Contingency = the easiest possible B2B "yes": no budget approval, no PO fight.
- Regulatory tailwind: OSRA 2022 and the FMC's detention/demurrage rule (46 CFR Part 541) require proper, timely, substantiated billing and prohibit D&D that doesn't incentivize cargo movement — legitimate leverage in dispute letters, with FMC small-entity complaints as a backstop.
- Every audit *generates training data*: carrier-specific tariff/free-time rules, labeled invoice-vs-gate pairs, winning dispute language. The work funds the moat.
- Incumbents chase large shippers; the $10–100M importer mid-market is under-served because it's too small for the big audit firms' sales teams and too document-messy for their generic engines.

**Fatal flaws / honest weaknesses:** cash lag (60–120 days to credits); some importers can't self-serve terminal gate logs and must request them from drayage providers (adds a data-collection step); D&D is a commercial billing dispute that requires the *billed party* to file — the founder drafts, the client submits.

**Traps avoided:** no carrier EDI, no terminal API contracts, no software the buyer has to log into at launch, no hardware, no mobile app.

---

## 2. Ghost Day Finders — chassis pool invoice reconciliation for drayage fleets

**DNA:** Pain P3 · Buyer: dispatch managers at port-adjacent trucking firms · Channel: port-authority motor-carrier registries, cold call/SMS 10am–2pm · Invoice: contingency recovery modeled on freight audit · Engine: gate-ticket parser (OCR of ticket photos → CSV) + Airtable matching (S18-1/2) · Moats: M1, M2, M4.

**Offer:** *"Photograph or scan the gate tickets your drivers toss in the box (or export your gate moves). I match them line-by-line against the DCLI/TRAC/Flexi-Van monthly pool invoice and find ghost days — chassis billed after the container went back. Contingency: 25–30% of credits issued."*

**How the first dollar happens:** a free first-month reconciliation on one small fleet (5–15 trucks), paid from recovered ghost-day credits; referrals through the same dispatch desks afterward.

**Strengths:** same proven contingency playbook as #1 with almost no software overlap risk; buyers are named, phone-listed, and cheap to reach in registries; dispatchers already hate the cardboard-box system; pools routinely miss gate-in/out EDI, so discrepancies are structural, not rare.

**Fatal flaws:** recovery dollars per event are small ($30–150/day per chassis) and need volume to pay; source documents are often *physical* (OCR friction, driver compliance); fleets with modern TMS gate feeds are already partially protected; channel depends on cold calling (permitted, but heavier work than email); some fleets already dispute in-house as routine.

**Verdict role:** strongest **fast-follow / second module** — the same reconciliation engine re-skinned once #1 is cash-flowing, not the opening move.

---

## 3. ClassifyFlow — turnkey SKU/HTS classification onboarding workspace

**DNA:** Pain P2 · Buyer: logistics/supply-chain leads at DTC/Shopify Plus importers ($5M+ web sales) plus mid-size retail importers · Channel: BuiltWith → LinkedIn → email · Invoice: $5–15/SKU and $250–400/hr consulting · Engine: hosted Airtable + Make with HTS-lookup Python script (S18-2) · Wedge: $950 setup + $150/mo (S19-2) · Moats: M2 (workflow blueprint), M5 (reasonable-care fluency).

**Offer:** a pre-built SKU-onboarding base with validation rules, required-document checklists, HTS suggestion script (keyword + prior-entry history), review/approval states, and a CBP-ready audit trail. Founder loads the initial catalog for the $950 setup, then $150/month hosting/maintenance.

**Strengths:** genuinely recurring revenue; seasonal catalog launches create urgent, budgeted spikes; the output doubles as the importer's "reasonable care" defense documentation (M5).

**Fatal flaws:** classification carries *liability* — buyers expect near-legal accuracy and a wrong code lands on them; $950 is a trust sale that is slow without a referral; customs brokers already give classification away as a loss-leader; AI HTS tools are commoditizing the lookup itself; IP can be copied out of Airtable; revenue is seasonal and lumpy.

**Verdict role:** viable mid-term product for warm importer relationships, but a slower, riskier day-one business than the contingency plays.

---

## 4. MorningSheet — LCL cargo status desk for small forwarders

**DNA:** Pain P4 · Buyer: ops directors at regional forwarders (20–100 staff) · Channel: NCBFAA/PCC directories · Invoice: $5–12/container / $500/mo tool minimums · Engine: manual service first, then email-parsing + Zapier notification automation (S18-3) · Wedge: $300/mo paid pilot (S19-3) · Moats: M1, M3.

**Offer:** founder (later, automation) polls 15 co-loader contacts each morning, normalizes statuses into one sheet, and pushes a branded email/WhatsApp-style status digest to the forwarder's ops team.

**Strengths:** sticky (integrated into the customer's morning ritual), instant perceived value, clean path from human to automation as reply patterns stabilize.

**Fatal flaws:** **the operating shape violates the 15-hour constraint** — one client needs ~7–10 hours/week of *weekday 7am* work that cannot be done on nights/weekends while holding a day job; two clients exhaust the schedule; co-loader replies are unstructured free text; the founder is personally on the hook when cargo goes dark. This is a job, not a company, until the automation exists — and building the automation before having a paid desk is the classic pre-mature-build trap.

**Verdict role:** park until a parser can do 80% of the polling; never launch the fully-manual version.

---

## 5. ISF Ping — supplier-chase service for ISF 10+2 filings

**DNA:** Pain P5 · Buyer: small brokers/forwarders (CBP directory) · Invoice: $40/filing (S19-5) against $1.50–6/entry software economics · Engine: Zapier + scheduled email/WhatsApp reminder sequences with tracking in Airtable (S18-3) · Moats: M1, M5.

**Offer:** $40 per shipment to chase commercial invoices/packing lists from Asia suppliers on a timed escalation cadence before the 24-hour pre-departure deadline, logging receipt into the broker's workflow via CSV/email.

**Strengths:** acute, fine-driven pain ($5,000/violation); easy to quote per transaction; time-zone work (chasing China/Vietnam in US evenings) actually fits "nights."

**Fatal flaws:** **deadline-bound, daily-fragile work** that collides with a 15-hour cap and a day job — a single missed escalation while the founder is unreachable contributes to a $5,000 penalty; the work is already commodity-priced through offshore broker support desks; $40/filing needs very high volume to matter and the owner absorbs sleepless-night liability; no data moat compounds.

**Verdict role:** reject as a standalone; the *reminder-sequence template* is a future feature or lead magnet, not the business.

---

## 6. Reasonable Care Check — flat-fee historical entry audit

**DNA:** Pain: latent classification/entry errors behind P2/P5 · Buyer: importer compliance managers via LinkedIn/Apollo · Invoice: $250–400/hr compliance consulting · Engine: sampling script + formal checklist (S18-1) · Wedge: $1,500 flat fee for 100 sampled entries (S19-4) · Moat: M5 regulatory fluency, M1.

**Offer:** a one-time "reasonable care health check": 100 randomly sampled historical entries reviewed against declared descriptions and current HTSUS/duty treatment, producing a findings register, exposure estimate, and remediation checklist — explicitly a *data review*, not a legal opinion or binding ruling.

**Strengths:** fixed-scope, fixed-price, batchable weekend work; strong trust-builder and discovery channel — every audit reveals either D&D invoice problems (→ #1) or classification backlog (→ #3); good response bait in cold outbound ("free 10-point self-audit checklist").

**Fatal flaws:** no recurring revenue; the buyer's pain is *latent* (they are not on fire until audited), so it sells on fear and education; unlicensed provider must be careful with scope language versus licensed brokers/attorneys.

**Verdict role:** best used as a **door-opener and upsell path** supporting #1, not the lead offer.

---

## 7. BrokerOps Kits — SOP/template store for small customs brokers

**DNA:** Pain: the operational disorder underneath P2/P5 · Buyer: independent brokers (1–5 staff) via CBP directory and port-specific SEO landing pages · Invoice: CargoWise spend envy ($150–300/user) · Engine: digital downloads / Airtable & CargoWise configuration templates (S18-5) · Moat: M2.

**Offer:** $49–299 packs: ISF chase sequences, classification intake bases, entry-quality checklists, CargoWise workflow config guides, per-port landing pages ("Customs Broker Automation — Port of Savannah").

**Strengths:** near-perfect unit economics (sell once, deliver infinitely); zero support burden if well documented.

**Fatal flaws:** this audience is the least tech-forward on the list and does not shop via landing pages; no acute pain with an existing invoice maps directly; $49–299 one-time sales need traffic the founder doesn't have, and building SEO/audience is a 12-month unpaid grind; distribution (cold-selling a template pack to a 3-person brokerage) is awkward and low-yield.

**Verdict role:** harvest the same IP later as marketing collateral / onboarding assets for #3 and #8; not a business on its own.

---

## 8. AuditBox — D&D audit parser sold to forwarders

**DNA:** Pain P1, purchased by the intermediary · Buyer: ops directors/partners at regional forwarders · Channel: **the founder's 5–10 warm relationships first (M3)**, then NCBFAA/PCC directories · Invoice: $500/mo tool minimums and $5–12/container visibility budgets · Engine: self-serve drag-and-drop parser (S18-1), shared Airtable workspace (S18-2) · Moats: M1, M2, M4.

**Offer:** forwarders upload their importer clients' carrier D&D invoices plus terminal gate exports; AuditBox outputs discrepancy schedules and dispute packets the forwarder delivers under its own name — a value-add that protects accounts at renewal. Pricing: $500/mo base (up to ~50 invoice lines), then per-line pricing; optional referral variant where the founder runs recovery on contingency and shares credit/visibility with the forwarding partner.

**Strengths:** recurring SaaS economics at near-zero hosting cost; the warmest possible channel for *this* founder (former peers); forwarders already hold both halves of the data (carrier bills + terminal records), eliminating #1's document-fetch friction; sticky workflow product; avoids the banned multi-tenant *portal* trap because the customer-facing artifact is a PDF/CSV report, not a login.

**Fatal flaws:** **slowest first-dollar path** if built cold — weeks of parser work precede revenue; forwarders don't themselves pay D&D (their clients do), so the ROI story is retention, not direct cash recovery, which lengthens sales cycles; without audited real-world cases the demo is thin.

**Verdict role:** **highest-scoring long-term asset, wrong day-one starting point** — unless it is funded and trained by Candidate #1.

---

# Phase 3 — Score against the fixed constraints

## Rubric

Every candidate is scored 1–10 on six dimensions. Weights reflect what this specific founder profile punishes and rewards: **proven willingness to pay** and **time to first dollar** are overweighted (the capital base is $5,000 and the channel must produce without intros); moat fit and unit economics guard against building a job; severity and channel access are table stakes.

| Dimension | Weight | What a 10 means here |
|---|---|---|
| Problem severity | 15% | Active, quantified monthly dollar loss with an ugly manual workaround *today* |
| Willingness to pay (existing invoice) | **20%** | Buyers already pay for an analogous solution; budget code exists |
| Channel access (no intros, no refusals) | 15% | Reachable in volume via the listed channels within skills/refusals |
| Founder-moat fit | 15% | Demands vernacular, SOP fluency, warm network, file-workaround skills |
| Unit economics (15h/$5k fit) | 15% | Near-zero cash cost to deliver; no daily labor trap; compounding leverage |
| Time to first dollar | **20%** | Paying engagement reachable inside 2–3 weeks of nights/weekends |

## Scoring matrix

| # | Candidate | Severity (15%) | WTP (20%) | Channel (15%) | Moat (15%) | Unit econ (15%) | First $ (20%) | **Weighted total** |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | Last Free Day (D&D recovery desk) | 9 | 10 | 8 | 9 | 8 | 10 | **9.10** |
| 8 | AuditBox (parser for forwarders) | 9 | 7 | 9 | 9 | 9 | 4 | **7.60** |
| 2 | Ghost Day Finders (chassis) | 7 | 8 | 7 | 8 | 7 | 8 | **7.55** |
| 6 | Reasonable Care Check (pre-audit) | 6 | 7 | 8 | 8 | 7 | 7 | **7.15** |
| 3 | ClassifyFlow (SKU workspace) | 8 | 7 | 7 | 7 | 8 | 5 | **6.90** |
| 4 | MorningSheet (LCL desk) | 7 | 6 | 7 | 6 | 4 | 8 | **6.40** |
| 5 | ISF Ping (filing chase) | 8 | 5 | 7 | 6 | 4 | 7 | **6.15** |
| 7 | BrokerOps Kits (SOP store) | 4 | 3 | 5 | 7 | 9 | 4 | **5.15** |

Machine-readable copy: [`../data/scoring-matrix.csv`](../data/scoring-matrix.csv).

### Why the scores fall where they do

- **#1 is the only candidate that nines-or-tens every dimension that matters.** It sells money-back, not software: the buyer's approval threshold is as close to zero as B2B gets. The only soft score is channel (8 — cold email to compliance managers is work, not magic) and unit economics (8 — manual until the parser matures).
- **#8 outscores #1 on long-term economics and channel warmth, but dies on time-to-first-dollar (4).** Building AuditBox before selling an audit means guessing at carrier tariff rules, document formats, and what buyers actually want — three unknowns the contingency service pays the founder to learn.
- **#2 is a near-clone of #1's mechanics with a harder document problem (physical tickets, OCR) and smaller per-event dollars.** Same engine, second vertical.
- **#6 over-performs its pain score because it is the cheapest trust-builder in the set** — but it is a wedge with no recurrence.
- **#3 is a real business, just a slower one:** liability weight, trust sale, and seasonal lumpiness push first dollar beyond the cheap-validation window.
- **#4 and #5 are both disqualified on unit economics by a constraint the scoring exists to protect: 15 hours/week.** Daily 7am status runs and hard legal deadlines are *un-delegatable standing shifts*; both fail the "can this survive my day job?" test in their manual form.
- **#7 is a content business wearing a SaaS costume.** Perfect margins, no market access.

## The key structural insight

**Candidates #1 and #8 are the same product at two ages, sold to two adjacent buyers** — and #1 is the only one that generates cash, training data, and case studies *while* #8 gets built. The recommendation below is therefore not "pick #1 and abandon #8"; it is a sequenced compound bet where services revenue capitalizes the SaaS for free.

---

# Phase 4 — The pick and the 90-day execution plan

## Decision

1. **Start now: #1 Last Free Day** — pure-contingency detention & demurrage recovery for $10–100M importers, reached through cold email.
2. **Productize by month 4: #8 AuditBox** — turn the internal parser into a paid $500/mo beta for 3 forwarders from the warm network.
3. **Fast-follow module: #2 Ghost Day Finders** — re-skin the reconciliation engine for chassis pools once D&D cash flow exists.
4. **Use #6 (Reasonable Care Check) as the door-opener/upsell**, and mine its checklist as cold-email bait.
5. **Park #3, #7; do not build #4/#5 in manual form.** They each violate either the 15-hour ceiling or the $5k budget timeline; their best components (reminder sequences, SOP kits) get absorbed as features/collateral later.

### Why service-first beats product-first under *these* constraints

| Question | #1 Audit service now | #8 Build AuditBox now |
|---|---|---|
| First paying engagement | Week 2 | Week 6–10 at earliest |
| Cash needed before revenue | ~$150 (email infra) | ~$1–2k of unpaid build time |
| How carrier tariff rules are learned | Clients' real disputes *pay* for the learning | Guessed from public tariffs |
| Parser training documents | 5+ real, varied invoice/gate sets | Synthetic or begged sample files |
| Risk if pain assumptions are wrong | One wasted weekend | Weeks of nights wasted |
| Moat after 90 days | Rule library + case studies + a parser | A parser no one has paid for |

## The offer (exact commercial shape)

- **Fee:** 25% of D&D credits/refunds actually issued by the ocean carrier (market range is 20–30%; 25% splits the difference and is easy to defend).
- **No upfront fee, no monthly fee, no fee where no recovery occurs.**
- **Scope:** detention and demurrage invoices dated in the reviewable window (per each carrier tariff, typically the last 60–180 days; audit the longest window allowed).
- **Client obligations:** upload carrier invoices, pay status, and terminal container-history/gate-activity reports (with a checklist showing how to pull them from eModal/terminal portals or request them from their drayage provider); sign/submit dispute letters as the billed party; remit the fee within 15 days of a credit memo or refund appearing on their account.
- **Tail clause:** fee applies to credits resulting from disputes the founder prepared, for 12 months after submission (prevents carriers settling slowly to dodge the fee).
- **Deliverables:** (1) line-item discrepancy schedule per invoice; (2) evidence packet — gate event log, appointment records, terminal-closure/weather/chassis-shortage notices, the carrier tariff's free-time rule excerpt; (3) ready-to-send dispute letters citing the carrier's own tariff terms and, where relevant, OSRA 2022 / FMC 46 CFR Part 541 billing requirements (FMC small-entity complaint path kept as quiet backstop, never the opening threat); (4) a claim/credit tracker; (5) invoicing against verified credit memos.
- **Licensing posture:** D&D disputes are commercial billing disputes between cargo interest and carrier — **not** customs brokerage and not legal advice; the founder prepares factual analyses and letter drafts, the client signs everything. Scope language reviewed by counsel in week 1.

## 90-day plan (15 hrs/week)

### Week 0 — setup (~10 hrs; ~$800 committed)

- File LLC (or wait for the first signed agreement — either is defensible; the contract can initially run under the founder's name with an LLC to follow).
- Get a freight-claims-savvy contract attorney to review the contingency agreement template and scope language (~$500).
- Stand up Google Workspace + 2 cold-email sending domains, Apollo.io, an email warm-up/sending tool, Airtable CRM base, shared Drive intake folder, one-page Carrd site.
- Write the one-page **"7 ways ocean carriers miscount D&D days"** checklist (the cold-email bait; doubles as #6's marketing core).
- Text the 5–10 warm contacts: *"I'm testing a D&D audit — takes your old carrier invoices and terminal gate logs, finds miscounted days, writes the disputes. Pure contingency. Do you know who owns freight-invoice disputes at [company], and can I practice on one redacted month?"* Goal: 2 free practice audits for referrals/testimonials.
- Build parser v0 from those practice documents (see tool below).

### Weeks 1–6 — outbound & first engagements (15 hrs/week)

Weekly hour allocation:

| Activity | Hours |
|---|---|
| List building + 35–40 personalized cold emails + 3-touch sequences | 4 |
| Discovery calls and follow-ups | 2 |
| Audit production (scripts + exception review + letters) | 6 |
| Parser improvement (one new carrier/tariff rule per client) | 2 |
| Tariff/FMC study + SOP documentation | 1 |

- **List logic:** Sales Nav query per S12 — title includes "Customs Compliance" / "Global Trade Compliance" / "Import Compliance" / "Trade Compliance Manager," US HQ, company revenue $10–100M, importers with container volume signals (retail/CPG/industrial). ~480 profiles; enrich in Apollo; prioritize importers through LA/LB, NY/NJ, Savannah, Houston.
- **Secondary channel — forwarder referrals:** NCBFAA/PCC directory outreach to ops leaders, asking for 2 client introductions with the audit as a free value-add they can deliver (no fee-split discussion until one converts).
- **Pipeline math (conservative):** ~240 first-touch emails in 6 weeks → 3–6% positive reply ≈ 8–14 conversations → 5–9 discovery calls → 25–35% close on a zero-cost offer ≈ **2–3 signed contingency engagements by week 6.**
- Call sequence: confirm pain → request last 6 months of D&D invoices *on the call* (the document request is the buying signal) → send agreement + intake checklist.

### Weeks 4–10 — deliver audits, let the parser compound

- First 3 audits manually-with-scripts (6–10 hrs each — accept the cost; these build the rule library); audits 4+ targeted at 2–3 hrs via the parser with human exception review.
- Track two ratios rigorously: **identified $ per audit hour** and **credit recovery rate**.
- Every disputed line becomes a labeled record: carrier, terminal, charge type, tariff clause, delay cause, evidence, outcome.
- Submit claims in batches; set clients' expectations honestly: credits land in 60–120 days.
- Use the #6 Reasonable Care Check only as a cross-sell where an audit uncovers classification issues, or as a fallback offer when a prospect "doesn't have D&D problems."

### Weeks 8–12 — pre-productize and run the stage gate

- Harden the parser into a drag-and-drop Streamlit app (hosted free/near-free): upload invoice + gate log, get discrepancy schedule + dispute packet.
- Offer 3 warm forwarder contacts the **AuditBox paid beta at $500/mo**, armed with real (anonymized) case results and sample reports.
- Decision gate at week 12 (below).

### Stage gates (go / pivot / kill)

| Gate at… | Go signal | Pivot signal | Kill signal |
|---|---|---|---|
| Week 6 | ≥2 signed contingency engagements | Calls reveal docs too hard to obtain at importers → shift channel to forwarder-held data (#8 earlier) | <20% call-show rate after 150 emails despite copy rewrites: rework ICP/offer |
| Week 12 | ≥3 audits submitted, defensible findings on ≥15% of billed dollars, ≥2 clients adding months | Findings exist but <$1k/account → take the same engine to #2 chassis ghost days (bigger volumes of small discrepancies) | Recovery rate <20% across carriers and no warm forwarder demand: stop |
| Month 6 | First credits received ($4–10k fees target) and 1 AuditBox beta paid | Slow carrier payments, strong tool interest → switch primary motion to #8 subscription | Neither cash nor subscriptions: wind down at <$2.2k total spent |

## $5,000 budget (6-month view)

| Item | Cost | Notes |
|---|---|---|
| Contract/scope review by attorney + LLC/registered agent | $800 | One-time; LLC can be deferred to first signing |
| Apollo.io (3 months, then pause) | $300 | Enrichment + list export |
| LinkedIn Sales Navigator (3 months) | $300 | List building; cancel after list build |
| Cold-email tool (warmup/sending, 6 mo) | $225 | e.g., Instantly-class tier |
| Google Workspace + 2 sending domains (6 mo) | $110 | Domain separation protects main inbox |
| Airtable + Make (6 mo) | $210 | CRM, intake, claim tracker, future automations |
| Landing page + logo | $120 | Carrd + one small logo purchase |
| Twilio (SMS tests for #2 later) + parser hosting/domain | $90 | Streamlit free tier initially; Fly.io if needed |
| **Committed subtotal** | **$2,155** | |
| **Reserve (57%)** | **$2,845** | 6 more months of tool runway, certified-mail/courier costs for dispute packets, occasional freelance *data/paralegal* help (never an offshore software agency) |

No paid terminal/carrier APIs, no EDI, no CargoWise licensing, no hardware — the entire model runs on exported PDFs/CSVs dragged into a folder.

## Constraint compliance checklist

- **15 hrs/week, nights & weekends:** D&D work is deadline-free and batchable; no standing weekday-morning or deadline-bound shift is sold (this is precisely why #4/#5 lose). Active clients capped at ~4 concurrent audits.
- **$5,000 max:** $2,155 committed before cash; reserve untouched unless claims pipeline justifies it.
- **No door-knocking/street sales:** email-first to importers; warm-email/referral to forwarders; SMS/calling reserved for the later drayage channel, where the registries publish dispatch-desk numbers (that's inside B2B outbound, not street sales).
- **No native mobile apps:** all artifacts are PDF/CSV/email plus a responsive browser tool.
- **No offshore software agencies:** parser built solo in Python; any future hire is a part-time freight-claims/data person *after* revenue, managed with SOPs (a skill the founder already has).
- **Skills used:** outbound sales, SOP design, Airtable/Make, basic Python parsing — exactly the Phase-0 stack.

## 12-month vision

- **Q1:** 2–3 importer clients on contingency; parser v0 internal; carrier tariff rule library seeded.
- **Q2:** 4–6 importer clients; first credits banked; AuditBox beta with 3 forwarders at $500/mo; decide whether forwarders or importers are the better primary channel from real numbers.
- **Q3:** AuditBox v1 (drag-drop, carrier-rule library, dispute packet generation); add the **chassis ghost-day module (#2)** and open the drayage SMS/call channel during non-peak dispatch hours.
- **Q4:** a two-vertical "freight billing recovery engine" with one human-in-the-loop service line (contingency cash + training data) and one subscription product line (margin + scale) — choosing whether to keep the boutique or chase the SaaS from a position of revenue rather than guesswork.

---

# Appendix A — Outbound scripts

**Cold email A — importer customs/trade compliance manager**

> Subject: D&D invoices from {{carrier}} — quick question
>
> Hi {{first}},
>
> I work with importers bringing freight through {{port}} and review ocean carrier detention/demurrage invoices against the terminal's own gate-activity records. Carriers routinely bill days the boxes couldn't move — terminal closures, chassis shortages, free-time miscounts — and those days are excludable under their own tariffs.
>
> I do it on pure contingency: no upfront or monthly fee, 25% only of credits the carrier actually issues. I'll also send a one-page checklist of the seven D&D billing errors worth checking every invoice for, whether or not we work together.
>
> Worth a 15-minute call this week? If you can pull the last 6 months of D&D invoices, I'll tell you on the call whether it's even worth looking at.
>
> {{name}}

**Cold email B — forwarder ops leader (referral/partner route)**

> Subject: free D&D recovery audit for two of your importer clients?
>
> Hi {{first}} — {{mutual logistics context line}}. I'm auditing carrier detention/demurrage bills against terminal gate records and getting credits issued for miscounted days. Right now I'm taking a handful of forwarder partners: you point me at two clients who pay meaningful D&D, I produce the discrepancy report and dispute letters under your cover, your client keeps 100% of the goodwill. Could I buy you 15 minutes to walk through a sample finding?

**SMS — drayage dispatch desk (Candidate #2, later phase; registry-sourced)**

> Hi {{first}}, got your desk number from the {{port}} licensed-motor-carrier registry. We reconcile DCLI/TRAC chassis invoices against gate tickets and recover "ghost day" charges on contingency — no cost unless credits come back. Who handles the monthly pool billing there?

**Discovery call — five questions that determine close**

1. Walk me through what happens when a D&D invoice lands — whose inbox, what gets checked today?
2. What did you pay in detention/demurrage over the last 6 months, and which carriers?
3. When you dispute now, what records do you attach — can you pull terminal container histories, or do they sit with your drayage provider?
4. Merchant haulage or carrier haulage on the worst lanes, and which terminals?
5. (After the numbers) If I can show defensible miscounted days with the evidence attached, is there any reason you wouldn't let me take it on at no cost to you?

# Appendix B — Reconciler data spec (parser MVP)

A runnable, dependency-free proof of the matching engine lives in [`../tools/dnd_reconciler.py`](../tools/dnd_reconciler.py) (`python3 dnd_reconciler.py --demo` generates valid sample data and prints a discrepancy schedule; `--init-sample-dir` writes editable CSV inputs).

**Inputs**

- `carrier_invoices.csv`: `invoice_id, carrier, container_number, charge_type(detention|demurrage), free_time_days, daily_rate, billed_chargeable_days, billed_amount, invoice_date`
- `terminal_events.csv`: `container_number, event, timestamp` — events include `CONTAINER_AVAILABLE`, `GATE_OUT_FULL`, `GATE_IN_EMPTY`, plus per-day exclusion windows (terminal closure / chassis shortage / weather) with reason codes.
- Container numbers are ISO 6346 check-digit validated; malformed IDs are flagged, never guessed.

**Rules**

- *Detention dwell* = GATE_IN_EMPTY date − GATE_OUT_FULL date; *demurrage dwell* = GATE_OUT_FULL date − CONTAINER_AVAILABLE date.
- Chargeable days = max(0, dwell − free-time − documented exclusion days).
- Exception rows (missing gate events, timestamps out of order, IDs failing check digit) route to a human review list — the founder, not the script, owns judgment calls.
- Outputs: `dispute_schedule.csv` (billed vs supported days, $ variance, reason per line) and a markdown dispute packet draft per invoice.
- PDF extraction (eModal history PDFs, carrier invoice PDFs) is the v1 build step: `pdfplumber` against layouts collected from practice audits — no terminal or carrier APIs, ever, in the MVP.

# Appendix C — Why each Phase-1 trap stays out of scope

| Trap (S18) | Status in chosen plan |
|---|---|
| GPS/IoT hardware | None — chassis play uses existing gate tickets/pool EDI feeds |
| Carrier EDI 315/214 | None — drag-drop exported files only |
| CargoWise write-back integration | None — outputs handed back as CSV/PDF; no WiseTech licenses |
| Rate optimization engine | None — D&D is deterministic date arithmetic, not rate math |
| Multi-tenant white-label end-customer portal | AuditBox delivers reports to *forwarder staff*; no warehouse-user logins |
| Manual daily operations (#4/#5 shape) | Rejected until automated; no standing 7am or deadline shifts are sold |
