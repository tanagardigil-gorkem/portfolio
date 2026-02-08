"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../../lib/i18n/context";

type NavigationProps = {
  visible: boolean;
};

export default function Navigation({ visible }: NavigationProps) {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.missionLog, href: "#mission-log" },
    { label: t.nav.arsenal, href: "#arsenal" },
    { label: t.nav.captainsLog, href: "#captains-log" },
    { label: t.nav.signals, href: "#signals" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const visibleSections = new Set<string>();
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.add(id);
          } else {
            visibleSections.delete(id);
          }
          if (visibleSections.size === 0) {
            setActiveSection("");
          } else {
            // pick the first visible section in DOM order
            const first = sectionIds.find((s) => visibleSections.has(s));
            setActiveSection(first ?? "");
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-[#0a1529]/95 backdrop-blur-md border-b border-cyan-900/40 shadow-lg"
              : "bg-transparent"
          }`}
        >
          <nav
            aria-label="Main navigation"
            className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between"
          >
            <a
              href="#top"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1529] rounded"
            >
              <Logo size={30} showText />
            </a>

            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative text-[11px] font-mono px-3 py-2 rounded-lg uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap ${
                      isActive
                        ? "text-cyan-400 bg-cyan-900/30"
                        : "text-cyan-200/80 hover:text-cyan-400 hover:bg-cyan-900/30"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
              <LanguageSwitcher />
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/30 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X size={24} aria-hidden="true" />
                ) : (
                  <Menu size={24} aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-[#0a1529]/98 backdrop-blur-md border-t border-cyan-900/40 overflow-hidden"
              >
                <div className="px-4 py-6 space-y-2">
                  {navLinks.map((link, index) => {
                    const sectionId = link.href.replace("#", "");
                    const isActive = activeSection === sectionId;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`block text-lg font-mono px-4 py-3 rounded-lg uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                          isActive
                            ? "text-cyan-400 bg-cyan-900/30 border-l-2 border-cyan-400"
                            : "text-cyan-200 hover:text-cyan-400 hover:bg-cyan-900/30"
                        }`}
                      >
                        {link.label}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
