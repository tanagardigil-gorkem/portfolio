import type { Metadata } from "next";
import Link from "next/link";
import LabPageFrame from "../../components/console/LabPageFrame";
import { launchMissions } from "../../data/console";

export const metadata: Metadata = {
  title: "Launch missions",
  description: "Private launch checklist — not linked from the public site.",
  robots: { index: false, follow: false },
};

export default function MissionsPage() {
  const done = launchMissions.filter((m) => m.status === "done").length;
  const yours = launchMissions.filter((m) => m.owner === "you");
  const code = launchMissions.filter((m) => m.owner === "code");

  return (
    <LabPageFrame>
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--ink-soft)] uppercase">
          Private
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight">
          Launch checklist
        </h1>
        <p className="mt-4 text-[color:var(--ink-soft)]">
          Not in nav, sitemap, or llms.txt. Bookmark{" "}
          <span className="font-mono text-sm text-[var(--foreground)]">/missions</span> if you
          need it. Most items need your Google / LinkedIn accounts.
        </p>
        <p className="mt-4 font-mono text-xs text-[color:var(--ink-soft)]">
          {done} / {launchMissions.length} complete · {yours.length} on you · {code.length}{" "}
          code-side
        </p>

        <ol className="mt-10 space-y-4">
          {launchMissions.map((mission, i) => (
            <li
              key={mission.id}
              className="border-2 border-[var(--foreground)] bg-[var(--panel)] p-5"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center font-mono text-[11px] font-bold ${
                    mission.status === "done"
                      ? "bg-[var(--accent)] text-[var(--accent-ink)]"
                      : "bg-[var(--foreground)] text-[var(--background)]"
                  }`}
                >
                  {i + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-semibold">{mission.title}</h2>
                    <span className="font-mono text-[10px] uppercase text-[color:var(--ink-soft)]">
                      {mission.status}
                    </span>
                    <span className="font-mono text-[10px] uppercase text-[color:var(--ink-soft)]">
                      · {mission.owner === "you" ? "you" : "code"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    {mission.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

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
