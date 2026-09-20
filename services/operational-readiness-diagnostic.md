# Operational Readiness Diagnostic

**One role. One workflow. One failure mode. Five days.**

> Find the gap between what the procedure says should happen and what people or agentic workflows actually need to recognize, decide, and do when reality departs from the plan.

## What changes on Monday

**Before:** the dashboard is green and nobody can tell you what it would look like if it were wrong.

**After:** you know the exact signal that turns it red, and you have already watched it happen in simulation.

That is the whole sale. Everything else on this page is the method for getting from the first sentence to the second.

The five-day diagnostic is **not the readiness verdict**. It installs the first instrument. Day five establishes a baseline and a live telemetry specification designed to keep producing evidence after the engagement ends.

**The Diagnostic starts the curve. ORaaS keeps it running.**

## What this is

The Operational Readiness Diagnostic is the smallest commercial entry point into ORaaS.

It is a fixed-scope examination of one consequential workflow. The diagnostic does not begin by asking what training content exists. It begins with the failure that matters, the conditions surrounding it, the judgment required to detect it, and the evidence that would show whether that judgment survives friction.

The engagement stays deliberately narrow:

```
ONE ROLE
   +
ONE WORKFLOW
   +
ONE MATERIAL FAILURE MODE
   +
ONE EXPERT / AUTHORITATIVE SOURCE
   ↓
ONE INSTRUMENTED BASELINE
```

The objective is not an enterprise transformation plan. It is one defensible thread of evidence and an instrument capable of continuing to measure it.

## What you leave with

The buyer receives three things.

### 1. The Exposure Map

Where the workflow can fail, the SOP → ROP gap, and the judgment that matters.

This incorporates the role, workflow, material failure mode, authoritative constraints, and the Logic Anchor:

```
TRIGGER → FILTER → ANCHOR
```

### 2. The Instrumented Readiness Loop

A bounded synthetic-friction scenario plus the telemetry specification required to observe what happens when the judgment is put under load.

The purpose is not to create difficulty for its own sake. It is to make the failure mode reproducible on demand and score the behavior consistently.

### 3. The Baseline & Validation Plan

What the first run showed, what signal turns the instrument red, what remains unproven, and how the measurement continues after day five.

The baseline is the beginning of the readiness curve, not a certificate.

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

### Day 4 — Instrument the behavior

Define the smallest useful telemetry set and run the bounded scenario.

Candidate measures can include time to correct classification, path deviation from approved doctrine, confidence versus accuracy, recovery after an incorrect decision, anchor violation latency, human override behavior, and silent failures hidden behind apparently healthy metrics.

The final metrics depend on the workflow and the evidence available.

### Day 5 — Establish the baseline

Read out the first evidence, identify what turns the instrument red, document what remains unknown, and establish the validation path.

Day five does not end the measurement. It establishes the baseline from which continuing evidence can be compared.

## Public case — When Nothing Technically Went Wrong

**The SFPD ReadyLink exposure, read through the ORaaS readiness lens**

This is a public incident used as a case analysis, not an ORaaS customer engagement and not evidence that this diagnostic was run before the event.

In July 2026, reporting described a ReadyLink associated with five SFPD drone feeds that required no authentication and had been configured with a one-year expiration. Security researchers Sam Curry and Maik Robert found the link after it appeared in an open archive of web URLs. Reporting indicated that the link may have exposed access for roughly six months before discovery.

The useful ORaaS distinction is **reliability versus readiness**. The public reporting did not describe an exploit of the drone aircraft or a conventional software hack. The exposure arose through an allowed sharing configuration. A system can therefore behave as configured while the operational system around it remains unable to detect that the configuration has created unacceptable exposure.

### The missing alarm

The readiness question is not merely whether the share feature worked. It is whether the operating system around the feature could detect an unsafe or unintended state quickly enough to matter.

Run through the ORaaS spine:

**Signal.** Viewer-side telemetry for every live share: authentication state, share age, viewer/session activity, and whatever viewer identity or network information the organization is lawfully permitted to collect and use.

**Threshold.** This must be established by the accountable organization and authoritative security/privacy policy. Candidate triggers for evaluation could include a long-lived active share without authentication, anomalous viewer activity, or activity outside the intended audience. The repository does **not** assert that 72 hours, a particular address range, or any other number is a universally valid threshold.

