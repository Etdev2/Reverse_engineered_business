# Evidence Log

Where test results go. This is the only file in the repo that is allowed to change
SCORE-TODAY, and the only one that contains facts rather than guesses.

**Run:** Logistics operations founder
**Test in flight:** Test A — The Demurrage Detective
**Opened:** 2026-09-14
**Entries recorded so far:** 0

---

## How to log

1. **Raw outcome first, interpretation second.** Write the number of replies, the dollars found,
   the carrier's actual words. Then, separately and clearly marked, what you think it means. The
   two get confused a week later otherwise.
2. **Log the silence too.** 30 emails and 0 replies is a result about Dimension 17, not a missing
   entry. An unlogged week reads identically to a week that never happened.
3. **Date every entry.** The interval between pitch and carrier response *is* Dimension 14.
4. **Quote the buyer verbatim** where you can. Paraphrase drifts toward whatever you hoped they
   said.
5. **SCORE-TODAY moves only on evidence recorded here**, and each revision names the entry that
   justified it. SCORE-IF-TRUE does not move unless the hypothesis itself changed — if it did,
   that is a new candidate, not a re-score.
6. **The STOP condition binds.** It was written before the outcome was known, which is the entire
   reason it is worth anything. If the STOP result lands, record it and stop.

---

## Test A — The Demurrage Detective

**Load-bearing assumption:** ocean carriers will pay out refund claims based on third-party
audits, without requiring legal representation or direct API integration.

**STOP:** three collections audited with zero billing errors found — or a forwarder says carriers
ignore email claims that don't come through an active customer account.

**CONTINUE:** ≥$1,000 in clear discrepancies found, dispute email forwarded by the client, and the
carrier approves the credit.

**Budget:** $0 · **Window:** 2 weeks · **Target week:** _not yet started_

### A1. Outreach tally

| Date | Company | Contact & title | Channel | Sent | Replied | Outcome |
|---|---|---|---|---|---|---|
| | | | | | | |

*Target: 20 forwarders contacted, 3 sharing historical billing files.*

**Running totals:** contacted 0 · replied 0 · files received 0

### A2. Documents received

| Date | Company | Carrier invoices | Gate-out records | Period covered | Usable? |
|---|---|---|---|---|---|
| | | | | | |

Note anything that made a set unusable — missing timestamps, scanned images instead of data,
a format that broke parsing. Repeated unusability is itself a finding about Dimension 18.

### A3. Audit findings

| Date | Company | Containers reviewed | Discrepancies found | $ at issue | Basis (closure / hold / free-time / chassis) |
|---|---|---|---|---|---|
| | | | | | |

**Running total at issue:** $0

### A4. Dispute outcomes — the actual test

Finding discrepancies is the easy half; BULL conceded that in debate. This table is where the
assumption lives or dies.

| Date sent | Carrier | $ claimed | Sent by (client / third party) | Carrier response | Days to response | $ recovered |
|---|---|---|---|---|---|---|
| | | | | | | |

### A5. Answers to the unresolved debate questions

The judge ruled two points UNRESOLVED-NEEDS-EVIDENCE. These are the answers, in the buyer's own
words.

**Q1. "When you find a billing discrepancy on an ocean invoice, what is your exact step-by-step
process for filing a dispute with Maersk or MSC?"**

| Date | Who answered | Verbatim answer |
|---|---|---|
| | | |

**Q2. "Do carriers require disputes to come from the email address on the bill of lading, or will
they accept a third-party auditor's email?"**

| Date | Who answered | Verbatim answer |
|---|---|---|

This second question is the one that decides the business. If the answer is consistently
"must come from the account holder," the contingency model survives but the founder never touches
the carrier directly — which is exactly the scenario where BEAR predicted the fee gets pushed from
25% to 10%. Log any fee pushback here too.

### A6. Verdict

**Status:** _not yet reached_
**Date:** —
**Result:** STOP / CONTINUE / still running
**What actually decided it:**

---

## Test B — The Customs Broker SKU Portal

Held in reserve. Run only if Test A hits STOP.

**Load-bearing assumption:** Airtable can export validated SKU lists as XML that imports into
CargoWise without schema errors or IT assistance.

**STOP:** repeated schema failures, or CargoWise requires enterprise IT setup per client format.
**CONTINUE:** validated XML imports on the first try, 100 clean SKU records, no manual entry.

**Budget:** ~$50 (Airtable XML generator extension, $29) · **Window:** 2 weeks

### B1. Outreach tally

| Date | Brokerage | Contact & title | Channel | Sent | Replied | Outcome |
|---|---|---|---|---|---|---|
| | | | | | | |

*Target: 30 brokers contacted, 5 sharing a sample sheet and an import template.*

### B2. Import attempts

| Date | Brokerage | Records attempted | Result | Errors thrown | Manual edits needed |
|---|---|---|---|---|---|
| | | | | | |

### B3. Answers to the unresolved debate questions

**Q1. "What's the biggest bottleneck when your team imports client SKU lists into CargoWise
today?"**

| Date | Who answered | Verbatim answer |
|---|---|---|
| | | |

**Q2. "Do you use CargoWise's native XML import, or does your staff still type client product
details in by hand?"**

| Date | Who answered | Verbatim answer |
|---|---|---|
| | | |

### B4. Verdict

**Status:** not started

---

## SCORE-TODAY revision history

Baseline is the Phase 3 table as scored with zero evidence, carrying the two judge adjustments
from Phase 4 (C1 Dimension 14: 9→7 if-true; C8 Dimension 18: 9→7 if-true).

| Date | Candidate | Dimension | From | To | Entry that justifies it |
|---|---|---|---|---|---|
| 2026-09-14 | — | — | — | — | Baseline set, no evidence gathered |

### Current SCORE-TODAY totals

| Candidate | Baseline | Current | Moved by |
|---|---|---|---|
| C1 Demurrage Detective | 52 | **52** | nothing yet |
| C8 Broker SKU Portal | 51 | **51** | nothing yet |

Dimensions 16 and 20 are the only ones scoring above 5 at baseline, because they rest on
verifiable facts about the founder rather than on market assumptions. Expect them not to move.
Everything else moving is the point of running the tests.

---

## Kills and course corrections

Record here when a candidate dies, when a STOP condition is honored, or when a constraint from
Phase 0 turns out to be wrong. A kill is a success — it cost a fortnight instead of six months —
but only if it is written down where the next run can see it.

| Date | What died | What killed it | Cost to find out |
|---|---|---|---|
| | | | |
