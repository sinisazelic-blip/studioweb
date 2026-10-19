"use client";

import React from "react";
import { History, Award, Disc, Volume2, Sparkles, Star, Scissors } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  badge: string;
  desc: string;
  highlight?: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "1982 – 1995",
    title: "Traka, žilet i milisekund preciznosti (Jugoton era)",
    badge: "Analogni Majstorski Temelj",
    desc: "Autorske kompozicije, rad na 2-inčnim magnetofonskim trakama, Studer i Teac mašine. Vrijeme kada se master traka za Jugoton rezala žiletom i obilježavala olovkom da se skrati refren ili solo. Jedan pogrešan milisekund značio je propast mastera na kome se radilo godinu dana. Nabavka kultnih sintisajzera koji i danas savršeno sviraju u studiju.",
    highlight: "Sječenje master trake žiletom • Nema Ctrl+Z",
  },
  {
    year: "1996 – 2005",
    title: "Pozorište, Film & Radijski Procvat",
    badge: "Pozorišni & Filmski Sound Design",
    desc: "Autorska muzika za Narodno i Dječije pozorište RS, kreiranje zvučnih kulisa za filmske produkcije, legendarne sportske himne i audio produkcija za stotine radijskih stanica širom regiona.",
    highlight: "Preko 1.500 autorskih džinglova i muzičkih kulisa",
  },
  {
    year: "2006 – 2015",
    title: "Registracija TAF & Microsoft Cortana Projekat",
    badge: "Globalni Standardi",
    desc: "Zvanična registracija brenda TAF (Turtle Audio Factory). Rad na velikim regionalnim i međunarodnim projektima, uključujući višemjesečno snimanje i matematički preciznu audio obradu fonetske baze za Microsoft Cortana bosanski jezički dataset.",
    highlight: "Microsoft Cortana Acoustic Dataset",
  },
  {
    year: "2016 – 2022",
    title: "Moj Radio — In-Store Zvučna Infrastruktura",
    badge: "Lanci Tržnih Centara",
    desc: "Idejni tvorci i inženjeri koncepta 'Moj Radio'. Izrada centralnog zvučnog sistema za Konzum, Merkator, Tropic i Moj Market. Konstrukcija samostalnih zvučnih stubova, vanjskih horni sa WiFi/IP upravljanjem i neprekidnim radom 365 dana u godini.",
    highlight: "Ključ u ruke za stotine supermarketa",
  },
  {
    year: "2023 – 2026",
    title: "Autorski Albumi & Web Klijentski Hab",
    badge: "Puni Autorski Zvuk",
    desc: "Višemjesečni projekti u kojima se živjelo u studiju po 16 sati dnevno (Boris Relja – Revelation), integracija sa Swiss Timing borilištima (SOCCS) i lansiranje samostalne Studio TAF web platforme sa klijentskim vaultom i P2P daljinskom režijom.",
    highlight: "Boris Relja (Revelation) • P2P WebRTC režija",
  },
];

export default function HeritageTimeline() {
  return (
    <section id="tradicija" className="py-20 md:py-28 bg-[#1a130e] border-t border-amber-950/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-studio-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-500/15 border border-studio-500/30 text-studio-400 text-xs font-semibold mb-4">
            <History className="w-3.5 h-3.5 text-studio-500" />
            <span>Kontinuitet od 1982. godine • 40+ Godina Iskustva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Četiri decenije u kojima se <br className="hidden sm:inline" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-studio-400 to-amber-500">
              istinski živjelo za zvuk, muziku i inženjering.
            </span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Tehnologije su se mijenjale — sa analognih traka na DAT kasete, sa analognih stolova u DAW, 
            sa ISDN linija na WebRTC. Ali uho, zanatska disciplina, radna etika i ljubav prema čistom tonu ostali su nepromijenjeni.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-studio-500 before:via-amber-700 before:to-stone-800 before:-translate-x-1/2">
          {MILESTONES.map((m, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#20150e] border-2 border-studio-500 flex items-center justify-center z-10 shadow-lg shadow-studio-600/30">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              </div>

              {/* Card Content */}
              <div className="ml-12 sm:ml-0 w-full sm:w-[calc(50%-2.2rem)] p-6 sm:p-7 rounded-2xl bg-[#221711] border border-amber-900/40 shadow-xl hover:border-studio-500/60 transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-studio-400 bg-studio-500/10 px-2.5 py-0.5 rounded-lg border border-studio-500/25">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/40">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {m.title}
                </h3>
                
                <p className="text-xs text-stone-300 leading-relaxed mb-3">
                  {m.desc}
                </p>

                {m.highlight && (
                  <div className="pt-2.5 border-t border-amber-950/60 flex items-center gap-1.5 text-[11px] font-mono text-amber-400">
                    <Sparkles className="w-3 h-3 text-studio-400 shrink-0" />
                    <span>{m.highlight}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Artist & Studio Heritage Wall */}
        <div className="mt-16 pt-12 border-t border-amber-950/60 max-w-4xl mx-auto text-center">
          <div className="text-xs font-bold font-mono text-amber-400 uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
            <Disc className="w-3.5 h-3.5 text-studio-500 animate-spin" style={{ animationDuration: "8s" }} />
            <span>Muzički Partneri, Saradnje & Autorski Projekti</span>
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
              "Kort Marketi",
              "Sportske Himne & Fanfare",
              "Jugoton Arhiva",
            ].map((name, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-xl bg-[#221711] border border-amber-900/40 text-stone-200 text-xs font-medium hover:border-studio-500/60 hover:text-white hover:bg-studio-500/10 transition-all shadow-sm"
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
