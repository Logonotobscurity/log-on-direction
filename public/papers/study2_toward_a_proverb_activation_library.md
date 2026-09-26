RESEARCH PROPOSAL · STUDY 2 OF 3

Toward a Proverb Activation Library

Constructing the first discourse position ontology for Yoruba oral tradition

March 2026  ·  Logo M.  ·  Research Programme: African Cognitive AI

Abstract

Proverb-based AI for Yoruba has a retrieval problem. CG-CoT (June 2025) demonstrated that RAG-based systems can retrieve contextually relevant proverbs, then explicitly named their missing piece: a structured cultural ontology that maps proverbs to the discourse contexts in which they function. This paper proposes that ontology. We call it the Proverb Activation Library (PAL). It annotates Yoruba proverbs across seven dimensions: simulation domain, conceptual domain, discourse position, speech act, relationship register, community specificity, and failure contexts. We describe the construction methodology: Owomoyela’s 5,235-proverb corpus as seed, Ehineni’s discourse structural framework as annotation guide, community panels in four locations as validation instrument. The output is an open-source machine-readable knowledge base that enables any LLM to select not just a relevant proverb but the right proverb at the right point in the discourse arc for the right community context.

1.  The Problem Proverb Systems Cannot Currently Solve

AI can retrieve a Yoruba proverb. It cannot deploy one.

The distinction matters. Retrieval answers the question: given this topic, which proverbs are relevant? Deployment answers the question: given this topic, this discourse position, this relationship, this community context, and this conversational goal, which specific proverb does what needs to be done here, and where in the arc does it go?

The entire field of proverb AI is working on retrieval. CG-CoT (arXiv 2506.01190, June 2025) built a retrieval system using RAG and chain-of-thought reasoning. ProverbEval (NAACL 2025) benchmarks models on proverb meaning identification. Both are genuine contributions. Both leave the deployment question unanswered.

Yankah (1989) named the reason. Proverb meaning is not located in the text of the proverb. It is located in the deployment. The same proverb carries different force when used early in a conversation to frame a problem, in the middle to reinforce an argument, and at the close to crystallise a lesson. It carries different weight when used peer-to-peer versus elder-to-younger. It carries different resonance in Lagos versus Ekiti. A system that retrieves the right proverb but places it in the wrong position in the discourse arc is not making a minor style error. It is doing the thing wrong.

Retrieving the right proverb is not the same as knowing where it goes. The Proverb Activation Library is the thing that knows where it goes.

2.  What the Field Explicitly Asked For

In June 2025, the CG-CoT paper named the gap with unusual precision for a future-work section:

Future work includes integrating structured cultural ontologies into the RAG corpus, experimenting with dynamic retrieval-triggered reasoning at different discourse positions, and validating outputs with native speaker panels. These extensions would transform CG-CoT from a meaning-retrieval system into a deployment-aware system.

That is a direct description of what the Proverb Activation Library provides. The CG-CoT authors built the retrieval mechanism and named the ontology as the piece they could not build. This paper builds it.

ProverbEval (NAACL 2025) makes the same gap visible from a different angle. Its benchmark tests three tasks: proverb meaning identification, metaphor interpretation, and sense disambiguation. All three measure what a proverb means. None measures whether the model knows when to use it, where to place it, or whether it is appropriate for this specific community. The evaluation suite is measuring the wrong question — the same critique the Week 3 essay made of AfroBench. The right evaluation question is: can the model deploy the proverb correctly, not just retrieve its meaning? The PAL is the knowledge base that makes that question answerable.

3.  What a Proverb Actually Does: A Closer Look

Start with a specific example. The proverb ‘Bí omí bá pọ̀, ẹjá kì í gbẹ̀’ — when water is plentiful, fish do not dry out — is typically used early in a discourse about abundance, protection, or communal support. It does not make an argument. It opens a world: water, fish, the conditions for life. The listener steps into that world and returns with the understanding that the speaker is about to explain a situation characterised by sufficiency, not scarcity.

