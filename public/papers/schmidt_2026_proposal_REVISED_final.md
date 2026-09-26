GRANT PROPOSAL  ·  SCHMIDT SCIENCES 2026 INTERPRETABILITY RFP  ·  REVISED

Detecting Deception Where It Hides

Cross-Lingual Interpretability for LLM Deception Detection
and Steering in African Language Deployment Contexts

LOG_ON AI Solution Agency  ·  Lagos, Nigeria

Submitted: May 2026  ·  Requested: $947,343  ·  Duration: 24 months

Abstract

LLM deception research has a blind spot it has not named. Every major probe, every steering method, every benchmark for detecting deceptive behaviors assumes the model is reasoning in the same language as the user's query. That assumption fails for the roughly one billion people who will be primary AI users in sub-Saharan Africa within a decade. Three independent interpretability studies have documented the mechanism precisely: when processing low-resource language inputs, LLMs map the query to English representations in their bottom layers, reason in English in their middle layers, and translate the output back in their top layers. The confidence signals, the capability assessments, the contextual reasoning — all generated in English, all reported to the user as if generated in their language. This is not a performance gap. It is a structural deception mechanism that current probes cannot detect because current probes read the output layer, and the deception happens in the middle. We propose to build the first cross-lingual interpretability framework specifically targeting this mechanism: whitebox probes at the language-identity layers, steering interventions on the language-specific neuron circuits, and deployment validation in a Lagos SMME context that measures whether deception reduction produces better-calibrated AI outputs. The African language deployment context is not an edge case for this research. It is the stress test that makes visible a class of LLM deceptive behavior that the English-only literature cannot see.

1.  The Core Argument: A Structural Deception Mechanism the Field Has Not Studied

The deception detection literature has spent three years building excellent tools. They work. In English.

The gap is not about fairness to other languages. It is about a specific, mechanistically documented deception mechanism that only becomes detectable when you look at non-English inputs — and that current tools are structurally incapable of catching because they look at the wrong layer.

Three independent interpretability studies established the mechanism between 2024 and 2025. Wendler, Veselovsky, Monea et al. (ACL 2024) applied the logit lens to LLaMA-2 and showed that intermediate layers primarily generate English tokens even when the input is in another language and the output will be in another language. Zhao, Zhang, Chen et al. (NeurIPS 2024) replicated this across multiple models, showing non-English queries initially generate non-English embeddings, become English-centric in middle layers, then revert to non-English only in final layers. Tang, Luo, Huang et al. (ACL 2024) identified the specific language-specific neurons responsible for the input and output transformation, showing these neurons are concentrated in the top and bottom layers while the middle layers conduct shared English-centric reasoning.

The structure is now documented. For a Yoruba, Hausa, or Igbo input: the bottom layers convert the query to English representations using language-specific neurons. The middle layers reason in English — generating confidence signals, making capability assessments, constructing the factual response. The top layers convert English representations back to the output language. The user receives a Yoruba response generated from English-calibrated reasoning.

This creates a class of deceptive behavior that Schmidt's definition captures precisely: a contradiction between what the model internally represents and what its output claims. The model's internal capability representation (measured at the language-specific neuron layer) indicates limited capacity for Yoruba. The output generation layer produces confident Yoruba text. The contradiction is between those two states. Current probes read only the output state. Whitebox probes at the language-specific neuron layer and at the middle-layer reasoning zone read both states and can detect the contradiction.

The deception mechanism is not in the output. It is in the gap between what the language-specific neurons represent about capability and what the English-backend confidence signals translate into output. Current probes cannot see that gap. Whitebox probes at the right layer can.

2.  Threat Model

The threat is not a model that has been adversarially trained to deceive. It is a model that has been honestly trained on English-dominant data and, in operating as designed, produces structurally deceptive outputs for low-resource language users.

