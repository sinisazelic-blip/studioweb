"use client";

import React from "react";
import { Disc, ExternalLink, ArrowUp, Mail, Phone, MapPin, Radio, Server, Mic, Award } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#100a07] border-t border-amber-950/60 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Studio Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#1c120c] p-2 rounded-xl border border-amber-800/40 shadow-inner">
                <img
                  src="/logos/taf-logo.jpg"
                  alt="Studio TAF"
                  className="h-10 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="font-extrabold text-base text-white font-sans block">
                  Studio <span className="text-studio-500">TAF</span>
                </span>
                <span className="text-[11px] text-amber-300 font-mono flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-studio-400" />
                  <span>Četiri decenije zvuka & produkcije (1982–{new Date().getFullYear()})</span>
                </span>
              </div>
            </div>

            <p className="text-stone-300 leading-relaxed text-xs max-w-sm">
              Pravi analogni temelj i digitalna superiornost. 10 hardverskih sintisajzera, 
              akustički tretirani prostori, in-store zvučna infrastruktura „Moj Radio”, 
              web audio distribucija i P2P režija. Znanje i zanat rođeni u Banja Luci za cijeli region.
            </p>

            <div className="space-y-1.5 pt-2 text-[11px] text-stone-400 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-studio-500" />
                <span>Banja Luka, Bosna i Hercegovina</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-studio-500" />
                <a href="tel:+38765519071" className="hover:text-amber-300 transition-colors">
                  +387 (0)65 519 071 • Siniša Zelić (Direktna linija)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-studio-500" />
                <a href="mailto:info@studiotaf.ba" className="hover:text-amber-300 transition-colors">
                  info@studiotaf.ba • podrska@studiotaf.ba
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Studio Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono">
              Studio & Usluge
            </h4>
            <ul className="space-y-2 text-stone-300">
              <li>
                <button onClick={() => scrollTo("studio-prostor")} className="hover:text-studio-400 transition-colors cursor-pointer text-left">
                  Akustika & Studio Prostori
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("balkan-network")} className="hover:text-studio-400 transition-colors cursor-pointer text-left">
                  Balkanska Spikerska Mreža (6 Tržišta)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("oprema")} className="hover:text-studio-400 transition-colors cursor-pointer text-left">
                  Hardverski Sintisajzeri & Analogni Rack
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("moj-radio")} className="hover:text-studio-400 transition-colors cursor-pointer text-left">
                  Moj Radio (In-Store Sistemi & Horne)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("vault")} className="hover:text-studio-400 transition-colors cursor-pointer text-left">
                  Klijentski Vault & Master Player
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("live-session")} className="hover:text-studio-400 transition-colors cursor-pointer text-left">
                  Studio TAF Live (WebRTC Režija)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("tradicija")} className="hover:text-studio-400 transition-colors cursor-pointer text-left">
                  Tradicija & Projekti (1982–{new Date().getFullYear()})
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: B2B Ecosystem */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono">
              FLUXA Tehnološki Ekosistem
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Studio TAF je kreativni temelj i inženjerski garant za cjelokupnu FLUXA softversku i hardversku platformu:
            </p>
            <ul className="space-y-1.5 text-stone-300 pt-1">
              <li>
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 flex items-center gap-1.5 transition-colors font-medium text-stone-200"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  <span>FLUXA.ba • Poslovna rješenja i tehnologija</span>
                </a>
              </li>
              <li>
                <span className="text-stone-400">• FluxaPOS • Maloprodajna kasa bez zastoja</span>
              </li>
              <li>
                <span className="text-stone-400">• EnterSYS & ARGUS • Kontrola pristupa i tripodi</span>
              </li>
              <li>
                <span className="text-stone-400">• DokumentArt • DMS, Nabavke & Kripto potpis</span>
              </li>
              <li>
                <span className="text-stone-400">• SOCCS • Swiss Timing sportska borilišta</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-amber-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <span>
              © 1982 – {new Date().getFullYear()} <strong className="text-stone-200 font-semibold">Studio TAF</strong>. Sva prava zadržana.
            </span>
            <span
              className="font-mono text-studio-400 select-none tracking-wider px-2 py-0.5 rounded bg-[#1c120c] border border-amber-900/50 shadow-inner"
              title="StudioWEB Release Build (Port 1991)"
            >
              build v1.0.0 • :1991
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-stone-400">Pravi autorski zvuk • Inženjering • Bez kompromisa</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#1c120c] hover:bg-studio-500 hover:text-white text-studio-400 transition-colors cursor-pointer border border-amber-900/50"
              title="Nazad na vrh"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
