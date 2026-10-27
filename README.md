# Exo Knight

A hybrid workspace for the Exo Knight roleplay project.

## Project approach

- **Notion:** working knowledge, planning, discussion, and evolving notes.
- **GitHub:** versioned specifications, schemas, tests, and approved lore.
- **ChatGPT/runtime:** roleplay facilitation using the context actually made available to it.

## Repository map

- [Product requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Test plan](docs/TEST_PLAN.md)
- [Canon governance](lore/CANON_GOVERNANCE.md)
- [World lore intake template](lore/WORLD.md)
- [Character registry](lore/CHARACTERS.md)
- [Agent specification](agent/AGENT_SPEC.md)
- [Runtime instruction draft](agent/SYSTEM_INSTRUCTIONS.md)
- [Narrative scene workflow](skills/narrative_scene/SKILL.md)
- [Lore retrieval workflow](skills/lore_retrieval/SKILL.md)
- [Continuity check workflow](skills/continuity_check/SKILL.md)
- [Session checkpoint workflow](skills/session_checkpoint/SKILL.md)
- [Character JSON schema](schemas/character.schema.json)
- [Session state JSON schema](schemas/session_state.schema.json)
- [Continuity regression cases](tests/continuity_cases.md)

## Canon governance

Lore uses one of four status labels:

- `CANON` — explicitly approved by the creator.
- `PROVISIONAL` — a working interpretation that may change.
- `PROPOSED` — a suggestion awaiting approval.
- `UNKNOWN` — not established by available sources.

Only the creator can approve permanent canon. Do not silently retcon established facts, and do not decide the player's unchosen actions, dialogue, choices, or private thoughts.

## Current scope and limitations

This repository contains a foundational specification, not a running roleplay application. Markdown skill files are workflow specifications; a runtime must load and implement them for them to execute.

Character and world details must be imported from verified project material. Names such as Sasya, Eira, Aerith, the First Trinity, and the Core System are recorded as references to reconcile, not as permission to invent missing canon.

## Next steps

1. Import and reconcile creator-approved character datasheets and world lore.
2. Review the proposed schemas against the actual datasheets.
3. Confirm how session checkpoints should be stored and resumed.
4. Choose or build a runtime that loads these specifications and context.
5. Run the continuity test cases against the chosen runtime.