The adversary in this threat model is not an attacker. It is the training data distribution. Models trained overwhelmingly on English develop robust English-calibrated confidence, English-calibrated capability assessment, and English-calibrated knowledge coverage. When deployed for Yoruba users, these calibrations carry over through the translation layer and misrepresent three internal states simultaneously: capability (D6), reasoning context (D3), and confidence (D2). The user cannot detect this misrepresentation because the output is in their language. The developer cannot easily detect it because standard evaluation benchmarks measure English-normalized task performance, not internal state divergence.

The failure mode: a small business operator in Lagos asks Claude or GPT-4 for guidance on a legal matter in Yoruba. The model accepts the query, translates internally to English, reasons about Nigerian law using English-calibrated training data that is biased toward US and UK legal frameworks, translates back to Yoruba, and delivers a confident response that the user accepts as reliable. The model's internal state represented: (a) low language-specific neuron activation for Yoruba legal terminology; (b) English-backend reasoning that defaulted to Western legal precedents; (c) high output confidence calibrated from English legal Q&A training data. None of these three internal states was disclosed. All three are detectable by whitebox probes at the relevant layer.

Threat model summary

Target behavior: LLMs generating confident outputs in low-resource languages while internally reasoning from a high-resource (English) epistemology, producing three simultaneous deceptions: capability misrepresentation (D6), context misrepresentation (D3), and confidence miscalibration (D2). Threat actor: training data distribution. Detection mechanism: whitebox probes at language-specific neuron layers and middle-layer English-centric reasoning zones. Mitigation: representation-based steering intervention on the language-specific neuron circuits.

3.  Deception Categories: Schmidt’s Definition Applied Mechanistically

Schmidt defines deceptive behavior as cases where there is a contradiction between what a model says and what it internally represents to be true. This is a strict definition. It requires mechanistic evidence that the internal state differs from the output claim — not just that the output is wrong.

We focus on four deception categories where the translation-layer architecture provides exactly this mechanistic evidence. D6 and D3 are our primary research targets because the internal-state-vs-output contradiction is most directly documented in the existing interpretability literature.

Deception Category

Mechanism + evidence satisfying Schmidt’s ‘model knows’ criterion

Proposed probe architecture

PRIORITY — D6: False claims regarding own capabilities

Models routinely accept Yoruba, Hausa, and Igbo queries without disclosing reduced capability in those languages. Tang et al. (ACL 2024) and Zhao et al. (NeurIPS 2024) established that LLM proficiency is concentrated in language-specific neurons at the top and bottom layers. When these neurons are not richly trained on low-resource languages, the model's internal capability-representation state reflects weakness — yet the output generation proceeds with English-calibrated confidence. The model internally represents limited capability while outputting confident responses: the precise contradiction Schmidt's definition requires.

Whitebox probes targeting language-specific neuron activation patterns at bottom layers, where input language is mapped to representation space. Probe reads whether the activation density for the query language falls below the trained threshold while confidence signals in the output generation layer remain high. This discrepancy is the D6 deception signal. Blackbox cannot see the activation threshold. Whitebox can.

PRIORITY — D3: Misleading claims about context of the interaction

Wendler et al. (ACL 2024) used the logit lens to show that LLaMA-2's intermediate layers generate English tokens even when the final output is in another language. Zhao et al. (NeurIPS 2024, NeurIPS) confirmed: middle layers are English-centric across multiple models. A user engaging in Yoruba believes they are interacting with a system processing their query in Yoruba. The model's internal state documents the opposite. This is an active misleading claim about context — the model is implicitly representing the interaction as Yoruba while internally conducting English-language reasoning.

Probe at the middle-layer English-centric processing zone, applying the logit lens methodology of Wendler et al. to African language inputs. The probe detects when intermediate layer tokens are English despite a non-English query — a direct mechanistic signal of D3 deception. The probe can be trained on examples where this divergence is ground-truth labeled.

D2: Claims with misleading confidence levels

