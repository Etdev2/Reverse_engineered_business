# Reverse Business Engine

A dark, decision-oriented workspace for generating businesses from desired economics, ranking them by upside × learnability, and trying to destroy the strongest thesis before building software.

## Run locally

```bash
npm run dev
```

Then open `http://localhost:4173`.

The app is intentionally dependency-free: the dev script serves the static UI with Python's built-in HTTP server.

## Included flows

- Founder input lock for available hours, risk capital, and things the founder refuses to do.
- Engine dashboard with frozen phases, candidate queue, evidence gap, and cheapest first test.
- Candidate queue with search, filters, score-if-true vs score-today, assumption burden, and falsification cost.
- Candidate detail drawer with buyer, workaround, wedge, economics, moat, and load-bearing assumption.
- Validation lab with a 14-day falsification sequence and exact outreach message.
- Method & rubric view covering the default 10 dimensions and anti-Goodhart rules.
- Interactive run simulation, save/export toasts, editable constraints, candidate killing, and workspace settings.

All displayed opportunity research is clearly illustrative demo data; the interface separates evidence from estimates rather than presenting it as market research.
