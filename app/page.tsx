"use client";

import React from "react";
import PortfolioShell from "../components/PortfolioShell";
import PortfolioContent from "../components/sections/PortfolioContent";

export default function DeepDivePortfolio() {
  return (
    <PortfolioShell>
      {(introPhase) => <PortfolioContent introPhase={introPhase} />}
    </PortfolioShell>
  );
}
