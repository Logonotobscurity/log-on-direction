export type PaperKind =
  | "Essay"
  | "Proposal"
  | "Audit"
  | "Grant"
  | "Spec"
  | "Field notes"
  | "Deck";

export type Paper = {
  slug: string;
  title: string;
  kicker: string;
  kind: PaperKind;
  date: string;
  words: string;
  excerpt: string;
  stream: string;
  file: string;
  mdFile?: string;
  related: string;
};

export const papers: Paper[] = [
  {
    slug: "whose-intelligence",
    title: "Whose Intelligence Is This?",
    kicker: "Essay No. 08",
    kind: "Essay",
    date: "April 2026",
    words: "~4,200 words",
    excerpt:
      "On the architecture of systems that think, the politics of who defines the objective, and why Africa’s cognitive infrastructure is not a development agenda — it is an existential one.",
    stream: "Cognitive sovereignty",
    file: "whose-intelligence-is-this.docx",
    mdFile: "whose-intelligence-is-this.md",
    related: "/essay",
  },
  {
    slug: "benchmark-paradox",
    title: "The Benchmark Paradox",
    kicker: "AfricaNLP @ ACL 2027",
    kind: "Proposal",
    date: "March 2026",
    words: "Full paper",
    excerpt:
      "Why current African NLP evaluation instruments invert quality judgements — scoring authentic Yoruba as error — and what to build instead: Study 1 plus the Proverb Activation Library.",
    stream: "Discourse competence",
    file: "benchmark_paradox_paper.docx",
    mdFile: "benchmark_paradox_paper.md",
    related: "/brief",
  },
  {
    slug: "study-1",
    title: "Does Discourse Structure Determine Comprehension?",
    kicker: "Study 1 of 3",
    kind: "Proposal",
    date: "March 2026",
    words: "Study protocol",
    excerpt:
      "First controlled empirical study of Yoruba cognitive architecture in AI explanation. 2×2 design, five outcomes, three pre-committed result interpretations.",
    stream: "Discourse competence",
    file: "study1_does_discourse_structure_determine_comprehension.docx",
    mdFile: "study1_does_discourse_structure_determine_comprehension.md",
    related: "/brief",
  },
  {
    slug: "study-2-pal",
    title: "Toward a Proverb Activation Library",
    kicker: "Study 2 of 3",
    kind: "Proposal",
    date: "March 2026",
    words: "Ontology spec",
    excerpt:
      "The first discourse-position ontology for Yoruba oral tradition. Seven dimensions. Owomoyela corpus. Community panels. The missing piece CG-CoT named.",
    stream: "Cultural Bridge Tech",
    file: "study2_toward_a_proverb_activation_library.docx",
    mdFile: "study2_toward_a_proverb_activation_library.md",
    related: "/execute",
  },
  {
    slug: "cultural-bridge-sae",
    title: "When the Microscope Has Blind Spots",
    kicker: "Cultural Bridge Tech",
    kind: "Audit",
    date: "March 2026",
    words: "Technical analysis",
    excerpt:
      "Nine SAE + Gemma Scope failure modes for African cultural bias detection, six production fixes, and a phased pipeline that does not ship false negatives as “no bias”.",
    stream: "Cultural Bridge Tech",
    file: "cultural_bridge_sae_analysis.docx",
    mdFile: "cultural_bridge_sae_analysis.md",
    related: "/brief",
  },
  {
    slug: "schmidt-proposal",
    title: "Detecting Deception Where It Hides",
    kicker: "Schmidt Sciences 2026",
    kind: "Grant",
    date: "May 2026",
    words: "$947,343 · 24 months",
    excerpt:
      "Cross-lingual interpretability for LLM deception detection in African language deployment. Whitebox probes at the translation layer — the gap current English-only tools cannot see.",
    stream: "Interpretability",
    file: "schmidt_2026_proposal_REVISED_final.docx",
    mdFile: "schmidt_2026_proposal_REVISED_final.md",
    related: "/brief",
  },
  {
    slug: "schmidt-audit",
    title: "Does Our Proposal Pass?",
    kicker: "Internal compliance audit",
    kind: "Audit",
    date: "March 2026",
    words: "RFP line-by-line",
    excerpt:
      "Four submission blockers for Schmidt 2026: Track 3 scope, whitebox advantage argument, deception definition fit, named interpretability co-PI. All fixable.",
    stream: "Interpretability",
    file: "schmidt_compliance_audit.docx",
    mdFile: "schmidt_compliance_audit.md",
    related: "/papers/schmidt-proposal",
  },
  {
    slug: "research-ideas",
    title: "Research Inspiration Audit — 21 Ideas",
    kicker: "4-pathway analysis",
    kind: "Proposal",
    date: "March 2026",
    words: "24 papers · 5 streams",
    excerpt:
      "Future-work mining, conflict detection, methodology pivots, and cross-field synthesis across the African Cognitive AI programme. Ranked 0.30N + 0.20F + 0.50I.",
    stream: "African Cognitive AI",
    file: "research_ideas_proposals_african_cognitive_ai.docx",
    mdFile: "research_ideas_proposals_african_cognitive_ai.md",
    related: "/brief",
  },
  {
    slug: "smme-audit",
    title: "Agentic AI Frameworks in SMMEs",
    kicker: "Triple-skill research audit",
    kind: "Audit",
    date: "March 2026",
    words: "Olujimi et al. 2025",
    excerpt:
      "Claim map, 12 mined ideas, and a four-phase build plan connecting the SMME agentic literature to discourse-native African agent architecture.",
    stream: "AgentBridge Africa",
    file: "smme_agentic_ai_research_audit.docx",
    mdFile: "smme_agentic_ai_research_audit.md",
    related: "/execute",
  },
  {
    slug: "agentbridge-spec",
    title: "AgentBridge Africa + AgentBase",
    kicker: "Technical specification",
    kind: "Spec",
    date: "2026",
    words: "MIT · production + pilot",
    excerpt:
      "Lagos-compatible multi-agent orchestration and WhatsApp-first workflow middleware. CRDTs, Paystack, nanopayments, 500-business pilot.",
    stream: "AgentBridge Africa",
    file: "11_agentbridge_agentbase_spec.md",
    mdFile: "11_agentbridge_agentbase_spec.md",
    related: "/execute",
  },
  {
    slug: "youtube-outreach",
    title: "YouTube Script + Outreach DMs",
    kicker: "Content waterfall",
    kind: "Field notes",
    date: "April 2026",
    words: "15-min script + 5 DMs",
    excerpt:
      "Full camera script for “How Claude’s Intelligence Actually Works”, five Tier-1 audit DMs, and the LOG_ON email signature.",
    stream: "Distribution",
    file: "youtube-script-outreach-signature.md",
    mdFile: "youtube-script-outreach-signature.md",
    related: "/execute",
  },
  {
    slug: "direction-mindmap",
    title: "The Direction Problem — Mind Map",
    kicker: "3-source synthesis",
    kind: "Field notes",
    date: "April 2026",
    words: "Interactive original",
    excerpt:
      "Williams, Derosiaux, and Koe mapped onto one failure: execution running ahead of understanding. Six threads. Six recommendations.",
    stream: "Direction infrastructure",
    file: "direction-problem-mindmap.html",
    related: "/map",
  },
  {
    slug: "strategy-deck",
    title: "LOG_ON Direction Infrastructure",
    kicker: "Strategy deck",
    kind: "Deck",
    date: "April 2026",
    words: "22 slides · PPTX",
    excerpt:
      "The full argument in slide form: Direction Problem, LFA, offer stack, research programme, Schmidt, AgentBridge, 30-day run plan.",
    stream: "Direction infrastructure",
    file: "LOG_ON-Direction-Infrastructure.pptx",
    related: "/",
  },
];

export function getPaper(slug: string) {
  return papers.find((p) => p.slug === slug);
}

export const paperKinds: PaperKind[] = [
  "Essay",
  "Proposal",
  "Audit",
  "Grant",
  "Spec",
  "Field notes",
  "Deck",
];
