"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, Menu, X, Radio } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOnAir, setIsOnAir] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        const res = await fetch("/api/studio/status");
        if (res.ok) {
          const data = await res.json();
          setIsOnAir(Boolean(data.isOnAir));
        }
      } catch (_) {}
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 3000);
    return () => clearInterval(interval);
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
      {/* Main Light Navigation Bar */}
      <nav
        className={`px-6 sm:px-12 lg:px-20 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm"
            : "bg-white border-b border-stone-200"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Brand Logo & Authentic Custom Font Title */}
          <div
            className="flex items-center gap-3.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex items-center justify-center p-0.5">
              <img
                src="/logos/taf-logo.jpg"
                alt="Studio TAF Logo"
                className="h-10 sm:h-12 w-auto object-contain rounded-md"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-taf text-2xl sm:text-3xl tracking-wide text-stone-950 font-normal leading-none">
                  Studio TAF
                </span>
              </div>
              <div className="text-[11px] text-stone-500 font-medium tracking-wide hidden sm:block mt-0.5">
                A member of Fluxa group • Est. 1982
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-7 text-xs font-bold text-stone-700">
            <button
              onClick={() => scrollTo("what-we-do")}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Šta Radimo
            </button>
            <button
              onClick={() => scrollTo("omega")}
              className="hover:text-red-700 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="text-[#C4001A] font-serif font-black text-xs">Ω</span>
              <span>SwissTiming/Omega</span>
            </button>
            <button
              onClick={() => scrollTo("clients")}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Klijenti & Reference
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              O Nama
            </button>
            <button
              onClick={() => scrollTo("heritage")}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Istorijat (1982–Danas)
            </button>
          </div>

          {/* Right Action: Studio Live Status & FluxaX Redirection */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dynamic Studio Status Indicator */}
            {isOnAir ? (
              <div
                className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600 text-white border border-red-500 text-[10px] font-mono font-bold shadow-md shadow-red-500/30 animate-pulse"
                title="Studio TAF je u režimu aktivnog snimanja • Tišina u etru"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span className="tracking-wide">● REC (Silence)</span>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-[10px] font-mono text-stone-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-bold">STUDIO STANDBY</span>
              </div>
            )}

            {/* FluxaX Portal Link */}
            <a
              href="https://x.fluxa.ba"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
              title="FluxaX Audio & Video Screening Platforma (x.fluxa.ba)"
            >
              <Radio className="w-3.5 h-3.5 text-teal-300" />
              <span>FluxaX</span>
              <ExternalLink className="w-3 h-3 text-teal-300 ml-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-stone-100 text-stone-800 border border-stone-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden pt-4 pb-2 border-t border-stone-200 mt-3 space-y-2 text-sm text-stone-700">
            <button
              onClick={() => scrollTo("what-we-do")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center gap-2 font-medium"
            >
              <span>Šta Radimo</span>
            </button>
            <button
              onClick={() => scrollTo("omega")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center gap-2 font-medium"
            >
              <span className="text-[#C4001A] font-serif font-black text-xs">Ω</span>
              <span>SwissTiming/Omega</span>
            </button>
            <button
              onClick={() => scrollTo("clients")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center gap-2 font-medium"
            >
              <span>Klijenti & Reference</span>
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center gap-2 font-medium"
            >
              <span>O Nama</span>
            </button>
            <button
              onClick={() => scrollTo("heritage")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center gap-2 font-medium"
            >
              <span>Istorijat (1982–Danas)</span>
            </button>
            <div className="pt-2">
              <a
                href="https://x.fluxa.ba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs text-center flex items-center justify-center gap-2"
              >
                <Radio className="w-3.5 h-3.5 text-teal-300" />
                <span>Otvori FluxaX</span>
                <ExternalLink className="w-3.5 h-3.5 text-teal-300" />
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="h-4 w-full bg-gradient-to-b from-black/15 via-black/5 to-transparent pointer-events-none absolute -bottom-4 left-0" />
    </header>
  );
}
