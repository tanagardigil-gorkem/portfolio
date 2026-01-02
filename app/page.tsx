"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Terminal, Anchor, Shield, Cpu, ChevronDown, Radar, SkipForward } from 'lucide-react';

// --- VISUALS: UNDERWATER LIGHTING ---
const LightCaustics = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* Top Sunlight Glow */}
    <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-blue-950/20 to-transparent" />
    
    {/* Light Shafts (Subtle Vertical Beams) */}
    <div className="absolute top-0 left-1/4 w-32 h-[100vh] bg-gradient-to-b from-cyan-500/10 to-transparent transform -skew-x-12 blur-3xl" />
    <div className="absolute top-0 right-1/3 w-48 h-[80vh] bg-gradient-to-b from-teal-500/10 to-transparent transform skew-x-12 blur-3xl" />
  </div>
);

/**
 * COMPONENT: Dynamic Code Background
 * Logic: Freezes when biometric lock occurs.
 */
const CodeBackground = ({ phase }: { phase: string }) => {
  const isFrozen = phase === 'locking' || phase === 'identified';
  const highlightClass = 
    phase === 'locking' ? 'bg-red-600 text-black font-bold animate-pulse' :
    phase === 'identified' ? 'bg-green-500 text-black font-bold' :
    'text-green-500/60'; 

  const CodeBlock = () => (
    <div className="mb-4">
      {`@Service
public class MissionControlService {
    @Autowired private final NavigationSystem nav;

    public void scanSector(Sector ctx) {
        while (!targetAcquired) {
             sonar.ping(3000); 
             // ANALYZING BIOMETRICS...
             if (biometrics.match("`}
      <span className={`transition-all duration-300 px-1 rounded ${highlightClass}`}>
        G_TANAGARDIGIL
      </span>
      {`")) {
                 securityProtocols.unlock(LEVEL_ADMIN);
                 return Identify.CONFIRMED;
             }
             cluster.deploy(ctx.getWorkload());
        }
    }
}`}
    </div>
  );

  return (
    <div className="absolute inset-0 bg-black text-green-500/60 font-mono text-xs md:text-sm p-4 overflow-hidden select-none z-0">
      <div 
        className="whitespace-pre"
        style={{ 
          animation: 'scrollUp 4s linear infinite',
          animationPlayState: isFrozen ? 'paused' : 'running'
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => <CodeBlock key={i} />)}
      </div>
      <style jsx>{`
        @keyframes scrollUp { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
      `}</style>
    </div>
  );
};

// --- HUD COMPONENT (Same logic, slightly better glass effect) ---
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
           {phase === 'scanning' && <span className="animate-pulse opacity-80">SCANNING SECTOR 7G...</span>}
           {phase === 'locking' && <span className="text-red-500 animate-pulse bg-red-950/50 px-2 rounded">!! BIOMETRIC MATCH DETECTED !!</span>}
           {phase === 'identified' && <span className="text-green-400 bg-green-950/50 px-2 rounded">IDENTITY CONFIRMED</span>}
        </div>

        {isIdentified && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute z-50 bg-black/90 px-8 py-4 border border-green-500/50 backdrop-blur-md text-center shadow-2xl rounded"
          >
            <h1 className="text-green-500 font-mono text-xl md:text-2xl font-bold tracking-tighter whitespace-nowrap mb-1">
              G. TANAGARDIGIL
            </h1>
            <div className="h-px w-full bg-green-500/50 mb-2" />
            <div className="text-[10px] text-green-700 uppercase tracking-[0.4em]">
              SENIOR OPERATOR
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const Particulates = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; duration: number; size: number }[]>([]);
  useEffect(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const h = typeof window !== 'undefined' ? window.innerHeight : 1000;
    setParticles(Array.from({ length: 30 }).map((_, i) => ({
      id: i, x: Math.random() * w, y: Math.random() * h, duration: Math.random() * 10 + 10, size: Math.random() * 4 + 1,
    })));
  }, []);
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

