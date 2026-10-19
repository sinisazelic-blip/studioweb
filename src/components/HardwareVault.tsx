"use client";

import React, { useState } from "react";
import { Disc, Sliders, Cpu, Activity, Sparkles, CheckCircle2 } from "lucide-react";

interface HardwareItem {
  id: string;
  name: string;
  category: "synth" | "sampler" | "tube" | "dsp";
  badge: string;
  desc: string;
  specs: string[];
}

const HARDWARE_ROSTER: HardwareItem[] = [
  {
    id: "poly-synth",
    name: "Analogni & Digitalni Sintisajzeri",
    category: "synth",
    badge: "10 Hardverskih Jedinica",
    desc: "Kolekcija klasičnih analognih i digitalnih mašina od ranih 80-tih do modernih radnih stanica. Zvuk sa pravom masnoćom, rezonancijom i karakterom koji nijedan plugin ne može sintetički da dočara.",
    specs: ["Diskretni analogni filteri", "Originalne PCM banke", "MIDI sinhronizacija", "Pravi dinamički odziv"],
  },
  {
    id: "samplers",
    name: "Hardverski Sempleri & Ritam Mašine",
    category: "sampler",
    badge: "16-bit & 24-bit Zvuk",
    desc: "Pravi sempleri koji su definisali produkciju 90-tih i 2000-tih. Jedinstveni digitalno-analogni pretvarači koji daju prepoznatljiv udarac i toplinu u donjem spektru.",
    specs: ["D/A konvertori sa karakterom", "Pravi analogni izlazi", "Nema softverskog jitter-a", "Studijska brzina odziva"],
  },
  {
    id: "tube-pre",
    name: "Lampaški Predpojačivači & Mikrofoni",
    category: "tube",
    badge: "Puna Vokalna Toplina",
    desc: "Vrhunski kondenzatorski i dinamički mikrofoni spojeni na prave vakuumske lampe. Glas koji odmah sjeda u miks, sa prirodnim harmonijskim zasićenjem i kristalnom razumljivošću.",
    specs: ["Vakuumska lampaška saturacija", "Linearna faza", "Broadcast standard", "Prirodan headroom"],
  },
  {
    id: "dsp-fx",
    name: "Prostorni DSP Procesori & Master Dinamika",
    category: "dsp",
    badge: "Lexicon & TC Standard",
    desc: "Namjenski hardverski reverbi, eho i kompresori. Zvuk velikih dvorana, intimnih soba i radijska kompresija koja ne guši dinamiku govornika.",
    specs: ["Pravi algoritamski prostor", "Hardverska opto-kompresija", "Mastering limiteri", "EBU R128 standard glasnoće"],
  },
];

export default function HardwareVault() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? HARDWARE_ROSTER
    : HARDWARE_ROSTER.filter((item) => item.category === activeCategory);

  return (
    <section id="oprema" className="py-20 md:py-28 bg-[#0c101d] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            <span>Kreativni nered & hardverska arhiva</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Zvuk koji se pravi rukama, <br className="hidden sm:inline" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              a ne kliktanjem na prompt.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Danas svako sa računarom može generisati sintetički džingl na AI platformama. 
            Ali kada vam treba muzika koja nosi 40 godina teatarske drame, filmski napon, 
            ili radijski vokal koji u sekundi privlači pažnju kupca — tu presuđuju pravi hardver i zanat.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
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
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-500/40 shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-400">Aktivan u studiju</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Specs Chips */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2">
                {item.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: Real Composition & Boris Relja "Revelation" Example */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/60 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prava Proizvodnja Muzike vs. 2-Satni Džinglovi</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              6+ Mjeseci, 16 Sati Dnevno — Albumi poput „Revelation” (Boris Relja)
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Kada se radi brzi akcijski spot za trgovački lanac, to je 2 sata čistog inženjerskog zanata. 
              Ali kada radimo autorski album ili muziku za pozorišnu predstavu, u tome se živi. 
              To je razlika između konfekcije i pravog umjetničkog autoriteta Studija TAF.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-right bg-slate-950/70 p-4 rounded-2xl border border-amber-500/20">
            <div className="text-2xl font-black text-amber-400 font-mono">10.000+</div>
            <div className="text-[11px] text-slate-400">radova kroz 40 godina</div>
          </div>
        </div>
      </div>
    </section>
  );
}
