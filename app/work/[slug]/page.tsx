import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LabPageFrame from "../../../components/console/LabPageFrame";
import { featuredWork, legacyCaseStudy } from "../../../data/console";

const allWork = [...featuredWork, legacyCaseStudy];

const caseBodies: Record<
  string,
  { context: string; approach: string; solution: string; evidence: string }
> = {
  "rag-domain-agents": {
    context:
      "Organizations drown in docs, tickets, and tribal knowledge. A generic chatbot cannot answer from that corpus with trust — support, chat, and domain teams need agents that are grounded and specialized.",
    approach:
      "Build a RAG knowledge base first (ingest, chunk, hybrid retrieval). Then orchestrate specialized agents with LangGraph: support, in-product chat, and domain paths with tools, citations, and human escalation.",
    solution:
      "Shared retrieval spine + per-agent graphs. Each agent gets its own prompts, tools, and exit conditions. Evaluation checks groundedness before answers ship.",
    evidence:
      "Focus is production-shaped systems: knowledge bases that stay current, agents with a clear job, and verify/escalate loops — not demo chat UIs.",
  },
  postfaceless: {
    context:
      "Creators want faceless channels without filming themselves. A brief should become publishable video across platforms.",
    approach:
      "Pipeline: brief → script/narration → media assembly (FFmpeg) → creator review → schedule to YouTube, TikTok, Instagram.",
    solution:
      "TypeScript/Node services with Next.js studio UI. Human-in-the-loop review before anything goes live.",
    evidence:
      "Live product at postfaceless.com — end-to-end generation and scheduling path for long-form and Shorts.",
  },
  "payroll-engine": {
    context:
      "Payroll workloads need reliable microservices under burst load, with integrations that cannot silently drop messages.",
    approach:
      "Spring Boot / Kotlin services on AWS EKS, RabbitMQ + Redis for workflows, CI/CD with guarded rollouts.",
    solution:
      "Containerized delivery, observability gates, and message-driven integrations across the payroll domain.",
    evidence:
      "Production platform in active use (Mar 2023–present). Details stay qualitative; no invented latency claims.",
  },
  "legacy-rule-extractor": {
    context:
      "Legacy COBOL systems hide critical business rules in procedural code. Teams need those rules explicit — without trusting unverified LLM output.",
    approach:
      "Build an agentic extraction loop: plan the modules to inspect, run LLM extractors, score against a hand-written answer key, then replay behaviour.",
    solution:
      "Python evaluation harness + structured prompts. Failures are first-class cases. The loop adapts prompts and chunking until behaviour matches.",
    evidence:
      "Research experiment focused on measurable agreement with a human answer key — not demo-only chat transcripts.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allWork.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = allWork.find((w) => w.slug === slug);
  if (!work) return { title: "Work" };
  return {
    title: work.name,
    description: work.problem,
  };
}

export default async function WorkCasePage({ params }: Props) {
  const { slug } = await params;
  const work = allWork.find((w) => w.slug === slug);
  const body = caseBodies[slug];
  if (!work || !body) notFound();

  return (
    <LabPageFrame>
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
        <Link
          href="/#work"
          className="font-mono text-xs font-medium underline decoration-2 underline-offset-4"
        >
          ← Work
        </Link>
        <p className="mt-6 font-mono text-[11px] tracking-wider text-[color:var(--ink-soft)] uppercase">
          {work.tag}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
          {work.problem}
        </h1>
        <p className="mt-4 text-lg font-semibold">{work.name}</p>
        <p className="mt-2 text-[color:var(--ink-soft)]">{work.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {work.tech.map((t) => (
            <li
              key={t}
              className="border-2 border-[var(--foreground)] bg-[var(--panel)] px-2 py-1 font-mono text-[11px]"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-10">
          {(
            [
              ["Context", body.context],
              ["Approach", body.approach],
              ["Solution", body.solution],
              ["Evidence", body.evidence],
            ] as const
          ).map(([title, text]) => (
            <section key={title}>
              <h2 className="inline-block bg-[var(--accent)] px-2 py-0.5 font-mono text-xs font-bold tracking-[0.15em] text-[var(--accent-ink)] uppercase">
                {title}
              </h2>
              <p className="mt-3 leading-relaxed text-[color:var(--ink-soft)]">{text}</p>
            </section>
          ))}
        </div>

        {"external" in work && work.external ? (
          <a
            href={work.external}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]"
          >
            Visit live product
          </a>
        ) : null}
      </main>
    </LabPageFrame>
  );
}
