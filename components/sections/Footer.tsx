"use client";

import React from "react";
import { signals } from "../../data/portfolio";
import Logo from "../ui/Logo";
import { useTranslation } from "../../lib/i18n/context";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.missionLog, href: "#mission-log" },
    { label: t.nav.arsenal, href: "#arsenal" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.captainsLog, href: "#captains-log" },
    { label: t.nav.signals, href: "#signals" },
  ];

  return (
    <footer className="relative z-10 border-t border-cyan-900/30 bg-[#060e1a]/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#top" className="flex items-center gap-3 text-cyan-400 mb-3">
              <Logo size={28} />
              <span className="font-mono text-sm font-bold tracking-wider">
                GORKEM TANAGARDIGIL
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/60 mb-3">
              {t.footer.navigation}
            </div>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/60 mb-3">
              {t.footer.connect}
            </div>
            <div className="space-y-2">
              {signals.map((signal) => (
                <a
                  key={signal.label}
                  href={signal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {signal.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-900/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-xs text-slate-500 font-mono">
            &copy; {year} Gorkem Tanagardigil. {t.footer.rights}
          </div>
          <div className="text-xs text-slate-600 font-mono">
            {t.footer.builtWith}
          </div>
        </div>
      </div>
    </footer>
  );
}
