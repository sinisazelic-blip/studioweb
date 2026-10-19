"use client";

import React from "react";
import { Disc, ExternalLink, ArrowUp, Mail, Phone, MapPin, Radio, Server, Mic } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070a12] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Studio Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 p-1.5 rounded-xl border border-amber-500/30">
                <img
                  src="/logos/taf-logo.jpg"
                  alt="Studio TAF"
                  className="h-10 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="font-extrabold text-base text-white font-sans block">
                  Studio <span className="text-amber-400">TAF</span>
                </span>
                <span className="text-[11px] text-amber-300 font-mono">
                  Četiri decenije zvuka & produkcije (1982–{new Date().getFullYear()})
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Autorska muzička produkcija, 10 hardverskih sintisajzera, broadcast zvučni sistemi „Moj Radio”, 
              web audio distribucija i P2P daljinska režija. Znanje i zanat stvoreni u Banja Luci.
            </p>

            <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Banja Luka, Bosna i Hercegovina</span>
              </div>
            </div>
          </div>

          {/* Col 2: Studio Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Audio Divizija
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => scrollTo("oprema")} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Hardverski Studio & Sintovi
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("moj-radio")} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Moj Radio (In-Store Sistemi)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("vault")} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Klijentski Distributivni Vault
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("live-session")} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Studio TAF Live (WebRTC Režija)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("tradicija")} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                  Tradicija & Projekti (1982–{new Date().getFullYear()})
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: B2B Ecosystem */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              FLUXA Poslovni Ekosistem
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Studio TAF je kreativni temelj i inženjerski garant za cjelokupnu FLUXA softversku platformu:
            </p>
            <ul className="space-y-1.5 text-slate-400 pt-1">
              <li>
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  <span>FLUXA.ba • Poslovna rješenja i tehnologija</span>
                </a>
              </li>
              <li>
                <span className="text-slate-500">• FluxaPOS • Maloprodajna kasa bez zastoja</span>
              </li>
              <li>
                <span className="text-slate-500">• EnterSYS & ARGUS • Kontrola pristupa i tripodi</span>
              </li>
              <li>
                <span className="text-slate-500">• DokumentArt • DMS & Kripto potpis</span>
              </li>
              <li>
                <span className="text-slate-500">• SOCCS • Swiss Timing sportska borilišta</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <span>
              © 1982 – {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">Studio TAF</strong>. Sva prava zadržana.
            </span>
            <span
              className="font-mono text-amber-400/70 select-none tracking-wider px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800"
              title="StudioWEB Release Build (Port 1991)"
            >
              build v1.0.0 • :1991
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Pravi zvuk • Inženjering • Bez kompromisa</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 transition-colors cursor-pointer border border-slate-800"
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
