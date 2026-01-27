"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SkipForward } from "lucide-react";

type IntroPhase = "scanning" | "locking" | "identified" | "finished";

const allSnippets = [
  "public static void main",
  "System.out.println(x);",
  "@Autowired service;",
  "List<String> data;",
  "stream().filter(i -> i > 0)",
  "throw new Exception();",
  "const app = async () =>",
  "import { useState } from 'react';",
  "console.log(debug);",
  "interface Props { id: number }",
  "export default class Node",
  "useEffect(() => {}, [])",
  "fun main(args: Array<String>)",
  "val user: User?",
  "data class Response()",
  "scope.launch { delay(100) }",
  "list.map { it * 2 }",
  "suspend fun fetch()",
  "def __init__(self):",
  "if __name__ == '__main__':",
  "import numpy as np",
  "print(f'Error: {e}')",
  "async def get_data():",
  "return [x for x in list]",
  "0x4F3A22",
  "Hull_Integrity: 98%",
  "Decrypting...",
  "PING 127.0.0.1",
];

const seededRandom = (seed: number) => {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const CodeColumn = ({ isFrozen, seed }: { isFrozen: boolean; seed: number }) => {
  const columnData = useMemo(() => {
    const randomSnippets = Array.from({ length: 60 }).map((_, i) => {
      const pick = Math.floor(
        seededRandom(seed + i * 37) * allSnippets.length
      );
      return allSnippets[pick];
    });

    const duration = 15 + seededRandom(seed + 101) * 15;
    const delay = seededRandom(seed + 202) * 10;
    const opacity = 0.3 + seededRandom(seed + 303) * 0.4;

    return {
      duration: `${duration}s`,
      delay: `-${delay}s`,
      opacity,
      snippets: randomSnippets,
    };
  }, [seed]);

  return (
    <div
      className="flex flex-col gap-1 whitespace-nowrap text-[10px] md:text-xs font-mono"
      style={{
        opacity: columnData.opacity,
        animationName: "scrollUp",
        animationDuration: columnData.duration,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationDelay: columnData.delay,
        animationPlayState: isFrozen ? "paused" : "running",
        willChange: "transform",
      }}
    >
      {columnData.snippets.map((txt, j) => (
        <span key={j} className="text-green-500/70 block h-4">
          {txt}
        </span>
      ))}
      {columnData.snippets.map((txt, j) => (
        <span key={`dup-${j}`} className="text-green-500/70 block h-4">
          {txt}
        </span>
      ))}
    </div>
  );
};

const CodeBackground = ({ phase }: { phase: string }) => {
  const isFrozen = phase === "locking" || phase === "identified";
  return (
    <div className="absolute inset-0 bg-black z-0 flex justify-between overflow-hidden px-2 pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <CodeColumn key={i} isFrozen={isFrozen} seed={i + 1} />
      ))}
      <style jsx global>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
};

const FalseTargets = ({ active }: { active: boolean }) => {
  const [targets, setTargets] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      const newTarget = {
        id: Math.random(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
      };
      setTargets((prev) => [...prev.slice(-3), newTarget]);
    }, 250);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <>
      {!active ? null : (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {targets.map((t) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0], scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute w-16 h-16 md:w-24 md:h-24 border border-red-500/60 flex items-center justify-center"
          style={{ left: `${t.x}%`, top: `${t.y}%` }}
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500"></div>
          <span className="text-[8px] text-red-500 bg-black/80 px-1 mt-8">
            NO MATCH
          </span>
        </motion.div>
      ))}
    </div>
      )}
    </>
  );
};

