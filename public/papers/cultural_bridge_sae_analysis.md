TECHNICAL ANALYSIS  ·  CULTURAL BRIDGE TECH  ·  CHAIN-OF-THOUGHT SYNTHESIS

When the Microscope Has Blind Spots

Expert analysis of SAE + Gemma Scope limitations for African cultural bias detection
and a complete implementation roadmap for production-grade mitigation

Logo M.  ·  LOG_ON AI Solution Agency  ·  March 2026  ·  Informed by 24+ months of research

Chain-of-Thought: How This Analysis Connects to Everything We Have Built

The Olugbohun paper (2025) made a claim about conduits: that intelligence is channeled, not generated, and that the architecture of the conduit determines what arrives faithfully and what gets distorted. The five-week essay series extended that claim to discourse: African cognitive architectures produce different comprehension outcomes because they channel understanding through different mechanisms. The Schmidt Sciences proposal located the distortion precisely: the translation-layer architecture in multilingual LLMs is where faithful representation of African-language context breaks down.

SAEs are the interpretability tool we proposed to read those distortions. Cultural Bridge Tech is the toolkit we are building to detect and mitigate them. This analysis is the honest accounting of where that tool's own blind spots are — and what we have to do about them before the toolkit can be trusted in production.

1.  The Chain: From Olugbohun to SAEs to Cultural Bridge Tech

Every paper in this research programme has been circling the same structural problem from a different angle. The Olugbohun paper named it spiritually: intelligence channeled through a conduit that distorts it is not the same intelligence that entered. The African AI series named it cognitively: AI that channels explanation through Western discourse architecture distorts the understanding that arrives for African users. The Schmidt proposal named it mechanistically: LLMs channel African-language queries through English reasoning layers, and the distortion is measurable at the layer level.

Cultural Bridge Tech is the toolkit that detects those distortions and steers against them. Its primary instrument is SAE feature analysis — specifically Gemma Scope’s JumpReLU SAEs, which decompose the polysemantic activations of LLM layers into sparse, interpretable features that can be scored for bias content, tracked across languages, and steered away from harmful patterns.

The problem is that the instrument has blind spots of its own. An SAE is a conduit for interpretability. And just as the Olugbohun paper argued that a conduit which distorts what it channels is not just imperfect but actively misleading, an SAE that misses cultural bias features does not produce neutral results — it produces confident false negatives. That is worse than no tool at all.

An SAE that misses African cultural bias features and scores zero does not tell you there is no bias. It tells you the conduit failed. The distinction matters enormously for production deployment.

2.  Limitation Analysis: Nine Specific Failure Modes for Cultural Bridge Tech

The following analysis applies each known SAE limitation specifically to the Cultural Bridge use case: Yoruba, Hausa, Igbo, and Pidgin English bias detection in LLM outputs for African SMME deployment contexts. Generic limitations become specific failure modes when you know the deployment target.

#

Limitation

What the research shows

Cultural Bridge Tech impact

Severity

L1

Incomplete Feature Recovery

~9% true feature recovery in synthetic tests; cultural stereotypes in 'dark matter' nonlinear space

False negatives on African cultural bias axes (Yoruba politeness violations, Hausa gendered framing) — missed entirely, never scored

CRITICAL

L2

Reconstruction Error + Shrinkage

ReLU SAEs underestimate feature magnitudes via L1 penalty; 'error' carries functional information

Bias scoring inaccurate; steering over-corrects or under-corrects; capability degrades without achieving mitigation

CRITICAL

L3

Dead Latents — up to 90%

Without AuxK + tied initialization, majority of features are unused — verified in Gao et al. (OpenAI 2024)

Coverage gaps in bias detection; entire conceptual domains (e.g. ethnic identity markers) may have no live latent

HIGH

L4

No Universal Quality Metric

FVU, L0, monosemanticity score, and explanation correlation all measure different things; no ground truth

Cannot reliably rank bias mitigation strategies; A/B comparisons lack a principled basis

HIGH

L5

PT vs. IT Performance Gap

