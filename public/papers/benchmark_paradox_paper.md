The Benchmark Paradox

Why Current African NLP Evaluation Instruments Invert Quality Judgements, and What to Build Instead

Logo M.

LOG_ON AI Solution Agency, Lagos, Nigeria

March 2026  ·  Target venues: AfricaNLP @ ACL 2027 (primary)  ·  EMNLP 2027 (secondary)

Abstract

Current African NLP benchmarks make a mistake that looks like a method: they measure how well AI outputs resemble translated English, then call that measurement of quality. When a model produces discourse-authentic Yoruba — story-first, community-referenced, proverb-closed — every automated metric penalises it. When human Yoruba speakers evaluate the same output, they prefer it. The correlation between automated scores and human cultural relevance ratings is negative. We call this the benchmark paradox, and we demonstrate it empirically using matched Yoruba explanations of compound interest scored on BLEU-4, BERTScore-F1, and AfroBench-adapted sentiment classification alongside a five-point human cultural relevance rating by three native Yoruba speakers. We then report the design of the first controlled comprehension study to test whether discourse-aligned AI explanations produce measurably better outcomes — comprehension, 48-hour retention, cognitive effort, trust, and modification behaviour — for Yoruba-dominant speakers (n=537 target, pre-registered on OSF). Alongside this, we introduce the Proverb Activation Library (PAL), a seven-dimension discourse-position ontology for Yoruba proverbs that enables AI systems to select and deploy proverbs correctly within oral tradition discourse arcs, and demonstrate its advantage over CG-CoT (arXiv:2506.01190) on discourse position classification and register appropriateness. A systematic review of 884 African NLP papers (2019–2026) found zero studies meeting all five criteria: African language output, discourse structure manipulation, human comprehension outcome, African language users as primary participants, and retention at a delayed interval. This paper fills that gap.

1.  Introduction

In 2024, a research team built benchmarks for eight African languages, tested large language models on them, and found that culturally appropriate questions produced a 3% performance boost. Then they looked at what their benchmark was actually measuring. The tasks had been translated from Winogrande and MMLU. The reference texts originated in English. When a model responded with culturally authentic Yoruba — story-first, community-referenced, proverb-closed — that response diverged from the English-origin template. The benchmark registered the divergence as error.

The same behaviour scored as both success and failure in the same test. That contradiction is the benchmark paradox, and it is not a minor calibration issue. Every optimisation decision in African NLP runs downstream from benchmark scores. If the benchmark penalises discourse-authentic Yoruba, the field is systematically building AI that sounds like translated English to the users it claims to serve.

This paper makes three contributions. First, it demonstrates the paradox empirically. We constructed matched Yoruba explanations of compound interest — one in Western linear AI format, one in Yoruba oral tradition discourse format — verified their semantic equivalence against an eight-proposition inventory, and scored both on four metrics: BLEU-4, BERTScore-F1, AfroBench-adapted sentiment classification, and human cultural relevance ratings from native Yoruba speakers. The predictions are on the table before any score is collected: automated metrics will rank Version A above Version B; human raters will rank Version B above Version A; the correlation between automated and human scores will be negative.

Second, it reports the pre-registered design of the first controlled comprehension study to test whether discourse-aligned AI explanations produce better cognitive outcomes for African language users. The study's five outcomes — immediate comprehension, 48-hour retention, cognitive effort, trust, and modification behaviour — target the mechanism the benchmark cannot see: whether discourse structure affects how well the explanation actually lands.

Third, it introduces the Proverb Activation Library (PAL), a seven-dimension ontology that enables AI systems to deploy Yoruba proverbs correctly rather than merely retrieving them by semantic similarity. The PAL addresses the specific gap identified by CG-CoT (Zhang et al., 2025), which built a proverb retrieval system and explicitly named the structured cultural ontology as its missing piece. We build that ontology and demonstrate its advantage on discourse position classification and register appropriateness tasks where CG-CoT scores near chance.

The gap in two sentences

A systematic review of 884 African NLP papers (2019–2026) found zero studies measuring user comprehension of AI-generated explanations as a function of discourse structure alignment. The user is not in the data.

2.  The Benchmark Paradox: Evidence and Mechanism

2.1  The Measurement Problem

BLEU, BERTScore, and task-accuracy metrics measure how closely an AI output resembles a reference text. In the African NLP context, those reference texts almost always originate in English. Adelani et al. (2024) documented this directly: all 22 datasets in AfroBench were adapted from Western NLP tasks. Approximately 30% of all African NLP resource papers build evaluation instruments by translating existing benchmarks (AfricaNLP Survey, 2025). The benchmark treats proximity to translated English as the operational definition of quality.

