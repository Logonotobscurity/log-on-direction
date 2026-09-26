RESEARCH INSPIRATION AUDIT  ·  4-PATHWAY ANALYSIS

Research Ideas & Proposals

African Cognitive AI · Future Work Mining · Conflict Detection · Methodology Pivots · Cross-Field Synthesis

24 papers analysed across 5 live research streams  ·  21 ideas generated  ·  Logo M.  ·  March 2026

This document applies the Research Inspiration Agent methodology — extensive reading, future work mining, conflict identification, methodology pivots, cross-field synthesis — to the African Cognitive AI research programme originating with the Olugbohun paper and the five-week essay series.

Literature Snapshot — 24 Papers, 5 Streams

Stream

Key Papers & Findings

Signal for Research

African NLP landscape

Alabi et al. EMNLP 2025 (884 papers, 5 years). Human-centered NLP scarce — only 6 CHI papers on African languages. Charting survey explicitly calls for HCI + comprehension research as open frontier.

Human comprehension = unmapped territory

Proverb & oral tradition AI

CG-CoT (arXiv 2506.01190, June 2025): Yoruba proverb interpretation via RAG + chain-of-thought. BLEU/BERTScore cannot detect cultural relevance improvements. ProverbEval (NAACL 2025): 3-task benchmark — only tests meaning, not deployment context.

CG-CoT future work: structured cultural ontologies needed

Cultural LLM alignment

Investigating Cultural Alignment of LLMs (ACL 2024). CulturePark multi-agent cultural data generation. Cross-Cultural Implications of LLMs (Springer 2025, HCII). Cultural math grounding (arXiv 2507.00883).

Culture adaptation improves task performance — quantified

Simulation semantics + LLMs

Bergen et al. 2024 (Computational Linguistics): MLLMs tested for embodied simulation. Finding: MLLMs cannot fully account for human behavior on sensorimotor features. LLMs pass linguistic tests but fail simulation depth.

Bergen’s theory untested for African oral simulation

Narrative & discourse AI

Narrative Theory-Driven LLM Methods (arXiv 2602.15851): multi-agent story systems, histoire vs. discourse levels. Story retelling used to assess cognition in clinical settings. NLP relies on linguistics (ACL 2025).

Oral narrative arc = unbuilt benchmark task

Idea Matrix — 21 Ideas Ranked (0.30×N + 0.20×F + 0.50×I)

#

Idea Title

Type

N

F

I

Overall

#1

Controlled user comprehension study: Yoruba discourse-native vs. standard AI

future_work

9.0

8.0

9.5

9.2/10

#2

Discourse position ontology for Yoruba proverb deployment

cross_field

9.5

7.5

9.0

9.0/10

#3

CG-CoT + discourse structure: beyond retrieval to deployment logic

conflict

8.5

8.0

9.0

8.8/10

#4

Bergen simulation test: African proverb vs. Western hypothetical

conflict

9.5

7.5

8.5

8.8/10

#5

Human-centered African NLP: first CHI-grade study for Yoruba

future_work

9.0

8.0

9.0

9.0/10

#6

Oral narrative arc completion benchmark (Yoruba/Igbo)

future_work

8.5

7.5

9.0

8.8/10

#7

Cultural math grounding → discourse explanation grounding pivot

pivot

8.0

8.5

8.5

8.3/10

#8

ProverbEval extension: deployment task (not just meaning task)

future_work

8.0

8.0

8.5

8.3/10

#9

Native speaker modification study (Agarwal methodology for Yoruba)

future_work

8.5

8.5

8.0

8.3/10

#10

Multi-agent Ifa: babalawo-corpus-community as LangChain architecture

cross_field

9.5

5.5

8.5

8.2/10

#11

Ubuntu alignment layer for multi-agent SMME systems

cross_field

9.0

7.0

8.5

8.3/10

#12

CulturePark methodology → African oral tradition dataset generation

pivot

8.0

8.0

8.0

8.0/10

#13

Cognitive effort measurement in African-language AI explanations

future_work

8.0

7.5

8.0

7.9/10

#14

