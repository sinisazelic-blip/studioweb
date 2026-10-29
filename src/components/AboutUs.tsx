"use client";

import React, { useState, useEffect } from "react";
import { Volume2, Music2 } from "lucide-react";

export default function AboutUs() {
  const [activeCard, setActiveCard] = useState<0 | 1>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [liveProjects, setLiveProjects] = useState<number | null>(6017);

  useEffect(() => {
    fetch("/api/stats/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.ok && typeof data.count === "number") {
          setLiveProjects(data.count);
        }
      })
      .catch(() => {});
  }, []);

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
      className="py-20 md:py-32 relative overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200/80"
    >
      {/* Real, Solid, Relaxed Studio Photography Foundation (Slika 1: Dnevna svetlost, akustična gitara & klavijatura) */}
      <div 
        className="absolute inset-0 bg-cover bg-right lg:bg-center pointer-events-none filter saturate-[1.05] contrast-[1.02]"
        style={{
          backgroundImage: "url('/images/studio-acoustic-bright.jpg')",
        }}
      />
      
      {/* Seamless Section Transitions (Soft fade at top and bottom) */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-stone-950/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-purple-200/25 rounded-full blur-[130px] pointer-events-none" />

      {/* Full-width Container */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-purple-200 text-purple-900 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <Volume2 className="w-3.5 h-3.5 text-purple-700" />
            <span>Četiri decenije akumuliranog zanata i zvučne discipline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight font-sans drop-shadow-sm">
            O Nama • <span className="font-semibold text-purple-900">Studio TAF</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl mx-auto font-normal drop-shadow-xs">
            Od analognog snimanja osamdesetih godina do savremenih digitalnih i mrežnih sistema — tradicija, pouzdanost i pedantnost u svakom sekundu zvučnog zapisa.
          </p>
        </div>

        {/* 2-Pill Switcher */}
        <div className="max-w-2xl mx-auto mb-8 flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveCard(0)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCard === 0
                  ? "bg-purple-800 text-white shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span>🎙️</span>
              <span>1. Audio Centar & Istorijat</span>
            </button>

            <button
              onClick={() => setActiveCard(1)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCard === 1
                  ? "bg-purple-800 text-white shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span>🎸</span>
              <span>2. Muzička Era & Zanat</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-700 font-medium flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full shadow-2xs backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>
              {isPaused
                ? "Pauzirano (čitanje u toku)"
                : "Automatska izmjena svakih 15s • prelazak mišem pauzira"}
            </span>
          </div>
        </div>

        {/* Single Centered Airy Container (Slika 1 Frosted White Aesthetic) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-3xl lg:max-w-4xl mx-auto mb-16 sm:mb-20"
        >
          {activeCard === 0 ? (
            /* Container 1: Studio & Audio Heritage */
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/60 shadow-xl flex flex-col justify-between transition-all duration-500">
              <div>
                {/* Studio TAF Original Logo */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6 pb-6 border-b border-slate-100/80">
                  <div className="inline-flex items-center justify-start shrink-0 bg-white p-2 rounded-2xl shadow-xs border border-slate-200 w-fit">
                    <img
                      src="/logos/taf-logo.jpg"
                      alt="Studio TAF Logo"
                      className="h-12 sm:h-16 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                      Studio TAF • Glas i Zvuk koji Traje
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] sm:text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100 font-mono">
                        Banja Luka • 4 decenije kontinuiteta (od 1982.)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Story Paragraphs */}
                <div className="space-y-4 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal mb-8">
                  <p>
                    Studio TAF je nastao iz četiri decenije profesionalnog rada sa zvukom, akustikom i radiodifuzijom. Osnovan na principima pedantne zvučne čistoće, postao je regionalni sinonim za vrhunsku audio postprodukciju, snimanje reklama, radio i TV džinglova, te namjenske muzike.
                  </p>
                  <p>
                    Kroz namjenski građenu gluvozvučnu sobu sa linearnom akustikom i monitoringom, studio povezuje vrhunske studijske mikrofone, profesionalne RME hardverske interfejse i analogni režijski procesing.
                  </p>
                  <p className="text-slate-800 font-medium bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80">
                    Preko 6.012 realizovanih komercijalnih projekata za vodeće domaće i regionalne brendove (m:tel, Ledo, Plazma, Smoki, Chipsi, Garnier, bankarski sektor) svjedoče o nepokolebljivoj tačnosti i povjerenju koje traje decenijama.
                  </p>
                </div>
              </div>

              {/* Metric Pills - Continuity & Heritage */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6 border-t border-slate-100/80">
                <div className="bg-white/75 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Početak Rada</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 font-mono">1982. godina</div>
                </div>
                <div className="bg-white/75 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Studio TAF</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 font-mono">20+ godina</div>
                </div>
                <div className="bg-white/75 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Završeni Projekti</div>
                  <div className="text-xs sm:text-sm font-bold text-purple-700 flex items-center gap-1.5 font-mono">
                    <span>{liveProjects ? liveProjects.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "6.012"}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
                <div className="bg-white/75 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Swiss Timing Partner</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 font-mono">15+ godina</div>
                </div>
              </div>
            </div>
          ) : (
            /* Container 2: Music Era & Studio Discipline */
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/60 shadow-xl flex flex-col justify-between transition-all duration-500">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold mb-4">
                  <Music2 className="w-3.5 h-3.5" />
                  <span>Zlatno doba autorskog stvaralaštva i disciplina magnetofonske trake</span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  Muzička Era i Beskompromisna Disciplina
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Prije ere digitalnog „copy-paste“ montažerstva, snimanje zvuka na višekanalne magnetofonske trake zahtijevalo je apsolutnu koncentraciju. Svaka sekvenca morala je biti odsvirana i otpjevana bez greške. Ta stečena analogna disciplina danas čini razliku između prosječnog i savršenog audio miksa.
                </p>

                {/* Iconic Artists Roster Showcase */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
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
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-[11px] sm:text-xs font-semibold shadow-2xs hover:border-purple-300 transition-colors"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Note Pill */}
              <div className="bg-white/75 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-purple-100/80 mt-6">
                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                  Iskustvo rada sa ovim muzičkim velikanima utkalo je u Studio TAF osjećaj za dinamiku, toplinu i emocionalnu težinu zvučne poruke.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
