import type { Metadata } from "next";
import Link from "next/link";
import LabPageFrame from "../../components/console/LabPageFrame";
import { languages, missionHistory } from "../../data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Görkem Tanağardıgil — AI systems engineer. Background in production backends and earlier naval engineering.",
};

export default function AboutPage() {
  return (
    <LabPageFrame>
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--ink-soft)] uppercase">
          About
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
          Systems that think in steps
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-[color:var(--ink-soft)]">
          <p>
            I build systems that turn institutional knowledge into agents people can trust —
            RAG knowledge bases, LangGraph orchestration, and specialized support, chat, and
            domain agents with citations and human handoff.
          </p>
          <p>
            The question I start with is not which model to use. It is: what breaks today when
            someone needs a correct answer from your data? Then we ground, graph, specialize, and
            verify.
          </p>
          <p>
            I also ship products (PostFaceless, Telework Tracker) and keep production backends
            reliable (Spring Boot on Kubernetes). Earlier I served as a computer engineer in the
            Turkish Navy (2010–2021). That chapter shaped how I think about failure modes; it is
            not the theme of this site.
          </p>
        </div>

        <h2 className="mt-14 font-[family-name:var(--font-display)] text-2xl font-extrabold">
          Timeline
        </h2>
        <ul className="mt-6 space-y-6">
          {missionHistory.map((m) => (
            <li key={m.title} className="border-l-2 border-[var(--foreground)] pl-4">
              <p className="font-mono text-xs text-[color:var(--ink-soft)]">
                {m.period} · {m.role}
              </p>
              <p className="mt-1 font-semibold">{m.title}</p>
              <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{m.summary}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 font-[family-name:var(--font-display)] text-2xl font-extrabold">
          Languages
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {languages.map((l) => (
            <li
              key={l.name}
              className="border-2 border-[var(--foreground)] bg-[var(--panel)] px-3 py-1 text-sm"
            >
              {l.name} · {l.level}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-12 inline-block font-semibold underline decoration-2 underline-offset-4"
        >
          Contact →
        </Link>
      </main>
    </LabPageFrame>
  );
}
