"use client";

import React from "react";
import { motion } from "framer-motion";
import { Boxes, Cloud, Cpu, Database, Brain,ShieldCheck } from "lucide-react";
import Reveal from "../ui/Reveal";
import { arsenalStacks } from "../../data/portfolio";

const stackIcons = [Cpu, Cloud, Database, Brain, Boxes, ShieldCheck];

export default function Arsenal() {
  return (
    <section id="arsenal" className="py-32 scroll-mt-24">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Technical Arsenal</h2>
          <p className="text-cyan-200/60">Instrumentation for high-pressure environments.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {arsenalStacks.map((stack, idx) => {
            const Icon = stackIcons[idx];
            return (
              <motion.div
                key={stack.title}
                whileHover={{ y: -5 }}
                className="bg-[#0a1529]/60 border border-cyan-900/30 p-6 rounded-xl hover:border-cyan-500/50 transition-colors shadow-lg backdrop-blur-sm"
              >
                <div className="bg-[#112240] w-12 h-12 rounded-lg flex items-center justify-center text-cyan-400 mb-4 shadow-inner">
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
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
