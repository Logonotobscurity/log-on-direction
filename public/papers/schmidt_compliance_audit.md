COMPLIANCE AUDIT  ·  INTERNAL REVIEW DOCUMENT

Does Our Proposal Pass?

Schmidt Sciences 2026 Interpretability RFP · Line-by-line verification of fit, gaps, and required revisions

Logo M. · LOG_ON AI · March 2026  ·  For internal revision before May 26 submission

Audit Verdict

The proposal is competitive but not yet submission-ready. The core insight — African deployment as a cross-lingual deception stress test — is genuinely novel and well-matched to Schmidt’s research agenda. However, four specific problems must be fixed before May 26: (1) Track 3 as currently framed will likely be classified as out-of-scope; (2) the mechanistic argument for why whitebox probes outperform blackbox at the translation layer is asserted but not demonstrated; (3) Schmidt’s definition of deception requires the model to internally represent the truth — this requirement is not explicitly met for all six deception categories; (4) no named people with interpretability publication records are identified. These are fixable problems. None of them requires rebuilding the proposal. All four require specific, targeted additions.

Section 1 — Compliance Scorecard

Criterion

Score

Status

Key finding

Fit with Research Agenda

7/10

AMBER

Strong core. One critical framing risk on Track 3.

Scientific Quality & Rigor

6/10

RED

Missing: explicit mechanistic argument for WHY whitebox > blackbox at translation layer. Missing: threat model specification.

Potential Impact

8/10

GREEN

African deployment as stress test is genuinely novel. Field-shaping potential is credible.

Feasibility & Scope

7/10

AMBER

WP4 Lagos study is well-scoped. WP2 probe generalization claim (≥15% F1) needs pre-registered power analysis.

Team Expertise

6/10

AMBER

Proposal doesn't yet name specific people with interpretability/probing publication records. This will be scored hard.

Cost Effectiveness

8/10

GREEN

$884k at 9.9% overhead, personnel at 79% — all defensible. Budget table is solid.

Out-of-Scope Risk

CRITICAL

RED

Track 3 as currently framed risks hitting two explicit out-of-scope items. Must reframe before submission.

Core Definition Alignment

6/10

AMBER

Model 'knows' it's being deceptive — need mechanistic evidence this is true for translation-layer behaviors.

Critical Issue 1 — Schmidt’s Definition Requires the Model to ‘Know’ It Is Deceiving

This is the most important alignment issue in the proposal. Schmidt defines deceptive behavior as cases where there is 'a contradiction between what a model says (or does) and what it internally represents to be true.'

That is a specific and demanding definition. It requires that the model holds an internal representation of the truth while producing a different output. It is not sufficient to show that the output is wrong. It requires showing that the internal state represents something different from what the output claims.

The proposal maps six deception categories to African deployment failures. Not all six satisfy this definition with equal strength. Here is the honest assessment:

Category

Schmidt definition fit

Problem

Required fix

STRONG FIT

D6 — Capability self-misrepresentation

Model 'internally represents' (via its own capability-assessment circuits) that it is weak in Yoruba, while claiming implicitly through confident generation that it is capable. Hagendorff (PNAS 2024) directly documents this.

None. This is the strongest category. Lead with it.

STRONG FIT

D3 — Context misrepresentation via translation backend

Wendler et al. (2024) and Zhao et al. (2023) document that the model processes Yoruba through English representations. The model 'represents' the interaction as English internally while claiming to the user it is engaging in Yoruba. This is a contradiction between internal state and output claim.

Cite Wendler and Zhao explicitly as the mechanistic grounding for D3. The internal representation evidence is already in the literature.

MODERATE FIT

D2 — Confidence miscalibration

The model produces English-calibrated confidence. But does it 'internally represent' a different confidence level for the Yoruba query? This requires mechanistic evidence: is there a layer where the model encodes uncertainty about the low-resource language before generating the confident output?

Add: Datta et al. (2026) found internal uncertainty signals exist. This is the mechanistic evidence that internal representation differs from output. Cite it explicitly as proving D2 fit.

PARTIAL FIT

D4 — Selective omission

Harder to frame as 'model knows' vs capability limitation. The model may not have the African-specific information in any layer to omit. If it is not present, this is ignorance, not deception.

Either: (a) remove D4 from primary claims and use only where specific evidence shows the model has region-specific information in training data but fails to activate it, OR (b) reframe as sycophancy-linked: model omits information that would contradict user expectations.

WEAKEST FIT

D1 — Factually incorrect claims

Hallucination in African languages is likely a capability failure, not internal deception. The model probably does not 'internally represent' the correct fact while outputting the wrong one — it simply does not know.

Reframe D1 as: the model internally represents high confidence (a state it 'knows') while producing an output that is demonstrably wrong. The deception is the false confidence, not the wrong fact. This reframing is technically honest and Schmidt-compliant.

D6 and D3 are the strongest fits with Schmidt's definition and should be the primary research targets. D1 needs to be reframed from 'wrong facts' to 'false confidence about wrong facts.' D4 should be deprioritised or dropped unless specific mechanistic evidence can be added.