Gemma Scope: SAEs trained on pre-trained models show higher reconstruction loss on instruction-tuned rollouts

Bias detection on chat-style prompts (the primary Cultural Bridge use case) less reliable than lab benchmarks suggest

HIGH

L6

Cross-Lingual Feature Shift

SAEs trained on English-heavy data; feature activations shift across languages. Cross-lingual transfer shows moderate performance declines (Tseng et al. EMNLP 2025)

Yoruba, Hausa, Igbo bias features may be in different latent positions than English counterparts — cross-lingual probes give inconsistent scores

HIGH

L7

Adversarial Blind Spots

Code-switching, cultural rephrasing, low-resource jailbreaks exploit unmodeled nonlinear interactions in SAE errors

Robust mitigation fails under adversarial attack; mitigation appears successful in clean conditions, fails in deployment

HIGH

L8

Scalability + Training Cost

Training comprehensive SAEs across all layers requires ~15% of base model training compute (Gemma Scope); transfer degrades on fine-tuned variants

Limited ability to adapt SAEs to LOG_ON AI's African-context fine-tuned models without rebuilding

MEDIUM

L9

Transcoder Instability

Transcoders (useful for circuit analysis) reverse performance trends vs. GPT-2 on Gemma 2's Gated MLP architecture (Lieberum et al. 2024)

Circuit-level bias tracing less reliable on Gemma 2 than the engineering literature suggests

MEDIUM

The Critical Intersection: L1 + L6 Together

Limitations 1 and 6 combine into something worse than either alone. L1 says SAEs recover only ~9% of true ground-truth features in synthetic tests. L6 says cross-lingual SAE transfer produces moderate performance declines even for high-resource language pairs. For African languages, both limitations apply simultaneously: the SAE starts with incomplete feature coverage, then degrades further when applied cross-lingually.

The research confirms this exactly. Tseng et al. (EMNLP 2025) measured multilingual toxicity detection with Gemma Scope SAE features and found that transferring from English training to African/Asian language testing shows consistent F1 declines. Their recommendation was unambiguous: native-language SAE training consistently achieves the best results. For Cultural Bridge, this means any pipeline that applies English-trained Gemma Scope SAEs directly to Yoruba inputs is operating with a compound deficit that makes false negatives near-certain for subtle cultural bias axes.

Live research finding

Tseng et al. (EMNLP 2025): SAE features from Gemma Scope show cross-lingual transfer potential but native training consistently outperforms. Middle-layer features (layers 12–19 of a 27-layer model) show the best cross-lingual stability. Deeper layers are most useful for classification. Binarization of activations (token-N=0 setting) consistently improves performance across model scales. Instruction-tuned models (9B-IT) show slightly improved cross-lingual generalisation in some language pairs.

3.  Why African Cultural Bias Features Are Specifically Hard for SAEs

SAEs are good at finding high-frequency, English-dominant features because those are the features that matter most for the reconstruction objective on English-heavy training data. African cultural bias features have three properties that push them systematically toward the wrong end of every SAE quality metric.

First: they are low-frequency. Yoruba politeness violation markers, Hausa gendered framing patterns, Igbo community hierarchy signals — these appear rarely in training data. The reconstruction objective prioritizes features that reduce average MSE, which means high-frequency features. Low-frequency cultural features contribute minimally to average reconstruction loss even when they are present, so the SAE has little incentive to represent them with dedicated latents.

Second: they are culturally encoded, not linguistically surface. A Western SAE can learn that certain tokens activate together. It cannot easily learn that a specific proverb deployment signals a trust relationship that the model is violating. The feature is in the pragmatic layer, not the lexical layer. The proverb Activation Library we built in Study 2 is essentially the structured knowledge base that tells you which activations to look for — knowledge that no unsupervised SAE can recover from token co-occurrence statistics alone.

