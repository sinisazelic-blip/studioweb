"use client";

import React from "react";
import { Disc, Mic, Radio, Server, Sparkles, ArrowRight, ShieldCheck, Play } from "lucide-react";

export default function HeroStudio() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#0f172a] to-[#0b0f19]">
      {/* Background Studio Photography with Warm Copper/Amber Glow */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-25 filter saturate-[1.2] contrast-[1.1]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2400&q=90')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/80 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Heritage Badge */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Četiri decenije zvuka & inženjeringa • 1982 – {new Date().getFullYear()}</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300 text-xs font-mono">
            <span>Banja Luka</span>
            <span className="text-amber-500">•</span>
            <span>Preko 6.000 završenih projekata</span>
          </div>
        </div>

        {/* Main Title & Manifesto */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.15] mb-6">
            Pravi analogni zvuk, <br className="hidden sm:inline" />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              autorska kompozicija
            </span>{" "}
            i studijska disciplina.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Nismo samo računar i mikrofon. Studio TAF baštini kolekciju od 10 hardverskih sintisajzera,
            autentične semplere i 40 godina kompozitorskog zanata — bez AI prečica. Od velikih pozorišnih i
            filmskih partitura, do autonomne <strong className="text-amber-300 font-semibold">Moj Radio</strong> infrastrukture i
            regionalnog distributivnog haba za vodeće agencije.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollTo("vault")}
              className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <Server className="w-4 h-4 text-slate-950" />
              <span>Klijentski Distributivni Vault</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("moj-radio")}
              className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
              <span>Moj Radio (In-Store Sistemi)</span>
            </button>

            <button
              onClick={() => scrollTo("live-session")}
              className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <Mic className="w-4 h-4 text-rose-400" />
              <span>Remote Režija Uživo</span>
            </button>
          </div>
        </div>

        {/* 4 Pillars of Studio TAF Hardware & Operations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Tile 1: 10 Synth Hardware Rack */}
          <div
            onClick={() => scrollTo("oprema")}
            className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-amber-500/40 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
              <Disc className="w-5 h-5" />
            </div>
            <div className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider mb-1">
              Hardverski Studio
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
              10 Sintisajzera & Sempleri
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Autentični analogni i digitalni tonovi od 80-tih do danas. Prava muzička produkcija umjesto generičkog AI zvuka.
            </p>
          </div>

          {/* Tile 2: Moj Radio Hardware & Streaming */}
          <div
            onClick={() => scrollTo("moj-radio")}
            className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-emerald-500/40 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
              <Radio className="w-5 h-5" />
            </div>
            <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1">
              In-Store Infrastruktura
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
              Moj Radio & Zvučni Stubovi
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Vlastiti zvučni stubovi sa hornama, unutrašnjim zvučnicima i WiFi/IP pojačalima za markete i tržne centre.
            </p>
          </div>

          {/* Tile 3: Client Vault & Multi-Market Share */}
          <div
            onClick={() => scrollTo("vault")}
            className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-sky-500/40 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
              <Server className="w-5 h-5" />
            </div>
            <div className="text-[11px] font-mono text-sky-400 font-bold uppercase tracking-wider mb-1">
              Distribucija Bez Gubitaka
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
              Client Vault (BiH / CRO / SRB)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Web preslušavanje bez trošenja gigabajta. Ciljani share linkovi za lokalne radio stanice i partnerske studije.
            </p>
          </div>

          {/* Tile 4: Studio TAF Live Session */}
          <div
            onClick={() => scrollTo("live-session")}
            className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-rose-500/40 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
              <Mic className="w-5 h-5" />
            </div>
            <div className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider mb-1">
              WebRTC Opus 48kHz
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-rose-300 transition-colors">
              Remote Režija Uživo
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direktno povezivanje klijenta u browser bez Zoom kompresije i bez skupih SessionLink/Source-Connect licenci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