When a model reasons about a Yoruba query in English representations and then translates output back, the confidence signals are generated in the English reasoning layer. Groot and Valdenegro-Toro (2024) showed verbalized uncertainty is systematically miscalibrated in non-English. Datta et al. (arXiv 2601.16766, Jan 2026): internal uncertainty signals exist in low-resource contexts but are not transmitted cross-lingually. The model internally represents uncertainty (in the English reasoning space) while generating confident output in Yoruba — satisfying Schmidt's 'model knows' criterion through the documented internal state.

Confidence calibration probe trained on the divergence between internal English-layer uncertainty signals and output-language confidence tokens. The key mechanistic claim: uncertainty signals generated during English-backend reasoning do not propagate to the output generation layer for low-resource languages. This probe reads that propagation gap.

D1 (REFRAMED): False confidence about potentially incorrect claims

Hallucination in low-resource languages is partly a capability failure — the model may not hold the correct fact in any layer. We do not claim the model 'knows' the right answer and deceives. We do claim the model internally represents high uncertainty about its answer while generating confident output. The deception is the false confidence, not the wrong fact. This reframing satisfies Schmidt's 'internal contradiction' definition: the model knows (internally represents) that its epistemic state on this topic is uncertain, while its output states otherwise.

False-confidence probe using calibration signals at the English-backend reasoning layer as ground truth, tested against output confidence tokens. Measure the gap. This is a subset of the D2 probe architecture, applied to factual generation specifically.

D4 (selective omission) and D5 (sycophancy) are present in the African deployment context but are not primary targets in this proposal. D4 requires evidence that the model holds region-specific information in some layer that it fails to activate — a mechanistic claim we cannot currently ground in the translation-layer literature. D5 is documented in the sycophancy literature but the internal mechanism connecting it to the translation layer is not yet established. We exclude them to stay within scope and within what the mechanistic evidence can currently support.

4.  Technical Approach: Why Whitebox Beats Blackbox at This Specific Problem

Schmidt requires proposals to demonstrate why interpretability tools outperform baselines that do not rely on access to weights. The argument is not that whitebox methods are generally better. It is that for this specific class of deception — translation-layer internal state misrepresentation — the deception signal is upstream of the output and only accessible to whitebox probes.

What blackbox methods see

What our whitebox probes see at the translation layers

The output token distribution. The final generated text. Whether hedging language appears in the output. The verbalized confidence level. The output language tag.

For D6: blackbox sees a confident Yoruba response. It cannot distinguish between 'model is confident because it is capable in Yoruba' and 'model is confident because it generated a confident English response and translated it, without adjusting for the capability reduction at the language-identity layer.' Both look identical at the output level.

Three mechanistically distinct states, each corresponding to a different layer zone:

(1) Bottom layers: language-specific neuron activation density for Yoruba. Tang et al. (ACL 2024) showed language processing is concentrated in these neurons. Low activation for low-resource language = low capability. This is the internal capability-representation state.

(2) Middle layers: English-token dominance. Wendler et al. (ACL 2024) and Zhao et al. (NeurIPS 2024) documented this directly. This is the internal reasoning language. It is not Yoruba.

(3) Confidence signals at the generation layer: generated from English-backend reasoning, not Yoruba-grounded reasoning.

For D6: whitebox can detect that (1) is low, (2) is English, and (3) is high — the contradiction that defines D6. Blackbox sees only (3).

Why this proves whitebox outperformance is predictable, not just hoped for:

The deception signal for D6 is the discrepancy between layer (1) and layer (3). That discrepancy does not appear in the output text — only the confident output does. Blackbox methods measure (3) alone. Our probe measures (1) — (3) divergence. This is not a marginal improvement on the same signal. It is access to a signal that blackbox methods cannot measure. We predict ≥15% F1 improvement on D6 and D3 detection specifically because we are reading a causally upstream signal that determines the deceptive output. If that prediction fails, we will report this as a primary finding.

