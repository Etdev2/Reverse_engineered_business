# Station 6 — Capacity & Logistics Plan → MERGED INTO STATION 5

**Status:** merged, not dropped. Recorded here so the mapping to the original
18-station spec stays auditable.

## Why

The spec's Station 6 covers "who makes it, who moves it, lead times, MOQs, buffer
stock, failure modes." Under this charter:

| Spec concern | Where it went |
|---|---|
| Who makes it | Station 5 — founder hours + offshore ops assistant |
| Who moves it | **Does not exist.** Nothing physical moves. The analog — getting the dispute to the carrier — is Station 13. |
| Lead times | Station 5 `lead_times` (portal access, VA onboarding) |
| MOQs | **Does not exist.** No minimum order quantity on an audit. The analog is the minimum finding worth filing ($150), which belongs to Station 4's model. |
| Buffer stock | **Does not exist.** Nothing is stocked. The analog is spare capacity, which is Station 5's `audits_per_week_capacity`. |
| Failure modes | Station 5 `failure_modes` |

Three of six concerns have no referent in a service business, and the remaining
three share a single done-condition with input sourcing: *can we run N audits a
week, and where do the inputs come from.* Kept separate, Station 6 would have
restated Station 5's output with different field names — which is how a station
map rots.

## If the charter changes

Reinstate this station if the business ever takes physical custody of anything —
for example if it starts pre-paying carrier charges and recovering them, which
would introduce float, working capital, and a real buffer-stock analog. At that
point unmerge and give it its own throughput model.
