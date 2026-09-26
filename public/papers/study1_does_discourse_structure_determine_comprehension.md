RESEARCH PROPOSAL · STUDY 1 OF 3

Does Discourse Structure Determine Comprehension?

A controlled empirical study of Yoruba cognitive architecture in AI explanation

March 2026  ·  Logo M.  ·  Research Programme: African Cognitive AI

Abstract

African language users consistently report that AI explanation feels technically correct but cognitively foreign. This paper proposes the first controlled empirical study to test whether that friction is measurable and whether it is caused by discourse structure mismatch — the gap between how AI assembles explanations and how Yoruba cognitive architecture builds understanding. We design a 2×2 experiment with 330 participants across Yoruba-dominant, English-dominant, and bilingual groups. We measure comprehension, 48-hour retention, cognitive effort, trust, and modification behaviour across discourse-aligned and standard AI explanation conditions. We pre-commit to three result interpretations before data collection begins. Whatever we find will be more useful than what the field currently has, which is no empirical data at all.

1.  The Claim

African language users understand explanations better when those explanations follow the cognitive architecture their language encodes. Not just feel more comfortable. Understand better — faster, more accurately, with higher retention, at lower cognitive cost.

That is the central claim of this research programme. It has never been empirically tested. The entire five-week essay series was built on the theoretical case for this claim. The EMNLP 2025 survey of 884 African NLP papers confirmed that human-centred comprehension research is an almost empty field — six papers at CHI in five years. The CG-CoT study (June 2025) confirmed from the engineering side that existing metrics cannot detect the kind of quality difference this claim predicts. Bergen’s simulation semantics provides the cognitive mechanism. Owomoyela and Ehineni’s scholarship documents the specific discourse architecture at issue.

What is missing is the data. This study produces it.

The question is not whether AI can speak Yoruba. It already can. The question is whether Yoruba speakers understand it better when it thinks in Yoruba. That question has never been answered.

2.  Why This Study Has Not Been Done

The honest answer is disciplinary separation. Running a comprehension study requires a cognitive scientist who knows how to design one. Getting the discourse conditions right requires a Yoruba linguist who knows the oral tradition well enough to construct authentic matched-pair explanations. Building the AI-generated content requires someone who understands how LLM output is shaped. Recruiting the right participants requires institutional access to Nigerian universities.

None of those people has been in the same room working on the same problem. The African NLP community has 884 papers and one area of almost complete silence: measuring what users actually experience when they read the output. The HCI community has methodology that directly applies here — Agarwal, Naaman and Vashistha used modification behaviour to measure cultural friction in GPT-4o outputs for Indian users at CHI 2025, finding that Indian users modified significantly more than American users — but has barely touched African language contexts.

This study closes that gap. It is not technically difficult. It requires coordination that has not happened, not capabilities that do not exist.

Agarwal et al. (CHI 2025) demonstrated that cultural architecture mismatch is measurable through modification behaviour. Indian participants modified GPT-4o suggestions significantly more than American participants, even when using the AI in English. The methodology transfers directly. No comparable study has been run for African language users.

3.  Theoretical Foundation

3.1  Simulation semantics and the proverb advantage

Bergen’s simulation semantics (2012, 2024) proposes that language understanding is not decoding. It is mental simulation. When you read ‘she kicked the ball,’ your visual and motor cortex activate as if experiencing the kick. Concrete, experiential language is easier to understand because there is more neural scaffolding available to simulate. Abstract language — definitions, statistics, recommendation lists — requires more construction work.

Proverbs that activate pre-existing communal simulations should, on this account, produce comprehension with lower cognitive effort than hypotheticals constructed from scratch. The listener does not build the scenario. They recognise it. The building is already done. Understanding arrives as recognition rather than construction.

Bergen’s theory is built entirely on WEIRD subjects. Jones, Trott and Bergen (Computational Linguistics, 2024) found that MLLMs cannot fully replicate human simulation behaviour on sensorimotor tasks. The theory’s cross-cultural scope has never been empirically tested. This study is the natural experiment Bergen’s theory has been waiting for.

3.2  Yoruba discourse architecture

A competent Yoruba explanation is not a definition followed by evidence. It is a story that creates the conditions for understanding, followed by a proverb that crystallises what the story opened. The proverb does not summarise. It points at a communal simulation the listener already carries — accumulated through years of hearing the oral tradition — and says: that is what this situation is like.

Ehineni (2016) documented this discourse structure systematically. The sequence has a name: it is not coincidence that Yoruba explanations follow this arc, any more than it is coincidence that English academic writing follows the IMRD structure. Both are cognitive architectures that speakers learn, internalise, and use to guide their understanding. The difference is that English academic structure has been extensively studied and is treated as the default in AI systems. Yoruba oral discourse structure has been extensively studied and has never been integrated into an AI system.

3.3  The friction hypothesis