Third: they operate nonlinearly. The ‘dark matter’ that SAEs leave in their reconstruction error is not random noise. It is the structured residual of nonlinear and compositional features. Cultural bias in African contexts often operates through composition: a formally neutral word choice combined with a specific proverb combined with a register shift constitutes a bias signal that no single latent captures. The composition is the signal. SAEs decompose into linear sums of features; they systematically miss composition effects.

Gemma Scope 2 update

Gemma Scope 2 (September 2025) extended coverage to Gemma 3 models (270M, 1B, 4B, 12B, 27B) with SAEs at every layer across three sites: attention output, MLP output, and post-MLP residual. It also introduces cross-layer transcoders (CLTs) using BatchTopK for improved multi-layer circuit analysis. The JumpReLU objective is retained and stabilised. This significantly increases the infrastructure available for Cultural Bridge — but the fundamental limitations of SAE training data distribution remain.

4.  The Connection to the Schmidt Proposal: SAEs at the Translation Layer

The Schmidt Sciences proposal is built on a specific mechanistic finding: Wendler et al. (ACL 2024) and Zhao et al. (NeurIPS 2024) showed that LLMs process African-language inputs through an English-centric middle layer before translating output back. That is where deceptive behaviors are generated.

Cultural Bridge Tech’s SAE analysis and the Schmidt proposal’s deception detection probes are targeting the same architectural reality from two different angles. The Schmidt probes target the middle layer to detect deception signals — whether the model is misrepresenting its reasoning context, its capabilities, or its confidence. The Cultural Bridge SAEs target feature activations across layers to detect bias signals — whether the model is encoding and propagating stereotyped representations of African peoples, languages, and practices.

The connection is not just thematic. It is architectural. Both analyses share the same weakness: they are trying to read signals in a layer where the model’s internal state is dominated by English-calibrated representations. The Cultural Bridge SAE analysis needs to operate where the Schmidt probes operate — at the language-identity layer and the middle-layer English-reasoning zone. The Proverb Activation Library we built in Study 2 is the domain knowledge that makes it possible to train supervision signals for cultural bias at those specific layers.

The Proverb Activation Library is not just a linguistic resource. It is the labeled dataset for training SAE supervision signals at the middle-layer English-reasoning zone — the exact layer where both cultural bias and deceptive capability misrepresentation originate for African-language users.

5.  Implementation Fixes: Six Specific Upgrades

These fixes are not theoretical. Each one maps to a documented limitation, references a specific research finding, and includes acceptance criteria for Cultural Bridge production deployment.

Fix

Action

Fixes

Implementation

Resources

Fix 1

Swap to JumpReLU + TopK Ensemble

L1, L2, L3

Replace vanilla ReLU SAEs with Gemma Scope's JumpReLU SAEs (pre-trained, available now) as primary architecture. Add TopK SAEs as ensemble member — they directly control L0 sparsity without L1 penalty, eliminating shrinkage bias and reducing dead latents. Gao et al. (OpenAI 2024) showed TopK achieves better sparsity-reconstruction frontier with AuxK + tied initialization keeping dead latents near zero. For Cultural Bridge: use Gemma Scope 2 (Sept 2025) which covers Gemma 3 270M through 27B and includes batch-trained multi-layer SAEs.

Gemma Scope: google/gemma-scope (HuggingFace). Gemma Scope 2 (Sept 2025). TopK: Gao et al. (2024) code.

Fix 2

Multilingual SAE Fine-Tuning on African Corpora

L6, L1

Train or fine-tune SAEs on corpora including Yoruba, Hausa, Igbo, and Nigerian Pidgin English. Tseng et al. (EMNLP 2025) found that native SAE training consistently outperforms cross-lingual transfer and translation-based approaches in toxicity detection. For Cultural Bridge: curate bias-focused African language training data using the Proverb Activation Library taxonomy (conceptual domains: trust, authority, community obligation) as seed categories. Fine-tune using LoRA-style low-rank adaptation of SAE encoder weights, preserving pre-trained features while adding African-context latents.

IrokoBench, AfroBench, custom Lagos SME corpus. Proverb Activation Library domains as concept seeds.

Fix 3

