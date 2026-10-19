"use client";

import React from "react";
import { History, Award, Disc, Volume2, Sparkles, Star } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  badge: string;
  desc: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "1982 – 1995",
    title: "Počeci, Trakaši & Kultni Sintisajzeri",
    badge: "Analogni Temelj",
    desc: "Prve autorske kompozicije, rad na magnetofonskim trakama, mastering na analognim stolovima i nabavka prvih legendarnih sintisajzera koji su i danas u studiju u savršenom stanju.",
  },
  {
    year: "1996 – 2005",
    title: "Teatar, Film & Radijski Procvat",
    badge: "Pozorište & Film",
    desc: "Muzika za Narodno i Dječije pozorište RS, filmski sound design, prepoznatljive sportske himne i produkcija preko 1.000 radijskih i televizijskih reklama.",
  },
  {
    year: "2006 – 2015",
    title: "Registracija TAF & Microsoft Cortana",
    badge: "Globalna Saradnja",
    desc: "Zvanična registracija brenda TAF (Turtle Audio Factory). Rad na regionalnim i internacionalnim projektima, uključujući snimanje i obradu baze za Microsoft Cortana bosanski jezički dataset.",
  },
  {
    year: "2016 – 2022",
    title: "Moj Radio & In-Store Infrastruktura",
    badge: "Lanci Marketa",
    desc: "Razvoj vlastitog sistema za Konzum, Merkator, Tropic i Moj Market. Konstrukcija zvučnih stubova, vanjskih horni i uvođenje centralnog Cloud upravljanja.",
  },
  {
    year: "2023 – 2026",
    title: "Autorski Albumi & Web Distributivni Hab",
    badge: "Puni Autorski Zvuk",
    desc: "Mjeseci posvećenog rada na kompletnim albumima (Boris Relja – Revelation), integracija sa SwissTiming borilištima (SOCCS) i prelazak na samostalni klijentski distributivni hab.",
  },
];

export default function HeritageTimeline() {
  return (
    <section id="tradicija" className="py-20 md:py-28 bg-[#0c101d] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <History className="w-3.5 h-3.5 text-purple-400" />
            <span>Kontinuitet od 1982. godine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Četiri decenije u kojima se <br className="hidden sm:inline" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-amber-400">
              živjelo za zvuk i inženjering.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Tehnologije su se mijenjale — sa traka na DAT kasete, sa analognog miksera u digitalni DAW, 
            sa ISDN linija na WebRTC. Ali precizno uho, studijska disciplina i ljubav prema čistom tonu ostali su nepromijenjeni.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-6 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-0.5 before:bg-slate-800 before:-translate-x-1/2">
          {MILESTONES.map((m, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center z-10 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>

              {/* Card Content */}
              <div className="ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl hover:border-amber-500/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-amber-400">{m.year}</span>
                  <span className="text-[10px] font-semibold text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-800/40">
                    {m.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Artist & Studio Heritage Wall */}
        <div className="mt-16 pt-12 border-t border-slate-800/80 max-w-4xl mx-auto text-center">
          <div className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-4">
            Saradnje, Autorski Radovi & Muzički Partneri
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "Sanja Čolić Zelić",
              "Boris Relja (Revelation)",
              "Narodno Pozorište RS",
              "Dječije Pozorište RS",
              "Massimo Savić",
              "Đavoli (Neno Belan)",
              "Dino Dvornik",
              "Denis & Denis",
              "Oliver Mandić",
              "Big Bang",
              "Radio Banja Luka",
              "Kovalsky Project",
              "BasDans",
              "Sportske Himne & Fanfare",
            ].map((name, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium hover:border-amber-500/40 hover:text-white transition-all shadow-xs"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
