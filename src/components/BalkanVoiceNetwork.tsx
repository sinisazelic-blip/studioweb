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
    <section id="balkan-network" className="py-20 md:py-28 bg-[#fbf9f5] border-t border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold mb-4">
            <Globe2 className="w-3.5 h-3.5 text-orange-600" />
            <span>Balkanska Voice-Over & Dubbing Mreža</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight mb-4 font-display uppercase">
            Glasovi za cijeli region. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Jedno mjesto, 6 tržišta.
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Sarađujemo sa najvećim regionalnim agencijama i brendovima. 
            Kada snimate kampanju za čitav Balkan, Studio TAF obezbjeđuje vrhunske izvorne spikere 
            za svaku pojedinačnu državu, sa tačnom jezičkom adaptacijom i režijom.
          </p>
        </div>

        {/* Market Selector Flags Bar (TikTak level of energy) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {MARKETS.map((m) => (
            <button
              key={m.code}
              onClick={() => setSelectedMarket(m.code)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center gap-2 ${
                selectedMarket === m.code
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-500 shadow-xl shadow-orange-500/25 scale-102"
                  : "bg-white border-stone-200 hover:border-orange-400 text-stone-800 shadow-xs"
              }`}
            >
              <span className="text-3xl">{m.flag}</span>
              <div className={`font-bold text-xs tracking-tight ${selectedMarket === m.code ? "text-white" : "text-stone-900"}`}>
                {m.country}
              </div>
              <div className={`text-[10px] font-mono font-semibold ${selectedMarket === m.code ? "text-amber-100" : "text-orange-600"}`}>
                {m.sampleCount} Glasova
              </div>
            </button>
          ))}
        </div>

        {/* Selected Market Spotlight Card */}
        <div className="rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-10 shadow-xl mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-100 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl">{current.flag}</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display uppercase">
                  {current.country} • Audio Baza
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  {current.dialects}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => alert(`Zahtjev za casting listu za ${current.country} poslat!`)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer"
              >
                Zatražite Casting Listu
              </button>
            </div>
          </div>

          {/* Voice Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="text-xs font-bold text-orange-600 font-mono uppercase mb-1">
                Muški Autoritativni
              </div>
              <div className="text-sm font-semibold text-stone-900 mb-2">Korporativni & Auto Brendovi</div>
              <p className="text-[11px] text-stone-600 leading-snug">
                Dubok, siguran i uvjerljiv bariton za banke, telekome, automobile i zvanične kampanje.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="text-xs font-bold text-amber-600 font-mono uppercase mb-1">
                Ženski Topli & Lifestyle
              </div>
              <div className="text-sm font-semibold text-stone-900 mb-2">Kozmetika & Maloprodaja</div>
              <p className="text-[11px] text-stone-600 leading-snug">
                Mekan, prijateljski ton koji stvara trenutno povjerenje i emociju sa slušaocem.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="text-xs font-bold text-emerald-600 font-mono uppercase mb-1">
                Mladi & Energični
              </div>
              <div className="text-sm font-semibold text-stone-900 mb-2">Festivali, Tech & Gaming</div>
              <p className="text-[11px] text-stone-600 leading-snug">
                Brz, ritmičan i svjež glas za digitalne medije, radio akcije i promocije događaja.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="text-xs font-bold text-rose-600 font-mono uppercase mb-1">
                Glumački & Dubbing
              </div>
              <div className="text-sm font-semibold text-stone-900 mb-2">Crtani Filmovi & Teatar</div>
              <p className="text-[11px] text-stone-600 leading-snug">
                Profesionalni akademski glumci sposobni za brze promjene karaktera, humora i akcenta.
              </p>
            </div>
          </div>
        </div>

        {/* Global Standard Callout */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 shadow-sm">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
            <span>
              Svi glasovi su 100% izvorni govornici (Native speakers) sa garantovanim radio/TV autorskim pravima.
            </span>
          </div>
          <span className="font-mono text-orange-600 font-bold whitespace-nowrap bg-orange-50 px-3 py-1 rounded-lg border border-orange-200">
            ISPORUKA U ROKU OD 24H
          </span>
        </div>
      </div>
    </section>
  );
}
