"use client";

import React from "react";
import { Radio, Wifi, Zap, Volume2, ShieldCheck, Layers, Sliders, Sparkles } from "lucide-react";

export default function InStoreRadio() {
  return (
    <section
      id="moj-radio"
      className="relative py-24 sm:py-32 bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/equipment/horn-acoustic.jpg')",
      }}
    >
      {/* Dark Translucent Tinted Glass Overlay */}
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-[2px] pointer-events-none" />

      {/* Subtle ambient cyan glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block mb-3">
            Akustična Infrastruktura & Hardver
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-sans">
            B2B IN-STORE RADIO
          </h2>
          {/* Cyan glowing underline accent */}
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

          <p className="mt-6 text-stone-300 text-base sm:text-lg leading-relaxed font-light">
            Vlastiti brendirani radio program za svaki objekat, podržan autonomnim dvosistemskim audio stubovima 
            koji eliminišu kablovske trase i obezbjeđuju besprijekornu zvučnu sliku.
          </p>
        </div>

        {/* 3 Core Engineering Pillars (Grafičke Kockice) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-14">
          
          {/* Box 1: B2B Radio Platform */}
          <div className="rounded-2xl bg-[#0e141d]/85 hover:bg-[#131b26]/95 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md p-8 sm:p-10 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Radio className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400/90 font-bold block mb-2">
                01 • Biznis Model
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-300 transition-colors">
                Personalizovan B2B Radio
              </h3>

              <p className="text-stone-300 text-sm sm:text-[14.5px] leading-relaxed font-light">
                Svaki klijent dobija potpuno nezavisan audio kanal nazvan prema sopstvenom brendu. 
                Autorska muzika prilagođena ritmu kupaca, bez reklama konkurencije, sa tačno tempiranim 
                marketinškim i informativnim porukama kreiranim u našem studiju.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-stone-400">
              Audio brending na mjestu prodaje
            </div>
          </div>

          {/* Box 2: Autonomous Acoustic Columns & 2-Way Horns */}
          <div className="rounded-2xl bg-[#0e141d]/85 hover:bg-[#131b26]/95 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md p-8 sm:p-10 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400/90 font-bold block mb-2">
                02 • Hardversko Rješenje
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-orange-300 transition-colors">
                Autonomni Audio Stubovi
              </h3>

              <p className="text-stone-300 text-sm sm:text-[14.5px] leading-relaxed font-light">
                Inženjersko rješenje koje ne zahtijeva ukopavanje niti stotine metara audio kablova. 
                Stubovi trebaju isključivo dovod napajanja (220V) i stabilnu WiFi mrežu. 
                Dvosistemske muzičke horne garantuju bogat frekventni odziv i visoku razumljivost govora.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-stone-400">
              Samo napajanje + WiFi • Bez kabliranja
            </div>
          </div>

          {/* Box 3: Centralized Distribution & Multi-source */}
          <div className="rounded-2xl bg-[#0e141d]/85 hover:bg-[#131b26]/95 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md p-8 sm:p-10 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <Sliders className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/90 font-bold block mb-2">
                03 • Distribucija & Kontrola
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-emerald-300 transition-colors">
                Centralno Upravljanje
              </h3>

              <p className="text-stone-300 text-sm sm:text-[14.5px] leading-relaxed font-light">
                Iako je svaki stub fizički autonoman, čitav sistemom se upravlja sa jedne centralne tačke. 
                Podrška za višezonsko rutiranje, prijem jednog ili više paralelnih izvora zvuka, 
                te daljinska dijagnostika i nadzor rada svake pojedinačne jedinice u realnom vremenu.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-stone-400">
              Zonsko rutiranje • Daljinski monitoring
            </div>
          </div>

        </div>

        {/* Technical Specification Summary Bar */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Dvosistemski akustički dizajn (Duboki bas + Čist vokal)</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>220V Priključak</span>
            <span>•</span>
            <span>WiFi / LAN Povezivost</span>
            <span>•</span>
            <span>24/7 Autonomni Rad</span>
          </div>
        </div>

      </div>
    </section>
  );
}
