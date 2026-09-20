# Logic Anchor Specification

## Definition

A **Logic Anchor** is the smallest useful unit of encoded expert judgment in ORaaS.

It captures three things an experienced operator knows when reality begins to depart from the documented process:

```text
TRIGGER → FILTER → ANCHOR
```

## Trigger

The **Trigger** is the first meaningful anomaly—the early signal the expert notices while a novice may continue to see normal operation.

Ask:

- What is the first one percent of failure?
- What changes before the obvious alarm?
- What weak signal makes the expert pull the thread?

A Trigger should be observable and specific enough to reproduce in a scenario.

## Filter

The **Filter** is the plausible noise that competes for attention.

It may include routine alarms, procedural tasks, irrelevant metrics, social pressure, interruptions, competing priorities, or known-noisy channels.

Ask:

- What does the novice attend to instead?
- What legitimate work obscures the important signal?
- What has the expert learned to ignore, defer, or discount?

The Filter is not random distraction. It should reproduce field-relevant attentional competition.

## Anchor

The **Anchor** is the boundary that changes the decision.

Where possible it should be explicit and measurable: a threshold, duration, state combination, sequence condition, escalation rule, or other criterion that can be scored consistently.

Ask:

- At what point is the current path no longer acceptable?
- What condition requires intervention, escalation, disengagement, or another defined action?
- What does "too late" mean operationally?

## Canonical Template

```yaml
logic_anchor:
  role:
  task:
  failure_mode:

  trigger:
    signal:
    first_detectable_point:
    evidence_source:

  filter:
    competing_signal:
    why_plausible:
    expected_expert_response:

  anchor:
    condition:
    threshold:
    required_action:
    maximum_latency:
    authoritative_source:

  action_library:
    - action_id:
      description:

  telemetry:
    target_acquisition_time:
    confirmation_investigative_ratio:
    anchor_violation_latency:

  validation:
    expert_confirmed:
    source_verified:
    field_correlation_status:
```

## Quality Test

A Logic Anchor is not ready merely because it sounds plausible.

It should survive four questions:

1. Can a domain expert recognize it as an authentic description of the decision?
2. Can the Trigger and Filter be reproduced without inventing impossible conditions?
3. Can the Anchor be scored without asking an LLM to make an opaque judgment?
4. Can the result eventually be compared with real field outcomes?

## Guardrail

Never invent a safety threshold, operating limit, policy, or regulatory requirement to make a scenario convenient. If the source does not establish the Anchor, mark it **UNKNOWN / REQUIRES AUTHORITATIVE VERIFICATION**.
