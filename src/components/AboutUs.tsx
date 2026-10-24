"use client";

import React, { useState, useEffect } from "react";
import { Volume2, Music2, ShoppingBag, Landmark, Megaphone, Building2, Star, CheckCircle } from "lucide-react";

export default function AboutUs() {
  const [activeCard, setActiveCard] = useState<0 | 1>(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev === 0 ? 1 : 0));
    }, 15000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-fixed bg-cover bg-center overflow-hidden text-white border-b border-stone-800"
      style={{
        backgroundImage: "url('/images/equipment/services-tubes.jpg')",
      }}
    >
      {/* Dark Studio Atmosphere Overlay */}
      <div className="absolute inset-0 bg-stone-950/85 backdrop-blur-[3px] pointer-events-none" />

      {/* Warm ambient studio lighting halos */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[300px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Četiri decenije akumuliranog zanata i zvučne discipline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight font-sans">
            O Nama • <span className="font-semibold text-amber-400">Studio TAF</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl mx-auto font-light">
            Od analognog snimanja osamdesetih godina do savremenih digitalnih i mrežnih sistema — tradicija, pouzdanost i pedantnost u svakom sekundu zvučnog zapisa.
          </p>
        </div>

        {/* 2-Pill Switcher */}
        <div className="max-w-xl mx-auto mb-10 flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setActiveCard(0)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCard === 0
                  ? "bg-amber-500 text-stone-950 shadow-md scale-[1.02]"
                  : "text-stone-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>🎙️</span>
              <span>1. Audio Centar & Istorijat</span>
            </button>

            <button
              onClick={() => setActiveCard(1)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCard === 1
                  ? "bg-amber-500 text-stone-950 shadow-md scale-[1.02]"
                  : "text-stone-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>🎸</span>
              <span>2. Muzička Era & Zanat</span>
            </button>
          </div>

          <div className="text-[11px] text-stone-400 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>
              {isPaused
                ? "Pauzirano (čitanje u toku)"
                : "Automatska izmjena svakih 15s • prelazak mišem pauzira"}
            </span>
          </div>
        </div>

        {/* Single Centered Semi-Transparent Heritage Box */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-4xl mx-auto mb-16"
        >
          {activeCard === 0 ? (
            /* Card 1: Studio & Audio Heritage */
            <div className="bg-black/75 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl flex flex-col justify-between transition-all duration-500">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 pb-6 border-b border-white/10">
                  <div className="inline-flex items-center justify-start shrink-0 bg-white p-2 rounded-2xl shadow-sm border border-stone-200 w-fit">
                    <img
                      src="/logos/taf-logo.jpg"
                      alt="Studio TAF Logo"
                      className="h-14 sm:h-16 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Studio TAF • Glas i Zvuk koji Traje
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-amber-300 bg-amber-950/60 px-3 py-0.5 rounded-full border border-amber-500/40 font-mono">
                        Banja Luka • 4 decenije kontinuiteta
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-stone-200 text-sm sm:text-base leading-relaxed font-light mb-8">
                  <p>
                    Studio TAF je nastao iz četiri decenije profesionalnog rada sa zvukom, akustikom i radiodifuzijom. Osnovan na principima pedantne zvučne čistoće, postao je regionalni sinonim za vrhunsku audio postprodukciju, snimanje reklama, radio i TV džinglova, te namjenske muzike.
                  </p>
                  <p>
                    Kroz namjenski građenu gluvozvučnu sobu sa linearnom akustikom i monitoringom, studio povezuje vrhunske lampaške i tranzistorske mikrofone (Neumann, AKG, Shure), RME hardverske interfejse i Chris Lord-Alge analogni režijski procesing.
                  </p>
                  <p className="text-amber-200 font-normal bg-amber-950/40 p-4 rounded-2xl border border-amber-500/30">
                    Preko 6.012 realizovanih komercijalnih projekata za vodeće domaće i regionalne brendove (mtel, Ledo, Plazma, Smoki, Chipsi, Garnier, bankarski sektor) svjedoče o nepokolebljivoj tačnosti i povjerenju koje traje decenijama.
                  </p>
                </div>
              </div>

              {/* Metric Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="text-[11px] text-stone-400 font-medium">Početak Rada</div>
                  <div className="text-sm font-bold text-white font-mono">1982. godina</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="text-[11px] text-stone-400 font-medium">Studio TAF</div>
                  <div className="text-sm font-bold text-white font-mono">20+ godina</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="text-[11px] text-stone-400 font-medium">Realizovani Projekti</div>
                  <div className="text-sm font-bold text-amber-400 font-mono flex items-center gap-1">
                    <span>6.012</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="text-[11px] text-stone-400 font-medium">Baza Spikera</div>
                  <div className="text-sm font-bold text-white">Regionalna (6 tržišta)</div>
                </div>
              </div>
            </div>
          ) : (
            /* Card 2: Music Era & Studio Discipline */
            <div className="bg-black/75 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl flex flex-col justify-between transition-all duration-500">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold mb-4">
                  <Music2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Zlatno doba autorskog stvaralaštva i disciplina magnetofonske trake</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Muzička Era i Beskompromisna Disciplina
                </h3>

                <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  Prije ere digitalnog „copy-paste“ montažerstva, snimanje zvuka na višekanalne magnetofonske trake zahtijevalo je apsolutnu koncentraciju. Svaka sekvenca morala je biti odsvirana i otpjevana bez greške. Ta stečena analogna disciplina danas čini razliku između prosječnog i savršenog audio miksa.
                </p>

                <div className="space-y-3 mb-6">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    Istaknute Saradnje & Producentura:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Sanja Čolić Zelić",
                      "Massimo Savić",
                      "Đavoli (Neno Belan)",
                      "Dino Dvornik",
                      "Denis & Denis",
                      "Oliver Mandić",
                      "Big Bang (Kultni BL rock bend)",
                      "Narodno & Dječije Pozorište",
                      "Filmski Sound Design",
                      "Revelation (Boris Relja project)",
                      "Radio (BL Pop-Rock)",
                      "Kovalsky Project",
                      "BasDans",
                      "Zvanične Sportske Himne",
                    ].map((artist, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-stone-200 font-medium transition-colors"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 leading-relaxed font-normal">
                Iskustvo rada sa ovim muzičkim velikanima utkalo je u Studio TAF osjećaj za dinamiku, toplinu i emocionalnu težinu zvučne poruke.
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
