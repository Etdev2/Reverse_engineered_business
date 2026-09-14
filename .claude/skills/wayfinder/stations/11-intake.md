# Station 11 — Engagement Intake & Document Requisition

**Owner:** `intake-coordinator` · **Tier:** haiku · **Deps:** 10 · **Cadence:** per entity
**Next:** 12 (Audit Production)

> **Renamed** from the spec's "Order Intake & Purchase Orders." No supplier POs
> exist. The shape is identical: convert a signed deal into outbound requisitions,
> confirm acknowledgement, track lead times. The requisition goes to the **client**
> (for their documents) and to the **VA** (for the work order), not to a vendor.

## Input contract
`{quote: entity:quotes}` — signed, with the Approval Ticket cleared.

## What this station does
1. Open the engagement record.
2. Requisition from the client, itemised and specific:
   - Carrier invoices for the period, **native format** (CSV/XLS preferred; PDF
     accepted; scanned images flagged as a Station 5 failure mode).
   - Terminal gate-out / gate-in history for the same containers.
   - Container/BOL list for the period.
   - The carrier free-time terms on their contract, if they have them to hand.
3. Issue the VA work order against the shortlisted assistant from Station 5.
4. Track acknowledgement and chase by email on a fixed ladder: day 2, day 5,
   day 9. **Chasing is automated.** It never becomes a Call Ticket before the
   third attempt.
5. Record expected turnaround so Station 12 has a date to be measured against.

## Done-condition
`documents_received` covers the same container set as `documents_requested` — not
merely "some files arrived." Explicitly: the BOL list and the gate records
intersect on ≥90% of containers. Below that, the audit cannot be run and the
station stays open.

## Output contract
```json
{"engagement_id": "ENG-0001", "documents_requested": [{"type":"","period":"","format":""}],
 "documents_received": [{"type":"","path":"","containers":0,"usable":true}],
 "coverage_pct": 0, "acknowledged_at": "iso", "expected_turnaround_days": 0,
 "chase_attempts": 0}
```

## Escalation
- Three chases with no documents → **Call Ticket.** The relationship, not the
  process, is now the blocker.
- Documents arrive as scanned images with no extractable text → log against
  Station 5's failure modes, request native format once, then Call Ticket.
- Client offers portal credentials instead of files → **refuse.** Agents never
  take credentials. Ask them to export, or to grant access under their own login
  with their own hands.
