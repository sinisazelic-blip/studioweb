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
    <section id="tradicija" className="py-20 md:py-28 bg-white border-t border-stone-200 relative overflow-hidden">
      {/* Light subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-100/50 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold mb-4">
            <History className="w-3.5 h-3.5 text-orange-600" />
            <span>Kontinuitet od 1982. godine • 40+ Godina Iskustva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight mb-4 font-display uppercase">
            Četiri decenije u kojima se <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              istinski živjelo za zvuk, muziku i inženjering.
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Tehnologije su se mijenjale — sa analognih traka na DAT kasete, sa analognih stolova u DAW, 
            sa ISDN linija na WebRTC. Ali uho, zanatska disciplina, radna etika i ljubav prema čistom tonu ostali su nepromijenjeni.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-amber-400 before:to-stone-300 before:-translate-x-1/2">
          {MILESTONES.map((m, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center z-10 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              </div>

              {/* Card Content */}
              <div className="ml-12 sm:ml-0 w-full sm:w-[calc(50%-2.2rem)] p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 shadow-md hover:shadow-xl hover:border-orange-500 transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-orange-700 bg-orange-100 px-2.5 py-0.5 rounded-lg border border-orange-200">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-semibold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {m.title}
                </h3>
                
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  {m.desc}
                </p>

                {m.highlight && (
                  <div className="pt-2.5 border-t border-stone-200 flex items-center gap-1.5 text-[11px] font-mono text-orange-700 font-medium">
                    <Sparkles className="w-3 h-3 text-orange-600 shrink-0" />
                    <span>{m.highlight}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Artist & Studio Heritage Wall */}
        <div className="mt-16 pt-12 border-t border-stone-200 max-w-4xl mx-auto text-center">
          <div className="text-xs font-bold font-mono text-stone-500 uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
            <Disc className="w-3.5 h-3.5 text-orange-600 animate-spin" style={{ animationDuration: "8s" }} />
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
                className="px-3.5 py-1.5 rounded-xl bg-white border border-stone-200 text-stone-800 text-xs font-medium hover:border-orange-500 hover:text-orange-600 transition-all shadow-xs"
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
