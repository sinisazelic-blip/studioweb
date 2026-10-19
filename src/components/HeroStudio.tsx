"use client";

import React from "react";
import { Disc, Mic, Radio, Server, Sparkles, ArrowRight, ShieldCheck, Play, Award, Volume2, Sliders, Music, Zap } from "lucide-react";

export default function HeroStudio() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#faf7f2]">
      {/* 1. Full Background Video: TAFlogoMOVE.mp4 as subtle animated background with gentle blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          src="/TAFlogoMOVE.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-[3px] scale-105"
        />
        {/* Warm, Colorful Creative Gradients Overlay for legibility & groove */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/95 via-[#f8f4ec]/85 to-[#faf7f2]" />
        <div className="absolute top-10 left-10 w-[500px] h-[350px] bg-orange-400/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-amber-400/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-rose-400/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Badges Row: Colorful Creative Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/20 border border-orange-300 text-orange-900 text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Četiri decenije tradicije • 1982 – {new Date().getFullYear()}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-300 text-emerald-950 text-xs font-mono shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold">Banja Luka • Regionalni Audio Hub</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 text-xs font-mono font-bold shadow-xs">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>6.000+ Realizovanih Audio Projekata</span>
          </div>
        </div>

        {/* Cinematic Headline & Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-stone-950 leading-[1.1] mb-6 font-display uppercase">
            Zvuk koji se pamti. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
              Prava akustika, analogni autoritet
            </span>{" "}
            i studijska disciplina.
          </h1>

          <p className="text-stone-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-10">
            Nismo spavaća soba sa laptopom. Studio TAF je institucija sa 40 godina rezanja traka, 
            snimanja i autorske produkcije — 10 hardverskih sintisajzera, autentični lampaši, 
            vrhunski regionalni glasovi i klijentski distributivni hab za najveće balkanske kampanje.
          </p>

          {/* Action Buttons with Rich Warm Gradients */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollTo("balkan-network")}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm tracking-wide shadow-xl shadow-orange-500/30 transition-all cursor-pointer flex items-center gap-2.5 group hover:scale-[1.02]"
            >
              <Mic className="w-4 h-4 text-white" />
              <span>Balkanska Voice & Dubbing Mreža</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("vault")}
              className="px-8 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-900 font-extrabold text-sm border-2 border-stone-200 hover:border-orange-400 shadow-md transition-all cursor-pointer flex items-center gap-2.5"
            >
              <Server className="w-4 h-4 text-orange-600" />
              <span>Klijentski Audio Vault (BiH / CRO / SRB)</span>
            </button>

            <button
              onClick={() => scrollTo("oprema")}
              className="px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 text-orange-950 font-bold text-sm border border-orange-200 shadow-xs transition-all cursor-pointer flex items-center gap-2"
            >
              <Disc className="w-4 h-4 text-orange-600" />
              <span>10 Sintova & Hardver</span>
            </button>
          </div>
        </div>

        {/* 4 Macro Photo Cards with Creative Groove: VU Metar, Mikseta Faderi, Mikrofonska Kapsula, Gitara */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: VU Metar & Analogni Šum */}
          <div
            onClick={() => scrollTo("oprema")}
            className="rounded-3xl bg-white border-2 border-stone-200/80 hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[310px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            {/* Warm Amber/Gold Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40">
                Analogni VU & Balans
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-amber-300 transition-colors mb-1">
                Toplina Prave Žice & Lampi
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed font-medium">
                Pravi headroom, analogni točkići i dinamika koja diše prirodno, bez digitalnog „rezanja”.
              </p>
            </div>
          </div>

          {/* Card 2: Lampaški Mikrofon & Kapsula */}
          <div
            onClick={() => scrollTo("balkan-network")}
            className="rounded-3xl bg-white border-2 border-stone-200/80 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[310px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            {/* Terracotta / Bronze Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-300 bg-orange-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-orange-500/40">
                Mikrofonska Kapsula
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-orange-300 transition-colors mb-1">
                Kristalno Čist Vokal
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed font-medium">
                Vodeći spikeri Balkana snimljeni na zlatnoj membrani kroz besprijekoran lampaški pretpojačivač.
              </p>
            </div>
          </div>

          {/* Card 3: Mikseta, Faderi & Analogni Potenciometri */}
          <div
            onClick={() => scrollTo("studio-prostor")}
            className="rounded-3xl bg-white border-2 border-stone-200/80 hover:border-rose-500 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[310px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            {/* Rose/Magenta Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-300 bg-rose-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-rose-500/40">
                Faderi & Režijski Pult
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-rose-300 transition-colors mb-1">
                40 Godina Režije
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed font-medium">
                Iskustvo u miksu koje tačno zna kako da podvuče muziku da bi glas prodao proizvod.
              </p>
            </div>
          </div>

          {/* Card 4: Gitara, Drvo & Glava Instrumenta */}
          <div
            onClick={() => scrollTo("oprema")}
            className="rounded-3xl bg-white border-2 border-stone-200/80 hover:border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[310px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            {/* Emerald/Wood Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/40">
                Živo Drvo & Autorski Rad
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-emerald-300 transition-colors mb-1">
                Prava Muzika, Bez AI
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed font-medium">
                Pravi instrumenti, 10 sintisajzera i autorsko komponovanje za teatar, film i TV kampanje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
