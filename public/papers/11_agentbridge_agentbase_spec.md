# AgentBridge Africa + AgentBase
## Technical Specification and Project Documentation

**Oluwamayowa (Logo)**
LOG_ON AI Solution Agency · Lagos, Nigeria
logonthepage@gmail.com

**AgentBase licence:** MIT (open-source)
**AgentBridge Africa licence:** MIT (open-source)
**Status:** AgentBase — production (deployed across client workflows)
         AgentBridge Africa — prototype → pilot deployment phase

---

# Part 1: AgentBase
## Open-Source Multi-Agent Orchestration Framework

---

## 1.1 What AgentBase Is

AgentBase is a lightweight, MIT-licensed Python framework for building,
coordinating, and deploying multi-agent AI systems. It abstracts the orchestration
layer — the logic that decides which agent runs when, with what context, in what
order — so that practitioners can define agent behaviour without writing
boilerplate coordination code.

It is not LangChain. It is not CrewAI. It is not AutoGen. Those frameworks are
powerful and AgentBase is interoperable with all of them. The difference is scope:
AgentBase solves a narrower problem, more completely. It handles the coordination
and state management layer only, without imposing a conversation paradigm,
a tool use convention, or an execution model. Those choices belong to the
application, not the framework.

The design was driven by a specific observed gap: in production deployments for
Lagos-based clients, the most brittle component was always the orchestration logic.
A single-agent system that calls one LLM is robust. A multi-agent system that
coordinates five agents, manages state between calls, handles API failures,
and recovers from partial completions — that system requires coordination
infrastructure that existing frameworks make more complex than necessary.
AgentBase was built to simplify that layer.

---

## 1.2 Core Architecture

**Agent abstraction:**
```python
from agentbase import Agent, Task, Crew

researcher = Agent(
    role="Research Agent",
    goal="Extract and synthesise relevant information",
    model="claude-3-5-sonnet",
    tools=[web_search, document_read]
)

writer = Agent(
    role="Output Agent",
    goal="Produce clear, structured output from research",
    model="gpt-4o",
    tools=[format_output]
)
```

**Task and dependency graph:**
```python
research_task = Task(
    description="Research the question: {query}",
    agent=researcher,
    output_schema=ResearchOutput
)

write_task = Task(
    description="Write a response based on: {research}",
    agent=writer,
    depends_on=[research_task]
)
```

**Crew orchestration:**
```python
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, write_task],
    process="sequential",          # or "parallel", "hierarchical"
    memory=RedisMemoryStore(),     # optional persistent memory
    retry_policy=ExponentialBackoff(max_retries=3)
)

result = crew.kickoff(inputs={"query": "..."})
```

---

## 1.3 Key Design Principles

**Principle 1 — No framework lock-in:**
AgentBase wraps any LLM (via LiteLLM), any tool (via function decorator),
and any memory store (via abstract interface). Switching from Claude to GPT-4
is a one-line change. Migrating from Redis to Postgres memory is three lines.

**Principle 2 — Explicit over magic:**
Every AgentBase object is inspectable. The execution graph is visible before
and after runs. State transitions are logged with full context. No hidden prompt
injection, no automatic system message modification, no invisible retries.

**Principle 3 — Production-first reliability:**
AgentBase is built for intermittent connectivity environments. All API calls
use exponential backoff with configurable retry limits. Partial completions
are checkpointed so runs can resume after failure without restarting from scratch.
State is serialisable to any storage backend.

**Principle 4 — Lagos-compatible compute footprint:**
The core framework has zero GPU requirements. All orchestration runs on CPU.
LLM inference is delegated to external APIs (cloud-based) or optional local
deployment via Ollama. A $6/month VPS runs the full orchestration layer.

---

## 1.4 Current Production Use

AgentBase is the orchestration layer for:

- **HouseHunter** — Lagos property intelligence agent. Coordinates three agents:
  a property database agent (Lagos State records + listing scrapers), an
  analysis agent (price-per-sqm, neighbourhood trend analysis), and a
  recommendation agent (matches client requirements to available properties).

- **GigPilot** — African freelance workforce automation. Coordinates five agents
  across job matching, proposal generation, LMS content delivery, client
  communication, and payment processing integration.

- **Job Application Command Centre** — Multi-agent system for tailored
  application generation (cover letters, alignment scoring, CV adaptation)
  across 36 job descriptions simultaneously.

- **LOG_ON Client Deployments** — 4 active client automation pipelines
  running AgentBase coordination across WhatsApp + Paystack + inventory
  integrations.

---

## 1.5 Roadmap