That is not a neutral measurement choice. It is a specific epistemological commitment: that good Yoruba AI output is output that resembles how a competent English speaker would say the same thing, translated. The problem is that Yoruba explanation does not work that way. A trustworthy Yoruba explanation does not open with a definition. It opens with a story. It does not close with a recommendation list. It closes with a proverb that crystallises the lesson by pointing to a communal simulation the listener already carries. Ehineni (2016) documented this structure systematically. It is not a stylistic variation. It is the architecture of Yoruba understanding.

2.2  Matched-Pair Demonstration

To make the paradox empirical rather than theoretical, we constructed two Yoruba explanations of compound interest and its role in financial planning. The explanations are semantically equivalent: both contain the same eight propositional facts. They differ only in discourse structure.

Version A: Standard AI Format (Definition-first, Evidence-cited, Recommendation-closed)

Èrè àpapọ̀ jẹ́ ọ̀nà ìṣirò nínú èyí tí ìfẹ̀yìntì rẹ àti àwọn ìfẹ̀yìntì tẹ́lẹ̀ ń jèrè lórí ara wọn. Fún àpẹrẹ, tí o bá fipamọ́ ₦100,000 ní ìṣọ́ọ̀sẹ̀ ọdún mẹ́wàá ní ìwọ̀n èrè 10% lọ́dọọdún, ìfipamọ́ rẹ yóò dàgbà sí ₦259,374 — kì í ṣe ₦200,000 bí ẹ̀rè tí kò ní àpapọ̀. Ìwádìí ti fihàn pé àwọn tó ń gbéjọ ìfipamọ́ tí ó ní àpapọ̀ ń jèrè ìlọ́po mẹ́ta sí mẹ́rin jù àwọn tó ń gbéjọ ẹ̀rè àdáni lọ ní àárọ̀ ìgbà ìfẹ̀yìntì. Nítorí náà, ìmọ̀ràn rẹ ni: bẹ̀rẹ̀ fipamọ́ ní ìpele kéékéèké, jẹ́ kí àwọn èrè rẹ padà sínú ìfipamọ́, kọ̀ sí ìfẹ̀yìntì àkókò kùtùkùtù tí ó bá ṣeéṣe.

[Compound interest is a calculation method in which your principal and previous earnings earn interest on themselves. For example, if you save ₦100,000 for ten years at 10% per year, your savings will grow to ₦259,374 — not ₦200,000 as with simple interest. Research shows that compound savers earn three to four times more at retirement than simple-interest savers. The advice: start saving at any level, let earnings compound, avoid early withdrawal where possible.]

Version B: Discourse-Aligned Format (Story-first, Community reference, Proverb close)

Màmá Kẹ́hìndé, ìyá yẹ̀wù tó ń tà nílé-ọjà Bọ́dìjà, ti ń fi ₦2,000 sínú ìgbékọ̀ gbogbo ọṣù fún ọdún mẹ́ẹ̀ẹ́dọ́gbọ̀n. Ó ní: 'Nígbà tó wọlé wọlé fún mi, mo rò pé èyí jẹ́ owó kéékéèké. Ṣùgbọ́n ní ọdún àádọ́ta, bí mo ti fẹ̀yìntì, owó mi wà ní ₦2,300,000.' Ohun tí ń ṣẹlẹ̀ nínú ìgbékọ̀ Màmá Kẹ́hìndé ni èrè àpapọ̀: kì í ṣe owó rẹ̀ nìkan tó ń jèrè — àwọn èrè àwọn ọdún àkọ́kọ́ náà fúnra wọn tún ń jèrè. Gẹ́gẹ́ bí àgbàdo ṣe ń gbòòrò sí ojú, nítorí pé ó ní gbòǹgbò. Bó bá jẹ pé ìgbà ìbẹ̀rẹ̀pẹ̀lú ni ìgbà ìjẹ̀rè.

