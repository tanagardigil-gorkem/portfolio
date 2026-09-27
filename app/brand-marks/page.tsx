"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/**
 * All marks use currentColor for ink so they flip correctly on light / dark surfaces.
 * Accent (lime) stays fixed — always visible on both.
 */

/** A — interlocking monogram + slash + underline */
function MarkA({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 88 44" className={className} aria-hidden fill="none">
      <path
        d="M28 8.5c-9.5 0-16.5 7.2-16.5 16.5S18.5 41.5 28 41.5c5.8 0 10.6-2.4 13.6-6.2l-4.2-3.4c-1.9 2.2-4.8 3.6-9.4 3.6-6.2 0-10.5-4.6-10.5-10.5S21.8 14.5 28 14.5c4.2 0 7.2 1.8 8.8 4.6h-7.2v5.2h14.8V14c-3.4-3.6-8.4-5.5-15.6-5.5Z"
        fill="currentColor"
      />
      <path d="M42 10.5h34v6.2H65.2V41.5h-6.8V16.7H42V10.5Z" fill="currentColor" />
      <path d="M48 6 L56 40" stroke="var(--accent)" strokeWidth="3.2" strokeLinecap="round" />
      <path
        d="M10 42.5 C28 45, 52 44.2, 78 40.8"
        stroke="var(--accent)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** B — stamp */
function MarkB({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden fill="none">
      <rect x="1.5" y="1.5" width="45" height="45" stroke="currentColor" strokeWidth="2.5" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 900, fontSize: 20 }}
      >
        GT
      </text>
      <rect x="1.5" y="38" width="45" height="8" fill="var(--accent)" />
    </svg>
  );
}

/** C — bar wordmark (inherits currentColor) */
function MarkC({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-start leading-none text-current ${className}`}>
      <span className="font-[family-name:var(--font-display)] text-[2rem] font-black tracking-[-0.08em] sm:text-[2.15rem]">
        GT
      </span>
      <span className="mt-0.5 h-[5px] w-full bg-[var(--accent)]" />
    </span>
  );
}

/** D — circle seal */
function MarkD({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden fill="none">
      <circle cx="24" cy="24" r="21.5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="16" stroke="var(--accent)" strokeWidth="2" />
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 900, fontSize: 16 }}
      >
        GT
      </text>
    </svg>
  );
}

/** E — overlap (no multiply — works on dark) */
function MarkE({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block h-11 w-[4.25rem] font-[family-name:var(--font-display)] text-[2.75rem] font-black leading-none tracking-[-0.18em] text-current ${className}`}
    >
      <span className="absolute left-0 top-0">G</span>
      <span className="absolute left-5 top-0 text-[var(--accent)]">T</span>
    </span>
  );
}

/** F — lowercase pulse */
function MarkF({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 text-current ${className}`}>
      <span className="font-[family-name:var(--font-display)] text-[1.85rem] font-black italic tracking-[-0.06em]">
        gt
      </span>
      <span className="mb-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
    </span>
  );
}

/** G — inverted tile: accent field + ink initials */
function MarkG({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center border-2 border-current bg-[var(--accent)] px-2.5 py-1.5 ${className}`}
    >
      <span className="font-[family-name:var(--font-display)] text-[1.35rem] font-black tracking-[-0.06em] text-[var(--accent-ink)]">
        GT
      </span>
    </span>
  );
}

/** H — outline cut with accent corner mark */
function MarkH({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 40" className={className} aria-hidden fill="none">
      <text
        x="2"
        y="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 900, fontSize: 32 }}
      >
        GT
      </text>
      <path d="M58 6 L68 6 L68 16" stroke="var(--accent)" strokeWidth="3" strokeLinecap="square" />
    </svg>
  );
}

/** I — vertical stack signature */
function MarkI({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex flex-col items-center leading-[0.85] text-current ${className}`}
    >
      <span className="font-[family-name:var(--font-display)] text-xl font-black tracking-tight">
        G
      </span>
      <span className="h-0.5 w-4 bg-[var(--accent)]" />
      <span className="font-[family-name:var(--font-display)] text-xl font-black tracking-tight">
        T
      </span>
    </span>
  );
}

/** J — bracketed signature */
function MarkJ({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 font-[family-name:var(--font-display)] text-[1.65rem] font-black tracking-[-0.05em] text-current ${className}`}
    >
      <span className="text-[var(--accent)]" aria-hidden>
        {"⟨"}
      </span>
      GT
      <span className="text-[var(--accent)]" aria-hidden>
        {"⟩"}
      </span>
    </span>
  );
}

type Alt = {
  id: string;
  name: string;
  note: string;
  render: (boxClass: string) => ReactNode;
  box: string;
};

