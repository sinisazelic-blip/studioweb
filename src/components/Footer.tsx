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
    <footer className="bg-[#050609] border-t border-zinc-800/80 text-zinc-400 text-sm">
      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Col 1: Studio Identity */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="bg-[#12151e] p-2.5 rounded-2xl border border-zinc-800 shadow-xs">
                <img
                  src="/logos/taf-logo.jpg"
                  alt="Studio TAF"
                  className="h-12 w-auto object-contain rounded-xl"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white font-sans block">
                  Studio <span className="text-orange-500">TAF</span>
                </span>
                <span className="text-xs text-orange-400 font-mono flex items-center gap-1.5 font-bold">
                  <Award className="w-4 h-4 text-orange-500" />
                  <span>Četiri decenije zvuka & produkcije (1982–{new Date().getFullYear()})</span>
                </span>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-sm max-w-md font-normal">
              Pravi analogni temelj i digitalna superiornost. 10 hardverskih sintisajzera, 
              akustički tretirani prostori, in-store zvučna infrastruktura „Moj Radio”, 
              web audio distribucija i P2P režija. Znanje i zanat rođeni u Banja Luci za cijeli region.
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm text-zinc-300 font-medium">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Banja Luka, Bosna i Hercegovina</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:+38765519071" className="hover:text-orange-400 transition-colors">
                  +387 (0)65 519 071 • Siniša Zelić (Direktna linija)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500" />
                <a href="mailto:info@studiotaf.ba" className="hover:text-orange-400 transition-colors">
                  info@studiotaf.ba • podrska@studiotaf.ba
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Studio Nav */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
              Studio & Usluge
            </h4>
            <ul className="space-y-2.5 text-zinc-300 font-medium text-sm">
              <li>
                <button onClick={() => scrollTo("studio-prostor")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Akustika & Studio Prostori
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("balkan-network")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Balkanska Spikerska Mreža (6 Tržišta)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("oprema")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Hardverski Sintisajzeri & Analogni Rack
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("moj-radio")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Moj Radio (In-Store Sistemi & Horne)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("vault")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Klijentski Vault & Master Player
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("live-session")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Studio TAF Live (WebRTC Režija)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("tradicija")} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Tradicija & Projekti (1982–{new Date().getFullYear()})
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: B2B Ecosystem */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
              FLUXA Tehnološki Ekosistem
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Studio TAF je kreativni temelj i inženjerski garant za cjelokupnu FLUXA softversku i hardversku platformu:
            </p>
            <ul className="space-y-2 text-zinc-300 pt-1 text-sm font-medium">
              <li>
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center gap-2 transition-colors font-bold text-white"
                >
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                  <span>FLUXA.ba • Poslovna rješenja i tehnologija</span>
                </a>
              </li>
              <li>
                <span className="text-zinc-400">• FluxaPOS • Maloprodajna kasa bez zastoja</span>
              </li>
              <li>
                <span className="text-zinc-400">• EnterSYS & ARGUS • Kontrola pristupa i tripodi</span>
              </li>
              <li>
                <span className="text-zinc-400">• DokumentArt • DMS, Nabavke & Kripto potpis</span>
              </li>
              <li>
                <span className="text-zinc-400">• SOCCS • Swiss Timing sportska borilišta</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-12 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-5 text-zinc-500 text-xs sm:text-sm">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span>
              © 1982 – {new Date().getFullYear()} <strong className="text-zinc-200 font-bold">Studio TAF</strong>. Sva prava zadržana.
            </span>
            <span
              className="font-mono text-orange-400 select-none tracking-wider px-2.5 py-1 rounded bg-[#12151e] border border-zinc-800 shadow-xs font-bold text-xs"
              title="StudioWEB Release Build (Port 1991)"
            >
              build v1.0.0 • :1991
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-zinc-400 font-medium">Pravi autorski zvuk • Inženjering • Bez kompromisa</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-2xl bg-[#12151e] hover:bg-orange-600 hover:text-white text-orange-400 transition-colors cursor-pointer border border-zinc-800 shadow-xs"
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
