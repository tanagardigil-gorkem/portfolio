"use client";

import Link from "next/link";
import { useState } from "react";

/** Same monogram locked for nav — Option A */
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

type Theme = {
  id: string;
  name: string;
  note: string;
  vars: {
    background: string;
    foreground: string;
    accent: string;
    accentInk: string;
    inkSoft: string;
    atmosphere: string;
  };
};

const themes: Theme[] = [
  {
    id: "signal-lime",
    name: "Signal Lime",
    note: "Current — cool paper + acid lime",
    vars: {
      background: "#e6ebf2",
      foreground: "#12141a",
      accent: "#c8ff00",
      accentInk: "#101208",
      inkSoft: "#5c6475",
      atmosphere:
        "radial-gradient(ellipse 80% 50% at 10% -10%, rgba(200,255,0,0.28), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(90,140,255,0.18), transparent 50%), linear-gradient(165deg, #f4f6fa 0%, #e6ebf2 45%, #dce3ee 100%)",
    },
  },
  {
    id: "ink-amber",
    name: "Ink Amber",
    note: "Warm paper + caution amber — instrument feel",
    vars: {
      background: "#f3efe6",
      foreground: "#1a1410",
      accent: "#ffb020",
      accentInk: "#1a1200",
      inkSoft: "#6b6258",
      atmosphere:
        "radial-gradient(ellipse 70% 45% at 15% 0%, rgba(255,176,32,0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(255,100,60,0.1), transparent 50%), linear-gradient(165deg, #faf6ef 0%, #f3efe6 50%, #ebe4d8 100%)",
    },
  },
  {
    id: "ice-blue",
    name: "Ice Blue",
    note: "Crisp clinical — electric blue accent",
    vars: {
      background: "#e8eef8",
      foreground: "#0e1524",
      accent: "#3b82f6",
      accentInk: "#eff6ff",
      inkSoft: "#5a6a84",
      atmosphere:
        "radial-gradient(ellipse 75% 50% at 20% -5%, rgba(59,130,246,0.2), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 30%, rgba(14,165,233,0.12), transparent 50%), linear-gradient(165deg, #f5f8fc 0%, #e8eef8 50%, #dde6f4 100%)",
    },
  },
  {
    id: "volt-magenta",
    name: "Volt Magenta",
    note: "High energy — hot pink on cool gray",
    vars: {
      background: "#eceaef",
      foreground: "#141018",
      accent: "#ff2d6f",
      accentInk: "#fff0f5",
      inkSoft: "#6a6170",
      atmosphere:
        "radial-gradient(ellipse 70% 45% at 10% 0%, rgba(255,45,111,0.18), transparent 55%), radial-gradient(ellipse 55% 40% at 95% 15%, rgba(168,85,247,0.12), transparent 50%), linear-gradient(165deg, #f7f5f8 0%, #eceaef 50%, #e3e0e8 100%)",
    },
  },
  {
    id: "forest-mint",
    name: "Forest Mint",
    note: "Calmer tech — deep ink + mint",
    vars: {
      background: "#e7efe9",
      foreground: "#102018",
      accent: "#34d399",
      accentInk: "#042f1a",
      inkSoft: "#5a6e62",
      atmosphere:
        "radial-gradient(ellipse 70% 45% at 15% 0%, rgba(52,211,153,0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 25%, rgba(16,185,129,0.1), transparent 50%), linear-gradient(165deg, #f2f7f3 0%, #e7efe9 50%, #d9e6dc 100%)",
    },
  },
  {
    id: "noir-lime",
    name: "Noir Lime",
    note: "Dark base + lime — night console (not generic purple)",
    vars: {
      background: "#0f1218",
      foreground: "#eef2f7",
      accent: "#c8ff00",
      accentInk: "#101208",
      inkSoft: "#8b93a3",
      atmosphere:
        "radial-gradient(ellipse 70% 45% at 15% 0%, rgba(200,255,0,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, rgba(90,140,255,0.1), transparent 50%), linear-gradient(165deg, #151922 0%, #0f1218 50%, #0a0d12 100%)",
    },
  },
];

