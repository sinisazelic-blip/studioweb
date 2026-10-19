"use client";

import React, { useState } from "react";
import { Disc, Sliders, Cpu, Activity, Sparkles, CheckCircle2 } from "lucide-react";

interface HardwareItem {
  id: string;
  name: string;
  category: "synth" | "sampler" | "tube" | "dsp";
  badge: string;
  desc: string;
  bgPhoto: string;
  specs: string[];
}

const HARDWARE_ROSTER: HardwareItem[] = [
  {
    id: "poly-synth",
    name: "Analogni & Digitalni Sintisajzeri",
    category: "synth",
    badge: "10 Hardverskih Jedinica",
    desc: "Kolekcija klasičnih analognih i digitalnih sintisajzera od 80-tih do danas. Zvuk sa pravom harmonijskom težinom, rezonantnim filterima i dinamičkim odzivom koji softverski pluginovi ne mogu sintetički replicirati.",
    bgPhoto: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    specs: ["Diskretni analogni filteri", "Originalne PCM banke", "MIDI sinhronizacija", "Pravi dinamički odziv"],
  },
  {
    id: "samplers",
    name: "Hardverski Sempleri & Ritam Mašine",
    category: "sampler",
    badge: "16-bit & 24-bit Zvuk",
    desc: "Namjenske hardverske jedinice koje daju onaj prepoznatljivi 'udarac' i definisan bas spektar. Pravi D/A pretvarači sa prepoznatljivim karakterom i bešumnim tajmingom.",
    bgPhoto: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    specs: ["D/A konvertori sa karakterom", "Pravi analogni izlazi", "Nula softverskog kašnjenja", "Studijski headroom"],
  },
  {
    id: "tube-pre",
    name: "Lampaški Predpojačivači & Mikrofoni",
    category: "tube",
    badge: "Puna Vokalna Toplina",
    desc: "Vrhunski kondenzatorski i dinamički mikrofoni spojeni na prave vakuumske lampe. Glas koji prirodno sjeda u miks sa mekim harmonijskim saturacijama i broadcast prisustvom.",
    bgPhoto: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    specs: ["Vakuumska lampaška saturacija", "Linearna faza", "Broadcast standard", "Prirodan headroom"],
  },
  {
    id: "dsp-fx",
    name: "Prostorni DSP Procesori & Master Dinamika",
    category: "dsp",
    badge: "Lexicon & TC Standard",
    desc: "Hardverski algoritamski prostori i mastering kompresori. Zvuk velikih dvorana, intimnih soba i radijska dinamika normirana po strogom EBU R128 standardu.",
    bgPhoto: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    specs: ["Pravi algoritamski prostor", "Hardverska opto-kompresija", "Mastering limiteri", "EBU R128 standard glasnoće"],
  },
];

export default function HardwareVault() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? HARDWARE_ROSTER
    : HARDWARE_ROSTER.filter((item) => item.category === activeCategory);

  return (
    <section id="oprema" className="py-20 md:py-28 bg-white border-t border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold mb-4">
            <Sliders className="w-3.5 h-3.5 text-orange-600" />
            <span>Kreativni nered & hardverska arhiva</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight mb-4 font-display uppercase">
            Zvuk koji se pravi rukama, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              a ne kliktanjem na prompt.
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Danas svako sa računarom može generisati sintetički džingl na AI platformama. 
            Ali kada vam treba muzika koja nosi 40 godina teatarske drame, filmski napon, 
            ili radijski vokal koji u sekundi privlači pažnju kupca — tu presuđuju pravi hardver i zanat.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {[
            { id: "all", label: "Sva Oprema" },
            { id: "synth", label: "Sintisajzeri (10 kom)" },
            { id: "sampler", label: "Sempleri" },
            { id: "tube", label: "Lampaši & Mikrofoni" },
            { id: "dsp", label: "DSP & Master" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Hardware Grid with Clean Crisp Photo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-stone-50 border border-stone-200 hover:border-orange-500 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Photo Background */}
              <div
                className="relative h-48 sm:h-56 overflow-hidden bg-stone-900"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  style={{ backgroundImage: `url('${item.bgPhoto}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono font-bold text-white bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-xs">
                    {item.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-white font-semibold">Aktivan u studiju</span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-4">
                  {item.desc}
                </p>

                {/* Specs Chips */}
                <div className="pt-4 border-t border-stone-200 grid grid-cols-2 gap-2">
                  {item.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: Real Composition & Boris Relja "Revelation" Example */}
        <div className="mt-12 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50 to-stone-50 border border-orange-200/90 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-700 uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Autorska Proizvodnja Muzike vs. Brzi Džinglovi</span>
            </div>
            <h4 className="text-lg sm:text-2xl font-bold text-stone-900 font-display uppercase">
              6+ Mjeseci, 16 Sati Dnevno — Albumi poput „Revelation” (Boris Relja)
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 max-w-2xl leading-relaxed">
              Kada se radi brzi akcijski spot za trgovački lanac, to je 2 sata čistog inženjerskog zanata. 
              Ali kada radimo autorski album ili muziku za pozorišnu predstavu, u tome se živi. 
              To je razlika između konfekcije i pravog umjetničkog autoriteta Studija TAF.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-right bg-white p-6 rounded-2xl border border-orange-200 shadow-md">
            <div className="text-3xl font-black text-orange-600 font-mono">10.000+</div>
            <div className="text-xs text-stone-600 font-semibold">radova kroz 4 decenije</div>
          </div>
        </div>
      </div>
    </section>
  );
}
