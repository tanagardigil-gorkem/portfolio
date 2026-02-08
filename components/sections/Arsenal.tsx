"use client";

import React from "react";
import { motion } from "framer-motion";
import { Boxes, Cloud, Cpu, Database, Brain, ShieldCheck } from "lucide-react";
import { arsenalStacks } from "../../data/portfolio";

const stackIcons = [Cpu, Cloud, Database, Brain, Boxes, ShieldCheck];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Arsenal() {
  return (
    <section id="arsenal" className="py-32 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80 mb-3">
          <span className="w-8 h-px bg-cyan-500/50" />
          Systems & Tools
          <span className="w-8 h-px bg-cyan-500/50" />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white">Technical Arsenal</h2>
        <p className="text-cyan-200/60">Instrumentation for high-pressure environments.</p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {arsenalStacks.map((stack, idx) => {
          const Icon = stackIcons[idx];
          return (
            <motion.div
              key={stack.title}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.5)" }}
              className="relative bg-[#0a1529]/60 border border-cyan-900/30 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-shadow shadow-lg backdrop-blur-sm overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:animate-shimmer pointer-events-none" />

              <div className="relative z-10">
                <div className="bg-[#112240] w-12 h-12 rounded-lg flex items-center justify-center text-cyan-400 mb-4 shadow-inner group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-shadow">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{stack.title}</h3>
                <ul className="space-y-2 text-slate-300 text-sm font-mono">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_5px_cyan]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