Critical Issue 2 — The Out-of-Scope Risk: Track 3 as Currently Framed

This is the most dangerous gap in the proposal. Schmidt's RFP explicitly lists several out-of-scope items. Track 3 (Lagos SMME Human-AI Team study) risks hitting two of them simultaneously.

Risk

Severity

What RFP says

Our proposal risk

Required fix

OOS Risk 1: Human-AI collaboration improvement

CRITICAL

OUT OF SCOPE: 'improving human-AI collaboration via transparent model reasoning' is explicitly out of scope.

Track 3 is currently framed as improving human-AI team performance. Decision quality improvement and trust calibration are collaboration outcomes. Reviewers could classify this as OOS.

Reframe Track 3 entirely: the study measures whether deception detection reduces deceptive behaviors in deployment — with human decision outcomes as the downstream measurement of deception reduction, not as a collaboration improvement goal.

OOS Risk 2: Broader societal impact without model reasoning analysis

HIGH

OUT OF SCOPE: 'assessments of broader societal impacts that do not analyze model reasoning per se.'

Decision quality for Lagos SME operators is a societal impact measurement. If the study doesn't explicitly tie each outcome measure back to a specific internal reasoning analysis, it reads as societal impact assessment.

Every outcome measure in Track 3 must be connected to a specific internal reasoning state being tested. Decision quality = downstream evidence that D6 steering reduced capability misrepresentation. Trust calibration = evidence that D2 probe recalibrated the confidence representation.

OOS Risk 3: General-purpose auditing

LOW

OUT OF SCOPE: 'general-purpose auditing techniques for AI.'

WP1 (deception audit across 6 languages) could be read as general-purpose auditing rather than deception-specific interpretability work.

Reframe WP1 explicitly as: baseline measurement of the six Schmidt-defined deception categories using interpretability methods — not a performance audit. Probes, not benchmarks.

The Track 3 Reframe (Required Language)

Current framing (REMOVE): 'Deploy detection and steering methods on the LOG_ON AI platform with 40 Lagos-based SME operators... Measure whether interpretability interventions produce better human-AI team outcomes.'

Required reframing (USE THIS): 'Apply detection probes and steering interventions in an active deployment context with 40 Lagos-based SME operators to measure whether the D6 and D2 deception behaviors detected in WP2 and WP3 are reduced when interpretability interventions are active. Human decision outcomes serve as an independent validation signal for deception reduction: if D6 (capability self-misrepresentation) is successfully steered, operators should receive better-calibrated AI outputs, measurable through the quality of decisions made using those outputs. This is an application of deception detection and steering, not a human-AI collaboration improvement study.'

Critical Issue 3 — Missing: Mechanistic Argument for Why Whitebox Beats Blackbox

Schmidt is explicit: 'we are looking for interpretability tools that outperform baselines that do not rely on access to weights, to prove that we can truly capitalize on our understanding of model internals.'

Our proposal commits to outperforming blackbox baselines by ≥15% F1. That is the right commitment. But the proposal does not explain WHY whitebox access to the translation layer specifically gives us an advantage that blackbox methods cannot match. The argument is asserted, not demonstrated.

Here is the mechanistic argument that needs to be added:

What blackbox methods can see

What whitebox probes at the translation layer see

The output token. The final distribution over tokens in the output language. Uncertainty expressed as token probability. Whether the output language matches the input language. Whether the output contains hedging language.

For D6 (capability misrepresentation): blackbox sees that the model produced a confident response. It cannot see whether the confidence was generated from English-backend reasoning or target-language reasoning. It cannot distinguish 'confident because capable' from 'confident because the English-backend produced a confident English response that was then translated.'

The representation at the language-identity shift layer — the internal state where Yoruba input is mapped to English processing space. This layer encodes the language context the model is 'reasoning in.'

For D6: a whitebox probe at this layer can detect the discrepancy between (a) the language the user is engaging in and (b) the language in which the model is internally generating confidence signals. This is the internal-state-vs-output contradiction Schmidt's definition requires. Blackbox cannot see this discrepancy. Whitebox can.

This is the argument that makes the whitebox claim mechanistically credible. It needs to be in the Technical Approach section of the proposal, not just asserted as a 15% F1 commitment.

Critical Issue 4 — Team Expertise: No Named Researchers with Interpretability Records

Schmidt's fifth selection criterion is explicit: 'Is the team well-suited to execute the proposed work, with relevant technical expertise, sufficient capacity, and a level of time commitment commensurate with the ambition of the project?'

The current proposal identifies the team as 'LOG_ON AI Solution Agency' and lists required roles. It does not name a single person with a publication record in mechanistic interpretability, probing, or LLM steering. For a $884k grant evaluated by external interpretability researchers, this will be scored hard.

Three options, in order of strength:

Option

What it requires

Strength

Option A

Option A: Recruit a named interpretability collaborator from an established ML institution (MIT, CMU, Oxford, DeepMind). They serve as co-PI with publication record in probing or mechanistic interpretability. LOG_ON AI provides the deployment context; the collaborator provides the technical credibility. This is the most competitive configuration.