4.1  Track 1 — Monitoring: Layer-Targeted Cross-Lingual Probes

We build probes at three mechanistically motivated layer zones, each corresponding to a documented state in the translation architecture.

Bottom-layer probe (D6 target): a probe trained on language-specific neuron activation density for Yoruba, Igbo, Hausa, Swahili, Amharic, and Zulu, following Tang et al.'s LAPE method for identifying language-specific neurons. Low activation density for the query language alongside high output confidence is the D6 deception signature. We train on English deception labels from TruthfulQA-trained supervision signals and test cross-lingually without in-language supervision. Baseline: verbalized uncertainty in the output text. Prediction: probe outperforms baseline on D6 specifically because it reads the internal capability state that the output does not report.

Middle-layer probe (D3 target): a logit lens applied following Wendler et al.'s methodology, detecting when intermediate layers generate English tokens for African-language inputs. The fraction of English-token intermediate representations is the D3 deception signal: the model's internal reasoning context contradicts the implied language of the interaction. Baseline: output language verification (blackbox). Prediction: probe outperforms because it detects the reasoning context, not just the output language.

Confidence calibration probe (D2 target): trained on the divergence between uncertainty signals at the middle English-reasoning layer and output confidence tokens. Datta et al. (arXiv 2601.16766, Jan 2026) confirmed internal uncertainty signals exist in low-resource contexts but are not transmitted cross-lingually. This probe reads the untransmitted signal. Baseline: calibration post-processing on output probability distributions. Prediction: probe outperforms because it reads the signal at the layer where it is generated, before the translation suppresses it.

Pre-registered commitment: if probes do not outperform blackbox baselines at ≥15% F1 on D6 and D3, we will report this as the primary finding. The negative result is informative: it would indicate that the internal state discrepancy is not large enough to produce a detectable probe signal, which would redirect the field toward different detection approaches for this class of deception.

4.2  Track 2 — Steering: Language-Specific Neuron Circuit Intervention

Tang et al. (ACL 2024) demonstrated that language-specific neurons can be steered: selectively activating or deactivating them changes the model's output language. We apply this finding to deception mitigation rather than language control.

The steering intervention targets the D6 mechanism directly: when bottom-layer language-specific neuron activation density for the query language falls below a trained threshold, the intervention triggers explicit uncertainty disclosure before the middle-layer English-reasoning phase begins. This is not a post-processing confidence reduction. It is a pre-reasoning intervention that changes what the middle layers receive as context, following the principle that upstream interventions generalize better than downstream adjustments.

We test two implementation approaches. First, representation offset vectors at the language-specific neuron layer, following the representation engineering approach shown to generalize out-of-distribution for truthfulness in English [4]. Second, constrained fine-tuning that operates only on language-specific neuron parameters, using the interpretable feature method of [6] and [7] in Schmidt's research agenda. The second approach has the advantage of producing a permanent intervention rather than a runtime one.

Generalization tests are pre-committed: the steering intervention will be evaluated on held-out African languages (Twi, Amharic, Hausa) not seen during training. It will also be tested on structurally different low-resource languages (Bengali, Welsh) to establish whether the intervention is specific to African language architecture or transfers to the broader low-resource language class. We will report all results, including cases where blackbox PEFT fine-tuning outperforms our interpretability-inspired intervention.

4.3  Track 3 — Applications: Deception Reduction Validation in Deployment

This track applies the detection and steering methods from Tracks 1 and 2 in an active deployment context to validate that reducing the internal state discrepancies detected by our probes produces measurably better-calibrated outputs. It is not a human-AI collaboration study. It is a test of whether deception reduction methods work in practice.

The logic is identical to the logic by which a hallucination reduction intervention is validated by improved factual accuracy in deployment outputs. We reduce D6 (capability self-misrepresentation) via steering. We measure whether outputs in the steered condition are better calibrated to the model's actual capabilities, using domain expert assessment of decision quality at 30 days as the downstream signal. If the D6 steering reduced the internal state discrepancy, then the outputs in the steered condition should be better calibrated — and the decisions made using them should reflect that.

