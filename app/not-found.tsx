"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Radar, ArrowLeft } from "lucide-react";
import Logo from "../components/ui/Logo";

const seededRandom = (seed: number) => {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

function SonarSweep() {
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8">
      {[100, 75, 50, 25].map((pct) => (
        <div
          key={pct}
          className="absolute border border-cyan-500/15 rounded-full"
          style={{
            width: `${pct}%`,
            height: `${pct}%`,
            left: `${(100 - pct) / 2}%`,
            top: `${(100 - pct) / 2}%`,
          }}
        />
      ))}

      <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-500/10" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/10" />

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-1/2 h-1/2 origin-top-left"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(6,182,212,0.25) 0deg, rgba(6,182,212,0) 60deg, transparent 60deg)",
            borderRadius: "0 0 100% 0",
          }}
        />
      </motion.div>

      <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10" />

      <motion.div
        className="absolute inset-[-4%] border border-cyan-500/20 rounded-full"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-6xl sm:text-7xl font-bold font-mono text-cyan-400/80 tracking-tighter"
        >
          404
        </motion.div>
      </div>
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: seededRandom(i * 17 + 3) * 100,
    y: seededRandom(i * 31 + 7) * 100,
    size: 1 + seededRandom(i * 43 + 11) * 2.5,
    duration: 5 + seededRandom(i * 59 + 13) * 8,
    delay: seededRandom(i * 71 + 19) * 4,
    opacity: 0.08 + seededRandom(i * 83 + 23) * 0.2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -20, 0],
            opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GlitchText({ text }: { text: string }) {
  const glitchChars = "!@#$%^&*_+-=|<>?/~01";
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      if (frame > 30) {
        setDisplay(text);
        clearInterval(interval);
        return;
      }
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < frame) return text[i];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("")
      );
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return <>{display}</>;
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000a14] via-[#001020] to-[#000810] text-slate-200 font-sans flex flex-col relative overflow-hidden">
      <Particles />

      <svg className="fixed inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid404" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid404)" />
      </svg>

      <div className="fixed inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)" }} />

      <header className="relative z-10 px-6 py-6">
        <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
          <Logo size={28} showText />
        </a>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 -mt-16">
        <SonarSweep />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center max-w-md"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-red-400/70 mb-4">
            <Radar size={12} className="animate-pulse" />
            Signal Lost
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-mono tracking-tight">
            <GlitchText text="SECTOR NOT FOUND" />
          </h1>

          <p className="text-sm sm:text-base text-cyan-200/50 mb-8 leading-relaxed">
            The coordinates you entered don&apos;t match any known sector.
            This area is uncharted — or the route has been decommissioned.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/"
              className="bg-cyan-600 text-white font-bold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-500 transition-colors flex items-center gap-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000a14]"
            >
              <Home size={16} /> Return to Base
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="border border-cyan-500/30 text-cyan-300 px-6 py-3 rounded-full hover:border-cyan-400 hover:text-white hover:bg-cyan-950/30 transition-all flex items-center gap-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000a14]"
            >
              <ArrowLeft size={16} /> Go Back
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 border border-cyan-900/20 bg-black/30 backdrop-blur-sm rounded-lg px-4 py-3 max-w-xs"
        >
          <div className="text-[8px] text-cyan-500/40 uppercase tracking-[0.3em] mb-1.5 font-mono">System Log</div>
          <div className="text-[10px] text-cyan-500/50 font-mono space-y-0.5">
            <div>&gt; ROUTE_LOOKUP: FAILED</div>
            <div>&gt; STATUS: 404</div>
            <div>&gt; ACTION: REROUTE_RECOMMENDED</div>
          </div>
        </motion.div>
      </main>

      <footer className="relative z-10 text-center py-6">
        <div className="text-[10px] text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} Gorkem Tanagardigil
        </div>
      </footer>
    </div>
  );
}
