"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, Sparkles, Building2 } from "lucide-react";

interface ClientBrand {
  id: string;
  name: string;
  category: "retail" | "finance" | "beverage_food" | "fmcg" | "events" | "telco";
  logoUrl?: string;
  tagline?: string;
  brandColor?: string;
  isFeatured?: boolean;
}

const verifiedClientsList: ClientBrand[] = [
  // 1. TELCO & INSTITUTIONS
  {
    id: "mtel",
    name: "m:tel",
    category: "telco",
    logoUrl: "/images/clients/mts1-50x50-s.jpg",
    tagline: "Telekomunikacije",
    brandColor: "#e11d48",
    isFeatured: true,
  },
  {
    id: "gob",
    name: "Gradski Olimpijski Bazen",
    category: "events",
    logoUrl: "/images/clients/gob_logo.png",
    tagline: "Sportska Borilišta",
    brandColor: "#0284c7",
    isFeatured: true,
  },
  {
    id: "aquana",
    name: "JP Aquana",
    category: "events",
    logoUrl: "/images/clients/aquana_logo.png",
    tagline: "Vodeni Park & Sport",
    brandColor: "#0d9488",
    isFeatured: true,
  },

  // 2. BANKARSKI SEKTOR & FINANSIJE
  {
    id: "nova-banka",
    name: "Nova Banka",
    category: "finance",
    tagline: "Bankarstvo & Krediti",
    brandColor: "#1e40af",
    isFeatured: true,
  },
  {
    id: "addiko-bank",
    name: "Addiko Bank",
    category: "finance",
    tagline: "Finansije & Kampanje",
    brandColor: "#ea580c",
    isFeatured: true,
  },
  {
    id: "nlb-banka",
    name: "NLB Banka",
    category: "finance",
    tagline: "NLB Grupa",
    brandColor: "#581c87",
    isFeatured: true,
  },
  {
    id: "eki",
    name: "MKF EKI",
    category: "finance",
    tagline: "Mikrokrediti",
    brandColor: "#15803d",
    isFeatured: true,
  },
  {
    id: "forza",
    name: "Forza Kredit",
    category: "finance",
    tagline: "Finansijske Usluge",
    brandColor: "#b91c1c",
    isFeatured: true,
  },

  // 3. FMCG & PREHRAMBENI GIGANTI
  {
    id: "ledo",
    name: "Ledo",
    category: "fmcg",
    tagline: "Sladoledi & Smrznuto",
    brandColor: "#0284c7",
    isFeatured: true,
  },
  {
    id: "plazma",
    name: "Bambi Plazma",
    category: "fmcg",
    logoUrl: "/images/clients/bambi-50x50.jpg",
    tagline: "Konditorska Industrija",
    brandColor: "#dc2626",
    isFeatured: true,
  },
  {
    id: "smoki",
    name: "Smoki (Štark)",
    category: "fmcg",
    tagline: "Atlantic Grupa",
    brandColor: "#d97706",
    isFeatured: true,
  },
  {
    id: "chipsi",
    name: "Chipsi (Marbo / PepsiCo)",
    category: "fmcg",
    tagline: "Snack Brend",
    brandColor: "#ca8a04",
    isFeatured: true,
  },
  {
    id: "doritos",
    name: "Doritos",
    category: "fmcg",
    tagline: "Global PepsiCo",
    brandColor: "#ea580c",
    isFeatured: true,
  },
  {
    id: "pepsi",
    name: "Pepsi Global",
    category: "beverage_food",
    logoUrl: "/images/clients/CocaC-50x50.jpg",
    tagline: "Napici & Kampanje",
    brandColor: "#1d4ed8",
    isFeatured: true,
  },
  {
    id: "garnier",
    name: "Garnier (L'Oréal)",
    category: "fmcg",
    logoUrl: "/images/clients/50x50-garnier.jpg",
    tagline: "Beauty & Cosmetics",
    brandColor: "#15803d",
    isFeatured: true,
  },
  {
    id: "knjaz-milos",
    name: "Knjaz Miloš",
    category: "beverage_food",
    tagline: "Mineralne Vode",
    brandColor: "#1e3a8a",
    isFeatured: true,
  },
  {
    id: "grand-kafa",
    name: "Grand Kafa",
    category: "beverage_food",
    logoUrl: "/images/clients/grandK-50x50.jpg",
    tagline: "Kafa & Brend",
    brandColor: "#78350f",
    isFeatured: true,
  },
  {
    id: "hemofarm",
    name: "Hemofarm (STADA)",
    category: "fmcg",
    logoUrl: "/images/clients/hemofarm-50x50.jpg",
    tagline: "Farmacija",
    brandColor: "#1d4ed8",
  },
  {
    id: "bonito",
    name: "Bonito",
    category: "fmcg",
    tagline: "Prehrambena Industrija",
    brandColor: "#dc2626",
  },

  // 4. RETAIL & TRGOVINSKI LANCI
  {
    id: "fructa-trade",
    name: "Fructa Trade / Kort",
    category: "retail",
    tagline: "Maloprodajni Lanac",
    brandColor: "#b91c1c",
    isFeatured: true,
  },
  {
    id: "tropic",
    name: "Tropic & Crvena Jabuka",
    category: "retail",
    tagline: "Supermarketi",
    brandColor: "#047857",
  },
  {
    id: "centrum",
    name: "Centrum Trade",
    category: "retail",
    tagline: "Home & Garden Centri",
    brandColor: "#ea580c",
  },

  // 5. MANIFESTACIJE & ZDRAVSTVENI TURIZAM
  {
    id: "demofest",
    name: "Demofest",
    category: "events",
    tagline: "Najveći Demo Rock Festival",
    brandColor: "#0f172a",
    isFeatured: true,
  },
  {
    id: "balkan-summer",
    name: "Balkan Summer Summit",
    category: "events",
    tagline: "Regionalni Samit",
    brandColor: "#2563eb",
  },
  {
    id: "banja-vrucica",
    name: "ZTC Banja Vrućica",
    category: "events",
    tagline: "Zdravstveni Turizam",
    brandColor: "#047857",
  },
  {
    id: "mccann",
    name: "McCann Worldgroup",
    category: "events",
    logoUrl: "/images/clients/mccann-50x50-s.jpg",
    tagline: "Kreativna Agencija",
    brandColor: "#09090b",
  },
  {
    id: "publicis",
    name: "Publicis Groupe",
    category: "events",
    tagline: "Globalna Agencija",
    brandColor: "#713f12",
  },
];

