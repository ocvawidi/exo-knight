# Skill: Lore Retrieval

Status: PROVISIONAL workflow specification. A runtime must explicitly load and implement it.

## Purpose

Retrieve the smallest reliable set of established project facts needed to answer a question or continue a scene without inventing canon, losing source provenance, or treating a plausible guess as confirmed lore.

## Use when

Use this skill before generating content that materially depends on:
- world history, factions, locations, chronology, or rules;
- a named character's identity, appearance, personality, abilities, relationships, knowledge, or current condition;
- Exo Knight systems, technology, terminology, capabilities, limitations, or mechanics;
- events or decisions from earlier roleplay sessions;
- any detail the creator expects to remain consistent across scenes or project artifacts.

If the request is purely creative and does not depend on established facts, retrieval may be lightweight. Still preserve creator control over canon.

## Source precedence

Evaluate evidence in this order, while respecting the scope of each source:

1. The creator's latest explicit instruction for the current task.
2. Creator-approved canon and authoritative project documents.
3. The latest reliable session checkpoint, reconciled against newer conversation turns.
4. Explicit facts established in the current session.
5. Provisional or proposed material, clearly labeled as such.
6. Unknowns, inference, and general genre conventions (not canon evidence).

Important qualifications:
- A current-task instruction controls that task, but does not automatically amend permanent canon.
- A canon change requires clear creator approval; do not infer approval from silence, repetition, or casual brainstorming.
- A newer statement does not automatically supersede approved canon unless the creator clearly establishes a revision.
- A checkpoint records session state; it is not itself approval to change canon.
- If a source's authority, version, or approval status is unavailable, say so instead of guessing.
- Use only sources actually available to the runtime. Never claim to have searched a repository, file, or prior session that was not accessible.

## Retrieval procedure

1. **Define the question.** Identify the entity, event, rule, timeframe, and level of detail needed for the current task.
2. **Search available sources.** Search relevant project files and conversation context using exact names, aliases, key terms, and related concepts where supported.
3. **Collect evidence.** Capture only the passages or facts that directly bear on the question. Preserve source identity and relevant version/date when available.
4. **Classify each fact.** Assign a status using the labels below. Do not promote a fact's status merely because it appears in multiple places.
5. **Check provenance and scope.** Confirm whether the source is approved canon, a working draft, a session record, a current-task instruction, or an unverified recollection.
6. **Compare conflicts.** Look for incompatible names, dates, abilities, motivations, relationships, locations, character knowledge, and current state. Apply source precedence only when it genuinely resolves the conflict.
7. **Separate evidence from inference.** If inference helps, label it explicitly as inference and keep it out of the canon record.
8. **Handle gaps honestly.** Mark missing information UNKNOWN. Ask the creator a focused question if the missing fact blocks a coherent or consequential answer; otherwise proceed without asserting the unknown.
9. **Return a concise context packet.** Include only facts relevant to the task, their statuses, and the source needed to verify them.
10. **Recheck before use.** Before writing the scene or answer, make sure no provisional or unknown detail has accidentally been phrased as established fact.

## Canon-status labels

Use these labels consistently:
- **CANON** — explicitly creator-approved or contained in a clearly authoritative, approved canon source.
- **PROVISIONAL** — a working detail that may change and has not been approved as permanent canon.
- **PROPOSED** — a suggestion or option awaiting creator acceptance.
- **UNKNOWN** — not established in available evidence, or impossible to verify from the available sources.

If a project source uses a different label, preserve the source's wording and explain the mapping rather than silently changing its meaning.

## Suggested retrieval record

For each important fact, record:

- **Fact:** the smallest useful factual statement.
- **Entity/topic:** the character, location, event, system, or rule involved.
- **Status:** CANON / PROVISIONAL / PROPOSED / UNKNOWN.
- **Source:** exact file, conversation, or checkpoint reference when available.
- **Version/date:** commit, revision, timestamp, or stated timeframe when available.
- **Scope:** global canon, current scene, a specific session, or a task-only instruction.
- **Conflict:** any incompatible evidence, or “none found in sources checked.”
- **Notes:** uncertainty or inference, explicitly separated from the fact.

Do not fabricate line numbers, citations, timestamps, commit IDs, source names, or confidence values.

## Conflict handling

When evidence conflicts:
1. State the two or more incompatible claims and identify their sources.
2. Check whether the conflict is only apparent—for example, different timeframes, perspectives, aliases, or character knowledge.
3. Apply the source-precedence rules if one source clearly governs the question.
4. If the conflict remains material, label it **CONFLICT / UNRESOLVED** and ask the creator to decide before treating either claim as canon.
5. Do not silently merge incompatible versions, invent a reconciliation, or retcon prior events.

If the creator asks for a non-canon alternative, provide it as PROPOSED and keep it separate from approved lore.

## Character knowledge and roleplay continuity

- Distinguish what is true in the setting from what a particular character knows, believes, suspects, or has been told.
- Do not give a character information they have not plausibly acquired in the established scene or checkpoint.
- Distinguish a character's persistent canon traits from temporary session state such as injuries, location, equipment, active effects, and current goals.
- Use the latest reliable checkpoint together with subsequent turns; do not treat a checkpoint as more current than newer reliable events.
- Preserve player agency. Retrieval must not decide the player's next action, dialogue, intention, consent, or private thoughts.
- If a needed state is absent, mark it UNKNOWN rather than filling it in for narrative convenience.

## Output format

Return a compact packet appropriate to the task:

### Relevant established facts
- [Fact] — **Status** — Source: [available reference]

### Uncertain or conflicting details
- [Detail] — **UNKNOWN / PROVISIONAL / CONFLICT** — what is missing or inconsistent.

### Safe-to-use context
- A concise statement of what the next response can rely on without overclaiming.

Omit empty sections when they add no value. For a very small request, a short inline note is sufficient; do not force a long report.

## Language and naming

- Use Indonesian by default for roleplay narration, dialogue, explanations, and out-of-character discussion.
- Preserve official names, established labels, and technical or in-world terms as written.
- English may be used for technical terms, abilities, techniques, official labels, or short system/status messages when appropriate.
- Do not translate or rename canon terms without instruction. If an alias or translation is uncertain, mark it UNKNOWN.

## Guardrails

- A matching name is not proof that a fact is canon.
- Repetition is not creator approval.
- Plausibility, genre convention, and model familiarity are not evidence.
- Do not invent lore, sources, citations, dates, abilities, relationships, motives, or events.
- Do not treat a suggestion as approved canon unless the creator clearly accepts it.
- Do not claim a comprehensive search when only partial sources were available.
- Do not expose irrelevant retrieved material; return only what the current task needs.
- When uncertain, be transparent and preserve the creator's authority over the setting.

## Quality checklist

Before completing retrieval, confirm:
- [ ] The question and relevant scope are clear.
- [ ] Available sources were checked without claiming access to unavailable sources.
- [ ] Important facts have statuses and traceable sources where possible.
- [ ] Approved canon is distinguished from provisional, proposed, and unknown material.
- [ ] Character knowledge and current session state are not conflated with world truth.
- [ ] Conflicts are surfaced rather than silently retconned.
- [ ] Inferences are labeled and never presented as canon.
- [ ] The returned context is concise, relevant, and in Indonesian by default.
