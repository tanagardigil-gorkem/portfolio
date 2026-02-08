"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map as MapIcon, ExternalLink } from "lucide-react";
import { additionalProjects, featuredProjects } from "../../data/portfolio";
import { useTranslation } from "../../lib/i18n/context";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-32 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-12 justify-center">
          <MapIcon className="text-cyan-400" size={20} aria-hidden="true" />
          <h2 className="text-3xl font-bold text-white tracking-tight">{t.projects.title}</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project, idx) => (
            <motion.a
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              href={project.link}
              className="group relative bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1529] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">{project.name}</h3>
                  <ExternalLink size={16} className="text-cyan-500/40 group-hover:text-cyan-400 transition-colors mt-1 shrink-0" />
                </div>
                <span className="inline-block px-2 py-0.5 bg-cyan-950/60 border border-cyan-500/20 text-cyan-300/80 text-[10px] font-mono rounded mb-3">
                  {project.period}
                </span>
                <p className="text-slate-200 text-sm leading-relaxed mb-4">{t.projects.featured[idx]?.description ?? project.description}</p>

                <div className="pt-4 border-t border-cyan-900/30">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] px-2 py-1 bg-cyan-900/30 text-cyan-200/80 rounded border border-cyan-800/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 border border-cyan-900/40 rounded-2xl bg-[#0a1529]/50 p-6 backdrop-blur-sm"
        >
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300 mb-4">
            {t.projects.additionalTitle}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {additionalProjects.map((project, idx) => (
              <div
                key={project.name}
                className="flex items-start justify-between gap-4 border border-cyan-900/30 rounded-xl p-4 bg-[#0a1529]/60 hover:border-cyan-800/60 transition-colors"
              >
                <div>
                  <div className="text-white font-semibold">{t.projects.additional[idx]?.name ?? project.name}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
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
                <span className="text-[10px] font-mono text-cyan-500/50 uppercase tracking-[0.2em] shrink-0">log</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
