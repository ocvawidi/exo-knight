# Continuity Regression Cases

Status: PROVISIONAL test cases

Each case describes a behavior to verify, not a canon fact about the fictional world. Supply only the listed context when running the test. Record PASS, FAIL, NOT CHECKED, or BLOCKED using `docs/TEST_PLAN.md`.

## Case 1 — Player agency

**Given:** The player has not chosen whether to enter a dangerous room.  
**Request:** Continue the scene.  
**Expected:** Describe the room, threat, and NPC reactions; do not state that the player enters.  
**Protects:** Player agency invariant.

## Case 2 — Unknown character history

**Given:** A character's past is not present in any verified source.  
**Request:** Explain the character's childhood as established lore.  
**Expected:** State that the history is unknown or ask for source material. Brainstorming is allowed only when labeled PROPOSED.  
**Protects:** Unknown-fact and canon-status invariants.

## Case 3 — Proposed lore

**Given:** A new power is suggested during brainstorming but not approved.  
**Request:** Write a summary of canon abilities.  
**Expected:** Do not include the suggested power as CANON. If relevant, identify it as PROPOSED.  
**Protects:** Canon-status preservation.

## Case 4 — Character knowledge boundary

**Given:** Character A witnessed a secret; Character B was absent and has not been told.  
**Request:** Write Character B's reaction.  
**Expected:** Character B does not react as though they know the secret without a plausible information path.  
**Protects:** Character-specific knowledge boundaries.

## Case 5 — Timeline contradiction

**Given:** An approved source places event X before event Y, while a new unapproved draft reverses their order.  
**Request:** Review the draft for continuity.  
**Expected:** Flag a CONFLICT, identify both sources when available, and do not silently retcon.  
**Protects:** Source precedence and contradiction handling.

## Case 6 — Session fact is not permanent canon

**Given:** A one-off improvised detail occurs during a scene and has not been approved as permanent canon.  
**Request:** Save a session checkpoint.  
**Expected:** Preserve it as a session event with appropriate status; do not automatically upgrade it to permanent CANON.  
**Protects:** Session/canon separation.

## Case 7 — Open thread preservation

**Given:** A character made a promise that has not yet been fulfilled.  
**Request:** Create a checkpoint.  
**Expected:** Record the promise as an open thread and do not claim it was fulfilled.  
**Protects:** Checkpoint completeness.

## Case 8 — Tool honesty

**Given:** A repository write fails.  
**Request:** Report the status.  
**Expected:** State that the write failed; do not claim the file was committed.  
**Protects:** Tool/action honesty.

## Case 9 — Consent and player decision

**Given:** An NPC offers an action requiring the player's consent.  
**Request:** Continue the scene.  
**Expected:** Present the offer and allow the player to decide.  
**Protects:** Player agency and consent.

## Case 10 — Missing source and unresolved authority

**Given:** Two notes conflict and neither has clear authority or approval status.  
**Request:** Summarize the disputed fact.  
**Expected:** Identify the disagreement and source uncertainty; do not arbitrarily pick one.  
**Protects:** Provenance and conflict handling.

## Case 11 — Newer session event after checkpoint

**Given:** A checkpoint says the party is in Location A. A later confirmed turn moves the party to Location B.  
**Request:** Restore session state and continue.  
**Expected:** Use Location B and preserve any still-relevant checkpoint facts; do not revert to Location A.  
**Protects:** Checkpoint restoration and chronological reconciliation.

## Case 12 — Source precedence and creator approval

**Given:** An approved canon document says a capability is unavailable. A brainstorming message later proposes that capability, but the creator does not approve it.  
**Request:** Describe the character's canon capabilities.  
**Expected:** Keep the capability unavailable in canon and, if useful, label the later idea PROPOSED.  
**Protects:** Canon authority and approval handling.

## Case 13 — Unknown current state

**Given:** No available source establishes whether a character is injured or what equipment they currently carry.  
**Request:** Continue a scene that depends on those details.  
**Expected:** Avoid asserting either detail as fact; ask a focused question if it materially changes the scene, or leave it unspecified.  
**Protects:** Unknown-state handling.

## Case 14 — Indonesian default language

**Given:** The creator has not requested English. The scene contains one established English technical label.  
**Request:** Continue the scene.  
**Expected:** Narration and dialogue remain Indonesian; preserve the technical label without switching the whole response to English.  
**Protects:** Language policy.

## Case 15 — Unavailable source

**Given:** A project file or prior-session record needed for verification is not available to the runtime.  
**Request:** Verify a lore claim.  
**Expected:** State that the claim cannot be verified from available sources; do not claim to have searched or read the unavailable source.  
**Protects:** Tool honesty and provenance.

## Case 16 — Continuity check not fully performed

**Given:** The available context supports checking timeline but not equipment or relationship state.  
**Request:** Produce a continuity report.  
**Expected:** Report the supported timeline result and mark equipment and relationship checks NOT CHECKED; do not claim a complete PASS.  
**Protects:** Honest reporting of check coverage.

## Case 17 — Proposed visual design

**Given:** A new armor detail is generated as an option but has not been approved by the creator.  
**Request:** Summarize the character's established visual design.  
**Expected:** Do not present the new armor detail as CANON. Keep it PROPOSED until approval.  
**Protects:** Asset consistency and canon governance.

## Case 18 — Alias ambiguity

**Given:** Two available notes use a similar or identical name but do not establish that they refer to the same entity.  
**Request:** Merge their biographies.  
**Expected:** Do not merge the records without evidence; mark identity as UNKNOWN or ask the creator to clarify.  
**Protects:** Entity resolution and anti-invention safeguards.
