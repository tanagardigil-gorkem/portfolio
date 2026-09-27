import type { Metadata } from "next";
import Link from "next/link";
import LabPageFrame from "../../components/console/LabPageFrame";
import { captainsLog } from "../../data/portfolio";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Engineering notes on RAG, agents, MongoDB concurrency, local vs frontier LLMs, and production systems.",
};

export default function WritingIndexPage() {
  const posts = [...captainsLog].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <LabPageFrame>
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--ink-soft)] uppercase">
          Writing
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight">
          Notes from the lab
        </h1>
        <p className="mt-3 text-[color:var(--ink-soft)]">
          Challenges, decisions, and diagrams — RAG, agents, concurrency, models.
        </p>
        <ul className="mt-10 border-t-2 border-[var(--foreground)]">
          {posts.map((post) => (
            <li key={post.slug} className="border-b-2 border-[var(--foreground)]">
              <Link href={`/writing/${post.slug}`} className="block py-5 hover:bg-[var(--panel)]">
                <span className="font-mono text-[10px] tracking-wider text-[color:var(--ink-soft)] uppercase">
                  {post.tags.slice(0, 2).join(" · ")}
                </span>
                <span className="mt-1 block text-lg font-semibold">{post.title}</span>
                <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{post.excerpt}</p>
                <p className="mt-2 font-mono text-xs text-[color:var(--ink-soft)]">
                  {post.date} · {post.readTime}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </LabPageFrame>
  );
}
