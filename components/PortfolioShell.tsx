"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import IntroSequence from "./intro/IntroSequence";
import SceneOverlays from "./overlays/SceneOverlays";
import Navigation from "./ui/Navigation";
import SkipToContent from "./ui/SkipToContent";
import CommandTerminal from "./ui/CommandTerminal";
import PortfolioContent from "./sections/PortfolioContent";
import type { GitHubActivity } from "../lib/activity";

type IntroPhase = "scanning" | "locking" | "identified" | "finished";

type PortfolioShellProps = {
  activity: GitHubActivity | null;
};

const emptySubscribe = () => () => {};

function useIntroDone() {
  return useSyncExternalStore(
    emptySubscribe,
    () => sessionStorage.getItem("intro-done") === "1",
    () => false,
  );
}

export default function PortfolioShell({ activity }: PortfolioShellProps) {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const introDone = useIntroDone();
  const [depth, setDepth] = useState(0);
  const [showSurfaceButton, setShowSurfaceButton] = useState(false);
  const [introPhase, setIntroPhase] = useState<IntroPhase>(
    introDone ? "finished" : "scanning"
  );
  const skippedRef = useRef(introDone);

  useEffect(() => {
    if (skippedRef.current) return;
    if (prefersReducedMotion) return;

    const timerLock = setTimeout(() => {
      if (!skippedRef.current) setIntroPhase("locking");
    }, 400);
    const timerIdentify = setTimeout(() => {
      if (!skippedRef.current) setIntroPhase("identified");
    }, 800);
    const timerFinish = setTimeout(() => {
      if (!skippedRef.current) {
        setIntroPhase("finished");
        sessionStorage.setItem("intro-done", "1");
      }
    }, 1500);

    return () => {
      clearTimeout(timerLock);
      clearTimeout(timerIdentify);
      clearTimeout(timerFinish);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setDepth(Math.floor(latest / 5));
      setShowSurfaceButton(latest > 500);
    });
  }, [scrollY]);

  const handleSkip = () => {
    skippedRef.current = true;
    setIntroPhase("finished");
    sessionStorage.setItem("intro-done", "1");
  };

  const effectiveIntroPhase: IntroPhase = prefersReducedMotion
    ? "finished"
    : introPhase;

  return (
    <>
      <SkipToContent />
      <IntroSequence introPhase={effectiveIntroPhase} onSkip={handleSkip} />

      <Navigation visible={effectiveIntroPhase === "finished"} />

      <div
        className={`min-h-[400vh] bg-[#0a1f36] text-slate-200 font-sans relative selection:bg-cyan-500 selection:text-black ${
          effectiveIntroPhase !== "finished" ? "h-screen overflow-hidden" : ""
        }`}
      >
        <SceneOverlays reduceMotion={prefersReducedMotion} />

        <motion.div
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 text-cyan-500/80 font-mono mix-blend-screen"
          initial={introDone ? { x: 0 } : { x: -100 }}
          animate={effectiveIntroPhase === "finished" ? { x: 0 } : { x: -100 }}
          transition={{ duration: 0.8, delay: effectiveIntroPhase === "finished" && !introDone ? 0.2 : 0 }}
        >
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
          <div className="text-4xl font-bold tracking-tighter tabular-nums">
            {depth} <span className="text-xs text-cyan-500/50">m</span>
          </div>
          <div className="w-px h-32 bg-gradient-to-t from-transparent via-cyan-500 to-transparent" />
        </motion.div>

        <PortfolioContent introPhase={introPhase} activity={activity} />
      </div>

      <AnimatePresence>
        {showSurfaceButton && effectiveIntroPhase === "finished" && (
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 bg-cyan-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-300/60 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base hover:bg-cyan-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1f36]"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} aria-hidden="true" />
            Surface
          </motion.a>
        )}
      </AnimatePresence>

      {effectiveIntroPhase === "finished" && <CommandTerminal />}
    </>
  );
}
