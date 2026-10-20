"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroStudio() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStarted, setVideoStarted] = useState<boolean>(false);

  useEffect(() => {
    // Turtle animation starts automatically after 30 seconds
    const startTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
        setVideoStarted(true);

        // Runs for 5 seconds and pauses/stays still
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }, 5000);
      }
    }, 30000);

    return () => clearTimeout(startTimer);
  }, []);

  const manualPlayTurtle = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setVideoStarted(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 5000);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-stone-950 text-white">
      {/* Background Studio Visual / Atmosphere - The Studio Console Setup */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.75] contrast-[1.08] pointer-events-none transition-transform duration-1000"
        style={{
          backgroundImage: "url('/images/equipment/hero-console.jpg')",
        }}
      />

      {/* Gentle transparent gradient so studio elements remain prominent and warm */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-950/95 pointer-events-none" />

      {/* Main Hero Content Area - 2-Column Grid */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pt-12 sm:pt-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* LEFT: Studio Computer Monitor with Embedded Turtle Animation */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start">
            <div
              onClick={manualPlayTurtle}
              className="group relative w-full max-w-[480px] sm:max-w-[540px] aspect-[16/10] rounded-2xl sm:rounded-3xl bg-stone-900/90 border-4 sm:border-[6px] border-stone-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] p-2 sm:p-2.5 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              title="Kliknite za pokretanje Studio TAF kornjača animacije"
            >
              {/* Studio Display Screen Glass Frame */}
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-inner">
                {/* On-screen status / timecode header */}
                <div className="absolute top-2.5 left-3 z-20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-stone-300 font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    STUDIO TAF DISPLAY
                  </span>
                </div>

                <video
                  ref={videoRef}
                  src="/TAFlogoMOVE.mp4"
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain filter contrast-110"
                />

                {!videoStarted && (
                  <div className="absolute inset-0 bg-stone-950/50 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-4 transition-opacity group-hover:opacity-85">
                    <img
                      src="/logos/taf-logo.jpg"
                      alt="Studio TAF"
                      className="h-14 sm:h-16 w-auto object-contain rounded-md mb-3 filter drop-shadow-lg"
                    />
                    <span className="text-xs font-mono text-stone-200 uppercase tracking-widest font-bold">
                      Kornjača Animacija
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono mt-1">
                      (Startuje za 30s • Kliknite za trenutan prikaz)
                    </span>
                  </div>
                )}
              </div>

              {/* Monitor Stand Bottom Chin */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-2 rounded-b-md bg-stone-700 shadow-md" />
            </div>
          </div>

          {/* RIGHT: Typography & Action Buttons - Centered Vertically */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start space-y-6">
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

      {/* Floating Key Numbers Bar */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pb-10 sm:pb-14 pt-8">
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
