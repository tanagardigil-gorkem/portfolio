"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minus, Maximize2 } from "lucide-react";
import { useTranslation } from "../../lib/i18n/context";

type Line = {
  type: "input" | "output" | "error" | "system" | "ascii";
  text: string;
};

const ASCII_LOGO = `   ____            _                    
  / ___| ___  _ __| | _____ _ __ ___   
 | |  _ / _ \\| '__| |/ / _ \\ '_ \` _ \\  
 | |_| | (_) | |  |   <  __/ | | | | | 
  \\____|\\___/|_|  |_|\\_\\___|_| |_| |_| `;

const WELCOME_LINES: Line[] = [
  { type: "ascii", text: ASCII_LOGO },
  { type: "system", text: "Subsurface Terminal v2.0 — Type 'help' for available commands." },
  { type: "system", text: "─────────────────────────────────────────────────────" },
];

const COMMANDS: Record<string, () => Line[]> = {
  help: () => [
    { type: "output", text: "Available commands:" },
    { type: "output", text: "" },
    { type: "output", text: "  about       — Who is Gorkem?" },
    { type: "output", text: "  skills      — Technical arsenal" },
    { type: "output", text: "  experience  — Mission history" },
    { type: "output", text: "  projects    — Featured deployments" },
    { type: "output", text: "  contact     — Open communication channels" },
    { type: "output", text: "  blog        — Latest captain's log entries" },
    { type: "output", text: "  languages   — Spoken languages" },
    { type: "output", text: "  education   — Academic background" },
    { type: "output", text: "  whoami      — Current session info" },
    { type: "output", text: "  date        — Current date/time" },
    { type: "output", text: "  ping        — Test connection" },
    { type: "output", text: "  neofetch    — System info" },
    { type: "output", text: "  matrix      — Enter the matrix" },
    { type: "output", text: "  clear       — Clear terminal" },
    { type: "output", text: "  exit        — Close terminal" },
  ],
  about: () => [
    { type: "output", text: "┌─ PERSONNEL FILE ─────────────────────────────────┐" },
    { type: "output", text: "│                                                   │" },
    { type: "output", text: "│  Name:     Gorkem Tanagardigil                    │" },
    { type: "output", text: "│  Role:     Senior Software Engineer               │" },
    { type: "output", text: "│  Origin:   Turkish Navy (2010-2021)               │" },
    { type: "output", text: "│  Focus:    Backend · Cloud · Resilient Systems    │" },
    { type: "output", text: "│  Status:   ACTIVE — Open to new missions          │" },
    { type: "output", text: "│                                                   │" },
    { type: "output", text: "│  \"I build systems that stay online when the       │" },
    { type: "output", text: "│   seas get rough.\"                                │" },
    { type: "output", text: "│                                                   │" },
    { type: "output", text: "└───────────────────────────────────────────────────┘" },
  ],
  skills: () => [
    { type: "output", text: "TECHNICAL ARSENAL:" },
    { type: "output", text: "" },
    { type: "output", text: "  Backend      → Java, Kotlin, Spring Framework, Microservices" },
    { type: "output", text: "  Cloud/DevOps → AWS, Kubernetes, Docker, GitHub Actions, ArgoCD" },
    { type: "output", text: "  Data         → MongoDB, PostgreSQL, MySQL, Redis" },
    { type: "output", text: "  AI           → LLMs, Agentic Dev, RAG, Fine-tuning" },
    { type: "output", text: "  Frontend     → Next.js, React, Vue.js, TypeScript" },
    { type: "output", text: "  Testing      → JUnit, Vitest, Jest" },
  ],
  experience: () => [
    { type: "output", text: "MISSION HISTORY:" },
    { type: "output", text: "" },
    { type: "output", text: "  [2023-NOW]  Senior Full Stack Developer — Payroll Engine" },
    { type: "output", text: "              Spring Boot microservices on AWS EKS" },
    { type: "output", text: "" },
    { type: "output", text: "  [2022-2023] Senior Software Developer — Rightyon" },
    { type: "output", text: "              Spring Boot backends & relational schemas" },
    { type: "output", text: "" },
    { type: "output", text: "  [2021-2022] Software Developer — Oscorpex" },
    { type: "output", text: "              REST/GraphQL APIs, IoT, Android" },
    { type: "output", text: "" },
    { type: "output", text: "  [2010-2021] Computer Engineer — Turkish Navy" },
    { type: "output", text: "              Mission-critical Java systems & security" },
  ],
  projects: () => [
    { type: "output", text: "FEATURED DEPLOYMENTS:" },
    { type: "output", text: "" },
    { type: "output", text: "  ● Payroll Engine — Microservice payroll platform (K8s, AWS)" },
    { type: "output", text: "  ● ServisRotam    — Backend + 2 Android apps" },
    { type: "output", text: "  ● Sayiyo         — Cloud-connected backend services" },
    { type: "output", text: "  ● AHWCS Sim      — Harpoon Weapon Control System Simulator" },
    { type: "output", text: "  ● VDR            — Voyage Data Recorder" },
  ],
  contact: () => [
    { type: "output", text: "COMMUNICATION CHANNELS:" },
    { type: "output", text: "" },
    { type: "output", text: "  Email    → gtanagardigil@gmail.com" },
    { type: "output", text: "  LinkedIn → linkedin.com/in/gorkem-tanagardigil" },
    { type: "output", text: "  GitHub   → github.com/tanagardigil-gorkem" },
  ],
  blog: () => [
    { type: "output", text: "CAPTAIN'S LOG — RECENT ENTRIES:" },
    { type: "output", text: "" },
    { type: "output", text: "  [2025-02-01] Agentic AI: Building Systems That Think in Steps" },
    { type: "output", text: "  [2025-01-15] From Navy Bridges to Code Bridges" },
    { type: "output", text: "  [2024-11-20] Kubernetes War Stories: Lessons from Production" },
    { type: "output", text: "  [2024-09-05] Spring Boot Performance: Beyond the Defaults" },
    { type: "output", text: "" },
    { type: "output", text: "  Navigate to /log/<slug> to read full entries." },
  ],
  languages: () => [
    { type: "output", text: "LANGUAGE PROFICIENCY:" },
    { type: "output", text: "" },
    { type: "output", text: "  Turkish        ████████████████████ Native" },
    { type: "output", text: "  English        ████████████████░░░░ Fluent" },
    { type: "output", text: "  French         ████████████░░░░░░░░ Conversational" },
    { type: "output", text: "  Luxembourgish  ████████░░░░░░░░░░░░ Beginner" },
  ],
  education: () => [
    { type: "output", text: "ACADEMIC BACKGROUND:" },
    { type: "output", text: "" },
    { type: "output", text: "  Certifications:" },
    { type: "output", text: "    ● Using MongoDB with Java — MongoDB (2022)" },
    { type: "output", text: "    ● Kubernetes and Docker — Udemy (2023)" },
    { type: "output", text: "" },
    { type: "output", text: "  Publication:" },
    { type: "output", text: "    ● Light Fidelity (LiFi): New Era in Wireless Communication" },
    { type: "output", text: "      DTSS 2019 Conference — METU" },
  ],
  whoami: () => [
    { type: "output", text: "visitor@gorkem.dev — guest session" },
    { type: "output", text: "Clearance level: PUBLIC" },
  ],
  date: () => [
    { type: "output", text: new Date().toString() },
  ],
  ping: () => [
    { type: "output", text: "PING gorkem.dev (127.0.0.1): 56 data bytes" },
    { type: "output", text: "64 bytes: icmp_seq=0 ttl=64 time=0.042 ms" },
    { type: "output", text: "64 bytes: icmp_seq=1 ttl=64 time=0.038 ms" },
    { type: "output", text: "64 bytes: icmp_seq=2 ttl=64 time=0.041 ms" },
    { type: "output", text: "--- gorkem.dev ping statistics ---" },
    { type: "output", text: "3 packets transmitted, 3 received, 0% packet loss" },
    { type: "system", text: "Connection to mission control: STABLE" },
  ],
  neofetch: () => [
    { type: "ascii", text: "        .--.        " },
    { type: "ascii", text: "       |o_o |       gorkem@subsurface" },
    { type: "ascii", text: "       |:_/ |       ──────────────────" },
    { type: "ascii", text: "      //   \\ \\      OS: Portfolio OS 2.0" },
    { type: "ascii", text: "     (|     | )     Host: gorkem.dev" },
    { type: "ascii", text: "    /'\\_   _/`\\     Kernel: Next.js 16" },
    { type: "ascii", text: "    \\___)=(___/     Shell: Subsurface Terminal" },
    { type: "output", text: "                    Uptime: 12+ years" },
    { type: "output", text: "                    Packages: Java, Spring, K8s, AWS" },
    { type: "output", text: "                    Theme: Deep Ocean [Cyan]" },
    { type: "output", text: "                    Resolution: Mission-Critical" },
  ],
  matrix: () => [
    { type: "system", text: "Wake up, Neo..." },
    { type: "system", text: "The Matrix has you..." },
    { type: "system", text: "Follow the white rabbit." },
    { type: "output", text: "" },
    { type: "output", text: "  01001010 01100001 01110110 01100001" },
    { type: "output", text: "  01001011 00111000 01110011 00100000" },
    { type: "output", text: "  01000001 01010111 01010011 00100000" },
    { type: "output", text: "" },
    { type: "system", text: "Knock, knock." },
  ],
};

