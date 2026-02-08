"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useTranslation } from "../../lib/i18n/context";
import { locales, localeNames, localeFlags } from "../../lib/i18n/config";
import type { Locale } from "../../lib/i18n/config";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs font-mono text-cyan-300/80 border border-cyan-500/30 px-2.5 py-1.5 rounded-lg hover:border-cyan-400 hover:text-white hover:bg-cyan-950/40 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe size={12} />
        <span>{localeFlags[locale]}</span>
        <span className="hidden sm:inline uppercase">{locale}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-[#0a1529]/95 backdrop-blur-md border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] z-50 min-w-[160px]"
          >
            {locales.map((loc: Locale) => (
              <button
                key={loc}
                type="button"
                onClick={() => {
                  setLocale(loc);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-mono transition-colors cursor-pointer ${
                  locale === loc
                    ? "bg-cyan-500/15 text-cyan-300"
                    : "text-slate-300 hover:bg-cyan-900/30 hover:text-cyan-300"
                }`}
              >
                <span className="text-base">{localeFlags[loc]}</span>
                <span>{localeNames[loc]}</span>
                {locale === loc && (
                  <span className="ml-auto text-cyan-400 text-xs">●</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
