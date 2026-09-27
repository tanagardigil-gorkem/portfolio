"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredWork, labItems, proofPoints } from "../../data/console";
import { captainsLog } from "../../data/portfolio";
import { email, githubUrl, linkedInUrl } from "../../lib/site";

export function ProofStrip() {
  return (
    <section className="py-12 sm:py-16" aria-label="Proof points">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-0 border-2 border-[var(--foreground)] sm:grid-cols-3">
          {proofPoints.map((p, i) => (
            <div
              key={p.title}
              className={`bg-[var(--panel)] p-6 ${i < proofPoints.length - 1 ? "border-b-2 border-[var(--foreground)] sm:border-b-0 sm:border-r-2" : ""}`}
            >
              <p className="font-mono text-[11px] text-[color:var(--ink-soft)]">
                0{i + 1}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedWork() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="work" className="py-12 sm:py-20" aria-labelledby="work-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--ink-soft)] uppercase">
          Featured
        </p>
        <h2
          id="work-title"
          className="mt-1 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Problems I solve
        </h2>
        <p className="mt-2 max-w-xl text-[color:var(--ink-soft)]">
          Technology is the means. These are the outcomes.
        </p>

        <ul className="mt-10">
          {featuredWork.map((item, i) => (
            <motion.li
              key={item.slug}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: prefersReducedMotion ? 0 : i * 0.05 }}
              className="border-t-2 border-[var(--foreground)] last:border-b-2"
            >
              <Link
                href={`/work/${item.slug}`}
                className="group grid gap-3 py-7 transition sm:grid-cols-[7rem_1fr_auto] sm:items-start sm:gap-8"
              >
                <span className="font-[family-name:var(--font-display)] text-4xl font-black text-[color:var(--ink-soft)]/40 transition group-hover:text-[var(--foreground)]">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-[color:var(--ink-soft)] uppercase">
                    {item.tag}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {item.problem}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[color:var(--ink-soft)]">
                    <span className="font-semibold text-[var(--foreground)]">{item.name}.</span>{" "}
                    {item.summary}
                  </p>
                  <p className="mt-3 font-mono text-[11px] text-[color:var(--ink-soft)]">
                    {item.tech.join(" · ")}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--foreground)] transition group-hover:bg-[var(--accent)]">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LabPreview() {
  return (
    <section id="lab" className="py-12 sm:py-16" aria-labelledby="lab-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--ink-soft)] uppercase">
              Lab
            </p>
            <h2
              id="lab-title"
              className="mt-1 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Products & experiments
            </h2>
          </div>
          <Link
            href="/lab"
            className="text-sm font-semibold underline decoration-2 underline-offset-4"
          >
            All lab
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group border-2 border-[var(--foreground)] bg-[var(--panel)] p-6 transition hover:bg-[var(--accent)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-extrabold">
                  {item.name}
                </h3>
                <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-ink)]">
                {item.problem}
              </p>
              <p className="mt-2 text-sm text-[color:var(--ink-soft)] group-hover:text-[var(--accent-ink)]">
                {item.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WritingPreview() {
  const posts = [...captainsLog].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <section id="writing" className="py-12 sm:py-16" aria-labelledby="writing-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--ink-soft)] uppercase">
              Writing
            </p>
            <h2
              id="writing-title"
              className="mt-1 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Notes from the lab
            </h2>
          </div>
          <Link
            href="/writing"
            className="text-sm font-semibold underline decoration-2 underline-offset-4"
          >
            All writing
          </Link>
        </div>
        <ul className="mt-8 border-t-2 border-[var(--foreground)]">
          {posts.map((post) => (
            <li key={post.slug} className="border-b-2 border-[var(--foreground)]">
              <Link
                href={`/writing/${post.slug}`}
                className="flex flex-col gap-1 py-5 transition hover:bg-[var(--panel)] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="font-medium text-[var(--foreground)]">{post.title}</span>
                <span className="shrink-0 font-mono text-xs text-[color:var(--ink-soft)]">
                  {post.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section id="contact" className="py-16 sm:py-24" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="lab-invert border-2 border-[var(--foreground)] p-6 sm:p-10 md:p-12">
          <p className="lab-invert-muted font-mono text-[11px] tracking-[0.2em] uppercase">
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-5xl"
          >
            Open a channel
          </h2>
          <p className="lab-invert-muted mt-3 max-w-lg text-sm sm:text-base">
            Roles, collaborations, or agentic product work — same channels as the contact page.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-ink)] sm:px-5 sm:py-3"
            >
              {email}
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[var(--background)]/35 px-4 py-2.5 text-sm font-semibold sm:px-5 sm:py-3"
            >
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[var(--background)]/35 px-4 py-2.5 text-sm font-semibold sm:px-5 sm:py-3"
            >
              GitHub
            </a>
            <Link
              href="/contact"
              className="border-2 border-[var(--background)]/35 px-4 py-2.5 text-sm font-semibold sm:px-5 sm:py-3"
            >
              All channels
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConsoleFooter() {
  return (
    <footer className="border-t-2 border-[var(--foreground)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-[color:var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Görkem Tanağardıgil</p>
        <p className="font-mono text-xs">GT · grounded agents</p>
      </div>
    </footer>
  );
}
