"use client";

import React from "react";
import { motion } from "framer-motion";
import { Anchor, Shield, Lock } from "lucide-react";
import { useTranslation } from "../../lib/i18n/context";

export default function Origin() {
  const { t } = useTranslation();

  return (
    <section className="py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative border border-cyan-900/30 bg-[#020617]/80 backdrop-blur-md p-5 sm:p-10 overflow-hidden rounded-2xl shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -skew-x-12 translate-x-[-100%] animate-shimmer pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8">
            <div className="bg-cyan-950/30 p-6 rounded-xl border border-cyan-900/50 flex flex-col items-center justify-center min-w-[140px] gap-3">
              <div className="relative">
                <Anchor className="text-cyan-500" size={36} />
                <div className="absolute -inset-3 rounded-full bg-cyan-500/10 animate-sonar opacity-50" />
              </div>
              <span className="font-mono text-xs text-cyan-400 tracking-widest">{t.origin.badge}</span>
              <div className="flex gap-2 mt-1">
                <Shield size={14} className="text-cyan-600/60" />
                <Lock size={14} className="text-cyan-600/60" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.origin.title}</h3>
              <p className="text-cyan-500 font-mono text-sm mb-4">
                {t.origin.subtitle}
              </p>
              <p className="text-slate-200 leading-relaxed mb-4">
                {t.origin.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.origin.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#112240] rounded-full text-xs text-cyan-200/70 border border-cyan-900/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