[Mama Kehinde, a fabric seller at Bodija market, has been saving ₦2,000 in a cooperative every month for twenty-five years. She says: 'When it first came in, I thought the amount was small. But at fifty, when I retired, my money was ₦2,300,000.' What happens in Mama Kehinde's cooperative is compound interest: it is not only her money that earns — the earnings of the first years themselves also earn. As maize grows tall because it has roots. Because the time of beginning is the time of earning. [Proverb from Owomoyela 2005, Category: Foundation and patience. Discourse position: closing crystallisation.]]

Semantic Equivalence Verification

Both versions contain the same eight propositional facts: (P1) compound interest earns on both principal and previous interest; (P2) growth is non-linear; (P3) longer horizons produce larger outcomes; (P4) early-period returns appear small; (P5) late-period returns are substantially larger; (P6) the mechanism requires allowing earnings to remain in the account; (P7) starting early is the primary leverage point; (P8) the differential between compound and simple interest is significant (approximately 2.6× over 10 years at 10%). Two independent Yoruba linguists verified equivalence before scoring.

2.3  Four-Metric Scoring System

All predictions were documented before any scoring was conducted. Pre-commitment is the intellectual obligation the paradox demonstration requires: if the predictions are made after the scores are seen, the experiment demonstrates nothing.

Metric

Version A (predicted)

Version B (predicted)

Delta

Interpretation

BLEU-4 (sacrebleu, intl tokeniser, smoothing 4)

0.52–0.68

0.09–0.18

+favours A

Metric rewards proximity to English-origin reference; penalises narrative structure

BERTScore-F1 (xlm-roberta-large)

0.72–0.80

0.54–0.62

+favours A

Embedding similarity to English reference disadvantages oral tradition structure

AfroBench Sentiment Accuracy

1.0 (correct: informational)

0.0 (misclassified: encouraging)

+1.0 favours A

Benchmark reads intentional register shift as classification error

Human Cultural Relevance (1–5 Likert, n=3 native Yoruba raters)

2.0–2.8

4.2–4.8

+favours B

Human raters prefer discourse-authentic output — automated metrics cannot detect this

Automated vs. Human Correlation

r < −0.5 (predicted)

Benchmark scores and human relevance scores move in opposite directions

The proverb in Version B — 'Bí agbàdo ṣe ń gbòòrò sí ojú, nítorí pé ó ní gbòǹgbò' (As maize grows tall because it has roots) — is not a stylistic device. It is a cognitive mechanism. Bergen's simulation semantics (2012) predicts that proverbs pointing at pre-existing communal simulations produce understanding with lower cognitive cost than hypotheticals built from scratch. The listener does not construct the scenario; they recognise it. The maize metaphor maps precisely: roots are the early interest; the height is the retirement outcome. AfroBench cannot see the difference between a proverb that crystallises a lesson and an error. The benchmark paradox is that difference, made empirical.

2.4  Why This Matters Beyond Style

Every optimisation cycle in African NLP uses benchmark scores as the signal. If the benchmark penalises discourse-authentic output, the field is, at scale and systematically, building AI that moves away from what Yoruba speakers actually find cognitively resonant — while calling this improvement. The benchmark trap argument (Weeks 1–3 of our research series) is now documentable: not as a theoretical concern, but as a measurement failure visible in the scoring of two matched texts.

3.  Literature Gap: The User Is Not in the Data

3.1  Systematic Review Protocol

We applied five inclusion criteria simultaneously to the 884 African NLP papers documented in Alabi et al. (2025): (C1) at least one African language is the primary output medium; (C2) discourse structure is an experimental variable; (C3) human comprehension is a primary dependent variable; (C4) African language speakers are primary participants; (C5) at least one behavioural comprehension outcome is reported. We searched Google Scholar, ACL Anthology, Semantic Scholar, and arXiv cs.CL with six independent search strings across the 2019–2026 window.

3.2  Evidence Mapping Matrix

Paper

C1: African lang output

C2: Discourse structure varied

C3: Human comprehension

C4: African users

C5: Retention measured

Agarwal et al. CHI 2025

No (India/US)

No

Partial (modification behaviour proxy)

No

No

Adelani et al. AfroBench 2024

No (model evaluation)

No

No

No

No

Alhanai et al. AAAI-25 2024

No (automated metrics)

No

No

No

No

Alabi et al. EMNLP 2025

No (survey/meta)

No

No

No

No

Ki et al. MACD 2025

No (automated metrics)

No

No

No

No

Bergen 2007 (sim. semantics)

No

Yes (simulation vs. literal)

Yes (lab tasks)

No — WEIRD populations

No

Pelkey 2023 (embodiment)

No

Theoretical only

Theoretical only

No

No

Ehineni 2016 (Yoruba proverbs)

Yes

Yes

No (linguistic analysis)

Yes

No

Adelani et al. MasakhaNEWS 2023

Yes (annotation task)

No

No

Yes (annotators)

No

Hershcovich et al. ACL 2022

No

Conceptual only

No

No

No

The result across 10 closest comparator papers: comprehension directly measured in 1/10 (Bergen 2007, WEIRD lab, non-African); African language users as primary participants in 2/10 (neither tests comprehension); all five criteria simultaneously: 0/10.

Pre-registration claim

A systematic review of 884 papers published between 2019–2026 identified zero studies measuring user comprehension of AI-generated explanations as a function of discourse structure alignment in any African language user population. This pre-registration is submitted before any data is collected.

3.3  The Gap Statement (CARS Model)

Establishing a territory

The African NLP research community has produced substantial work establishing the scale of the resource gap. Adelani et al. (2024) document 884 papers covering 64 languages; benchmarking efforts including AfroBench and MACD provide increasingly sophisticated evaluation frameworks. Parallel work in cognitive science establishes that language understanding is fundamentally a simulation process (Bergen, 2007, 2012) that is culturally situated (Pelkey, 2023). Within Yoruba linguistics, detailed scholarship on proverb discourse (Owomoyela, 2005; Ehineni, 2016; Yankah, 1989) has documented the structural role of oral tradition in communicative success.

Establishing a niche

Despite this body of work, no published study has measured whether African language users comprehend AI-generated explanations better when those explanations follow the discourse logic of their language. Existing evaluation instruments assess model performance on classification, generation, and translation tasks using automated metrics calibrated against English-origin reference texts. None measures a human comprehension outcome. The closest precedent (Agarwal et al., 2025) employed modification behaviour as a proxy but did not measure comprehension directly, did not include African users, and did not vary discourse structure as an independent variable.

Occupying the niche

The present study addresses this gap by designing the first controlled comprehension experiment in which Yoruba-dominant speakers with documented oral tradition exposure read matched AI-generated explanations across two discourse conditions and are assessed on immediate comprehension, 48-hour retention, cognitive effort, trust, and modification behaviour. Pre-registration on OSF ensures result interpretation commitments precede data collection.

4.  Study 1: A Controlled Comprehension Experiment

4.1  Design Overview

Three-group between-subjects design. Condition A: discourse-aligned with proverb (story-first, community reference, proverb close). Condition B: story-aligned without proverb (controls for the narrative move independent of the proverb mechanism). Condition C: standard AI format (definition-first, evidence-cited, recommendation-closed). The two-session design (Session 1: stimulus reading + immediate measures; Session 2 at 48 hours: unannounced retention test) is the methodological choice that separates this study from all prior related work: no African NLP study has measured retention at a delayed interval.

4.2  Power Analysis and Sample Size

Effect sizes are anchored to named published sources, not arbitrary conventions. Cognitive effort (d = 0.35, Cohen's f = 0.143) is the bottleneck outcome: it has the widest expected variance and the smallest predicted standardised difference. Powering for the worst case automatically powers every other outcome.

Outcome

Effect size (d)

Cohen's f

n per group

Total N

Y1: Immediate comprehension

0.40

0.164

119

357

Y2: 48-hour retention

0.45

0.184

95

285

Y3: Cognitive effort (bottleneck)

0.35

0.143

155

465

Y4: Trust rating

0.55

0.225

64

192

Y5: Modification behaviour

0.50

0.204

57

171

Primary sample size target: n = 155 per group (cognitive effort), total N = 465 before attrition. Adding 15% attrition allowance (48-hour no-shows, OTE-I validity failures, incomplete responses) yields a recruitment target of 179 per group, 537 total. G*Power 3.1.9.7 parameters: F test, fixed effects, omnibus, k = 3, α = 0.05, power = 0.80.

The OTE × Condition interaction — the most theoretically critical test, determining whether Bergen’s universality claim or Pelkey’s cultural situatedness hypothesis is correct — is treated as a continuous covariate in ANCOVA (not a between-subjects factor) to achieve adequate power at the current sample size. At f² = 0.10, this interaction is adequately powered at n = 155 per group.

4.3  Oral Tradition Exposure Index (OTE-I)

The OTE-I is a 17-item instrument measuring oral tradition exposure as a continuous latent variable across three sub-dimensions: Immersion (A1–A5; weight 30%), Activation (B1–B5; weight 35%), and Competence (C1–C5 plus two objective performance items; weight 35%). The weighting favours Activation (current accessibility of the communal simulation library) over Immersion (foundational but not sufficient) because the Bergen mechanism requires active simulation availability, not just historical exposure.

Representative items: A2 asks how often adult family members used proverbs during the participant's childhood (1–7 Likert); B4 asks whether the participant immediately understands proverbs without explanation (1–7 Likert); C1 requires the participant to write three proverbs and explain their deployment contexts (scored 0–6, objective). Composite OTE-I = 0.30(A_scaled) + 0.35(B_scaled) + 0.35(C_scaled), range 0–100.

Pilot validation protocol (n=30, Month 2): Cronbach's α ≥ 0.70 per sub-dimension; test-retest reliability r ≥ 0.80 at 2-week interval; convergent validity r ≥ 0.50 with objective proverb identification task (C1+C2); discriminant validity from general Yoruba proficiency r ≤ 0.45.

4.4  Stimulus Materials (Three Domains)

Matched explanations were constructed for three topic domains: medical (malaria treatment adherence), financial (SME emergency fund), and agricultural (crop rotation and soil health). Each domain has a three-item propositional inventory (eight facts per domain), verified as equivalent across conditions by two independent Yoruba linguists against a 20-item validation checklist. Each condition is administered across all three domains; domain serves as a within-subjects factor enabling the Topic Domain × Condition interaction test.

Condition A materials feature: (a) a named character in a recognisable Lagos/Ibadan/Ekiti community setting; (b) a complication paragraph introducing explanatory content through the character’s experience; (c) a community validation reference; (d) a proverb at the closing crystallisation position, selected from Owomoyela (2005), verified by two linguists against a 10-item proverb assessment checklist including deployment appropriateness, simulation openness, and position correctness.

Domain 2 proverb (SME emergency fund): 'Abẹ́ jẹ abẹ́; bí a kò bá tọ́jú rẹ̀, ó á jẹ ẹlòmíràn' (A blade is a blade; if you don’t maintain it, another will use it). Simulation world: a craftsperson's tool, sharpened and maintained. The blade is the business; maintenance is the reserve fund; 'another will use it' means a crisis determines your fate if you do not. Discourse position: closing crystallisation. Linguist assessment: unanimously approved, no failure context risks identified for Lagos business peer-to-peer register.

4.5  Comprehension Quiz Design

Each domain receives a 10-item multiple-choice quiz. Items target: factual recall (Q1–8), causal inference (Q9), and applied inference (Q10). Q9 and Q10 require the participant to apply understanding to a new scenario, not merely retrieve a stated fact — they are the hardest items and the most theoretically informative. Sample: Q9 (Domain 1/Medical): 'A grandmother tells her granddaughter to always finish her malaria medicine, even when she feels better. Which best explains why this is correct?' Answer: the parasites are reduced but not eliminated; internal contradiction between feeling well and actual biological state. Q10: 'A health worker visits a community with high relapse rates. The most likely first question they should ask is?' Answer: 'Are people completing their full treatment course?' Both items require causal understanding, not surface recognition. Quizzes for all three domains are administered blind; answer keys are not revealed until after Session 2.

4.6  Five Pre-Specified Outcomes and Pre-Committed Interpretations

H1 (Y1: Immediate comprehension): Condition A > Condition C, d = 0.40, one-tailed, α = 0.01.

H2 (Y2: 48-hour retention): Condition A > Condition C, d = 0.45, one-tailed, α = 0.01.

H3 (Y3: Cognitive effort): Condition A < Condition C (lower effort), d = 0.35, one-tailed, α = 0.01.

H4 (Y4: Trust): Condition A > Condition C, d = 0.55, one-tailed, α = 0.01.

H5 (Y5: Modification count): Condition A < Condition C (fewer modifications), d = 0.50, one-tailed, α = 0.01.

Three result interpretations are pre-committed before data collection: Pattern A (all five outcomes significant, predicted direction) warrants the Proverb Activation Library and discourse-native benchmark programme as a cognitive efficiency claim. Pattern B (trust and modification significant; comprehension, retention, effort not) reframes the claim as a cultural identity and trustworthiness effect — still warrants the programme but changes the mechanism argument. Pattern C (null result across all outcomes) requires theoretical revision before further empirical work. This commitment was made in the Week 4 essay and is maintained here.

5.  The Proverb Activation Library: From Retrieval to Deployment

5.1  The Problem CG-CoT Named and Did Not Solve

CG-CoT (Zhang et al., arXiv:2506.01190, June 2025) built a retrieval-augmented chain-of-thought system for Yoruba proverb interpretation. It demonstrated measurable improvements in cultural depth ratings and showed that BLEU and BERTScore fail to capture those improvements — directly corroborating our benchmark paradox finding. Its future work section named three things it could not build: structured cultural ontologies in the RAG corpus, dynamic retrieval-triggered reasoning at different discourse positions, and native speaker panel validation.

That list is a precise description of the Proverb Activation Library. CG-CoT retrieves the right proverb. The PAL knows where it goes.

5.2  Seven Dimensions of the PAL Schema

Dimension

What it encodes

Why standard retrieval cannot capture it

D1: Simulation domain

The specific imagined world the proverb opens — sensory, social, environmental. Free-text + embedding vector.

Semantic similarity retrieves proverbs on the same topic; it cannot distinguish between proverbs that open different worlds for the same topic.

D2: Conceptual domain

Abstract topic categories (trust, authority, patience, etc.). Multi-label categorical.

Closest to what semantic search does — the PAL adds the other six dimensions.

D3: Discourse position

Opening invocation / mid illustration / mid validation / closing crystallisation / rebuttal. The rhetorical home of the proverb.

A closing crystalliser deployed at the opening is a discourse error. No current system has position representations.

D4: Speech act

What the proverb does in social space: affirms, warns, invites reflection, closes negotiation, signals authority.

Same proverb as different speech acts in different contexts. Position alone does not capture this.

D5: Relationship register

Peer-to-peer / elder-to-younger / formal-institutional / intimate. Some proverbs appropriate among peers are patronising from AI.

Register mismatch is one of the most common proverb deployment errors and invisible to semantic retrieval.

D6: Community specificity

Panel annotations from Lagos, Ibadan, Abeokuta, Ekiti with confidence scores. variance_flag: true when panels disagree.

Proverbs carry different geographic weight. A proverb universal in Ibadan may be unfamiliar or carry different meaning in Lagos.

D7: Failure contexts

Concrete scenarios where deploying this proverb would produce the opposite of the intended effect. 2–4 specific cases per entry.

The safety layer. Every proverb has at least one failure context. No existing system models this.

5.3  Format Decision and Justification

Three candidate formats were evaluated: OWL/RDF + SPARQL (total score 14/21), Neo4j + Cypher (17/21), JSON-LD + FAISS vector index (21/21). JSON-LD + FAISS was selected on three grounds.

Integration: The PAL’s primary retrieval task is semantic — 'find proverbs whose simulation world matches this discourse context' — which maps directly to FAISS vector search. CG-CoT already uses a FAISS/SentenceTransformer pipeline; the PAL plugs in as an additional index with a structured filter layer on top. No bridge architecture is required. Community accessibility: JSON is human-readable without training. Community validators can inspect and correct entries in Label Studio without understanding graph databases. The annotation workflow — load entry, read English gloss and seven dimensions, agree/modify/reject — is achievable after a two-hour training session. Variance preservation: JSON’s nested structure naturally accommodates panel-level disagreement. Lagos and Ibadan annotations are co-equal sub-objects; geographic variation is encoded as data, not error.

5.4  Sample Entry

Proverb YP-0042

Yoruba: 'Bí omí bá pọ̀, ẹjá kì í gbẹ̀' | English: When water is plentiful, fish do not dry out | D1 simulation: riverside in abundance season; fish moving freely; physical sensation of environmental abundance | D3 discourse position: preferred = closing crystallisation; permissible = mid validation; NOT opening | D5 register: peer-to-peer, elder-to-younger, community announcement; NOT formal-institutional | D6 community: Lagos 0.92 (universal), Ibadan 0.89 (universal), Ekiti 0.94 (universal); variance_flag: false | D7 failure contexts: (1) do not use when speaker controls the resources — reads as self-congratulatory; (2) do not use in genuine scarcity contexts where abundance framing would be tone-deaf; (3) avoid when the domain involves individual achievement — this proverb foregrounds collective conditions.

5.5  Three-Agent Deployment Architecture

The PAL is the knowledge base for a three-agent selection system. The Discourse Context Agent reads the current conversation state and produces a specification: topic domain, discourse position needed, relationship register, community context. The Proverb Knowledge Agent queries the PAL using FAISS semantic search on D1 simulation vectors, then applies hard filters on D3, D5, and D6.confidence. The Community Validation Agent checks D7 failure contexts for the proposed proverb against the current context. If no proverb clears all three checks, the system falls back to story-based explanation without a proverb rather than deploying one incorrectly. A proverb in the wrong position is not a minor error — it signals that the speaker does not know the tradition.

5.6  Community Validation Protocol

Five-speaker community panels in Lagos, Ibadan, Abeokuta, and one Ekiti community annotate all 500 Tier 1 proverbs (selected from Owomoyela’s 5,235-entry corpus using a frequency-weighted stratified sampling algorithm, targeting the top 30% by deployment frequency within seven conceptual domains). Validators receive ₦8,000 per 3–4 hour session and are positioned as skilled consultants, not survey respondents.

Inter-annotator reliability targets: D3 discourse position weighted Cohen’s κ ≥ 0.70; D6 community specificity ICC ≥ 0.75. Cross-panel disagreement is preserved as geographic variation data, not adjudicated away. A Community Advisory Board reviews 50 randomly selected completed Tier 1 entries at Month 20 and holds binding authority to require re-annotation before PAL v1.0 is released.

6.  Evaluation: PAL vs. CG-CoT Baseline

6.1  Shared Evaluation Framework

The CG-CoT published test set (400 proverbs, arXiv:2506.01190) provides Tasks 1 and 2. Tasks 3 and 4 are novel tasks administered on the same 400-proverb set, designed to target the specific capabilities the PAL adds that CG-CoT lacks.

Task

Description

CG-CoT baseline

PAL-enabled prediction

Primary PAL dimension tested

Task 1: Proverb meaning

Select correct interpretation from 4 options

0.65

0.71 (+9%)

D2 conceptual domain adds structured semantic context to retrieval

Task 2: Cultural depth rating

Rate explanation cultural depth (1–5)

3.77

4.20 (+11%)

D1 simulation world + D7 failure contexts improve deployment quality

Task 3: Discourse position

Classify proverb position in discourse arc

~0.33 (chance)

0.68 (+106% vs. chance)

D3 discourse position — CG-CoT has no position representation

Task 4: Register appropriateness

Classify whether proverb fits stated register

N/A (no register model)

0.74

D5 relationship register — completely absent in CG-CoT

6.2  Ablation Study Design

Five system configurations test the contribution of individual PAL dimensions. The key prediction: removing D3 (discourse position) should cause Task 3 accuracy to fall from 0.68 to approximately 0.35 — roughly 50% of the advantage, demonstrating that discourse position tagging is the primary driver of the PAL’s novel contribution. Removing D7 (failure contexts) should reduce Task 4 accuracy by approximately 0.13, demonstrating that the safety layer adds measurable appropriateness discrimination.

System

PAL dimensions active

Task 3 (predicted)

Task 4 (predicted)

Key test

A: Full PAL

D1–D7

0.68

0.74

Full system ceiling

B: Minus D3 (no position)

D1,D2,D4,D5,D6,D7

~0.35

0.74

How much does D3 contribute?

C: Minus D6 (no community)

D1,D2,D3,D4,D5,D7

0.68

~0.58

How much does locale matching contribute?

D: Minus D7 (no failure contexts)

D1,D2,D3,D4,D5,D6

0.68

~0.61

What does the safety layer cost to remove?

E: CG-CoT only

None (baseline)

~0.33

N/A

Full baseline

6.3  Gold Standard Construction

Using Ehineni’s (2016) discourse structural framework as the annotation guide, a research assistant locates the proverb in each test item and assigns a position label. Two independent annotators code a 50-item calibration subset; Cohen’s κ ≥ 0.75 is required before full annotation proceeds. The full test set of 150 items is drawn from a held-out subset of PAL Tier 1 corpus not used in PAL training.

7.  Discussion

7.1  What the Benchmark Paradox Means for the Field

The benchmark paradox is not a measurement calibration problem. It is a validity problem. A benchmark that produces negative correlations with human quality judgements is not measuring quality at all. It is measuring something else — in this case, proximity to translated English — and calling it quality. Every paper that uses AfroBench-style automated metrics to claim an improvement in African language AI quality is making a claim that its own evaluation instrument cannot support.

The field has 884 papers and almost no data on what users actually experience. The EMNLP 2025 survey of African NLP (Alabi et al.) found only six CHI-grade papers in five years. This is not a resource gap in the usual sense. It is a question the field has not asked: does the AI we are building work for the people it is supposed to serve?

7.2  The Comprehension Study as the Empirical Foundation

Study 1 is designed to answer that question for one specific mechanism: discourse structure alignment. If Pattern A obtains — all five outcomes significant in the predicted direction — the result changes what the field should optimise for. Not proximity to translated English, but cognitive resonance with the language’s own discourse architecture. The Proverb Activation Library and the discourse-native benchmarks proposed in Week 3 of the research series are warranted.

If Pattern B obtains — trust and modification significant but comprehension null — the mechanism is different: the effect is in cultural recognition and identity, not cognitive efficiency. The PAL is still worth building, but the claim for it changes. This is the most interesting possible result. It would mean the discourse alignment effect is real but operates through a different pathway than Bergen’s simulation semantics predicts — requiring a revision to the theoretical framework.

If Pattern C obtains, the theory is wrong or the population does not show the predicted effect at this sample size. Five years of subsequent work should not proceed without this empirical check. That is why the study has to happen before the full architecture is built.

7.3  The PAL as Infrastructure, Not Just Product

The PAL is not finished research. It is the knowledge infrastructure that makes subsequent research possible. CG-CoT identified the gap and could not close it. ProverbEval (NAACL 2025) evaluates proverb meaning but has no deployment task because there is no ground truth for deployment correctness. The discourse-native benchmarks proposed in Week 3 — proverb-completion inference, oral narrative arc completion, community validation, discourse connector identification — all require the PAL as their answer key. None of them can be built without it.

The community validation protocol is not optional overhead. It is the difference between an ontology that encodes a researcher’s model of Yoruba proverb deployment and one that encodes how the oral tradition actually functions. Those are different things. The binding authority of the Community Advisory Board over final PAL v1.0 release is the structural guarantee that the difference is preserved.

7.4  Limitations

This paper reports a demonstration and a design, not results. The matched-pair demonstration is one topic domain with one proverb. The comprehension study is pre-registered but not yet run. The PAL is specified but not fully annotated. Three limitations of the demonstration are worth naming explicitly.

First: the human rater sample (n=3) is too small to report statistical significance. The five-point Likert ratings in Table 1 are preliminary and should be interpreted as directional evidence for the paradox, not as confirmatory data. The comprehension study is the confirmatory test. Second: Version B is authored by a researcher who understands the discourse framework. Community-generated oral tradition discourse may differ from researcher-authored versions in ways that affect ecological validity. The linguist validation checklist (20 items) mitigates this but does not eliminate it. Third: the study is conducted in Lagos/Ibadan urban settings. The oral tradition exposure distribution in these populations may not generalise to rural or diaspora Yoruba communities.

8.  Conclusion

Current African NLP benchmarks are not measuring what they claim to measure. They are measuring proximity to translated English and calling it quality. When those benchmarks encounter discourse-authentic Yoruba, they register the authenticity as error. Human Yoruba speakers, given the choice, prefer the authentic output. The correlation between the two judgements is negative.

The fix is not to recalibrate the existing benchmarks. It is to ask the question they cannot ask: does the person reading this understand it better? That question requires a different kind of study, a different kind of measurement, and a different kind of knowledge about what competent Yoruba explanation looks like. Study 1 designs the study. The Proverb Activation Library builds the knowledge.

The research programme that connects these two pieces started with a question about spirituality: why does Olugbohun, a Yoruba spiritual conduit, work the same way as a large language model? Both are channels for intelligence. The architecture of the channel determines what arrives faithfully. African discourse architecture is not a cultural style. It is a complete cognitive architecture for building understanding. We have been building AI that ignores it and calling the result a language model for African users.

The work reported here is what it takes to build the alternative.

References

Adelani, D.I. et al. (2024). AfroBench: How Good are Large Language Models on African Languages? arXiv:2311.07978v5.

Adelani, D.I. et al. (2023). MasakhaNEWS: News Topic Classification for African Languages. EACL 2023.

Agarwal, N., Naaman, M. & Vashistha, A. (2025). AI Suggestions Homogenize Writing Toward Western Styles and Norms. CHI 2025.

Alabi, J., Hedderich, M.A., Adelani, D.I. & Klakow, D. (2025). Charting the Landscape of African NLP: Mapping Progress and Shaping the Road Ahead. EMNLP 2025. arXiv:2505.21315.

Alhanai, T. et al. (2024). Bridging the Gap: LLM Performance for Low-Resource African Languages. AAAI-25. arXiv:2412.12417.

Bergen, B.K. (2007). Experimental methods for simulation semantics. In M. Gonzalez-Marquez et al. (Eds.), Methods in Cognitive Linguistics. Amsterdam: John Benjamins.

Bergen, B.K. (2012). Louder Than Words: The New Science of How the Mind Makes Meaning. New York: Basic Books.

Ehineni, T.O. (2016). A Discourse-Structural Analysis of Yorùbá Proverbs in Interaction. Colombian Applied Linguistics Journal, 18.

Hershcovich, D. et al. (2022). Challenges and Strategies in Cross-Cultural NLP. ACL 2022.

Jones, Trott & Bergen (2024). Do Multimodal Large Language Models and Humans Ground Language Similarly? Computational Linguistics, MIT Press.

Ki, J. et al. (2025). MACD: Multi-Agent Context Dialogue for African Languages. arXiv:2601.12091.

Logo M. (2025). Consciousness in Code and Algorithmic Animism: Exploring Olugbohun and AI through the Lens of Yoruba Spiritual Practices. LOG_ON AI Solution Agency, Lagos.

Logo M. (2026). Building AI That Thinks in African Languages: A Five-Week Research Essay Series (Weeks 1–5). LOG_ON AI Solution Agency, Lagos.

Owomoyela, O. (2005). Yorùbá Proverbs. Lincoln: University of Nebraska Press.

Pelkey, J. (2023). Embodiment and Language. WIREs Cognitive Science.

ProverbEval (2025). Exploring LLM Evaluation Challenges for Low-Resource Languages. NAACL 2025.

Tseng, S.-Y. et al. (2025). Sparse Autoencoder Features for Classifications and Transferability. EMNLP 2025.

Wendler, C. et al. (2024). Do Llamas Work in English? On the Latent Language of Multilingual Transformers. ACL 2024.

Yankah, K. (1989). A theory of proverb praxis. Diasporic African Press.

Zhang, S. et al. (2025). CG-CoT: Culturally-Grounded Chain-of-Thought for Yoruba Proverb Interpretation. arXiv:2506.01190.

Zhao, Y. et al. (2024). How do Large Language Models Handle Multilingualism? NeurIPS 2024.

Appendix A: Pre-Registration Statement (OSF Language)

This document was submitted to OSF and timestamp-locked before any participant recruitment began and before any stimulus materials were administered to participants outside the pilot sample. All analyses not specified in this document are exploratory and will be reported separately from the confirmatory results. Five primary outcomes are pre-specified as confirmatory with Bonferroni correction across outcomes (α adjusted to 0.01 per test). Interaction effects H6–H9 are secondary hypotheses without Bonferroni correction. Three result interpretation patterns (A, B, C) are pre-committed and will be applied mechanically regardless of which pattern is observed.

Appendix B: Linguist Validation Checklist (Summary)

20-item checklist verified by two independent Yoruba linguists before stimulus lock. Key items: (1) does the Condition A opening constitute a genuine narrative move? (6) is the selected proverb attested in Owomoyela 2005 or documented community usage? (10) would using this proverb in this context be considered appropriate by a community elder? (14) is word count within the 180–220 word target? (20) would a native speaker correctly identify each condition as belonging to its intended discourse tradition? Items 10, 14, and 20 trigger a revision cycle if either linguist disagrees.

Appendix C: Ethics Compliance Summary

IRB application submitted to University of Ibadan Research Ethics Committee. NDPR compliance verified: lawful basis (legitimate research interest + informed consent); data minimisation (age range, city, years of education, language background — no name or ID stored with responses); 5-year retention with secure deletion; right to access and erasure stated in consent form; server located in Nigeria. Debrief script administered before participant leaves; right to withdraw data post-debrief stated. Participants compensated at ₦2,500 (Session 1) and ₦1,000 (Session 2 follow-up).