function ThemePreview({ theme, active }: { theme: Theme; active?: boolean }) {
  const v = theme.vars;
  const style = {
    ["--background" as string]: v.background,
    ["--foreground" as string]: v.foreground,
    ["--accent" as string]: v.accent,
    ["--accent-ink" as string]: v.accentInk,
    ["--ink-soft" as string]: v.inkSoft,
    background: v.atmosphere,
    color: v.foreground,
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className={`overflow-hidden border-2 ${
        active ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/40" : "border-current/20"
      }`}
    >
      {/* Mini nav */}
      <div
        className="flex items-center justify-between border-b px-4 py-3"
        style={{ borderColor: `${v.foreground}22` }}
      >
        <div className="text-[var(--foreground)]">
          <MarkA className="h-8 w-16" />
        </div>
        <div className="hidden gap-3 text-[11px] sm:flex" style={{ color: v.inkSoft }}>
          <span>Work</span>
          <span>Lab</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Mini hero */}
      <div className="px-4 py-5">
        <p
          className="font-mono text-[9px] tracking-[0.16em] uppercase"
          style={{ color: v.inkSoft }}
        >
          AI SYSTEMS
          <span
            className="ml-1.5 px-1 py-0.5 normal-case tracking-normal"
            style={{ background: v.accent, color: v.accentInk }}
          >
            live
          </span>
        </p>
        <p
          className="mt-2 font-[family-name:var(--font-display)] text-2xl font-black leading-none tracking-tight"
        >
          Görkem
          <br />
          Tanağardıgil
        </p>
        <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed" style={{ color: v.inkSoft }}>
          RAG knowledge bases → specialized agents. Grounded answers, not thin air.
        </p>
        <div className="mt-3 flex gap-2">
          <span
            className="px-2.5 py-1.5 text-[10px] font-semibold"
            style={{ background: v.foreground, color: v.background }}
          >
            See how it works
          </span>
          <span
            className="border-2 px-2.5 py-1.5 text-[10px] font-semibold"
            style={{ borderColor: v.foreground }}
          >
            Contact
          </span>
        </div>
      </div>

      {/* Mini stage chip */}
      <div className="px-4 pb-4">
        <div
          className="flex gap-1 border-2 p-1"
          style={{ borderColor: v.foreground, background: `${v.background}cc` }}
        >
          {["Ground", "Graph", "Specialize", "Verify"].map((s, i) => (
            <span
              key={s}
              className="flex-1 px-1 py-1.5 text-center font-mono text-[8px] font-bold uppercase"
              style={
                i === 0
                  ? { background: v.foreground, color: v.background }
                  : { color: v.inkSoft }
              }
            >
              {s}
            </span>
          ))}
        </div>
        <div
          className="mt-1 border-2 border-t-0 px-3 py-2"
          style={{ borderColor: v.foreground, background: `${v.background}99` }}
        >
          <span
            className="inline-block px-1 py-0.5 font-mono text-[8px]"
            style={{ background: v.accent, color: v.accentInk }}
          >
            Problem · Answers float free of your docs
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ThemesPage() {
  const [selected, setSelected] = useState(themes[0].id);
  const current = themes.find((t) => t.id === selected) ?? themes[0];

  return (
    <div className="lab-atmosphere min-h-screen text-[var(--foreground)]">
      <div className="lab-noise pointer-events-none absolute inset-0" aria-hidden />
      <main className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="font-mono text-xs font-medium underline decoration-2 underline-offset-4"
          >
            ← Site
          </Link>
          <Link
            href="/brand-marks"
            className="font-mono text-xs font-medium text-[color:var(--ink-soft)] underline decoration-2 underline-offset-4"
          >
            Brand marks
          </Link>
        </div>

        <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
          Color themes
        </h1>
        <p className="mt-3 max-w-2xl text-[color:var(--ink-soft)]">
          GT monogram stays. These are palette-only options for the whole site. Click a theme to
          enlarge it below — tell me the id when you want it applied.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => setSelected(theme.id)}
              className="text-left transition hover:-translate-y-0.5"
            >
              <p className="mb-2 font-mono text-[11px] tracking-wider text-[color:var(--ink-soft)] uppercase">
                {theme.id}
                {theme.id === "signal-lime" ? " · current" : ""}
              </p>
              <ThemePreview theme={theme} active={selected === theme.id} />
              <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-extrabold">
                {theme.name}
              </p>
              <p className="text-sm text-[color:var(--ink-soft)]">{theme.note}</p>
              <div className="mt-2 flex gap-1.5">
                {[
                  theme.vars.background,
                  theme.vars.foreground,
                  theme.vars.accent,
                  theme.vars.inkSoft,
                ].map((c) => (
                  <span
                    key={c}
                    className="h-5 w-5 border border-black/15"
                    style={{ background: c }}
                    title={c}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-extrabold">
            Selected: {current.name}
          </h2>
          <p className="mt-1 font-mono text-xs text-[color:var(--ink-soft)]">
            id = {current.id}
          </p>
          <div className="mt-6 max-w-xl">
            <ThemePreview theme={current} active />
          </div>
        </section>
      </main>
    </div>
  );
}