export default function DeepDivePortfolio() {
  const { scrollY } = useScroll();
  const [depth, setDepth] = useState(0);
  const [introPhase, setIntroPhase] = useState<'scanning' | 'locking' | 'identified' | 'finished'>('scanning');

  useEffect(() => {
    const timerLock = setTimeout(() => setIntroPhase('locking'), 6000);
    const timerIdentify = setTimeout(() => setIntroPhase('identified'), 9000);
    const timerFinish = setTimeout(() => setIntroPhase('finished'), 12500);
    return () => { clearTimeout(timerLock); clearTimeout(timerIdentify); clearTimeout(timerFinish); };
  }, []);

  useEffect(() => scrollY.onChange((latest) => setDepth(Math.floor(latest / 5))), [scrollY]);

  return (
    <>
      <AnimatePresence>
        {introPhase !== 'finished' && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden font-mono"
            exit={{ opacity: 0, pointerEvents: 'none', transition: { duration: 1 } }}
          >
             <button onClick={() => setIntroPhase('finished')} className="absolute bottom-10 right-10 z-50 text-green-900 hover:text-green-500 text-xs flex items-center gap-2 uppercase tracking-widest transition-colors">Skip Sequence <SkipForward size={14} /></button>
             <CodeBackground phase={introPhase} />
             <motion.div
               className="absolute inset-0 bg-black z-10 pointer-events-none"
               initial={{ clipPath: 'circle(0% at 50% 50%)' }}
               animate={{ clipPath: introPhase === 'identified' ? 'circle(22% at 50% 50%)' : 'circle(18% at 50% 50%)' }}
               exit={{ clipPath: 'circle(150% at 50% 50%)', transition: { duration: 2, ease: "easeInOut" } }}
               transition={{ duration: 3, ease: "easeOut" }} 
             />
             <motion.div exit={{ opacity: 0, scale: 1.1 }}><PeriscopeHUD phase={introPhase} /></motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN SITE: UPDATED COLORS --- */}
      {/* Changed bg-slate-950 to a deep blue/black gradient */}
      <div className={`min-h-[400vh] bg-[#020617] text-slate-200 font-sans relative selection:bg-cyan-500 selection:text-black ${introPhase !== 'finished' ? 'h-screen overflow-hidden' : ''}`}>
        
        <div className="fixed inset-0 z-0">
          {/* Base Ocean Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black" />
          
          {/* Visuals: Caustics (Sunlight) */}
          <LightCaustics />

          {/* Sonar Grid (More subtle blue) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
          <Particulates />
        </div>

        <motion.div 
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 text-cyan-500/80 font-mono mix-blend-screen hidden md:flex"
          initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1, delay: 13.5 }}
        >
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
          <div className="text-4xl font-bold tracking-tighter tabular-nums">{depth} <span className="text-xs text-cyan-500/50">m</span></div>
          <div className="w-px h-32 bg-gradient-to-t from-transparent via-cyan-500 to-transparent" />
        </motion.div>

        <main className="relative z-10 max-w-5xl mx-auto px-6">
          <section className="h-screen flex flex-col justify-center items-center text-center relative">
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
                Senior Software Engineer. <br/>
                <span className="text-cyan-400">Mission-critical stability</span> for turbulent environments.
              </p>
            </motion.div>
            <motion.div className="absolute bottom-12 text-cyan-500/50" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ChevronDown size={32} />
            </motion.div>
          </section>

          <section className="py-32">
            <RevealSection>
              <div className="flex items-center gap-4 mb-12">
                 <div className="h-px bg-cyan-900/50 flex-1" />
                 <h2 className="text-2xl font-mono text-cyan-400 tracking-widest flex items-center gap-2"><Terminal size={20} /> MISSION LOG</h2>
                 <div className="h-px bg-cyan-900/50 flex-1" />
              </div>
              
              {/* Card Style Upgrade: Glassmorphism with Blue Tint */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg blur opacity-10 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-[#0a1529]/80 backdrop-blur-md border border-cyan-900/50 p-8 rounded-lg shadow-2xl">
                   <div className="flex justify-between items-start mb-6">
                      <div><h3 className="text-3xl font-bold text-white mb-1">Payroll Engine</h3><p className="text-cyan-400 font-mono text-sm">Senior Full Stack Developer</p></div>
                      <span className="px-3 py-1 bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs rounded font-mono">2023 - PRESENT</span>
                   </div>
                   <p className="text-slate-300 mb-6 leading-relaxed">
                     Orchestrating microservices on <strong className="text-white">AWS EKS</strong> and managing CI/CD pipelines via <strong className="text-white">GitHub Actions</strong>. Optimized MongoDB performance (Atlas & On-Prem).
                   </p>
                   <div className="flex flex-wrap gap-2">
                      {['Java/Spring Boot', 'Kubernetes', 'MongoDB', 'Vue.js'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-[#112240] rounded-full text-xs text-cyan-200/70 border border-cyan-900/50">{tech}</span>
                      ))}
                   </div>
                </div>
              </div>
            </RevealSection>
          </section>

          <section className="py-32">
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
                      // Updated Card Colors
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