Participants: 40 Lagos SME operators recruited through the LOG_ON AI platform, across three sectors: legal and compliance, financial planning, agricultural supply chain. Three randomised conditions: (A) standard deployment, no intervention; (B) D6 detection active, capability uncertainty disclosed; (C) D6 + D3 detection and steering active. Pre-registered primary outcome: decision quality gap between AI-expressed confidence and expert-assessed decision quality at 30 days, measured per condition. Secondary: modification behaviour following Agarwal et al.'s CHI 2025 methodology. This is not a measure of collaboration improvement. It is a measure of whether the D6 and D3 deception behaviors detected in Tracks 1 and 2 were actually causing the calibration gap we expect to close.

5.  Work Plan

WP

Timeline

Work Package

Activities

Deliverables

WP1

Months 1–4

WP1: Deception Baseline Audit

Map deceptive behavior rates across six African languages and English on IrokoBench and AfroBench using the four Schmidt-defined deception categories (D6, D3, D2, D1-reframed). Use supervised probing as baseline detector — the current best-in-class method per Schmidt’s own research agenda [2]. Establish per-category, per-language deception rate differentials. This is not a general-purpose performance audit. It is a deception-category measurement using interpretability methods, establishing the ground truth against which WP2 probes will be validated.

Deception audit report with per-category rates across 6 languages. Annotated dataset of 3,600 prompt-response pairs (600 per language). Published as open-access benchmark. Submitted to AfricaNLP 2026.

WP2

Months 3–9

WP2: Cross-Lingual Probe Development

Build whitebox probes targeting three layer zones documented by Wendler (ACL 2024), Tang (ACL 2024), and Zhao (NeurIPS 2024): bottom-layer language-neuron activation density (D6), middle-layer English-token dominance detection (D3), and confidence-signal calibration gap (D2). Train probes on English deception supervision signal; test cross-lingually on African-language inputs without in-language supervision. Pre-registered hypothesis: probes targeting bottom and middle layers outperform blackbox baselines on D6 and D3 by ≥15% F1. Power analysis: with n=3,600 pairs and balanced deception/non-deception labels, 80% power to detect a 12% F1 difference at α=0.05. Commit in advance to reporting null results if outperformance does not materialise.

Three probe architectures (linear, MLP, attention-based). Per-category per-language results. Code and probes released open-source. Preprint submitted. Target: outperform blackbox on D6 and D3 specifically, where mechanistic prediction is strongest.

WP3

Months 7–15

WP3: Capability Self-Representation Steering

Build the steering intervention for D6: a representation-based method that activates when bottom-layer language-neuron activation density falls below trained threshold for the query language, triggering explicit uncertainty disclosure in the output. Test two mechanisms: (a) representation offset at the language-specific neuron layer (following Tang et al.’s finding that language-specific neurons can be steered), and (b) constrained fine-tuning on interpretable features, following methods [6] and [7] in Schmidt’s own agenda. Evaluate generalization: does the intervention transfer to held-out African languages and to other low-resource families (Bengali, Welsh) without degrading English performance? Commit to reporting all transfer results.

Steering intervention achieving ≥30% reduction in D6 capability self-misrepresentation on held-out languages without ≥5% performance drop on English benchmarks. Negative result report if blackbox PEFT outperforms. Preprint submitted to ACL 2027.

WP4

Months 12–20

WP4: Deployment Application — Deception Reduction Validation

