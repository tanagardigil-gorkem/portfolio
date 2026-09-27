import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { email, githubUrl, linkedInUrl } from "../../lib/site";

export const contactChannels = [
  {
    id: "01",
    label: "Email",
    hint: "Primary channel",
    value: email,
    href: `mailto:${email}`,
    external: false,
    Icon: Mail,
    primary: true,
  },
  {
    id: "02",
    label: "LinkedIn",
    hint: "Roles & network",
    value: "linkedin.com/in/gorkem-tanagardigil",
    href: linkedInUrl,
    external: true,
    Icon: Linkedin,
    primary: false,
  },
  {
    id: "03",
    label: "GitHub",
    hint: "Code & experiments",
    value: "github.com/tanagardigil-gorkem",
    href: githubUrl,
    external: true,
    Icon: Github,
    primary: false,
  },
  {
    id: "04",
    label: "Resume",
    hint: "PDF download",
    value: "Gorkem_Tanagardigil_Resume.pdf",
    href: "/resume.pdf",
    external: false,
    Icon: FileText,
    primary: false,
  },
] as const;

type ContactChannelsProps = {
  /** Omit resume on compact homepage CTA if desired */
  includeResume?: boolean;
};

export default function ContactChannels({ includeResume = true }: ContactChannelsProps) {
  const channels = includeResume
    ? contactChannels
    : contactChannels.filter((c) => c.id !== "04");

  return (
    <ul className="border-2 border-[var(--foreground)]">
      {channels.map((ch, i) => {
        const Icon = ch.Icon;
        return (
          <li
            key={ch.id}
            className={i < channels.length - 1 ? "border-b-2 border-[var(--foreground)]" : ""}
          >
            <a
              href={ch.href}
              target={ch.external ? "_blank" : undefined}
              rel={ch.external ? "noopener noreferrer" : undefined}
              className={`group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-3 py-4 transition sm:gap-5 sm:px-6 sm:py-5 ${
                ch.primary
                  ? "bg-[var(--accent)] hover:brightness-95"
                  : "bg-[var(--panel)] hover:bg-[var(--accent)]"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[var(--foreground)] sm:h-12 sm:w-12 ${
                  ch.primary
                    ? "bg-[var(--foreground)] text-[var(--accent)]"
                    : "bg-[var(--foreground)] text-[var(--background)] group-hover:text-[var(--accent)]"
                }`}
              >
                <Icon size={18} strokeWidth={2.25} aria-hidden className="sm:hidden" />
                <Icon size={20} strokeWidth={2.25} aria-hidden className="hidden sm:block" />
              </span>

              <span className="min-w-0">
                <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="font-mono text-[10px] tracking-wider text-[var(--accent-ink)]/60 uppercase">
                    {ch.id}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-base font-extrabold tracking-tight text-[var(--foreground)] sm:text-xl">
                    {ch.label}
                  </span>
                  <span className="hidden font-mono text-[10px] text-[color:var(--ink-soft)] group-hover:text-[var(--accent-ink)]/70 sm:inline">
                    {ch.hint}
                  </span>
                </span>
                <span className="mt-0.5 block truncate text-sm font-medium text-[color:var(--ink-soft)] group-hover:text-[var(--accent-ink)] sm:text-base">
                  {ch.value}
                </span>
              </span>

              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[var(--foreground)] text-[var(--foreground)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0_0_var(--foreground)] sm:h-10 sm:w-10 ${
                  ch.primary ? "bg-[var(--background)]/35" : "group-hover:bg-[var(--background)]/50"
                }`}
                aria-hidden
              >
                <ArrowUpRight size={16} className="sm:hidden" />
                <ArrowUpRight size={18} className="hidden sm:block" />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
