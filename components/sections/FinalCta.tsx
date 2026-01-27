"use client";

import React from "react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";

export default function FinalCta() {
  return (
    <section className="pb-32 pt-16 text-center">
      <Reveal>
        <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">Ready to Dive?</h2>
        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:gtanagardigil@gmail.com"
            className="bg-cyan-600 text-white font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1f36]"
          >
            Initiate Contact
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
