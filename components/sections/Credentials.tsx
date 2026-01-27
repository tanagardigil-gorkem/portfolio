"use client";

import React from "react";
import Reveal from "../ui/Reveal";
import { certifications, languages, publications } from "../../data/portfolio";

export default function Credentials() {
  return (
    <section className="py-28">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300 mb-4">
              Certifications
            </div>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="border border-cyan-900/30 rounded-lg p-3 bg-[#0a1529]/60">
                  <div className="text-white font-semibold">{cert.title}</div>
                  <div className="text-xs text-cyan-300/80 mt-1">
                    {cert.issuer} · {cert.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300 mb-4">
              Languages
            </div>
            <div className="space-y-3">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center justify-between border border-cyan-900/30 rounded-lg p-3 bg-[#0a1529]/60"
                >
                  <div className="text-white font-semibold">{language.name}</div>
                  <div className="text-xs text-cyan-300/80 uppercase tracking-[0.2em]">
                    {language.level}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300 mb-4">
              Publication
            </div>
            {publications.map((publication) => (
              <div
                key={publication.title}
                className="border border-cyan-900/30 rounded-lg p-3 bg-[#0a1529]/60"
              >
                <div className="text-white font-semibold">{publication.title}</div>
                <div className="text-xs text-cyan-300/80 mt-1">{publication.venue}</div>
                <div className="text-xs text-cyan-300/60 mt-1">
                  {publication.location} · {publication.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
