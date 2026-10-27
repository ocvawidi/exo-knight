# Skill: Session Checkpoint

Status: PROVISIONAL workflow specification. A runtime must explicitly load and implement it.

## Purpose
Create a compact, reliable handoff record so a roleplay session can resume from the correct point without losing confirmed events, player agency, or canon boundaries.

A checkpoint is a snapshot of session state, not a substitute for approved lore or the full conversation history.

## Use when
- The creator/player asks to save, summarize, pause, or prepare a session handoff.
- A session is ending or likely to be resumed later.
- A major scene transition makes a checkpoint useful.
- The runtime needs a recovery point after a long or interrupted scene.

Do not create repetitive checkpoints after every small exchange unless explicitly requested or needed for recovery.

## Procedure
1. **Identify scope.** Use the current session and relevant available history only. State when earlier context is unavailable.
2. **Collect confirmed facts.** Extract events and state changes explicitly established in play. Preserve chronological order where known.
3. **Separate certainty levels.** Mark material as CANON, PROVISIONAL, PROPOSED, or UNKNOWN where relevant. Do not upgrade improvisation to canon.
4. **Capture the resume point.** Record the last player-authored action or statement and the immediate situation awaiting their next choice. Do not write a next action for the player.
5. **Check continuity.** Compare character presence, location, time, abilities, injuries/resources, relationships, knowledge, and active threads against available records. Flag conflicts instead of silently resolving them.
6. **Keep it compact.** Prioritize details required to continue accurately. Omit decorative prose and irrelevant scene history.
7. **Validate the checkpoint.** Ensure each important claim is supported by the conversation or a cited/identified project source. Mark missing information UNKNOWN or "not established".
8. **Present the record.** Make clear that this is a session checkpoint, not an approved canon update. Only write it to an external file or system when that capability is available and the write is confirmed.

## Checkpoint template

### Session metadata
- **Session ID/title:** [known value or UNKNOWN]
- **Checkpoint version:** [number if tracked; otherwise omit]
- **Created at:** [real timestamp only if available; otherwise omit]
- **In-world time:** [known value or UNKNOWN]
- **Current location:** [known value or UNKNOWN]
- **Checkpoint status:** SESSION RECORD — not a canon document

### Current scene
- **Situation:** [brief factual description of the scene now]
- **Last player-authored action/dialogue:** [faithful summary or brief quote]
- **Resume point:** [what is currently awaiting a response; do not decide for the player]

### Confirmed events
1. [Event in chronological order; identify source/status if not obvious]
2. [Event]

Only include events supported by the conversation or available project sources. Preserve uncertainty about ordering if exact chronology is unknown.

### Active characters
For each relevant character:
- **Name:**
- **Current state:** [position, condition, equipment/resources, or other scene-relevant facts]
- **Known information:** [only information the character plausibly knows]
- **Relationships/commitments:** [only established details]
- **Source/status:** [CANON, PROVISIONAL, or session fact, as appropriate]

If a field is not established, write UNKNOWN or omit it. Do not infer hidden thoughts or feelings.

### Open threads and pending decisions
- **Open thread / promise / threat:**
- **What is known:**
- **Pending decision or condition:**
- **Owner:** [player, NPC, creator, or UNKNOWN]

Do not resolve a thread merely to make the summary feel complete.

### Continuity notes
- **Potential contradictions:** [list each side and its source; do not silently choose]
- **Unknowns that may affect the next scene:** [list]
- **Constraints to preserve:** [player agency, ability limits, established injuries, location/time constraints, etc.]

### Proposed material awaiting approval
- [PROPOSED detail and approval status]
- If none, state "None recorded."

### Resume instruction
Continue from the current scene and resume point. Use Indonesian for narration and dialogue by default; retain established official names and technical/in-world terms. Do not recap the whole checkpoint unless asked. Do not invent player actions, private thoughts, decisions, or canon facts.

## Do not
- Convert every improvised detail into permanent canon.
- Invent timestamps, locations, character states, dialogue, motivations, or event order.
- Resolve an open thread or pending decision without evidence.
- Attribute knowledge to a character without a plausible source.
- Write future actions, decisions, consent, or private thoughts for the player.
- Treat a checkpoint as a replacement for approved character sheets, world lore, or other authoritative project records.
- Claim the checkpoint was saved to GitHub, Notion, or another system unless the write operation is confirmed.

## Quality checklist
Before presenting a checkpoint, verify:
- [ ] The resume point matches the latest player-authored turn.
- [ ] Confirmed events are separated from proposals and unknowns.
- [ ] Character states and knowledge are supported by evidence.
- [ ] Open threads and pending decisions remain unresolved.
- [ ] Contradictions are surfaced rather than silently retconned.
- [ ] No player action, dialogue, decision, or private thought has been invented.
- [ ] Language defaults to Indonesian.
- [ ] The checkpoint is labeled as a session record, not canon.
