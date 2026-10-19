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
    <footer className="bg-[#f6f3eb] border-t border-stone-200 text-stone-600 text-sm">
      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Col 1: Studio Identity */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="bg-white p-2.5 rounded-2xl border border-stone-200 shadow-xs">
                <img
                  src="/logos/taf-logo.jpg"
                  alt="Studio TAF"
                  className="h-12 w-auto object-contain rounded-xl"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-stone-900 font-sans block">
                  Studio <span className="text-orange-600">TAF</span>
                </span>
                <span className="text-xs text-orange-800 font-mono flex items-center gap-1.5 font-bold">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span>Četiri decenije zvuka & produkcije (1982–{new Date().getFullYear()})</span>
                </span>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed text-sm max-w-md font-medium">
              Pravi analogni temelj i digitalna superiornost. 10 hardverskih sintisajzera, 
              akustički tretirani prostori, in-store zvučna infrastruktura „Moj Radio”, 
              web audio distribucija i P2P režija. Znanje i zanat rođeni u Banja Luci za cijeli region.
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm text-stone-800 font-semibold">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>Banja Luka, Bosna i Hercegovina</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-600" />
                <a href="tel:+38765519071" className="hover:text-orange-600 transition-colors">
                  +387 (0)65 519 071 • Siniša Zelić (Direktna linija)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-600" />
                <a href="mailto:info@studiotaf.ba" className="hover:text-orange-600 transition-colors">
                  info@studiotaf.ba • podrska@studiotaf.ba
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Studio Nav */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 font-mono">
              Studio & Usluge
            </h4>
            <ul className="space-y-2.5 text-stone-700 font-medium text-sm">
              <li>
                <button onClick={() => scrollTo("studio-prostor")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  Akustika & Studio Prostori
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("balkan-network")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  Balkanska Spikerska Mreža (6 Tržišta)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("oprema")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  Hardverski Sintisajzeri & Analogni Rack
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("moj-radio")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  Moj Radio (In-Store Sistemi & Horne)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("vault")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  Klijentski Vault & Master Player
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("live-session")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  Studio TAF Live (WebRTC Režija)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("tradicija")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  Tradicija & Projekti (1982–{new Date().getFullYear()})
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: B2B Ecosystem */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 font-mono">
              FLUXA Tehnološki Ekosistem
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
              Studio TAF je kreativni temelj i inženjerski garant za cjelokupnu FLUXA softversku i hardversku platformu:
            </p>
            <ul className="space-y-2 text-stone-700 pt-1 text-sm font-medium">
              <li>
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 flex items-center gap-2 transition-colors font-bold text-stone-900"
                >
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                  <span>FLUXA.ba • Poslovna rješenja i tehnologija</span>
                </a>
              </li>
              <li>
                <span className="text-stone-600">• FluxaPOS • Maloprodajna kasa bez zastoja</span>
              </li>
              <li>
                <span className="text-stone-600">• EnterSYS & ARGUS • Kontrola pristupa i tripodi</span>
              </li>
              <li>
                <span className="text-stone-600">• DokumentArt • DMS, Nabavke & Kripto potpis</span>
              </li>
              <li>
                <span className="text-stone-600">• SOCCS • Swiss Timing sportska borilišta</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-12 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-stone-500 text-xs sm:text-sm">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span>
              © 1982 – {new Date().getFullYear()} <strong className="text-stone-800 font-bold">Studio TAF</strong>. Sva prava zadržana.
            </span>
            <span
              className="font-mono text-orange-700 select-none tracking-wider px-2.5 py-1 rounded bg-white border border-stone-200 shadow-xs font-bold text-xs"
              title="StudioWEB Release Build (Port 1991)"
            >
              build v1.0.0 • :1991
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-stone-700 font-semibold">Pravi autorski zvuk • Inženjering • Bez kompromisa</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-2xl bg-white hover:bg-orange-600 hover:text-white text-orange-600 transition-colors cursor-pointer border border-stone-200 shadow-xs"
              title="Nazad na vrh"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
