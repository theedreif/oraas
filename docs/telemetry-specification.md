# Telemetry Specification

## Purpose

Telemetry is the digital footprint of operator behavior under load.

It is not a satisfaction score, completion record, or self-report. It records what the operator actually did, in what order, and how long it took relative to an encoded standard.

## Minimum Event Model

Each event should support an audit trail such as:

```json
{
  "operator_id": "pseudonymous-id",
  "scenario_id": "scenario-class-and-instance",
  "timestamp": "event-time",
  "raw_event": "operator behavior",
  "action_tag": "PREDEFINED_ACTION_ID",
  "classification_confidence": 0.0,
  "anchor_id": "ANCHOR_A",
  "rule_version": "version-id",
  "result": "pass|deviation|review|unclassified"
}
```

The schema above is a repository specification derived from the manuscript's architecture; implementations may require additional security, privacy and system fields.

## Three Core Behavioral KPIs

### Target Acquisition Time (TAT)

Elapsed time between the first meaningful failure signal and the operator's first investigative move.

```text
TAT = first_investigative_action_time - trigger_time
```

The threshold is scenario-specific and must come from validated doctrine.

### Confirmation vs. Investigative Ratio

Compares actions that merely confirm the system's current story with actions that actively interrogate it.

Examples depend on the scenario. A routine checklist step may be confirmation behavior while querying a conflicting sensor may be investigative behavior.

The ratio is structural, not moral. It helps expose attentional patterns under friction.

### Anchor Violation Latency (AVL)

Elapsed time beyond an Anchor condition before the required action occurs.

```text
AVL = required_action_time - anchor_crossing_time
```

Whether zero or another value is acceptable is determined by the validated Anchor—not by a generic ORaaS rule.

## Classification Layer

Operators should be allowed to behave naturally where the interface permits it.

An LLM or other constrained classifier may translate unstructured behavior into a predefined action tag.

Example:

```text
Raw input:
"Get me the radar feed."

Action tag:
RADAR_CROSS_REFERENCE_REQUESTED

Timestamp:
T+12.4 seconds
```

The classifier does **not** assign the grade.

If confidence falls below the deployment's defined threshold, the event is flagged for review or recorded as unclassified.

## Deterministic Scoring

A deterministic rule then evaluates the tag and timestamp.

Example pattern:

```text
IF visual_compromised = true
AND radar_cross_reference = true
AND timestamp <= validated_limit
THEN pass Anchor A
```

The model may generate the weather. The grade comes from the rule.

## Readout

Useful readouts may include:

- latency distributions;
- Anchor violations;
- path deviation;
- confirmation/investigation patterns;
- escalation behavior;
- performance across scenario variants;
- changes across repetitions;
- cohort patterns.

## Heat Map

The manuscript proposes a Heat Map using two broad dimensions:

- **Confidence / decision speed**
- **Competence / decision correctness**

This yields four operational profiles:

| Profile | Pattern |
|---|---|
| Ace | high competence, high confidence |
| Student | low competence, low confidence |
| Hesitator | high competence, low confidence |
| Confident Misalignment | low competence, high confidence |

The labels are diagnostic categories inside the model, not substitutes for field validation.

## Privacy and Governance

Production telemetry can become sensitive workforce data. Deployment therefore requires explicit decisions about identity, access, retention, purpose limitation, review rights, security, and applicable employment/privacy requirements.

Those implementation rules are not specified by the manuscript and must be established for the actual organization and jurisdiction.
