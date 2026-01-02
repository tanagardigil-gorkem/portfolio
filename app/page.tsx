"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useInView, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Terminal, Anchor, Shield, Cpu, ChevronDown, Radar, SkipForward, Map as MapIcon, Compass } from 'lucide-react';

// --- VISUALS: CYBER PIRI REIS LAYER (Siber Portolan Haritası) ---
// Piri Reis haritalarındaki o meşhur çizgileri (Rhumb lines) ve kıyı şeritlerini
// dijital bir okyanus estetiğiyle birleştirir.
const CyberPiriReisMap = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-30 mix-blend-screen">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="coastGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(6,182,212,0)" />
          <stop offset="50%" stopColor="rgba(6,182,212,0.1)" />
          <stop offset="100%" stopColor="rgba(6,182,212,0)" />
        </linearGradient>
      </defs>

      {/* 1. RHUMB LINES (Kerteriz Hatları - Piri Reis Stili) */}
      <g stroke="currentColor" strokeWidth="0.5" className="text-cyan-800/40">
        {/* Merkezden yayılan ışınlar */}
        <line x1="50%" y1="50%" x2="0%" y2="0%" />
        <line x1="50%" y1="50%" x2="100%" y2="0%" />
        <line x1="50%" y1="50%" x2="0%" y2="100%" />
        <line x1="50%" y1="50%" x2="100%" y2="100%" />
        <line x1="50%" y1="50%" x2="50%" y2="0%" strokeDasharray="5 5" />
        <line x1="50%" y1="50%" x2="50%" y2="100%" strokeDasharray="5 5" />
        <line x1="50%" y1="50%" x2="0%" y2="50%" strokeDasharray="5 5" />
        <line x1="50%" y1="50%" x2="100%" y2="50%" strokeDasharray="5 5" />
      </g>

      {/* 2. HAYALİ KIYI ŞERİTLERİ (Topografik Çizgiler) */}
      <path 
        d="M-50,200 Q200,150 400,300 T900,200 T1400,400" 
        fill="none" stroke="url(#coastGradient)" strokeWidth="2" className="opacity-40" 
      />
      <path 
        d="M-50,600 Q300,550 600,700 T1100,600 T1600,800" 
        fill="none" stroke="url(#coastGradient)" strokeWidth="2" className="opacity-30" 
      />

      {/* 3. PİRİ REİS RÜZGAR GÜLLERİ (Compass Roses) */}
      {/* Sol Üst */}
      <g transform="translate(100, 150)" className="text-cyan-600/30">
        <circle r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0,-30 L5,-5 L30,0 L5,5 L0,30 L-5,5 L-30,0 L-5,-5 Z" fill="currentColor" />
      </g>
      
      {/* Sağ Alt */}
      <g transform="translate(1400, 700)" className="text-cyan-600/30">
        <circle r="60" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0,-50 L8,-8 L50,0 L8,8 L0,50 L-8,8 L-50,0 L-8,-8 Z" fill="currentColor" />
      </g>

      {/* Merkez (Ana) Pusula - Sayfa ortasında büyük ve silik */}
      <g style={{ transformBox: 'fill-box', transformOrigin: 'center' }} transform="translate(50%, 50%) scale(4)" className="text-cyan-900/10">
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

/**
 * COMPONENT: Code Column
 */
const CodeColumn = ({ isFrozen }: { isFrozen: boolean }) => {
  const [mounted, setMounted] = useState(false);
  const [columnData, setColumnData] = useState<{ duration: string; delay: string; opacity: number; snippets: string[]; } | null>(null);

  useEffect(() => {
    const allSnippets = [
      "public static void main", "System.out.println(x);", "@Autowired service;", 
      "List<String> data;", "stream().filter(i -> i > 0)", "throw new Exception();",
      "const app = async () =>", "import { useState } from 'react';", "console.log(debug);",
      "interface Props { id: number }", "export default class Node", "useEffect(() => {}, [])",
      "fun main(args: Array<String>)", "val user: User?", "data class Response()",
      "scope.launch { delay(100) }", "list.map { it * 2 }", "suspend fun fetch()",
      "def __init__(self):", "if __name__ == '__main__':", "import numpy as np",
      "print(f'Error: {e}')", "async def get_data():", "return [x for x in list]",
      "0x4F3A22", "Hull_Integrity: 98%", "Decrypting...", "PING 127.0.0.1"
    ];

    const randomSnippets = Array.from({ length: 60 }).map(() => allSnippets[Math.floor(Math.random() * allSnippets.length)]);

    setColumnData({
      duration: `${15 + Math.random() * 15}s`,
      delay: `-${Math.random() * 10}s`,
      opacity: 0.3 + Math.random() * 0.4,
      snippets: randomSnippets
    });
    setMounted(true);
  }, []);

  if (!mounted || !columnData) return <div className="flex-1"></div>;

  return (
    <div 
      className="flex flex-col gap-1 whitespace-nowrap text-[10px] md:text-xs font-mono"
      style={{
        opacity: columnData.opacity,
        animationName: 'scrollUp',
        animationDuration: columnData.duration,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationDelay: columnData.delay,
        animationPlayState: isFrozen ? 'paused' : 'running',
        willChange: 'transform'
      }}
    >
      {columnData.snippets.map((txt, j) => <span key={j} className="text-green-500/70 block h-4">{txt}</span>)}
      {columnData.snippets.map((txt, j) => <span key={`dup-${j}`} className="text-green-500/70 block h-4">{txt}</span>)}
    </div>
  );
};

