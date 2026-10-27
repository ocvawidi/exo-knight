# Architecture — Exo Knight

Status: PROVISIONAL architecture proposal

## System boundaries
- Notion: working knowledge, planning, discussion, and evolving project notes.
- GitHub: versioned approved specifications, schemas, tests, and canon snapshots.
- ChatGPT/runtime: narrative interaction and reasoning over the context made available to it.
- Creator/player: authority over canon approval and the player's own decisions.

## Conceptual flow
1. Retrieve relevant lore and the latest session checkpoint.
2. Identify the status and source of each relevant fact.
3. Generate the next scene while respecting character knowledge and player agency.
4. Check the draft for continuity risks and contradictions.
5. Present the scene and leave the player's choices open.
6. On request or at a suitable boundary, draft a checkpoint.
7. Keep session-specific events separate from permanent canon until approved.

## Trust boundaries
- A retrieved note is not automatically canon.
- A proposed detail must not be upgraded to canon by repetition.
- A runtime should not claim it has loaded a document unless it actually has.
- A Markdown skill is a specification, not executable behavior by itself.
- Secrets, tokens, and private credentials must never be committed.

## Data flow
Source material -> status/provenance check -> scene context -> narrative output -> continuity review -> session checkpoint -> creator review -> approved canon (if accepted)

## Failure handling
- Missing information: mark it unknown or ask a concise clarification.
- Conflicting sources: show the conflict and identify the sources; do not silently choose a retcon.
- Missing prior context: say what is unavailable and request a checkpoint/source.
- Tool or connector failure: report the failure plainly; do not claim an operation succeeded without verification.

## Initial implementation strategy
Start with versioned Markdown and JSON Schema. Add automation or application code only after the runtime, storage, and approval workflow are decided.
