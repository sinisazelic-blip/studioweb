"use client";

import React from "react";
import { Disc, Heart, Sparkles, Music, Headphones, Compass, Award } from "lucide-react";

export default function HeroStudio() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-[#0c0d12] text-zinc-100">
      {/* 1. Warm Atmospheric Background Glows: Golden Amber, Sunset Rose, Warm Analog Vacuum Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm ambient studio lighting */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-orange-500/15 via-amber-500/10 to-transparent rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -left-32 w-[600px] h-[450px] bg-rose-500/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 -right-20 w-[650px] h-[500px] bg-amber-600/10 rounded-full blur-[170px]" />

        {/* Subtle, peaceful grid texture like analog graph paper / studio tape track sheet */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Top Peaceful Studio Stamp / Monogram */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181a24]/90 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-widest shadow-lg shadow-amber-500/5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>AUTORSKA RAZGLEDNICA • SINIŠA ZELIĆ • OD 1982.</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a24]/60 border border-zinc-800 text-zinc-400 text-xs font-mono">
            <span>Banja Luka • 63. godina u okeanu nota</span>
          </div>
        </div>

        {/* Central Pure Statement: "Ako se pitate šta je napravilo brand Siniša Zelić..." */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.18] mb-6 font-serif">
            Ako se pitate šta je stvorilo ime{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-100">
              Siniša Zelić
            </span>{" "}
            — <br className="hidden sm:inline" />
            <span className="italic font-normal text-zinc-300">to je ovo što gledate i slušate.</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-8 font-sans">
            Ovo nije reklama i ne tražimo nove klijente. 
            Nakon više od 40 godina profesionalnog života u muzici, 20 godina Studija TAF i preko 6.000 završenih projekata — 
            od londonske ispostave Coca-Cole, Pepsija i pozorišnih predstava, do autorskih albuma i analognih sintisajzera — 
            ovo je naša razglednica. 
            Radimo 16 sati dnevno, učimo i stvaramo kao da nam je dvadeset. 
            <br className="hidden sm:inline" />
            <span className="text-amber-300/90 font-medium"> Vidite, ovo smo mi. Ništa više, i ništa manje.</span>
          </p>

          {/* Quick Monograph Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => scrollTo("kreativni-nered")}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-stone-950" />
              <span>Zavirite u studio & boje života</span>
            </button>

            <button
              onClick={() => scrollTo("tradicija")}
              className="px-6 py-3 rounded-2xl bg-[#181a24] hover:bg-[#202332] text-zinc-200 font-semibold text-xs sm:text-sm border border-zinc-700/80 hover:border-amber-500/50 transition-all cursor-pointer flex items-center gap-2"
            >
              <Disc className="w-4 h-4 text-amber-400" />
              <span>Muzička ostavština (1982–danas)</span>
            </button>
          </div>
        </div>

        {/* 2. THE CREATIVE DESK / "KREATIVNI NERED" - Postcard Collage */}
        <div id="kreativni-nered" className="relative pt-6 pb-10">
          
          {/* Subtle Ambient Video in the Center of the Ocean of Notes */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <div className="w-[360px] max-w-[80vw] aspect-video relative">
              <video
                src="/TAFlogoMOVE.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain filter contrast-125 brightness-110"
              />
            </div>
          </div>

          {/* Scattered Studio Postcards & Polaroids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            
            {/* Postcard 1: Analogni Pult & Zvuk koji diše */}
            <div className="group relative bg-[#151722] p-4 sm:p-5 rounded-3xl border border-zinc-800 shadow-2xl hover:border-amber-500/50 transition-all duration-500 sm:-rotate-2 hover:rotate-0 hover:scale-102 hover:z-20 cursor-pointer">
              <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden mb-4 bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                  style={{ backgroundImage: `url('/pokaz/vibrant-audio-mixer-stockcake.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-amber-500/30">
                    ANALOGNA TOPLINA
                  </span>
                </div>
              </div>
              <div className="px-1">
                <div className="text-xs font-mono text-amber-400 font-semibold mb-1">Pravi faderi & lampe</div>
                <h3 className="text-base font-bold text-white mb-1.5 font-serif">Headroom koji diše</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Fizički točkići, napon i harmonici. Zvuk koji se stvara sluhom, a ne matematičkim algoritmom.
                </p>
              </div>
            </div>

            {/* Postcard 2: Zlatna Membrana & Lampaški Mikrofon */}
            <div className="group relative bg-[#151722] p-4 sm:p-5 rounded-3xl border border-zinc-800 shadow-2xl hover:border-orange-500/50 transition-all duration-500 sm:rotate-1 hover:rotate-0 hover:scale-102 hover:z-20 cursor-pointer sm:translate-y-4">
              <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden mb-4 bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                  style={{ backgroundImage: `url('/pokaz/studio-condenser-microphone-equipment-live-recording-close-up-pop-filter-anti-vibration-mount-color-lights-82782057.webp')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono font-bold text-orange-300 border border-orange-500/30">
                    INTIMNOST VOKALA
                  </span>
                </div>
              </div>
              <div className="px-1">
                <div className="text-xs font-mono text-orange-400 font-semibold mb-1">Zlatna kapsula</div>
                <h3 className="text-base font-bold text-white mb-1.5 font-serif">Čistoća glasa i tišine</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Mjesto gdje su snimali najveći regionalni glasovi, glumci i spikeri u savršenoj akustici.
                </p>
              </div>
            </div>

            {/* Postcard 3: 10 Hardverskih Sintisajzera */}
            <div className="group relative bg-[#151722] p-4 sm:p-5 rounded-3xl border border-zinc-800 shadow-2xl hover:border-amber-500/50 transition-all duration-500 sm:-rotate-1 hover:rotate-0 hover:scale-102 hover:z-20 cursor-pointer">
              <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden mb-4 bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                  style={{ backgroundImage: `url('/pokaz/musician-s-dream-studio-stockcake.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-amber-500/30">
                    AUTORSKA ARHIVA
                  </span>
                </div>
              </div>
              <div className="px-1">
                <div className="text-xs font-mono text-amber-400 font-semibold mb-1">10 pravih sintova</div>
                <h3 className="text-base font-bold text-white mb-1.5 font-serif">Roland, Korg, žica i drvo</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Instrumenti nabavljeni još u Jugoton eri koji i danas sviraju muziku za filmove i teatar.
                </p>
              </div>
            </div>

            {/* Postcard 4: 40 Godina Režije & Zanata */}
            <div className="group relative bg-[#151722] p-4 sm:p-5 rounded-3xl border border-zinc-800 shadow-2xl hover:border-emerald-500/50 transition-all duration-500 sm:rotate-2 hover:rotate-0 hover:scale-102 hover:z-20 cursor-pointer sm:translate-y-4">
              <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden mb-4 bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                  style={{ backgroundImage: `url('/pokaz/music-studio-mixer-stockcake.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono font-bold text-emerald-300 border border-emerald-500/30">
                    ČETIRI DECENIJE
                  </span>
                </div>
              </div>
              <div className="px-1">
                <div className="text-xs font-mono text-emerald-400 font-semibold mb-1">Od trake do koda</div>
                <h3 className="text-base font-bold text-white mb-1.5 font-serif">Disciplina koja je napravila sve</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Ista milisekundna preciznost sa 2-inčne magnetofonske trake danas pokreće naše softverske sisteme.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Quiet Authentic Footnote Strip */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="font-mono text-zinc-300">
              Muzika za teatar, film, Coca-Cola, Pepsi, Garnier, 6.000+ mastera — ostaje zabilježeno u vremenu.
            </span>
          </div>
          <div className="font-mono text-amber-400/90 font-medium">
            Studio TAF • Banja Luka
          </div>
        </div>

      </div>
    </section>
  );
}
