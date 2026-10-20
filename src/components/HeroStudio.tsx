"use client";

import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroStudio() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Automatski startuje odmah na učitavanju
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Kad video završi kompletnu animaciju (~10s), stoji u tom stanju 30 sekundi, pa ponovo kreće
  const handleVideoEnded = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 30000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-stone-950 text-white">
      {/* Background Studio Visual / Atmosphere - Original Console Setup with Desk Monitor */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.75] contrast-[1.08] pointer-events-none transition-transform duration-1000"
        style={{
          backgroundImage: "url('/images/equipment/hero-console.jpg')",
        }}
      />

      {/* Gentle transparent gradient so studio elements remain prominent and warm */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-950/95 pointer-events-none" />

      {/* Main Hero Content Area - Puna širina ekrana bez uskog max-w kontejnera */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pt-8 sm:pt-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Video tačno pomjeren na monitor računara na mikseti */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] aspect-[16/10] -mt-10 lg:-mt-32 lg:ml-60 rounded-xl overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.95)] border border-stone-800/90 bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src="/TAFlogoMOVE.mp4"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnded}
                className="w-full h-full object-cover filter contrast-105"
              />
            </div>
          </div>

          {/* RIGHT: Typography & Action Buttons - Pomjereno totalno desno preko rekova */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start lg:items-end space-y-6 lg:ml-auto max-w-xl text-left lg:text-left pr-0 lg:pr-12">
            {/* Minimalist discreet tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-stone-200 text-[11px] font-mono tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Studio TAF • A Member of Fluxa Group • Est. 1982</span>
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
                <span>Upoznajte Studio & Tim</span>
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

      {/* Floating Key Numbers Bar - Puna širina ekrana */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-10 sm:pb-14 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/15">
          <div>
            <div className="text-2xl sm:text-4xl font-light text-white font-mono tracking-tight">
              1982.
            </div>
            <div className="text-xs text-stone-400 font-sans mt-1">
              Početak rada u tonskim studijima
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-4xl font-light text-orange-500 font-mono tracking-tight">
              6.000+
            </div>
            <div className="text-xs text-stone-400 font-sans mt-1">
              Realizovanih projekata i kampanja
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-4xl font-light text-white font-mono tracking-tight">
              120+
            </div>
            <div className="text-xs text-stone-400 font-sans mt-1">
              Stalnih komitenata i agencija
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-4xl font-light text-white font-mono tracking-tight">
              6 Tržišta
            </div>
            <div className="text-xs text-stone-400 font-sans mt-1">
              Balkanska baza spikera (BA, HR, RS...)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
