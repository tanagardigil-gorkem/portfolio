"use client";

import React from "react";
import { Anchor } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function Origin() {
  return (
    <section className="py-32 relative">
      <Reveal>
        <div className="relative border border-cyan-900/30 bg-[#020617]/80 backdrop-blur-md p-10 overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8">
            <div className="bg-cyan-950/30 p-4 rounded-lg border border-cyan-900/50 flex flex-col items-center justify-center min-w-[120px]">
              <Anchor className="text-cyan-500 mb-2" size={32} />
              <span className="font-mono text-xs text-cyan-400">NAVY OPS</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Origin: Turkish Navy</h3>
              <p className="text-cyan-500 font-mono text-sm mb-4">
                Computer Engineer & Officer | 2010 - 2021
              </p>
              <p className="text-slate-200 leading-relaxed mb-4">
                Where resilience was engineered. Developed mission-critical Java systems where
                stability was a necessity, not a feature. Implemented strict security encryption and
                authorization protocols.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
