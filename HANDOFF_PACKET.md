# BUSINESS EVALUATION HANDOFF PACKET
### Paste-ready input for BUSINESS POTENTIAL & PROFITABILITY ANALYSIS
Opportunity: **Packet Desk** · Prepared 2026-09-14 · Founder constraints: 20–40 hrs/wk · $2,000–$10,000 risk capital · no credited advantages, no credited technical skill

---

## BUSINESS

| Field | Value |
|---|---|
| **Name** | Packet Desk (working name) |
| **One-sentence concept** | When a home in a managed California community goes into escrow, we assemble the legally required HOA disclosure packet in 48 hours so the manager never misses the 10-day deadline. |
| **Exact customer** | California community association management companies with 10–150 associations under management. Launch: Los Angeles + Orange County. |
| **Exact buyer / job title** | Community Association Manager (CAM), resale coordinator, Director of Operations. Decision maker: the owner in firms under ~40 associations. |
| **Exact pain** | Every resale triggers a document packet covering the 10 categories in Civil Code 4525, deliverable within 10 days of written request under Civil Code 4530. It is rebuilt by hand from the owner ledger each time; volume is peaky; a late packet delays a closing. |
| **Current workaround** | In-house coordinator at roughly $22–28/hr; overtime in peak season; $50–$200 rush fees charged to the requester; or a portal (HomeWiseDocs) that routes the request but does not assemble the packet. |
| **Proposed product/service** | Done-for-you fulfillment. The manager forwards what they already forward internally (owner ledger snapshot, current budget, reserve summary, insurance certificate, CC&Rs/rules, last 12 months of board minutes, assessment and violation status). We return a complete, requester-ready packet on their template and letterhead. No software, no portal, no integration. |
| **Why now** | (1) Document extraction crossed the commercial reliability line: 94% overall LLM extraction accuracy vs 63% for OCR pipelines; 95%+ field-level; 96.5% clean / 92.7% scanned documents. (2) LLM API prices fell ~80% between early 2025 and early 2026, so per-order AI cost is cents. (3) Incumbents monetize the *request* ($146–$295 per order, free to managers) and have no incentive to productize the *assembly labor*. |
| **Competitive alternatives** | HomeWiseDocs (RealPage), CondoCerts, GetDocsNow, in-house coordinators, the association's CPA. None sells outsourced assembly labor to the manager at a per-order price. |

---

## ECONOMICS

| Metric | Value |
|---|---|
| Price | $129 standard (3 business days) · $199 rush (48 hours) · $99 demand/estoppel only · volume tiers $109 at 25+/mo, $89 at 100+/mo · lender questionnaire add-on $49 |
| Revenue model | Per-order transaction fee. Annual dossier maintenance ($20/association/yr) deliberately parked until 100 orders/month. |
| Expected gross margin | 76–78% at $129; ~65% at the $89 tier |
| Estimated CAC | $150–$400 per management company (founder time + travel) |
| Estimated LTV | $3,000–$9,000 per portfolio (30–90 orders/yr × ~$105 blended × 2–3 yrs) |
| Expected churn | Low once embedded. Single point of failure: the internal champion leaves. |
| Sales cycle | 1–3 weeks for firms under ~40 associations; 2–6 months for enterprise (excluded by design) |
| Variable cost per order | AI $1.50–4.00 + labor $20 (20 min at $60/hr shadow) + processing $3.90 + amortized E&O/software $3.00 = **~$28–$31** |
| Contribution margin | ~$98 per order at $129 |

---

## CAPITAL

| Item | Amount |
|---|---|
| MVP capital | $250 |
| Capital to first revenue | $400–$800 |
| Capital to break-even | $1,500–$3,000 (incl. E&O binder) |
| Recommended reserve | $4,000 (covers a 3-month trough season + E&O deductible) |

---

## LABOR

| Stage | Human hrs | AI hrs | % AI-assisted | % AI-autonomous |
|---|---|---|---|---|
| Initial (to first paid order) | 50–70 | 20–30 | 70% | 30% |
| Per month at launch (10 firms, 15–25 orders) | 30–45 | 15–25 | 70% | 30% |
| Per month at 100 orders | 35–50 | 25–35 | 75% | 35% |
| Per month at 1,000 orders | 180–260 | 120–180 | 80% | 45% |
| **First hiring threshold** | **400–500 orders/month** — first part-time reviewer | | | |

Revenue per human hour at 500 orders/month: **~$262**. Profit per human hour: **$150–170**.

---

## GROWTH

| Field | Value |
|---|---|
| Primary distribution channel | Direct named outreach: CACM and CAI chapter directories, California Secretary of State nonprofit filings, county assessor CID parcel data, Google Maps |
| Secondary distribution channel | Escrow/title officer referral — benchmarking and feedback only (low margin; not a revenue engine) |
| Acquisition mechanism | Free first packet → paid rush order → standing portfolio overflow arrangement |
| Likely growth constraint | Portfolio onboarding hours. Every new portfolio resets the setup clock; the dossier amortizes over 6–12 months. |

