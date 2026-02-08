"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { activityData } from "../../data/portfolio";

const CELL_SIZE_SM = 10;
const CELL_SIZE_LG = 13;
const CELL_GAP = 3;
const DAYS_IN_WEEK = 7;

function getIntensityClass(count: number): string {
  if (count === 0) return "bg-cyan-950/30 border-cyan-900/20";
  if (count <= 2) return "bg-cyan-800/40 border-cyan-700/30";
  if (count <= 4) return "bg-cyan-600/50 border-cyan-500/30";
  if (count <= 6) return "bg-cyan-500/70 border-cyan-400/40";
  return "bg-cyan-400 border-cyan-300/50 shadow-[0_0_6px_rgba(6,182,212,0.4)]";
}

function getMonthLabels(data: { date: string; count: number }[]) {
  const labels: { label: string; col: number }[] = [];
  let lastMonth = -1;
  let col = 0;

  const startDate = new Date(data[0].date);
  const startDay = startDate.getDay();
  let dayIndex = 0;

  for (let i = 0; i < data.length; i++) {
    const d = new Date(data[i].date);
    const month = d.getMonth();
    const currentCol = Math.floor((dayIndex + startDay) / DAYS_IN_WEEK);

    if (month !== lastMonth) {
      labels.push({
        label: d.toLocaleDateString("en-US", { month: "short" }),
        col: currentCol,
      });
      lastMonth = month;
      col = currentCol;
    }
    dayIndex++;
  }

  return labels;
}

export default function ActivityHeatmap() {
  const [hoveredCell, setHoveredCell] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

  const totalContributions = useMemo(
    () => activityData.reduce((sum, d) => sum + d.count, 0),
    []
  );

  const monthLabels = useMemo(() => getMonthLabels(activityData), []);

  const weeks = useMemo(() => {
    const result: { date: string; count: number }[][] = [];
    const startDate = new Date(activityData[0].date);
    const startDay = startDate.getDay();

    // Pad the first week
    const firstWeek: { date: string; count: number }[] = [];
    for (let i = 0; i < startDay; i++) {
      firstWeek.push({ date: "", count: -1 });
    }

    let currentWeek = firstWeek;
    for (const entry of activityData) {
      currentWeek.push(entry);
      if (currentWeek.length === DAYS_IN_WEEK) {
        result.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) {
      result.push(currentWeek);
    }

    return result;
  }, []);

  return (
    <section className="py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80 mb-3">
          <span className="w-8 h-px bg-cyan-500/50" />
          Operations Tempo
          <span className="w-8 h-px bg-cyan-500/50" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Activity Sonar</h2>
        <p className="text-cyan-200/60 text-sm sm:text-base px-2 sm:px-0">A year of engineering activity — commits, reviews, and deployments.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative border border-cyan-900/30 bg-[#0a1529]/60 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/3 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#112240] w-10 h-10 rounded-lg flex items-center justify-center text-cyan-400 shadow-inner">
                <Activity size={18} aria-hidden="true" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  {totalContributions.toLocaleString()} contributions
                </div>
                <div className="text-[10px] font-mono text-cyan-500/60">in the last year</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-cyan-500/50">
              <span>Less</span>
              {[0, 1, 3, 5, 7].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm border ${getIntensityClass(level)}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="overflow-x-auto pb-2 -mx-2 px-2">
            <div
              className="relative hidden sm:block"
              style={{ minWidth: weeks.length * (CELL_SIZE_LG + CELL_GAP) + 30 }}
            >
              <div className="flex gap-0 ml-7 mb-1">
                {monthLabels.map((m, i) => (
                  <div
                    key={`${m.label}-${i}`}
                    className="text-[9px] font-mono text-cyan-500/50 absolute"
                    style={{ left: m.col * (CELL_SIZE_LG + CELL_GAP) + 28 }}
                  >
                    {m.label}
                  </div>
                ))}
              </div>

              <div className="flex gap-[3px] mt-5">
                <div className="flex flex-col gap-[3px] mr-1 pt-0">
                  {["", "Mon", "", "Wed", "", "Fri", ""].map((day, i) => (
                    <div
                      key={i}
                      className="text-[9px] font-mono text-cyan-500/40 leading-none flex items-center"
                      style={{ height: CELL_SIZE_LG }}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {weeks.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-[3px]">
                    {week.map((day, dayIdx) => (
                      <div
                        key={`${weekIdx}-${dayIdx}`}
                        className={`rounded-sm border transition-all duration-150 ${
                          day.count === -1
                            ? "opacity-0"
                            : `${getIntensityClass(day.count)} hover:ring-1 hover:ring-cyan-400/50 cursor-crosshair`
                        }`}
                        style={{ width: CELL_SIZE_LG, height: CELL_SIZE_LG }}
                        onMouseEnter={(e) => {
                          if (day.count === -1) return;
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredCell({
                            date: day.date,
                            count: day.count,
                            x: rect.left + rect.width / 2,
                            y: rect.top,
                          });
                        }}
                        onMouseLeave={() => setHoveredCell(null)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative sm:hidden"
              style={{ minWidth: weeks.length * (CELL_SIZE_SM + CELL_GAP) }}
            >
              <div className="flex gap-0 mb-1">
                {monthLabels.map((m, i) => (
                  <div
                    key={`${m.label}-${i}`}
                    className="text-[8px] font-mono text-cyan-500/50 absolute"
                    style={{ left: m.col * (CELL_SIZE_SM + CELL_GAP) }}
                  >
                    {m.label}
                  </div>
                ))}
              </div>

              <div className="flex gap-[3px] mt-4">
                {weeks.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-[3px]">
                    {week.map((day, dayIdx) => (
                      <div
                        key={`${weekIdx}-${dayIdx}`}
                        className={`rounded-[2px] border transition-all duration-150 ${
                          day.count === -1
                            ? "opacity-0"
                            : getIntensityClass(day.count)
                        }`}
                        style={{ width: CELL_SIZE_SM, height: CELL_SIZE_SM }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {hoveredCell && (
            <div
              className="fixed z-50 pointer-events-none bg-[#0a1529] border border-cyan-500/40 rounded-lg px-3 py-2 shadow-[0_0_20px_rgba(6,182,212,0.2)] text-xs font-mono animate-fade-in"
              style={{
                left: hoveredCell.x,
                top: hoveredCell.y - 45,
                transform: "translateX(-50%)",
              }}
            >
              <div className="text-white font-semibold">
                {hoveredCell.count} contribution{hoveredCell.count !== 1 ? "s" : ""}
              </div>
              <div className="text-cyan-500/60">
                {new Date(hoveredCell.date).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