const alternatives: Alt[] = [
  {
    id: "A",
    name: "Monogram + slash",
    note: "Interlocking + signature underline",
    render: (c) => <MarkA className={c} />,
    box: "h-12 w-24",
  },
  {
    id: "B",
    name: "Stamp",
    note: "Hard seal with lime footer bar",
    render: (c) => <MarkB className={c} />,
    box: "h-12 w-12",
  },
  {
    id: "C",
    name: "Bar wordmark",
    note: "GT + lime rule — signed title",
    render: (c) => <MarkC className={c} />,
    box: "",
  },
  {
    id: "D",
    name: "Seal",
    note: "Circular crest",
    render: (c) => <MarkD className={c} />,
    box: "h-12 w-12",
  },
  {
    id: "E",
    name: "Overlap",
    note: "G + lime T — loud, readable on dark",
    render: (c) => <MarkE className={c} />,
    box: "",
  },
  {
    id: "F",
    name: "Lowercase pulse",
    note: "Italic gt + signal dot",
    render: (c) => <MarkF className={c} />,
    box: "",
  },
  {
    id: "G",
    name: "Accent tile",
    note: "Lime field, dark ink initials — always punches",
    render: (c) => <MarkG className={c} />,
    box: "",
  },
  {
    id: "H",
    name: "Outline cut",
    note: "Stroked GT + accent corner tick",
    render: (c) => <MarkH className={c} />,
    box: "h-12 w-20",
  },
  {
    id: "I",
    name: "Stack",
    note: "Vertical G / T with lime divider",
    render: (c) => <MarkI className={c} />,
    box: "",
  },
  {
    id: "J",
    note: "Code-ish brackets — technical signature",
    name: "Brackets",
    render: (c) => <MarkJ className={c} />,
    box: "",
  },
];

function SurfacePreview({
  surface,
  children,
}: {
  surface: "light" | "dark";
  children: ReactNode;
}) {
  const dark = surface === "dark";
  return (
    <div
      className={`flex min-h-[4.75rem] flex-1 items-center justify-center px-3 ${
        dark
          ? "bg-[var(--foreground)] text-white"
          : "bg-[#e6ebf2] text-[var(--foreground)]"
      }`}
    >
      {children}
    </div>
  );
}

export default function BrandMarksPage() {
  return (
    <div className="lab-atmosphere min-h-screen text-[var(--foreground)]">
      <div className="lab-noise pointer-events-none absolute inset-0" aria-hidden />
      <main className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Link
          href="/"
          className="font-mono text-xs font-medium underline decoration-2 underline-offset-4"
        >
          ← Back to site
        </Link>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
          GT mark alternatives
        </h1>
        <p className="mt-3 max-w-2xl text-[color:var(--ink-soft)]">
          Ink uses <code className="bg-[var(--accent)] px-1 text-[var(--accent-ink)]">currentColor</code>{" "}
          so marks invert on dark. Lime accent stays fixed. Each card shows light + dark.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {alternatives.map((alt) => (
            <article
              key={alt.id}
              className="flex flex-col border-2 border-[var(--foreground)] bg-white/60 p-5"
            >
              <p className="font-mono text-[11px] tracking-wider text-[color:var(--ink-soft)] uppercase">
                Option {alt.id}
              </p>
              <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl font-extrabold">
                {alt.name}
              </h2>
              <div className="mt-5 flex overflow-hidden border border-[var(--foreground)]/20">
                <SurfacePreview surface="light">
                  {alt.render(alt.box)}
                </SurfacePreview>
                <SurfacePreview surface="dark">
                  {alt.render(alt.box)}
                </SurfacePreview>
              </div>
              <div className="mt-2 flex gap-2 font-mono text-[10px] text-[color:var(--ink-soft)]">
                <span className="flex-1 text-center">light</span>
                <span className="flex-1 text-center">dark</span>
              </div>
              <p className="mt-3 text-sm text-[color:var(--ink-soft)]">{alt.note}</p>
            </article>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold">
            Nav strip — light
          </h2>
          <div className="mt-4 flex flex-wrap items-end gap-7 border-2 border-[var(--foreground)] bg-white/80 px-5 py-5 text-[var(--foreground)]">
            {alternatives.map((alt) => (
              <div key={alt.id} className="flex flex-col items-center gap-2">
                {alt.render(alt.box)}
                <span className="font-mono text-[10px] text-[color:var(--ink-soft)]">{alt.id}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 pb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold">
            Nav strip — dark
          </h2>
          <div className="mt-4 flex flex-wrap items-end gap-7 border-2 border-[var(--foreground)] bg-[var(--foreground)] px-5 py-5 text-white">
            {alternatives.map((alt) => (
              <div key={alt.id} className="flex flex-col items-center gap-2">
                {alt.render(alt.box)}
                <span className="font-mono text-[10px] text-white/45">{alt.id}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
