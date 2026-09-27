import ConsoleNav from "./ConsoleNav";
import ConsoleHero from "./ConsoleHero";
import AgentLoop from "./AgentLoop";
import {
  ContactBlock,
  ConsoleFooter,
  FeaturedWork,
  LabPreview,
  ProofStrip,
  WritingPreview,
} from "./ConsoleSections";
import SkipToContent from "../ui/SkipToContent";

export default function AgentConsoleShell() {
  return (
    <div className="lab-atmosphere relative min-h-screen text-[var(--foreground)] antialiased">
      <div className="lab-noise pointer-events-none absolute inset-0" aria-hidden />
      <div className="lab-rules pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative">
        <SkipToContent />
        <ConsoleNav />
        <main id="main-content">
          <ConsoleHero />
          <AgentLoop />
          <ProofStrip />
          <FeaturedWork />
          <LabPreview />
          <WritingPreview />
          <ContactBlock />
        </main>
        <ConsoleFooter />
      </div>
    </div>
  );
}