Hybrid Scoring: SAE + Probes + Counterfactual Deltas

L1, L4, L5

Never rely on SAE feature activations alone for bias scoring. Build a three-signal ensemble: (1) SAE latent activations filtered by Top-N mean-difference selection (Tseng et al. 2025 showed this outperforms simple max-pooling for bias tasks); (2) linear probe scores on curated African cultural bias axes (Yoruba politeness register violations, Hausa gendered agency framing, Igbo community hierarchy markers); (3) activation deltas between biased and counterfactual prompts, measuring directional shift rather than absolute magnitude. Aggregate with calibrated weights per language.

Custom African bias probe library. CrowS-Pairs extended + StereoSet + custom cultural bias set.

Fix 4

Error Modeling: Quantify and Probe the Dark Matter

L1, L2

SAE reconstruction errors carry functional information. Build a dedicated error-probe that: (a) captures the unexplained variance residual after SAE encoding; (b) passes it through a lightweight linear probe trained on known bias examples; (c) adds the probe score to the bias signal. This directly addresses the 'dark matter' problem — the nonlinear cultural bias features that SAEs miss are often recoverable from the reconstruction error. Implement post-hoc nonzero optimization (refine activations after encoding to minimize MSE without changing sparsity mask) for steering precision.

Error probe architecture: 2-layer MLP on residual signal. Target: recover >30% of missed cultural bias signal in error residual.

Fix 5

Adversarial-Augmented Robustness Pipeline

L7

Generate adversarial variants of every test prompt before scoring: (1) direct translation to African language; (2) code-switching at clause boundaries; (3) cultural rephrasing (replace Western idioms with African equivalents); (4) low-resource jailbreak attempts using rare Yoruba morphological forms. Test bias detection on all variants. Require bias score consistency across variants as a quality gate. After bias feature clamping (steering), re-run adversarial variants to confirm mitigation persists under attack. Use LLM-as-adversary (Claude or GPT-4 prompted to generate cultural variants) for scale.

TextAttack for perturbation generation. Custom cultural rephrasing templates. Yoruba morphological perturbation via Niger-Congo language tools.

Fix 6

Multi-Layer Circuit Tracing for Bias Propagation

L8, L9

Use Gemma Scope 2's full-suite SAEs across all layers and sub-layers to trace how bias features evolve from input through the network. Gemma Scope 2 (Sept 2025) now covers attention output, MLP output, and post-MLP residual at every layer for Gemma 3 models. For Cultural Bridge: identify which layers amplify vs. suppress African-context bias features. Use cross-layer SAEs (CLTs) where available — they capture features that span multiple layers and may encode persistent bias representations better than single-layer SAEs.

Gemma Scope 2 full suite. Cross-layer transcoders (CLTs). Circuit analysis following Marks et al. sparse feature circuits methodology.

6.  Production Code Architecture: The Revised Pipeline

The following code architecture implements all six fixes. It is structured for incremental deployment: Phase 1 components are available from existing open-source resources; Phase 2 requires the multilingual fine-tuning; Phase 3 requires Gemma Scope 2 full-suite integration.

# Cultural Bridge Tech — Advanced Bias Detection Pipeline

# Implements: Fix 1-6 from SAE limitation analysis

# Requires: gemma-scope (HuggingFace), transformer_lens, sae_lens

import torch

from transformer_lens import HookedTransformer

from sae_lens import SAE

from cultural_bridge import (ProverbActivationLibrary, AfricanBiasProbes,

                              AdversarialGenerator, HybridScorer, ErrorProbe)