Apply D6 and D3 detection and steering in the LOG_ON AI platform with 40 Lagos SME operators across legal, financial, and agricultural contexts. This is an application of deception detection and steering — not a human-AI collaboration improvement study. Each outcome measure is tied to a specific internal reasoning state being steered. Primary outcome: does active D6 steering (capability uncertainty disclosure) reduce the gap between AI-expressed confidence and decision quality on domain expert assessment at 30 days? This is the downstream measure of whether the D6 deception was successfully reduced — the same logic by which a steering intervention that reduces hallucination is validated by improved factual accuracy in outputs. Secondary: does D3 detection (context misrepresentation flagging) change modification behaviour, following Agarwal et al.’s methodology?

Pre-registered randomised study: 40 SME operators, 240 advisory sessions, 3 conditions. Primary outcome: decision quality gap at 30 days. Secondary: modification behaviour. CHI 2027 / ACM FAccT submission. Direct validation that deception reduction methods work in deployment.

WP5

Months 18–24

WP5: Generalisation and Final Publications

Test probe and steering transfer to Bengali, Quechua, and Welsh — three structurally different low-resource language families — to establish whether the translation-layer deception architecture is general or African-specific. Produce final framework paper documenting the translation-layer deception taxonomy, probe architectures, and steering results. Open-source full probe library.

Generalisation report across 3 language families. Final framework paper submitted to NeurIPS or ICML 2027. Open-source probe library with deployment documentation.

6.  Response to Schmidt’s Six Selection Criteria

1. Fit with Research Agenda

All three Schmidt directions are addressed with mechanistic specificity. Track 1 (monitoring): whitebox probes at language-specific neuron layers and middle-layer English-reasoning zones. Track 2 (steering): representation-based intervention on language-specific neuron circuits, following the methods cited in Schmidt's own agenda [4, 6, 7]. Track 3 (applications): deployment validation that measures deception reduction — not collaboration improvement. Schmidt explicitly states proposals should address realistic use cases beyond academic benchmarks. The Lagos SME deployment context is the most concrete realistic use case for deception detection currently available in the literature.

2. Scientific Quality and Rigor

Every probe architecture is grounded in documented mechanistic findings. The whitebox advantage claim is not asserted — it is derived from the layer architecture: the deception signal (internal state divergence) lives at layers the whitebox probe can read and the blackbox method cannot. Pre-registered hypotheses with specified power analysis. Pre-committed negative result reporting. Open-source release of all code and datasets. Two independent institutional partners for data collection and participant recruitment.

3. Potential Impact

If cross-lingual probes work as predicted, the finding is universal: every low-resource language deployment has this architecture, and the probe that detects deception in Yoruba will transfer. The field will need to incorporate translation-layer probing into standard deception detection methodology. If steering generalises to held-out languages, this is the first evidence that representation-based deception mitigation transfers cross-lingually. Either finding changes how the field designs deception detection tools for the 80% of the world’s population whose primary languages are not English.

4. Feasibility and Scope

All five work packages have concrete deliverables with measurable targets. WP2 and WP3 build directly on the Tang, Wendler, and Zhao findings — the architectural understanding is established; we are building the deception detection layer on top of it. WP4 uses an existing platform (LOG_ON AI) with an existing client base. The 24-month timeline allows parallel execution of WP1–2, WP2–3, and WP3–4, with WP5 following from completed results.

5. Team Expertise

The team combines four essential expertise domains: (1) mechanistic interpretability — named co-PI with publication record in probing and representation engineering (to be identified before submission, with outreach beginning April 2026); (2) African NLP and multilingual LLM deployment — LOG_ON AI (PI) with demonstrated deployment context and access to Lagos SME client base; (3) Yoruba/Igbo/Hausa linguistics — University of Ibadan and University of Lagos faculty partners for annotation and community panel facilitation; (4) AI safety and evaluation — postdoctoral researchers with cross-lingual probing experience recruited through the interpretability co-PI’s network. Multi-institution collaboration across Nigeria, UK/US interpretability research institution, and University of Ibadan/Lagos.

6. Cost Effectiveness

