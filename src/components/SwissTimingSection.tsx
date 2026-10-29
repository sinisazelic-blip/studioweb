"use client";

import React from "react";
import { Timer, Trophy, Radio, ShieldCheck, CheckCircle2, Award, Cpu, Waves, Sparkles, ExternalLink } from "lucide-react";

export default function SwissTimingSection() {
  return (
    <section
      id="omega"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#001428] via-[#002240] to-[#001428] text-white overflow-hidden border-b border-sky-800"
    >
      {/* Real Olympic Swimming Pool Background Image from GOB Banja Luka */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/gob-bazen-bg.jpg"
          alt="Gradski Olimpijski Bazen Banja Luka"
          className="w-full h-full object-cover object-center opacity-45 scale-100 transition-opacity"
        />
        {/* Soft dark-blue vignette that keeps text readable while showing pool waters and lanes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001428]/85 via-[#001a35]/50 to-[#001428]/90" />
      </div>

      {/* Olympic Pool Water Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-sky-500/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-400/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/90 border border-red-400 text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-lg shadow-red-900/30">
            <span className="font-serif font-black text-sm">Ω</span>
            <span>Swiss Timing Omega • 15+ Godina Zvaničnog Partnerstva</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans drop-shadow-md">
            Elektronsko Mjerenje & <span className="text-cyan-300">Sportska Borilišta</span>
          </h2>
          <p className="text-sky-100 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-normal drop-shadow-sm">
            Vodeća regionalna podrška i vođenje međunarodnih plivačkih i sportskih takmičenja uz punu hardversku i softversku integraciju sa zvaničnim Swiss Timing Omega sistemima.
          </p>
        </div>

        {/* OFFICIAL FEDERATION & TIMING SYSTEMS BADGES ROW */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="text-center text-xs font-mono font-bold uppercase tracking-[0.2em] text-cyan-200 mb-6">
              Zvanični Mjerni Sistemi i Međunarodne Krovne Federacije
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center justify-center">
              {/* Badge 1: SWISS TIMING (2-row stacked logo) */}
              <div className="flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/95 border border-white/20 h-20 sm:h-24 shadow-sm hover:scale-105 transition-transform">
                <img
                  src="/SwimLogos/Swiss Timing logo.png"
                  alt="Swiss Timing"
                  className="max-h-14 sm:max-h-16 max-w-[150px] w-auto h-auto object-contain"
                />
              </div>

              {/* Badge 2: OMEGA */}
              <div className="flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/95 border border-white/20 h-20 sm:h-24 shadow-sm hover:scale-105 transition-transform">
                <img
                  src="/SwimLogos/Omega.webp"
                  alt="Omega Timing"
                  className="max-h-14 sm:max-h-16 max-w-[140px] w-auto h-auto object-contain"
                />
              </div>

              {/* Badge 3: WORLD AQUATICS */}
              <div className="flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/95 border border-white/20 h-20 sm:h-24 shadow-sm hover:scale-105 transition-transform">
                <img
                  src="/SwimLogos/world-aquatics-logo.png"
                  alt="World Aquatics"
                  className="max-h-14 sm:max-h-16 max-w-[150px] w-auto h-auto object-contain"
                />
              </div>

              {/* Badge 4: EUROPEAN AQUATICS (LEN) */}
              <div className="flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/95 border border-white/20 h-20 sm:h-24 shadow-sm hover:scale-105 transition-transform">
                <img
                  src="/SwimLogos/Logo-Len.svg.webp"
                  alt="European Aquatics LEN"
                  className="max-h-14 sm:max-h-16 max-w-[150px] w-auto h-auto object-contain"
                />
              </div>

              {/* Badge 5: EX-FINA HERITAGE */}
              <div className="flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/95 border border-white/20 h-20 sm:h-24 shadow-sm hover:scale-105 transition-transform">
                <img
                  src="/SwimLogos/Old-FINA-Logo-380x480.jpg"
                  alt="FINA Heritage"
                  className="max-h-14 sm:max-h-16 max-w-[130px] w-auto h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Columns: Timekeeping Specs & Systems in Glass Cards over Olympic Blue Water */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-[1500px] mx-auto mb-16">
          {/* Card 1: Quantum & Ares Timing */}
          <div className="bg-[#002244]/85 border border-cyan-400/30 rounded-3xl p-8 hover:border-red-500/80 transition-all flex flex-col justify-between shadow-2xl backdrop-blur-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E30613] text-white flex items-center justify-center mb-6 font-serif font-black text-2xl shadow-lg shadow-red-900/40">
                Ω
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Quantum & Ares Mjerni Sistemi
              </h3>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mb-6 font-normal">
                Swiss Timing Quantum Aquatics (EU) i Omega Ares (USA) elektronsko mjerenje stotinki i hiljaditinki sekunde preko kontaktnih dodirnih tabli (touchpads), startnih blokova sa detekcijom lažnog starta i video sudijske verifikacije.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-sky-100 pt-4 border-t border-cyan-500/20">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Preciznost na nivou 1/10.000 sekunde</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Direktno očitavanje iz bazena i svih 8/10 staza</span>
              </li>
            </ul>
          </div>

          {/* Card 2: SOCCS & SwimVoice */}
          <div className="bg-[#002244]/85 border border-cyan-400/30 rounded-3xl p-8 hover:border-amber-400/80 transition-all flex flex-col justify-between shadow-2xl backdrop-blur-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center mb-6 shadow-lg shadow-amber-900/40">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                SOCCS & SwimVoice Integracija
              </h3>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mb-6 font-normal">
                Vlastiti inženjerski mostovi za automatizaciju obrade rezultata, Lenex import, sinhronizaciju sa Meet Manager serverima i automatsko generisanje startnih lista i zvučnih najava.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-sky-100 pt-4 border-t border-cyan-500/20">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Automatski binarni protokol i live semafor</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Cloud backup i trenutni web pregled plasmana</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Međunarodna Borilišta */}
          <div className="bg-[#002244]/85 border border-cyan-400/30 rounded-3xl p-8 hover:border-cyan-300 transition-all flex flex-col justify-between shadow-2xl backdrop-blur-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-slate-950 flex items-center justify-center mb-6 shadow-lg shadow-cyan-900/40">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Međunarodna Takmičenja
              </h3>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mb-6 font-normal">
                Decenijsko iskustvo na prvenstvima i mitinzima sa stotinama plivača iz cijele Evrope. Profesionalna postavka borilišta pod strogim pravilima Svjetske organizacije vodenih sportova (World Aquatics).
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-sky-100 pt-4 border-t border-cyan-500/20">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>100% nepogrešivost u verifikaciji rekorda</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Kompletna tehnička i sudačka logistika</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
