"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Compass } from "lucide-react";
import { navLinks } from "../../data/portfolio";

type HeroProps = {
  introPhase: "scanning" | "locking" | "identified" | "finished";
};

export default function Hero({ introPhase }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="h-screen flex flex-col justify-center items-center text-center relative">
      <div className="absolute top-8 right-0 left-0 flex justify-center md:justify-end px-4">
        <div className="flex items-center gap-2 bg-black/30 border border-cyan-900/60 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
          <Compass className="text-cyan-400" size={16} />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-cyan-200/80 hover:text-cyan-400 px-2 uppercase tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={introPhase === "finished" ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1 rounded-full text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          MISSION CONTROL: ONLINE
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6 tracking-tight drop-shadow-lg">
          GORKEM<br />TANAGARDIGIL
        </h1>
        <p className="text-lg md:text-xl text-cyan-100/70 max-w-2xl mx-auto leading-relaxed">
          Senior Software Engineer blending <span className="text-cyan-400">naval discipline</span> with
          modern cloud engineering. I build resilient systems that stay online when the seas get
          rough.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="bg-cyan-600 text-white font-bold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-500 transition-colors"
          >
            View Missions
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#signals"
            className="border border-cyan-500/50 text-cyan-200 px-6 py-3 rounded-full hover:border-cyan-300 hover:text-white transition-colors"
          >
            Open Channel
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-12 text-cyan-500/50"
        animate={prefersReducedMotion ? { y: 0 } : { y: [0, 10, 0] }}
        transition={{ repeat: prefersReducedMotion ? 0 : Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