Head-tail discourse connector benchmark (Yoruba/Igbo linking logic)

future_work

8.5

7.0

7.5

7.8/10

#15

Y-NQ extension: add discourse-quality annotations to Yoruba QA

pivot

7.5

8.5

7.5

7.7/10

#16

MLLMs and sensorimotor simulation: African embodied language test

conflict

8.5

6.0

8.0

7.8/10

#17

Narrative theory-LLM: oral histoire-discourse system for Yoruba

cross_field

8.0

6.5

8.0

7.7/10

#18

ProverbEval: community validation panel as benchmark judge

future_work

7.5

8.0

7.5

7.6/10

#19

Code-switching discourse: Yoruba-English hybrid explanation patterns

future_work

7.0

8.0

7.5

7.4/10

#20

SMME agentic AI: discourse-native agent explanation interface

cross_field

7.5

7.5

7.5

7.5/10

#21

Tokenization + discourse: morphological tokenizer for Yoruba oral register

pivot

7.0

7.5

7.0

7.1/10

Pathway A — Future Work Mining: What Papers Are Asking For

The single most striking future work signal in the live literature comes from CG-CoT (arXiv 2506.01190, June 2025), which explicitly states three directions the field has not yet pursued:

Future work includes scaling CG-CoT to additional low-resource languages, experimenting with dynamic retrieval-triggered reasoning, integrating structured cultural ontologies into the RAG corpus, and validating outputs with native speaker panels.

CG-CoT: Culturally-Grounded Chain-of-Thought, arXiv:2506.01190, June 2025

This is a direct invitation. The paper builds a Yoruba proverb interpretation system using RAG and chain-of-thought, then explicitly names the thing it could not build: a structured cultural ontology. That ontology — the Proverb Activation Library — is what the five-week series proposed. The CG-CoT paper independently arrived at the same architectural gap from the engineering side, while the series arrived at it from the linguistics side. That convergence is the strongest validation in the literature for making this the first priority.

The second future work signal comes from the Alabi et al. EMNLP 2025 survey of 884 African NLP papers:

Human-centric research in NLP has gained prominence, but such work remains scarce in African NLP — only six relevant papers have been presented at CHI and its African counterpart AfriCHI. This is an open and urgent frontier.

Alabi, Hedderich, Adelani & Klakow, EMNLP 2025 — Charting the Landscape of African NLP

Six papers at CHI in five years, across the entire continent. The user comprehension study proposed in Week 4 of the essay series is not a niche contribution. It would roughly double the African NLP literature on human-centered outcomes. This is not a crowded space. It is an almost completely empty one.

ProverbEval (NAACL 2025) surfaces a third future work signal: it evaluates LLMs on proverb meaning tasks but explicitly does not evaluate deployment context, discourse position, or community-appropriateness. Its own task design names the gap. An extension that adds deployment tasks — given this discourse context, which proverb, and where in the arc? — is a natural next paper that does not require building a new corpus from scratch.

Top Ideas from Future Work Mining

#1  Controlled User Comprehension Study

N: 9.0

F: 8.0

I: 9.5

▲ 9.15

[ FUTURE WORK ]

Motivation: The Alabi et al. survey found only 6 CHI-grade papers on African language NLP in five years. This is the most glaring gap in the entire field. No study has measured whether African language users understand AI explanations better when those explanations follow their language's cognitive architecture.

Approach: 2×2 controlled experiment: Yoruba-dominant vs English-dominant speakers, discourse-aligned vs standard AI explanations. Five outcomes: comprehension quiz, 48-hour retention, cognitive effort, trust rating, modification behaviour (following Agarwal CHI 2025 methodology). 80 participants per cell. Recruit through University of Ibadan/Lagos.

Contributions: (1) First CHI-grade African NLP comprehension study. (2) Empirical test of simulation semantics for African oral tradition. (3) Establishes measurable benchmark for discourse alignment quality. (4) Either validates or forces revision of the Week 4 theoretical framework.

Key papers: Alabi et al. EMNLP 2025; Agarwal et al. CHI 2025; Bergen 2012; Adelani et al. 2024 (AfroBench); Ehineni 2016