const PeriscopeHUD = ({ phase }: { phase: "scanning" | "locking" | "identified" }) => {
  const isLocking = phase === "locking";
  const isIdentified = phase === "identified";
  const borderColor = isLocking ? "border-red-600" : "border-green-500";
  const textColor = isLocking ? "text-red-500" : "text-green-500";
  const glowShadow = isLocking
    ? "shadow-[0_0_50px_rgba(220,38,38,0.6)]"
    : "shadow-[0_0_50px_rgba(34,197,94,0.3)]";

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-20 flex items-center justify-center transition-colors duration-1000 ${textColor}`}
    >
      <motion.div
        className={`w-[85vw] h-[85vw] md:w-[450px] md:h-[450px] rounded-full border-2 ${borderColor} relative flex items-center justify-center ${glowShadow} bg-black/20 backdrop-blur-[2px]`}
        animate={
          isLocking
            ? {
                scale: [1, 0.98, 1],
                borderColor: ["#ef4444", "#7f1d1d", "#ef4444"],
              }
            : { scale: 1 }
        }
        transition={isLocking ? { duration: 0.8, repeat: Infinity } : { duration: 0.5 }}
      >
        <div className="absolute w-full h-px bg-current opacity-40" />
        <div className="absolute h-full w-px bg-current opacity-40" />
        {!isIdentified && (
          <motion.div
            className={`absolute -inset-4 border border-dashed ${borderColor} rounded-full opacity-40`}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          />
        )}
        <div className={`absolute top-10 left-10 w-8 h-8 border-t-4 border-l-4 ${borderColor}`} />
        <div className={`absolute top-10 right-10 w-8 h-8 border-t-4 border-r-4 ${borderColor}`} />
        <div className={`absolute bottom-10 left-10 w-8 h-8 border-b-4 border-l-4 ${borderColor}`} />
        <div className={`absolute bottom-10 right-10 w-8 h-8 border-b-4 border-r-4 ${borderColor}`} />

        <div className="absolute top-[15%] font-mono tracking-[0.2em] text-xs md:text-sm font-bold bg-black/50 px-2 rounded">
          {phase === "scanning" && (
            <span className="animate-pulse opacity-80">SEARCHING DATABASE...</span>
          )}
          {phase === "locking" && (
            <span className="text-red-500 animate-pulse bg-red-950/50 px-2 rounded">
              ANALYZING BIOMETRICS...
            </span>
          )}
          {phase === "identified" && (
            <span className="text-green-400 bg-green-950/50 px-2 rounded">
              IDENTITY CONFIRMED
            </span>
          )}
        </div>

        {isIdentified && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute z-50 bg-black/90 px-8 py-6 border border-green-500/50 backdrop-blur-md text-center shadow-2xl rounded"
          >
            <h1 className="text-green-500 font-mono text-xl md:text-2xl font-bold tracking-tighter whitespace-nowrap mb-2">
              Gorkem Tanagardigil
            </h1>
            <div className="h-px w-full bg-green-500/50 mb-2" />
            <div className="flex justify-between text-[10px] text-green-700 uppercase tracking-[0.2em]">
              <span>ROLE: SENIOR</span>
              <span>ACCESS: GRANTED</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

type IntroSequenceProps = {
  introPhase: IntroPhase;
  onSkip: () => void;
};

export default function IntroSequence({ introPhase, onSkip }: IntroSequenceProps) {
  return (
    <AnimatePresence>
      {introPhase !== "finished" && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden font-mono"
          exit={{ opacity: 0, pointerEvents: "none", transition: { duration: 1 } }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSkip}
            className="absolute bottom-10 right-10 z-[101] bg-cyan-950/80 border border-cyan-500 text-cyan-400 text-xs font-bold px-6 py-3 rounded flex items-center gap-2 uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
          >
            Skip Sequence <SkipForward size={14} />
          </motion.button>

          <CodeBackground phase={introPhase} />
          <FalseTargets active={introPhase === "locking" || introPhase === "scanning"} />

          <motion.div
            className="absolute inset-0 bg-black z-10 pointer-events-none"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{
              clipPath:
                introPhase === "identified"
                  ? "circle(22% at 50% 50%)"
                  : "circle(18% at 50% 50%)",
            }}
            exit={{
              clipPath: "circle(150% at 50% 50%)",
              transition: { duration: 2, ease: "easeInOut" },
            }}
            transition={{ duration: 3, ease: "easeOut" }}
          />

          <motion.div exit={{ opacity: 0, scale: 1.1 }}>
            <PeriscopeHUD phase={introPhase} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
