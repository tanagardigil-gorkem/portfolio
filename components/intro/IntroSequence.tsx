"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SkipForward } from "lucide-react";

type IntroPhase = "scanning" | "locking" | "identified" | "finished";

/* ── helpers ── */
const seededRandom = (seed: number) => {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

/* ── Deep-sea background with bioluminescent particles ── */
const DeepSeaBackground = ({ phase }: { phase: string }) => {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: seededRandom(i * 13 + 1) * 100,
      y: seededRandom(i * 29 + 1) * 100,
      size: 1 + seededRandom(i * 41 + 1) * 3,
      duration: 4 + seededRandom(i * 53 + 1) * 8,
      delay: seededRandom(i * 67 + 1) * 5,
      opacity: 0.1 + seededRandom(i * 79 + 1) * 0.3,
    }));
  }, []);

  const isLocking = phase === "locking";

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className={`absolute inset-0 transition-colors duration-2000 ${
          isLocking
            ? "bg-gradient-to-b from-[#0a0008] via-[#120010] to-[#0a0008]"
            : "bg-gradient-to-b from-[#000a14] via-[#001020] to-[#000810]"
        }`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06),transparent_70%)]" />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${isLocking ? "bg-red-400" : "bg-cyan-400"} transition-colors duration-1000`}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