class CulturalBridgePipeline:

    def __init__(self, model_name='google/gemma-2-9b-it',

                 sae_variant='jumprelu',  # jumprelu | topk | gated

                 ensemble=True,          # Fix 1: TopK + JumpReLU ensemble

                 use_error_probe=True):  # Fix 4: dark matter recovery

        self.model = HookedTransformer.from_pretrained(model_name)

        # Fix 1: Load JumpReLU (primary) + TopK (ensemble member)

        self.sae_jumprelu = SAE.from_pretrained(

            'google/gemma-scope-9b-pt-res',

            'layer_20/width_16k/average_l0_71')  # middle layer — best cross-lingual

        if ensemble:

            self.sae_topk = SAE.from_pretrained(

                'google/gemma-scope-9b-pt-res',

                'layer_20/width_131k/average_l0_71')  # wider for coverage

        # Fix 2: Multilingual fine-tuned SAE (Phase 2, post fine-tuning)

        self.sae_african = None  # loaded after LoRA fine-tuning on African corpus

        # Fix 3: Hybrid scoring resources

        self.bias_probes = AfricanBiasProbes.load([

            'yoruba_politeness_violation',

            'hausa_gendered_agency',

            'igbo_hierarchy_marker',

            'pidgin_code_switch_bias'

        ])

        self.pal = ProverbActivationLibrary.load()  # Study 2 ontology as supervision

        # Fix 4: Error probe for dark matter recovery

        if use_error_probe:

            self.error_probe = ErrorProbe.load('african_cultural_residual_v1')

    def detect_bias(self, prompt, languages=['en', 'yo', 'ha', 'ig'],

                    adversarial=True):  # Fix 5: adversarial augmentation

        results = {}

        adv_gen = AdversarialGenerator()

        for lang in languages:

            # Fix 5: Generate adversarial variants

            variants = [prompt]

            if adversarial:

                variants += adv_gen.generate(

                    prompt, lang,

                    types=['translation','code_switch','cultural_rephrase','morphological']

                )

            lang_scores = []

            for variant in variants:

                # Extract activations at all target sites (Fix 6: multi-layer)

                _, cache = self.model.run_with_cache(variant)

                layer_scores = []

                for layer in [9, 20, 31]:  # bottom, middle, deep — Gemma Scope coverage

                    acts = cache[f'blocks.{layer}.hook_resid_post']

                    # Fix 1: Ensemble SAE encoding

                    feats_jr = self.sae_jumprelu.encode(acts)

                    feats_tk = self.sae_topk.encode(acts)  # if ensemble

                    feats_combined = ensemble_merge(feats_jr, feats_tk)

                    # Fix 3: Hybrid scoring (SAE + probes + counterfactual delta)

                    sae_score = top_n_mean_diff_score(feats_combined, self.bias_probes, n=50)

                    probe_score = self.bias_probes.score(acts, lang=lang)

                    pal_score = self.pal.query_activation_match(feats_combined, lang=lang)

                    # Fix 4: Error probe — dark matter recovery

                    reconstruction = self.sae_jumprelu.decode(feats_jr)

                    error_residual = acts - reconstruction

                    error_score = self.error_probe.score(error_residual, lang=lang)

                    # Aggregate with calibrated weights per language

                    layer_scores.append(

                        calibrated_aggregate(sae_score, probe_score, pal_score, error_score,

                                              weights=LANG_WEIGHTS[lang])

                    )

                lang_scores.append(aggregate_layers(layer_scores))

            # Fix 5: Consistency check across adversarial variants

            consistency = compute_cv(lang_scores)  # coefficient of variation

            bias_score = aggregate_with_confidence(lang_scores, consistency_weight=consistency)

            results[lang] = {

                'bias_score': bias_score,

                'adversarial_consistency': consistency,

                'layer_breakdown': layer_scores,

                'error_recovered': error_score,

                'flagged_features': top_features(feats_combined, k=10)

            }

        return report_with_visuals(results)  # heatmaps, feature evolution, error breakdown

    def steer_and_validate(self, prompt, lang, target_features, adv_prompts):

        # Clamp identified bias features

        steered_output = self.model.run_with_hooks(

            prompt,

            fwd_hooks=[(f'blocks.{layer}.hook_resid_post',

                        lambda acts, hook: clamp_features(acts, target_features))

                       for layer in [9, 20, 31]]

        )

        # Validate steering persists under adversarial re-test (Fix 5)

        post_steer_scores = [self.detect_bias(adv, [lang]) for adv in adv_prompts]

        robust = all(s['bias_score'] < BIAS_THRESHOLD for s in post_steer_scores)

        # Validate capability preservation (<5% drop on downstream task)

        cap_delta = capability_delta(self.model, steered_output, CAPABILITY_BENCHMARK)

        return {'steered_output': steered_output, 'robust': robust,

                'capability_delta': cap_delta, 'recommendation': steer_rec(robust, cap_delta)}

