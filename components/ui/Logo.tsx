"use client";

import React from "react";
import { motion } from "framer-motion";

type LogoProps = {
  size?: number;
  showText?: boolean;
  className?: string;
};

export default function Logo({ size = 32, showText = false, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      >
        {/* Outer sonar ring */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-cyan-500/40"
        />
        {/* Inner sonar ring */}
        <circle
          cx="24"
          cy="24"
          r="16"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          className="text-cyan-500/25"
        />

        {/* Crosshair lines */}
        <line x1="24" y1="4" x2="24" y2="12" stroke="currentColor" strokeWidth="0.8" className="text-cyan-500/30" />
        <line x1="24" y1="36" x2="24" y2="44" stroke="currentColor" strokeWidth="0.8" className="text-cyan-500/30" />
        <line x1="4" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="0.8" className="text-cyan-500/30" />
        <line x1="36" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="0.8" className="text-cyan-500/30" />

        {/* G letter - stylized as a sonar arc */}
        <path
          d="M26 15 A10 10 0 1 0 26 33 L26 27 L22 27"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-cyan-400"
        />

        {/* T letter - integrated as a periscope/antenna */}
        <path
          d="M30 15 L38 15 M34 15 L34 33"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-white"
        />

        {/* Center ping dot */}
        <circle cx="24" cy="24" r="1.5" className="text-cyan-400" fill="currentColor" />

        {/* Corner brackets */}
        <path d="M6 10 L6 6 L10 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-cyan-500/50" />
        <path d="M38 6 L42 6 L42 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-cyan-500/50" />
        <path d="M6 38 L6 42 L10 42" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-cyan-500/50" />
        <path d="M38 42 L42 42 L42 38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-cyan-500/50" />
      </motion.svg>

      {showText && (
        <span className="font-mono text-sm font-bold tracking-[0.15em] text-cyan-400">
          GT
        </span>
      )}
    </span>
  );
}
