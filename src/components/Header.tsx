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
      <div className="bg-[#f6f3eb] border-b border-stone-200 text-[11px] text-stone-700 py-2.5 px-6 sm:px-12 lg:px-16">
        <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between flex-wrap gap-2">
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
            <span className="text-stone-300">|</span>
            <span className="font-bold text-stone-900">Regionalni Voice-Over, Dubbing & Audio Režija</span>
            <span className="hidden md:inline text-stone-400">•</span>
            <span className="hidden md:inline text-stone-600 font-medium">40+ godina kontinuiteta (1982–{new Date().getFullYear()})</span>
          </div>

          {/* Right: B2B Enterprise Link & Direct Studio Wire */}
          <div className="flex items-center gap-5 text-xs font-medium">
            <a
              href="tel:+38765519071"
              className="text-stone-800 hover:text-orange-600 flex items-center gap-1.5 font-mono transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
              <span>Studio Desk: Banja Luka (+387 65 519 071)</span>
            </a>
            <span className="text-stone-300">|</span>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
              title="Poslovna rješenja: fiskalni sistemi, kontrola pristupa i DMS"
            >
              <span>B2B Softver: FLUXA.ba</span>
              <ExternalLink className="w-3 h-3 text-blue-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Bright Navigation Bar - Wide Airy Container */}
      <nav
        className={`px-6 sm:px-12 lg:px-16 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-md"
            : "bg-white/90 backdrop-blur-md border-b border-stone-200/80"
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between">
          {/* Brand Logo & Heritage Title */}
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="bg-stone-50 p-2 rounded-2xl border border-stone-200 shadow-xs group-hover:border-orange-500 transition-colors flex items-center justify-center">
              <img
                src="/logos/taf-logo.jpg"
                alt="Studio TAF Logo"
                className="h-11 sm:h-13 w-auto object-contain rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-stone-950 font-sans">
                  Studio <span className="text-orange-600">TAF</span>
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200 font-bold uppercase">
                  Banja Luka
                </span>
              </div>
              <div className="text-xs text-stone-500 font-medium tracking-wide hidden sm:block">
                Master Audio Produkcija & Režija od 1982.
              </div>
            </div>
          </div>

          {/* Desktop Nav Links with more breathing room */}
          <div className="hidden xl:flex items-center gap-8 text-sm font-bold text-stone-700">
            <button
              onClick={() => scrollTo("studio-prostor")}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Prostor & Akustika
            </button>
            <button
              onClick={() => scrollTo("balkan-network")}
              className="hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Voice & Dubbing</span>
            </button>
            <button
              onClick={() => scrollTo("oprema")}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Hardver & 10 Sintova
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Radio className="w-4 h-4 text-orange-600" />
              <span>Moj Radio (In-Store)</span>
            </button>
            <button
              onClick={() => scrollTo("vault")}
              className="hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Server className="w-4 h-4 text-orange-600" />
              <span>Klijentski Vault</span>
            </button>
            <button
              onClick={() => scrollTo("live-session")}
              className="hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Mic2 className="w-4 h-4 text-rose-500" />
              <span>Live Režija</span>
            </button>
          </div>

          {/* Right Action: Analog VU Indicator + Instant Booking CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Retro Analog Needle / VU Status */}
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono text-stone-800">
              <span className="text-stone-500 font-bold">STATUS:</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-3 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-4 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-3.5 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-4.5 rounded-xs bg-amber-500" />
                <span className="w-1.5 h-3 rounded-xs bg-orange-600 animate-pulse" />
              </div>
              <span className="text-orange-700 font-bold ml-1">ON AIR</span>
            </div>

            <button
              onClick={() => scrollTo("vault")}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm tracking-wide shadow-md shadow-orange-500/25 transition-all cursor-pointer flex items-center gap-2.5 group"
            >
              <span>Klijentski Hab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-stone-100 text-stone-800 border border-stone-200"
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