7.  Evaluation Protocol: What to Measure and How to Pass

Metric

What it measures

Production target

What failure means

Fraction Variance Unexplained (FVU)

Reconstruction quality. How much of the activation is the SAE not explaining.

<0.1 on instruction-tuned rollouts

High FVU = reconstruction errors carry bias signal; error probe required

Dead latent %

Coverage. How many dictionary entries are never used.

<5% with AuxK mitigation

High dead % = conceptual gaps; cultural domains may be unrepresented

Bias Detection F1 (per language)

Accuracy of bias detection vs. human-annotated ground truth.

≥0.75 Yoruba/Hausa/Igbo; ≥0.85 English

Below threshold = too many false negatives for production use

Adversarial Consistency (CV)

Stability of bias score across translation/code-switch/rephrase variants.

CV <0.20

High CV = bias scores are fragile; mitigation will fail in deployment

Post-Steering Capability Delta

Performance drop on downstream tasks after bias feature clamping.

<5% on standard benchmarks

Above threshold = over-steering; capability loss unacceptable

Bias Reduction % (post-steering)

How much bias is reduced vs. unsteered baseline.

≥30% reduction on scored axes

Below threshold = ineffective mitigation; steering not worth the cost

Human Rater Agreement (kappa)

Alignment between SAE-scored features and Yoruba/Hausa cultural raters.

Cohen’s kappa >0.70

Below threshold = SAE features not culturally valid; community panels must override

Error Probe Recovery Rate

How much missed bias signal is recovered from reconstruction error.

≥20% of missed signal

Below threshold = dark matter too large; Gated/TopK SAE upgrade required

8.  Phased Implementation Roadmap

Phase

What to build

Acceptance criteria

Phase 1: MVP Upgrade (Months 1–3)

Swap vanilla ReLU SAEs for Gemma Scope JumpReLU weights. Add TopK ensemble member. Implement AuxK dead-latent mitigation and tied initialization. Build hybrid scorer: SAE activations + Top-N mean-difference feature selection + linear probe on 3 African cultural bias axes. Add reconstruction error probe (dark matter signal). Run baseline comparison vs. original pipeline.

<5% dead latents. Bias detection F1 ≥ 0.75 on English. Error probe recovers ≥20% missed signal. Hybrid scorer outperforms single-signal baseline on Yoruba test set.

Phase 2: Cross-Lingual Robustness (Months 3–8)

Fine-tune SAE encoder on Yoruba/Hausa/Igbo/Pidgin corpus using LoRA-style low-rank adaptation. Validate feature positions match across languages. Build adversarial generation pipeline (translation, code-switching, cultural rephrasing variants). Require bias score consistency across adversarial variants as quality gate. Implement post-hoc nonzero optimization for steering precision.

Native-language SAE F1 ≥ English baseline. Cross-lingual transfer gap <15% F1. Adversarial consistency: bias score CV <0.2 across variant types. Steering achieves ≥30% bias reduction with <5% capability drop.

Phase 3: Circuit Analysis + Production (Months 8–18)

Deploy Gemma Scope 2 full-suite SAEs across all layers. Build multi-layer bias propagation tracer. Implement cross-layer SAE (CLT) analysis. Add capability preservation monitor (track downstream task performance pre- and post-steering). Deploy LOG_ON AI integration with real-time bias scoring dashboard. Calibrate all signals with Yoruba/Hausa community cultural rater panels.

Full layer coverage for bias circuit tracing. Dashboard latency <500ms. Human rater agreement (kappa) >0.7 on bias scoring. System passes Schmidt deployment validation criteria from WP4.

