"use client";

import React, { useState, useEffect } from "react";
import referenceLogos from "./referenceLogos.json";

// Podjela na 4 naizmjenična reda
const row1 = referenceLogos.slice(0, 41);
const row2 = referenceLogos.slice(41, 82);
const row3 = referenceLogos.slice(82, 123);
const row4 = referenceLogos.slice(123);

interface MarqueeRowProps {
  items: string[];
  directionClass: string;
}

function MarqueeRow({ items, directionClass }: MarqueeRowProps) {
  // Dupliramo stavke za besprijekoran i neprekidan CSS loop
  const duplicated = [...items, ...items];

  return (
    <div className="flex overflow-hidden w-full py-1.5 sm:py-2 select-none">
      <div className={`flex shrink-0 items-center gap-3 sm:gap-4 ${directionClass}`}>
        {duplicated.map((fileName, idx) => (
          <div
            key={`${fileName}-${idx}`}
            className="shrink-0 flex items-center justify-center bg-white/95 border border-stone-200/80 rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-2.5 h-14 sm:h-16 min-w-[120px] sm:min-w-[140px] max-w-[150px] sm:max-w-[180px] shadow-xs"
          >
            <img
              src={`/reference/${encodeURIComponent(fileName)}`}
              alt={fileName.replace(/\.[^/.]+$/, "")}
              loading="lazy"
              className="max-h-8 sm:max-h-9 max-w-[100px] sm:max-w-[120px] w-auto h-auto object-contain grayscale opacity-65 contrast-125"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsShowcase() {
  const [projectsCount, setProjectsCount] = useState<number | null>(6017);

  useEffect(() => {
    fetch("/api/stats/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.ok && typeof data.count === "number") {
          setProjectsCount(data.count);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="clients" className="py-16 sm:py-24 lg:py-32 bg-[#faf9f5] text-stone-900 border-b border-stone-200/90 relative overflow-hidden">
      {/* Blagi pozadinski sjaj */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[300px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1820px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-light text-stone-950 tracking-tight font-sans">
            Klijenti & <span className="font-semibold text-amber-600">Reference</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-amber-500 mx-auto mt-3 sm:mt-4 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.5)]" />
          <p className="text-stone-600 text-xs sm:text-base leading-relaxed mt-3 sm:mt-4 max-w-2xl mx-auto font-normal">
            Četiri decenije povjerenja vodećih regionalnih i multinacionalnih brendova, bankarskih institucija, prehrambenih lidera, plivačkih saveza i međunarodnih manifestacija.
          </p>
        </div>

        {/* 4-Row Infinite Alternating Marquee */}
        <div className="relative w-full overflow-hidden py-2 sm:py-4">
          {/* Edge Fades za blagi prelaz na ivicama ekrana */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-44 bg-gradient-to-r from-[#faf9f5] via-[#faf9f5]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-44 bg-gradient-to-l from-[#faf9f5] via-[#faf9f5]/80 to-transparent z-20" />

          {/* Red 1: Udesno, lagano */}
          <MarqueeRow items={row1} directionClass="[animation:marquee-right_130s_linear_infinite]" />

          {/* Red 2: Udesno, puno brže */}
          <MarqueeRow items={row2} directionClass="[animation:marquee-right_55s_linear_infinite]" />

          {/* Red 3: Ulijevo, lagano */}
          <MarqueeRow items={row3} directionClass="[animation:marquee-left_125s_linear_infinite]" />

          {/* Red 4: Udesno, srednje (brže od r1, sporije od r2) */}
          <MarqueeRow items={row4} directionClass="[animation:marquee-right_85s_linear_infinite]" />
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-stone-500 max-w-5xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Četiri decenije kontinuirane audio produkcije, mjernih sistema i medijskog emitovanja</span>
          </div>
          <div>
            <strong className="text-stone-900 font-bold">
              {projectsCount ? `${projectsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}+` : "6.017+"} realizovanih projekata
            </strong>
          </div>
        </div>

      </div>
    </section>
  );
}