Primary risk: Comprehension metrics may show trust/identity effects (people prefer familiar patterns) without simulation efficiency effects. If so: revise theory, not abandon it.

#2  Discourse Position Ontology for Yoruba Proverb Deployment

N: 9.5

F: 7.5

I: 9.0

▲ 9.0

[ FUTURE WORK ]

Motivation: CG-CoT identified exactly this gap: structured cultural ontologies are not in the RAG corpus. The field has proverb meaning datasets (ProverbEval, Owomoyela’s corpus). What doesn’t exist: a structured knowledge base that maps each proverb to discourse position (early framing, middle buttress, late crystallization), speech act performed, conceptual domain, community register, and known failure contexts.

Approach: Build the ontology in three phases: (1) Map Owomoyela’s 5,235 proverbs to seven structural dimensions using Ehineni’s discourse analysis as the annotation framework. (2) Validate with community panels of 5+ native speakers across Lagos, Ibadan, Abeokuta. (3) Release as open-source knowledge base in OWL/RDF format usable by LangChain RAG pipelines. Publish construction methodology as separate paper.

Contributions: (1) First machine-readable African language discourse ontology. (2) Enables CG-CoT’s future work to be executed. (3) Makes ProverbEval’s deployment tasks buildable. (4) Foundational infrastructure for every subsequent idea in this document.

Key papers: CG-CoT (arXiv 2506.01190); ProverbEval (NAACL 2025); Owomoyela 2005; Ehineni 2016; Yankah 1989

Primary risk: Community validation is slow and requires trust-building that takes longer than academic timelines. Start advisory board engagement 6 months before annotation begins.

Pathway B — Conflict Detection: Where Papers Disagree

Four significant conflicts emerged from cross-reading the live literature. Each is an opportunity. Your research is not merely positioned to add to the field. It is positioned to resolve open disputes that the field has not yet resolved.

CONFLICT: BLEU/BERTScore vs. cultural relevance: automated metrics cannot detect what matters

CG-CoT (arXiv 2506.01190, 2025): conventional metrics (BLEU, BERTScore) failed to detect improvements in cultural alignment that human evaluators clearly observed. Token-level similarity is orthogonal to cultural relevance.

ProverbEval (NAACL 2025) and AfroBench (Adelani 2024) continue using BLEU-adjacent metrics as primary evaluation signals despite this finding. The field has not updated its evaluation practice in response to CG-CoT’s finding.

Resolution Direction:

This conflict is your benchmark trap argument (Week 3) confirmed empirically by the engineering literature itself. The resolution is discourse-native evaluation tasks + community validation panels, exactly as proposed. CG-CoT proved the existing metrics fail; your proposal provides what should replace them.

CONFLICT: Bergen’s simulation semantics: does language ground through simulation or symbolic activation?

Bergen (2012) and embodied cognition tradition: language understanding requires mental simulation of sensorimotor content. Proverbs that activate pre-existing communal simulations are cognitively more efficient than hypotheticals built from scratch.

Jones, Trott & Bergen (Computational Linguistics 2024): MLLMs show sensitivity to sensorimotor features but cannot fully account for human simulation behavior. The mechanism in LLMs is ambiguous — it may be symbolic correlation, not genuine simulation.

Resolution Direction:

This conflict is directly testable with African language users. Does Yoruba proverb comprehension show the simulation advantage over hypotheticals that Bergen’s theory predicts? If yes: simulation semantics extends to oral tradition contexts. If no: the theory requires cultural qualification. Either finding is publishable and significant.

CONFLICT: Cultural adaptation: performance signal vs. architectural change

Cultural math grounding (arXiv 2507.00883): replacing Western cultural referents with local ones produces measurable performance shifts in mathematical reasoning tasks. Adaptation works.

Extrinsic cultural competence evaluation (EMNLP 2024): LLMs show lexical variance when prompted with cultural cues, but cultural values correlation is inconsistent and models default toward Western norms under pressure.

Resolution Direction:

