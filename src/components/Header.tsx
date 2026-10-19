"use client";

import React, { useState, useEffect } from "react";
import { Volume2, Radio, Server, Mic2, ExternalLink, ArrowRight, Menu, X, Disc, PhoneCall, Sparkles } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner: Peaceful Studio Postcard Strip */}
      <div className="bg-[#050608] border-b border-zinc-800/80 text-[11px] text-zinc-400 py-2.5 px-6 sm:px-12 lg:px-16">
        <div className="w-full max-w-[1700px] mx-auto flex items-center justify-between flex-wrap gap-2">
          {/* Left: Artist & Studio Seal */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-semibold text-zinc-200">SINIŠA ZELIĆ • STUDIO TAF BANJA LUKA</span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-400 font-mono">40+ godina u muzici, notama i inženjeringu (1982–{new Date().getFullYear()})</span>
          </div>

          {/* Right: B2B Ecosystem & Direct Desk */}
          <div className="flex items-center gap-5 text-xs font-medium">
            <a
              href="tel:+38765519071"
              className="text-zinc-300 hover:text-amber-300 flex items-center gap-1.5 font-mono transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Siniša Zelić: (+387 65 519 071)</span>
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors"
              title="Softverski ekosistem koji je izrastao iz Studija TAF"
            >
              <span>Softver & Ekosistem: FLUXA.ba</span>
              <ExternalLink className="w-3 h-3 text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Studio Navigation Bar */}
      <nav
        className={`px-6 sm:px-12 lg:px-16 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-[#090b10]/95 backdrop-blur-md border-b border-zinc-800 shadow-xl"
            : "bg-[#090b10]/85 backdrop-blur-md border-b border-zinc-800/60"
        }`}
      >
        <div className="w-full max-w-[1700px] mx-auto flex items-center justify-between">
          {/* Brand Logo & Heritage Title */}
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="bg-[#12151e] p-2 rounded-2xl border border-zinc-800 group-hover:border-amber-500 transition-colors flex items-center justify-center">
              <img
                src="/logos/taf-logo.jpg"
                alt="Studio TAF Logo"
                className="h-11 sm:h-13 w-auto object-contain rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white font-sans">
                  Studio <span className="text-amber-400">TAF</span>
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/30 font-bold uppercase tracking-wider">
                  Banja Luka
                </span>
              </div>
              <div className="text-xs text-zinc-400 font-mono tracking-wide hidden sm:block">
                Muzička & Audio Ostavština • 1982–{new Date().getFullYear()}
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-8 text-sm font-semibold text-zinc-300">
            <button
              onClick={() => scrollTo("kreativni-nered")}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Kreativni Nered
            </button>
            <button
              onClick={() => scrollTo("studio-prostor")}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Akustika & Sobe
            </button>
            <button
              onClick={() => scrollTo("oprema")}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              10 Sintova & Hardver
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Radio className="w-4 h-4 text-amber-400" />
              <span>In-Store Sistemi</span>
            </button>
            <button
              onClick={() => scrollTo("tradicija")}
              className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Disc className="w-4 h-4 text-amber-400" />
              <span>40 Godina Priče</span>
            </button>
          </div>

          {/* Right Action: Studio Indicator & Contact */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#12151e] border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-zinc-400">STUDIO AKTIVAN</span>
            </div>

            <a
              href="tel:+38765519071"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-stone-950" />
              <span>Pozovi Studio</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-[#12151e] text-zinc-200 border border-zinc-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden pt-4 pb-2 border-t border-stone-200 mt-3 space-y-2 text-sm text-stone-800">
            <button
              onClick={() => scrollTo("studio-prostor")}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>🎙️ Prostor, Akustika & Režija</span>
            </button>
            <button
              onClick={() => scrollTo("balkan-network")}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>✨ Balkanska Voice & Dubbing Mreža</span>
            </button>
            <button
              onClick={() => scrollTo("oprema")}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>🎹 Hardver, 10 Sintova & Lampaši</span>
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>📻 Moj Radio (In-Store Sistemi)</span>
            </button>
            <button
              onClick={() => scrollTo("vault")}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>🗄️ Klijentski Audio Vault & Distribucija</span>
            </button>
            <button
              onClick={() => scrollTo("live-session")}
              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>🔴 Live Režija (WebRTC Opus)</span>
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollTo("vault")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm text-center"
              >
                Otvori Klijentski Hab
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