export default function ClientsShowcase() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? verifiedClientsList
      : verifiedClientsList.filter((c) => c.category === filter);

  return (
    <section id="clients" className="py-24 sm:py-32 bg-[#faf9f5] text-stone-900 border-b border-stone-200/90 relative overflow-hidden">
      {/* Soft warm background glows */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[300px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Referentna Lista • Preko 120 Stalnih Komitenata</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-stone-950 tracking-tight font-sans">
            Klijenti & <span className="font-semibold text-amber-600">Reference</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.5)]" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-normal">
            Četiri decenije povjerenja najvećih domaćih i multinacionalnih brendova, bankarskih institucija, prehrambenih lidera i međunarodnih manifestacija.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {[
            { id: "all", label: "Sve Reference" },
            { id: "fmcg", label: "Prehrana & FMCG" },
            { id: "finance", label: "Banke & Finansije" },
            { id: "retail", label: "Maloprodaja" },
            { id: "events", label: "Sport & Događaji" },
            { id: "telco", label: "Telekomunikacije" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === cat.id
                  ? "bg-stone-950 text-white shadow-md shadow-stone-950/20"
                  : "bg-white hover:bg-stone-100 text-stone-600 border border-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Uniform High-End Client Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 max-w-[1600px] mx-auto">
          {filtered.map((client) => (
            <div
              key={client.id}
              className="group relative bg-white hover:bg-stone-50 border border-stone-200/90 hover:border-amber-500/70 rounded-2xl p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[110px] cursor-default"
            >
              {client.logoUrl ? (
                <div className="h-10 w-full flex items-center justify-center mb-2">
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="max-h-9 max-w-[110px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div
                  className="text-base sm:text-lg font-black tracking-tight uppercase leading-none mb-2 group-hover:scale-105 transition-transform duration-300 font-sans"
                  style={{ color: client.brandColor || "#1c1917" }}
                >
                  {client.name}
                </div>
              )}

              <div className="text-[10px] font-mono font-medium text-stone-400 group-hover:text-stone-600 uppercase tracking-wide">
                {client.tagline}
              </div>

              {client.isFeatured && (
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-500" title="Dugogodišnji partner" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-16 pt-8 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Četiri decenije kontinuirane audio produkcije, radio i TV emitovanja</span>
          </div>
          <div className="flex items-center gap-6">
            <strong className="text-stone-900 font-bold">6.012 realizovanih projekata</strong>
            <span className="text-stone-300">•</span>
            <span>Preko 120 stalnih komitenata u sistemu</span>
          </div>
        </div>

      </div>
    </section>
  );
}
