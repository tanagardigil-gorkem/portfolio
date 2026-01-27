"use client";

import React from "react";
import { Terminal } from "lucide-react";
import Reveal from "../ui/Reveal";
import { missionHistory } from "../../data/portfolio";

export default function MissionLog() {
  return (
    <section id="mission-log" className="py-32 scroll-mt-24">
      <Reveal>
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-cyan-900/50 flex-1" />
          <h2 className="text-2xl font-mono text-cyan-400 tracking-widest flex items-center gap-2">
            <Terminal size={20} aria-hidden="true" /> MISSION LOG
          </h2>
          <div className="h-px bg-cyan-900/50 flex-1" />
        </div>
        <div className="grid gap-6">
          {missionHistory.map((mission) => (
            <div key={mission.title} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-700 group-hover:duration-200" />
              <div className="relative bg-[#0a1529]/80 backdrop-blur-md border border-cyan-900/50 p-8 rounded-lg shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{mission.title}</h3>
                    <p className="text-cyan-400 font-mono text-sm">{mission.role}</p>
                  </div>
                  <span className="px-3 py-1 bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs rounded font-mono whitespace-nowrap self-start">
                    {mission.period}
                  </span>
                </div>
                <p className="text-slate-200 mb-6 leading-relaxed">{mission.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {mission.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#112240] rounded-full text-xs text-cyan-200/70 border border-cyan-900/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
