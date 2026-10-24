"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroStudio() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [projectCount, setProjectCount] = useState<number | null>(6012);

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

  const handleVideoEnded = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 25000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-stone-950 text-white">
      {/* Background Studio Visual & Mathematically Pinned Display (SVG Locked Coordinates) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 2400 1600"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          {/* Authentic Studio Hardware Console Photography */}
          <image
            href="/images/equipment/hero-console.jpg"
            width="2400"
            height="1600"
            className="filter brightness-[0.88] contrast-[1.04] saturate-[1.06]"
          />

          {/* Desktop Pinned Video: Exact Physical Monitor Screen (500, 670, 500, 262) in 2400x1600 matrix */}
          <foreignObject
            x="500"
            y="670"
            width="500"
            height="262"
            className="hidden lg:block overflow-hidden"
          >
            <div className="w-full h-full bg-black rounded-[2px] overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.95)]">
              <video
                ref={videoRef}
                src="/TAFlogoMOVE.mp4"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnded}
                className="w-full h-full object-cover filter brightness-[0.74] contrast-[1.22] saturate-[0.85]"
              />
              {/* Soft screen phosphor / glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/10 pointer-events-none" />
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* Gentle transparent gradient so physical console and studio lighting remain authentic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-stone-950/95 pointer-events-none" />

      {/* Top-Right Pill Tag: Studio TAF - A Member of Fluxa Group - Est. 1982 */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-8 lg:right-12 z-30 pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 text-[11px] font-mono tracking-widest uppercase shadow-lg">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Studio TAF • A Member of Fluxa Group • Est. 1982</span>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pt-8 sm:pt-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* MOBILE/TABLET VIDEO FALLBACK */}
          <div className="lg:hidden flex items-center justify-center">
            <div className="relative w-full max-w-[320px] aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black flex items-center justify-center">
              <video
                src="/TAFlogoMOVE.mp4"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnded}
                className="w-full h-full object-cover filter brightness-[0.82] contrast-110"
              />
            </div>
          </div>

          {/* DESKTOP LEFT SPACER */}
          <div className="hidden lg:block lg:col-span-6 pointer-events-none" />

          {/* RIGHT: Typography & Action Buttons in Exact Same Luminous Frosted Glass Box as Bottom Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start lg:ml-auto max-w-xl z-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
              {/* Clean, Elegant, Minimalist Typography */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1] font-sans drop-shadow-md">
                Snimanje, miks <br />
                <span className="font-semibold text-amber-400">i zvučni dizajn.</span>
              </h1>

              <p className="text-stone-100 text-sm sm:text-base font-light leading-relaxed font-sans drop-shadow-sm">
                Četiri decenije rada sa zvukom, analognom opremom i namenskom akustikom. 
                Bez suvišnih riječi — posao radimo tiho, precizno i na vrijeme.
              </p>

              {/* Action Links */}
              <div className="flex items-center gap-4 flex-wrap pt-2">
                <button
                  onClick={() => scrollTo("about")}
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 shadow-lg"
                >
                  <span>Upoznajte Tim & Istorijat</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => scrollTo("what-we-do")}
                  className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md transition-all cursor-pointer shadow-sm"
                >
                  Usluge i Produkcija
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Glass Card: Key Credibility Pillars (40+ g, 6.012 projekata, 20+ g Studio TAF, 15+ g Omega) */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-10 sm:pb-14 pt-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="text-2xl sm:text-4xl font-light text-white font-mono tracking-tight">
                40+ Godina
              </div>
              <div className="text-xs text-stone-300 font-sans mt-1">
                Kontinuiteta i zanata (od 1982.)
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-4xl font-light text-amber-400 font-mono tracking-tight flex items-center gap-2">
                <span>{projectCount ? projectCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "6.012"}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-xs text-stone-300 font-sans mt-1">
                Završenih komercijalnih projekata
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-4xl font-light text-white font-mono tracking-tight">
                20+ Godina
              </div>
              <div className="text-xs text-stone-300 font-sans mt-1">
                Brenda i prepoznatljivosti Studio TAF
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-4xl font-light text-red-400 font-mono tracking-tight flex items-center gap-1.5">
                <span className="text-[#C4001A] font-serif font-black text-2xl sm:text-3xl">Ω</span>
                <span>15+ Godina</span>
              </div>
              <div className="text-xs text-stone-300 font-sans mt-1">
                Swiss Timing Omega zvanični partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
