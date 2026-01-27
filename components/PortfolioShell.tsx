"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import IntroSequence from "./intro/IntroSequence";
import SceneOverlays from "./overlays/SceneOverlays";

type IntroPhase = "scanning" | "locking" | "identified" | "finished";

type PortfolioShellProps = {
  children: (introPhase: IntroPhase) => React.ReactNode;
};

export default function PortfolioShell({ children }: PortfolioShellProps) {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [depth, setDepth] = useState(0);
  const [introPhase, setIntroPhase] = useState<IntroPhase>("scanning");
  const skippedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (skippedRef.current) return;
    const timerLock = setTimeout(() => {
      if (!skippedRef.current) setIntroPhase("locking");
    }, 5000);
    const timerIdentify = setTimeout(() => {
      if (!skippedRef.current) setIntroPhase("identified");
    }, 9000);
    const timerFinish = setTimeout(() => {
      if (!skippedRef.current) setIntroPhase("finished");
    }, 12500);

    return () => {
      clearTimeout(timerLock);
      clearTimeout(timerIdentify);
      clearTimeout(timerFinish);
    };
  }, [prefersReducedMotion]);

  useEffect(() => scrollY.onChange((latest) => setDepth(Math.floor(latest / 5))), [scrollY]);

  const handleSkip = () => {
    skippedRef.current = true;
    setIntroPhase("finished");
  };

  const effectiveIntroPhase: IntroPhase = prefersReducedMotion
    ? "finished"
    : introPhase;

  return (
    <>
      <IntroSequence introPhase={effectiveIntroPhase} onSkip={handleSkip} />

      <div
        className={`min-h-[400vh] bg-[#0a1f36] text-slate-200 font-sans relative selection:bg-cyan-500 selection:text-black ${
          effectiveIntroPhase !== "finished" ? "h-screen overflow-hidden" : ""
        }`}
      >
        <SceneOverlays reduceMotion={prefersReducedMotion} />

        <motion.div
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 text-cyan-500/80 font-mono mix-blend-screen hidden md:flex"
          initial={{ x: -100 }}
          animate={effectiveIntroPhase === "finished" ? { x: 0 } : { x: -100 }}
          transition={{ duration: 0.8, delay: effectiveIntroPhase === "finished" ? 0.2 : 0 }}
        >
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
          <div className="text-4xl font-bold tracking-tighter tabular-nums">
            {depth} <span className="text-xs text-cyan-500/50">m</span>
          </div>
          <div className="w-px h-32 bg-gradient-to-t from-transparent via-cyan-500 to-transparent" />
        </motion.div>

        {children(introPhase)}
      </div>

      <motion.a
        href="#top"
        className="fixed bottom-8 right-8 z-40 bg-cyan-600 text-white px-4 py-3 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-300/60 flex items-center gap-2 hover:bg-cyan-500 transition-colors"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.96 }}
      >
        <ArrowUp size={16} />
        Surface
      </motion.a>
    </>
  );
}