When AI produces fluent Yoruba text in a non-Yoruba explanatory structure, the result is a specific kind of cognitive friction. The words are right. The rhythm is wrong. The sequence of moves is unfamiliar. The listener’s pattern-matching expects one thing and receives another — and the gap between expectation and delivery creates low-level resistance that manifests as: reduced confidence in the output, increased desire to verify, slower uptake, and the diffuse sense that the explanation was not quite right even when it was factually accurate.

This friction hypothesis is the theoretical claim this study is designed to test. If it is correct, discourse-aligned explanations will produce measurably better outcomes on every measure. If it is wrong — if comprehension is driven purely by content accuracy and not by discourse architecture — the study will tell us that, and the theory will need to be revised. Either outcome moves the field.

4.  Study Design

4.1  Participants and groups

330 total participants across three groups, recruited through the University of Ibadan, University of Lagos, and Lagos Business School alumni network. Groups are not self-selected — participants complete a validated language dominance assessment (L2 Subjective Vitality Questionnaire adapted for Yoruba-English context) before assignment.

Condition A: Discourse-Aligned

Condition B: Standard AI

Group 1: Yoruba-dominant speakers (n=80)

Story-first framing, community reference, contextually-selected proverb close. Yoruba cognitive architecture followed throughout.

Definition-first, evidence-cited, recommendation list. Standard AI output pattern in fluent Yoruba.

Group 2: English-dominant speakers (n=80)

Same discourse-aligned structure. Tests whether the advantage is universal or specific to Yoruba cognitive training.

Same standard pattern. This group serves as control: lower comprehension expected under discourse-aligned condition.

Group 3: Balanced bilinguals (n=90 split)

Cross-over design: same participants exposed to both conditions on different topics, 2-week washout.

Measures within-person discourse preference separate from between-group cultural effects.

4.2  Stimulus materials

Three topic domains with matched explanation pairs: medical (explaining a chronic condition management plan), financial (explaining compound interest on a savings account), agricultural (explaining a weather pattern’s impact on crop timing). Topics chosen because they are relevant to real SMME and daily decision-making contexts, carry real stakes, and are domains where trust in the explanation has practical consequences.

Each topic receives two matched explanations: Condition A follows Yoruba oral discourse structure (story-first, community-referenced, proverb-close); Condition B follows standard AI pattern (definition-first, evidence-cited, action-list close). Semantic content is identical across conditions. Only discourse structure varies. Matched-pair construction is validated by two independent Yoruba linguists who confirm discourse authenticity before data collection begins.

4.3  Outcome measures

#

Measure

What it captures

Timing

Weight

1

Immediate comprehension

Multiple-choice quiz on key claims from the explanation. 10 questions, scored blind by two independent raters. Primary outcome.

Quiz after reading

High

2

48-hour retention

Unannounced retest of the same questions, different order, two days later. Most important measure — hardest to fake, closest to real-world utility.

Retest at 48hrs

Highest

3

Cognitive effort

Self-reported effort (1–10 scale) plus reading time per segment. Eye-tracking used where available (University of Ibadan lab). Measures cost of comprehension, not just outcome.

During reading

High

4

Trust rating

How confident are you that this explanation is correct? Rated before and after source is revealed. Captures the ‘epistemically foreign’ effect even when content is accurate.

Post-reading

High

5

Modification behaviour

Following Agarwal et al. CHI 2025: participants asked to ‘make this explanation feel right to you.’ Degree of modification coded by linguist. Measures cognitive ownership of the explanation.

Post-reading task

Medium

The 48-hour retention measure is the most important. Immediate comprehension scores can reflect reading attention. Retention at 48 hours requires that the explanation was understood well enough to be consolidated into memory. It is harder to perform and harder to fake. If discourse alignment produces a retention advantage, that is a genuine cognitive efficiency signal.

5.  Pre-Committed Result Interpretations

We state our result interpretations before data collection begins. This is not a formality. It is an intellectual commitment. The claim this research programme has been making for the past year — that discourse structure determines comprehension quality, not just cultural comfort — is testable. We should know before we collect data what it would mean to find that it is wrong.

Result

Pattern

Implication

Result A
(Strong effect)

Yoruba-dominant speakers show significantly higher comprehension, retention, and lower cognitive effort under discourse-aligned condition. Trust and modification results consistent with comprehension.

Central claim supported empirically. Full mandate for Proverb Activation Library, discourse-native benchmarks, and African Understanding Layer architecture. Bergen’s simulation advantage confirmed for oral tradition contexts.

Result B
(Identity effect, not simulation effect)

Trust and modification behaviour improve significantly under discourse-aligned condition. Comprehension and retention show no significant difference. Pattern holds for Yoruba-dominant speakers but not bilinguals.

The effect is real but the mechanism is identity and trust, not cognitive efficiency. Reframe the architecture: discourse alignment reduces friction by signalling cultural competence, not by reducing simulation cost. Still mandates building the library, but changes how we argue for it.

Result C
(Null result)