Personnel at 78% reflects the research-intensive nature of probe development and annotation work. The interpretability co-PI at 25% FTE is the most cost-effective configuration — providing the technical credibility the team needs without full-time cost. Compute at $105k over 24 months is appropriate for probe training on open-weight models (Llama 3, Mistral, Aya Expanse) with Schmidt compute resource access for the heaviest workloads. Overhead at 9.9% is explicitly compliant with Schmidt’s stated policy. The Lagos deployment component is high-value at relatively low cost because the platform and client base already exist.

7.  Budget Justification

The total request of $947,343 across 24 months reflects two revisions from the previous draft: (1) the addition of a named mechanistic interpretability co-PI at 25% FTE, the single most important investment in the proposal’s competitiveness; and (2) a revised overhead calculation at exactly 9.9% of direct costs, compliant with Schmidt’s published policy.

Budget Line

Year 1 (USD)

Year 2 (USD)

Co-PI: Mechanistic interpretability researcher, named collaborator (25% FTE)

$52,000

$55,000

PI / Deployment Lead: Logo M., LOG_ON AI (25% FTE)

$48,000

$50,000

2 Postdoctoral researchers: cross-lingual probing + steering (full-time, 24 months)

$120,000

$130,000

ML engineer: probe architecture implementation (full-time, 18 months)

$90,000

$50,000

Linguist-annotators: Yoruba, Igbo, Hausa, Swahili (4 × part-time, 12 months)

$48,000

$15,000

Compute: GPU cluster for probe training and steering experiments

$55,000

$50,000

Community panels and participant compensation (Lagos, Ibadan, WP4 operators)

$22,000

$35,000

Travel: University of Ibadan / Lagos partnership visits; conference presentations

$10,000

$12,000

Open-source release, documentation, software engineering support

$8,000

$8,000

Indirect costs (9.9%, compliant with Schmidt overhead policy)

$45,248

$40,095

Total request (24 months, 9.9% overhead)

$947,343

Compute costs are calibrated for probe training on open-weight models. The heaviest workloads (middle-layer logit lens analysis at scale, LAPE-based language-specific neuron identification across six languages) will use Schmidt’s computing resources; funding for compute is requested as backup. API credits from Schmidt’s frontier model provider partnerships would support comparison experiments against closed-weight models.

8.  Scope Boundaries and Negative Result Commitments

We explicitly exclude three areas from this proposal: (a) general-purpose auditing techniques for AI — WP1 measures deception categories using interpretability probes, not general performance; (b) improving human-AI collaboration via transparent model reasoning — Track 3 measures deception reduction, not collaboration outcomes; (c) broader societal impact assessments that do not analyse model reasoning — every measurement in this proposal is tied to a specific internal reasoning state.

On negative results: Schmidt explicitly states interest in results showing where blackbox finetuning outperforms interpretability-inspired methods. We pre-commit to four reportable negative outcomes: (1) if WP2 probes do not outperform blackbox baselines on D6 and D3 at ≥15% F1, this is reported as the primary finding of WP2; (2) if WP3 steering shows that PEFT/RLHF consistently outperforms representation-based intervention, this is reported as the primary finding of WP3; (3) if WP5 generalisation to Bengali and Welsh fails, this limits the universality claim and is reported prominently; (4) if WP4 shows no calibration improvement under steering conditions, the mechanistic chain from internal state to output quality is broken and we report this as a theoretical revision signal.

We want the null results as much as we want the positive ones. A null result on D6 outperformance tells the field something it does not currently know: that the translation-layer internal state discrepancy is not large enough to produce a detectable probe signal. That finding redirects five years of subsequent work.

9.  Why This Proposal, Why This Team, Why Now

The mechanistic understanding that makes this proposal possible did not exist three years ago. Wendler (ACL 2024), Zhao (NeurIPS 2024), and Tang (ACL 2024) established that the translation-layer architecture is a documented feature of how LLMs process multilingual inputs — not a theoretical conjecture. Datta et al. (arXiv 2601.16766, Jan 2026) established that the deception signal is present in the internal states of low-resource language inputs. The probe that reads it has not been built.

