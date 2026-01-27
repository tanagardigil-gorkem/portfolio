"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map as MapIcon } from "lucide-react";
import Reveal from "../ui/Reveal";
import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <Reveal>
        <div className="flex items-center gap-3 mb-10 justify-center">
          <MapIcon className="text-cyan-400" size={20} />
          <h2 className="text-3xl font-bold text-white tracking-tight">Recent Operations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.a
              key={project.name}
              whileHover={{ y: -4 }}
              href={project.link}
              className="group bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">
                  case file
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
      </Reveal>
    </section>
  );
}