No significant difference on any measure between conditions for any group. Modifications are cosmetic; trust ratings converge after source is revealed.

The theory is wrong or incomplete. The simulation advantage does not transfer from Bergen’s WEIRD lab subjects to Yoruba oral tradition contexts. Requires theoretical revision before building further. Still the most useful possible outcome — saves five years of building on an unvalidated premise.

Result B is the most interesting of the three. If the effect appears on trust and modification but not on comprehension and retention, it means the discourse architecture matters — but it matters because it signals community membership and cultural competence, not because it activates a more efficient simulation. That is a meaningful distinction with different architectural implications. The Proverb Activation Library is still worth building under Result B. But the argument for it changes: from ‘cognitively more efficient’ to ‘culturally more trustworthy,’ which is a different claim.

We are not hoping for any specific result. The field needs data. Any of the three results produces data the field does not currently have.

We are not hoping for any specific result. A null result is the most theoretically useful outcome we could get — it would tell us exactly where five years of subsequent work should not go.

6.  What the Field Gains From This Study

The EMNLP 2025 survey found six CHI-grade papers on African language NLP in five years. This study would roughly double the human-centred African NLP literature. That is not because the study is exceptional. It is because the field has almost nothing in this space, and almost nothing means one study matters disproportionately.

Beyond the African NLP literature, this study contributes to three fields simultaneously. For cognitive linguistics: it is the first cross-cultural test of Bergen’s simulation semantics with African oral tradition material. For HCI: it extends Agarwal et al.’s cultural friction methodology to sub-Saharan Africa. For AI ethics: it provides the first empirical measurement of what ‘epistemic foreignness’ actually costs users — not in subjective discomfort but in measurable comprehension outcomes.

None of those three fields has ever talked to the others about this problem. The study is the conversation starter.

7.  Resources, Collaborators, and Timeline

Institutional partners

University of Ibadan (IRB + participant recruitment). University of Lagos (additional recruitment + linguistics faculty). Lagos Business School (SMME-context professional participants). These institutions cover the geographic and socioeconomic range required for generalisable results.

Required collaborators

1 cognitive scientist with comprehension study design experience (ideal: someone who has published in CHI or Cognition). 1 Yoruba linguist with expertise in oral discourse and proverb traditions (to validate stimulus materials and code modification behaviours). 1 AI researcher to handle LLM output generation and condition blinding.

Budget estimate

Participant compensation (330 × 2 sessions): moderate. Linguist consultation fees: moderate. IRB filing and compliance: standard. Eye-tracking lab access (optional, enhances cognitive effort measure): University of Ibadan has existing lab. Total: achievable within a single African NLP grant round (NRF, Google Africa, AfricaNLP fund).

Timeline

Months 1–3: IRB submission, stimulus construction, linguist validation. Months 4–8: Data collection (phased, 3 waves). Months 9–12: Analysis, write-up. Months 13–15: Peer review and revision. Target submission: CHI 2027 or Cognition.

There is a line in the Week 4 essay that describes this study: ‘I believe the central claim is correct, and I cannot prove it.’ That honest admission — theory ahead of evidence — is where all good research starts. This proposal is the plan to close the gap between belief and proof.

The study is not large by the standards of cognitive science. It is large relative to what the African NLP field has done in the human-centred direction. It will be more useful than its size suggests, precisely because the space it is entering is so empty.

Whatever it finds, the field will be better for having looked.

Sources

Primary literature:

Bergen, B.K. (2012). Louder Than Words. Basic Books. — Jones, Trott & Bergen (2024). Do MLLMs and Humans Ground Language Similarly? Computational Linguistics, MIT Press. — Agarwal, N., Naaman, M. & Vashistha, A. (2025). AI Suggestions Homogenize Writing Toward Western Styles and Norms. CHI 2025. — Ehineni, T.O. (2016). Discourse-Structural Analysis of Yorùbá Proverbs. Colombian Applied Linguistics Journal. — Owomoyela, O. (2005). Yorùbá Proverbs. University of Nebraska Press. — Yankah, K. (1989). A theory of proverb praxis.

African NLP survey context:

Alabi, Hedderich, Adelani & Klakow (2025). Charting the Landscape of African NLP. EMNLP 2025. — Adelani, D. et al. (2024). AfroBench. arXiv:2311.07978. — Alhanai, T. et al. (2024). LLM Performance for Low-Resource African Languages. arXiv:2412.12417. — State of LLMs for African Languages (2025). arXiv:2506.02280. — CG-CoT (2025). arXiv:2506.01190. — ProverbEval (2025). NAACL 2025.

Theoretical framework:

Pelkey, J. (2023). Embodiment and Language. WIREs Cognitive Science. — Barsalou, L.W. (1999). Perceptual symbol systems. Behavioral and Brain Sciences. — Lewis, J.E. et al. (2024). Abundant Intelligences. Springer AI & Society. — Mhlambi, S. (2020). From Rationality to Relationality. Harvard Carr Center.
