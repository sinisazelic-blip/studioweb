"use client";

import React, { useState, useEffect } from "react";
import { Volume2, Radio, Server, Mic2, ExternalLink, ArrowRight, Menu, X, Disc } from "lucide-react";

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
      {/* Top Banner: Ecosystem Bridge */}
      <div className="bg-[#070a12] border-b border-amber-950/40 text-[11px] text-amber-200/70 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-amber-300 font-semibold">STUDIO TAF BANJA LUKA</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-400">Autorska muzička produkcija, akustika & broadcast inženjering od 1982.</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              title="Pređite na FLUXA Enterprise poslovni portal"
            >
              <span>Poslovna rješenja: FLUXA.ba</span>
              <ExternalLink className="w-3 h-3 text-amber-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          scrolled
            ? "bg-[#0c101d]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl"
            : "bg-[#0b0f19]/80 backdrop-blur-sm border-b border-slate-800/40"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="bg-slate-900/90 p-1.5 rounded-xl border border-amber-500/30 shadow-md flex items-center justify-center">
              <img
                src="/logos/taf-logo.jpg"
                alt="Studio TAF Logo"
                className="h-9 sm:h-11 w-auto object-contain rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-sans">
                  Studio <span className="text-amber-400">TAF</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold uppercase">
                  Est. 1982
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium tracking-wide hidden sm:block">
                Sound Heritage & Creative Audio Hub
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300">
            <button
              onClick={() => scrollTo("oprema")}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Disc className="w-3.5 h-3.5 text-amber-500" />
              <span>Oprema & Sintovi</span>
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Radio className="w-3.5 h-3.5 text-emerald-400" />
              <span>Moj Radio (In-Store)</span>
            </button>
            <button
              onClick={() => scrollTo("vault")}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Server className="w-3.5 h-3.5 text-sky-400" />
              <span>Klijentski Vault</span>
            </button>
            <button
              onClick={() => scrollTo("live-session")}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Mic2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Live Režija</span>
            </button>
            <button
              onClick={() => scrollTo("tradicija")}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Tradicija & Projekti</span>
            </button>
          </div>

          {/* Right Action Buttons & VU Indicator */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live VU Status Pill */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
              <span className="text-slate-500">VU:</span>
              <div className="flex items-center gap-0.5">
                <span className="w-1 h-2 rounded-xs bg-emerald-500" />
                <span className="w-1 h-3 rounded-xs bg-emerald-500" />
                <span className="w-1 h-2.5 rounded-xs bg-emerald-500" />
                <span className="w-1 h-3.5 rounded-xs bg-amber-400" />
                <span className="w-1 h-2 rounded-xs bg-rose-500 animate-pulse" />
              </div>
              <span className="text-amber-400 font-bold ml-1">MASTER 0dB</span>
            </div>

            <button
              onClick={() => scrollTo("vault")}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Klijentski Hab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-slate-800/80 mt-3 space-y-2 text-sm">
            <button
              onClick={() => scrollTo("oprema")}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 flex items-center gap-2"
            >
              <Disc className="w-4 h-4 text-amber-500" />
              <span>Oprema & Hardver</span>
            </button>
            <button
              onClick={() => scrollTo("moj-radio")}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 flex items-center gap-2"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
              <span>Moj Radio (In-Store Sistemi)</span>
            </button>
            <button
              onClick={() => scrollTo("vault")}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 flex items-center gap-2"
            >
              <Server className="w-4 h-4 text-sky-400" />
              <span>Klijentski Audio Vault</span>
            </button>
            <button
              onClick={() => scrollTo("live-session")}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 flex items-center gap-2"
            >
              <Mic2 className="w-4 h-4 text-rose-400" />
              <span>Live Režija (Remote)</span>
            </button>
            <button
              onClick={() => scrollTo("tradicija")}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4 text-purple-400" />
              <span>Tradicija & Projekti (1982–2026)</span>
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollTo("vault")}
                className="w-full py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs text-center"
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
