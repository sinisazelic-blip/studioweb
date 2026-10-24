"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface ClientBrand {
  id: string;
  name: string;
  logoUrl?: string;
  brandColor?: string;
}

const verifiedClientsList: ClientBrand[] = [
  // 1. Telekomunikacije & Javne Institucije
  {
    id: "mtel",
    name: "m:tel",
    logoUrl: "/images/clients/mtel_logo.svg",
    brandColor: "#ED1C24",
  },
  {
    id: "gob",
    name: "Gradski Olimpijski Bazen",
    logoUrl: "/images/clients/gob_logo.png",
    brandColor: "#0284c7",
  },
  {
    id: "aquana",
    name: "JP Aquana",
    logoUrl: "/images/clients/aquana_logo.png",
    brandColor: "#0d9488",
  },

  // 2. Bankarski Sektor & Finansije
  {
    id: "nova-banka",
    name: "Nova Banka",
    brandColor: "#1e40af",
  },
  {
    id: "addiko-bank",
    name: "Addiko Bank",
    brandColor: "#ea580c",
  },
  {
    id: "nlb-banka",
    name: "NLB Banka",
    brandColor: "#581c87",
  },
  {
    id: "banca-intesa",
    name: "Banca Intesa",
    logoUrl: "/images/clients/bancaintesa-50x50.jpg",
    brandColor: "#065f46",
  },
  {
    id: "eki",
    name: "MKF EKI",
    brandColor: "#15803d",
  },
  {
    id: "forza",
    name: "Forza Kredit",
    brandColor: "#b91c1c",
  },

  // 3. Prehrambena Industrija & FMCG
  {
    id: "ledo",
    name: "Ledo",
    brandColor: "#0284c7",
  },
  {
    id: "plazma",
    name: "Bambi Plazma",
    logoUrl: "/images/clients/bambi-50x50.jpg",
    brandColor: "#dc2626",
  },
  {
    id: "smoki",
    name: "Smoki (Štark)",
    brandColor: "#d97706",
  },
  {
    id: "chipsi",
    name: "Chipsi (Marbo)",
    brandColor: "#ca8a04",
  },
  {
    id: "doritos",
    name: "Doritos",
    brandColor: "#ea580c",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    logoUrl: "/images/clients/CocaC-50x50.jpg",
    brandColor: "#dc2626",
  },
  {
    id: "garnier",
    name: "Garnier",
    logoUrl: "/images/clients/50x50-garnier.jpg",
    brandColor: "#15803d",
  },
  {
    id: "knjaz-milos",
    name: "Knjaz Miloš",
    brandColor: "#1e3a8a",
  },
  {
    id: "grand-kafa",
    name: "Grand Kafa",
    logoUrl: "/images/clients/grandK-50x50.jpg",
    brandColor: "#78350f",
  },
  {
    id: "barcaffe",
    name: "Barcaffè",
    logoUrl: "/images/clients/barcaffe-50x50.jpg",
    brandColor: "#78350f",
  },
  {
    id: "bakina-tajna",
    name: "Bakina Tajna",
    logoUrl: "/images/clients/bakinatajna-50x50-1.jpg",
    brandColor: "#b45309",
  },
  {
    id: "jelen-pivo",
    name: "Jelen Pivo",
    logoUrl: "/images/clients/jelenpivo-50x50-s.jpg",
    brandColor: "#b45309",
  },
  {
    id: "nestle",
    name: "Nestlé",
    logoUrl: "/images/clients/nestle-50x50-s.jpg",
    brandColor: "#1e3a8a",
  },
  {
    id: "hemofarm",
    name: "Hemofarm (STADA)",
    logoUrl: "/images/clients/hemofarm-50x50.jpg",
    brandColor: "#1d4ed8",
  },
  {
    id: "ivancic",
    name: "Ivančić i Sinovi",
    logoUrl: "/images/clients/ivancisiS-50x50-s.jpg",
    brandColor: "#059669",
  },
  {
    id: "bonito",
    name: "Bonito",
    brandColor: "#dc2626",
  },

  // 4. Trgovinski Lanci & Retail (Razdvojeni Tropic i Crvena Jabuka)
  {
    id: "tropic",
    name: "Tropic",
    brandColor: "#047857",
  },
  {
    id: "crvena-jabuka",
    name: "Crvena Jabuka",
    brandColor: "#dc2626",
  },
  {
    id: "fructa-trade",
    name: "Fructa Trade (Kort)",
    brandColor: "#b91c1c",
  },
  {
    id: "idea",
    name: "IDEA",
    logoUrl: "/images/clients/ideaC-50x50.jpg",
    brandColor: "#dc2626",
  },
  {
    id: "centrum",
    name: "Centrum Trade",
    brandColor: "#ea580c",
  },

  // 5. Festivali, Manifestacije & Agencije
  {
    id: "demofest",
    name: "Demofest",
    brandColor: "#0f172a",
  },
  {
    id: "balkan-summer",
    name: "Balkan Summer Summit",
    brandColor: "#2563eb",
  },
  {
    id: "bitef",
    name: "BITEF",
    logoUrl: "/images/clients/bitef-50x50.jpg",
    brandColor: "#09090b",
  },
  {
    id: "mccann",
    name: "McCann",
    logoUrl: "/images/clients/mccann-50x50-s.jpg",
    brandColor: "#09090b",
  },
  {
    id: "banja-vrucica",
    name: "ZTC Banja Vrućica",
    brandColor: "#047857",
  },
  {
    id: "iqos",
    name: "IQOS",
    logoUrl: "/images/clients/iqos-50x50-s.jpg",
    brandColor: "#0f172a",
  },
];

export default function ClientsShowcase() {
  return (
    <section id="clients" className="py-24 sm:py-32 bg-[#faf9f5] text-stone-900 border-b border-stone-200/90 relative overflow-hidden">
      {/* Soft warm background glows */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[300px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Referentna Lista • Preko 120 Stalnih Komitenata</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-stone-950 tracking-tight font-sans">
            Klijenti & <span className="font-semibold text-amber-600">Reference</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.5)]" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-normal">
            Četiri decenije povjerenja vodećih regionalnih i multinacionalnih brendova, bankarskih institucija, prehrambenih lidera i međunarodnih manifestacija.
          </p>
        </div>

        {/* Pure Clean Logo Grid - Bez filtera, bez lampica, bez analize poslovanja */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 max-w-[1600px] mx-auto">
          {verifiedClientsList.map((client) => (
            <div
              key={client.id}
              className="group bg-white hover:bg-stone-50 border border-stone-200 hover:border-amber-500/70 rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center justify-center text-center min-h-[110px] cursor-default"
            >
              {client.logoUrl ? (
                <div className="h-12 w-full flex items-center justify-center">
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="max-h-10 max-w-[130px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div
                  className="text-base sm:text-lg font-bold tracking-tight uppercase leading-snug group-hover:scale-105 transition-transform duration-300 font-sans"
                  style={{ color: client.brandColor || "#1c1917" }}
                >
                  {client.name}
                </div>
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
