"use client";

import React from "react";
import { Disc, Mic, Radio, Server, Sparkles, ArrowRight, ShieldCheck, Play, Award, Volume2, Sliders, Music, Zap } from "lucide-react";

export default function HeroStudio() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden bg-[#faf7f2]">
      {/* 1. Full Background Video: TAFlogoMOVE.mp4 - Clearly visible & sharp (reduced transparency by half) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          src="/TAFlogoMOVE.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 scale-100"
        />
        {/* Soft, translucent light overlay so video is unmistakably clear while text is 100% legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/75 via-[#faf7f2]/55 to-[#faf7f2]/90" />
        <div className="absolute top-10 left-10 w-[600px] h-[400px] bg-orange-400/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-10 w-[700px] h-[450px] bg-amber-400/15 rounded-full blur-[110px]" />
      </div>

      {/* Expanded Wide Container - Full screen breathing room */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Top Badges Row: Colorful Creative Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-8 justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-orange-300 text-orange-950 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Četiri decenije tradicije • 1982 – {new Date().getFullYear()}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-emerald-300 text-emerald-950 text-xs sm:text-sm font-mono shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold">Banja Luka • Regionalni Audio Hub</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-amber-300 text-amber-950 text-xs sm:text-sm font-mono font-bold shadow-sm">
            <Zap className="w-4 h-4 text-amber-600" />
            <span>6.000+ Realizovanih Audio Projekata</span>
          </div>
        </div>

        {/* Wide Center Stage Headline & Statement with Soft Glass Card */}
        <div className="text-center max-w-5xl mx-auto backdrop-blur-xs bg-white/45 p-8 sm:p-14 rounded-3xl border border-white/70 shadow-xl shadow-stone-900/5 mb-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-stone-950 leading-[1.08] mb-8 font-display uppercase">
            Zvuk koji se pamti. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
              Prava akustika, analogni autoritet
            </span>{" "}
            i studijska disciplina.
          </h1>

          <p className="text-stone-800 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Nismo spavaća soba sa laptopom. Studio TAF je institucija sa 40 godina rezanja traka, 
            snimanja i autorske produkcije — 10 hardverskih sintisajzera, autentični lampaši, 
            vrhunski regionalni glasovi i klijentski distributivni hab za najveće balkanske kampanje.
          </p>

          {/* Action Buttons with Rich Warm Gradients */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <button
              onClick={() => scrollTo("balkan-network")}
              className="px-9 py-4.5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-base tracking-wide shadow-xl shadow-orange-500/30 transition-all cursor-pointer flex items-center gap-3 group hover:scale-[1.02]"
            >
              <Mic className="w-5 h-5 text-white" />
              <span>Balkanska Voice & Dubbing Mreža</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("vault")}
              className="px-9 py-4.5 rounded-2xl bg-white hover:bg-stone-50 text-stone-900 font-extrabold text-base border-2 border-stone-300 hover:border-orange-500 shadow-md transition-all cursor-pointer flex items-center gap-3"
            >
              <Server className="w-5 h-5 text-orange-600" />
              <span>Klijentski Audio Vault (BiH / CRO / SRB)</span>
            </button>

            <button
              onClick={() => scrollTo("oprema")}
              className="px-7 py-4.5 rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 text-orange-950 font-bold text-base border border-orange-300 shadow-xs transition-all cursor-pointer flex items-center gap-2.5"
            >
              <Disc className="w-5 h-5 text-orange-600" />
              <span>10 Sintova & Hardver</span>
            </button>
          </div>
        </div>

        {/* 4 Wide Macro Photo Cards with Real Studio Images from /pokaz/ */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {/* Card 1: VU Metar & Analogni Šum */}
          <div
            onClick={() => scrollTo("oprema")}
            className="rounded-3xl bg-white border-2 border-stone-200/90 hover:border-amber-500 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[340px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/vibrant-audio-mixer-stockcake.jpg')`,
              }}
            />
            {/* Warm Amber/Gold Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-transparent" />

            <div className="relative z-10 p-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/40">
                Analogni VU & Balans
              </span>
            </div>

            <div className="relative z-10 p-6 pt-0 text-white">
              <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors mb-2">
                Toplina Prave Žice & Lampi
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
                Pravi headroom, analogni točkići i dinamika koja diše prirodno, bez digitalnog „rezanja”.
              </p>
            </div>
          </div>

          {/* Card 2: Lampaški Mikrofon & Kapsula */}
          <div
            onClick={() => scrollTo("balkan-network")}
            className="rounded-3xl bg-white border-2 border-stone-200/90 hover:border-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[340px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/studio-condenser-microphone-equipment-live-recording-close-up-pop-filter-anti-vibration-mount-color-lights-82782057.webp')`,
              }}
            />
            {/* Terracotta / Bronze Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-transparent" />

            <div className="relative z-10 p-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-300 bg-orange-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-500/40">
                Mikrofonska Kapsula
              </span>
            </div>

            <div className="relative z-10 p-6 pt-0 text-white">
              <h3 className="text-xl font-bold group-hover:text-orange-300 transition-colors mb-2">
                Kristalno Čist Vokal
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
                Vodeći spikeri Balkana snimljeni na zlatnoj membrani kroz besprijekoran lampaški pretpojačivač.
              </p>
            </div>
          </div>

          {/* Card 3: Mikseta, Faderi & Analogni Potenciometri */}
          <div
            onClick={() => scrollTo("studio-prostor")}
            className="rounded-3xl bg-white border-2 border-stone-200/90 hover:border-rose-500 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[340px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/music-studio-mixer-stockcake.jpg')`,
              }}
            />
            {/* Rose/Magenta Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-transparent" />

            <div className="relative z-10 p-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-300 bg-rose-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rose-500/40">
                Faderi & Režijski Pult
              </span>
            </div>

            <div className="relative z-10 p-6 pt-0 text-white">
              <h3 className="text-xl font-bold group-hover:text-rose-300 transition-colors mb-2">
                40 Godina Režije
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
                Iskustvo u miksu koje tačno zna kako da podvuče muziku da bi glas prodao proizvod.
              </p>
            </div>
          </div>

          {/* Card 4: Gitara, Drvo & Glava Instrumenta */}
          <div
            onClick={() => scrollTo("oprema")}
            className="rounded-3xl bg-white border-2 border-stone-200/90 hover:border-emerald-500 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[340px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/musician-s-dream-studio-stockcake.jpg')`,
              }}
            />
            {/* Emerald/Wood Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-transparent" />

            <div className="relative z-10 p-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/40">
                Živo Drvo & Autorski Rad
              </span>
            </div>

            <div className="relative z-10 p-6 pt-0 text-white">
              <h3 className="text-xl font-bold group-hover:text-emerald-300 transition-colors mb-2">
                Prava Muzika, Bez AI
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
                Pravi instrumenti, 10 sintisajzera i autorsko komponovanje za teatar, film i TV kampanje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
