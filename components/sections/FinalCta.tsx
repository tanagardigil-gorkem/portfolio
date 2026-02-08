"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Download } from "lucide-react";
import { useTranslation } from "../../lib/i18n/context";

export default function FinalCta() {
  const { t } = useTranslation();

  return (
    <section className="pb-32 pt-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl" />
        <div className="relative border border-cyan-900/30 bg-[#0a1529]/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -skew-x-12 translate-x-[-100%] animate-shimmer pointer-events-none" />

          <div className="relative z-10">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400/70 mb-4">
              {t.cta.label}
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {t.cta.title}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t.cta.titleAccent}
              </span>
            </h2>
            <p className="text-cyan-200/60 max-w-lg mx-auto mb-8">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:gtanagardigil@gmail.com"
                className="bg-cyan-600 text-white font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1f36] flex items-center justify-center gap-2"
              >
                <Send size={16} /> {t.cta.contact}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-500/40 text-cyan-200 font-bold px-8 py-4 rounded-full hover:border-cyan-400 hover:text-white hover:bg-cyan-950/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1f36] flex items-center justify-center gap-2"
              >
                <Download size={16} /> {t.cta.downloadResume}
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
