# Charter — <BUSINESS NAME>

Fill this in before Station 1 runs. Every field is binding on the swarm, not
advisory. A blank field is a refusal, not a default.

## Identity
- **Business:** <what it is, one sentence>
- **Sells:** <the exact thing a customer receives>
- **To:** <the buyer, by title and company shape — not a market segment>
- **Jurisdiction:** <country/state; anything federal that applies>

## Constraints
- **Capital at risk:** $<amount> — the number that can be lost without pain
- **Hours per week:** <n> — and when (this decides async vs live)
- **Approval threshold:** $<amount> — single outbound commitment above this gates.
  $0 means every money movement gates.
- **Risk tolerance:** <low|medium|high> and what that means concretely

## Will not do
List things the business refuses. These become hard refusals in agent specs, not
preferences. Include anything requiring a licence you don't hold.
- <refusal>

## Unit economics floor
- **Margin floor:** $<amount> — below this we walk away
- **Walk-away condition:** <the sentence a human says to end it>

## Existing accounts
Mark each live or stubbed. Stubbed means the station writes to `state/outbox/`
and a later adapter sends it.
- Email: <live|stubbed>
- Accounting: <live|stubbed>
- E-sign: <live|stubbed>
- Storage: <live|stubbed>

## Evidence position
- **What is actually proven today:** <be honest; "nothing" is a valid answer>
- **The load-bearing assumption:** <the one that collapses everything if wrong>
- **Where evidence is recorded:** <path>
