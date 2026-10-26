"use client";

import React from "react";
import { ExternalLink, ArrowUp, Mail, MapPin, Award, Phone } from "lucide-react";
import { APP_CONFIG } from "@/config/appConfig";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#faf8f3] border-t border-stone-200 text-stone-600 text-xs transition-colors">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Col 1: Studio Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 border border-stone-200 rounded-xl shadow-xs">
                <img
                  src="/logos/taf-logo.jpg"
                  alt="Studio TAF"
                  className="h-10 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="font-taf text-2xl text-stone-950 block leading-none">
                  Studio TAF
                </span>
                <span className="text-[11px] text-stone-500 font-mono flex items-center gap-1.5 font-bold mt-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Četiri decenije zvuka & produkcije (1982–{new Date().getFullYear()})</span>
                </span>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed text-xs max-w-md font-light">
              Pravi analogni temelj i digitalna superiornost. Akustički tretirani prostori, 
              namjenska audio produkcija, broadcast standardi i online režija u realnom vremenu.
            </p>

            <div className="space-y-1.5 pt-2 text-[11px] text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>Banja Luka, Bosna i Hercegovina</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <a href="mailto:sinisa.zelic@gmail.com" className="hover:text-amber-600 transition-colors">
                  sinisa.zelic@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <a href="tel:+38751456456" className="hover:text-amber-600 transition-colors">
                  +387 (0) 51 456 456
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Studio Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-950 font-mono">
              Studio & Sekcije
            </h4>
            <ul className="space-y-2 text-stone-600">
              <li>
                <button onClick={() => scrollTo("about")} className="hover:text-amber-600 transition-colors cursor-pointer text-left">
                  O Nama (O Studiju & Timu)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("what-we-do")} className="hover:text-amber-600 transition-colors cursor-pointer text-left">
                  Šta Radimo (Usluge & Produkcija)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("omega")} className="hover:text-red-700 transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span className="text-[#C4001A] font-serif font-black text-xs">Ω</span>
                  <span>Omega / Swiss Timing</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("clients")} className="hover:text-amber-600 transition-colors cursor-pointer text-left">
                  Klijenti & Reference
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("heritage")} className="hover:text-amber-600 transition-colors cursor-pointer text-left">
                  Istorijat (1982–Danas)
                </button>
              </li>
              <li>
                <a href="https://fluxax.eu" target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 font-semibold text-stone-900 transition-colors cursor-pointer text-left flex items-center gap-1">
                  <span>FluxaX Audio & Video Screening</span>
                  <ExternalLink className="w-3 h-3 text-teal-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Švicarsko Partnerstvo */}
          <div className="md:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-800 border border-red-200 text-[10px] font-mono uppercase font-bold tracking-wider">
              <span className="text-[#C4001A] font-serif font-black text-xs leading-none">Ω</span>
              <span>Swiss Timing Zvanični Partner</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Specijalizovano vođenje borilišta i automatizacija plivačkih i sportskih takmičenja uz punu podršku za Quantum Timer, touchpads i live semafore.
            </p>
            <div className="pt-2">
              <a
                href="mailto:sinisa.zelic@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-mono text-xs font-semibold border border-stone-300 shadow-xs transition-all"
              >
                <span>sinisa.zelic@gmail.com</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <span>
              © 1982 – {new Date().getFullYear()} <strong className="text-stone-900 font-semibold">Studio TAF</strong>. Sva prava zadržana.
            </span>
            <span
              className="font-mono text-amber-800 select-none tracking-wider px-2 py-0.5 rounded bg-white border border-stone-200 shadow-xs font-bold"
              title="StudioWEB Verzija"
            >
              build {APP_CONFIG.build}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-stone-600 font-medium hidden md:inline">
              Autorski zvuk • Inženjering • Bez kompromisa
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white hover:bg-stone-950 hover:text-white text-stone-700 transition-colors cursor-pointer border border-stone-200 shadow-xs"
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
