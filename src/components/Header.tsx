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
      {/* Top Banner: Regional Balkan Network Bar (TikTak/Petar Style) */}
      <div className="bg-[#07080b] border-b border-zinc-800/80 text-[11px] text-zinc-300 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          {/* Left: Regional Flags & Authority */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-base tracking-wider" title="Pokrivenost svih regionalnih tržišta">
              <span>🇧🇦</span>
              <span>🇭🇷</span>
              <span>🇷🇸</span>
              <span>🇲🇪</span>
              <span>🇲🇰</span>
              <span>🇸🇮</span>
            </span>
            <span className="text-zinc-600">|</span>
            <span className="font-semibold text-white">Regionalni Voice-Over, Dubbing & Audio Režija</span>
            <span className="hidden md:inline text-zinc-600">•</span>
            <span className="hidden md:inline text-zinc-400">40+ godina kontinuiteta (1982–{new Date().getFullYear()})</span>
          </div>

          {/* Right: B2B Enterprise Link & Direct Studio Wire */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+38765519071"
              className="text-zinc-300 hover:text-orange-400 flex items-center gap-1.5 font-mono transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
              <span>Studio Desk: Banja Luka</span>
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-sky-400 flex items-center gap-1.5 transition-colors font-medium"
              title="Poslovna rješenja: fiskalni sistemi, kontrola pristupa i DMS"
            >
              <span>B2B Softver: FLUXA.ba</span>
              <ExternalLink className="w-3 h-3 text-sky-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav
        className={`px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          scrolled
            ? "bg-[#0c0d12]/95 backdrop-blur-md border-b border-zinc-800 shadow-2xl"
            : "bg-[#0c0d12]/80 backdrop-blur-md border-b border-zinc-800/60"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Heritage Title */}
          <div
            className="flex items-center gap-3.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="bg-[#14161f] p-1.5 rounded-2xl border border-zinc-700/60 shadow-md group-hover:border-orange-500 transition-colors flex items-center justify-center">
              <img
                src="/logos/taf-logo.jpg"
                alt="Studio TAF Logo"
                className="h-10 sm:h-12 w-auto object-contain rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-sans">
                  Studio <span className="text-orange-500">TAF</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold uppercase">
                  Banja Luka
                </span>
              </div>
              <div className="text-[11px] text-zinc-400 font-medium tracking-wide hidden sm:block">
                Master Audio Produkcija & Režija od 1982.
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-7 text-xs font-semibold text-zinc-300">
            <button
              onClick={() => scrollTo("studio-prostor")}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Prostor & Akustika
            </button>
            <button
              onClick={() => scrollTo("balkan-network")}
              className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Voice & Dubbing</span>
            </button>
            <button
              onClick={() => scrollTo("oprema")}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Hardver & 10 Sintova
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Radio className="w-3.5 h-3.5 text-orange-400" />
              <span>Moj Radio (In-Store)</span>
            </button>
            <button
              onClick={() => scrollTo("vault")}
              className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Server className="w-3.5 h-3.5 text-orange-400" />
              <span>Klijentski Vault</span>
            </button>
            <button
              onClick={() => scrollTo("live-session")}
              className="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Mic2 className="w-3.5 h-3.5 text-rose-500" />
              <span>Live Režija</span>
            </button>
          </div>

          {/* Right Action: Analog VU Indicator + Instant Booking CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Retro Analog Needle / VU Status */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#13151b] border border-zinc-800 text-[10px] font-mono text-zinc-300">
              <span className="text-zinc-400 font-bold">STUDIO STATUS:</span>
              <div className="flex items-center gap-0.5">
                <span className="w-1.5 h-2.5 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-3.5 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-3 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-4 rounded-xs bg-amber-400" />
                <span className="w-1.5 h-2.5 rounded-xs bg-orange-500 animate-pulse" />
              </div>
              <span className="text-white font-bold ml-1">ON AIR</span>
            </div>

            <button
              onClick={() => scrollTo("vault")}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs tracking-wide shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <span>Klijentski Hab</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#14161f] text-zinc-200 border border-zinc-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden pt-4 pb-2 border-t border-zinc-800/80 mt-3 space-y-2 text-sm text-zinc-200">
            <button
              onClick={() => scrollTo("studio-prostor")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#1a1d26] flex items-center gap-2"
            >
              <span>🎙️ Prostor, Akustika & Režija</span>
            </button>
            <button
              onClick={() => scrollTo("balkan-network")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#1a1d26] flex items-center gap-2"
            >
              <span>✨ Balkanska Voice & Dubbing Mreža</span>
            </button>
            <button
              onClick={() => scrollTo("oprema")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#1a1d26] flex items-center gap-2"
            >
              <span>🎹 Hardver, 10 Sintova & Lampaši</span>
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#1a1d26] flex items-center gap-2"
            >
              <span>📻 Moj Radio (In-Store Sistemi)</span>
            </button>
            <button
              onClick={() => scrollTo("vault")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#1a1d26] flex items-center gap-2"
            >
              <span>🗄️ Klijentski Audio Vault & Distribucija</span>
            </button>
            <button
              onClick={() => scrollTo("live-session")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#1a1d26] flex items-center gap-2"
            >
              <span>🔴 Live Režija (WebRTC Opus)</span>
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollTo("vault")}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs text-center"
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