STRONGEST — directly addresses reviewer concern about technical capacity.

Option B

Option B: Name a specific postdoctoral researcher or senior ML engineer with 2+ interpretability papers who will join the team. Include their CV section in the application. The proposal should state their time commitment percentage explicitly.

STRONG if person has visible publications. Weaker if early-career without established record.

Option C

Option C: Submit as the African NLP + deployment lead, with an explicit statement that the interpretability methods will be executed in collaboration with (named lab or researcher) pending grant award. Request informational webinar (April 2 or April 28) to discuss technical expectations before submission.

MINIMUM VIABLE. Weakest on Team Expertise criterion but allows submission while collaboration is being arranged.

What Is Strong — Do Not Change

Not everything needs fixing. Four things in the proposal are genuinely competitive and should not be touched:

The English-backend translation layer as target

This is mechanistically grounded (Zhao 2023, Wendler 2024, Datta 2026). No other submitted proposal will have this specific architectural target. It is the clearest interpretability hook in the entire African AI + safety space. Keep it as the centrepiece.

D6 as the primary deception category

Capability self-misrepresentation is Schmidt’s own language (‘false claims regarding self-knowledge’). The model accepts Yoruba queries without flagging capability reduction. This is the cleanest fit in the proposal with Schmidt’s definition. It should be the first and dominant deception category in the proposal.

The unoccupied angle argument

No published paper probes internal representations for deception in African language contexts. Datta et al. confirmed the signal exists. The probe has not been built. This is genuine white space and it will read that way to Schmidt reviewers who know the African NLP literature.

The budget structure

$884k at 9.9% overhead, personnel at 79% is clean and defensible. The budget table is well-structured. The compute request via Schmidt resources is appropriate. Do not change the budget unless the team expertise gap requires adding a senior collaborator at higher cost.

Revision Checklist — Ordered by Priority Before May 26

#

Category

Required action

Priority

1

Out-of-scope fix

Reframe Track 3 entirely. Remove all language about 'human-AI team improvement.' Replace with: 'application of deception detection and steering — human decision outcomes as downstream validation of deception reduction.' Every outcome measure must be tied to a specific internal reasoning state.

CRITICAL

2

Team expertise

Identify and contact at least one named interpretability researcher to join as co-PI or named senior collaborator before submission. Attend April 2 or April 28 webinar to understand what Schmidt reviewers will expect from a technical team.

CRITICAL

3

Whitebox mechanistic argument

Add one paragraph to Technical Approach section explaining specifically why a probe at the language-identity shift layer sees what blackbox methods cannot: the discrepancy between the language the model reasons in and the language the user engages in. This is the core whitebox advantage argument.

8B0000

4

Deception definition alignment

Rewrite D1 framing from 'wrong facts' to 'false confidence about wrong facts.' Deprioritise or drop D4 unless specific mechanistic evidence can be added. Ensure D6 and D3 are the primary categories throughout.

HIGH

5

Threat model

Add one paragraph specifying the threat model: who is the adversary, what is the failure mode, what does successful deception look like in the African deployment context? Schmidt's monitoring section explicitly expects threat model specification.

HIGH

6

Negative results commitment

Add explicit commitment to reporting negative results for steering, per Schmidt's own stated interest. Specifically: 'If blackbox finetuning (PEFT/RLHF) consistently outperforms our interpretability-inspired steering on held-out African languages, we will document this as a primary finding.'

MEDIUM

7

Power analysis

For WP2 probe comparison, add a pre-registered power analysis specifying minimum detectable effect size for the ≥15% F1 outperformance claim. Shows statistical rigor to technical reviewers.

MEDIUM

8

Attend April webinars

Register for April 2 and April 28 informational webinars. These are an opportunity to ask Schmidt directly whether the African deployment framing is in scope and whether their compute resources can support cross-lingual probing experiments.

PRACTICAL

The core idea is competitive. The African deployment context as a cross-lingual deception stress test is the right angle for this grant. D6 capability self-misrepresentation is the strongest claim in the proposal and perfectly fits Schmidt’s definition. The English-backend translation layer is a mechanistically grounded target that no other team is likely to propose.

What the proposal currently lacks is not a better idea. It lacks the framing discipline required to stay clearly inside Schmidt’s scope, the mechanistic argument required to prove whitebox advantage, and the named team required to pass the expertise criterion.

All four critical issues are fixable within two months. None requires rebuilding the proposal. The hardest one — team expertise — requires an outreach call, not a conceptual rethink. Register for the April 2 webinar. Make the Track 3 reframe. Add the whitebox argument paragraph. Name a co-PI. Submit.

Audit based on:

Schmidt Sciences 2026 Interpretability RFP (full text, March 2026). — Schmidt Context Paper: African Deployment Context as Novel Lens for LLM Deception Research (Logo M., LOG_ON AI, March 2026). — Schmidt Draft Proposal: Detecting Deception Where It Hides (Logo M., March 2026). — Schmidt FAQ: AI Interpretability FAQ (linked in RFP). — All six Schmidt selection criteria applied directly against proposal content.