export default function CommandTerminal() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [lines, setLines] = useState<Line[]>(WELCOME_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const inputLine: Line = { type: "input", text: `visitor@gorkem.dev:~$ ${cmd}` };

    if (trimmed === "") {
      setLines((prev) => [...prev, inputLine]);
      return;
    }

    if (trimmed === "clear") {
      setLines(WELCOME_LINES);
      return;
    }

    if (trimmed === "exit") {
      setIsOpen(false);
      setLines(WELCOME_LINES);
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      setLines((prev) => [...prev, inputLine, ...handler()]);
    } else {
      setLines((prev) => [
        ...prev,
        inputLine,
        { type: "error", text: `command not found: ${trimmed}. Type 'help' for available commands.` },
      ]);
    }

    setHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = Math.min(historyIndex + 1, history.length - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines(WELCOME_LINES);
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-40 bg-[#0a1529]/90 border border-cyan-500/30 text-cyan-400 p-3 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:border-cyan-400 hover:bg-cyan-950/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1f36] backdrop-blur-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t.terminal.open}
        title={t.terminal.open}
      >
        <Terminal size={20} aria-hidden="true" />
      </motion.button>

      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-20 left-4 sm:bottom-24 sm:left-8 z-50 w-[calc(100vw-2rem)] sm:w-[560px] max-h-[70vh] flex flex-col rounded-xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.15)] border border-cyan-500/30"
          >
            <div className="bg-[#0a0e1a] border-b border-cyan-900/50 px-4 py-2.5 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-cyan-500" aria-hidden="true" />
                <span className="text-xs font-mono text-cyan-300/80">subsurface-terminal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsMinimized(true)}
                  className="w-5 h-5 rounded flex items-center justify-center text-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-900/40 transition-colors cursor-pointer"
                  aria-label="Minimize terminal"
                >
                  <Minus size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-5 h-5 rounded flex items-center justify-center text-cyan-500/50 hover:text-red-400 hover:bg-red-900/30 transition-colors cursor-pointer"
                  aria-label="Close terminal"
                >
                  <X size={12} />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              onClick={() => inputRef.current?.focus()}
              className="flex-1 bg-[#060a14]/95 backdrop-blur-md p-3 sm:p-4 overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed min-h-[250px] sm:min-h-[300px] max-h-[50vh] cursor-text terminal-scroll"
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`whitespace-pre-wrap break-all ${
                    line.type === "input"
                      ? "text-cyan-300"
                      : line.type === "error"
                      ? "text-red-400/80"
                      : line.type === "system"
                      ? "text-cyan-500/70"
                      : line.type === "ascii"
                      ? "text-cyan-400/60"
                      : "text-slate-300/90"
                  }`}
                >
                  {line.text}
                </div>
              ))}

              <div className="flex items-center gap-0 mt-1">
                <span className="text-cyan-500/70 shrink-0"><span className="hidden sm:inline">visitor@gorkem.dev</span><span className="sm:hidden">gorkem</span>:~$&nbsp;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-cyan-200 outline-none caret-cyan-400 font-mono text-sm"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal input"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && isMinimized && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsMinimized(false)}
            className="fixed bottom-4 left-16 sm:bottom-8 sm:left-20 z-40 bg-[#0a1529]/90 border border-cyan-500/30 text-cyan-400 px-3 py-2 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:border-cyan-400 transition-all cursor-pointer flex items-center gap-2 font-mono text-xs backdrop-blur-md"
            aria-label="Restore terminal"
          >
            <Maximize2 size={12} aria-hidden="true" />
            {t.terminal.restore}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
