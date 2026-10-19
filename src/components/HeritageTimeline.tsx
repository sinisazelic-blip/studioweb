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
    <section id="tradicija" className="py-24 md:py-36 bg-[#0a0c12] border-t border-zinc-800/80 relative overflow-hidden">
      {/* Full Photographic Section Background from /pokaz/ */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-125"
        style={{
          backgroundImage: `url('/pokaz/1000_F_458803876_18fyKX5qj5C4NlIF8yHQ36jTpXw6mdki.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c12] via-[#0a0c12]/90 to-[#0a0c12] pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151f] border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <History className="w-4 h-4 text-orange-500" />
            <span>Kontinuitet od 1982. godine • 40+ Godina Iskustva</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 font-display uppercase">
            Četiri decenije u kojima se <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              istinski živjelo za zvuk, muziku i inženjering.
            </span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-3xl mx-auto">
            Tehnologije su se mijenjale — sa analognih traka na DAT kasete, sa analognih stolova u DAW, 
            sa ISDN linija na WebRTC. Ali uho, zanatska disciplina, radna etika i ljubav prema čistom tonu ostali su nepromijenjeni.
          </p>
        </div>

        {/* Timeline Stack - Wide Layout */}
        <div className="max-w-5xl mx-auto space-y-10 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-amber-400 before:to-zinc-800 before:-translate-x-1/2">
          {MILESTONES.map((m, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start gap-8 ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0c12] border-2 border-orange-500 flex items-center justify-center z-10 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
              </div>

              {/* Card Content with Breathing Room */}
              <div className="ml-14 sm:ml-0 w-full sm:w-[calc(50%-2.8rem)] p-8 sm:p-10 rounded-3xl bg-[#11131c] border border-zinc-800 shadow-2xl hover:border-orange-500/50 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-orange-400 bg-orange-950/80 px-3.5 py-1 rounded-xl border border-orange-500/40">
                    {m.year}
                  </span>
                  <span className="text-xs font-semibold text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {m.title}
                </h3>
                
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-4">
                  {m.desc}
                </p>

                {m.highlight && (
                  <div className="pt-3.5 border-t border-zinc-800 flex items-center gap-2 text-xs sm:text-sm font-mono text-orange-400 font-semibold">
                    <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{m.highlight}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Artist & Studio Heritage Wall */}
        <div className="mt-20 pt-16 border-t border-zinc-800 max-w-5xl mx-auto text-center">
          <div className="text-sm font-bold font-mono text-zinc-400 uppercase tracking-wider mb-6 flex items-center justify-center gap-2.5">
            <Disc className="w-5 h-5 text-orange-500 animate-spin" style={{ animationDuration: "8s" }} />
            <span>Muzički Partneri, Saradnje & Autorski Projekti</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
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
                className="px-5 py-2.5 rounded-2xl bg-[#12151e] border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-orange-500 hover:text-white transition-all shadow-sm"
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