The conflict is whether surface cultural adaptation (replace referents) produces real comprehension gains or only superficial variance. The comprehension study (Idea #1) tests exactly this: discourse structure change vs. lexical adaptation. Design the study to separate these two effects.

CONFLICT: Oral tradition and AI: metaphor translation vs. discourse deployment

CG-CoT and ProverbEval both treat proverbs as units to be translated or interpreted — as fixed meaning objects. Performance is measured by whether the model can state what a proverb means.

Yankah (1989), Ehineni (2016), and the five-week series: proverb meaning is inseparable from deployment context. The same proverb deployed at the wrong point in a discourse arc is not just less effective — it is wrong. Meaning is located in the deployment, not the text.

Resolution Direction:

This conflict defines the fundamental design choice for the Proverb Activation Library: build a meaning ontology (what the field has) or a deployment ontology (what the series proposes). Both papers can be built. The deployment ontology is the one that doesn’t yet exist and can’t be built from translation.

Pathway C — Methodology Pivots: Techniques Ready to Transfer

Four methodology pivots emerged from tracking how successful techniques from adjacent fields map onto the African Cognitive AI research programme. Each pivot identifies a proven method in one domain and a specific untested application in yours.

#7  Cultural Math Grounding → Discourse Explanation Grounding

N: 8.0

F: 8.5

I: 8.5

▲ 8.35

[ METHODOLOGY PIVOT ]

Motivation: arXiv 2507.00883 built 7,914 culturally grounded math problems by replacing Western referents with local ones across six cultural contexts, then measured how LLM performance shifts. The methodology is clean, replicable, and produced quantifiable cultural performance deltas.

Approach: Apply the same methodology to explanation tasks rather than math tasks. Build matched pairs of Yoruba explanations: one using Western discourse structure (define-evidence-recommend), one using Yoruba discourse structure (story-proverb-crystallize). Keep semantic content identical, vary only structure. Test comprehension outcomes for Yoruba-dominant speakers. This is a more direct test of your core claim than any existing study.

Contributions: (1) Direct empirical comparison isolating discourse structure as the variable. (2) Replicable across Igbo and Hausa with same methodology. (3) Connects to the cultural math grounding literature, broadening citation base. (4) Smaller study than the full 320-participant RCT — buildable in 6 months.

Key papers: arXiv 2507.00883 (cultural math grounding); Agarwal et al. CHI 2025; Owomoyela 2005; Ehineni 2016

Primary risk: Matched pairs are hard to construct so semantic content is genuinely identical. Requires Yoruba linguist co-author for validation.

#12  CulturePark Multi-Agent → African Oral Tradition Dataset Generation

N: 8.0

F: 8.0

I: 8.0

▲ 8.0

[ METHODOLOGY PIVOT ]

Motivation: CulturePark uses multi-agent communication to generate culturally diverse datasets. Agents with different cultural backgrounds debate, producing diverse, high-quality cultural outputs. The methodology scales cultural data generation beyond what annotation alone can achieve.

Approach: Build an African oral tradition discourse generation system using the CulturePark architecture. Agents represent different Yoruba discourse registers (elder, trader, community leader, young professional). Given a scenario, they generate explanations in authentic register. Community advisors validate output quality. The generated corpus becomes training data AND a benchmark for discourse-native AI.

Contributions: (1) Scalable method for creating discourse-native African language data. (2) Multi-agent architecture that encodes register knowledge structurally, not just in prompts. (3) Produces research output (the corpus) AND infrastructure (the system). (4) Directly citable: extends CulturePark to sub-Saharan Africa.

Key papers: CulturePark (OpenReview); Li et al. CultureLLM 2024; Owomoyela 2005; Ki et al. MACD 2025

Primary risk: Agent role design requires deep community consultation. Risk of homogenizing diverse Yoruba registers into stereotyped positions.

Pathway D — Cross-Field Synthesis: Three Bridges Nobody Has Built

The most important cross-field insights emerged from mapping the narrative theory-LLM literature, the simulation semantics literature, and the agentic AI literature against the African oral tradition scholarship. None of the three combinations exists in the literature. All three are buildable.

#4  Bergen Simulation Test: African Proverb vs. Western Hypothetical

N: 9.5

F: 7.5

I: 8.5

▲ 8.8

[ CROSS-FIELD SYNTHESIS ]

Motivation: Bergen’s simulation semantics has never been tested cross-culturally with African oral tradition material. Jones, Trott & Bergen (2024) found MLLMs cannot fully replicate human simulation behavior. But all of Bergen’s human experiments used WEIRD subjects. The question — does Yoruba proverb comprehension show a simulation advantage over constructed hypotheticals? — has never been asked.

Approach: Two-group experiment: Yoruba-dominant speakers read matched explanations (proverb-close vs. hypothetical-close) while cognitive effort is tracked (reading time, eye-tracking where available, subjective effort rating). Primary outcome: does the proverb condition show reduced cognitive effort and enhanced retention consistent with simulation semantics predictions? Secondary: compare human results to MLLM behavior on the same stimuli, using Bergen et al. 2024’s experimental protocol.

Contributions: (1) First test of Bergen’s simulation semantics with African language material. (2) Bridges cognitive linguistics and African NLP — a bridge that has not been built. (3) Directly publishable in Cognition, Psychological Science, or Language. (4) Provides theoretical grounding for every claim in the five-week series.

Key papers: Bergen 2012; Jones, Trott & Bergen, Computational Linguistics 2024; Ehineni 2016; Owomoyela 2005; Pelkey 2023

Primary risk: Requires cognitive science collaborator and lab infrastructure (eye-tracking optimal but not essential). Core study is doable without eye-tracking.

#5  Human-Centered African NLP: First CHI-Grade Study for Yoruba

N: 9.0

F: 8.0

I: 9.0

▲ 9.0

[ CROSS-FIELD SYNTHESIS ]

Motivation: Only 6 CHI-relevant papers on African languages in five years. The HCI + African NLP bridge is almost completely unbuilt. This is the most open real estate in the entire African AI literature.

Approach: Design a CHI-ready study following Agarwal et al.’s methodology: recruit Yoruba-dominant speakers, have them complete real tasks (write a business plan, explain a health condition, resolve a financial dispute) using two AI conditions (standard vs. discourse-native). Measure task completion quality, user modifications, cognitive effort, and post-task trust ratings. Submit to CHI 2027.

Contributions: (1) First CHI paper on discourse-native AI for African languages. (2) Connects African NLP to HCI community — a new citation network. (3) Practical outcomes applicable to product design. (4) Positions this research programme in both NLP and HCI venues.

Key papers: Agarwal, Naaman & Vashistha CHI 2025; Alabi et al. EMNLP 2025; Soni et al. 2024 (human-centric NLP); Adelani et al. 2024

Primary risk: CHI requires user study ethics approval, participant compensation, and HCI co-author. Timeline is 18 months minimum.

#17  Narrative Theory-LLM: Oral Histoire-Discourse System for Yoruba

N: 8.0

F: 6.5

I: 8.0

▲ 7.65

[ CROSS-FIELD SYNTHESIS ]

Motivation: Narrative theory-driven LLM research (arXiv 2602.15851) separates narrative into histoire (what happened) and discourse (how it is told). Yu et al. 2025 built a multi-agent system where character agents handle histoire and a narrator agent handles discourse. African oral tradition has an extraordinarily rich discourse layer — the griotic tradition, the discourse arc of Yoruba explanation, the role of the proverb as discourse-level crystallizer. This framework has never been applied.

Approach: Build a Yoruba oral explanation generator that separates content agents (what to say) from discourse agents (how to say it in Yoruba oral tradition terms). The discourse agent holds the Proverb Activation Library ontology and makes structural decisions: story opening, community reference, proverb selection, crystallization point. Evaluate against human-generated explanations on fluency and discourse-appropriateness.

Contributions: (1) First application of histoire-discourse framework to African oral tradition. (2) Architectural proof of concept for the Week 5 multi-agent system. (3) Connects to emerging narrative AI literature with immediate citation opportunities.

Key papers: Narrative Theory-Driven LLMs (arXiv 2602.15851); Yu et al. 2025; Owomoyela 2005; Ehineni 2016; Ki et al. MACD arXiv:2601.12091

Primary risk: Requires both narrative AI expertise and African discourse linguistics expertise — a rare combination. Strong case for interdisciplinary collaboration.

Execution Order — What to Build and When

The ideas in this document are not a wish list. They are a build sequence. The ontology unlocks the comprehension study. The comprehension study validates the ontology’s design choices. The methodology pivots produce output while the long-horizon studies run.

When

Action

Unlocks

Target venue

Priority

Now (Month 1–3)

Reach out to CG-CoT authors (Stanford NLP): propose Proverb Deployment Ontology as natural extension of their future work

Collaboration + shared credit

EMNLP / ACL 2026

NOW

Now (Month 1–6)

Build Proverb Activation Library: Owomoyela corpus + Ehineni annotation + community panels

Unlocks ideas #1, 2, 3, 6, 8, 14, 18

LREC / AfricaNLP 2026

NOW

Months 3–6

Run cultural math grounding pivot study: matched discourse pairs, 40 Yoruba speakers, 3 weeks

Proof-of-concept for comprehension effect

EMNLP findings 2026

FAST

Months 6– 12

Extend ProverbEval: add deployment tasks (proverb selection given discourse context)

Concrete benchmark contribution

NAACL / ACL 2027

FAST

Months 6–18

Full comprehension study (IRB, 320 participants, University of Ibadan/Lagos)

Empirical foundation for entire series

Cognition / CHI 2027

CORE

Months 12–24

Bergen simulation test: African proverb vs. hypothetical, eye-tracking

Cross-domain publication, theory validation

Language / Psychological Science

CORE

Months 18–30

CHI-grade user study: task-based, discourse-native vs. standard AI

HCI community entry + applied results

CHI 2027/2028

LONG

Papers Referenced in This Analysis

Live papers mined (2024–2025):

Alabi, Hedderich, Adelani & Klakow (2025). Charting the Landscape of African NLP. EMNLP 2025 (884 papers, 5 years). — CG-CoT: Culturally-Grounded Chain-of-Thought for Yoruba proverbs. arXiv:2506.01190, June 2025. — ProverbEval: Exploring LLM Evaluation Challenges for Low-Resource Languages. NAACL 2025. — Jones, Trott & Bergen (2024). Do MLLMs and Humans Ground Language Similarly? Computational Linguistics, MIT Press. — Cultural math grounding: arXiv:2507.00883, July 2025. — Investigating Cultural Alignment of LLMs. ACL 2024. — CulturePark: Boosting Cross-cultural Understanding in LLMs. OpenReview. — Extrinsic Evaluation of Cultural Competence in LLMs. EMNLP 2024. — Narrative Theory-Driven LLM Methods. arXiv:2602.15851. — Y-NQ: English-Yoruba evaluation dataset. ACL 2025. — AfricaNLP Workshop 2024 (ICLR) and 2025 (ACL). — State of LLMs for African Languages. arXiv:2506.02280. — Senegalese NLP survey. arXiv:2601.09716.

Foundational scholarship:

Bergen, B.K. (2012). Louder Than Words. Basic Books. — Owomoyela, O. (2005). Yorùbá Proverbs. University of Nebraska Press. — Ehineni, T.O. (2016). Discourse-Structural Analysis of Yorùbá Proverbs. Colombian Applied Linguistics Journal. — Yankah, K. (1989). A theory of proverb praxis. — Mhlambi, S. (2020). From Rationality to Relationality. Harvard Carr Center. — Eglash, R. (1999). African Fractals. Rutgers UP. — Lewis et al. (2024). Abundant Intelligences. Springer AI & Society.

Author’s prior work (the origin):

Consciousness in Code and Algorithmic Animism: Exploring Olugbohun and AI through the Lens of Yoruba Spiritual Practices (Logo M., 2025). — Building AI That Thinks in African Languages: Weeks 1–5 (Logo M., 2026). — Agentic AI Frameworks in SMMEs: Research Audit (Logo M., 2026). — Notes Toward a Future: Personal Intellectual Positioning (Logo M., 2026).
