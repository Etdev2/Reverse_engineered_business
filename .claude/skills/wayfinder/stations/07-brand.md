# Station 7 — Brand & Asset Production

**Owner:** `copywriter` · **Tier:** sonnet · **Deps:** 4 · **Cadence:** once
**Next:** 8 (Demand Gen)

Runs **in parallel with Station 5.** Sourcing does not wait on brand.

## Input contract
`{offer: ref:4}`

## What this station does
Produces every external-facing asset: name, positioning line, site copy,
one-pager, quote template, email templates, proposal shell.

The voice is set by the founder's structural advantage (Moat #1): **domain
vernacular mastery.** Copy must distinguish demurrage from detention correctly,
reference free-time rules as varying by carrier, and never use generic
supply-chain filler. A buyer detects an outsider in one sentence, and the whole
channel advantage is that we are not one.

Banned from all copy: "leverage", "seamless", "revolutionize", "end-to-end
visibility", "AI-powered". Any sentence that would read identically for a
different logistics product is cut.

## Done-condition
`reviewer_passed: true` — the Reviewer has adversarially checked every asset for
(a) a factual claim about carrier behaviour we cannot source, (b) any implied
customs-advisory capability, (c) a promise Station 12 cannot deliver. Assets do
not exist until the Reviewer passes them.

## Output contract
```json
{"name": "str", "positioning_line": "str", "one_pager": "path",
 "email_templates": [{"id":"","subject":"","body":"path"}],
 "quote_template": "path", "reviewer_passed": false}
```

## Escalation
- Copy implying we classify goods, advise on HTS, or act as a broker → **hard
  refusal**, rewrite. Not an approval.
- A recovery-rate claim ("we recover 12% on average") with no evidence rows →
  refuse. Zero engagements means zero claims.
- Publishing anything publicly → `publish` gates to an Approval Ticket.
