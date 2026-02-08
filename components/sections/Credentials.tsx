"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, BookOpen } from "lucide-react";
import { certifications, languages, publications } from "../../data/portfolio";

const levelWidths: Record<string, string> = {
  Native: "w-full",
  Fluent: "w-4/5",
  Conversational: "w-3/5",
  Beginner: "w-2/5",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Credentials() {
  return (
    <section className="py-28">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <motion.div
          variants={cardVariants}
          className="bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:border-cyan-800/60 transition-colors"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 flex items-center justify-center text-cyan-400">
              <Award size={16} />
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300">
              Certifications
            </div>
          </div>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="border border-cyan-900/30 rounded-lg p-4 bg-[#0a1529]/60 hover:bg-[#0a1529]/80 transition-colors">
                <div className="text-white font-semibold">{cert.title}</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-2 py-0.5 bg-cyan-950/60 border border-cyan-500/20 text-cyan-300/80 rounded font-mono">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-cyan-500/60">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:border-cyan-800/60 transition-colors"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 flex items-center justify-center text-cyan-400">
              <Globe size={16} />
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300">
              Languages
            </div>
          </div>
          <div className="space-y-3">
            {languages.map((language) => (
              <div
                key={language.name}
                className="border border-cyan-900/30 rounded-lg p-4 bg-[#0a1529]/60"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">{language.name}</div>
                  <div className="text-[10px] text-cyan-300/80 uppercase tracking-[0.2em] font-mono">
                    {language.level}
                  </div>
                </div>
                <div className="w-full h-1 bg-cyan-950/60 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full ${levelWidths[language.level] || "w-1/2"}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "auto" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:border-cyan-800/60 transition-colors"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 flex items-center justify-center text-cyan-400">
              <BookOpen size={16} />
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300">
              Publication
            </div>
          </div>
          {publications.map((publication) => (
            <div
              key={publication.title}
              className="border border-cyan-900/30 rounded-lg p-4 bg-[#0a1529]/60"
            >
              <div className="text-white font-semibold mb-2">{publication.title}</div>
              <div className="text-xs text-cyan-300/80 mb-1">{publication.venue}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-0.5 bg-cyan-950/60 border border-cyan-500/20 text-cyan-300/70 rounded font-mono">
                  {publication.location}
                </span>
                <span className="text-xs text-cyan-500/60">{publication.date}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
