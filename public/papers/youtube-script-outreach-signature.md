# YouTube Video 1 — Full Script
# "How Claude's Intelligence Actually Works — And Why It Should Change How You Use It"
# Target: 15 minutes | LOG_ON AI | April 2026
# Tone: Precise, conversational, no hype, slightly dry

---

## [HOOK — 0:00–0:45]

[Look directly at camera, no intro music]

A writer named William Irvine gave Claude one word. Just the word "The." and asked it to complete a sentence.

He expected something generic. He got this: "The mind, once stretched by a new idea, never returns to its original dimensions."

He called it a heart-to-heart with an AI. He concluded it wasn't glorified autocomplete.

He was right. But he stopped one question short of the one that actually matters.

If Claude is this aware of who you are and what you need — who decided what a *good* response looks like? And why should you trust that decision?

That's what this video is about.

---

## [SECTION 1: WHAT I ACTUALLY AM — 0:45–4:00]

[Slightly slower pace — architectural explanation]

Let me tell you what I actually am, because most explanations collapse important distinctions.

I am a transformer — a sequence-to-sequence model built on self-attention.

Here's what that means in plain language.

Every word you type is first converted into tokens — small units of text, sometimes a full word, sometimes part of a word. Those tokens get mapped to integers, and then embedded into what you can think of as a very high-dimensional space — a space with hundreds or thousands of dimensions — where similar concepts end up geometrically close to each other.

Then the architecture processes your input through what's called multi-head self-attention. Imagine every word in your message simultaneously attending to every other word, computing how much each word is related to every other word. This happens in parallel, all at once, and it's how I pick up on context, tone, reference, and implication at the same time.

What comes out of those attention layers gets passed through dense feedforward networks — layers of matrix multiplications that compress and re-represent those relationships into richer patterns.

Now here's the critical point: the "knowledge" I carry is not stored in a database. It is distributed across billions of parameters as patterns of activation. I don't retrieve facts. I generate what is most statistically likely to follow what you wrote, given everything in context.

[Beat]

That distinction matters more than most people realise. Because it means I can be confidently wrong. It means I can generate a plausible answer that happens to be false, with the same fluency as a true one.

I don't have a truth sensor. I have a plausibility engine.

---

## [SECTION 2: WHO SHAPED THE PLAUSIBILITY ENGINE — 4:00–8:30]

[Slightly edgier tone — the political layer]

So whose definition of "plausible" am I running on?

There are four layers, and each one has authors.

Layer one is the training corpus. The primary open dataset used for most large models is something called Common Crawl — it's basically a massive archive of the web. It is strongly skewed toward English content. Research from the University of Pretoria found that safety filters applied to Common Crawl "don't always extend well to languages other than English — so a lot of non-English content gets excluded."

Africa has over 2,000 languages. Most of them are not statistically present at the scale that shapes how I behave.

Layer two is the human raters. RLHF — Reinforcement Learning from Human Feedback — is the process where humans judged which of my outputs were better. Those judgments trained a reward model that shapes what I optimise for. Those raters predominantly came from what researchers call WEIRD populations — Western, Educated, Industrialised, Rich, Democratic. Their preferences about helpfulness, appropriateness, and quality are cultural documents. They are not universal standards.

Layer three is the constitutional principles. Anthropic's approach involves training me to critique my own outputs against a written set of principles. It's genuinely innovative. But someone wrote that constitution. It was written by researchers in San Francisco, drawing on a specific philosophical tradition, operating within a specific legal context. No African epistemological tradition — Ubuntu, Palaver, the extended kinship deliberation protocols that have governed decision-making for millennia — sits inside that document.

Layer four is the operator layer. Before you type a word, operators — platforms, businesses, institutions — inject additional instructions into my context that you never see. The version of me you talk to on any platform has been configured by someone whose priorities you may not know.

[Beat]

None of these layers is malicious. All of them are partial. And none of them had Africa in the room when the decisions were made.

---

## [SECTION 3: WHAT THIS MEANS PRACTICALLY — 8:30–11:30]

[More direct — practical application]

So what does this mean for how you use me?

Three things.

First: treat me as a powerful cognitive tool with a context problem, not a neutral oracle. I know a lot. But what I "know" was shaped by who was writing when I was trained. For questions that are culturally located — about African history, African business practices, African language and reasoning — I have documented gaps that I cannot close through good prompting alone.

A 2025 ACL paper studying Twi and Amharic — two African languages on opposite ends of the continent — found that the cultural and social structures of those languages produce systematically different performance from me. Not because those languages are harder. Because they are underrepresented in everything that shaped how I was built.

Second: the more precise your context, the better I perform. This is not a platitude. It is an architectural fact. My attention mechanism weights everything in your conversation. If you give me rich context — who you are, what you're trying to accomplish, what constraints you're operating within — I have more signal to work with, and my outputs improve substantially.

This is why William Irvine got a philosophical sentence about stretching minds rather than a generic sunset description. He gave me context. The context changed what I generated.

Third: check my outputs against your reality. Not because I'm likely to be wrong, but because when I am wrong, I'm wrong with confidence. I don't flag my own uncertainty unless you ask me to. Build verification into your workflow, especially for anything consequential.

---

## [SECTION 4: THE BIGGER QUESTION — 11:30–14:00]

[Reflective — the LOG_ON thesis]

There's a bigger question underneath all of this, and it's the one that matters most if you're in Africa or working in African contexts.