Contrast with ‘Ịní yárá l’Ògún ńgbẹ’ — Ogun helps the faster man. This proverb carries divine authority (Ogun, the Yoruba deity of iron and competition) and is deployed late, as a seal. It is not a frame-setter. It is a crystalliser. It arrives after the argument has been made and closes it with the weight of tradition. Placing this proverb at the beginning of an explanation is not just wrong tonally. It is structurally incoherent — you are asking a conclusion to do the work of a premise.

Current AI systems have no mechanism for making this distinction. The CG-CoT system retrieves both proverbs as relevant to a topic about competitive advantage. It cannot know that one belongs at the start and one at the end. The PAL’s discourse position dimension solves this directly: each proverb is tagged with its canonical deployment position, and the multi-agent selection system queries for position as a hard constraint before relevance.

3.1  The seven dimensions in detail

#

Dimension

What it captures

Example annotation note

1

Simulation domain

The imagined world the proverb opens. What scene does the listener step into? What sensorimotor and social content is activated? This is the core of the proverb’s cognitive function. It is not the meaning. It is the world the meaning comes from.

‘Eni ba fọ́hun rọ fọ ọ́rọ̀ kan’ opens a farming world: planting, tending, slow harvest, the texture of food that has not rotted. The listener’s simulation is agricultural before it is ethical.

2

Conceptual domain

The abstract topic the proverb addresses: trust, leadership, patience, risk, community obligation. Separate from simulation domain because the same conceptual domain can be approached through different simulations.

Trust (conceptual) can be approached through the farming simulation above, or through a river-crossing simulation, or through a marketplace negotiation simulation. Different proverbs, same concept.

3

Discourse position

Early (frame-setting: establishes the conceptual world before argument begins), Middle (buttress: reinforces a claim that has been made), Late (crystallise: closes the arc and embeds the understanding). Deploying a crystalliser proverb early, before the story has created the need for crystallisation, is a discourse error.

A Yoruba speaker listening to an AI that places the proverb in the wrong position will notice. They may not name it. But something will feel wrong.

4

Speech act

What the proverb does in the social space of the conversation: establishes authority, invites reflection, expresses solidarity, issues a warning, closes negotiation. Proverbs are not only cognitive tools. They are social moves.

A warning proverb deployed as a solidarity marker confuses the listener about what the speaker intends. The content may be right. The social act is misread.

5

Relationship register

Whether the proverb is appropriate for elder-to-younger, peer-to-peer, professional, intimate, or formal-public contexts. Some proverbs that are appropriate among peers are patronising when used by a system or authority figure.

An AI deploying an elder-register proverb to a Yoruba professional explaining their own business to the AI is a register violation. Technically accurate. Socially wrong.

6

Community specificity

Whether the proverb is pan-Yoruba, regional (Lagos, Ibadan, Abeokuta, Ekiti), generational, or associated with specific occupational communities. A proverb that resonates in Ekiti may be unfamiliar or carry different weight in Lagos.

This dimension is the hardest to encode. It requires community panel validation rather than scholarly annotation. The panels are the instrument.

7

Failure contexts

Documented contexts where the proverb has been misused or produced unintended effects: where it sounds patronising, where it trivialises a serious matter, where it is associated with a specific political or religious group that might create unintended resonance.

This dimension is the safety layer. It is what prevents the system from deploying a proverb that is technically appropriate but operationally harmful.

The seven dimensions are not independent. A proverb’s simulation domain and discourse position are often correlated: framing proverbs tend to open broad, communal worlds; crystallising proverbs tend to invoke authority figures or divine forces. The relationships between dimensions are part of what the community panels will surface — they are knowledge that exists in the oral tradition and has never been formalised.

4.  Construction Methodology

The PAL is built in four phases. The scholarly annotation layer (Phase 1) and the community validation layer (Phase 2) are the two most critical. Neither can substitute for the other. The scholarly layer provides analytical precision and cross-referencing capability. The community layer provides the lived knowledge of how proverbs actually function that no scholarly source captures completely.

Phase

Activity

Output & duration

Phase 1 — Corpus seed

