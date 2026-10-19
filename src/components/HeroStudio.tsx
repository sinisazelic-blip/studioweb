"use client";

import React from "react";
import { Disc, Mic, Radio, Server, Sparkles, ArrowRight, ShieldCheck, Play, Award, Volume2, Sliders, Music, Zap } from "lucide-react";

export default function HeroStudio() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden bg-[#faf7f2]">
      {/* 1. Center Animated Turtle Video: Centered, tasteful size, crisp and refined without dominating */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[380px] max-w-[70vw] aspect-video relative opacity-60">
          <video
            src="/TAFlogoMOVE.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
        {/* Subtle, soft atmospheric gradient allowing clean contrast and air */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#faf7f2]/30 to-[#faf7f2]/85 pointer-events-none" />
      </div>

      {/* Expanded Wide Container - Full screen breathing room */}
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Top Badges Row: Elegant, subtle creative pills */}
        <div className="flex flex-wrap items-center gap-3 mb-8 justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-orange-200 text-orange-950 text-xs font-medium tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Četiri decenije tradicije • 1982 – {new Date().getFullYear()}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-emerald-200 text-emerald-950 text-xs font-mono shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Banja Luka • Regionalni Audio Hub</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-amber-200 text-amber-950 text-xs font-mono font-medium shadow-xs">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>6.000+ Realizovanih Projekata</span>
          </div>
        </div>

        {/* Refined, Elegant Typography - Floating with air, no box/window */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-stone-900 tracking-tight leading-[1.3] mb-4">
            Zvuk koji se pamti. <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
              Prava akustika, analogni autoritet
            </span>{" "}
            i studijska disciplina.
          </h1>

          <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto mb-8">
            Nismo spavaća soba sa laptopom. Studio TAF je institucija sa 40 godina rezanja traka, 
            snimanja i autorske produkcije — 10 hardverskih sintisajzera, autentični lampaši, 
            vrhunski regionalni glasovi i klijentski distributivni hab za najveće balkanske kampanje.
          </p>

          {/* Action Buttons: Sleek, refined, breathing */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => scrollTo("balkan-network")}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md shadow-orange-500/20 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <Mic className="w-4 h-4 text-white" />
              <span>Balkanska Voice & Dubbing Mreža</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("vault")}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs sm:text-sm border border-stone-300 hover:border-orange-500 shadow-xs transition-all cursor-pointer flex items-center gap-2"
            >
              <Server className="w-4 h-4 text-orange-600" />
              <span>Klijentski Audio Vault (BiH / CRO / SRB)</span>
            </button>

            <button
              onClick={() => scrollTo("oprema")}
              className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs sm:text-sm border border-stone-200 transition-all cursor-pointer flex items-center gap-2"
            >
              <Disc className="w-4 h-4 text-orange-600" />
              <span>10 Sintova & Hardver</span>
            </button>
          </div>
        </div>

        {/* 4 Crisp Macro Photo Cards with Real Studio Images from /pokaz/ */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Card 1: VU Metar & Analogni Šum */}
          <div
            onClick={() => scrollTo("oprema")}
            className="rounded-3xl bg-white border border-stone-200/90 hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/vibrant-audio-mixer-stockcake.jpg')`,
              }}
            />
            {/* Studio Context Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40">
                Analogni VU & Balans
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-amber-300 transition-colors mb-1.5">
                Toplina Prave Žice & Lampi
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed font-normal">
                Pravi headroom, analogni točkići i dinamika koja diše prirodno, bez digitalnog „rezanja”.
              </p>
            </div>
          </div>

          {/* Card 2: Lampaški Mikrofon & Kapsula */}
          <div
            onClick={() => scrollTo("balkan-network")}
            className="rounded-3xl bg-white border border-stone-200/90 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/studio-condenser-microphone-equipment-live-recording-close-up-pop-filter-anti-vibration-mount-color-lights-82782057.webp')`,
              }}
            />
            {/* Studio Context Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-300 bg-orange-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-orange-500/40">
                Mikrofonska Kapsula
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-orange-300 transition-colors mb-1.5">
                Kristalno Čist Vokal
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed font-normal">
                Vodeći spikeri Balkana snimljeni na zlatnoj membrani kroz besprijekoran lampaški pretpojačivač.
              </p>
            </div>
          </div>

          {/* Card 3: Mikseta, Faderi & Analogni Potenciometri */}
          <div
            onClick={() => scrollTo("studio-prostor")}
            className="rounded-3xl bg-white border border-stone-200/90 hover:border-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/music-studio-mixer-stockcake.jpg')`,
              }}
            />
            {/* Studio Context Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-300 bg-rose-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-rose-500/40">
                Faderi & Režijski Pult
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-rose-300 transition-colors mb-1.5">
                40 Godina Režije
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed font-normal">
                Iskustvo u miksu koje tačno zna kako da podvuče muziku da bi glas prodao proizvod.
              </p>
            </div>
          </div>

          {/* Card 4: Gitara, Drvo & Glava Instrumenta */}
          <div
            onClick={() => scrollTo("oprema")}
            className="rounded-3xl bg-white border border-stone-200/90 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/musician-s-dream-studio-stockcake.jpg')`,
              }}
            />
            {/* Studio Context Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/40">
                Živo Drvo & Autorski Rad
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-emerald-300 transition-colors mb-1.5">
                Prava Muzika, Bez AI
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed font-normal">
                Pravi instrumenti, 10 sintisajzera i autorsko komponovanje za teatar, film i TV kampanje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