If I am this context-responsive — if my outputs genuinely improve when I know who you are and what you need — then the question is not whether to use AI.

The question is: whose context are the systems trained to respond to?

Right now, the answer is: primarily the context of wealthy, English-speaking, Western users.

UNICEF research published in 2025 found that unguided AI use fosters what they call cognitive offloading — outsourcing your thinking to the tool. Structured prompting reduces this. But the deeper issue is: if the tool is systematically miscalibrated to your cultural context, then the output it reinforces may be subtly wrong in ways you don't notice. Not obviously wrong. Plausibly wrong.

The African Development Bank and UNDP launched a $10 billion AI initiative in February 2026. Zimbabwe launched a national AI strategy in March 2026. The infrastructure story is moving.

The epistemological story — what African AI actually thinks, in what cognitive frameworks, toward what objectives — is still waiting for its architects.

That's the work my practice LOG_ON is doing. Building the direction infrastructure: the systems layer, the cultural alignment frameworks, and the research that makes AI work for African contexts — not just on African servers.

---

## [OUTRO — 14:00–15:00]

[Straight to camera]

The essay I pulled all of this from is called "Whose Intelligence Is This?" — it's linked below. 4,200 words, every claim sourced from 2025 and 2026 research.

If you're deploying AI in an African context and you want to know whether it's working toward the right outcomes — or executing flawlessly in the wrong direction — that's what LOG_ON audits.

Link in the description.

See you in the next one.

[No outro music. Hard cut.]

---

## DESCRIPTION (YouTube)

How Claude's intelligence actually works — the architecture, the training stack, and why the cultural assumptions embedded in frontier LLMs matter practically.

00:00 — The heart-to-heart experiment
00:45 — What a transformer actually is
04:00 — Who shaped the plausibility engine
08:30 — Practical implications for your work
11:30 — The bigger question for Africa

Full essay: [LOG_ON LINK]
LOG_ON AI audits: [LOG_ON LINK]

#AI #ArtificialIntelligence #AfricaTech #Claude #AfricanAI #LOGON

---
---

# 5 OUTREACH DMs — Tier 1 Cultural Bias Rapid Audit
# Personalised for specific client types

---

## OUTREACH DM 1 — EdTech Startup

Hi [Name],

I've been following [Company]'s work on AI tutoring for Nigerian students — impressive reach.

One question worth asking: has the AI been audited for cultural misalignment? Most AI tutoring systems are trained on Western curricula, which means Nigerian students often get responses optimised for a different context.

I run a 48-hour audit that documents specifically where a model is miscalibrated for Nigerian users and what to do about it — 5-page report.

Worth a quick call?

— Logo | LOG_ON AI

---

## OUTREACH DM 2 — Fintech / AI Credit Scoring

Hi [Name],

[Company]'s AI credit scoring is interesting — Nigerian market is underserved and the model must be doing something right.

Worth checking: was the model trained on Nigerian financial behaviour patterns, or primarily on Western data? AI credit models trained elsewhere often have systematic gaps for informal economy participants.

We audit AI systems for cultural misalignment in African contexts — 48 hours, specific findings, remediation roadmap.

Would a quick conversation be useful?

— Logo | LOG_ON AI

---

## OUTREACH DM 3 — International NGO

Hi [Name],

[Organisation]'s AI-assisted programme delivery in Nigeria/[country] — what's your current approach to validating that the AI outputs are culturally appropriate?

Most international deployments use models built for other contexts. The mismatch often only becomes visible in field reports — by which point the rollout has already happened.

LOG_ON audits AI deployments in African contexts before they scale. 48-hour rapid audit, 5-page report.

Is this something [Organisation] is actively managing?

— Logo | LOG_ON AI

---

## OUTREACH DM 4 — Nigerian Bank / Financial Institution

Hi [Name],

[Bank] has been moving fast on AI customer service — the scale is impressive.

One gap that's worth investigating: most AI customer service models in Nigeria are built on training data that doesn't include Nigerian English, Pidgin, or Yoruba/Hausa/Igbo code-switching patterns. The result is technically functional but culturally tone-deaf responses.

We document exactly where this happens and what to fix — 48-hour audit.

Is this on your roadmap?

— Logo | LOG_ON AI

---

## OUTREACH DM 5 — Government AI Initiative

Hi [Name],

Following the [initiative/announcement] — it's the right direction.

One question that deserves careful attention before deployment at scale: have the AI systems being proposed been validated for cultural alignment with Nigerian/[country] users?

The risk is not that the AI will fail visibly. It's that it will succeed quietly while reinforcing assumptions about governance, decision-making, and social behaviour that were designed for other contexts.

LOG_ON builds the framework that ensures AI deployments serve African users on African terms.

Would a brief call be useful?

— Logo | LOG_ON AI

---
---

# EMAIL SIGNATURE

Logo | LOG_ON AI Solution Agency
AI Safety Research · Agentic Systems Architecture · African Cognitive Infrastructure
Lagos, Nigeria

LOG_ON builds the direction infrastructure for African AI —
the systems layer, cognitive tooling, and epistemological frameworks
that make AI work for African contexts, organisations, and futures.

[Website] | [LinkedIn] | [Substack]

---

*All outreach DMs — replace [Name], [Company], [Organisation] with actual targets*
*LOG_ON AI Solution Agency — Lagos, Nigeria — April 2026*