**Friction.** Rehearse ordinary use under pressure: create a share using an allowed but high-exposure configuration, then test whether internal controls detect and escalate it. This is not a red-team exploit against the software. It is a normal-use test against the blind spot.

**Red.** In the public incident, discovery came from outside researchers after the link had reportedly been exposed for months. For readiness purposes, externally discovered exposure is the observed failure condition. A future program should define its own acceptable internal detection threshold and test against it.

**Evidence.** A recurring operational readout of active shares, age, authentication state, and available viewer/audit activity. The useful outcome is not a dramatic dashboard. It is an instrument capable of returning a boring reading when nothing is wrong and raising a defensible signal when conditions cross an approved boundary.

### Why this case matters

The case demonstrates the difference between a component doing what it was configured to do and an operational system being ready for the consequences of that configuration.

**Day zero:** the exposure can exist without a useful internal signal.

**Day six target:** the exposure class has a count, an authoritative threshold, a test, and a bell.

That is the ORaaS proposition in public: do not wait for an outside researcher, reporter, customer, regulator, or incident to tell you what your own operating system should already be capable of seeing.

### Public sources

- [WIRED — A Leak of San Francisco Police Drone Footage Exposes the New Reality of Urban Surveillance](https://www.wired.com/story/sfpd-drone-video-leak-surveillance/)
- [Skydio — company blog / security response archive](https://www.skydio.com/blog)
- [ABC7 San Francisco — SFPD drone livestreams exposed online for months](https://abc7news.com/post/san-francisco-police-department-drone-livestreams-exposed-online-months-wired-investigation-shows/19501550/)
- [DroneXL — SFPD Skydio Drone Feeds Streamed Live On The Open Internet For Six Months](https://dronexl.co/2026/07/13/sfpd-skydio-drone-feed-live-internet/)

**Evidence status:** public case analysis based on published reporting and company statements. It demonstrates how the ORaaS diagnostic can frame a real incident; it is not a claim that Ed Reif, ORaaS, Skydio, or SFPD ran this diagnostic or produced these proposed telemetry controls before the incident.

## Worked example — Silent Churn

The repository includes a worked corporate-domain example built around an at-risk customer renewal.

**Failure mode:** a healthy-looking account dashboard masks an emerging renewal risk.

**Signal:** changes in response latency, repeated rescheduling, and unopened communications.

**Anchor:** the repository deliberately does not invent a universal threshold. The production Anchor must be established and validated with the buyer's authoritative expert or source.

**Instrument:** expose the operator to the signal alongside plausible competing work, then measure Trigger-to-investigative-action latency, confirmation versus investigation, escalation timing, and Anchor crossings.

See the [Silent Churn worked example](../examples/silent-churn.md).

**Evidence status:** this is a design demonstration, not a claimed customer deployment or field-validated ORaaS result. A named or anonymised real case should replace or supplement it only after an actual instrumented run has produced evidence.

## What this does not do

It does **not** certify the workflow safe.

It does **not** replace a governance, safety, compliance, security, engineering, or regulatory review.

It does **not** guarantee that the diagnostic will discover a frightening failure.

It can come back clean. In that case, the buyer leaves with a baseline, a working measurement design, and no manufactured drama.

A measurement instrument you can trust is one that is allowed to return a boring reading. This engagement is not graded on whether it found something scary.

A synthetic result is not automatically a field result. The evidence ladder remains:

```
LOOP EVIDENCE
      ↓
SUPERVISOR CALIBRATION
      ↓
NEAR-MISS COMPARISON
      ↓
FIELD OUTCOME CORRELATION
      ↓
VALIDATED READINESS CLAIM
```

## What happens after day five

The Diagnostic has one job: **start the curve**.

If the organization chooses to continue into ORaaS, the instrument remains active as conditions, models, policies, and workflows change:

```
BASELINE → FRICTION → TELEMETRY → VALIDATION → UPDATE → REPEAT
```

The commercial distinction is simple:

**The Diagnostic installs the instrument. ORaaS keeps it running.**

There is no Diagnostic Plus. The scope remains one role, one workflow, one failure mode, five days.

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