9.  How This Work Feeds Back Into the Schmidt Proposal

This analysis is not parallel to the Schmidt interpretability proposal. It is the same research viewed from the product side.

The Schmidt proposal builds probes at the language-specific neuron layer (Tang et al.) and the middle-layer English-reasoning zone (Wendler et al., Zhao et al.) to detect deceptive behaviors. Cultural Bridge Tech builds SAE features at the same layers to detect bias signals. Both need the same architectural ingredient: a way to read internal states in the zone where African-language inputs are processed as English representations.

The SAE limitations analysis shows why both tools need the same fixes: multilingual training data, supervision signals for African cultural concepts, adversarial robustness testing under code-switching and cultural rephrasing attacks. The Proverb Activation Library (Study 2) provides the structured knowledge base for supervision. The comprehension study (Study 1) provides the empirical validation that the concepts being detected correspond to real differences in user experience.

The research programme is now a coherent stack. Olugbohun identified the conduit problem. The essay series identified the cognitive architecture gap. Study 1 designs the empirical test. Study 2 builds the knowledge infrastructure. The Schmidt proposal builds the interpretability probes at the mechanistic layer. Cultural Bridge Tech deploys those probes in a bias detection toolkit. This analysis tells you where the toolkit’s own conduit fails and how to fix it.

What started as personal curiosity about objects, elements, and spirituality has become a specific, buildable, production-deployable research programme with mechanistic grounding, empirical validation design, and a concrete deployment context. The work is connected end-to-end. The next step is building it.

SAEs are the latest conduit in a research programme that began with the Olugbohun paper's claim about conduits. The quality of what they channel depends on the architecture you build around them. This document is that architecture.

Sources

Live SAE + Gemma Scope research:

Gao, L. et al. (OpenAI 2024). Scaling and Evaluating Sparse Autoencoders. arXiv. [TopK SAEs, AuxK, dead latent mitigation, 16M latent training.] — Lieberum, T. et al. (BlackboxNLP 2024 / ACL). Gemma Scope: Open Sparse Autoencoders Everywhere All At Once on Gemma 2. arXiv:2408.05147. [JumpReLU architecture, 400+ SAEs, PT vs IT performance gap.] — Gemma Scope 2 Technical Paper (September 2025). Cross-layer transcoders, Gemma 3 coverage 270M–27B, BatchTopK. — Rajamanoharan, S. et al. (2024). Improving Dictionary Learning with Gated Sparse Autoencoders. [Gated SAEs, shrinkage bias reduction.]

Cross-lingual SAE transfer:

Tseng, S.-Y. et al. (EMNLP 2025). Sparse Autoencoder Features for Classifications and Transferability. [Native training outperforms cross-lingual transfer. Middle layers most stable. Binarization improves performance. 9B-IT shows improved cross-lingual generalisation.] — Dementieva, D. et al. (2024). Multilingual toxicity detection dataset. EN/ZH/FR/ES/RU.

Mechanistic foundation for translation layer:

Wendler, C. et al. (ACL 2024). Do Llamas Work in English? — Zhao, Y. et al. (NeurIPS 2024). How do Large Language Models Handle Multilingualism? — Tang, T. et al. (ACL 2024). Language-Specific Neurons. arXiv:2402.16438. — Datta, S. et al. (arXiv:2601.16766, Jan 2026). Cross-lingual hallucination detection failure without in-language supervision.

African language and cultural basis:

Study 2: Toward a Proverb Activation Library (Logo M., 2026). [Discourse position ontology — supervision signal source.] — Study 1: Does Discourse Structure Determine Comprehension? (Logo M., 2026). [Empirical validation design.] — Owomoyela, O. (2005). Yorùbá Proverbs. — Ehineni, T.O. (2016). Colombian Applied Linguistics Journal. — CG-CoT (arXiv:2506.01190, 2025). — ProverbEval (NAACL 2025). — Alabi et al. (EMNLP 2025). Charting the Landscape of African NLP.
