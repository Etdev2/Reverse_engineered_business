# Reverse-Engineered Idea Generation — Logistics Operations Founder

**Status:** Phase 5 complete. Zero market evidence gathered. Nothing here is validated.
**Last updated:** 2026-09-14

This document is the full record of one run of the *reverse ideation* method: instead of
scoring an existing business, we fixed a founder's real constraints, defined what a "10"
looks like on each scoring dimension under those constraints, crossed those outputs into
candidate businesses, scored them honestly, debated them adversarially, and converted every
unresolved disagreement into a falsification test.

The output is **not a business plan**. It is a ranked list of guesses plus the cheapest
experiments that would kill them.

---

## Table of contents

- [The method](#the-method)
- [Phase 0 — Founder profile (fixed constraints)](#phase-0--founder-profile-fixed-constraints)
- [Phase 1 — Dimension specialists](#phase-1--dimension-specialists)
- [Phase 2 — Combine into candidates](#phase-2--combine-into-candidates)
- [Phase 3 — Honest scoring](#phase-3--honest-scoring)
- [Phase 4 — The debate](#phase-4--the-debate)
- [Phase 5 — Falsification tests](#phase-5--falsification-tests)
- [The decision](#the-decision)
- [Glossary](#glossary)

---

## The method

```
PHASE 0  Fixed constraints        -> the search space, not optimized
PHASE 1  Dimension specialists    -> separate contexts, 5 concrete items each
PHASE 2  Combine                  -> candidates crossing >= 4 specialists
PHASE 3  Honest scoring           -> SCORE-IF-TRUE vs SCORE-TODAY
PHASE 4  Debate                   -> BULL vs BEAR, fresh-context JUDGE
PHASE 5  Falsification            -> <2 weeks, <$200, explicit STOP/CONTINUE
```

### The scoring dimensions (Part B)

| # | Dimension |
|---|---|
| 11 | Problem severity |
| 12 | Buyer reachability |
| 13 | Willingness to pay |
| 14 | Sales cycle / friction |
| 15 | Scalability / gross margin |
| 16 | Founder moat |
| 17 | Acquisition cost / channel |
| 18 | Unit economics (cost to serve) |
| 19 | Time to first dollar |
| 20 | Founder-market fit |

### Rules that governed this run

- **Dimension 20 cannot be reverse-engineered.** It is an input. Any candidate scoring below
  9 is discarded regardless of how good the rest looks.
- **Evidence of pain = the ugly workaround.** No workaround, no pain.
- **Willingness to pay works backward from existing invoices**, never from imagined value.
- **Never output a 10 in SCORE-TODAY** for an idea that does not yet exist. That number is
  earned by evidence, not by argument.
- **Ideas requiring changed buyer behavior score lower** than ideas riding existing behavior.
- **Services and done-for-you offerings are valid candidates.** They score better on #19 and
  #13 than software does, and they teach the domain before anything gets built.
- **A factual disagreement is never settled by who argued better.** If BULL and BEAR disagree
  about whether buyers will pay, the answer is in a phone call, not the transcript. Convert it
  to a Phase 5 test.

### Banned moves in the debate

"Huge market" · "execution risk" · "it depends" · "AI will change everything" · any claim with
no named buyer, number, or existing product behind it. Calling out a banned move wins that
exchange automatically.

---

## Phase 0 — Founder profile (fixed constraints)

These are not optimized. They are the search space.

| Constraint | Value |
|---|---|
| **Industries known from the inside** | Ocean freight forwarding, customs brokerage, port drayage logistics |
| **Buyers reachable without an introduction** | Operations managers at regional freight forwarders (10–100 employees); customs compliance managers at mid-sized retail importers ($10M–$100M revenue); dispatch managers at port-adjacent trucking firms |
| **Hours per week** | 15 (nights and weekends) |
| **Capital losable without pain** | $5,000 |
| **Skills executable solo** | No-code automation (Zapier/Make, Airtable), process mapping / SOP design, direct B2B outbound sales, basic Python (data parsing) |
| **Refused** | Cold door-knocking / street sales, native mobile app development, managing offshore software agencies |

---

## Phase 1 — Dimension specialists

Each specialist ran in a separate context seeing only Phase 0.

### Specialist 11 — Problem severity

Five specific, expensive, recurring pains, each with the ugly workaround that proves it.

#### 11.1 Ocean carrier detention/demurrage invoice overcharges
- **Pain:** Carriers bill importers for late container returns based on inaccurate gate-out /
  gate-in times, ignoring terminal closures, holiday delays, and structural delays caused by
  the carrier's own chassis shortage. Costs mid-sized importers **$5,000–$25,000/month** in
  uncontested, erroneous invoices.
- **Ugly workaround:** A billing clerk manually downloads terminal container-history PDFs
  (eModal / Advent eModal) and cross-references them row-by-row against carrier Excel invoices
  on Monday mornings.

#### 11.2 High-volume SKU onboarding and classification backlogs
- **Pain:** E-commerce and retail importers launching seasonal catalogs must assign 10-digit
  HTS codes to thousands of SKUs. Errors produce CBP audits, cargo holds, or retroactive duty
  payments.
- **Ugly workaround:** Brokers email massive unformatted Excel sheets back and forth with
  retail buyers; ops assistants copy-paste descriptions into HTS search tools one SKU at a time.

#### 11.3 Container chassis lease reconciliation discrepancies
- **Pain:** Drayage carriers lease chassis daily from pools (DCLI, TRAC). Invoices routinely
  charge "ghost days" where the container was returned but the chassis was never logged out.
- **Ugly workaround:** Dispatchers collect physical gate tickets thrown into cardboard boxes by
  drivers and type the dates into a master Excel file to match against monthly bills.

#### 11.4 Lost cargo visibility on LCL shipments
- **Pain:** LCL cargo moves through consolidation forwarders (co-loaders). Small forwarders
  selling LCL have no automated tracking for shared boxes and burn hours on "where is my cargo?"
- **Ugly workaround:** Ops staff spend two hours every morning WhatsApp-ing and emailing 15
  different co-loader reps for status, then copy-pasting replies into client emails.

#### 11.5 ISF (10+2) compliance chasing
- **Pain:** US Customs requires ISF filing 24 hours before vessel departure from the foreign
  port. Missing it triggers a mandatory **$5,000** fine.
- **Ugly workaround:** A dedicated clerk works late repeatedly emailing suppliers in China and
  Vietnam for commercial invoices and packing lists, then logs completed forms by hand in a
  legacy desktop customs system (CargoWise).

### Specialist 13 — Willingness to pay

Five places money already moves, with real price points.

| # | Existing invoice | Price point |
|---|---|---|
| 13.1 | Freight audit & recovery (Ocean Audit, Intelligent Audit) | **20–30% contingency** on recoveries; single recovery invoices routinely exceed $3,000 for one week of ocean review |
| 13.2 | Customs classification consulting (licensed attorneys/consultants) | **$250–$400/hour**, or flat **$5–$15 per SKU** for bulk database review |
| 13.3 | Real-time terminal visibility data (Terminal49, Project44) | **$5–$12 per container tracked**; SaaS minimums from **$500/month** |
| 13.4 | Enterprise customs brokerage licenses (WiseTech CargoWise One) | **$150–$300 per user/month** + **$1.50–$6.00 per customs entry** |
| 13.5 | Drayage dispatch platforms (Rose Rocket, PortPro) | **$150–$250 per truck/month** → **$1,500–$5,000/month** for modest fleets |

### Specialists 12 + 17 — Buyer and distribution channel

A 10 here means "I know where 200 of these people are."

| # | Buyer | How to reach 200 this month | Direct channel |
|---|---|---|---|
| 12.1 | Customs compliance managers at $10M–$100M importers | LinkedIn Sales Navigator: title *Customs Compliance Manager* OR *Global Trade Compliance*, HQ United States, revenue $10M–$100M → ~480 verified profiles | Export, enrich via Apollo.io, personalized low-friction cold email |
| 12.2 | Operations directors at regional ocean forwarders (20–100 staff) | Member directories of regional associations — Pacific Coast Council (PCC), NCBFAA | Directories list names, direct office phones, emails of ops leadership |
| 12.3 | Dispatch managers at port-adjacent drayage firms | Public port authority registries — Port of NY/NJ, Port of LA/LB publish every licensed motor carrier allowed inside the terminals, with fleet size and contacts | Cold call or SMS the dispatch desk off-peak (10am–2pm local) |
| 12.4 | Logistics directors at DTC / Shopify Plus brands | BuiltWith filter for Shopify Plus with est. web sales >$5M, then target *Director of Logistics* / *Supply Chain Manager* on LinkedIn | Email with a personalized audit offer; DTC logistics communities on X |
| 12.5 | Independent customs brokers (1–5 staff) | CBP.gov "Locate a Port of Entry / Broker" directory — every active licensed brokerage by port, with phone and address | Phone outreach, or port-specific landing pages ("Customs Broker Automation for Port of Savannah") |

### Specialist 16 — Moat (structural founder advantages)

1. **Domain vernacular mastery.** A generic developer cannot distinguish *demurrage* (fees
   inside the terminal) from *detention* (fees outside it), nor knows how free-time rules differ
   per carrier. The founder builds instant trust in the first sentence.
2. **Structural SOP and workflow blueprinting.** Knows how forwarders sequence work inside
   CargoWise — no need to ask "how does your business work?" Solutions plug into existing
   workflow with zero disruption.
3. **Warm, ready-to-test network.** Can text 5–10 active ops managers and brokers today with
   "can I show you a tool I built to clean up terminal billing?" — unfiltered feedback, no paid
   acquisition.
4. **Zero-API operational workarounds.** While funded startups fight for API integrations into
   legacy logistics platforms, the founder routes around them with XML/CSV exports, file
   drag-and-drop, and automated email attachments.
5. **CBP audit / regulatory fluency.** Understands the liability framework of the "reasonable
   care" standard and can position tooling against real regulatory exposure that generic SaaS
   ignores.

### Specialist 18 — Unit economics

**Low cost-to-serve (scalable):**
1. **SaaS-enabled file parser** — drag-and-drop terminal PDFs, extract dates, match against
   carrier invoice CSVs, output a dispute report. Near-zero hosting/processing cost.
2. **Shared collaborative database (Airtable / Make)** — pre-configured compliance workspace on
   the founder's infrastructure, sold as a monthly seat.
3. **No-code transactional notification engine** — Zapier + Twilio texting container status to
   dispatchers. Cheap to scale.
4. **Productized audit service with offshore assist** — customer emails documents, a
   standardized script plus a low-cost ops assistant runs the comparison. High margin.
5. **Digital SOP templates and configurations** — CargoWise workflow optimizations sold as a
   high-margin download.

**High-cost traps (avoid):**
1. **Real-time GPS hardware tracking** — physical IoT units, battery life, unit loss, cellular
   contracts.
2. **Direct carrier EDI integrations** — custom EDI 315/214 connections with dozens of global
   liners; months of testing, thousands per carrier.
3. **Custom API integration into legacy brokerage software** — WiseTech charges heavily to write
   into the CargoWise database; financially unviable at this scale.
4. **Dynamic freight rate optimization engines** — heavy computation plus continuous manual
   cleanup of unstructured, changing rates.
5. **Multi-tenant white-label portals for end customers** — onboarding friction and a permanent
   support load from non-technical warehouse staff.

### Specialist 19 — Time to first dollar

Five shapes that can charge within 30 days, and what each gives up.

| # | Shape | Offer | Gives up |
|---|---|---|---|
| 19.1 | Done-for-you demurrage recovery audit | "Send last month's carrier invoices and port gate-out PDFs. I find the overcharges and write the dispute emails. You pay 25% of what you recover." | Scalability — analysis is manual, spreadsheets and simple scripts |
| 19.2 | Turnkey SKU classification workspace | Pre-configured Airtable with validation rules and HTS lookup. **$950 setup** to load the initial catalog + **$150/month** | IP exclusivity — the structure is copyable if they cancel |
| 19.3 | Dedicated LCL status monitoring pilot | Manual status checks on 15 critical LCL containers each morning, WhatsApp alerts to their team. **$300** first month | Automated delivery — the founder runs lookups at 7am daily |
| 19.4 | Productized pre-audit compliance assessment | Manual check of 100 random historical customs entries for common tariff errors. Flat **$1,500** | Recurring revenue |
| 19.5 | Concierge ISF chasing | **$40 per shipment** to check paperwork and coordinate with suppliers over email/WeChat before vessel departure | Operational leverage — this is outsourced clerking |

---

## Phase 2 — Combine into candidates

```
              +-----------------------------------+
              |      Phase 1 Specialists          |
              | #11 severity   #12/#17 buyer      |
              | #13 pay        #16 moat           |
              | #18 economics  #19 first dollar   |
              +-----------------------------------+
                              |
                              v
              +-----------------------------------+
              |        8 Candidate Ideas          |
              | 1. Demurrage Detective (audit)    |
              | 2. HTS SKU Onboarder (Airtable)   |
              | 3. Chassis Auditor (drayage)      |
              | 4. LCL Status Tracker             |
              | 5. Concierge ISF Chaser           |
              | 6. CBP Audit Risk Guard           |
              | 7. Drayage Terminal Alerting      |
              | 8. Customs Broker SKU Portal      |
              +-----------------------------------+
                              |
        +---------------------+---------------------+
        |                                           |
        v                                           v
 [ KILLED / OVER-CONGESTED ]                 [ SURVIVING TOP 3 ]
 3. Chassis Auditor    (paper-ticket drag)   1. Demurrage Detective
 4. LCL Status Tracker (data wall)           2. HTS SKU Onboarder
 5. Concierge ISF      (time-intensive)      8. Customs Broker SKU Portal
 6. CBP Risk Guard     (needs license)
 7. Terminal Alerting  (over-congested)
```

### Surviving candidates

#### Candidate 1 — "The Demurrage Detective"
| Element | Source |
|---|---|
| Sufferer | **11.1** — forwarders and importers paying incorrect detention/demurrage |
| Buyer & channel | **12.2** — ops directors at regional forwarders via association directories |
| Adjacent spend | **13.1** — freight audit & recovery at 20–30% contingency |
| Delivery model | **18.1** — productized audit: Python parser + VA data entry |
| Speed to dollar | **19.1** — done-for-you on contingency, zero upfront cost to the client |

#### Candidate 2 — "HTS SKU Onboarder"
| Element | Source |
|---|---|
| Sufferer | **11.2** — high-volume DTC importers with classification bottlenecks |
| Buyer & channel | **12.4** — logistics directors at Shopify Plus brands via LinkedIn/BuiltWith |
| Adjacent spend | **13.2** — customs consulting at $250+/hr or per-SKU fees |
| Delivery model | **18.2** — standardized collaborative Airtable compliance database |
| Speed to dollar | **19.2** — $950 setup + $150/month |

#### Candidate 8 — "The Customs Broker SKU Portal"
| Element | Source |
|---|---|
| Sufferer | **11.2** — brokers receiving fragmented, unformatted SKU lists from new clients |
| Buyer & channel | **12.5** — small brokers via NCBFAA / CBP directories |
| Adjacent spend | **13.4** — CargoWise at $150–$300/user/month |
| Delivery model | **18.2** — shared collaborative database with validation built on Airtable |
| Speed to dollar | **19.2** — fixed-price setup clearing their immediate onboarding backlog |

### The kills

| Candidate | Verdict | Why |
|---|---|---|
| **3. Chassis Auditor** | KILLED | The chassis pain is real, but collecting physical gate tickets from drivers means typing data off wrinkled paper receipts. Data-entry friction breaks the unit economics for a 15-hour-per-week operation. |
| **4. LCL Status Tracker** | KILLED | Co-loaders are protective of cargo data. Regular status requires either API access they rarely grant to third parties, or constant manual phone work. The data wall is too high to scale part-time. |
| **5. Concierge ISF Chaser** | KILLED | Chasing suppliers across Asian time zones forces 3am WeChat responses. Direct violation of the Phase 0 lifestyle constraint. |
| **6. CBP Audit Risk Guard** | KILLED | Issuing formal compliance opinions without a US Customs Broker License creates real regulatory liability, and the report carries no legal standing — which is exactly what risk-averse compliance managers are buying. |
| **7. Drayage Terminal Alerting** | CUT — over-congested | PortPro, Terminal49 and SecurSpace already ship terminal alerting. Three other people would generate this same idea from the same constraints. No moat. |

---

## Phase 3 — Honest scoring

**SCORE-IF-TRUE** assumes every hypothesis holds. **SCORE-TODAY** is the score with zero
evidence gathered. **THE GAP IS THE WORK** — and candidates rank by the gap being *cheap to
close*, not by SCORE-IF-TRUE being high.

| Dimension | C1 Demurrage Detective | C2 HTS SKU Onboarder | C8 Broker SKU Portal |
|---|:---:|:---:|:---:|
| | **IF-TRUE / TODAY** | **IF-TRUE / TODAY** | **IF-TRUE / TODAY** |
| 11. Problem severity | 9 / 3 | 8 / 2 | 8 / 3 |
| 12. Buyer reach | 9 / 6 | 7 / 3 | 9 / 6 |
| 13. Willingness to pay | 10 / 3 | 8 / 2 | 8 / 3 |
| 14. Sales cycle / friction | 9 / 4 | 6 / 2 | 7 / 3 |
| 15. Scalability / margin | 7 / 3 | 9 / 2 | 9 / 3 |
| 16. Founder moat | 9 / 8 | 8 / 6 | 9 / 8 |
| 17. Acquisition cost / channel | 9 / 5 | 7 / 3 | 8 / 5 |
| 18. Unit economics | 8 / 4 | 9 / 3 | 9 / 4 |
| 19. Time to first dollar | 10 / 6 | 8 / 3 | 8 / 4 |
| 20. Founder-market fit | 10 / 10 | 9 / 9 | 10 / 10 |
| **TOTAL** | **90 / 52** | **79 / 35** | **84 / 51** |
| **THE GAP** | **38** | **44** | **33** |

### Why the scores read this way

- **#16 and #20 score high *today*** because they rest on verifiable facts about the founder:
  the vocabulary, the operational experience, the existing network. These are the only
  dimensions that legitimately clear 5 with zero market evidence.
- **#13 and #19 score high *if true* for Candidate 1** because contingency billing removes the
  buyer's downside entirely, which makes the first sales call unusually low-friction.
- **Everything else scores 2–4 today** because there are no signed customers, no validated
  invoice templates, and no proven extraction pipeline. That is the honest number.

---

## Phase 4 — The debate

```
              +-----------------------------------+
              |        TOP 3 CANDIDATES           |
              +-----------------------------------+
                              |
    +-------------------------+-------------------------+
    |                         |                         |
    v                         v                         v
[ 1. Demurrage ]        [ 2. HTS Onboarder ]     [ 8. Broker Portal ]
BULL: recovery upside   BULL: audits prevent     BULL: solves ingestion
BEAR: dispute friction  BEAR: brokers own it     BEAR: CargoWise wall
* SURVIVES              * KILLED                 * SURVIVES
```

### Debate 1 — Candidate 1: The Demurrage Detective

**Round 1**
- **BULL:** Mid-sized forwarders lose money on incorrect terminal demurrage bills because they
  have no time to audit them. Quick wins come from checking historical port container data
  against their invoice spreadsheets. Contingency billing at 25% of recovered cash makes it a
  no-brainer for an ops manager — there is no downside to say no to.
- **BEAR:** Carriers like MSC and Maersk make disputes deliberately hard. They require proof
  uploaded to proprietary portals within 15–30 days of invoice date. Filing and tracking dozens
  of individual carrier disputes will consume the whole 15-hour week and eat the commission.

**Round 2**
- **BULL:** We don't need 30 portals. Maersk, MSC and CMA CGM handle over 50% of import volume.
  And we don't have to file at all — we package audited discrepancies into a clean, ready-to-send
  email template, and the client's existing billing clerk sends it in minutes.
- **BEAR:** If the clerk sends the emails, the forwarder will push the contingency from 25% down
  to 10% or less. Worse, doing the sending teaches them how simple verification is — they copy
  the spreadsheet template and bring the audit in-house.

**Concessions**
- *BULL concedes:* finding discrepancies is far easier than getting carriers to actually pay.
  Tracking payouts requires patience and sustained follow-up.
- *BEAR concedes:* forwarders do leave thousands in uncontested billing errors on the table,
  because daily operations are too hectic to chase them.

**Judge's verdict (fresh context)**
- **Ruling:** *UNRESOLVED — NEEDS EVIDENCE.* We do not know whether carriers accept dispute
  emails from third-party auditors, or require filings from the licensed importer of record.
- **Re-score:** Dimension 14 (sales cycle / friction) drops **9 → 7** on the operational steps
  needed to get carrier approval.
- **Status: SURVIVES.** The problem is verified from the inside, and risk-free pricing makes it
  highly testable.

### Debate 2 — Candidate 2: HTS SKU Onboarder

**Round 1**
- **BULL:** DTC brands with fast inventory lose weeks waiting on brokers to classify seasonal
  SKUs. A structured Airtable workspace with automated HTS lookup cuts data-gathering time ~80%.
- **BEAR:** DTC brands don't classify in-house — they outsource it entirely to their broker. The
  broker carries the legal liability under CBP reasonable-care rules, so the broker will ignore
  any external classification database not signed off by a licensed customs broker.

**Round 2**
- **BULL:** Even with the broker approving, the importer is still responsible for supplying the
  initial SKU details — materials, utility, dimensions. The workspace streamlines that messy
  gathering phase so they hand over clean files.
- **BEAR:** If they still wait on the broker's manual review and sign-off, the tool doesn't touch
  the actual bottleneck — the broker's backlog. Nobody pays $150/month for a clean spreadsheet
  that doesn't move the constraint.

**Concessions**
- *BULL concedes:* we cannot legally classify for customs purposes without licensed review,
  which caps the value of any standalone software product here.
- *BEAR concedes:* importers genuinely struggle to organize product data before sending it to
  brokers. The frustration is real.

**Judge's verdict (fresh context)**
- **Ruling:** *BEAR wins.* Without a license, the business cannot touch the core compliance
  bottleneck. The product is a nice-to-have, not a must-have.
- **Status: KILLED.** The regulatory barrier is too high for an unlicensed solo founder.

> This kill is a success, not a failure. It cost an hour instead of six months.

### Debate 3 — Candidate 8: The Customs Broker SKU Portal

**Round 1**
- **BULL:** Small brokerages lose hours onboarding clients who send messy, unformatted product
  lists. A client-facing Airtable portal enforcing validation (material composition, country of
  origin) before submission saves the broker 10–15 operational hours per client.
- **BEAR:** Brokers live inside CargoWise. They will not adopt a standalone Airtable portal that
  forces staff to copy-paste between two systems. Without direct EDI or API integration, no sale.

**Round 2**
- **BULL:** CargoWise natively supports XML and CSV import. No complex API needed — configure the
  portal to export the exact XML format CargoWise expects, and the broker imports thousands of
  validated SKUs in one click, bypassing manual entry entirely.
- **BEAR:** Custom CargoWise XML mapping requires deep schema knowledge. Get the mapping wrong
  and imports fail, and you're flooded with support calls. The low-cost software business quietly
  becomes an IT integration consultancy.

**Concessions**
- *BULL concedes:* custom XML schemas demand technical precision, and imports break if the file
  structure changes.
- *BEAR concedes:* if clean import-ready XML can be reliably generated, brokers save hours of
  manual entry on every new client.

**Judge's verdict (fresh context)**
- **Ruling:** *UNRESOLVED — NEEDS EVIDENCE.* We don't know whether the CargoWise XML import
  interface is stable enough for a non-developer to build templates against.
- **Re-score:** Dimension 18 (cost to serve) drops **9 → 7** on likely technical support load
  from XML mapping.
- **Status: SURVIVES.** Pain and willingness to pay are high among brokers, and the technical
  hurdle is quick to verify.

---

## Phase 5 — Falsification tests

### Test A — The Demurrage Detective

```
[1. Outbound email] ---------------------------> [2. The audit pitch]
Target: 20 local forwarders                      Offer: contingency-only review
Goal: 3 companies share past bills               (risk-free proof of concept)
                                                            |
                                                            v
[STOP] <---------------- [Evaluate] ----------------> [CONTINUE]
- Zero discrepancies found                          - Found >$1k in overcharges
- "Carriers won't refund third-party audits"        - Carrier approves the refund
```

**1. Load-bearing assumption**
Ocean carriers will pay out refund claims based on third-party audits, without requiring legal
representation or direct API integration.

**2. Cheapest test** — under 2 weeks, **$0**
Contact 20 local freight forwarders through the personal network and LinkedIn. Pitch:

> "I'm testing a new invoice parsing tool designed to identify carrier billing errors. Send me
> last month's Maersk/MSC invoices along with your port gate-out records. I'll run the audit for
> free, and if we find errors we split the recovery 50/50. If we find nothing, you get peace of
> mind for free."

Goal: secure **at least 3 historical billing file sets** to audit.

**3. STOP result**
Three collections audited with **zero billing errors found** — or the forwarder says:
*"We've tried disputing these before; the carriers ignore email claims unless they come through
an active customer account."*

**4. CONTINUE result**
**At least $1,000** in clear discrepancies found, dispute email drafted, client forwards it, and
**the carrier approves the credit.**

**5. Who to talk to, and the opening line**
Operations managers or billing leads at regional ocean freight forwarders.

> "Hi [Name], quick question — who audits your ocean invoices for terminal demurrage overcharges?
> Carriers often bill on standard gate times, missing port closures or container holds. I've built
> a simple tool that compares terminal gate logs against carrier bills. Send over last month's
> invoices and I'll audit them free. If we find overcharges we split the refund 70/30. If not, you
> got a free audit. Do you have 10 minutes Thursday?"

**6. Unresolved debate points, converted to buyer questions**
- *"When you find a billing discrepancy on an ocean invoice, what is your exact step-by-step
  process for filing a dispute with Maersk or MSC?"*
- *"Do carriers require disputes to come from the email address on the bill of lading, or will
  they accept a third-party auditor's email?"*

### Test B — The Customs Broker SKU Portal

```
[1. Outbound LinkedIn] ------------------------> [2. The mock import]
Target: 30 local customs brokers                 Offer: free validation template
Goal: 5 brokers share a sample sheet             matched to CargoWise
                                                            |
                                                            v
[STOP] <---------------- [Evaluate] ----------------> [CONTINUE]
- CargoWise needs custom IT setup                   - Clean import into test env
  for every new format                              - Zero manual editing
```

**1. Load-bearing assumption**
Airtable can export validated SKU lists in an XML format that imports directly into CargoWise
without schema errors or IT assistance.

**2. Cheapest test** — under 2 weeks, **~$50**
- Connect with a friendly local customs broker.
- Ask for a blank CargoWise SKU import template (CSV or XML layout) plus a real messy SKU sheet
  a client recently sent them.
- Build an Airtable onboarding form matching the required fields, import the messy data, and
  export via an Airtable XML generator extension (**$29**).
- Have the broker import the file into their CargoWise **training environment**.

**3. STOP result**
The import fails repeatedly on schema errors, or CargoWise requires enterprise IT integration
setup for each new client format — which makes a template-based solution unviable.

**4. CONTINUE result**
The validated XML imports **successfully on the first try**, creating 100 clean SKU records with
no manual data entry.

**5. Who to talk to, and the opening line**
Owners or operations directors at small customs brokerages (5–25 staff).

> "Hi [Name], I'm building an onboarding tool specifically for customs brokers on CargoWise. It
> gives your clients a simple portal to enter SKU data, runs automatic validation, and exports a
> clean XML file ready to import straight into CargoWise. I'm looking for two brokers to help me
> test the import formatting. In exchange I'll build your client portal for free. Open to a
> 10-minute demo?"

**6. Unresolved debate points, converted to buyer questions**
- *"What's the biggest bottleneck when your team imports client SKU lists into CargoWise today?"*
- *"Do you use CargoWise's native XML import, or does your staff still type client product
  details in by hand?"*

---

## The decision

### Test first: **The Demurrage Detective** (Candidate 1)

Not because it has the highest SCORE-IF-TRUE (90 vs 84), but because the two work together: it
scores highest on time to first dollar (**10 if-true / 6 today**), and its gap is closable with a
**$0, two-week test** requiring no build. Candidate 8's gap is technically smaller (33 vs 38) but
closing it depends on a third party's willingness to hand over a CargoWise training environment.
Candidate 1's test depends only on the founder's own network.

```
                        TESTING TIMELINE

   Week 1: Outreach & auditing        Week 2: Disputes & validation
 +------------------------------+   +------------------------------+
 | - Send 30 email pitches      |   | - Process shared documents   |
 | - Connect with 3 target      |   | - Generate dispute reports   |
 |   operations managers        |   | - Submit carrier claims      |
 +------------------------------+   +------------------------------+
```

**Target testing week:** next calendar week.

**Hold Candidate 8** in reserve. It survived its debate and stays a live option if Test A hits
its STOP result.

### What to stop doing to make room

- Stop reading general SaaS forums.
- Stop trying to build custom web applications.
- Pause all work on API integrations.

All 15 available hours go to: sending direct emails, calling freight contacts, and reviewing
historical logistics invoices.

---

## Glossary

| Term | Meaning |
|---|---|
| **CBP** | US Customs and Border Protection |
| **CargoWise** | WiseTech's enterprise logistics/customs platform; the industry standard for brokers |
| **Chassis** | The wheeled frame that carries an ocean container on the road; leased daily from pools like DCLI and TRAC |
| **Co-loader** | A consolidation forwarder that combines multiple shippers' cargo into one container |
| **Demurrage** | Charges for a container left *inside* the terminal past its free time |
| **Detention** | Charges for a container held *outside* the terminal past its free time |
| **Drayage** | Short-haul trucking between a port terminal and a nearby warehouse or rail yard |
| **EDI 315 / 214** | Standard electronic messages for ocean container status and motor-carrier shipment status |
| **eModal** | A common port terminal portal for container status and appointments |
| **Free time** | The days a container may be held before demurrage/detention begins; rules vary per carrier |
| **Gate-out / gate-in** | Timestamps of a container leaving and returning to the terminal — the basis for billing |
| **HTS** | Harmonized Tariff Schedule; the 10-digit code determining duty rate on an imported item |
| **ISF (10+2)** | Importer Security Filing, due 24h before foreign vessel departure; $5,000 fine if missed |
| **LCL** | Less-than-Container Load — cargo sharing a container with other shippers |
| **NCBFAA** | National Customs Brokers & Forwarders Association of America |
| **Reasonable care** | The CBP legal standard obligating importers to take due care in classification and valuation |
| **SKU** | Stock Keeping Unit; one distinct product |
