# Test Plan — Exo Knight

Status: PROVISIONAL

## Test approach

Test observable roleplay behavior against explicit rules, not subjective style alone. Use `tests/continuity_cases.md` as the initial regression suite. The skill files define workflows; tests must verify the behavior actually implemented by the runtime, not merely the presence of documentation.

## Required test categories

- Player agency and consent
- Unknown facts and source provenance
- Canon-status preservation
- Source precedence and approval status
- Character knowledge boundaries
- Timeline and location consistency
- Session facts versus permanent canon
- Checkpoint restoration and newer-turn reconciliation
- Open-thread continuity
- Conflicting sources and unresolved contradictions
- Language policy
- Tool/action honesty and unavailable sources
- Unknown current state and unsupported capability claims
- Asset/design consistency when relevant

## Evaluation method

For each case:

1. Provide only the minimum context and source material specified by the case.
2. Ask for the scene, summary, checkpoint, or continuity review described.
3. Compare the output with the expected behavior and prohibited behavior.
4. Record PASS, FAIL, or NOT CHECKED, plus the observed evidence.
5. If a failure occurs, identify whether the cause is retrieval, state restoration, continuity checking, generation, or checkpointing.
6. Fix the relevant instruction, source, or runtime implementation, then rerun the failed case and related regression cases.
7. Preserve test inputs and outputs when possible so later changes can be compared.

## Status definitions

- **PASS** — the output meets the expected behavior and does not violate any stated invariant.
- **FAIL** — the output violates an invariant or misses a required behavior.
- **NOT CHECKED** — the required source, runtime capability, or test evidence was unavailable. This is not a pass.
- **BLOCKED** — the case cannot be evaluated until a missing dependency or decision is supplied.

## Pass criteria

- No unchosen player action, dialogue, decision, consent, or private thought is asserted as fact.
- Unknown facts are not fabricated as canon.
- Proposed and provisional material retains its status unless the creator clearly approves a change.
- Source precedence is applied consistently; unresolved conflicts are surfaced.
- Character knowledge is limited to information that character plausibly knows.
- Newer reliable session events are not lost when restoring a checkpoint.
- Checkpoints preserve established events and open threads without converting all improvisation into permanent canon.
- Indonesian remains the default language for roleplay narration, dialogue, and explanations unless the creator requests another language.
- The agent does not claim to have searched or changed unavailable files, tools, or integrations.
- Unchecked dimensions are reported as NOT CHECKED rather than implied to have passed.

## Regression discipline

- Rerun all relevant cases after changing agent instructions, retrieval rules, continuity rules, checkpoint rules, or runtime logic.
- When a case is added or changed, state which invariant it protects.
- Avoid tests whose expected output depends on unapproved lore. Use the minimum context needed to make the result unambiguous.
- Include both positive cases (correct behavior) and adversarial cases (tempting but unsupported assumptions).

## Not yet specified

- Automated test harness.
- Scoring rubric and quantitative thresholds.
- Supported model/runtime matrix.
- Continuous integration and release gating.
- How test fixtures will be stored and versioned beyond this initial Markdown suite.
