/**
 * Writing / blog posts.
 * Tone: first-person engineering notes — challenges, decisions, diagrams.
 * Do not invent metrics; keep claims qualitative unless measured.
 */

export type WritingPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
};

export const writingPosts: WritingPost[] = [
  {
    slug: "rag-that-earns-citations",
    title: "RAG That Earns Citations: What Broke Before Agents Got Useful",
    excerpt:
      "We said we built RAG. Then support answers drifted. Here is the chunking, hybrid retrieval, and groundedness loop that made citations trustworthy.",
    date: "2026-03-12",
    readTime: "11 min",
    tags: ["RAG", "Agents", "Evaluation"],
    content: `Everyone can wire an embedding API to a vector store by Friday. The hard part is the Monday after: a support agent cites the wrong policy version, a chat bot invents a refund rule, and nobody can say whether the model lied or retrieval handed it garbage.

This is the build log for a knowledge base meant to feed **specialized agents** — support, in-product chat, domain workflows — not a demo chatbot.

## The problem we actually had

Institutional knowledge lived in PDFs, Confluence exports, ticket macros, and tribal Slack threads. A generic frontier model could sound confident. It could not be **accountable**.

We needed three properties:

1. **Grounded** — every claim should map to a retrieved chunk
2. **Fresh** — policy v3 must beat policy v2 in retrieval
3. **Specializable** — the same spine should power support vs payroll-domain agents

[[fig:rag-pipeline]]

## Challenge 1 — Chunking that respects meaning

Naive fixed-size chunks split tables mid-row and severed "if / then" policy clauses. The model then answered from half a rule.

**What we changed:**

- Structure-aware splits (headings, list items, table rows) before token windows
- Overlap only across section boundaries, not arbitrary mid-sentence cuts
- Metadata on every chunk: \`doc_id\`, \`version\`, \`effective_from\`, \`audience\` (support | internal | legal)

Version metadata later became the difference between citing the live refund policy and a retired draft.

## Challenge 2 — Semantic search alone was not enough

Embeddings are great at "things that feel related." They are mediocre at exact tokens: SKUs, article IDs, error codes, regulation names.

**Hybrid retrieval:**

- Dense vector search for semantic neighbors
- Sparse / keyword path for identifiers and titles
- Reciprocal rank fusion to merge lists
- A hard filter on \`audience\` and \`effective_from <= now\`

Without the filter, stale docs ranked high because they were longer and phrase-heavier.

## Challenge 3 — "It sounds right" is not an eval

We stopped eyeballing answers. Inspired by how serious agent teams grade outputs (factuality, citations, coverage), we built a thin harness:

- **Groundedness:** does each sentence have a supporting chunk?
- **Citation accuracy:** does the cited chunk actually contain the claim?
- **Coverage:** did we miss a required policy clause for this intent?

Failing cases went into a regression set. Prompt tweaks that raised fluency but dropped groundedness were rejected.

## Challenge 4 — One corpus, many agents

Support agents need runbooks and escalation paths. Domain agents need schemas and calculation notes. Same RAG spine, different:

- Tool allowlists
- System prompts
- Exit conditions (answer / ask clarifying / hand off to human)

LangGraph made the branching explicit. Retrieval stayed shared; specialization lived in the graph.

## What I would not skip next time

- Versioned metadata from day one
- Hybrid retrieval before fancy re-rankers
- A groundedness eval before any "launch" demo
- Human handoff as a first-class graph node, not an apology path

RAG is not a feature you toggle. It is an operations practice: ingest, retrieve, cite, measure, repair.`,
  },
  {
    slug: "mongodb-race-without-transactions",
    title: "The MongoDB Race We Found Without Transactions",
    excerpt:
      "Two workers, one document, lost updates. How we detected a classic race on a payroll-adjacent status field — and fixed it with conditional writes.",
    date: "2026-02-18",
    readTime: "9 min",
    tags: ["MongoDB", "Backend", "Concurrency"],
    content: `MongoDB multi-document transactions exist. We were not using them on this path — single-document updates, high throughput, "it should be fine."

It was not fine.

## The symptom

A status field (think: \`PENDING → PROCESSING → DONE\`) occasionally jumped backward. Ops saw a record flip to \`DONE\`, then minutes later sit in \`PROCESSING\` again. No deploy. No manual edit. Just ghosts.

Logs showed two workers claiming the same work item within the same second.

[[fig:mongo-race]]

## How we detected it

1. **Correlated traces** — both workers logged \`workItemId\` + \`readStatus\` + \`writeStatus\`
2. **A counter that did not add up** — "started" events > "completed" events for the same id within a window
3. **A reproduction** — two parallel \`find\` → mutate → \`save\` loops against a local replica set

The smoking gun was the classic **lost update**:

- Worker A reads \`status: PENDING\`, \`version: 3\`
- Worker B reads the same
- A writes \`PROCESSING\`
- B writes \`PROCESSING\` (or worse, overwrites A's later fields) based on a stale read

Without a version check in the **write filter**, the second write wins silently.

## Why "just use a transaction" was the wrong first move

Transactions would have papered over a design smell: we were doing read-modify-write in application memory for a hot single document. The fix that matched the access pattern was **document-level optimistic concurrency**.

## The fix

Add a monotonic \`version\` (or reuse a well-understood field) and make the update conditional:

\`\`\`js
const result = await collection.findOneAndUpdate(
  { _id: id, status: "PENDING", version: expectedVersion },
  {
    $set: { status: "PROCESSING", lockedBy: workerId, lockedAt: new Date() },
    $inc: { version: 1 },
  },
  { returnDocument: "after" }
);

if (!result) {
  // someone else won the race — take the next item
  return null;
}
\`\`\`

Only one worker's filter matches. The other gets \`null\` and moves on. No lost update. No multi-doc transaction required for this path.

## What we also changed

- Idempotent handlers: processing the same id twice must be safe
- Metrics: \`claim_conflict_total\` so races become visible, not folklore
- Alerts when conflict rate spikes after a deploy

## Lesson

If your correctness depends on "I read it, therefore I may write it," you do not have correctness — you have a race with good intentions. Put the precondition in the query. Make conflict an explicit branch.`,
  },
  {
    slug: "local-llms-vs-frontier",
    title: "Local LLMs vs Frontier Models: Where Each One Wins",
    excerpt:
      "When I run models on my own box, when I call Claude or GPT, and how the eval harness decides — not the hype cycle.",
    date: "2026-01-28",
    readTime: "8 min",
    tags: ["Local LLM", "Frontier models", "Evaluation"],
    content: `Frontier models (Claude, GPT-class APIs) are absurdly capable. Local models are absurdly private, controllable, and increasingly "good enough" for narrow loops.

The mistake is treating that as a tribe war. It is a **routing** problem.

[[fig:model-routing]]

## When local wins

- **Sensitive corpora** — policies, payroll rules, customer tickets that should not leave the VPC
- **Tight loops** — classification, routing, rewrite-for-retrieval, JSON extraction where latency and cost dominate
- **Offline / air-gapped** evaluation runs against a frozen fixture set
- **Deterministic harnesses** — same weights, same temperature, same seed where the stack allows

I use local models as **specialists in the graph**: intent routers, citation checkers, chunk taggers. They do not need to write poetry. They need to be stable.

## When frontier wins

- Ambiguous multi-step reasoning across messy docs
- Tool-using agents that must recover from weird tool output
- Writing and synthesis where taste and long-context matter
- Bootstrapping a new domain before you have enough labeled failures to train or fine-tune anything

Anthropic-style agent writing keeps circling the same truth: **the harness matters as much as the model**. A weak local model in a strong graph with tools and evals can beat a frontier model in a sloppy prompt loop.

## The decision checklist I actually use

1. Does the data leave our boundary? If no → prefer local or VPC-hosted
2. Is the task graded by exact structure (JSON schema, enum)? Prefer local + validator
3. Is the task graded by groundedness against our KB? Either model, but **shared eval**
4. Are we still discovering the task shape? Frontier first, then distill the pattern back to local

## How we keep them honest

Both paths go through the same evaluation gate:

- Schema validation
- Groundedness / citation checks for RAG answers
- Golden fixtures for regression

If a local model fails the gate, we do not "prompt harder" forever — we either improve retrieval, narrow the task, or escalate that node to a frontier call.

## Bottom line

Local is for control and cost. Frontier is for judgment under ambiguity. The product is the **router + eval**, not the logo on the API key.`,
  },
  {
    slug: "agent-evals-before-demo-day",
    title: "Agent Evals Before Demo Day: What We Measure Now",
    excerpt:
      "Fluency lied to us. Process metrics, citation checks, and failure transcripts — lessons aligned with how serious agent teams grade systems.",
    date: "2025-12-04",
    readTime: "10 min",
    tags: ["Agents", "Evaluation", "LangGraph"],
    content: `The first agent demo always looks magical. The second week in production looks like a crime scene.

We shipped a support-shaped agent that answered fluently and cited "sources." Users trusted it. Then a citation pointed at a chunk that did not contain the claim. Fluency had been grading itself.

## What we borrowed from serious agent eval practice

Teams that live with agents in production (the Anthropic engineering notes on agent evals are a good public map) keep stressing the same shift: you are not grading a chatbot reply — you are grading a **harness + model** trajectory.

We adopted a simpler version of that mindset:

[[fig:eval-loop]]

### Outcome checks

- Did the agent resolve the intent or correctly escalate?
- For factual asks: exact or rubric match against a known answer key

### Process checks

- Tool calls: right tools, reasonable count (no death spirals)
- Retrieval: did we fetch before claiming?
- Citations: claim ⊆ chunk

### Trajectory review

- Store failing transcripts
- Tag root cause: retrieval / prompt / tool schema / model limit
- Promote the case into CI

## LLM-as-judge — used carefully

A single judge prompt scoring groundedness and citation accuracy beat a committee of vague vibes. We keep the rubric short and tie it to **retrievable evidence**, not eloquence.

Where the answer is objective ("what is the freeze window for country X?"), the judge only checks equivalence to the key. Where the answer is open-ended, groundedness dominates.

## LangGraph made failures visible

Before the graph, failures were "the model messed up." After:

- We saw retries stuck in one node
- We saw tools called with empty arguments
- We saw handoff nodes never reached

Evals attached to **nodes**, not just the final string. That is the difference between debugging a paragraph and debugging a system.

## What we refuse to ship on

- No groundedness gate on RAG answers
- No conflict metric on concurrent claims (see the Mongo race post)
- No transcript store for the last N failures

Demo day can impress. Eval day keeps the pager quiet.`,
  },
  {
    slug: "kubernetes-at-scale",
    title: "Kubernetes Notes from a Payroll Platform on EKS",
    excerpt:
      "OOM cascades, CoreDNS friction, and a backward-incompatible rollout — what we changed after each incident.",
    date: "2025-11-02",
    readTime: "7 min",
    tags: ["Kubernetes", "AWS", "Production"],
    content: `These are condensed notes from running a payroll-shaped workload on AWS EKS. No heroics — just the incidents that forced better defaults.

## OOMKilled cascade

One PDF-heavy service leaked under large documents. Pods restarted, neighbors thrashed, the namespace felt haunted.

**Change:** treat the gap between request and limit as a signal. When usage hugs the limit, you are already in the blast radius. Profile the burst path; do not only "raise the limit and pray."

## CoreDNS friction

Random multi-second timeouts. Not every request — enough to poison trust.

**Change:** scale CoreDNS, NodeLocal DNSCache, tighten \`ndots\` so every call does not search the galaxy. DNS is part of your SLO whether you named it or not.

## Rolling update with a silent contract break

A serialization change passed CI and failed the fleet.

**Change:** canary + automatic rollback, contract tests between services, shadow traffic before full promote.

Kubernetes gives levers. Strategy is still on you.`,
  },
  {
    slug: "spring-boot-profiling-bottlenecks",
    title: "Spring Boot Profiling: Finding the Real Bottleneck",
    excerpt:
      "p95 climbed and pods got fat. How we separated CPU hotspots from memory pressure — async profiles, heap clues, and what we changed after.",
    date: "2026-03-20",
    readTime: "10 min",
    tags: ["Spring Boot", "Profiling", "Performance"],
    content: `When a Spring Boot service slows down, the loudest opinion in the room is usually wrong. "Add replicas." "Bump the heap." "It must be the database."

Sometimes it is the database. Sometimes it is a single method allocating like it is paid per byte. Profiling is how you stop guessing.

This is the playbook I use on JVM services (payroll-shaped APIs included): **observe → classify (CPU vs memory) → profile the right signal → change one thing → re-measure**.

[[fig:profiling-loop]]

## Step 0 — Decide what "slow" means

Before attaching a profiler, lock a question:

- Is **latency** bad (p95 / p99 on a named endpoint)?
- Is **throughput** collapsing under the same concurrency?
- Are **pods restarting** (OOMKilled) or just "feeling heavy"?

Those three point at different tools. Treating them as one problem produces cargo-cult tuning.

## CPU-bound vs memory-bound — a quick split

- **CPU % pegged, GC quiet, latency rises with load** → CPU / lock / hot method
- **CPU bursty, GC time high, heap sawtooth, alloc rate wild** → Allocation / GC pressure
- **Heap climbs over hours/days, Full GC cannot reclaim** → Leak or retained cache
- **Latency high, CPU low, pool wait / remote timers** → I/O wait, pool saturation, remote calls

Metrics first: request latency, JVM CPU, heap used, GC pause, Hikari waiting threads, Redis/DB client timers. Then profile.

## CPU: find the hot method, not the hot take

On a staging box (or a canary with consent), I reach for continuous or sampled profiling — async-profiler / JFR — while replaying a realistic load (calculation window, report export, whatever hurts production).

What we look for:

- A surprising share of samples in **JSON serialization**, **PDF/report rendering**, or **regex**
- Contended locks (\`synchronized\`, unfair pools)
- Accidental **N+1** showing up as repeated repository frames

**Example pattern we fixed:** a "simple" DTO mapping path that rebuilt the same lookup map on every item in a batch. CPU profiles lit up that method. Caching the lookup for the request scope dropped CPU and p95 without touching the database.

Rule: if the flame graph's widest tower is your code, read it. If it is the driver or the GC, do not rewrite business logic first.

## Memory: allocation rate vs leak

Two different diseases:

### 1) Allocation churn (death by a thousand objects)

Symptoms: young GC flapping, alloc rate high, heap recovers after GC.

Fixes that actually helped us:

- Reuse buffers for report generation
- Avoid building giant intermediate \`List\`/\`Map\` graphs when a stream/projection would do
- Watch Jackson / mapping layers that clone everything "for safety"

### 2) Retention / leak (death by never letting go)

Symptoms: old gen climbs, Full GC does little, OOM after hours.

Fixes:

- Heap dump → dominator tree (Eclipse MAT or similar)
- Hunt static caches, unbounded maps, \`ThreadLocal\` leftovers, listener lists
- Confirm Redis/Caffeine sizes and TTLs — "forever cache" is a leak with branding

On Kubernetes, also compare **container memory** vs **heap**: native memory, metaspace, and direct buffers sit outside \`-Xmx\`. A pod can OOM with "plenty of heap left."

## A concrete sequence we run

1. Grab golden latency + JVM charts for the bad endpoint
2. Classify CPU vs GC vs I/O from metrics
3. Record a **short** profile under load (minutes, not hours)
4. Change **one** thing aligned with the evidence
5. Re-run the same load script; keep the flame graph in the PR

If step 5 does not move the chart, the theory was wrong — not the profiler.

## Spring-specific traps worth naming

- **Default pools** that look fine in idle demos and starve under payroll bursts
- **Lazy JPA** graphs that explode when a serializer touches them (CPU + alloc)
- **Actuator + unbounded** custom metrics labels (memory surprise)
- **"Just increase \`-Xmx\`"** masking a leak until the node pays for it

## What we refuse to do

- Tune without a before/after chart
- Profile production casually without a plan for overhead and PII
- Call something "optimized" because the code looks cleaner

Profiling is not a personality. It is a habit: measure the bottleneck you have, not the one that makes a good standup story.`,
  },
];

/** Keep export name used across the app */
export const captainsLog = writingPosts;
