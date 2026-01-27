"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../ui/Reveal";
import { signals } from "../../data/portfolio";

const signalIcons = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
};

export default function Signals() {
  return (
    <section id="signals" className="py-28 scroll-mt-24">
      <Reveal>
        <div className="flex flex-col items-center text-center mb-10">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80 mb-3">
            Signals
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">Signals & Channels</h2>
          <p className="text-cyan-200 max-w-2xl">
            Direct lines for collaboration, advisories, and mission invites.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          {signals.map((signal) => {
            const Icon = signalIcons[signal.label as keyof typeof signalIcons];
            return (
              <a
                key={signal.label}
                href={signal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0a1529]/70 border border-cyan-900/40 rounded-2xl p-6 hover:border-cyan-500/60 hover:bg-cyan-900/20 transition-all shadow-lg backdrop-blur-sm flex flex-col items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1529]"
                aria-label={`${signal.label}: ${signal.value}`}
              >
                <div className="w-16 h-16 rounded-full bg-cyan-900/40 border-2 border-cyan-700 flex items-center justify-center text-cyan-300 group-hover:text-white group-hover:border-cyan-500 transition-all group-hover:scale-110">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/70 group-hover:text-cyan-300 transition-colors">
                  {signal.label}
                </div>
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
