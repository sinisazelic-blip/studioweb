"use client";

import React, { useState } from "react";
import { Disc, Mic, Radio, Server, Sparkles, ArrowRight, ShieldCheck, Play, Pause, Award, Volume2, Sliders, Music, Zap, CheckCircle2 } from "lucide-react";

export default function HeroStudio() {
  const [isPlayingReel, setIsPlayingReel] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden bg-[#08090d]">
      {/* 1. Cinematic Background: High-Res Real Studio Console with Dark Acoustic Vignette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 filter contrast-125 brightness-90 scale-105"
          style={{
            backgroundImage: `url('/pokaz/vibrant-audio-mixer-stockcake.jpg')`,
          }}
        />
        {/* Deep Acoustic Vignettes: Preserves focus and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d] via-[#08090d]/80 to-[#08090d]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#08090d]/60 to-[#08090d]" />

        {/* Studio Warm Ambient Glows (Analog Tube & Amber VU lights) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-orange-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-amber-600/10 rounded-full blur-[150px]" />
      </div>

      {/* 2. Center Animated Turtle Logo: Centered, Tasteful & Illuminated */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[420px] max-w-[80vw] aspect-video relative opacity-25 filter contrast-125 brightness-110">
          <video
            src="/TAFlogoMOVE.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Content Container - 1800px expansive studio layout */}
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Top Studio Indicator Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8 justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#12151f]/90 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-wider shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-zinc-400">//</span>
            <span className="font-semibold text-zinc-200">MASTER AUDIO REŽIJA & AKUSTIKA</span>
            <span className="text-zinc-600">•</span>
            <span className="text-orange-400 font-bold">EST. 1982</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12151f]/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Banja Luka • Regionalni Audio Hub</span>
          </div>
        </div>

        {/* Main Authority Typography - Confident, Clean, Uncompromising */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-sans">
            Zvuk koji definiše autoritet. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Četiri decenije prave akustike,
            </span>{" "}
            analogne topline i studijskog miksa.
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Nismo spavaća soba sa pluginovima. Studio TAF je institucija sa 40 godina rezanja traka, 
            10 hardverskih analognih sintisajzera, originalnim lampaškim mikrofonskim lancem i centralni 
            distributivni hab za najveće radijske, televizijske i filmske kampanje na Balkanu.
          </p>

          {/* Action Console: High-end Studio CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button
              onClick={() => scrollTo("balkan-network")}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-orange-500/25 transition-all cursor-pointer flex items-center gap-3 group"
            >
              <Mic className="w-5 h-5 text-white" />
              <span>Balkanska Voice & Dubbing Mreža</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("vault")}
              className="px-7 py-4 rounded-2xl bg-[#12151f] hover:bg-[#181c28] text-zinc-100 font-bold text-sm sm:text-base border border-zinc-700 hover:border-orange-500 shadow-lg transition-all cursor-pointer flex items-center gap-3"
            >
              <Server className="w-5 h-5 text-orange-400" />
              <span>Klijentski Audio Vault (BiH / CRO / SRB)</span>
            </button>

            <button
              onClick={() => scrollTo("oprema")}
              className="px-6 py-4 rounded-2xl bg-[#0f1118] hover:bg-[#151822] text-zinc-300 hover:text-white font-semibold text-sm sm:text-base border border-zinc-800 transition-all cursor-pointer flex items-center gap-2.5"
            >
              <Disc className="w-5 h-5 text-orange-400" />
              <span>10 Sintova & Hardver</span>
            </button>
          </div>

          {/* Console Channel Readout Strip: Solid Authority Proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-zinc-800/80">
            <div className="p-4 rounded-2xl bg-[#11131c]/70 border border-zinc-800/60 text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">40+</div>
              <div className="text-xs text-orange-400 font-bold tracking-wider uppercase mt-1">Godina Tradicije</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Kontinuirano od 1982.</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#11131c]/70 border border-zinc-800/60 text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">6.000+</div>
              <div className="text-xs text-amber-400 font-bold tracking-wider uppercase mt-1">Završenih Projekata</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">TV, radio i filmski masteri</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#11131c]/70 border border-zinc-800/60 text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">10</div>
              <div className="text-xs text-orange-400 font-bold tracking-wider uppercase mt-1">Analognih Sintova</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Roland, Korg, Moog rek</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#11131c]/70 border border-zinc-800/60 text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">6 Tržišta</div>
              <div className="text-xs text-emerald-400 font-bold tracking-wider uppercase mt-1">Voice-Over Mreža</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">BiH, HR, SRB, MNE, MK, SLO</div>
            </div>
          </div>
        </div>

        {/* 4 Crisp Macro Studio Photography Cards - High-End Dark Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Card 1: VU Metar & Analogni Šum */}
          <div
            onClick={() => scrollTo("oprema")}
            className="rounded-3xl bg-[#11131c] border border-zinc-800 hover:border-amber-500 transition-all duration-300 shadow-xl hover:shadow-amber-500/10 overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[320px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/vibrant-audio-mixer-stockcake.jpg')`,
              }}
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-[#090b10]/60 to-transparent" />

            <div className="relative z-10 p-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/40">
                Analogni VU & Balans
              </span>
            </div>

            <div className="relative z-10 p-6 pt-0 text-white">
              <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors mb-2">
                Toplina Prave Žice & Lampi
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Pravi headroom, analogni točkići i dinamika koja diše prirodno, bez digitalnog „rezanja”.
              </p>
            </div>
          </div>

          {/* Card 2: Lampaški Mikrofon & Kapsula */}
          <div
            onClick={() => scrollTo("balkan-network")}
            className="rounded-3xl bg-[#11131c] border border-zinc-800 hover:border-orange-500 transition-all duration-300 shadow-xl hover:shadow-orange-500/10 overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[320px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/studio-condenser-microphone-equipment-live-recording-close-up-pop-filter-anti-vibration-mount-color-lights-82782057.webp')`,
              }}
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-[#090b10]/60 to-transparent" />

            <div className="relative z-10 p-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-300 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-500/40">
                Mikrofonska Kapsula
              </span>
            </div>

            <div className="relative z-10 p-6 pt-0 text-white">
              <h3 className="text-xl font-bold group-hover:text-orange-300 transition-colors mb-2">
                Kristalno Čist Vokal
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Vodeći spikeri Balkana snimljeni na zlatnoj membrani kroz besprijekoran lampaški pretpojačivač.
              </p>
            </div>
          </div>

          {/* Card 3: Mikseta, Faderi & Analogni Potenciometri */}
          <div
            onClick={() => scrollTo("studio-prostor")}
            className="rounded-3xl bg-[#11131c] border border-zinc-800 hover:border-rose-500 transition-all duration-300 shadow-xl hover:shadow-rose-500/10 overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[320px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/music-studio-mixer-stockcake.jpg')`,
              }}
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-[#090b10]/60 to-transparent" />

            <div className="relative z-10 p-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-300 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rose-500/40">
                Faderi & Režijski Pult
              </span>
            </div>

            <div className="relative z-10 p-6 pt-0 text-white">
              <h3 className="text-xl font-bold group-hover:text-rose-300 transition-colors mb-2">
                40 Godina Režije
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Iskustvo u miksu koje tačno zna kako da podvuče muziku da bi glas prodao proizvod.
              </p>
            </div>
          </div>

          {/* Card 4: Gitara, Drvo & Glava Instrumenta */}
          <div
            onClick={() => scrollTo("oprema")}
            className="rounded-3xl bg-[#11131c] border border-zinc-800 hover:border-emerald-500 transition-all duration-300 shadow-xl hover:shadow-emerald-500/10 overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[320px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('/pokaz/musician-s-dream-studio-stockcake.jpg')`,
              }}
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-[#090b10]/60 to-transparent" />

            <div className="relative z-10 p-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/40">
                Živo Drvo & Autorski Rad
              </span>
            </div>

            <div className="relative z-10 p-6 pt-0 text-white">
              <h3 className="text-xl font-bold group-hover:text-emerald-300 transition-colors mb-2">
                Prava Muzika, Bez AI
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Pravi instrumenti, 10 sintisajzera i autorsko komponovanje za teatar, film i TV kampanje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
