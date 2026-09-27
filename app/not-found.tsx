import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <div className="lab-atmosphere relative flex min-h-screen flex-col items-center justify-center px-5 text-[var(--foreground)]">
      <div className="lab-noise pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative max-w-lg border-2 border-[var(--foreground)] bg-[var(--panel)] p-8 text-center sm:p-10">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--ink-soft)] uppercase">
          404
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl">
          Channel not found
        </h1>
        <p className="mt-3 text-[color:var(--ink-soft)]">
          That route is not on this site. Head back to the lab home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-[var(--background)]"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[var(--foreground)] px-5 py-2.5 text-sm font-semibold"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
