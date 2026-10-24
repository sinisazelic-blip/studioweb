"use client";

import React, { useState } from "react";

interface ClientBrand {
  id: string;
  name: string;
  tier: "national" | "multinational";
  logoUrl?: string;
  customLogo?: {
    text: string;
    sub?: string;
    badgeStyle?: string;
  };
}

const nationalClients: ClientBrand[] = [
  {
    id: "mtel",
    name: "m:tel",
    tier: "national",
    logoUrl: "/images/clients/mts1-50x50-s.jpg",
    customLogo: {
      text: "m:tel",
      sub: "TELEKOM",
      badgeStyle: "font-bold text-rose-600 font-sans lowercase",
    },
  },
  {
    id: "nova-banka",
    name: "Nova Banka",
    tier: "national",
    customLogo: {
      text: "NOVA BANKA",
      sub: "AD BANJA LUKA",
      badgeStyle: "font-black tracking-wide text-blue-800 font-sans",
    },
  },
  {
    id: "addiko-bank",
    name: "Addiko Bank",
    tier: "national",
    customLogo: {
      text: "Addiko Bank",
      sub: "FINANCE",
      badgeStyle: "font-bold tracking-tight text-stone-900 font-sans",
    },
  },
  {
    id: "nlb-banka",
    name: "NLB Banka",
    tier: "national",
    customLogo: {
      text: "NLB Banka",
      sub: "GROUP",
      badgeStyle: "font-black tracking-tight text-purple-900 font-sans",
    },
  },
  {
    id: "fructa",
    name: "Fructa Trade / Kort",
    tier: "national",
    customLogo: {
      text: "FRUCTA TRADE",
      sub: "KORT MARKETA",
      badgeStyle: "font-black tracking-wider text-red-600 font-sans",
    },
  },
  {
    id: "centrum",
    name: "Centrum Trade",
    tier: "national",
    customLogo: {
      text: "CENTRUM",
      sub: "HOME & TRADE",
      badgeStyle: "font-black tracking-widest text-orange-600 font-sans",
    },
  },
  {
    id: "hemofarm",
    name: "Hemofarm",
    tier: "national",
    logoUrl: "/images/clients/hemofarm-50x50.jpg",
    customLogo: {
      text: "HEMOFARM",
      sub: "STADA GROUP",
      badgeStyle: "font-extrabold tracking-wide text-blue-900 font-sans",
    },
  },
  {
    id: "tropic",
    name: "Tropic & Crvena Jabuka",
    tier: "national",
    customLogo: {
      text: "TROPIC",
      sub: "CRVENA JABUKA",
      badgeStyle: "font-extrabold tracking-wider text-emerald-700 font-sans",
    },
  },
  {
    id: "bl-pivara",
    name: "Banjalučka Pivara / Nektar",
    tier: "national",
    logoUrl: "/images/clients/jelenpivo-50x50-s.jpg",
    customLogo: {
      text: "NEKTAR",
      sub: "BL PIVARA",
      badgeStyle: "font-black tracking-widest text-amber-700 font-serif",
    },
  },
  {
    id: "demofest",
    name: "Demofest",
    tier: "national",
    customLogo: {
      text: "DEMOFEST",
      sub: "ROCK FESTIVAL",
      badgeStyle: "font-black tracking-widest text-stone-900 font-mono",
    },
  },
  {
    id: "eki",
    name: "EKI Mikrokrediti",
    tier: "national",
    customLogo: {
      text: "EKI",
      sub: "MIKROKREDITI",
      badgeStyle: "font-black tracking-wider text-blue-700 font-sans",
    },
  },
  {
    id: "forza",
    name: "Forza BiH",
    tier: "national",
    customLogo: {
      text: "FORZA",
      sub: "CREDIT",
      badgeStyle: "font-extrabold tracking-wide text-amber-600 font-sans",
    },
  },
  {
    id: "aquana",
    name: "Aquana JP",
    tier: "national",
    customLogo: {
      text: "AQUANA",
      sub: "VODENI PARK",
      badgeStyle: "font-black tracking-widest text-cyan-600 font-sans",
    },
  },
  {
    id: "banja-vrucica",
    name: "Banja Vrućica",
    tier: "national",
    customLogo: {
      text: "BANJA VRUĆICA",
      sub: "ZDRAVSTVENI CENTAR",
      badgeStyle: "font-extrabold tracking-wider text-sky-800 font-sans",
    },
  },
  {
    id: "bonito",
    name: "Bonito",
    tier: "national",
    customLogo: {
      text: "BONITO",
      sub: "PREHRAMBENA IND.",
      badgeStyle: "font-black tracking-tight text-amber-600 font-sans",
    },
  },
  {
    id: "bosnalijek",
    name: "Bosnalijek",
    tier: "national",
    customLogo: {
      text: "BOSNALIJEK",
      sub: "PHARMA",
      badgeStyle: "font-bold tracking-wider text-emerald-800 font-sans",
    },
  },
];

