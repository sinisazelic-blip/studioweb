"use client";

import React from "react";
import { Disc, Sliders, Cpu, Activity, Sparkles, CheckCircle2, Zap, Flame, Radio } from "lucide-react";

interface StudioPillar {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  desc: string;
  macroPhoto: string;
  highlights: string[];
}

const STUDIO_PILLARS: StudioPillar[] = [
  {
    id: "synths",
    name: "10 Hardverskih Sintisajzera & Sempleri",
    badge: "Pravo Komponovanje",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    desc: "Zvuk koji ne dolazi iz softverskih biblioteka. Autentični analogni oscilatori, legendarni klavijaturni sempleri i moduli sa pravom harmonijskom težinom koji daju prepoznatljiv identitet svakoj temi.",
    macroPhoto: "/pokaz/musician-s-dream-studio-stockcake.jpg",
    highlights: ["Analogni filtri & oscilatori", "Originalne PCM banke", "Pravi dinamički odziv", "Muzika sa potpisom"],
  },
  {
    id: "tubes",
    name: "Lampaška Predpojačala & Mikrofonski Lanac",
    badge: "Vakuum & Toplina",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    desc: "Vrhunski mikrofoni spojeni na prave vakuumske lampe. Glas koji prirodno sjeda u miks sa mekim analognim saturacijama i prisustvom koje u prvoj sekundi privlači pažnju kupca na radiju ili TV-u.",
    macroPhoto: "/pokaz/20210501_Studio_Microphone_buying_guide_1600x838_01.webp",
    highlights: ["Lampaška harmonijska toplina", "Linearna faza", "Broadcast standard", "Prirodan headroom"],
  },
  {
    id: "meters",
    name: "VU Dinamika & Analogni Mastering",
    badge: "EBU R128 Standard",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-200",
    desc: "Bez 'brickwall' uništene dinamike. Nivelacija i mastering po strogim međunarodnim radio i TV standardima. Vaša reklama zvuči glasno, moćno i kristalno čisto na svakom uređaju.",
    macroPhoto: "/pokaz/vibrant-audio-mixer-stockcake.jpg",
    highlights: ["Pravi analogni VU odziv", "Opto & VCA dinamika", "Tačna radio glasnoća", "Nema digitalnog klipinga"],
  },
  {
    id: "instruments",
    name: "Akustika, Žica & Autorski Rad",
    badge: "Organski Zvuk",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    desc: "Pravi instrumenti, gitare, perkusije i teatar. Muzika koja se stvara sa namjerom i dramaturškim osjećajem — od dječijih pozorišnih predstava do himni velikih sportskih događaja.",
    macroPhoto: "/pokaz/music-studio-mixer-stockcake.jpg",
    highlights: ["Autorska pozorišna muzika", "Živi instrumenti", "Filmski sound design", "Bez generičkih šablona"],
  },
];

export default function HardwareVault() {
  return (
    <section id="oprema" className="py-24 md:py-36 border-t border-stone-200 relative overflow-hidden bg-[#faf7f2]">
      {/* Full Photographic Section Background from /pokaz/ */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-110 saturate-125"
        style={{
          backgroundImage: `url('/pokaz/musician-s-dream-studio-stockcake.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/92 via-[#faf7f2]/84 to-[#faf7f2]/94 pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-orange-300 text-orange-950 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <Sliders className="w-4 h-4 text-orange-600" />
            <span>Kreativni Groove & Analogni Karakter</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-stone-950 tracking-tight mb-6 font-display uppercase">
            Zvuk koji se pravi rukama, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
              a ne kliktanjem na prompt.
            </span>
          </h2>
          <p className="text-stone-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
            Danas svako sa kućnim računarom može generisati jeftini sintetički džingl. 
            Ali kada vam treba muzika koja nosi 40 godina pozorišnog napona, filmski naboj, 
            ili radijski vokal koji u sekundi privlači kupca — tu presuđuju pravi analogni instrumenti, uho i zanat.
          </p>
        </div>

        {/* 4 Grand Photographic Groove Cards - Wide Spacious 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {STUDIO_PILLARS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border-2 border-stone-200/90 hover:border-orange-500 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Macro Photo Header with Rich Color */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-900">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  style={{ backgroundImage: `url('${item.macroPhoto}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-mono font-bold px-3.5 py-1.5 rounded-full border shadow-sm backdrop-blur-md ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase group-hover:text-orange-400 transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Card Body with Breathing Room */}
              <div className="p-8 sm:p-10">
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium mb-6">
                  {item.desc}
                </p>

                {/* Specs Chips with Colors */}
                <div className="pt-6 border-t border-stone-100 grid grid-cols-2 gap-3">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: Real Composition & Boris Relja "Revelation" Example */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-orange-100/90 via-amber-100/80 to-rose-100/70 border-2 border-orange-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-800 uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Autorska Proizvodnja Muzike vs. Brzi Džinglovi</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-stone-950 font-display uppercase">
              6+ Mjeseci, 16 Sati Dnevno — Albumi poput „Revelation” (Boris Relja)
            </h4>
            <p className="text-sm sm:text-base text-stone-800 max-w-3xl leading-relaxed font-medium">
              Kada se radi brzi akcijski spot za trgovački lanac, to je 2 sata čistog inženjerskog zanata. 
              Ali kada radimo autorski album ili muziku za pozorišnu predstavu, u tome se živi. 
              To je razlika između konfekcije i pravog umjetničkog autoriteta Studija TAF.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-right bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
            <div className="text-5xl font-black text-orange-600 font-mono">10.000+</div>
            <div className="text-sm text-stone-700 font-bold mt-1">autorskih radova kroz 4 decenije</div>
          </div>
        </div>
      </div>
    </section>
  );
}
