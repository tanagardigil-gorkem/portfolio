"use client";

import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Projects from "./Projects";
import MissionLog from "./MissionLog";
import Arsenal from "./Arsenal";
import Origin from "./Origin";
import Signals from "./Signals";
import FinalCta from "./FinalCta";

type PortfolioContentProps = {
  introPhase: "scanning" | "locking" | "identified" | "finished";
};

export default function PortfolioContent({ introPhase }: PortfolioContentProps) {
  return (
    <main className="relative z-10 max-w-5xl mx-auto px-6">
      <Hero introPhase={introPhase} />
      <Stats />
      <Projects />
      <MissionLog />
      <Arsenal />
      <Origin />
      <Signals />
      <FinalCta />
    </main>
  );
}
