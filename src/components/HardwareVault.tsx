"use client";

import React, { useState } from "react";
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
    macroPhoto: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Analogni filtri & oscilatori", "Originalne PCM banke", "Pravi dinamički odziv", "Muzika sa potpisom"],
  },
  {
    id: "tubes",
    name: "Lampaška Predpojačala & Mikrofonski Lanac",
    badge: "Vakuum & Toplina",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    desc: "Vrhunski mikrofoni spojeni na prave vakuumske lampe. Glas koji prirodno sjeda u miks sa mekim analognim saturacijama i prisustvom koje u prvoj sekundi privlači pažnju kupca na radiju ili TV-u.",
    macroPhoto: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Lampaška harmonijska toplina", "Linearna faza", "Broadcast standard", "Prirodan headroom"],
  },
  {
    id: "meters",
    name: "VU Dinamika & Analogni Mastering",
    badge: "EBU R128 Standard",
    badgeColor: "bg-rose-100 text-rose-900 border-rose-200",
    desc: "Bez 'brickwall' uništene dinamike. Nivelacija i mastering po strogim međunarodnim radio i TV standardima. Vaša reklama zvuči glasno, moćno i kristalno čisto na svakom uređaju.",
    macroPhoto: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Pravi analogni VU odziv", "Opto & VCA dinamika", "Tačna radio glasnoća", "Nema digitalnog klipinga"],
  },
  {
    id: "instruments",
    name: "Akustika, Žica & Autorski Rad",
    badge: "Organski Zvuk",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    desc: "Pravi instrumenti, gitare, perkusije i teatar. Muzika koja se stvara sa namjerom i dramaturškim osjećajem — od dječijih pozorišnih predstava do himni velikih sportskih događaja.",
    macroPhoto: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85",
    highlights: ["Autorska pozorišna muzika", "Živi instrumenti", "Filmski sound design", "Bez generičkih šablona"],
  },
];

export default function HardwareVault() {
  return (
    <section id="oprema" className="py-20 md:py-28 bg-[#fdfbf7] border-t border-stone-200 relative overflow-hidden">
      {/* Background Creative Color Blurs */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[350px] bg-amber-200/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[300px] bg-orange-200/35 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 text-orange-950 text-xs font-bold mb-4 shadow-xs">
            <Sliders className="w-3.5 h-3.5 text-orange-600" />
            <span>Kreativni Groove & Analogni Karakter</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-stone-950 tracking-tight mb-4 font-display uppercase">
            Zvuk koji se pravi rukama, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
              a ne kliktanjem na prompt.
            </span>
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-medium">
            Danas svako sa kućnim računarom može generisati jeftini sintetički džingl. 
            Ali kada vam treba muzika koja nosi 40 godina pozorišnog napona, filmski naboj, 
            ili radijski vokal koji u sekundi privlači kupca — tu presuđuju pravi analogni instrumenti, uho i zanat.
          </p>
        </div>

        {/* 4 Grand Photographic Groove Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {STUDIO_PILLARS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border-2 border-stone-200/90 hover:border-orange-500 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Macro Photo Header with Rich Color */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-900">
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

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase group-hover:text-orange-400 transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal mb-5">
                  {item.desc}
                </p>

                {/* Specs Chips with Colors */}
                <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-2.5">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-800 font-semibold">
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
        <div className="mt-14 p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-orange-100/80 via-amber-100/70 to-rose-100/60 border-2 border-orange-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-800 uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Autorska Proizvodnja Muzike vs. Brzi Džinglovi</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-stone-950 font-display uppercase">
              6+ Mjeseci, 16 Sati Dnevno — Albumi poput „Revelation” (Boris Relja)
            </h4>
            <p className="text-xs sm:text-sm text-stone-800 max-w-2xl leading-relaxed font-medium">
              Kada se radi brzi akcijski spot za trgovački lanac, to je 2 sata čistog inženjerskog zanata. 
              Ali kada radimo autorski album ili muziku za pozorišnu predstavu, u tome se živi. 
              To je razlika između konfekcije i pravog umjetničkog autoriteta Studija TAF.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-right bg-white p-6 rounded-2xl border-2 border-orange-200 shadow-lg">
            <div className="text-4xl font-black text-orange-600 font-mono">10.000+</div>
            <div className="text-xs text-stone-700 font-bold mt-1">autorskih radova kroz 4 decenije</div>
          </div>
        </div>
      </div>
    </section>
  );
}
