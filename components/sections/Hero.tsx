"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type HeroProps = {
  introPhase: "scanning" | "locking" | "identified" | "finished";
};

export default function Hero({ introPhase }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="min-h-screen flex flex-col justify-center items-center text-center relative pt-20">
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
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          GORKEM<br />TANAGARDIGIL
        </h1>
        <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed">
          Senior Software Engineer blending <span className="text-cyan-400">naval discipline</span> with
          modern cloud engineering. I build resilient systems that stay online when the seas get
          rough.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="bg-cyan-600 text-white font-bold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1f36]"
          >
            View Missions
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#signals"
            className="border border-cyan-500/50 text-cyan-200 px-6 py-3 rounded-full hover:border-cyan-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1f36]"
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
