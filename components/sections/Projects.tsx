"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map as MapIcon } from "lucide-react";
import Reveal from "../ui/Reveal";
import { additionalProjects, featuredProjects } from "../../data/portfolio";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 scroll-mt-24">
      <Reveal>
        <div className="flex items-center gap-3 mb-10 justify-center">
          <MapIcon className="text-cyan-400" size={20} aria-hidden="true" />
          <h2 className="text-3xl font-bold text-white tracking-tight">Recent Operations</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <motion.a
              key={project.name}
              whileHover={{ y: -4 }}
              href={project.link}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:border-cyan-500/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1529] overflow-hidden"
            >
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed min-h-[60px]">{project.description}</p>
              
              <AnimatePresence>
                {hoveredProject === project.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 pt-4 border-t border-cyan-900/40"
                  >
                    <div className="text-xs font-mono text-cyan-300/70 mb-2 uppercase tracking-wider">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2 py-1 bg-cyan-900/40 text-cyan-200 rounded border border-cyan-700/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </div>
        <div className="mt-12 border border-cyan-900/40 rounded-2xl bg-[#0a1529]/50 p-6 backdrop-blur-sm">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300 mb-4">
            Additional Projects
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
