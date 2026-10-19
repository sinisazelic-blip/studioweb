"use client";

import React, { useState, useRef } from "react";
import { Disc, Mic, Radio, Server, Sparkles, ArrowRight, ShieldCheck, Play, Pause, Volume2, VolumeX, Film } from "lucide-react";

export default function HeroStudio() {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-[#f7f4ee] to-[#fcfbfa]">
      {/* Warm Creative Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[350px] bg-orange-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-amber-200/35 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[450px] h-[250px] bg-rose-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Četiri decenije tradicije • 1982 – {new Date().getFullYear()}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-800 text-xs font-mono shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold">Banja Luka • Regionalni Audio Hub</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold shadow-xs">
            <span>6.000+ Realizovanih Audio Projekata</span>
          </div>
        </div>

        {/* Cinematic Headline & Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-950 leading-[1.12] mb-6 font-display uppercase">
            Zvuk koji se pamti. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Prava akustika, analogni autoritet
            </span>{" "}
            i studijska disciplina.
          </h1>

          <p className="text-stone-700 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Nismo spavaća soba sa laptopom. Studio TAF je institucija sa 40 godina rezanja traka, 
            snimanja i produkcije — 10 hardverskih sintisajzera, autentični lampaši, 
            vrhunski regionalni glasovi i klijentski distributivni hab za najveće balkanske kampanje.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button
              onClick={() => scrollTo("balkan-network")}
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm tracking-wide shadow-xl shadow-orange-500/25 transition-all cursor-pointer flex items-center gap-2.5 group"
            >
              <Mic className="w-4 h-4 text-white" />
              <span>Balkanska Voice & Dubbing Mreža</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("vault")}
              className="px-7 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-900 font-bold text-sm border border-stone-300 shadow-md transition-all cursor-pointer flex items-center gap-2.5"
            >
              <Server className="w-4 h-4 text-orange-600" />
              <span>Klijentski Audio Vault (BiH / CRO / SRB)</span>
            </button>

            <button
              onClick={() => scrollTo("oprema")}
              className="px-6 py-4 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm border border-stone-200 shadow-xs transition-all cursor-pointer flex items-center gap-2"
            >
              <Disc className="w-4 h-4 text-amber-600" />
              <span>10 Sintova & Hardver</span>
            </button>
          </div>
        </div>

        {/* Video Showcase: Siniša's Film & TV Animation Signature (TAFlogoMOVE.mp4) */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="p-3 sm:p-4 rounded-3xl bg-white border border-stone-200/80 shadow-2xl shadow-stone-900/10 relative group">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-inner">
              <video
                ref={videoRef}
                src="/TAFlogoMOVE.mp4"
                autoPlay
                loop
                muted={isVideoMuted}
                playsInline
                className="w-full h-full object-contain"
              />

              {/* Video Overlay Top Badge */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5 text-orange-400" />
                  <span>Filmski & TV Potpis • Studio TAF</span>
                </span>
              </div>

              {/* Audio Toggle Button */}
              <button
                onClick={toggleSound}
                className="absolute bottom-3.5 right-3.5 p-2.5 rounded-full bg-black/75 hover:bg-orange-600 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg flex items-center gap-1.5 text-xs font-medium"
                title={isVideoMuted ? "Uključi zvuk potpisa" : "Isključi zvuk"}
              >
                {isVideoMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                <span className="hidden sm:inline font-mono">{isVideoMuted ? "Zvuk isključen (Klikni)" : "Zvuk aktivan"}</span>
              </button>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-stone-50 rounded-2xl mt-3 border border-stone-100">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <span>Prepoznatljivi autorski potpis za film, teatar i medije</span>
                  <span className="text-[10px] font-mono bg-orange-100 text-orange-800 font-bold px-2 py-0.5 rounded-md border border-orange-200">
                    CINEMATIC IDENT
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  Animirani audio potpis kojim se Studio TAF ovjerava na filmskim i dokumentarnim projektima.
                </p>
              </div>
              <button
                onClick={() => scrollTo("tradicija")}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 shrink-0"
              >
                <span>Pogledaj 40 godina projekata</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Crisp, Clean, Bright Visual Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Studio Prostor & Režija */}
          <div
            onClick={() => scrollTo("studio-prostor")}
            className="rounded-3xl bg-white border border-stone-200/90 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-orange-400/40">
                Acoustic Room
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-orange-400 transition-colors mb-1">
                Akustika & Gluva Soba
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed">
                Namjenski građena akustika, prirodno drvo i kontrolisana difuzija za besprijekoran vokal.
              </p>
            </div>
          </div>

          {/* Card 2: Voice & Dubbing Network (TikTak style) */}
          <div
            onClick={() => scrollTo("balkan-network")}
            className="rounded-3xl bg-white border border-stone-200/90 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40">
                Balkan Network
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-amber-300 transition-colors mb-1">
                Voiceover & Dubbing
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed">
                Vodeći spikeri za 6 tržišta. Režija Siniše Zelića kojoj vjeruju najveće regionalne agencije.
              </p>
            </div>
          </div>

          {/* Card 3: 10 Synths & True Composition */}
          <div
            onClick={() => scrollTo("oprema")}
            className="rounded-3xl bg-white border border-stone-200/90 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-orange-400/40">
                10 Hardware Synths
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-orange-400 transition-colors mb-1">
                Autorska Kompozicija
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed">
                Pravi analogni sintisajzeri, sempleri i višemjesečni rad na albumima umjesto AI prečica.
              </p>
            </div>
          </div>

          {/* Card 4: Moj Radio In-Store */}
          <div
            onClick={() => scrollTo("moj-radio")}
            className="rounded-3xl bg-white border border-stone-200/90 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[300px] relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

            <div className="relative z-10 p-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/40">
                In-Store Audio
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0 text-white">
              <h3 className="text-lg font-bold group-hover:text-emerald-400 transition-colors mb-1">
                Moj Radio & Stubovi
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed">
                Vlastiti zvučni stubovi, vanjske horne i WiFi pojačala za markete: Konzum, Merkator, Tropic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
