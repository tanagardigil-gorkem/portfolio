"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

const CyberPiriReisMap = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-75 mix-blend-overlay">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="coastGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(245,158,11,0.12)" />
          <stop offset="50%" stopColor="rgba(248,181,67,0.32)" />
          <stop offset="100%" stopColor="rgba(245,158,11,0.12)" />
        </linearGradient>
      </defs>

      <g stroke="currentColor" strokeWidth="0.8" className="text-amber-100/80">
        <line x1="50%" y1="50%" x2="0%" y2="0%" />
        <line x1="50%" y1="50%" x2="100%" y2="0%" />
        <line x1="50%" y1="50%" x2="0%" y2="100%" />
        <line x1="50%" y1="50%" x2="100%" y2="100%" />
        <line x1="50%" y1="50%" x2="50%" y2="0%" strokeDasharray="5 5" />
        <line x1="50%" y1="50%" x2="50%" y2="100%" strokeDasharray="5 5" />
        <line x1="50%" y1="50%" x2="0%" y2="50%" strokeDasharray="5 5" />
        <line x1="50%" y1="50%" x2="100%" y2="50%" strokeDasharray="5 5" />
      </g>

      <path
        d="M-50,200 Q200,150 400,300 T900,200 T1400,400"
        fill="none"
        stroke="url(#coastGradient)"
        strokeWidth="2"
        className="opacity-40"
      />
      <path
        d="M-50,600 Q300,550 600,700 T1100,600 T1600,800"
        fill="none"
        stroke="url(#coastGradient)"
        strokeWidth="2"
        className="opacity-30"
      />

      <g transform="translate(100, 150)" className="text-amber-100/80">
        <circle r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0,-30 L5,-5 L30,0 L5,5 L0,30 L-5,5 L-30,0 L-5,-5 Z" fill="currentColor" />
      </g>

      <g transform="translate(1400, 700)" className="text-amber-100/80">
        <circle r="60" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0,-50 L8,-8 L50,0 L8,8 L0,50 L-8,8 L-50,0 L-8,-8 Z" fill="currentColor" />
      </g>

      <g
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        transform="translate(50%, 50%) scale(4)"
        className="text-amber-100/40"
      >
        <path d="M0,-20 L2,-2 L20,0 L2,2 L0,20 L-2,2 L-20,0 L-2,-2 Z" fill="currentColor" />
        <circle r="22" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1" />
      </g>
    </svg>
  </div>
);

const LightCaustics = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-blue-950/20 to-transparent" />
    <div className="absolute top-0 left-1/4 w-32 h-[100vh] bg-gradient-to-b from-cyan-500/10 to-transparent transform -skew-x-12 blur-3xl" />
    <div className="absolute top-0 right-1/3 w-48 h-[80vh] bg-gradient-to-b from-teal-500/10 to-transparent transform skew-x-12 blur-3xl" />
  </div>
);

const ParchmentOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-0 mix-blend-soft-light opacity-90">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 40% 35%, rgba(255, 230, 200, 0.2), transparent 45%),
          radial-gradient(circle at 70% 70%, rgba(214, 162, 92, 0.18), transparent 50%),
          repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, rgba(0,0,0,0.04) 3px 4px),
          repeating-linear-gradient(-45deg, rgba(0,0,0,0.03) 0 3px, rgba(255,255,255,0.03) 4px 6px)
        `,
        backgroundBlendMode: "soft-light, soft-light, overlay, overlay",
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(116,66,41,0.12),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(79,70,229,0.07),transparent_55%)]" />
  </div>
);

const seededRandom = (seed: number) => {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const Particulates = ({ reduceMotion = false }: { reduceMotion?: boolean }) => {
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const seed = i + 1;
      return {
        id: i,
        x: seededRandom(seed * 13) * 100,
        y: seededRandom(seed * 29) * 100,
        duration: 10 + seededRandom(seed * 41) * 10,
        size: 1 + seededRandom(seed * 53) * 4,
        drift: -(20 + seededRandom(seed * 67) * 100),
      };
    });
  }, []);

  if (reduceMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-cyan-200 rounded-full opacity-10"
          initial={{ x: `${p.x}%`, y: `${p.y}%` }}
          animate={{ y: [`${p.y}%`, `${p.y + p.drift / 10}%`], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
};

type SceneOverlaysProps = {
  reduceMotion?: boolean | null;
};

export default function SceneOverlays({ reduceMotion }: SceneOverlaysProps) {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c2b4f] via-[#0b305a] to-[#081b36]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_40%),radial-gradient(circle_at_50%_60%,rgba(8,47,73,0.16),transparent_55%)] mix-blend-screen" />
      <ParchmentOverlay />
      <CyberPiriReisMap />
      <LightCaustics />
      <Particulates reduceMotion={reduceMotion ?? undefined} />
    </div>
  );
}
