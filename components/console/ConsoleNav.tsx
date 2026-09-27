"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { consoleNav } from "../../data/console";

function SignatureMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 88 44"
      className={className}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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

function navIsActive(pathname: string, href: string) {
  if (href.startsWith("/#") || href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function ConsoleNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-[var(--line)] backdrop-blur-md" : ""
      }`}
      style={scrolled ? { background: "var(--header-bg)" } : undefined}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="/"
          aria-label="Görkem Tanağardıgil — home"
          className="group inline-flex items-center text-[var(--foreground)] transition hover:opacity-90"
        >
          <SignatureMark className="h-9 w-[5rem] sm:h-11 sm:w-24" />
          <span className="sr-only">Görkem Tanağardıgil</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-7 md:flex" aria-label="Primary">
          {consoleNav.map((item) => {
            const active = navIsActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-[var(--foreground)] underline decoration-[var(--accent)] decoration-2 underline-offset-4"
                    : "text-[color:var(--ink-soft)] hover:text-[var(--foreground)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="md:hidden text-[var(--foreground)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={prefersReducedMotion ? false : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-[var(--line)] px-5 py-4 md:hidden"
          style={{ background: "var(--header-bg)" }}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {consoleNav.map((item) => {
              const active = navIsActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2.5 text-base font-medium ${
                      active
                        ? "bg-[var(--accent)] px-2 text-[var(--accent-ink)]"
                        : "text-[var(--foreground)]"
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
