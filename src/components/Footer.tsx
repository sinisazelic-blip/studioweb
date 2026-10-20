"use client";

import React from "react";
import { ExternalLink, ArrowUp, Mail, MapPin, Award } from "lucide-react";
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
                <span className="font-extrabold text-base text-stone-950 font-sans block">
                  Studio <span className="text-orange-600">TAF</span>
                </span>
                <span className="text-[11px] text-stone-500 font-mono flex items-center gap-1.5 font-bold">
                  <Award className="w-3.5 h-3.5 text-orange-600" />
                  <span>Četiri decenije zvuka & produkcije (1982–{new Date().getFullYear()})</span>
                </span>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed text-xs max-w-md font-light">
              Pravi analogni temelj i digitalna superiornost. Akustički tretirani prostori, 
              in-store zvučna B2B infrastruktura sa autonomnim zvučnim stubovima, 
              namjenska audio distribucija i online režija u realnom vremenu.
            </p>

            <div className="space-y-1.5 pt-2 text-[11px] text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                <span>Banja Luka, Bosna i Hercegovina</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-600" />
                <a href="mailto:info@studiotaf.ba" className="hover:text-orange-600 transition-colors">
                  info@studiotaf.ba • podrska@studiotaf.ba
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
                <button onClick={() => scrollTo("about")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  About Us (O Studiju & Timu)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("what-we-do")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  What We Do (Audio Ponuda)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("clients")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  Clients (Referentna Lista)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("moj-radio")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  B2B In-Store & Audio Stubovi
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("timeline")} className="hover:text-orange-600 transition-colors cursor-pointer text-left">
                  Our Story (Hronologija 1982–Danas)
                </button>
              </li>
              <li>
                <a href="/client-portal" className="hover:text-orange-600 font-semibold text-stone-900 transition-colors cursor-pointer text-left block">
                  Klijentski Portal & Video Režija ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Member of Fluxa Group */}
          <div className="md:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-300 text-[10px] font-mono uppercase font-bold tracking-wider">
              <span>Member of Fluxa Group</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Studio TAF je audio kreativni temelj i nosilac zvučne produkcije unutar Fluxa grupacije.
            </p>
            <div className="pt-2">
              <a
                href="https://web.studiotaf.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-mono text-xs font-semibold border border-stone-300 shadow-xs transition-all"
              >
                <span>web.studiotaf.xyz</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
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
              className="font-mono text-orange-700 select-none tracking-wider px-2 py-0.5 rounded bg-white border border-stone-200 shadow-xs font-bold"
              title="StudioWEB Trenutni Build"
            >
              build {APP_CONFIG.build} • :1991
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
