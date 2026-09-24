"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "../../lib/i18n/context";

type HeroProps = {
  introPhase: "scanning" | "locking" | "identified" | "finished";
};

function TypingEffect({ roles }: { roles: readonly string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className="text-cyan-400 font-mono">
      {roles[roleIndex].slice(0, charIndex)}
      <span className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-0.5 align-middle" style={{ animation: "typing-cursor 0.8s step-end infinite" }} />
    </span>
  );
}

function renderDescription(text: string) {
  const parts = text.split(/<accent>(.*?)<\/accent>/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-cyan-400 font-semibold">{part}</span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export default function Hero({ introPhase }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();

  return (
    <section id="top" className="min-h-screen flex flex-col justify-center items-center text-center relative pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={introPhase === "finished" ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1 rounded-full text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          {t.hero.badge}
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
          GORKEM<br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            TANAGARDIGIL
          </span>
        </h1>
        <div className="text-base sm:text-lg md:text-2xl mb-6 h-7 sm:h-8">
          {prefersReducedMotion ? (
            <span className="text-cyan-400 font-mono">{t.hero.roles[0]}</span>
          ) : (
            <TypingEffect roles={t.hero.roles} />
          )}
        </div>
        <p className="text-base sm:text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          {renderDescription(t.hero.description)}
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="bg-cyan-600 text-white font-bold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1f36]"
          >
            {t.hero.viewMissions}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#signals"
            className="border border-cyan-500/50 text-cyan-200 px-6 py-3 rounded-full hover:border-cyan-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1f36]"
          >
            {t.hero.openChannel}
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-12 text-cyan-500/50"
        animate={prefersReducedMotion ? { y: 0 } : { y: [0, 10, 0] }}
        transition={{ repeat: prefersReducedMotion ? 0 : Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
