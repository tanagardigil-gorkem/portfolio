"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { signals } from "../../data/portfolio";

const signalIcons = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function Signals() {
  return (
    <section id="signals" className="py-28 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80 mb-3">
            Signals
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">Signals & Channels</h2>
          <p className="text-cyan-200/70 max-w-2xl">
            Direct lines for collaboration, advisories, and mission invites.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          {signals.map((signal) => {
            const Icon = signalIcons[signal.label as keyof typeof signalIcons];
            return (
              <motion.a
                key={signal.label}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                href={signal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#0a1529]/70 border border-cyan-900/40 rounded-2xl p-5 sm:p-8 hover:border-cyan-500/60 hover:bg-cyan-900/20 transition-all shadow-lg backdrop-blur-sm flex flex-col items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1529] overflow-hidden"
                aria-label={`${signal.label}: ${signal.value}`}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-sonar opacity-0 group-hover:opacity-100" />
                  <div className="absolute inset-0 rounded-full bg-cyan-500/15 animate-sonar opacity-0 group-hover:opacity-100" style={{ animationDelay: "0.5s" }} />
                  <div className="relative w-16 h-16 rounded-full bg-cyan-900/40 border-2 border-cyan-700 flex items-center justify-center text-cyan-300 group-hover:text-white group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all z-10">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/70 group-hover:text-cyan-300 transition-colors mb-1">
                    {signal.label}
                  </div>
                  <div className="text-[10px] text-cyan-500/50 font-mono truncate max-w-[180px]">
                    {signal.value}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