**v0.2 (Q3 2026):** AgentBridge Africa integration hooks.
Native connectors for Paystack, Flutterwave, Opay, and WhatsApp Business API
added as first-class AgentBase tools, enabling zero-configuration integration
for Nigerian payment and communication infrastructure.

**v0.3 (Q4 2026):** Yoruba/Pidgin/Igbo language configuration.
Natural language agent configuration in Yoruba, Nigerian Pidgin, and Igbo —
users define agent goals and task descriptions in their language; AgentBase
handles the translation to internal configuration.

**v1.0 (Q1 2027):** Full AgentBridge Africa integration + community template
library. Public library of AgentBase workflow templates contributed by the
AgentBridge Africa developer community.

---

# Part 2: AgentBridge Africa
## AI Agent Orchestration Middleware for Lagos Micro-Businesses

---

## 2.1 What AgentBridge Africa Is

AgentBridge Africa is the SME-facing deployment layer built on AgentBase.
Where AgentBase is a developer framework, AgentBridge Africa is a product:
it makes multi-agent automation accessible to Lagos micro-business owners
without requiring technical knowledge, English literacy, or access to
laptop/desktop hardware.

The product takes a single insight seriously: Lagos business owners know exactly
what they want their systems to do. They lack the infrastructure to express
that intent in machine-executable form. AgentBridge Africa closes that gap by
letting users express their intent in the language and interface they already use —
Yoruba, Pidgin, or plain Nigerian English, via WhatsApp — and translating that
intent into running automation.

---

## 2.2 Design Constraints Specific to Lagos

Every design decision in AgentBridge Africa is constrained by five Lagos
operating realities that existing automation tools ignore:

**Constraint 1 — Intermittent connectivity:**
Lagos network connectivity drops multiple times per day. An automation that
fails silently when the network drops is not a working automation. AgentBridge
uses CRDT (Conflict-free Replicated Data Type) conflict resolution for offline
state management: workflows queue locally during outages and execute on
reconnection, with guaranteed consistency.

**Constraint 2 — Mobile-only access:**
Most Lagos micro-business owners do not have reliable laptop or desktop access.
Business is managed on mobile. AgentBridge Africa is configured entirely via
WhatsApp Business API or a lightweight Android interface. No browser, no
desktop software, no laptop required.

**Constraint 3 — Cost constraints:**
A Zapier subscription ($25–$599/month) costs more than many Lagos micro-traders
earn in a week. AgentBridge Africa is designed for a $6/month VPS deployment.
No per-seat fees. No per-workflow charges. Self-hosted.

**Constraint 4 — Multi-language configuration:**
Lagos business owners communicate in Yoruba, Pidgin, Igbo, and English —
often code-switching mid-conversation. AgentBridge Africa accepts workflow
configuration in all four and any mix of them.

**Constraint 5 — Informal business structures:**
Most Lagos micro-businesses do not use formal accounting software, CRM systems,
or inventory management tools. Their data lives in WhatsApp chats, handwritten
notebooks, and the owner's memory. AgentBridge Africa is built to integrate
with informal data sources, not only formal business software.

---

## 2.3 Core Workflow Engine

**Natural language workflow definition:**

User (via WhatsApp): *"When customer pay on Paystack, send them WhatsApp receipt
and add to my sales book for today"*

AgentBridge processes this into:

```
TRIGGER: Paystack webhook (payment.complete)
ACTIONS:
  1. WhatsApp_send(
       to: payment.customer_phone,
       template: "receipt",
       data: {amount, item, date}
     )
  2. Sheets_append(
       sheet: "Sales_{today}",
       row: {customer, amount, item, timestamp}
     )
```

The user never sees the configuration. They describe what they want.
AgentBridge builds and runs it.

**Supported integrations (v1.0):**

| Category | Integrations |
|----------|-------------|
| Payments | Paystack, Flutterwave, Opay, PalmPay |
| Communication | WhatsApp Business API, SMS (Termii) |
| Data storage | Google Sheets, Airtable, local SQLite |
| Delivery / logistics | Kwik, Sendbox |
| Inventory | Custom lightweight inventory module |
| AI capabilities | LLM text generation, PAL proverb lookup (via DNES) |

---

## 2.4 Offline-First Architecture

The most technically demanding aspect of AgentBridge Africa is the offline-first
design. Standard webhook-based automation assumes persistent connectivity.
In Lagos, that assumption fails daily.

**CRDT-based state management:**

AgentBridge Africa uses a CRDT (specifically, a state-based CRDT with vector
clocks) for all workflow state. When connectivity drops:

