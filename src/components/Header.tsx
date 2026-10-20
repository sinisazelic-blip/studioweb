"use client";

import React, { useState, useEffect } from "react";
import { Volume2, Radio, Server, Mic2, ExternalLink, ArrowRight, Menu, X, Disc, PhoneCall, Sparkles, Lock } from "lucide-react";

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
      {/* Top Banner: Member of Fluxa Group - Light seamlessly integrated into Header */}
      <div className="bg-[#f8f9fa] border-b border-stone-200/80 text-[11px] text-stone-600 py-1.5 px-6 sm:px-12 lg:px-16 transition-colors">
        <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between gap-4">
          {/* Across the width: Member of Fluxa Group */}
          <div className="flex-1 text-center sm:text-left">
            <span className="font-mono text-xs tracking-widest uppercase font-bold text-stone-700">
              Member of Fluxa Group
            </span>
          </div>

          {/* Right Top Corner: Direct Link to web.studiotaf.xyz */}
          <div>
            <a
              href="https://web.studiotaf.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs font-mono font-semibold transition-all shadow-xs"
              title="Posjetite web.studiotaf.xyz"
            >
              <span>web.studiotaf.xyz</span>
              <ExternalLink className="w-3 h-3 text-orange-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Light Navigation Bar - Pure White / Light Shell so TAF Logo Blends Naturally */}
      <nav
        className={`px-6 sm:px-12 lg:px-16 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm"
            : "bg-white border-b border-stone-200"
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between">
          {/* Brand Logo & Heritage Title */}
          <div
            className="flex items-center gap-3.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Natural integration of Studio TAF logo on light background */}
            <div className="flex items-center justify-center p-0.5">
              <img
                src="/logos/taf-logo.jpg"
                alt="Studio TAF Logo"
                className="h-11 sm:h-12 w-auto object-contain rounded-md"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-stone-950 font-sans">
                  Studio <span className="text-orange-600">TAF</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-300 font-bold uppercase tracking-wider">
                  Member of Fluxa Group
                </span>
              </div>
              <div className="text-[11px] text-stone-500 font-medium tracking-wide hidden sm:block">
                Master Audio Produkcija & Režija od 1982.
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-7 text-xs font-bold text-stone-700">
            <button
              onClick={() => scrollTo("about")}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollTo("what-we-do")}
              className="hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>What We Do</span>
            </button>
            <button
              onClick={() => scrollTo("clients")}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Clients
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Radio className="w-3.5 h-3.5 text-orange-600" />
              <span>B2B In-Store & Stubovi</span>
            </button>
            <button
              onClick={() => scrollTo("timeline")}
              className="hover:text-orange-600 transition-colors cursor-pointer"
            >
              Our Story
            </button>
          </div>

          {/* Right Action: Studio Live Status & Client Portal Link */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Retro Analog Needle / VU Status */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-300 text-[10px] font-mono text-stone-800">
              <span className="text-stone-500 font-bold">STUDIO:</span>
              <div className="flex items-center gap-0.5">
                <span className="w-1.5 h-2.5 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-3.5 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-3 rounded-xs bg-emerald-500" />
                <span className="w-1.5 h-4 rounded-xs bg-amber-500" />
                <span className="w-1.5 h-2.5 rounded-xs bg-red-500 animate-pulse" />
              </div>
              <span className="text-red-600 font-bold ml-1">ON AIR</span>
            </div>

            <a
              href="/client-portal"
              className="px-5 py-2.5 rounded-xl bg-stone-950 hover:bg-stone-800 text-white font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Klijent Portal</span>
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
              onClick={() => scrollTo("about")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>About Us</span>
            </button>
            <button
              onClick={() => scrollTo("what-we-do")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>What We Do</span>
            </button>
            <button
              onClick={() => scrollTo("clients")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>Clients</span>
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>B2B In-Store & Audio Stubovi</span>
            </button>
            <button
              onClick={() => scrollTo("timeline")}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 flex items-center gap-2"
            >
              <span>Our Story (1982–Danas)</span>
            </button>
            <div className="pt-2">
              <a
                href="/client-portal"
                className="w-full py-2.5 rounded-xl bg-stone-950 hover:bg-stone-800 text-white font-bold text-xs text-center flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Otvori Klijent Portal</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Soft gradient / raster transition into the dark hero background */}
      <div className="h-5 w-full bg-gradient-to-b from-black/20 via-black/5 to-transparent pointer-events-none absolute -bottom-5 left-0" />
    </header>
  );
}
