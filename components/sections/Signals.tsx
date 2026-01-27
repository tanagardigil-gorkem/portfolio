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
          <p className="text-cyan-200/70 max-w-2xl">
            Direct lines for collaboration, advisories, and mission invites.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {signals.map((signal) => {
            const Icon = signalIcons[signal.label as keyof typeof signalIcons];
            return (
              <a
                key={signal.label}
                href={signal.href}
                className="group bg-[#0a1529]/70 border border-cyan-900/40 rounded-2xl p-5 hover:border-cyan-500/60 transition-colors shadow-lg backdrop-blur-sm flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1529]"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-900/40 border border-cyan-700 flex items-center justify-center text-cyan-300 group-hover:text-white transition-colors">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/70">
                    {signal.label}
                  </div>
                  <div className="text-lg text-white group-hover:text-cyan-200 transition-colors break-words">
                    {signal.value}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
