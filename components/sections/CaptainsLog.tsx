"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Tag } from "lucide-react";
import { captainsLog } from "../../data/portfolio";

const MotionLink = motion.create(Link);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CaptainsLog() {
  const sortedPosts = [...captainsLog].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="captains-log" className="py-32 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80 mb-3">
          <span className="w-8 h-px bg-cyan-500/50" />
          Dispatches
          <span className="w-8 h-px bg-cyan-500/50" />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white">Captain&apos;s Log</h2>
        <p className="text-cyan-200/60 max-w-2xl mx-auto">
          Field notes on engineering, architecture, and lessons learned from the deep.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {sortedPosts.map((post, idx) => (
          <MotionLink
            key={post.slug}
            href={`/log/${post.slug}`}
            variants={cardVariants}
            whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.5)" }}
            className={`group relative bg-[#0a1529]/60 border border-cyan-900/30 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-shadow shadow-lg backdrop-blur-sm block ${
              idx === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:animate-shimmer pointer-events-none" />

            <div className="relative z-10 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#112240] w-10 h-10 rounded-lg flex items-center justify-center text-cyan-400 shadow-inner group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-shadow">
                  <BookOpen size={18} aria-hidden="true" />
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-cyan-500/70">
                  <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                  <span className="w-1 h-1 rounded-full bg-cyan-500/40" />
                  <span className="flex items-center gap-1">
                    <Clock size={10} aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {post.title}
              </h3>

              <p className="text-slate-300/80 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-cyan-950/60 border border-cyan-500/20 rounded-full text-[10px] font-mono text-cyan-300/70 uppercase tracking-wider"
                    >
                      <Tag size={8} aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
                  Read
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </div>
            </div>

            {idx === 0 && (
              <div className="absolute top-4 right-4 px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/30 rounded text-[9px] font-mono text-cyan-300 uppercase tracking-widest">
                Latest
              </div>
            )}
          </MotionLink>
        ))}
      </motion.div>
    </section>
  );
}
