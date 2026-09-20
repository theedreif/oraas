# Judgment Extraction Protocol

## Purpose

Traditional SME interviews capture what experts can explain.

ORaaS needs the parts they often cannot explain: the weak signal they notice, the noise they discard, the threshold they feel before they can verbalize it, and the sequence of probes that exposes what is actually happening.

The Capability Architect therefore treats the expert as a **signal source**, not merely an author.

## Protocol

### 1. Establish the Declarative-Knowledge Floor

Before testing judgment, collect the stable knowledge surrounding one task:

- SOPs and manuals;
- terminology;
- system anatomy;
- gauges and interfaces;
- required procedures;
- handoffs;
- known constraints.

This prevents a novice from failing a judgment exercise merely because they lack vocabulary.

### 2. Choose One Experienced Failure Mode

Ask for a failure the expert has personally witnessed or managed.

Start with questions such as:

- Where do novices reliably get this wrong?
- What is the most expensive or dangerous mistake you have seen?
- What looks normal just before it stops being normal?
- Where does the documented procedure become insufficient?
- What do experienced people check that novices do not?

### 3. Elicit the Trigger

Reconstruct the earliest point at which the expert knew—or suspected—that the situation had changed.

Do not settle for the obvious alarm if the expert noticed something earlier.

### 4. Elicit the Filter

Identify the plausible information, work, alerts or social pressure competing with the Trigger.

Ask what a competent novice would reasonably do instead.

### 5. Elicit the Anchor

Find the point where the expert's decision becomes non-negotiable.

Translate intuition into a threshold or explicit decision rule where the domain permits it. Verify the rule against authoritative sources when safety, policy or regulation is involved.

### 6. Put the Expert Under Friction

Do not rely only on retrospective explanation.

Present scenario variants. Change the order and intensity of validated variables. Observe:

- what the expert looks at first;
- what they ignore;
- what they query;
- how long they wait;
- when they escalate;
- when they change course.

### 7. Reconstruct the Logic Anchor

The architect reconstructs:

```text
TRIGGER → FILTER → ANCHOR → REQUIRED ACTION
```

Surface the reconstruction back to the expert.

### 8. Correct and Repeat

Run new variants. Look for contradictions between what the expert says and what the expert repeatedly does.

Three or four passes may be required before the expert recognizes the reconstructed Logic Anchor as their own.

### 9. Validate Before Shipping

The expert's recognition is necessary, not sufficient.

Check:

- authoritative source constraints;
- known-good paths;
- known-bad paths;
- edge cases;
- disagreement among experts;
- whether the rule can be scored deterministically;
- whether field correlation is still unknown.

## Output

A completed extraction produces:

1. one defined role/task;
2. one failure mode;
3. one Trigger;
4. one Filter;
5. one Anchor;
6. required action(s);
7. action-library tags;
8. candidate telemetry;
9. Variable Matrix inputs;
10. unresolved assumptions;
11. validation status.

## Principle

**Do not merely write down what the expert says. Build a system that reveals what the expert does.**
