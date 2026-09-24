"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "../../lib/i18n/context";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-3xl sm:text-5xl font-bold text-white mb-2 tabular-nums">
      {count}
      <span className="text-cyan-400">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { title: t.stats.yearsTitle, value: "12+", detail: t.stats.yearsDetail, target: 12, suffix: "+" },
    { title: t.stats.incidentsTitle, value: t.stats.incidentsValue, detail: t.stats.incidentsDetail, target: 0, suffix: "" },
    { title: t.stats.deployTitle, value: t.stats.deployValue, detail: t.stats.deployDetail, target: 0, suffix: "" },
  ];

  return (
    <section className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.5)" }}
            className="bg-[#0a1529]/60 border border-cyan-900/40 rounded-xl p-8 shadow-lg backdrop-blur-sm text-center hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-shadow"
          >
            {stat.target > 0 ? (
              <CountUp target={stat.target} suffix={stat.suffix} />
            ) : (
              <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
            )}
            <h3 className="text-cyan-300 font-mono text-xs uppercase tracking-[0.3em] mb-2">
              {stat.title}
            </h3>
            <p className="text-slate-300 text-sm">{stat.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
