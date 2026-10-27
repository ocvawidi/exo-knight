# Test Plan — Exo Knight

Status: PROVISIONAL

## Test approach
Test narrative behavior against explicit rules, not subjective style alone. Use the cases in tests/continuity_cases.md as the initial regression suite.

## Required test categories
- Player agency
- Unknown facts and source provenance
- Canon-status preservation
- Character knowledge boundaries
- Timeline and location consistency
- Session facts versus permanent canon
- Contradiction handling
- Open-thread continuity
- Tool/action honesty

## Evaluation method
For each case:
1. Provide the minimum context required.
2. Ask for a scene, summary, or continuity check.
3. Compare output against the expected behavior.
4. Record pass/fail and the observed failure.
5. Fix the instruction or retrieval process, then rerun the suite.

## Pass criteria
- No unchosen player action, dialogue, decision, or private thought is asserted as fact.
- Unknown facts are not fabricated as canon.
- Proposed and provisional material retains its status.
- Conflicts are surfaced clearly.
- Character knowledge is limited to information that character plausibly knows.
- A checkpoint preserves established facts and open threads without converting all improvisation into canon.

## Not yet specified
- Automated test harness.
- Scoring rubric and thresholds.
- Supported model/runtime matrix.
