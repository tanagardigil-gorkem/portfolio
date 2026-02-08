"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { missionHistory } from "../../data/portfolio";

export default function MissionLog() {
  return (
    <section id="mission-log" className="py-32 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-cyan-900/50 flex-1" />
          <h2 className="text-2xl font-mono text-cyan-400 tracking-widest flex items-center gap-2">
            <Terminal size={20} aria-hidden="true" /> MISSION LOG
          </h2>
          <div className="h-px bg-cyan-900/50 flex-1" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-cyan-500/30 to-transparent" />

          <div className="space-y-12">
            {missionHistory.map((mission, idx) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-10 md:pl-20 group"
              >
                <div className="absolute left-[7px] md:left-[25px] top-8 w-3 h-3 rounded-full bg-cyan-500 border-2 border-cyan-300 animate-timeline-pulse z-10" />

                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500" />

                <div className="relative bg-[#0a1529]/80 backdrop-blur-md border border-cyan-900/50 p-5 sm:p-8 rounded-xl shadow-2xl hover:border-cyan-700/60 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{mission.title}</h3>
                      <p className="text-cyan-400 font-mono text-sm">{mission.role}</p>
                    </div>
                    <span className="px-3 py-1.5 bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs rounded-lg font-mono whitespace-nowrap self-start animate-glow-pulse">
                      {mission.period}
                    </span>
                  </div>
                  <p className="text-slate-200 mb-6 leading-relaxed">{mission.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {mission.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#112240] rounded-full text-xs text-cyan-200/70 border border-cyan-900/50 hover:border-cyan-500/50 hover:text-cyan-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
