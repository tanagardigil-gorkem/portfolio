"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroCopy } from "../../data/console";

export default function ConsoleHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[78vh] pt-28 pb-8 sm:pt-36 sm:pb-10">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 font-mono text-[12px] tracking-[0.18em] text-[color:var(--ink-soft)] uppercase">
            {heroCopy.badge.replace("· ONLINE", "")}
            <span className="ml-2 inline-block bg-[var(--accent)] px-1.5 py-0.5 text-[10px] font-medium tracking-normal text-[var(--accent-ink)] normal-case">
              live loop
            </span>
          </p>

          <h1 className="max-w-[11ch] font-[family-name:var(--font-display)] text-[clamp(3.4rem,12vw,7.5rem)] font-black leading-[0.86] tracking-[-0.04em] text-[var(--foreground)]">
            Görkem
            <br />
            Tanağardıgil
          </h1>

          <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
                AI Systems Engineer
              </p>
              <p className="mt-3 text-base leading-relaxed text-[color:var(--ink-soft)] sm:text-lg">
                {heroCopy.line}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="#agent-loop"
                className="inline-flex items-center justify-center bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-black"
              >
                {heroCopy.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
              >
                {heroCopy.ctaSecondary}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
