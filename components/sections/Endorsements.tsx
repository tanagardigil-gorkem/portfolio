"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { endorsements } from "../../data/portfolio";
import { useTranslation } from "../../lib/i18n/context";

export default function Endorsements() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % endorsements.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + endorsements.length) % endorsements.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = endorsements[active];

  return (
    <section className="py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80 mb-3">
          <span className="w-8 h-px bg-cyan-500/50" />
          {t.endorsements.label}
          <span className="w-8 h-px bg-cyan-500/50" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">{t.endorsements.title}</h2>
        <p className="text-cyan-200/60">{t.endorsements.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-3xl blur-xl" />

        <div className="relative border border-cyan-900/30 bg-[#0a1529]/70 backdrop-blur-md rounded-2xl p-5 sm:p-10 overflow-hidden min-h-[240px] sm:min-h-[280px] flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -skew-x-12 translate-x-[-100%] animate-shimmer pointer-events-none" />

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cyan-500/10">
            <Quote size={40} className="sm:hidden" aria-hidden="true" />
            <Quote size={64} className="hidden sm:block" aria-hidden="true" />
          </div>

          <div className="relative z-10 flex-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 italic">
                  &ldquo;{t.endorsements.items[active]?.text ?? current.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold font-mono text-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    {current.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{current.name}</div>
                    <div className="text-xs font-mono text-cyan-400/70">
                      {current.role} &middot; {current.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t border-cyan-900/20">
            <div className="flex gap-2">
              {endorsements.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setDirection(idx > active ? 1 : -1);
                    setActive(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    idx === active
                      ? "bg-cyan-400 w-6 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                      : "bg-cyan-900/60 hover:bg-cyan-700/60"
                  }`}
                  aria-label={`View endorsement ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="w-8 h-8 rounded-lg border border-cyan-900/40 flex items-center justify-center text-cyan-400/60 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-950/40 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Previous endorsement"
              >
                <ChevronLeft size={16} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-8 h-8 rounded-lg border border-cyan-900/40 flex items-center justify-center text-cyan-400/60 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-950/40 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Next endorsement"
              >
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
