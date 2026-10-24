"use client";

import React from "react";
import { Timer, Trophy, Radio, ShieldCheck, CheckCircle2, Award, Cpu } from "lucide-react";

export default function SwissTimingSection() {
  return (
    <section id="omega" className="py-24 sm:py-32 bg-[#0c1017] text-white border-b border-stone-800 relative overflow-hidden">
      {/* Subtle deep red ambient glow for Omega */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-red-950/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800/60 text-red-300 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <span className="text-[#C4001A] font-serif font-black text-sm">Ω</span>
            <span>15+ Godina Zvaničnog Partnerstva • Švicarska Preciznost</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight font-sans">
            Omega / Swiss Timing • <span className="font-semibold text-red-500">Sportska Borilišta</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-normal">
            Pored vrhunskog zvuka, Studio TAF više od 15 godina pruža specijalizovano vođenje međunarodnih plivačkih i sportskih takmičenja uz punu hardversku i softversku integraciju sa zvaničnim Swiss Timing Omega sistemima.
          </p>
        </div>

        {/* 3 Columns: Timekeeping Specs & Systems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-[1500px] mx-auto mb-16">
          {/* Card 1: Quantum Timer & Touchpads */}
          <div className="bg-[#12161f] border border-stone-800 rounded-3xl p-8 hover:border-red-900/60 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-950/50 border border-red-800/50 flex items-center justify-center text-red-400 mb-6 font-serif font-black text-xl">
                Ω
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Quantum Timer & Touchpads
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6">
                Elektronsko mjerenje stotinki i hiljaditinki sekunde preko kontaktnih dodirnih tabli (touchpads), startnih blokova sa detekcijom lažnog starta i video sudijske verifikacije.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-stone-300 pt-4 border-t border-stone-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Preciznost na nivou 1/10.000 sekunde</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Direktno očitavanje iz bazena i staza</span>
              </li>
            </ul>
          </div>

          {/* Card 2: SOCCS & SwimVoice */}
          <div className="bg-[#12161f] border border-stone-800 rounded-3xl p-8 hover:border-amber-900/60 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-950/50 border border-amber-800/50 flex items-center justify-center text-amber-400 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                SOCCS & SwimVoice Integracija
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6">
                Vlastiti inženjerski mostovi za automatizaciju obrade rezultata, Lenex import, sinhronizaciju sa Meet Manager serverima i automatsko generisanje startnih lista i zvučnih najava.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-stone-300 pt-4 border-t border-stone-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Automatski binarni protokol i live semafor</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Cloud backup i trenutni web pregled plasmana</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Međunarodna Borilišta */}
          <div className="bg-[#12161f] border border-stone-800 rounded-3xl p-8 hover:border-emerald-900/60 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/50 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-6">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Međunarodna Takmičenja
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6">
                Decenijsko iskustvo na prvenstvima i mitinzima sa stotinama plivača iz cijele Evrope. Profesionalna postavka borilišta pod strogim pravilima Svjetske organizacije vodenih sportova (World Aquatics).
              </p>
            </div>
            <ul className="space-y-2 text-xs text-stone-300 pt-4 border-t border-stone-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>100% nepogrešivost u verifikaciji rekorda</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Kompletna tehnička i sudačka logistika</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-stone-900 to-red-950/40 border border-red-900/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Potrebno vam je profesionalno mjerenje za takmičenje?</h4>
            <p className="text-xs text-stone-400 mt-0.5">Obezbjeđujemo kompletnu Swiss Timing opremu, sudijske table, semafore i licencirano vođenje.</p>
          </div>
          <a
            href="mailto:info@studiotaf.xyz"
            className="px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-600 text-white font-bold text-xs shadow-md transition-all shrink-0 cursor-pointer"
          >
            Kontaktirajte Nas za Borilišta
          </a>
        </div>

      </div>
    </section>
  );
}
