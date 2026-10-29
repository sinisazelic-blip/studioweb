"use client";

import React from "react";
import { Sparkles } from "lucide-react";
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
    <div className="flex overflow-hidden w-full py-2 select-none">
      <div className={`flex shrink-0 items-center gap-4 ${directionClass}`}>
        {duplicated.map((fileName, idx) => (
          <div
            key={`${fileName}-${idx}`}
            className="shrink-0 flex items-center justify-center bg-white/95 border border-stone-200/80 rounded-2xl px-5 py-2.5 h-16 min-w-[140px] max-w-[180px] shadow-xs"
          >
            <img
              src={`/reference/${encodeURIComponent(fileName)}`}
              alt={fileName.replace(/\.[^/.]+$/, "")}
              loading="lazy"
              className="max-h-9 max-w-[120px] w-auto h-auto object-contain grayscale opacity-65 contrast-125"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsShowcase() {
  return (
    <section id="clients" className="py-24 sm:py-32 bg-[#faf9f5] text-stone-900 border-b border-stone-200/90 relative overflow-hidden">
      {/* Blagi pozadinski sjaj */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[300px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1820px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Referentna Lista • Preko 160 Stalnih Komitenata</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-stone-950 tracking-tight font-sans">
            Klijenti & <span className="font-semibold text-amber-600">Reference</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.5)]" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-normal">
            Četiri decenije povjerenja vodećih regionalnih i multinacionalnih brendova, bankarskih institucija, prehrambenih lidera, plivačkih saveza i međunarodnih manifestacija.
          </p>
        </div>

        {/* 4-Row Infinite Alternating Marquee (mint.ba stil) */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Edge Fades za blagi prelaz na ivicama ekrana */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-r from-[#faf9f5] via-[#faf9f5]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-l from-[#faf9f5] via-[#faf9f5]/80 to-transparent z-20" />

          {/* Red 1: Ulijevo */}
          <MarqueeRow items={row1} directionClass="animate-marquee-left" />

          {/* Red 2: Udesno */}
          <MarqueeRow items={row2} directionClass="animate-marquee-right" />

          {/* Red 3: Ulijevo (blago brži ritam) */}
          <MarqueeRow items={row3} directionClass="animate-marquee-left-fast" />

          {/* Red 4: Udesno */}
          <MarqueeRow items={row4} directionClass="animate-marquee-right" />
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-14 pt-8 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-500 max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Četiri decenije kontinuirane audio produkcije, mjernih sistema i medijskog emitovanja</span>
          </div>
          <div className="flex items-center gap-6">
            <strong className="text-stone-900 font-bold">6.017+ realizovanih projekata</strong>
            <span className="text-stone-300">•</span>
            <span>160+ verifikovanih referenci</span>
          </div>
        </div>

      </div>
    </section>
  );
}
