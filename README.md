# Reverse_engineered_business

A working repo for **reverse-engineered idea generation**: instead of scoring a business that
already exists, we fix a founder's real constraints, define what a "10" looks like on each
scoring dimension *under those constraints*, cross those outputs into candidate businesses,
score them honestly, debate them adversarially, and rank the survivors by **how cheaply they
can be disproven**.

The first run is documented in
**[`docs/REVERSE_ENGINEERED_IDEATION.md`](docs/REVERSE_ENGINEERED_IDEATION.md)** — a founder with
a background in ocean freight forwarding, customs brokerage, and port drayage.

---

## Current state

| | |
|---|---|
| **Run** | Logistics operations founder |
| **Phase reached** | Phase 5 complete — falsification tests designed |
| **Candidates generated** | 8 |
| **Survived Phase 2** | 3 (five killed or cut for congestion) |
| **Survived Phase 4 debate** | 2 |
| **Selected to test first** | **The Demurrage Detective** — contingency-based ocean invoice audit |
| **Market evidence gathered** | **None.** Every score below 8 today is a guess. |
| **Code** | None yet, and none is needed for the first test |
| **Evidence entries logged** | 0 — see [`docs/EVIDENCE_LOG.md`](docs/EVIDENCE_LOG.md) |

> Nothing in this repo is validated. The documents are a ranked list of guesses plus the
> experiments that would kill them.

## Repository layout

```
.
├── README.md                            # you are here — what this repo is and its state
└── docs/
    ├── REVERSE_ENGINEERED_IDEATION.md   # the full Phase 0-5 record for the logistics run
    └── EVIDENCE_LOG.md                  # test results — the only file holding facts
```

Everything is Markdown. There is no build, no dependencies, and no toolchain — the only thing
worth adding before the Phase 5 tests run is evidence.

## The method in six phases

| Phase | What happens | Rule that governs it |
|---|---|---|
| **0** | Fix the founder's constraints | Not optimized — this *is* the search space |
| **1** | One specialist per dimension, separate contexts | Return 5 concrete items with evidence, never categories |
| **2** | Cross specialist outputs into candidates | Valid only if it pulls from ≥4 specialists *and* the pieces genuinely fit |
| **3** | Score every survivor twice | SCORE-IF-TRUE vs SCORE-TODAY — **the gap is the work** |
| **4** | BULL vs BEAR, fresh-context JUDGE | Every argument must be new; silence is a concession |
| **5** | Falsification tests | <2 weeks, <$200, explicit STOP and CONTINUE results |

### The scoring dimensions

`11` problem severity · `12` buyer reachability · `13` willingness to pay · `14` sales cycle /
friction · `15` scalability / margin · `16` founder moat · `17` acquisition cost / channel ·
`18` unit economics · `19` time to first dollar · `20` founder-market fit

**Dimension 20 cannot be reverse-engineered.** It is an input, not an output. Any candidate
scoring below 9 on it is discarded immediately, however good the rest looks.

## Standing rules

These apply to anything added to this repo.

- **Never record a 10 in SCORE-TODAY for an idea that does not yet exist.** That number is
  earned by evidence, not by argument.
- **Evidence of pain is the ugly workaround** — the spreadsheet, the WhatsApp group, the person
  whose entire job this is. No workaround, no pain.
- **Willingness to pay works backward from existing invoices**, never from imagined value.
- **Ideas that require changing buyer behavior score lower** than ideas riding existing
  behavior. Say so explicitly when scoring.
- **Services and done-for-you offerings are valid candidates.** They score better on #19 and
  #13 than software does, and they teach the domain before anything gets built.
- **Discard the obvious cluster.** If three other people would generate the same idea from the
  same constraints, it has no moat.
- **A factual disagreement is never settled by who argued better.** If two sides disagree about
  whether buyers will pay, the answer is in a phone call — convert it into a Phase 5 test.
- **A candidate killed in debate is a success, not a failure.** It cost an hour instead of six
  months. Record the kill and the reason.

## How to use this repo

**Reading it:** start with
[`docs/REVERSE_ENGINEERED_IDEATION.md`](docs/REVERSE_ENGINEERED_IDEATION.md). The decision and
the two falsification tests are at the end; the scoring table in Phase 3 is the fastest summary.

**Running the next step:** execute Test A (the Demurrage Detective audit) exactly as written —
including the STOP result. The point of a pre-committed STOP is that it binds when the outcome
is disappointing.

**Recording what comes back:** log it in [`docs/EVIDENCE_LOG.md`](docs/EVIDENCE_LOG.md), which
is the only file in the repo permitted to change SCORE-TODAY. Raw outcome first — the number of
replies, the dollars found, the carrier's actual words — and interpretation second, marked as
such. Log the silences too: 30 emails and 0 replies is a result about acquisition cost, not a
missing entry.

**Adding a new run:** a different founder profile means a new Phase 0 and a new document under
`docs/`. Constraints are never edited to make a candidate work.

## Glossary

Logistics terms used throughout (demurrage vs detention, HTS, ISF, LCL, drayage, CargoWise) are
defined in the [glossary](docs/REVERSE_ENGINEERED_IDEATION.md#glossary) at the end of the main
document.
