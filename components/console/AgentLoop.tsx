"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { agentLoopDemo } from "../../data/console";

export default function AgentLoop() {
  const stages = agentLoopDemo.stages;
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const stage = stages[index];

  const go = useCallback(
    (next: number) => setIndex((next + stages.length) % stages.length),
    [stages.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key >= "1" && e.key <= String(stages.length)) go(Number(e.key) - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, stages.length]);

  return (
    <section
      id="agent-loop"
      className="relative py-8 sm:py-14"
      aria-labelledby="agent-loop-title"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--ink-soft)] uppercase">
            Operating model
          </p>
          <h2
            id="agent-loop-title"
            className="mt-1 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            {agentLoopDemo.title}
          </h2>
          <p className="mt-2 text-[color:var(--ink-soft)] sm:text-lg">
            {agentLoopDemo.subtitle}
          </p>
        </div>

        {/* Stage rail */}
        <div className="mt-10" role="tablist" aria-label="Agent stages">
          <div className="relative">
            <div
              className="absolute left-0 right-0 top-[22px] hidden h-[2px] bg-[var(--foreground)]/15 sm:block"
              aria-hidden
            />
            <motion.div
              className="absolute left-0 top-[22px] hidden h-[2px] origin-left bg-[var(--foreground)] sm:block"
              aria-hidden
              initial={false}
              animate={{
                scaleX: (index + 1) / stages.length,
              }}
              transition={{ type: "spring", stiffness: 160, damping: 24 }}
              style={{ width: "100%" }}
            />
            <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {stages.map((s, i) => {
                const active = i === index;
                const done = i < index;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setIndex(i)}
                        className={`group relative w-full border-2 px-3 py-3 text-left transition sm:px-4 sm:py-4 ${
                        active
                          ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                          : done
                            ? "border-[var(--foreground)] bg-[var(--panel)] text-[var(--foreground)]"
                            : "border-[var(--foreground)]/25 bg-[var(--panel)] text-[color:var(--ink-soft)] hover:border-[var(--foreground)]/60"
                      }`}
                    >
                      <span
                        className={`mb-2 flex h-5 w-5 items-center justify-center font-mono text-[10px] font-bold sm:absolute sm:-top-2.5 sm:left-4 sm:mb-0 sm:bg-[var(--background)] sm:ring-2 ${
                          active
                            ? "bg-[var(--accent)] text-[var(--accent-ink)] sm:ring-[var(--foreground)]"
                            : "bg-[var(--foreground)] text-[var(--background)] sm:ring-[var(--foreground)]"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="block font-[family-name:var(--font-display)] text-sm font-extrabold tracking-tight sm:mt-2 sm:text-base">
                        {s.label}
                      </span>
                      <span
                        className={`mt-1 block text-[11px] leading-snug sm:text-xs ${
                          active ? "text-[var(--background)]/65" : "text-[color:var(--ink-soft)]"
                        }`}
                      >
                        {s.problem}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Detail panel */}
        <div className="mt-4 border-2 border-[var(--foreground)] bg-[var(--panel)] sm:mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.id}
              role="tabpanel"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="p-6 sm:p-9 lg:border-r-2 lg:border-[var(--foreground)]">
                <p className="inline-block bg-[var(--accent)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--accent-ink)]">
                  Problem · {stage.problem}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {stage.headline}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[color:var(--ink-soft)] sm:text-lg">
                  {stage.detail}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  className="border-2 border-[var(--foreground)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  className="bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
                >
                  {index === stages.length - 1 ? "Restart loop" : "Next step"}
                </button>
                  <span className="ml-1 hidden font-mono text-[11px] text-[color:var(--ink-soft)] sm:inline">
                    ← → keys · {index + 1}/{stages.length}
                  </span>
                </div>
              </div>

              <div className="lab-invert border-t-2 border-[var(--foreground)] p-6 sm:p-9 lg:border-t-0">
                <div className="flex items-center justify-between gap-3">
                  <p className="lab-invert-muted font-mono text-[11px] tracking-[0.18em] uppercase">
                    Live trace
                  </p>
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--accent)]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
                    running
                  </span>
                </div>
                <pre className="mt-5 space-y-2 font-mono text-[12px] leading-relaxed text-[var(--accent)] sm:text-[13px]">
                  {stage.trace.map((line) => (
                    <motion.div
                      key={line}
                      initial={prefersReducedMotion ? false : { opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {line}
                    </motion.div>
                  ))}
                  <span
                    className="inline-block w-[7px] translate-y-[2px] bg-[var(--accent)] align-middle"
                    style={{
                      height: "0.9em",
                      animation: prefersReducedMotion
                        ? undefined
                        : "lab-caret 1s step-end infinite",
                    }}
                  />
                </pre>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
