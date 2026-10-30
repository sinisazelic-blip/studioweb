"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroStudio() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [projectCount, setProjectCount] = useState<number | null>(6017);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    fetch("/api/stats/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.ok && typeof data.count === "number") {
          setProjectCount(data.count);
        }
      })
      .catch(() => {});
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-stone-950 text-white py-4 sm:py-6">
      {/* Background Video covering the entire Hero page */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          src="/studiotaf-heropage.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Darkening & gradient overlays so text and frosted cards remain clear */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-stone-950/95" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 py-6 sm:py-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* DESKTOP LEFT SPACER */}
          <div className="hidden lg:block lg:col-span-6 pointer-events-none" />

          {/* RIGHT: Typography & Action Buttons in Frosted Glass Box */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start lg:ml-auto max-w-xl z-20 w-full">
            <div className="w-full bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl space-y-4 sm:space-y-6">
              {/* Clean, Elegant, Minimalist Typography */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15] font-sans drop-shadow-md">
                Snimanje, miks <br />
                <span className="font-semibold text-amber-400">i zvučni dizajn.</span>
              </h1>

              <p className="text-stone-100 text-xs sm:text-base font-light leading-relaxed font-sans drop-shadow-sm">
                Četiri decenije rada sa zvukom, analognom opremom i namenskom akustikom. 
                Bez suvišnih riječi — posao radimo tiho, precizno i na vrijeme.
              </p>

              {/* Action Links */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                <button
                  onClick={() => scrollTo("what-we-do")}
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Usluge i Produkcija</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => scrollTo("about")}
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md transition-all cursor-pointer shadow-sm text-center"
                >
                  O Nama & Tim
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Glass Card: Key Credibility Pillars (40+ g, 6.012 projekata, 20+ g Studio TAF, 15+ g Omega) */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 pb-4 sm:pb-8 pt-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-light text-white font-mono tracking-tight">
                40+ Godina
              </div>
              <div className="text-[11px] sm:text-xs text-stone-300 font-sans mt-0.5 sm:mt-1">
                Kontinuiteta i zanata (od 1982.)
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-light text-amber-400 font-mono tracking-tight flex items-center gap-1.5 sm:gap-2">
                <span>{projectCount ? projectCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "6.017"}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              </div>
              <div className="text-[11px] sm:text-xs text-stone-300 font-sans mt-0.5 sm:mt-1">
                Završenih komercijalnih projekata
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-light text-white font-mono tracking-tight">
                20+ Godina
              </div>
              <div className="text-[11px] sm:text-xs text-stone-300 font-sans mt-0.5 sm:mt-1">
                Brenda i prepoznatljivosti Studio TAF
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-light text-red-400 font-mono tracking-tight flex items-center gap-1.5">
                <span className="text-[#C4001A] font-serif font-black text-xl sm:text-2xl lg:text-3xl">Ω</span>
                <span>15+ Godina</span>
              </div>
              <div className="text-[11px] sm:text-xs text-stone-300 font-sans mt-0.5 sm:mt-1">
                SwissTiming/Omega zvanični partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