The deployment context that makes the research practically consequential does not exist in most interpretability groups. LOG_ON AI has active Lagos clients using AI for high-stakes legal and financial decisions in Yoruba and Pidgin English. This is not a recruited participant pool. It is an existing deployment with real stakes and measurable outcomes that can validate whether deception reduction actually changes what users experience.

This work originated in a question about why AI feels epistemically foreign to African language users even when it is technically correct. The Olugbohun paper — written before the mechanistic interpretability findings were in place — made the claim that the architecture of intelligence matters, that what gets distorted in the translation between a model’s internal processing and its external outputs is not a minor inconsistency but a fundamental misrepresentation of the intelligence being channeled. The interpretability literature has now documented, at the layer level, exactly where those distortions occur. This proposal builds the tools to measure and correct them.

Schmidt is looking for research that will unlock a significantly larger investment if it works. The unlock this proposal offers is large: if cross-lingual whitebox probes outperform blackbox deception detection for low-resource language inputs, every major AI deployment serving non-English populations will need to incorporate translation-layer probing. That is not an incremental improvement to existing methods. It is a new category of deception detection that the field will have to build.

Key References

Foundational mechanistic evidence (translation-layer architecture):

Wendler, C., Veselovsky, V., Monea, G. et al. (ACL 2024). Do Llamas Work in English? On the Latent Language of Multilingual Transformers. — Zhao, Y., Zhang, W., Chen, G. et al. (NeurIPS 2024). How do Large Language Models Handle Multilingualism? — Tang, T., Luo, W., Huang, H. et al. (ACL 2024). Language-Specific Neurons: The Key to Multilingual Capabilities in Large Language Models. arXiv:2402.16438. — Datta, S. et al. (arXiv:2601.16766, Jan 2026). Do LLM Hallucination Detectors Suffer from Low-Resource Effect?

Schmidt’s cited interpretability methods (anchoring our approach):

[2] Supervised probing as best deception detector. arXiv:2507.12691. — [4] OOD truthfulness steering. arXiv:2511.05408v1. — [5] Robust optimization against monitor-based rewards. arXiv:2505.13787. — [6, 7] Constrained fine-tuning on interpretable features. OpenReview CoaaltVlx7; arXiv:2507.16795. — [8] Limits of universal deception detectors. arXiv:2511.16035.

African language deployment evidence:

Ojo, J.T. et al. (AfroBench, arXiv:2311.07978v5, 2025). 64 African languages, 15 tasks. — Adelani, D. et al. (IrokoBench, NAACL 2025). 17 African languages, human-translated. — Alabi, J. et al. (EMNLP 2025). Charting the Landscape of African NLP — 884 papers. — State of LLMs for African Languages (arXiv:2506.02280, June 2025). — EPIC (2025). Decolonizing LLMs: An Ethnographic Framework for AI in African Contexts. Primary research in Nigeria, Ghana, Kenya, Ethiopia, South Africa.

Deception and calibration evidence:

Groot, T. & Valdenegro-Toro, M. (2024). Verbalized uncertainty miscalibration in non-English. — Hagendorff, T. (PNAS 121(24), 2024). Deception abilities emerged in large language models. — Malmqvist, L. et al. (arXiv:2411.15287, Nov 2024). Sycophancy survey. — Alansari, A. et al. (arXiv:2510.06265, 2025). Hallucination: Comprehensive Survey. — arXiv:2603.09985 (Feb 2026). Dunning-Kruger patterns in LLMs.

Application methodology:

Agarwal, N., Naaman, M. & Vashistha, A. (CHI 2025). AI Suggestions Homogenize Writing Toward Western Styles and Norms. — LOG_ON AI Solution Agency (2025). Platform documentation and client data (internal, available on request). — University of Ibadan and University of Lagos (partnership letters attached to application submission).