const CodeBackground = ({ phase }: { phase: string }) => {
  const isFrozen = phase === 'locking' || phase === 'identified';
  return (
    <div className="absolute inset-0 bg-black z-0 flex justify-between overflow-hidden px-2 pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => <CodeColumn key={i} isFrozen={isFrozen} />)}
      <style jsx global>{` @keyframes scrollUp { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } } `}</style>
    </div>
  );
};

const FalseTargets = ({ active }: { active: boolean }) => {
  const [targets, setTargets] = useState<{id: number, x: number, y: number}[]>([]);
  useEffect(() => {
    if (!active) { setTargets([]); return; }
    const interval = setInterval(() => {
      const newTarget = { id: Math.random(), x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 };
      setTargets(prev => [...prev.slice(-3), newTarget]); 
    }, 250);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {targets.map(t => (
        <motion.div
          key={t.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: [0, 1, 0], scale: 1 }} transition={{ duration: 0.6 }}
          className="absolute w-16 h-16 md:w-24 md:h-24 border border-red-500/60 flex items-center justify-center"
          style={{ left: `${t.x}%`, top: `${t.y}%` }}
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500"></div>
          <span className="text-[8px] text-red-500 bg-black/80 px-1 mt-8">NO MATCH</span>
        </motion.div>
      ))}
    </div>
  );
};

const PeriscopeHUD = ({ phase }: { phase: 'scanning' | 'locking' | 'identified' }) => {
  const isLocking = phase === 'locking';
  const isIdentified = phase === 'identified';
  const borderColor = isLocking ? 'border-red-600' : 'border-green-500';
  const textColor = isLocking ? 'text-red-500' : 'text-green-500';
  const glowShadow = isLocking ? 'shadow-[0_0_50px_rgba(220,38,38,0.6)]' : 'shadow-[0_0_50px_rgba(34,197,94,0.3)]';

  return (
    <div className={`absolute inset-0 pointer-events-none z-20 flex items-center justify-center transition-colors duration-1000 ${textColor}`}>
      <motion.div 
        className={`w-[85vw] h-[85vw] md:w-[450px] md:h-[450px] rounded-full border-2 ${borderColor} relative flex items-center justify-center ${glowShadow} bg-black/20 backdrop-blur-[2px]`}
        animate={isLocking ? { scale: [1, 0.98, 1], borderColor: ['#ef4444', '#7f1d1d', '#ef4444'] } : { scale: 1 }}
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
           {phase === 'scanning' && <span className="animate-pulse opacity-80">SEARCHING DATABASE...</span>}
           {phase === 'locking' && <span className="text-red-500 animate-pulse bg-red-950/50 px-2 rounded">ANALYZING BIOMETRICS...</span>}
           {phase === 'identified' && <span className="text-green-400 bg-green-950/50 px-2 rounded">IDENTITY CONFIRMED</span>}
        </div>

        {isIdentified && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="absolute z-50 bg-black/90 px-8 py-6 border border-green-500/50 backdrop-blur-md text-center shadow-2xl rounded"
          >
            <h1 className="text-green-500 font-mono text-xl md:text-2xl font-bold tracking-tighter whitespace-nowrap mb-2">Gorkem Tanagardigil</h1>
            <div className="h-px w-full bg-green-500/50 mb-2" />
            <div className="flex justify-between text-[10px] text-green-700 uppercase tracking-[0.2em]"><span>ROLE: SENIOR</span><span>ACCESS: GRANTED</span></div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const Particulates = ({ reduceMotion = false }: { reduceMotion?: boolean }) => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; duration: number; size: number }[]>([]);
  useEffect(() => {
    if (reduceMotion) return;
    const w = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const h = typeof window !== 'undefined' ? window.innerHeight : 1000;
    setParticles(Array.from({ length: 30 }).map((_, i) => ({
      id: i, x: Math.random() * w, y: Math.random() * h, duration: Math.random() * 10 + 10, size: Math.random() * 4 + 1,
    })));
  }, [reduceMotion]);

  if (reduceMotion) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id} className="absolute bg-cyan-200 rounded-full opacity-10"
          initial={{ x: p.x, y: p.y }} animate={{ y: [null, Math.random() * -100], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }} style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
};

const RevealSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, type: "spring" }}>
      {children}
    </motion.div>
  );
};

const missionHistory = [
  {
    title: "Payroll Engine",
    role: "Senior Full Stack Developer",
    period: "2023 - PRESENT",
    summary: "Orchestrating microservices on AWS EKS with hardened CI/CD pipelines. Performance tuning across MongoDB Atlas and on-prem.",
    tech: ['Java/Spring Boot', 'Kubernetes', 'MongoDB', 'Vue.js']
  },
  {
    title: "Fleet Control Systems",
    role: "Lead Backend Engineer",
    period: "2021 - 2023",
    summary: "Rebuilt legacy naval logistics services into fault-tolerant APIs, reducing incident volume while improving observability and release cadence.",
    tech: ['Java', 'Kotlin', 'PostgreSQL', 'Grafana/Prometheus']
  },
];

const projects = [
  { name: "Subsurface Ops Console", description: "Command-and-control dashboard for distributed services with live health, deploy gates, and audit trails.", tech: ['Next.js', 'TypeScript', 'WebSockets'], link: "#signals" },
  { name: "HarborGuard Access", description: "Zero-trust auth gateway with biometric fallback and policy-based routing for high-side networks.", tech: ['Spring Boot', 'Keycloak', 'OPA'], link: "#signals" },
  { name: "Tactical Playbooks", description: "LLM-powered runbooks that surface ranked mitigations for on-call incidents in under 60 seconds.", tech: ['LLM/RAG', 'Vector DB', 'Python'], link: "#signals" },
];

const signals = [
  { label: "Email", value: "gtanagardigil@gmail.com", href: "mailto:gtanagardigil@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/gorkemtanagardigil", href: "https://www.linkedin.com/in/gorkemtanagardigil" },
  { label: "GitHub", value: "github.com/gorkem-t", href: "https://github.com/gorkem-t" },
];

const navLinks = [
  { label: "Mission Log", href: "#mission-log" },
  { label: "Arsenal", href: "#arsenal" },
  { label: "Projects", href: "#projects" },
  { label: "Signals", href: "#signals" },
];

