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
      {/* Background Studio Visual - Slightly Brightened & Optimistic Warmth */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.88] contrast-[1.04] saturate-[1.06] pointer-events-none transition-transform duration-1000"
        style={{
          backgroundImage: "url('/images/equipment/hero-console.jpg')",
        }}
      />

      {/* Gentle transparent gradient so physical console and studio lighting remain authentic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-stone-950/95 pointer-events-none" />

      {/* DESKTOP PERSPECTIVE-MAPPED VIDEO ON CONSOLE SCREEN */}
      <div
        className="hidden lg:flex absolute z-20 rounded-[4px] overflow-hidden bg-black/90 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.9),0_4px_25px_rgba(0,0,0,0.85)] border border-stone-800/60"
        style={{
          left: "26.75%",
          top: "29.75%",
          width: "14.65%",
          height: "17.45%",
          transform: "rotate(-0.4deg)",
        }}
      >
        <video
          ref={videoRef}
          src="/TAFlogoMOVE.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover filter brightness-[0.86] contrast-[1.12] saturate-[0.92]"
        />
        {/* Soft Inner Screen Glare Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
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
                className="w-full h-full object-cover filter brightness-[0.88] contrast-105"
              />
            </div>
          </div>

          {/* DESKTOP LEFT SPACER */}
          <div className="hidden lg:block lg:col-span-6 pointer-events-none" />

          {/* RIGHT: Typography & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start lg:items-end space-y-6 lg:ml-auto max-w-xl text-left lg:text-left pr-0 lg:pr-12 z-20">
            {/* Minimalist discreet tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-stone-200 text-[11px] font-mono tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Studio TAF • Režija & Produkcija od 1982.</span>
            </div>

            {/* Clean, Elegant, Minimalist Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] font-sans drop-shadow-md">
              Snimanje, miks <br />
              <span className="font-semibold text-stone-100">i zvučni dizajn.</span>
            </h1>

            <p className="text-stone-200 text-base sm:text-lg font-light leading-relaxed max-w-xl font-sans drop-shadow-sm">
              Četiri decenije rada sa zvukom, analognom opremom i namenskom akustikom. 
              Bez suvišnih riječi — posao radimo tiho, precizno i na vrijeme.
            </p>

            {/* Action Links */}
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <button
                onClick={() => scrollTo("about")}
                className="px-6 py-3.5 rounded-xl bg-white text-stone-950 hover:bg-stone-200 text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 shadow-lg"
              >
                <span>Upoznajte Studio & Istorijat</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollTo("what-we-do")}
                className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md transition-all cursor-pointer shadow-sm"
              >
                Usluge & Produkcija
              </button>
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
