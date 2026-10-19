"use client";

import React, { useState } from "react";
import { Mic, Globe2, Volume2, CheckCircle2, ArrowRight, Play, Pause, Sparkles } from "lucide-react";

interface VoiceMarket {
  code: string;
  flag: string;
  country: string;
  dialects: string;
  sampleCount: number;
}

const MARKETS: VoiceMarket[] = [
  { code: "bih", flag: "🇧🇦", country: "Bosna i Hercegovina", dialects: "Standardna ijekavica, sarajevski, banjalučki, hercegovački", sampleCount: 24 },
  { code: "cro", flag: "🇭🇷", country: "Hrvatska", dialects: "Standardni hrvatski, zagrebački urbani, dalmatinski naglasak", sampleCount: 28 },
  { code: "srb", flag: "🇷🇸", country: "Srbija", dialects: "Standardna ekavica, beogradski govor, vojvođanski i južni", sampleCount: 32 },
  { code: "mne", flag: "🇲🇪", country: "Crna Gora", dialects: "Crnogorski standard, podgorički i primorski stil", sampleCount: 16 },
  { code: "mkd", flag: "🇲🇰", country: "Sjeverna Makedonija", dialects: "Makedonski standardni jezik za TV i radio", sampleCount: 18 },
  { code: "slo", flag: "🇸🇮", country: "Slovenija", dialects: "Slovenačka adaptacija i sinhronizacija", sampleCount: 14 },
];

export default function BalkanVoiceNetwork() {
  const [selectedMarket, setSelectedMarket] = useState<string>("bih");

  const current = MARKETS.find((m) => m.code === selectedMarket) || MARKETS[0];

  return (
    <section id="balkan-network" className="py-24 md:py-36 border-t border-stone-200 relative overflow-hidden bg-[#faf7f2]">
      {/* Full Photographic Section Background from /pokaz/ */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-35 filter contrast-105"
        style={{
          backgroundImage: `url('/pokaz/studio-condenser-microphone-equipment-live-recording-close-up-pop-filter-anti-vibration-mount-color-lights-82782057.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/85 via-[#faf7f2]/60 to-[#faf7f2]/85 pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-orange-300 text-orange-950 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <Globe2 className="w-4 h-4 text-orange-600" />
            <span>Balkanska Voice-Over & Dubbing Mreža</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-stone-950 tracking-tight mb-6 font-display uppercase">
            Glasovi za cijeli region. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
              Jedno mjesto, 6 tržišta.
            </span>
          </h2>
          <p className="text-stone-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
            Sarađujemo sa najvećim regionalnim agencijama i brendovima. 
            Kada snimate kampanju za čitav Balkan, Studio TAF obezbjeđuje vrhunske izvorne spikere 
            za svaku pojedinačnu državu, sa tačnom jezičkom adaptacijom i režijom.
          </p>
        </div>

        {/* Market Selector Flags Bar - Wide Layout with large airy cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mb-14">
          {MARKETS.map((m) => (
            <button
              key={m.code}
              onClick={() => setSelectedMarket(m.code)}
              className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col items-center text-center gap-3 ${
                selectedMarket === m.code
                  ? "bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white border-orange-500 shadow-2xl shadow-orange-500/30 scale-103"
                  : "bg-white/95 border-stone-200/90 hover:border-orange-400 text-stone-800 shadow-md hover:shadow-lg"
              }`}
            >
              <span className="text-4xl">{m.flag}</span>
              <div className={`font-black text-sm tracking-tight ${selectedMarket === m.code ? "text-white" : "text-stone-950"}`}>
                {m.country}
              </div>
              <div className={`text-xs font-mono font-bold ${selectedMarket === m.code ? "text-amber-100" : "text-orange-600"}`}>
                {m.sampleCount} Glasova
              </div>
            </button>
          ))}
        </div>

        {/* Selected Market Spotlight Card - Wide Container */}
        <div className="rounded-3xl bg-white border-2 border-stone-200/90 p-8 sm:p-14 shadow-2xl mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-stone-100 mb-8">
            <div className="flex items-center gap-5">
              <span className="text-5xl sm:text-6xl">{current.flag}</span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-display uppercase">
                  {current.country} • Audio Baza
                </h3>
                <p className="text-sm sm:text-base text-stone-600 font-medium">
                  {current.dialects}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => alert(`Zahtjev za casting listu za ${current.country} poslat!`)}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm tracking-wide shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
              >
                Zatražite Casting Listu
              </button>
            </div>
          </div>

          {/* Voice Categories Grid - Wide layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs">
              <div className="text-xs font-black text-orange-600 font-mono uppercase mb-1.5">
                Muški Autoritativni
              </div>
              <div className="text-base font-bold text-stone-900 mb-2">Korporativni & Auto Brendovi</div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                Dubok, siguran i uvjerljiv bariton za banke, telekome, automobile i zvanične kampanje.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs">
              <div className="text-xs font-black text-amber-600 font-mono uppercase mb-1.5">
                Ženski Topli & Lifestyle
              </div>
              <div className="text-base font-bold text-stone-900 mb-2">Kozmetika & Maloprodaja</div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                Mekan, prijateljski ton koji stvara trenutno povjerenje i emociju sa slušaocem.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs">
              <div className="text-xs font-black text-emerald-600 font-mono uppercase mb-1.5">
                Mladi & Energični
              </div>
              <div className="text-base font-bold text-stone-900 mb-2">Festivali, Tech & Gaming</div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                Brz, ritmičan i svjež glas za digitalne medije, radio akcije i promocije događaja.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs">
              <div className="text-xs font-black text-rose-600 font-mono uppercase mb-1.5">
                Glumački & Dubbing
              </div>
              <div className="text-base font-bold text-stone-900 mb-2">Crtani Filmovi & Teatar</div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                Profesionalni akademski glumci sposobni za brze promjene karaktera, humora i akcenta.
              </p>
            </div>
          </div>
        </div>

        {/* Global Standard Callout */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white border-2 border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-stone-700 shadow-md">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
            <span className="font-medium text-base">
              Svi glasovi su 100% izvorni govornici (Native speakers) sa garantovanim radio/TV autorskim pravima.
            </span>
          </div>
          <span className="font-mono text-orange-600 font-black whitespace-nowrap bg-orange-100 px-4 py-2 rounded-xl border border-orange-200 text-sm">
            ISPORUKA U ROKU OD 24H
          </span>
        </div>
      </div>
    </section>
  );
}
