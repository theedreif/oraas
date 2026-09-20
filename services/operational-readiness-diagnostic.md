# Operational Readiness Diagnostic

**One role. One workflow. One failure mode. Five days.**

> Find the gap between what the procedure says should happen and what people or agentic workflows actually need to recognize, decide, and do when reality departs from the plan.

## What this is

The Operational Readiness Diagnostic is the smallest commercial entry point into ORaaS.

It is a fixed-scope examination of one consequential workflow. The diagnostic does not begin by asking what training content exists. It begins with the failure that matters, the conditions surrounding it, the judgment required to detect it, and the evidence that would show whether that judgment survives friction.

The output is a **Readiness Exposure Report** that identifies the gap between documented procedure and operational reality and defines a practical path to test it.

## The unit of work

```
ONE ROLE + ONE WORKFLOW + ONE MATERIAL FAILURE MODE + ONE EXPERT / AUTHORITATIVE SOURCE
                                      ↓
                         READINESS EXPOSURE REPORT
```

The engagement stays deliberately narrow. The objective is not an enterprise transformation plan. It is to produce one defensible thread of evidence.

## Five-day structure

### Day 1 — Define the exposure

Establish the role, workflow, consequential failure mode, applicable authoritative sources, operating conditions, known constraints, and cost or consequence of getting the decision wrong.

Separate the documented **SOP** from the observed or expected **ROP — Reality Operating Procedure**.

### Day 2 — Extract the judgment

Work with the expert or authoritative source to identify the smallest useful unit of judgment:

```
TRIGGER → FILTER → ANCHOR
```

**Trigger:** What is the earliest meaningful signal?

**Filter:** What plausible noise competes for attention?

**Anchor:** What validated threshold, condition, sequence, state change, or escalation boundary changes the decision?

Unknown thresholds remain unknown until an authoritative source verifies them.

### Day 3 — Design the friction

Build a bounded failure and variable matrix around the judgment point.

Potential variables include incomplete information, stale data, competing signals, time pressure, resource constraints, policy ambiguity, degraded systems, interruptions, and other conditions supported by the real workflow.

The objective is not difficulty for its own sake. The objective is to expose whether the required judgment survives realistic variation.

### Day 4 — Define the evidence

Specify the smallest useful telemetry set.

Candidate measures can include time to correct classification; path deviation from approved doctrine; confidence versus accuracy; recovery after an incorrect decision; anchor violation latency; human override behavior; and silent failures hidden behind apparently healthy metrics.

The final metrics depend on the workflow and the evidence available.

### Day 5 — Readout and next decision

Deliver the Readiness Exposure Report and walk the buyer through the SOP → ROP gap, critical judgment point, Logic Anchor, failure and variable matrix, proposed synthetic-friction test, behavioral evidence required, assumptions, unresolved authoritative questions, validation plan, and recommended next step.

## Deliverables

The buyer receives:

1. **Readiness Exposure Report**
2. **SOP → ROP Gap Map**
3. **Logic Anchor**
4. **Failure + Variable Matrix**
5. **Synthetic Friction Scenario Brief**
6. **Telemetry / Evidence Specification**
7. **Validation Plan**
8. **Next-Step Recommendation**

## What this diagnostic does not claim

A five-day diagnostic does not certify operational readiness.

It identifies exposure, formalizes a judgment point, defines how that judgment can be stressed, and specifies what evidence would be required to support a readiness claim.

A synthetic result is not automatically a field result.

```
LOOP EVIDENCE → SUPERVISOR CALIBRATION → NEAR-MISS COMPARISON
      → FIELD OUTCOME CORRELATION → VALIDATED READINESS CLAIM
```

## What can follow

**Judgment Capture Sprint** — extract and encode additional expert judgment.

**Synthetic Friction Prototype** — build and instrument the first working readiness loop.

**Capability Architecture Project** — extend the method across a role, workflow, or operational domain.

**ORaaS Deployment** — establish continuous friction, telemetry, validation, and doctrine updating.

The diagnostic does not presume which answer is appropriate. Its purpose is to earn the next decision with evidence.

## Buyer

The natural buyer is the person or function carrying the cost of failure: operations, engineering, risk, safety, customer operations, AI/product leadership, or another accountable operational owner.

L&D can be an important partner, but this is not sold primarily as course development.

## Commercial principle

The diagnostic sells neither hours nor slides. It sells **resolution**:

```
WHERE CAN THIS FAIL?
        ↓
WHAT JUDGMENT MATTERS?
        ↓
WHAT WOULD EXPOSE IT?
        ↓
WHAT EVIDENCE WOULD PROVE IT?
        ↓
WHAT SHOULD WE DO NEXT?
```

**One role. One workflow. One failure mode. Five days.**

**Engineering in. Capability out. Evidence always.**

---

Author: **Ed Reif**  
Method: **Operational Readiness-as-a-Service (ORaaS)**