Take Owomoyela’s 5,235 proverbs as the base corpus. Initial annotation by research team using Ehineni’s discourse structural framework as the annotation guide. Each proverb receives preliminary scores on all seven dimensions. This phase can be completed by a trained annotation team without community panels — it is the scholarly annotation layer that the panels will then validate and correct.

5,235 entries × 7 dimensions annotated. 4 months with 3 annotators.

Phase 2 — Community validation

5-speaker community panels in each of four locations: Lagos, Ibadan, Abeokuta, and one Ekiti community. Panel members are chosen for generational breadth (two elders, two mid-generation, one young professional). They review the scholarly annotations and correct dimension scores based on lived community usage. Disagreements between panels are recorded as geographic or generational variation, not errors.

Community-validated annotations for all 5,235 entries. 4 months, running parallel with Phase 1 write-up.

Phase 3 — Failure context documentation

Separate panel process specifically for Dimension 7. Ask panels: ‘When have you heard this proverb used badly? What happened?’ Failure contexts are qualitative, not scored — they are documented as free-text warning notes attached to each entry. Some proverbs will have no documented failure contexts. Some will have extensive ones. Both are informative.

Failure context library for all proverbs where panels can identify failures. 3 months.

Phase 4 — Technical encoding

Convert the validated annotation database into OWL/RDF ontology format. Build query interface that allows: given [discourse position] + [conceptual domain] + [relationship register], return ranked candidate proverbs. Test query performance against expert Yoruba speaker judgments. Release under open licence.

Machine-readable PAL v1.0 in OWL/RDF. API documentation. 3 months. Companion technical paper.

The most important decision in the construction process is treating community panel disagreement as data rather than error. When a Lagos panel and an Ibadan panel annotate the same proverb differently, that is not a problem to be resolved by choosing one answer. It is evidence that the proverb carries different weight in different communities. The PAL encodes that variance. A system querying for a proverb appropriate for an Ibadan business professional will receive a different ranked list than one querying for a Lagos professional, even when the conceptual domain and discourse position are identical.

Panel disagreement is not error. It is the ontology doing its job: capturing the geographic and generational variation that a single scholarly annotation cannot see.

5.  What This Enables That Currently Does Not Exist

The PAL is infrastructure. Its direct value is not in what it produces by itself but in what it makes possible for systems built on top of it. Here are the five things that become buildable once the PAL exists:

CG-CoT deployment upgrade

The CG-CoT system retrieved relevant proverbs but could not place them correctly in the discourse arc. Querying the PAL for discourse position as a hard constraint before relevance turns CG-CoT from a meaning retrieval system into a deployment-aware system. The CG-CoT authors asked for exactly this.

ProverbEval deployment task

ProverbEval currently has three tasks, all measuring meaning. Adding a fourth task — given this discourse context, select the correct proverb — requires the PAL as the answer key. Without it, there is no ground truth for deployment correctness. With it, there is.

Multi-agent proverb selection

The Week 5 architecture proposed a three-agent proverb selection system: Discourse Context Agent, Proverb Knowledge Agent, Community Validation Agent. The Knowledge Agent’s knowledge base is the PAL. The Community Validation Agent’s validation criteria come from the PAL’s register and failure context dimensions. The three-agent system cannot be built without PAL v1.0.

Comprehension study stimulus materials

Study 1 (the controlled comprehension experiment) requires discourse-authentic matched-pair explanations. The linguist who validates those materials will use the PAL as the reference standard for what a correctly-positioned proverb looks like. The two studies depend on each other: the PAL ensures Study 1’s materials are authentic; Study 1’s results validate whether the PAL’s deployment logic produces the comprehension outcomes the theory predicts.

Extended benchmark for discourse intelligence

The four new benchmark task types proposed in Week 3 — proverb-completion inference, oral narrative arc completion, community validation, discourse connector identification — all require structured ground truth about Yoruba discourse logic. The PAL is that ground truth. These benchmarks cannot be built from translated English. They can be built from PAL queries.

6.  The Hard Questions This Project Has to Answer

There are three questions the PAL project cannot avoid and should not pretend to have resolved before construction begins.

6.1  Who decides what is correct?

