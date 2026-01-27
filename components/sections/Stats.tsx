"use client";

import React from "react";
import Reveal from "../ui/Reveal";
import { missionStats } from "../../data/portfolio";

export default function Stats() {
  return (
    <section className="py-24">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missionStats.map((stat) => (
            <div
              key={stat.title}
              className="bg-[#0a1529]/60 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <h3 className="text-cyan-300 font-mono text-xs uppercase tracking-[0.3em] mb-2">
                {stat.title}
              </h3>
              <p className="text-slate-400 text-sm">{stat.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