const multinationalClients: ClientBrand[] = [
  {
    id: "coca-cola",
    name: "Coca-Cola",
    tier: "multinational",
    logoUrl: "/images/clients/CocaC-50x50.jpg",
    customLogo: {
      text: "Coca-Cola",
      badgeStyle: "font-serif italic font-black text-red-600 text-xl tracking-tight",
    },
  },
  {
    id: "ledo",
    name: "Ledo",
    tier: "multinational",
    customLogo: {
      text: "LEDO",
      sub: "SLADOLEDI & SMRZNUTO",
      badgeStyle: "font-black tracking-wider text-blue-600 font-sans",
    },
  },
  {
    id: "plazma",
    name: "Plazma (Bambi)",
    tier: "multinational",
    logoUrl: "/images/clients/bambi-50x50.jpg",
    customLogo: {
      text: "PLAZMA",
      sub: "BAMBI",
      badgeStyle: "font-black text-red-600 font-sans tracking-wide",
    },
  },
  {
    id: "smoki",
    name: "Smoki (Štark)",
    tier: "multinational",
    customLogo: {
      text: "SMOKI",
      sub: "ŠTARK",
      badgeStyle: "font-black text-amber-600 font-sans tracking-tight",
    },
  },
  {
    id: "chipsi",
    name: "Chipsi (PepsiCo / Marbo)",
    tier: "multinational",
    customLogo: {
      text: "CHIPSI",
      sub: "PEPSICO",
      badgeStyle: "font-black tracking-wide text-yellow-600 font-sans",
    },
  },
  {
    id: "doritos",
    name: "Doritos",
    tier: "multinational",
    customLogo: {
      text: "DORITOS",
      sub: "PEPSICO GLOBAL",
      badgeStyle: "font-black tracking-wider text-red-700 font-sans",
    },
  },
  {
    id: "garnier",
    name: "Garnier",
    tier: "multinational",
    logoUrl: "/images/clients/50x50-garnier.jpg",
    customLogo: {
      text: "GARNIER",
      sub: "PARIS",
      badgeStyle: "font-medium tracking-[0.25em] text-emerald-800 font-sans",
    },
  },
  {
    id: "pepsi",
    name: "Pepsi",
    tier: "multinational",
    customLogo: {
      text: "PEPSI",
      sub: "GLOBAL",
      badgeStyle: "font-black tracking-widest text-blue-700 font-sans",
    },
  },
  {
    id: "nestle",
    name: "Nestlé",
    tier: "multinational",
    logoUrl: "/images/clients/nestle-50x50-s.jpg",
    customLogo: {
      text: "Nestlé",
      badgeStyle: "font-bold text-stone-800 font-sans tracking-wide",
    },
  },
  {
    id: "grand-kafa",
    name: "Grand Kafa",
    tier: "multinational",
    logoUrl: "/images/clients/grandK-50x50.jpg",
    customLogo: {
      text: "GRAND KAFA",
      badgeStyle: "font-extrabold text-amber-900 font-serif tracking-wider",
    },
  },
  {
    id: "knjaz-milos",
    name: "Knjaz Miloš",
    tier: "multinational",
    customLogo: {
      text: "KNJAZ MILOŠ",
      sub: "MINERALNA VODA",
      badgeStyle: "font-serif font-black text-blue-900 tracking-wider",
    },
  },
  {
    id: "banca-intesa",
    name: "Banca Intesa",
    tier: "multinational",
    logoUrl: "/images/clients/bancaintesa-50x50.jpg",
    customLogo: {
      text: "BANCA INTESA",
      badgeStyle: "font-bold text-stone-800 font-sans tracking-tight",
    },
  },
  {
    id: "mccann",
    name: "McCann",
    tier: "multinational",
    logoUrl: "/images/clients/mccann-50x50-s.jpg",
    customLogo: {
      text: "McCANN",
      sub: "WORLDGROUP",
      badgeStyle: "font-extrabold text-stone-900 font-sans tracking-tight",
    },
  },
  {
    id: "publicis",
    name: "Publicis Groupe",
    tier: "multinational",
    customLogo: {
      text: "PUBLICIS",
      sub: "GROUPE",
      badgeStyle: "font-black text-stone-900 font-serif tracking-widest",
    },
  },
];

export default function ClientsShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "national" | "multinational">("all");

  const displayedList =
    activeTab === "all"
      ? [...nationalClients, ...multinationalClients]
      : activeTab === "national"
      ? nationalClients
      : multinationalClients;

  return (
    <section id="clients" className="py-24 sm:py-32 bg-white text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-stone-500 font-bold block mb-2">
            Referentna Lista & Dugogodišnji Partneri
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-sans">
            Klijenti & Reference
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
        </div>

        {/* Freestanding Monochrome Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-8 gap-y-10 items-center justify-items-center max-w-[1600px] mx-auto py-6">
          {[...nationalClients, ...multinationalClients].map((client) => (
            <div
              key={client.id}
              className="w-36 h-16 flex items-center justify-center text-center group cursor-default transition-all duration-300 hover:scale-105"
              title={client.name}
            >
              {client.logoUrl ? (
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  className="max-h-10 max-w-[120px] object-contain filter grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              ) : client.customLogo ? (
                <span className={`text-[13px] sm:text-[14px] leading-tight text-stone-600 group-hover:text-stone-950 transition-colors uppercase font-bold tracking-wider ${client.customLogo.badgeStyle}`}>
                  {client.customLogo.text}
                </span>
              ) : (
                <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-16 pt-8 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Četiri decenije kontinuirane audio produkcije, radio i TV emitovanja</span>
          </div>
          <div className="flex items-center gap-6">
            <span>6.012 realizovanih projekata</span>
            <span className="text-stone-300">•</span>
            <span>Preko 120 stalnih komitenata u sistemu</span>
          </div>
        </div>

      </div>
    </section>
  );
}