The PAL will contain thousands of annotation decisions. Some will be contested. When the scholarly annotation disagrees with the community panel, the community panel wins. But which community? When the Lagos panel disagrees with the Ibadan panel, both are right within their own context. The PAL encodes geographic variance. But there will be cases where variance within a single community is high — where elders and young professionals in the same city annotate the same proverb differently because the proverb is carrying different generational weight.

The answer is not to resolve these disagreements but to encode them honestly. The PAL does not produce a single canonical Yoruba discourse. It produces a structured representation of how Yoruba discourse varies — which is more accurate and more useful than a standardised version would be. A system querying the PAL can specify context with enough precision to receive recommendations appropriate to its actual users.

6.2  Does formalising an oral tradition change it?

This is a serious question and it has no clean answer. The Yoruba oral tradition has survived, evolved, and been transmitted precisely because it is oral — because each deployment is a fresh act of contextual judgment, not a lookup in a database. Building a database of those judgments is a different kind of thing.

The honest position: the PAL is not a substitute for a Yoruba elder’s judgment. It is a structured approximation that makes machine-assisted deployment better than no deployment at all. The alternative to building the PAL is not preserving the oral tradition in its pure form. The alternative is AI that deploys proverbs randomly, by semantic similarity, without any structural knowledge of how they function. The PAL is better than that alternative. It is not better than a human who knows the tradition.

6.3  Can this methodology extend to Igbo and Hausa?

Yes, with necessary modification. Igbo discourse does not use proverbs in the same structural positions as Yoruba. Hausa has its own oral tradition with different deployment logic. The PAL methodology — community panels, seven-dimension annotation, OWL/RDF encoding — is a replicable framework. The specific dimensions and the weighting between them will need to be re-derived from within each language’s own tradition rather than imported from the Yoruba PAL.

The Yoruba PAL is version 1.0. It establishes the methodology. Versions 2.0 and 3.0 are for the research community to build.

Every system that wants to deploy African oral tradition in AI will need what the PAL provides. CG-CoT asked for it. ProverbEval needs it as an answer key. The multi-agent architecture depends on it. The comprehension study requires it for stimulus validation. The benchmarks the field needs are built on top of it.

It is the piece that has to come before everything else. Not because it is the most theoretically interesting component of the programme — it is not. The comprehension study is more theoretically interesting. The Bergen simulation test is more surprising. But the PAL is the knowledge base that makes all of them possible.

You cannot query for discourse intelligence without a structured representation of what discourse intelligence looks like. The PAL is that representation. Nothing else in the architecture functions at full capacity without it. Build it first.

Sources

Core literature:

Owomoyela, O. (2005). Yorùbá Proverbs. University of Nebraska Press. [The base corpus: 5,235 proverbs.] — Ehineni, T.O. (2016). A Discourse-Structural Analysis of Yorùbá Proverbs in Interaction. Colombian Applied Linguistics Journal, 18. [The annotation framework.] — Yankah, K. (1989). A theory of proverb praxis. Diasporic African Press. [The argument that deployment is meaning.] — Bergen, B.K. (2012). Louder Than Words. Basic Books. [The simulation mechanism: why the simulation domain dimension is the core.]

Live papers that named the gap:

CG-CoT: Culturally-Grounded Chain-of-Thought for Yoruba Proverb Interpretation. arXiv:2506.01190, June 2025. — ProverbEval: Exploring LLM Evaluation Challenges for Low-Resource Languages. NAACL 2025. — Alabi, Hedderich, Adelani & Klakow (2025). Charting the Landscape of African NLP. EMNLP 2025.

Technical implementation:

W3C OWL Web Ontology Language (2012). [Encoding format.] — Ki, J. et al. (2025). MACD: Multi-Agent Context Dialogue. arXiv:2601.12091. [The multi-agent architecture that will query the PAL.] — Adelani, D. et al. (2024). AfroBench. arXiv:2311.07978. [The benchmark context the PAL extends.] — Lewis, J.E. et al. (2024). Abundant Intelligences. Springer AI & Society. [The epistemic framework for community-grounded knowledge construction.]
