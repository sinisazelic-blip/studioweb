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
    <section id="about" className="py-24 sm:py-32 bg-[#faf8f3] text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      {/* Light warm ambient glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[300px] bg-amber-200/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[300px] bg-orange-200/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold tracking-wide mb-4 shadow-xs">
            <Volume2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Četiri decenije akumuliranog zanata i zvučne discipline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-stone-950 tracking-tight font-sans">
            O Nama • <span className="font-semibold text-amber-600">Studio TAF</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl mx-auto font-normal">
            Od analognog snimanja osamdesetih godina do savremenih digitalnih i mrežnih sistema — tradicija, pouzdanost i pedantnost u svakom sekundu zvučnog zapisa.
          </p>
        </div>

        {/* 2-Pill Switcher */}
        <div className="max-w-xl mx-auto mb-10 flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-stone-300 shadow-sm">
            <button
              onClick={() => setActiveCard(0)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCard === 0
                  ? "bg-amber-600 text-white shadow-md scale-[1.02]"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <span>🎙️</span>
              <span>1. Audio Centar & Istorijat</span>
            </button>

            <button
              onClick={() => setActiveCard(1)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCard === 1
                  ? "bg-amber-600 text-white shadow-md scale-[1.02]"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <span>🎸</span>
              <span>2. Muzička Era & Zanat</span>
            </button>
          </div>

          <div className="text-[11px] text-stone-500 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
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
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xl flex flex-col justify-between transition-all duration-500">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 pb-6 border-b border-stone-100">
                  <div className="inline-flex items-center justify-start shrink-0 bg-white p-2 rounded-2xl shadow-sm border border-stone-200 w-fit">
                    <img
                      src="/logos/taf-logo.jpg"
                      alt="Studio TAF Logo"
                      className="h-14 sm:h-16 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                      Studio TAF • Glas i Zvuk koji Traje
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200">
                        Banja Luka • 4 decenije kontinuiteta
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-normal mb-8">
                  <p>
                    Studio TAF je nastao iz četiri decenije profesionalnog rada sa zvukom, akustikom i radiodifuzijom. Osnovan na principima pedantne zvučne čistoće, postao je regionalni sinonim za vrhunsku audio postprodukciju, snimanje reklama, radio i TV džinglova, te namjenske muzike.
                  </p>
                  <p>
                    Kroz namjenski građenu gluvozvučnu sobu sa linearnom akustikom i monitoringom, studio povezuje vrhunske lampaške i tranzistorske mikrofone (Neumann, AKG, Shure), RME hardverske interfejse i Chris Lord-Alge analogni režijski procesing.
                  </p>
                  <p className="text-stone-900 font-medium bg-amber-50/60 p-4 rounded-2xl border border-amber-200/60">
                    Preko 6.012 realizovanih komercijalnih projekata za vodeće domaće i regionalne brendove (mtel, Ledo, Plazma, Smoki, Chipsi, Garnier, bankarski sektor) svjedoče o nepokolebljivoj tačnosti i povjerenju koje traje decenijama.
                  </p>
                </div>
              </div>

              {/* Metric Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-stone-100">
                <div className="bg-white rounded-xl p-3 border border-stone-200">
                  <div className="text-[11px] text-stone-500 font-medium">Početak Rada</div>
                  <div className="text-sm font-bold text-stone-900">1982. godina</div>
                </div>
                <div className="bg-white rounded-xl p-3 border border-stone-200">
                  <div className="text-[11px] text-stone-500 font-medium">Studio TAF</div>
                  <div className="text-sm font-bold text-stone-900">20+ godina</div>
                </div>
                <div className="bg-white rounded-xl p-3 border border-stone-200">
                  <div className="text-[11px] text-stone-500 font-medium">Realizovani Projekti</div>
                  <div className="text-sm font-bold text-amber-600 flex items-center gap-1">
                    <span>6.012</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 border border-stone-200">
                  <div className="text-[11px] text-stone-500 font-medium">Baza Spikera</div>
                  <div className="text-sm font-bold text-stone-900">Regionalna (6 tržišta)</div>
                </div>
              </div>
            </div>
          ) : (
            /* Card 2: Music Era & Studio Discipline */
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xl flex flex-col justify-between transition-all duration-500">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mb-4">
                  <Music2 className="w-3.5 h-3.5" />
                  <span>Zlatno doba autorskog stvaralaštva i disciplina magnetofonske trake</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-950 mb-3">
                  Muzička Era i Beskompromisna Disciplina
                </h3>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Prije ere digitalnog „copy-paste“ montažerstva, snimanje zvuka na višekanalne magnetofonske trake zahtijevalo je apsolutnu koncentraciju. Svaka sekvenca morala je biti odsvirana i otpjevana bez greške. Ta stečena analogna disciplina danas čini razliku između prosječnog i savršenog audio miksa.
                </p>

                <div className="space-y-3 mb-6">
                  <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
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
                        className="px-3 py-1 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200 text-xs text-stone-800 font-medium transition-colors"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed font-medium">
                Iskustvo rada sa ovim muzičkim velikanima utkalo je u Studio TAF osjećaj za dinamiku, toplinu i emocionalnu težinu zvučne poruke.
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