1. Workflow triggers that fire during the outage are queued in local device storage
2. The CRDT records the local state changes with vector clock timestamps
3. On reconnection, the CRDT merges local and server state automatically
4. Conflicts (e.g., two payments processed while offline) are resolved
   deterministically without requiring user intervention

This is the same conflict resolution mechanism used in distributed database
systems (Riak, CouchDB). AgentBridge Africa applies it at the workflow level for
single-node mobile deployments.

---

## 2.5 Open-Source Sustainability Model

AgentBridge Africa has a sustainability model designed for the African open-source
context: one that does not depend on continued external grant funding,
does not charge end users, and creates genuine economic incentives for
African developers to contribute.

**Circle USDC Nanopayments:**

AgentBridge Africa uses Circle's USDC nanopayment infrastructure to create a
micro-revenue stream for open-source contributors. Mechanics:

- Every time a workflow template from the community library executes,
  a fraction-of-a-cent payment (in USDC) flows to the template author
- Template authors are African developers who publish workflow templates
  to the shared library
- Payments are batched and settled weekly at zero gas cost via Circle's
  payment rails
- Business owners pay nothing; the workflow execution cost already covers
  the nanopayment amount

A popular workflow template (e.g., "WhatsApp receipt on Paystack payment")
executing 10,000 times/month across the Lagos user base generates ~$0.50 for
its author. Small in absolute terms. Meaningful as part of a portfolio, and
meaningful as a signal: African developers can earn from open-source contributions
to African infrastructure.

---

## 2.6 Pilot Programme: 500 Lagos Businesses

The first deployment cohort targets 500 Lagos micro-businesses across four
market verticals:

| Vertical | Target businesses | Primary use case |
|----------|------------------|------------------|
| Market traders (Balogun, Alaba) | 150 | Payment receipt + sales tracking |
| Fashion / tailoring studios | 100 | Order management + delivery notification |
| Food vendors (suya, buka) | 125 | Order queue + daily revenue summary |
| Logistics / dispatch riders | 125 | Job assignment + payment confirmation |

**Pilot success metrics:**
- Time saved per business per week (target: ≥ 2 hours)
- Workflow reliability rate (target: ≥ 95% execution success)
- 30-day retention (target: ≥ 70% still active after 30 days)
- Net Promoter Score (target: ≥ 50)

---

## 2.7 Fellowship Integration: Google Data Center Community AI Fellowship

The Google Data Center Community AI Fellowship (Watson Institute × Google)
provides the resources to move from prototype to pilot deployment:

- **$1,000 stipend + Google AI credits:** Covers API costs for the 500-business
  pilot (LLM inference, Paystack webhooks, WhatsApp Business API)
- **Google AI tools access:** Applied to fine-tuning the natural language
  interface for Yoruba, Pidgin, and Igbo workflow configuration
- **Watson Institute mentorship:** Programme support for community deployment
  methodology and impact measurement

**16-week fellowship goals:**
1. AgentBridge Africa v1.0 deployed across 500 Lagos businesses
2. Full codebase published MIT on GitHub
3. Independent impact measurement: time saved, workflow reliability, NPS
4. Yoruba/Pidgin/Igbo NLI fine-tuned and deployed

---

## 2.8 Connection to the Research Programme

AgentBridge Africa is not a separate product from the research programme.
It is Phase 4 of the 30-month build architecture — the deployment infrastructure
into which the Discourse Reframing Layer (DRL) will integrate.

When DRL v1.0 is complete (Month 27 of the 30-month programme), AgentBridge
Africa users will be able to toggle "Oral Tradition Format" for any AI-generated
explanation in their workflows. A health information workflow that currently
produces clinical English output will produce proverb-anchored Yoruba output.
A civic information workflow will produce communal-framing format output.

The deployment infrastructure is what makes the research programme matter in
practice. Proving that oral tradition discourse structures improve comprehension
(Phase 1) is the evidence. Building the tool that delivers those structures at
scale (Phase 4 / AgentBridge Africa) is the impact.

---

## References

Circle. (2024). *USDC Programmable Payments Documentation*. Circle Developer Docs.

CRDT Research Group. (2011). *A Comprehensive Study of Convergent and
Commutative Replicated Data Types*. INRIA Technical Report.

LOG_ON AI Solution Agency. (2025). *AgentBase v0.1* [Software]. MIT Licence.
Lagos, Nigeria. GitHub repository.

Paystack. (2026). *Paystack API Documentation*. Lagos: Paystack Inc.

WhatsApp. (2026). *WhatsApp Business Platform API Documentation*.
Meta Platforms Inc.
