"use client";

import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Origin from "./Origin";
import Projects from "./Projects";
import MissionLog from "./MissionLog";
import Arsenal from "./Arsenal";
import CaptainsLog from "./CaptainsLog";
import ActivityHeatmap from "./ActivityHeatmap";
import Endorsements from "./Endorsements";
import Credentials from "./Credentials";
import Signals from "./Signals";
import FinalCta from "./FinalCta";
import Footer from "./Footer";

type PortfolioContentProps = {
  introPhase: "scanning" | "locking" | "identified" | "finished";
};

export default function PortfolioContent({ introPhase }: PortfolioContentProps) {
  return (
    <>
      <main id="main-content" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <Hero introPhase={introPhase} />
        <Stats />
        <Origin />
        <Projects />
        <MissionLog />
        <Arsenal />
        <ActivityHeatmap />
        <CaptainsLog />
        <Endorsements />
        <Credentials />
        <Signals />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
