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
    <section id="balkan-network" className="py-24 md:py-36 bg-[#08090d] border-t border-zinc-800/80 relative overflow-hidden">
      {/* Full Photographic Section Background from /pokaz/ */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-125"
        style={{
          backgroundImage: `url('/pokaz/studio-condenser-microphone-equipment-live-recording-close-up-pop-filter-anti-vibration-mount-color-lights-82782057.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090d] via-[#08090d]/90 to-[#08090d] pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151f] border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <Globe2 className="w-4 h-4 text-orange-500" />
            <span>Balkanska Voice-Over & Dubbing Mreža</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 font-display uppercase">
            Glasovi za cijeli region. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Jedno mjesto, 6 tržišta.
            </span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-3xl mx-auto">
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
              className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col items-center text-center gap-3 ${
                selectedMarket === m.code
                  ? "bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white border-orange-400 shadow-xl shadow-orange-500/25 scale-103"
                  : "bg-[#11131c] border-zinc-800 hover:border-orange-500/40 text-zinc-300 shadow-md hover:shadow-lg"
              }`}
            >
              <span className="text-4xl">{m.flag}</span>
              <div className={`font-bold text-sm tracking-tight ${selectedMarket === m.code ? "text-white" : "text-zinc-200"}`}>
                {m.country}
              </div>
              <div className={`text-xs font-mono font-semibold ${selectedMarket === m.code ? "text-amber-100" : "text-orange-400"}`}>
                {m.sampleCount} Glasova
              </div>
            </button>
          ))}
        </div>

        {/* Selected Market Spotlight Card - Wide Container */}
        <div className="rounded-3xl bg-[#11131c] border border-zinc-800 p-8 sm:p-14 shadow-2xl mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-800 mb-8">
            <div className="flex items-center gap-5">
              <span className="text-5xl sm:text-6xl">{current.flag}</span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase">
                  {current.country} • Audio Baza
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 font-medium">
                  {current.dialects}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => alert(`Zahtjev za casting listu za ${current.country} poslat!`)}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
              >
                Zatražite Casting Listu
              </button>
            </div>
          </div>

          {/* Voice Categories Grid - Wide layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#161924] border border-zinc-800/80 shadow-xs">
              <div className="text-xs font-bold text-orange-400 font-mono uppercase mb-1.5">
                Muški Autoritativni
              </div>
              <div className="text-base font-bold text-white mb-2">Korporativni & Auto Brendovi</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Dubok, siguran i uvjerljiv bariton za banke, telekome, automobile i zvanične kampanje.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161924] border border-zinc-800/80 shadow-xs">
              <div className="text-xs font-bold text-amber-400 font-mono uppercase mb-1.5">
                Ženski Topli & Lifestyle
              </div>
              <div className="text-base font-bold text-white mb-2">Kozmetika & Maloprodaja</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Mekan, prijateljski ton koji stvara trenutno povjerenje i emociju sa slušaocem.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161924] border border-zinc-800/80 shadow-xs">
              <div className="text-xs font-bold text-emerald-400 font-mono uppercase mb-1.5">
                Mladi & Energični
              </div>
              <div className="text-base font-bold text-white mb-2">Festivali, Tech & Gaming</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Brz, ritmičan i svjež glas za digitalne medije, radio akcije i promocije događaja.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161924] border border-zinc-800/80 shadow-xs">
              <div className="text-xs font-bold text-rose-400 font-mono uppercase mb-1.5">
                Glumački & Dubbing
              </div>
              <div className="text-base font-bold text-white mb-2">Crtani Filmovi & Teatar</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Profesionalni akademski glumci sposobni za brze promjene karaktera, humora i akcenta.
              </p>
            </div>
          </div>
        </div>

        {/* Global Standard Callout */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#11131c] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-zinc-300 shadow-md">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
            <span className="font-medium text-base text-zinc-200">
              Svi glasovi su 100% izvorni govornici (Native speakers) sa garantovanim radio/TV autorskim pravima.
            </span>
          </div>
          <span className="font-mono text-orange-400 font-bold whitespace-nowrap bg-orange-950/60 px-4 py-2 rounded-xl border border-orange-500/30 text-sm">
            ISPORUKA U ROKU OD 24H
          </span>
        </div>
      </div>
    </section>
  );
}
