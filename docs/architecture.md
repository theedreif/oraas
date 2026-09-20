# ORaaS Architecture

## Purpose

ORaaS converts expert judgment into a continuously operating, auditable capability system.

The architecture deliberately separates four jobs:

1. **Friction Engine** — creates bounded hostile conditions.
2. **Telemetry Catcher** — records timestamped operator behavior.
3. **Classification Layer** — tags unstructured behavior against a predefined action library.
4. **Deterministic Rules Engine** — grades those tags against architect-defined thresholds.

No layer is allowed to silently take over another layer's job.

## End-to-End Architecture

```text
SOURCE MATERIAL
SOPs · manuals · incident history · field evidence
        ↓
DECLARATIVE-KNOWLEDGE FLOOR
Vocabulary · gauges · system anatomy · procedures · handoffs
        ↓
EXPERT / OPERATIONAL SELF
Pattern recognition · scar tissue · taste · tacit judgment
        ↓
JUDGMENT EXTRACTION
Observe → perturb → reconstruct → validate
        ↓
LOGIC ANCHOR
Trigger · Filter · Anchor
        ↓
FAILURE MATRIX + VARIABLE MATRIX
Known failure paths + validated ranges of environmental variation
        ↓
FRICTION ENGINE
AI generates conditions, noise, pressure, ambiguity and consequence
within the validated matrix
        ↓
OPERATOR
Acts naturally inside the simulated environment
        ↓
TELEMETRY CATCHER
Actions · queries · sequence · latency · escalation · threshold crossings
        ↓
CLASSIFICATION LAYER
Natural behavior → predefined action tags
Low-confidence tags → review / unclassified
        ↓
DETERMINISTIC RULES ENGINE
Event + timestamp + threshold → result
        ↓
READOUT / HEAT MAP
Patterns across repetitions, operators and scenario variants
        ↓
VALIDATION
Supervisor → near-miss → field-outcome correlation
        ↓
DOCTRINE UPDATE
Anchor · matrix · intervention · scenario class
        ↺
```

## Architectural Principle: AI Generates Conditions, Not Truth

The generative model is a fallible component. It may create scenario variation, dialogue, social pressure, degraded information, and other environmental conditions, but it does not own the final grade.

The **Variable Matrix** constrains the model to combinations the architect has validated as possible. The matrix is the wall; the model operates inside it.

The grading system is deterministic. The same recorded event against the same rule must produce the same result.

## Audit Thread

Every consequential score should be reducible to:

```text
RAW BEHAVIOR
→ TIMESTAMPED EVENT
→ CONFIDENCE-BOUNDED ACTION TAG
→ EXPLICIT RULE
→ RESULT
```

If that chain cannot be reconstructed later, the system is not audit-grade.

## Validation Harness

Before a new scenario class enters production:

- run known-good operator paths;
- run known-bad operator paths;
- test edge cases around Anchor thresholds;
- verify classification confidence handling;
- confirm deterministic scoring;
- log model output, tags, rules and results;
- reject the scenario class when error exceeds the architect's defined tolerance.

The architecture must make it possible to distinguish among:

- model failure;
- invalid Variable Matrix;
- poorly specified Logic Anchor;
- classification failure;
- scoring-rule error;
- legitimate operator behavior not anticipated by the doctrine.

The last category is especially valuable: it is evidence that the doctrine itself may need updating.

## Data and Doctrine Boundary

For organizational deployments, the encoded doctrine—Logic Anchors, Failure Matrix, Variable Matrix, action library and thresholds—should be treated as sensitive organizational intellectual property and governed accordingly.

The exact hosting, retention, security and model-provider controls are deployment decisions. They must be specified with engineering, security, legal and compliance rather than assumed by the Capability Architect.
