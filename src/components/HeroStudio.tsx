"use client";

import React from "react";
import { Disc, Mic, Radio, Server, Sparkles, ArrowRight, ShieldCheck, Play, Award, Volume2 } from "lucide-react";

export default function HeroStudio() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden bg-gradient-to-b from-[#140e0a] via-[#1c130d] to-[#140e0a]">
      {/* High-Resolution Real Studio Photography with Warm Copper & Amber Lighting */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-35 filter saturate-[1.3] contrast-[1.1]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2560&q=90')`,
        }}
      />
      {/* Warm Ambient Vignette and Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#140e0a] via-[#140e0a]/70 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-studio-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center gap-3 mb-6 justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-studio-500/20 border border-studio-500/40 text-studio-300 text-xs font-bold tracking-wide shadow-md">
            <Sparkles className="w-4 h-4 text-studio-400" />
            <span>Četiri decenije tradicije • 1982 – {new Date().getFullYear()}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#20150d]/90 border border-amber-900/50 text-amber-200 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Banja Luka • Regionalni Audio Hub</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#20150d]/90 border border-amber-900/50 text-amber-300 text-xs font-mono font-bold">
            <span>6.000+ Realizovanih Projekata</span>
          </div>
        </div>

        {/* Cinematic Headline & Statement */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 font-display uppercase">
            Zvuk koji se pamti. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-400 via-amber-300 to-amber-500">
              Prava akustika, analogni autoritet
            </span>{" "}
            i studijska disciplina.
          </h1>

          <p className="text-amber-100/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Nismo spavaća soba sa laptopom. Studio TAF je institucija sa 40 godina rezanja, 
            snimanja i produkcije — 10 hardverskih sintisajzera, autentični lampaši, 
            vrhunski regionalni glasovi i klijentski distributivni hab za najveće balkanske kampanje.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollTo("balkan-network")}
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-studio-500 to-amber-500 hover:from-studio-600 hover:to-amber-600 text-white font-extrabold text-sm tracking-wide shadow-2xl shadow-studio-500/30 transition-all cursor-pointer flex items-center gap-2.5 group"
            >
              <Mic className="w-4 h-4 text-white" />
              <span>Balkanska Voice & Dubbing Mreža</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("vault")}
              className="px-7 py-4 rounded-2xl bg-[#22160e]/95 hover:bg-[#2b1c12] text-amber-100 font-bold text-sm border border-amber-800/60 shadow-xl transition-all cursor-pointer flex items-center gap-2.5"
            >
              <Server className="w-4 h-4 text-studio-400" />
              <span>Klijentski Audio Vault (BiH / CRO / SRB)</span>
            </button>

            <button
              onClick={() => scrollTo("oprema")}
              className="px-6 py-4 rounded-2xl bg-[#1b120c]/80 hover:bg-[#22160e] text-amber-200/90 font-semibold text-sm border border-amber-950/80 shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <Disc className="w-4 h-4 text-amber-400" />
              <span>10 Sintova & Hardver</span>
            </button>
          </div>
        </div>

        {/* 4 Grand Visual Cards with Warm Studio Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Studio Prostor & Režija */}
          <div
            onClick={() => scrollTo("studio-prostor")}
            className="rounded-3xl bg-[#1f150e]/80 border border-amber-900/40 hover:border-studio-500/60 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.2] opacity-40"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140e0a] via-[#140e0a]/60 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-studio-400 bg-studio-500/20 px-2.5 py-1 rounded-full border border-studio-500/30">
                Acoustic Room
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0">
              <h3 className="text-lg font-bold text-white group-hover:text-studio-400 transition-colors mb-1">
                Akustika & Gluva Soba
              </h3>
              <p className="text-xs text-amber-100/70 leading-relaxed">
                Namjenski građena akustika, prirodno drvo i kontrolisana difuzija za besprijekoran vokal.
              </p>
            </div>
          </div>

          {/* Card 2: Voice & Dubbing Network (TikTak style) */}
          <div
            onClick={() => scrollTo("balkan-network")}
            className="rounded-3xl bg-[#1f150e]/80 border border-amber-900/40 hover:border-studio-500/60 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.2] opacity-40"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140e0a] via-[#140e0a]/60 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-1 rounded-full border border-amber-500/30">
                Balkan Network
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0">
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                Voiceover & Dubbing
              </h3>
              <p className="text-xs text-amber-100/70 leading-relaxed">
                Vodeći spikeri za 6 tržišta. Režija Siniše Zelića kojoj vjeruju najveće regionalne agencije.
              </p>
            </div>
          </div>

          {/* Card 3: 10 Synths & True Composition */}
          <div
            onClick={() => scrollTo("oprema")}
            className="rounded-3xl bg-[#1f150e]/80 border border-amber-900/40 hover:border-studio-500/60 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.2] opacity-40"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140e0a] via-[#140e0a]/60 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-studio-400 bg-studio-500/20 px-2.5 py-1 rounded-full border border-studio-500/30">
                10 Hardware Synths
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0">
              <h3 className="text-lg font-bold text-white group-hover:text-studio-400 transition-colors mb-1">
                Autorska Kompozicija
              </h3>
              <p className="text-xs text-amber-100/70 leading-relaxed">
                Pravi analogni sintisajzeri, sempleri i višemjesečni rad na albumima umjesto AI prečica.
              </p>
            </div>
          </div>

          {/* Card 4: Moj Radio In-Store */}
          <div
            onClick={() => scrollTo("moj-radio")}
            className="rounded-3xl bg-[#1f150e]/80 border border-amber-900/40 hover:border-studio-500/60 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.2] opacity-40"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140e0a] via-[#140e0a]/60 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                In-Store Audio
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0">
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
                Moj Radio & Stubovi
              </h3>
              <p className="text-xs text-amber-100/70 leading-relaxed">
                Vlastiti zvučni stubovi, vanjske horne i WiFi pojačala za markete: Konzum, Merkator, Tropic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