---

## DEFENSIBILITY

| Field | Value |
|---|---|
| Initial moat | Per-association versioned dossier: governing documents, budget/reserve, insurance, assessment and violation history |
| Potential compounding moat | Marginal cost falls with each repeat order; workflow embed by peak season; re-teaching cost if the manager switches |
| Data advantage | Real but time-based, not absolute — a competitor can rebuild one portfolio's dossier in 6–9 months of normal volume |
| Switching cost | Moderate: re-teaching 60 associations' fee schedules and template quirks |
| Why competitors cannot immediately reproduce it | They can reproduce one packet; they cannot reproduce cached dossiers without first winning and performing the orders |

---

## VALIDATION

| Field | Value |
|---|---|
| **Load-bearing assumption** | California management companies have peak-season resale overflow they cannot absorb with existing staff. |
| **Test** | 40 targeted calls/emails offering a free first packet in exchange for 2025 order counts, then fulfill 5 real orders — deliberately the worst ones — and time them. |
| **STOP threshold** | Fewer than 3 of 10 managers will hand over a real order this month; OR median human time exceeds 45 min/order on real orders; OR fewer than 2 of 5 pilots will pay ≥$99 at 48-hour turnaround. |
| **CONTINUE threshold** | 5 or more of 10 will hand over a real order; median ≤30 min/order; 3 or more of 5 pilots accept a written quote at ≥$99. |
| **Cost** | $180 |
| **Founder hours** | 55 |
| **Calendar duration** | 14 days |

---

## RISKS

| # | Risk |
|---|---|
| 1 | **Adverse order selection** — managers keep the easy packets and send the broken-data ones, destroying the ≤30-minute model |
| 2 | **Data access refusal** — the manager cannot produce ledger/insurance/minutes fast enough to make a 48-hour promise |
| 3 | **Seasonality** — resale volume tracks home sales; Nov–Feb trough with fixed founder time |
| 4 | **Accuracy liability** — an error in a financial disclosure document can delay a closing; E&O insurance required |
| 5 | **Incumbent adds fulfillment** — HomeWiseDocs/GetDocsNow productize assembly and sell it to their installed base |

**Fatal flaw candidate:** risks 1 + 2 combined. If the orders received are systematically the ones with missing source data, minutes-per-order never falls and the business becomes a low-margin typing service with no compounding asset.

**Regulatory exposure:** Low but non-zero. Document preparation under a manager's direction is not a licensed activity; the line is crossed by giving legal advice, interpreting governing documents, or handling liens and notice recording. Policy: factual compilation only, on the manager's letterhead, reviewed and sent by the manager.

**Platform dependency:** None. No API, no portal, no marketplace.
**Technology dependency:** Commodity LLMs and extraction tooling with multiple substitutes; falling inference cost is a tailwind, not a dependency.

---

## SCENARIOS

| | LOW | MOST LIKELY | HIGH | PRECISION EXECUTION |
|---|---|---|---|---|
| Assumption state | Overflow real but small; 45 min/order | Overflow, access, 30-min, price all hold | Overflow large; ≥2 orders/association/yr | All true by month 4 with 3 anchor portfolios |
| 12-month revenue | $18,000 | $75,000 | $180,000 | $250,000 |
| 36-month revenue | $60,000 | $240,000 | $600,000 | $900,000 |
| 36-month profit | $25,000 | $120,000 | $300,000 | $450,000 |
| Capital required | $2,000 | $6,000 | $10,000 | $10,000 |
| Human workload | 15 hrs/wk | 25–30 hrs/wk + 1 contractor at 400 orders/mo | 30 hrs/wk + 2–3 contractors | 30 hrs/wk + 3 contractors + 1 ops lead |
| Orders/month at 36 months | 25 | 120 | 400 | 700 |

*All scenario figures are estimates produced from the stated assumption states. They are not forecasts.*

---

## SCORING SUMMARY (from the reverse-engine run)

| | Value |
|---|---|
| SCORE-IF-TRUE | 7.8 / 10 |
| SCORE-TODAY | 6.0 / 10 |
| Assumption burden | 6 / 10 |
| Complexity tax | 4 / 10 |
| Reality-adjusted opportunity score | 4.6 / 10 |
| Decision | **TEST** ($180, 55 hours, 14 days) |

**Structural ceiling, stated plainly:** this business does not reach 9. Its ceiling is set by Dimension 16 (moat = 6): the dossier is a byproduct of doing the work, not a barrier, and a funded competitor who wins a portfolio can rebuild it in 6–9 months. It is a good one-founder business with real money already moving, not a venture-scale monopoly.
