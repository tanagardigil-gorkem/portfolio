"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map as MapIcon } from "lucide-react";
import Reveal from "../ui/Reveal";
import { additionalProjects, featuredProjects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-32 scroll-mt-24">
      <Reveal>
        <div className="flex items-center gap-3 mb-10 justify-center">
          <MapIcon className="text-cyan-400" size={20} aria-hidden="true" />
          <h2 className="text-3xl font-bold text-white tracking-tight">Recent Operations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <motion.a
              key={project.name}
              whileHover={{ y: -4 }}
              href={project.link}
              className="group bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:border-cyan-500/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1529]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">
                  {project.period}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] px-2 py-1 bg-[#112240] text-cyan-200/70 rounded-full border border-cyan-900/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-12 border border-cyan-900/40 rounded-2xl bg-[#0a1529]/50 p-6 backdrop-blur-sm">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300 mb-4">
            Additional Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-start justify-between gap-4 border border-cyan-900/30 rounded-xl p-4 bg-[#0a1529]/60"
              >
                <div>
                  <div className="text-white font-semibold">{project.name}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] px-2 py-1 bg-[#112240] text-cyan-200/70 rounded-full border border-cyan-900/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-cyan-500/70 uppercase tracking-[0.2em]">log</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
