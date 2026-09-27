import type { ReactNode } from "react";
import ConsoleNav from "./ConsoleNav";
import { ConsoleFooter } from "./ConsoleSections";
import SkipToContent from "../ui/SkipToContent";

export default function LabPageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="lab-atmosphere relative min-h-screen text-[var(--foreground)] antialiased">
      <div className="lab-noise pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative">
        <SkipToContent />
        <ConsoleNav />
        <div id="main-content">{children}</div>
        <ConsoleFooter />
      </div>
    </div>
  );
}
