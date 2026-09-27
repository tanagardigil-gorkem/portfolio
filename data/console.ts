export const consoleNav = [
  { label: "Work", href: "/#work" },
  { label: "Lab", href: "/lab" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroCopy = {
  badge: "AI SYSTEMS",
  line: "I turn messy institutional knowledge into grounded agents — support, chat, and domain specialists that answer from your data, not from thin air.",
  ctaPrimary: "See how it works",
  ctaSecondary: "Contact",
};

export const agentLoopDemo = {
  title: "How an agent actually runs",
  subtitle:
    "From knowledge base to a specialized agent — the loop people feel when support, chat, or domain bots stop guessing.",
  stages: [
    {
      id: "ground",
      label: "Ground",
      problem: "Answers float free of your docs.",
      headline: "Build the knowledge base",
      detail:
        "Ingest policies, tickets, manuals, and product data into a RAG store. Chunking, embeddings, and hybrid search so retrieval is specific — not a dump of the whole wiki.",
      trace: [
        "> ingest: 1,240 docs · policies · runbooks",
        "> chunk + embed · hybrid index ready",
        "> kb: support-core · status: grounded",
      ],
    },
    {
      id: "graph",
      label: "Graph",
      problem: "One prompt cannot own a real workflow.",
      headline: "Orchestrate with LangGraph",
      detail:
        "Route intent through a graph: retrieve → reason → tool calls → branch. Support, chat, and domain agents share the same control plane; each path has clear states and exits.",
      trace: [
        "> route: intent=billing_dispute",
        "> node: retrieve → reason → tool",
        "> graph: langgraph · branch=ok",
      ],
    },
    {
      id: "specialize",
      label: "Specialize",
      problem: "Generic chatbots fail on domain truth.",
      headline: "Ship the right agent",
      detail:
        "Support agents cite runbooks. Chat agents stay in-product. Domain agents speak finance, payroll, or ops language — same RAG spine, different tools, prompts, and guardrails.",
      trace: [
        "> agent: support · tools: search, ticket",
        "> cite: runbook/refund-eu-v3",
        "> reply: grounded · handoff=false",
      ],
    },
    {
      id: "verify",
      label: "Verify",
      problem: "Hallucinations burn trust and SLAs.",
      headline: "Evaluate, cite, escalate",
      detail:
        "Score answers against retrieval. Require citations. Escalate to a human when confidence drops. The loop closes with evidence — not vibes.",
      trace: [
        "> eval: groundedness=pass",
        "> citations: 2 sources attached",
        "> escalate: threshold not met → human",
      ],
    },
  ],
} as const;

export const proofPoints = [
  {
    title: "Knowledge that sticks",
    detail:
      "RAG knowledge bases so agents answer from your corpus — policies, product, ops — instead of inventing it.",
  },
  {
    title: "Agents with a job",
    detail:
      "Support, chat, and domain specialists on LangGraph: clear routes, tools, and handoffs — not one mega-prompt.",
  },
  {
    title: "Trust under load",
    detail:
      "Citations, evaluation, and escalation paths so production teams can ship agents without gambling on every reply.",
  },
] as const;

export const featuredWork = [
  {
    slug: "rag-domain-agents",
    name: "RAG knowledge bases → domain agents",
    tag: "AI systems",
    problem: "Teams need answers from their own data — not a generic chatbot.",
    summary:
      "Build retrieval-grounded knowledge bases, then specialize LangGraph agents for support, in-product chat, and domain workflows with citations and human handoff.",
    tech: ["RAG", "LangGraph", "Evaluation", "Tool calling"],
  },
  {
    slug: "postfaceless",
    name: "PostFaceless",
    tag: "Product",
    problem: "Creators want faceless video without a film crew.",
    summary:
      "One brief becomes narrated long-form and Shorts — reviewed by the creator, then scheduled across YouTube, TikTok, and Instagram.",
    tech: ["TypeScript", "Next.js", "FFmpeg", "AI pipelines"],
    external: "https://postfaceless.com",
  },
  {
    slug: "payroll-engine",
    name: "Payroll Engine",
    tag: "Production",
    problem: "Payroll cannot silently drop messages or fail under burst.",
    summary:
      "Reliable microservice payroll on Kubernetes: message-driven workflows, guarded rollouts, and systems that hold when load spikes.",
    tech: ["Kotlin", "Spring Boot", "Kubernetes", "MongoDB"],
  },
] as const;

export const labItems = [
  {
    name: "Telework Tracker",
    problem: "Cross-border workers lose track of telework day limits.",
    summary: "Track telework days on iPhone and Apple Watch against yearly caps.",
    tech: ["Swift", "SwiftUI", "Supabase"],
    href: "https://teleworktracker.app",
  },
  {
    name: "Legacy Rule Extractor",
    problem: "Business rules are trapped in COBOL with no trustworthy extract.",
    summary: "AI extraction scored against a hand-written key, then replayed to confirm behaviour.",
    tech: ["Python", "COBOL", "LLMs"],
    href: "/work/legacy-rule-extractor",
  },
  {
    name: "PostFaceless",
    problem: "Faceless channels still need production-grade pipelines.",
    summary: "Brief → video → creator review → schedule.",
    tech: ["AI pipelines", "Next.js"],
    href: "https://postfaceless.com",
  },
] as const;

/** Kept for lab / writing links that still reference the research case. */
export const legacyCaseStudy = {
  slug: "legacy-rule-extractor",
  name: "Legacy Rule Extractor",
  tag: "Research",
  problem: "Critical rules live in COBOL; unverified LLM output is not enough.",
  summary:
    "Extract business rules from COBOL, score against a hand-written answer key, replay behaviour until it matches.",
  tech: ["Python", "COBOL", "LLMs", "Evaluation"],
} as const;

export type MissionStatus = "todo" | "done";
export type MissionOwner = "you" | "code";

export const launchMissions: {
  id: string;
  title: string;
  detail: string;
  status: MissionStatus;
  owner: MissionOwner;
}[] = [
  {
    id: "gsc-verify",
    title: "Verify domain in Google Search Console",
    detail: "Add https://www.gorkemtanagardigil.com and complete DNS or HTML ownership verification.",
    status: "todo",
    owner: "you",
  },
  {
    id: "gsc-sitemap",
    title: "Submit sitemap",
    detail: "Submit /sitemap.xml in Search Console so Google discovers work and writing URLs.",
    status: "todo",
    owner: "you",
  },
  {
    id: "gsc-index",
    title: "Request indexing",
    detail: "URL Inspection → request indexing for /, key /work pages, and latest writing.",
    status: "todo",
    owner: "you",
  },
  {
    id: "schema-validate",
    title: "Validate JSON-LD on live site",
    detail:
      "Code ships Person + WebSite (layout) and BlogPosting (writing posts). After deploy, run Rich Results / schema tester on / and a /writing/* URL.",
    status: "todo",
    owner: "you",
  },
  {
    id: "llms-content",
    title: "llms.txt content (code)",
    detail:
      "llms.txt and llms-full.txt updated for AI-systems positioning and /writing URLs. Confirm 200 after deploy.",
    status: "done",
    owner: "code",
  },
  {
    id: "llms-reachable",
    title: "Confirm llms.txt reachable in prod",
    detail: "After deploy: open /llms.txt and /llms-full.txt — expect 200.",
    status: "todo",
    owner: "you",
  },
  {
    id: "bing-webmaster",
    title: "Bing Webmaster Tools (optional)",
    detail: "Second index surface; import from Google Search Console if available.",
    status: "todo",
    owner: "you",
  },
  {
    id: "cwv",
    title: "Core Web Vitals pass",
    detail: "PageSpeed Insights mobile: strong LCP, low CLS on homepage.",
    status: "todo",
    owner: "you",
  },
  {
    id: "profile-links",
    title: "Update LinkedIn & GitHub bio links",
    detail: "Point profiles at the new AI-systems positioning and homepage.",
    status: "todo",
    owner: "you",
  },
];
