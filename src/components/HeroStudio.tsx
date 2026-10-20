"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, Sparkles, Play } from "lucide-react";

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
      {/* Background Studio Visual / Atmosphere - Authentic warm studio console & monitors */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.70] contrast-[1.05] pointer-events-none transition-transform duration-1000"
        style={{
          backgroundImage: "url('/images/equipment/studio-warm-console.jpg')",
        }}
      />

      {/* Gentle transparent gradient so studio elements remain prominent and warm */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-stone-950/90 pointer-events-none" />

      {/* Top breathing space & 2-column hero content */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pt-16 sm:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Message */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Minimalist discreet tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-stone-200 text-[11px] font-mono tracking-widest uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Studio TAF • A Member of Fluxa Group • Est. 1982</span>
            </div>

            {/* Clean, Elegant, Minimalist Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] mb-6 font-sans drop-shadow-md">
              Snimanje, miks <br />
              <span className="font-semibold text-stone-100">i zvučni dizajn.</span>
            </h1>

            <p className="text-stone-200 text-base sm:text-xl font-light leading-relaxed max-w-xl mb-10 font-sans drop-shadow-sm">
              Četiri decenije rada sa zvukom, analognom opremom i namenskom akustikom. 
              Bez suvišnih riječi — posao radimo tiho, precizno i na vrijeme.
            </p>

            {/* Minimalist Action Link */}
            <div className="flex items-center gap-4 flex-wrap">
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

          {/* Right Hero Feature: Turtle Logo Animation Box */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div
              onClick={manualPlayTurtle}
              className="group relative w-64 sm:w-72 aspect-square rounded-3xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              title="Kliknite za prikaz TAF kornjača animacije"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/TAFlogoMOVE.mp4"
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain filter contrast-110"
                />

                {!videoStarted && (
                  <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-4 transition-opacity group-hover:opacity-80">
                    <img
                      src="/logos/taf-logo.jpg"
                      alt="Studio TAF"
                      className="h-12 w-auto object-contain rounded-md mb-3 filter drop-shadow-md"
                    />
                    <span className="text-[10px] font-mono text-stone-300 uppercase tracking-widest">
                      Kornjača Animacija
                    </span>
                    <span className="text-[9px] text-stone-400 font-mono mt-1">
                      (Pokreće se automatski za 30s)
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Key Numbers Bar (Brojke koje govore za nas iz D:\Dev\WebPortal) */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pb-12 sm:pb-16 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/15">
          <div>
            <div className="text-2xl sm:text-4xl font-light text-white font-mono tracking-tight">
              1982.
            </div>
            <div className="text-xs text-stone-400 font-sans mt-1">
              Početak rada u tonskim studijima
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-4xl font-light text-cyan-400 font-mono tracking-tight">
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