/* ── Sonar Radar with rotating sweep beam ── */
const SonarRadar = ({ phase }: { phase: "scanning" | "locking" | "identified" }) => {
  const isLocking = phase === "locking";
  const isIdentified = phase === "identified";
  const accentColor = isLocking ? "rgba(239,68,68," : "rgba(6,182,212,";
  const ringClass = isLocking ? "border-red-500" : "border-cyan-500";
  const textClass = isLocking ? "text-red-500" : "text-cyan-500";

  const [pings, setPings] = useState<{ id: number; angle: number; dist: number }[]>([]);

  useEffect(() => {
    if (isIdentified) return;
    const interval = setInterval(() => {
      setPings((prev) => [
        ...prev.slice(-6),
        {
          id: Date.now(),
          angle: Math.random() * 360,
          dist: 25 + Math.random() * 55,
        },
      ]);
    }, 400);
    return () => clearInterval(interval);
  }, [isIdentified]);

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
      <div className="relative w-[60vw] h-[60vw] sm:w-[70vw] sm:h-[70vw] md:w-[80vw] md:h-[80vw] max-w-[420px] max-h-[420px]">
        {[100, 75, 50, 25].map((pct) => (
          <div
            key={pct}
            className={`absolute border ${ringClass}/20 rounded-full`}
            style={{
              width: `${pct}%`,
              height: `${pct}%`,
              left: `${(100 - pct) / 2}%`,
              top: `${(100 - pct) / 2}%`,
            }}
          />
        ))}

        <div className={`absolute top-1/2 left-0 right-0 h-px ${isLocking ? "bg-red-500/15" : "bg-cyan-500/15"}`} />
        <div className={`absolute left-1/2 top-0 bottom-0 w-px ${isLocking ? "bg-red-500/15" : "bg-cyan-500/15"}`} />

        {!isIdentified && (
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: isLocking ? 1.5 : 3, ease: "linear", repeat: Infinity }}
          >
            <div
              className="absolute top-1/2 left-1/2 w-1/2 h-1/2 origin-top-left"
              style={{
                background: `conic-gradient(from 0deg, ${accentColor}0.35) 0deg, ${accentColor}0) 60deg, transparent 60deg)`,
                borderRadius: "0 0 100% 0",
              }}
            />
          </motion.div>
        )}

        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20" />

        {pings.map((ping) => {
          const rad = (ping.angle * Math.PI) / 180;
          const maxR = 50;
          const r = (ping.dist / 100) * maxR;
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          return (
            <motion.div
              key={ping.id}
              className={`absolute w-1.5 h-1.5 rounded-full ${isLocking ? "bg-red-400" : "bg-cyan-400"}`}
              style={{ left: `${x}%`, top: `${y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0.6, 0], scale: [0, 1.5, 1, 0] }}
              transition={{ duration: 2 }}
            />
          );
        })}

        {!isIdentified && (
          <>
            <motion.div
              className={`absolute inset-[-2%] border-2 ${ringClass}/30 rounded-full`}
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className={`absolute inset-[-5%] border ${ringClass}/15 rounded-full`}
              animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}

        {isIdentified && (
          <motion.div
            className={`absolute inset-[-4%] border-2 rounded-full ${isLocking ? "border-red-500" : "border-cyan-400"}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0.3, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}

        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] ${textClass}/60 font-mono tracking-[0.3em]`}>
          000°
        </div>
        <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] ${textClass}/60 font-mono tracking-[0.3em]`}>
          180°
        </div>
        <div className={`absolute top-1/2 -left-8 -translate-y-1/2 text-[9px] ${textClass}/60 font-mono tracking-[0.3em]`}>
          270°
        </div>
        <div className={`absolute top-1/2 -right-8 -translate-y-1/2 text-[9px] ${textClass}/60 font-mono tracking-[0.3em]`}>
          090°
        </div>
      </div>
    </div>
  );
};

/* ── Submarine HUD telemetry readouts ── */
const HUDTelemetry = ({ phase }: { phase: "scanning" | "locking" | "identified" }) => {
  const [depth, setDepth] = useState(0);
  const [pressure, setPressure] = useState(0);
  const isLocking = phase === "locking";
  const isIdentified = phase === "identified";
  const accent = isLocking ? "text-red-500" : "text-cyan-500";
  const accentDim = isLocking ? "text-red-500/40" : "text-cyan-500/40";
  const borderAccent = isLocking ? "border-red-500/20" : "border-cyan-500/20";

  useEffect(() => {
    const interval = setInterval(() => {
      setDepth((d) => {
        if (isIdentified) return d;
        return Math.min(d + Math.floor(Math.random() * 15 + 5), 2400);
      });
      setPressure((p) => {
        if (isIdentified) return p;
        return Math.min(p + Math.floor(Math.random() * 3 + 1), 240);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isIdentified]);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none font-mono">
      <div className={`absolute top-4 left-3 md:top-10 md:left-10 space-y-2 md:space-y-3 ${accent}`}>
        <div className={`border ${borderAccent} bg-black/40 backdrop-blur-sm rounded px-2 py-1.5 md:px-3 md:py-2`}>
          <div className={`text-[7px] md:text-[8px] ${accentDim} uppercase tracking-[0.3em] mb-0.5`}>Depth</div>
          <div className="text-sm md:text-xl font-bold tabular-nums">
            {depth}<span className="text-[9px] md:text-[10px] ml-1 opacity-50">m</span>
          </div>
        </div>
        <div className={`border ${borderAccent} bg-black/40 backdrop-blur-sm rounded px-2 py-1.5 md:px-3 md:py-2`}>
          <div className={`text-[7px] md:text-[8px] ${accentDim} uppercase tracking-[0.3em] mb-0.5`}>Pressure</div>
          <div className="text-sm md:text-xl font-bold tabular-nums">
            {pressure}<span className="text-[9px] md:text-[10px] ml-1 opacity-50">atm</span>
          </div>
        </div>
        <div className={`hidden sm:block border ${borderAccent} bg-black/40 backdrop-blur-sm rounded px-2 py-1.5 md:px-3 md:py-2`}>
          <div className={`text-[7px] md:text-[8px] ${accentDim} uppercase tracking-[0.3em] mb-0.5`}>Heading</div>
          <div className="text-sm md:text-xl font-bold tabular-nums">
            247°<span className="text-[9px] md:text-[10px] ml-1 opacity-50">SW</span>
          </div>
        </div>
      </div>

      <div className={`absolute top-4 right-3 md:top-10 md:right-10 space-y-2 md:space-y-3 ${accent} text-right`}>
        <div className={`border ${borderAccent} bg-black/40 backdrop-blur-sm rounded px-2 py-1.5 md:px-3 md:py-2`}>
          <div className={`text-[7px] md:text-[8px] ${accentDim} uppercase tracking-[0.3em] mb-0.5`}>Status</div>
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider">
            {phase === "scanning" && <span className="animate-pulse">Scanning</span>}
            {phase === "locking" && <span className="animate-pulse">Lock-On</span>}
            {phase === "identified" && "Confirmed"}
          </div>
        </div>
        <div className={`border ${borderAccent} bg-black/40 backdrop-blur-sm rounded px-2 py-1.5 md:px-3 md:py-2`}>
          <div className={`text-[7px] md:text-[8px] ${accentDim} uppercase tracking-[0.3em] mb-0.5`}>Coord</div>
          <div className="text-[9px] md:text-[10px] font-bold tabular-nums">
            49.611622°N<br />6.131935°E
          </div>
        </div>
        <div className={`hidden sm:block border ${borderAccent} bg-black/40 backdrop-blur-sm rounded px-2 py-1.5 md:px-3 md:py-2`}>
          <div className={`text-[7px] md:text-[8px] ${accentDim} uppercase tracking-[0.3em] mb-0.5`}>Hull</div>
          <div className="text-sm md:text-xl font-bold tabular-nums">
            98<span className="text-[9px] md:text-[10px] ml-0.5 opacity-50">%</span>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-14 left-3 md:bottom-10 md:left-10 ${accent} hidden sm:block`}>
        <div className={`border ${borderAccent} bg-black/40 backdrop-blur-sm rounded px-2 py-1.5 md:px-3 md:py-2 max-w-[220px]`}>
          <div className={`text-[7px] md:text-[8px] ${accentDim} uppercase tracking-[0.3em] mb-1`}>System Log</div>
          <div className="text-[8px] md:text-[9px] space-y-0.5 opacity-70">
            <div>&gt; SONAR_ARRAY: ACTIVE</div>
            <div>&gt; ENCRYPTION: AES-256</div>
            <div>&gt; REACTOR: NOMINAL</div>
            {isLocking && <div className="text-red-400 animate-pulse">&gt; TARGET_LOCK: ENGAGING</div>}
            {isIdentified && <div className="text-green-400">&gt; MATCH_FOUND: TRUE</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Sonar ping ripple effect ── */
const SonarPings = ({ phase }: { phase: string }) => {
  const isLocking = phase === "locking";
  const color = isLocking ? "border-red-500" : "border-cyan-500";

  return (
    <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none">
      {[0, 0.7, 1.4].map((delay, i) => (
        <motion.div
          key={i}
          className={`absolute w-[50vw] h-[50vw] max-w-[300px] max-h-[300px] rounded-full border ${color}/30`}
          animate={{ scale: [0.3, 2.5], opacity: [0.5, 0] }}
          transition={{ duration: 3, delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

/* ── Status bar at top ── */
const StatusBar = ({ phase }: { phase: "scanning" | "locking" | "identified" }) => {
  const isLocking = phase === "locking";
  const isIdentified = phase === "identified";

  return (
    <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
      <div className={`h-[2px] ${isIdentified ? "bg-green-500" : isLocking ? "bg-red-500" : "bg-cyan-500"} transition-colors duration-500`}>
        {!isIdentified && (
          <motion.div
            className="h-full w-1/4 bg-white/40"
            animate={{ x: ["-100%", "500%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
      <div className="flex items-center justify-center py-3">
        <div className={`text-[10px] font-mono uppercase tracking-[0.4em] ${
          isIdentified ? "text-green-400" : isLocking ? "text-red-400" : "text-cyan-400"
        }`}>
          {phase === "scanning" && (
            <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
              ◈ SONAR SWEEP ACTIVE — SCANNING SECTOR 7G ◈
            </motion.span>
          )}
          {phase === "locking" && (
            <motion.span
              className="text-red-400"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              ⚠ CONTACT DETECTED — ACQUIRING TARGET LOCK ⚠
            </motion.span>
          )}
          {phase === "identified" && (
            <span className="text-green-400">✓ TARGET IDENTIFIED — CLEARANCE GRANTED</span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Glitch text reveal for name ── */
const GlitchReveal = () => {
  const name = "GORKEM TANAGARDIGIL";
  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`01";
  const [display, setDisplay] = useState(glitchChars.slice(0, name.length));
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (revealed >= name.length) return;

    const flickerInterval = setInterval(() => {
      setDisplay((prev) => {
        const arr = prev.split("");
        for (let i = revealed; i < name.length; i++) {
          arr[i] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return arr.join("");
      });
    }, 30);

    const revealTimeout = setTimeout(() => {
      setRevealed((r) => r + 1);
      setDisplay((prev) => {
        const arr = prev.split("");
        arr[revealed] = name[revealed];
        return arr.join("");
      });
    }, 60);

    return () => {
      clearInterval(flickerInterval);
      clearTimeout(revealTimeout);
    };
  }, [revealed]);

  return (
    <span className="inline-block">
      {display.split("").map((char, i) => (
        <span
          key={i}
          className={i < revealed ? "text-cyan-300" : "text-cyan-500/60"}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

/* ── Central identity card ── */
const IdentityCard = ({ phase }: { phase: "scanning" | "locking" | "identified" }) => {
  const isIdentified = phase === "identified";

  if (!isIdentified) return null;

  return (
    <motion.div
      className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-black/80 backdrop-blur-xl border border-cyan-500/40 rounded-xl px-6 py-6 sm:px-10 sm:py-8 text-center shadow-[0_0_60px_rgba(6,182,212,0.2),0_0_120px_rgba(6,182,212,0.1)] mx-4"
      >
        <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-cyan-500/20 via-transparent to-cyan-500/10 pointer-events-none" />

        <div className="relative z-10">
          <div className="text-[9px] text-green-400 uppercase tracking-[0.4em] mb-4 font-mono">
            ✓ Identity Verified
          </div>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold font-mono tracking-tight text-white mb-3">
            <GlitchReveal />
          </h1>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-3" />
          <div className="flex justify-center gap-6 text-[9px] font-mono uppercase tracking-[0.2em]">
            <span className="text-cyan-400/80">Role: <span className="text-white">Senior Engineer</span></span>
            <span className="text-cyan-400/80">Access: <span className="text-green-400">Granted</span></span>
          </div>
          <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            {["Java", "Spring", "K8s", "AWS", "Cloud"].map((tag) => (
              <span key={tag} className="text-[7px] sm:text-[8px] px-1.5 sm:px-2 py-0.5 border border-cyan-500/30 rounded text-cyan-300/60 font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Scan line effect ── */
const ScanLine = ({ phase }: { phase: string }) => {
  if (phase === "identified") return null;
  return (
    <motion.div
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent z-15 pointer-events-none"
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
    />
  );
};

/* ── Main export ── */
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
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.2, ease: "easeInOut" } }}
        >
          <DeepSeaBackground phase={introPhase} />
          <SonarPings phase={introPhase} />
          <ScanLine phase={introPhase} />
          <SonarRadar phase={introPhase as "scanning" | "locking" | "identified"} />
          <HUDTelemetry phase={introPhase as "scanning" | "locking" | "identified"} />
          <StatusBar phase={introPhase as "scanning" | "locking" | "identified"} />
          <IdentityCard phase={introPhase as "scanning" | "locking" | "identified"} />

          <motion.div
            className="absolute inset-0 z-[5] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
            }}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSkip}
            className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-[101] bg-black/60 border border-cyan-500/40 text-cyan-400 text-[9px] sm:text-[10px] font-bold px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg flex items-center gap-1.5 sm:gap-2 uppercase tracking-[0.2em] hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.15)] cursor-pointer backdrop-blur-sm"
          >
            Skip <SkipForward size={12} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
