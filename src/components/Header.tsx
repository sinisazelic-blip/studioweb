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
      <div className="bg-[#100a07] border-b border-amber-950/60 text-[11px] text-amber-200/80 py-2 px-4 sm:px-8">
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
            <span className="text-amber-500/60">|</span>
            <span className="font-semibold text-amber-400">Regionalni Voice-Over, Dubbing & Audio Režija</span>
            <span className="hidden md:inline text-amber-200/50">•</span>
            <span className="hidden md:inline text-amber-100/70">40+ godina kontinuiteta (1982–{new Date().getFullYear()})</span>
          </div>

          {/* Right: B2B Enterprise Link & Direct Studio Wire */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+38765510000"
              className="text-amber-300 hover:text-white flex items-center gap-1.5 font-mono transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-studio-500" />
              <span>Studio Desk: Banja Luka</span>
            </a>
            <span className="text-amber-900">|</span>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200/80 hover:text-white flex items-center gap-1 transition-colors"
              title="Poslovna rješenja: fiskalni sistemi, kontrola pristupa i DMS"
            >
              <span>B2B Softver: FLUXA.ba</span>
              <ExternalLink className="w-3 h-3 text-studio-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav
        className={`px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          scrolled
            ? "bg-[#18110b]/92 backdrop-blur-md border-b border-amber-900/40 shadow-2xl"
            : "bg-[#140e0a]/85 backdrop-blur-md border-b border-amber-950/40"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Heritage Title */}
          <div
            className="flex items-center gap-3.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="bg-[#1f150e] p-1.5 rounded-2xl border border-amber-500/40 shadow-md group-hover:border-studio-500 transition-colors flex items-center justify-center">
              <img
                src="/logos/taf-logo.jpg"
                alt="Studio TAF Logo"
                className="h-10 sm:h-12 w-auto object-contain rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white font-sans">
                  Studio <span className="text-studio-500">TAF</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-studio-500/20 border border-studio-500/40 text-studio-400 font-bold uppercase">
                  Banja Luka
                </span>
              </div>
              <div className="text-[11px] text-amber-200/70 font-medium tracking-wide hidden sm:block">
                Master Audio Produkcija & Režija od 1982.
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-7 text-xs font-semibold text-amber-100/80">
            <button
              onClick={() => scrollTo("studio-prostor")}
              className="hover:text-studio-400 transition-colors cursor-pointer"
            >
              Prostor & Akustika
            </button>
            <button
              onClick={() => scrollTo("balkan-network")}
              className="hover:text-studio-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-studio-500" />
              <span>Voice & Dubbing</span>
            </button>
            <button
              onClick={() => scrollTo("oprema")}
              className="hover:text-studio-400 transition-colors cursor-pointer"
            >
              Hardver & 10 Sintova
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="hover:text-studio-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Radio className="w-3.5 h-3.5 text-amber-400" />
              <span>Moj Radio (In-Store)</span>
            </button>
            <button
              onClick={() => scrollTo("vault")}
              className="hover:text-studio-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Server className="w-3.5 h-3.5 text-amber-400" />
              <span>Klijentski Vault</span>
            </button>
            <button
              onClick={() => scrollTo("live-session")}
              className="hover:text-studio-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Mic2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Live Režija</span>
            </button>
          </div>

          {/* Right Action: Analog VU Indicator + Instant Booking CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Retro Analog Needle / VU Status */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1b120c] border border-amber-900/50 text-[10px] font-mono text-amber-200">
              <span className="text-amber-500 font-bold">STUDIO STATUS:</span>
              <div className="flex items-center gap-0.5">
                <span className="w-1.5 h-2.5 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-3.5 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-3 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-4 rounded-xs bg-amber-400" />
                <span className="w-1.5 h-2.5 rounded-xs bg-studio-500 animate-pulse" />
              </div>
              <span className="text-white font-bold ml-1">ON AIR</span>
            </div>

            <button
              onClick={() => scrollTo("vault")}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-studio-500 to-amber-500 hover:from-studio-600 hover:to-amber-600 text-white font-bold text-xs tracking-wide shadow-lg shadow-studio-500/25 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <span>Klijentski Hab</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#22160e] text-amber-200 border border-amber-900/50"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden pt-4 pb-2 border-t border-amber-950/60 mt-3 space-y-2 text-sm text-amber-100">
            <button
              onClick={() => scrollTo("studio-prostor")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#20150d] flex items-center gap-2"
            >
              <span>🎙️ Prostor, Akustika & Režija</span>
            </button>
            <button
              onClick={() => scrollTo("balkan-network")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#20150d] flex items-center gap-2"
            >
              <span>✨ Balkanska Voice & Dubbing Mreža</span>
            </button>
            <button
              onClick={() => scrollTo("oprema")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#20150d] flex items-center gap-2"
            >
              <span>🎹 Hardver, 10 Sintova & Lampaši</span>
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#20150d] flex items-center gap-2"
            >
              <span>📻 Moj Radio (In-Store Sistemi)</span>
            </button>
            <button
              onClick={() => scrollTo("vault")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#20150d] flex items-center gap-2"
            >
              <span>🗄️ Klijentski Audio Vault & Distribucija</span>
            </button>
            <button
              onClick={() => scrollTo("live-session")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#20150d] flex items-center gap-2"
            >
              <span>🔴 Live Režija (WebRTC Opus)</span>
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollTo("vault")}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-studio-500 to-amber-500 text-white font-bold text-xs text-center"
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
