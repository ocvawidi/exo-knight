# Product Requirements — Exo Knight

Status: PROVISIONAL  
Owner of canon and final product decisions: project creator

## Purpose
Create a maintainable roleplay project where narrative play stays coherent across sessions and established lore remains under creator control.

## Goals
- Preserve continuity between sessions using explicit session checkpoints.
- Distinguish approved canon from proposals, provisional interpretations, and unknown facts.
- Preserve player agency.
- Keep project specifications and tests versioned.
- Make it easy to expand characters, world lore, and narrative mechanics without silently rewriting existing facts.

## Non-goals for the initial foundation
- Inventing missing character biographies or world history.
- Treating every roleplay improvisation as permanent canon.
- Building a production application before the workflow and requirements are confirmed.
- Claiming Markdown skill files execute automatically; a runtime must load and implement them.

## Core requirements
1. Lore entries must identify their canon status.
2. The creator is the final authority for canon approval.
3. The narrator must not choose the player's actions, dialogue, decisions, or private thoughts.
4. Contradictions with established facts must be surfaced rather than silently retconned.
5. Unknown facts must remain unknown until established.
6. Session state must distinguish confirmed events, open threads, character knowledge, and unresolved questions.
7. Specs and schemas must be version-controlled.
8. New lore imported from project sources must retain its source or provenance where practical.

## Success criteria
- A new contributor can understand the repository purpose and canon rules from the README.
- Core roleplay rules have a written specification.
- Character and session state have machine-readable schema drafts.
- Continuity behavior has test cases.
- No unverified character or setting details are presented as canon.

## Open decisions
- Runtime/platform implementation.
- Canon approval workflow and preferred labels in Notion.
- Required character fields after reviewing existing character datasheets.
- Session checkpoint format and persistence location.