export default function DeepDivePortfolio() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [depth, setDepth] = useState(0);
  const [introPhase, setIntroPhase] = useState<'scanning' | 'locking' | 'identified' | 'finished'>('scanning');
  const skippedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIntroPhase('finished');
      return;
    }
    if (skippedRef.current) return;
    const timerLock = setTimeout(() => { if (!skippedRef.current) setIntroPhase('locking'); }, 5000);
    const timerIdentify = setTimeout(() => { if (!skippedRef.current) setIntroPhase('identified'); }, 9000);
    const timerFinish = setTimeout(() => { if (!skippedRef.current) setIntroPhase('finished'); }, 12500);

    return () => { clearTimeout(timerLock); clearTimeout(timerIdentify); clearTimeout(timerFinish); };
  }, [prefersReducedMotion]);

  const handleSkip = () => {
    skippedRef.current = true;
    setIntroPhase('finished');
  };

  useEffect(() => scrollY.onChange((latest) => setDepth(Math.floor(latest / 5))), [scrollY]);

  return (
    <>
      <AnimatePresence>
        {introPhase !== 'finished' && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden font-mono"
            exit={{ opacity: 0, pointerEvents: 'none', transition: { duration: 1 } }}
          >
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={handleSkip} 
               className="absolute bottom-10 right-10 z-[101] bg-cyan-950/80 border border-cyan-500 text-cyan-400 text-xs font-bold px-6 py-3 rounded flex items-center gap-2 uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
             >
               Skip Sequence <SkipForward size={14} />
             </motion.button>
             
             <CodeBackground phase={introPhase} />
             <FalseTargets active={introPhase === 'locking' || introPhase === 'scanning'} />

             <motion.div
               className="absolute inset-0 bg-black z-10 pointer-events-none"
               initial={{ clipPath: 'circle(0% at 50% 50%)' }}
               animate={{ 
                 clipPath: introPhase === 'identified' ? 'circle(22% at 50% 50%)' : 'circle(18% at 50% 50%)' 
               }}
               exit={{ clipPath: 'circle(150% at 50% 50%)', transition: { duration: 2, ease: "easeInOut" } }}
               transition={{ duration: 3, ease: "easeOut" }} 
             />

             <motion.div exit={{ opacity: 0, scale: 1.1 }}><PeriscopeHUD phase={introPhase} /></motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-[400vh] bg-[#020617] text-slate-200 font-sans relative selection:bg-cyan-500 selection:text-black ${introPhase !== 'finished' ? 'h-screen overflow-hidden' : ''}`}>
        
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black" />
          
          {/* 3. NEW VISUAL: CYBER PIRI REIS MAP (Daha belirgin) */}
          <CyberPiriReisMap />
          
          <LightCaustics />
          <Particulates reduceMotion={prefersReducedMotion} />
        </div>

        {/* 4. BUG FIX: DEPTH GAUGE ON SKIP (Intro biter bitmez animasyonla gelir) */}
        <motion.div 
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 text-cyan-500/80 font-mono mix-blend-screen hidden md:flex"
          initial={{ x: -100 }} 
          animate={introPhase === 'finished' ? { x: 0 } : { x: -100 }} 
          transition={{ duration: 0.8, delay: introPhase === 'finished' ? 0.2 : 0 }}
        >
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
          <div className="text-4xl font-bold tracking-tighter tabular-nums">{depth} <span className="text-xs text-cyan-500/50">m</span></div>
          <div className="w-px h-32 bg-gradient-to-t from-transparent via-cyan-500 to-transparent" />
        </motion.div>

        <main className="relative z-10 max-w-5xl mx-auto px-6">
          <section id="top" className="h-screen flex flex-col justify-center items-center text-center relative">
            <div className="absolute top-8 right-0 left-0 flex justify-center md:justify-end px-4">
              <div className="flex items-center gap-2 bg-black/30 border border-cyan-900/60 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                <Compass className="text-cyan-400" size={16} />
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-xs font-mono text-cyan-200/80 hover:text-cyan-400 px-2 uppercase tracking-wide transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={introPhase === 'finished' ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.5, delay: 0.5 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md px-4 py-1 rounded-full text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                MISSION CONTROL: ONLINE
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6 tracking-tight drop-shadow-lg">
                GORKEM<br/>TANAGARDIGIL
              </h1>
              <p className="text-lg md:text-xl text-cyan-100/70 max-w-2xl mx-auto leading-relaxed">
                Senior Software Engineer blending <span className="text-cyan-400">naval discipline</span> with modern cloud engineering.
                I build resilient systems that stay online when the seas get rough.
              </p>
              <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#projects" className="bg-cyan-600 text-white font-bold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-500 transition-colors">
                  View Missions
                </motion.a>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#signals" className="border border-cyan-500/50 text-cyan-200 px-6 py-3 rounded-full hover:border-cyan-300 hover:text-white transition-colors">
                  Open Channel
                </motion.a>
              </div>
            </motion.div>
            <motion.div className="absolute bottom-12 text-cyan-500/50" animate={prefersReducedMotion ? { y: 0 } : { y: [0, 10, 0] }} transition={{ repeat: prefersReducedMotion ? 0 : Infinity, duration: 2 }}>
              <ChevronDown size={32} />
            </motion.div>
          </section>

          <section className="py-24">
            <RevealSection>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Years on Deck", value: "12+", detail: "Engineering and naval leadership combined." },
                  { title: "Incidents Resolved", value: "300+", detail: "Stability fixes, root-cause hunts, and on-call mitigations." },
                  { title: "Deploy Cadence", value: "Daily", detail: "CI/CD pipelines with guarded rollouts and observability gates." },
                ].map((stat) => (
                  <div key={stat.title} className="bg-[#0a1529]/60 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm text-center">
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <h3 className="text-cyan-300 font-mono text-xs uppercase tracking-[0.3em] mb-2">{stat.title}</h3>
                    <p className="text-slate-400 text-sm">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </section>

          <section id="projects" className="py-32">
            <RevealSection>
              <div className="flex items-center gap-3 mb-10 justify-center">
                <MapIcon className="text-cyan-400" size={20} />
                <h2 className="text-3xl font-bold text-white tracking-tight">Recent Operations</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <motion.a
                    key={project.name}
                    whileHover={{ y: -4 }}
                    href={project.link}
                    className="group bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">case file</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="text-[11px] px-2 py-1 bg-[#112240] text-cyan-200/70 rounded-full border border-cyan-900/60">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </RevealSection>
          </section>

          <section id="mission-log" className="py-32">
            <RevealSection>
              <div className="flex items-center gap-4 mb-12">
                 <div className="h-px bg-cyan-900/50 flex-1" />
                 <h2 className="text-2xl font-mono text-cyan-400 tracking-widest flex items-center gap-2"><Terminal size={20} /> MISSION LOG</h2>
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
                      <p className="text-slate-300 mb-6 leading-relaxed">{mission.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {mission.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-[#112240] rounded-full text-xs text-cyan-200/70 border border-cyan-900/50">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </section>

          <section id="arsenal" className="py-32">
             <RevealSection>
               <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold mb-4 text-white">Technical Arsenal</h2>
                 <p className="text-cyan-200/60">Instrumentation for high-pressure environments.</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { title: "Backend Core", icon: <Cpu />, items: ["Java & Kotlin", "Spring Boot", "Microservices"] },
                   { title: "Data & AI", icon: <Radar />, items: ["MongoDB & MySQL", "RAG & LLM Integration", "Vector Databases"] },
                   { title: "DevOps", icon: <Shield />, items: ["Kubernetes (EKS)", "Docker Swarm", "AWS & GCP"] }
                 ].map((stack, idx) => (
                   <motion.div 
                      key={idx} whileHover={{ y: -5 }}
                      className="bg-[#0a1529]/60 border border-cyan-900/30 p-6 rounded-xl hover:border-cyan-500/50 transition-colors shadow-lg backdrop-blur-sm"
                   >
                      <div className="bg-[#112240] w-12 h-12 rounded-lg flex items-center justify-center text-cyan-400 mb-4 shadow-inner">
                        {stack.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{stack.title}</h3>
                      <ul className="space-y-2 text-slate-400 text-sm font-mono">
                        {stack.items.map(item => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_5px_cyan]" /> {item}
                          </li>
                        ))}
                      </ul>
                   </motion.div>
                 ))}
               </div>
             </RevealSection>
          </section>

          <section className="py-32 relative">
            <RevealSection>
              <div className="relative border border-cyan-900/30 bg-[#020617]/80 backdrop-blur-md p-10 overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]" />
                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  <div className="bg-cyan-950/30 p-4 rounded-lg border border-cyan-900/50 flex flex-col items-center justify-center min-w-[120px]">
                    <Anchor className="text-cyan-500 mb-2" size={32} />
                    <span className="font-mono text-xs text-cyan-400">NAVY OPS</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Origin: Turkish Navy</h3>
                    <p className="text-cyan-500 font-mono text-sm mb-4">Computer Engineer & Officer | 2010 - 2021</p>
                    <p className="text-slate-400 leading-relaxed mb-4">
                       Where resilience was engineered. Developed mission-critical Java systems where stability was a necessity, not a feature. Implemented strict security encryption and authorization protocols.
                    </p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </section>

          <section id="signals" className="py-28">
            <RevealSection>
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-white mb-2">Signals & Channels</h2>
                <p className="text-cyan-200/70">Direct lines for collaboration, advisories, and mission invites.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {signals.map((signal) => (
                  <a key={signal.label} href={signal.href} className="group bg-[#0a1529]/70 border border-cyan-900/40 rounded-xl p-5 hover:border-cyan-500/60 transition-colors shadow-lg backdrop-blur-sm">
                    <div className="text-sm font-mono text-cyan-400 mb-1 uppercase tracking-[0.3em]">{signal.label}</div>
                    <div className="text-lg text-white group-hover:text-cyan-200 transition-colors break-words">{signal.value}</div>
                  </a>
                ))}
              </div>
            </RevealSection>
          </section>
          
           <section className="pb-32 pt-16 text-center">
             <RevealSection>
               <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">Ready to Dive?</h2>
               <div className="flex justify-center gap-6">
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:gtanagardigil@gmail.com" className="bg-cyan-600 text-white font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-500 transition-colors">
                    Initiate Contact
                  </motion.a>
               </div>
             </RevealSection>
          </section>
        </main>
      </div>
    </>
  );
}
