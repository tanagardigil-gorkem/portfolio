import type { Metadata } from "next";
import Link from "next/link";
import LabPageFrame from "../../components/console/LabPageFrame";
import { labItems } from "../../data/console";
import { additionalProjects } from "../../data/portfolio";

export const metadata: Metadata = {
  title: "Lab",
  description: "Products and experiments — Telework Tracker, PostFaceless, Legacy Rule Extractor.",
};

export default function LabPage() {
  return (
    <LabPageFrame>
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--ink-soft)] uppercase">
          Lab
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
          Products & experiments
        </h1>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="border-2 border-[var(--foreground)] bg-[var(--panel)] p-6 transition hover:bg-[var(--accent)]"
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl font-extrabold">
                {item.name}
              </h2>
              <p className="mt-3 text-sm font-semibold">{item.problem}</p>
              <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{item.summary}</p>
              <p className="mt-4 font-mono text-[11px] text-[color:var(--ink-soft)]">
                {item.tech.join(" · ")}
              </p>
            </a>
          ))}
        </div>

        <h2 className="mt-16 font-[family-name:var(--font-display)] text-2xl font-extrabold">
          Earlier systems
        </h2>
        <ul className="mt-6 border-t-2 border-[var(--foreground)]">
          {additionalProjects.map((p) => (
            <li
              key={p.name}
              className="flex flex-col gap-1 border-b-2 border-[var(--foreground)] py-4 sm:flex-row sm:justify-between"
            >
              <span className="font-medium">{p.name}</span>
              <span className="font-mono text-xs text-[color:var(--ink-soft)]">
                {p.tech.join(" · ")}
              </span>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="mt-10 inline-block text-sm font-semibold underline decoration-2 underline-offset-4"
        >
          ← Home
        </Link>
      </main>
    </LabPageFrame>
  );
}
