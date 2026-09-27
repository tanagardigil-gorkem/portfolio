import type { Metadata } from "next";
import ContactChannels from "../../components/console/ContactChannels";
import LabPageFrame from "../../components/console/LabPageFrame";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, LinkedIn, GitHub, and resume for Görkem Tanağardıgil.",
};

export default function ContactPage() {
  return (
    <LabPageFrame>
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--ink-soft)] uppercase">
          Contact
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight">
          Open a channel
        </h1>
        <p className="mt-4 max-w-lg text-[color:var(--ink-soft)]">
          Roles, collaborations, or agentic product work — pick a line and say hello.
        </p>

        <div className="mt-10">
          <ContactChannels />
        </div>

        <p className="mt-6 font-mono text-xs text-[color:var(--ink-soft)]">
          Prefer email for first contact — LinkedIn for roles, GitHub for code.
        </p>
      </main>
    </LabPageFrame>
  );
}
