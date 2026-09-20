# Worked Example — The Renewal That Didn't Want to Close

This example adapts the manuscript's corporate-domain renewal scenario to show how the ORaaS components fit together.

It is deliberately non-kinetic: the doctrine should survive a change of domain.

## Context

A customer-success manager owns a health-system account approaching renewal.

Conventional dashboard signals look healthy:

- high platform usage;
- positive prior survey results;
- renewal marked on track.

The visible system says green.

The relationship is beginning to say something else.

## Failure Mode

**Dashboard blindness during an emerging renewal risk.**

The novice continues executing the documented renewal process because the conventional metrics remain healthy.

The experienced CSM detects a pattern of relationship withdrawal before the dashboard catches up.

## Logic Anchor

### Trigger

The important signal is not a single red metric. It is a new pattern:

- a previously responsive clinical-informatics director begins taking days to answer;
- recurring working sessions are repeatedly rescheduled;
- release communication goes unopened.

The expert notices the combination and the change from baseline.

### Filter

The friction engine introduces legitimate competing work:

- forecast update requests;
- co-marketing approval;
- another customer's urgent ticket;
- routine QBR preparation.

None of these tasks is fake. That is why the Filter works.

A novice can remain busy, compliant and apparently productive while failing to investigate the emerging account risk.

### Anchor

The manuscript's example describes the expert acting quickly after repeated rescheduling and pulling the relationship thread rather than continuing routine process.

Any production implementation must convert that behavior into an explicit, buyer-validated Anchor and must **not invent a universal customer-success threshold**.

## Friction Loop

The scenario begins with the CRM showing a healthy account.

Over time, the environment changes:

1. response latency increases;
2. a working session is rescheduled;
3. routine tasks arrive;
4. another session is disrupted;
5. outbound activity remains high;
6. inbound engagement continues to weaken.

The system watches what the CSM does.

Does the operator keep completing the visible workflow?

Or do they interrogate the relationship signal?

## Candidate Telemetry

The manuscript's general telemetry model suggests measuring:

- time from the meaningful Trigger to first investigative action;
- number/order of confirmation behaviors;
- number/order of investigative behaviors;
- escalation timing;
- whether the operator crosses the validated Anchor without action.

The exact scoring thresholds require organizational validation.

## Example Action Library

```text
CRM_STATUS_REVIEWED
QBR_TEMPLATE_OPENED
FORECAST_UPDATED
CUSTOMER_ENGAGEMENT_HISTORY_QUERIED
IMPLEMENTATION_LEAD_CONTACT_REQUESTED
RELATIONSHIP_RISK_ESCALATED
EXECUTIVE_SPONSOR_CONTACT_REQUESTED
```

These tags illustrate the architecture; an actual deployment should derive its action library from the organization's workflow and extracted expert judgment.

## Readout

A completion-oriented system may report that the CSM finished the required renewal activities.

ORaaS asks a different question:

> How long did it take the CSM to stop confirming the green dashboard and investigate the weak relationship signal?

Across repeated variants, that behavior can reveal patterns such as:

- fast and correct investigation;
- correct but delayed investigation;
- cautious uncertainty;
- fast confidence in the wrong story.

## Validation

The loop is not proof that a CSM will save a real renewal.

Validation must proceed through the ORaaS ladder:

```text
LOOP BEHAVIOR
→ SME CALIBRATION
→ COMPARISON WITH REAL AT-RISK / LOST ACCOUNTS
→ CORRELATION WITH FIELD OUTCOMES
→ DEFENSIBLE CLAIM
```

Possible field outcomes include earlier risk identification, time to escalation, recovery activity, or retention—but the organization must choose the outcome and establish the relationship.

## Lesson

The example demonstrates the manuscript's cross-domain claim:

**ROP is what happens whenever written process meets human mess.**

The friction may be sea spray and sensor disagreement, or it may be an executive request arriving while a customer quietly disengages.

The architecture is the same:

```text
TRIGGER → FILTER → ANCHOR → DECISION → EVIDENCE
```
