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
    <section id="balkan-network" className="py-20 md:py-28 bg-[#140e0a] border-t border-amber-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-500/20 border border-studio-500/40 text-studio-400 text-xs font-semibold mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Balkanska Voice-Over & Dubbing Mreža</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display uppercase">
            Glasovi za cijeli region. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-400 via-amber-300 to-amber-500">
              Jedno mjesto, 6 tržišta.
            </span>
          </h2>
          <p className="text-amber-100/80 text-sm sm:text-base leading-relaxed">
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
                  ? "bg-gradient-to-b from-[#2b1c12] to-[#20150d] border-studio-500 shadow-xl shadow-studio-500/20 scale-102"
                  : "bg-[#1b120c]/80 border-amber-950/60 hover:border-amber-800/80 text-amber-200/80"
              }`}
            >
              <span className="text-3xl">{m.flag}</span>
              <div className="font-bold text-xs text-white tracking-tight">{m.country}</div>
              <div className="text-[10px] text-amber-400 font-mono font-semibold">{m.sampleCount} Glasova</div>
            </button>
          ))}
        </div>

        {/* Selected Market Spotlight Card */}
        <div className="rounded-3xl bg-[#1e140d] border border-amber-900/50 p-6 sm:p-10 shadow-2xl mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-amber-950/80 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl">{current.flag}</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase">
                  {current.country} • Audio Baza
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/70">
                  {current.dialects}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => alert(`Zahtjev za casting listu za ${current.country} poslat!`)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-studio-500 to-amber-500 hover:from-studio-600 hover:to-amber-600 text-white font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer"
              >
                Zatražite Casting Listu
              </button>
            </div>
          </div>

          {/* Voice Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#140e0a]/80 border border-amber-950/60">
              <div className="text-xs font-bold text-studio-400 font-mono uppercase mb-1">
                Muški Autoritativni
              </div>
              <div className="text-sm font-semibold text-white mb-2">Korporativni & Auto Brendovi</div>
              <p className="text-[11px] text-amber-100/60 leading-snug">
                Dubok, siguran i uvjerljiv bariton za banke, telekome, automobile i zvanične kampanje.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#140e0a]/80 border border-amber-950/60">
              <div className="text-xs font-bold text-amber-400 font-mono uppercase mb-1">
                Ženski Topli & Lifestyle
              </div>
              <div className="text-sm font-semibold text-white mb-2">Kozmetika & Maloprodaja</div>
              <p className="text-[11px] text-amber-100/60 leading-snug">
                Mekan, prijateljski ton koji stvara trenutno povjerenje i emociju sa slušaocem.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#140e0a]/80 border border-amber-950/60">
              <div className="text-xs font-bold text-emerald-400 font-mono uppercase mb-1">
                Mladi & Energični
              </div>
              <div className="text-sm font-semibold text-white mb-2">Festivali, Tech & Gaming</div>
              <p className="text-[11px] text-amber-100/60 leading-snug">
                Brz, ritmičan i svjež glas za digitalne medije, radio akcije i promocije događaja.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#140e0a]/80 border border-amber-950/60">
              <div className="text-xs font-bold text-rose-400 font-mono uppercase mb-1">
                Glumački & Dubbing
              </div>
              <div className="text-sm font-semibold text-white mb-2">Crtani Filmovi & Teatar</div>
              <p className="text-[11px] text-amber-100/60 leading-snug">
                Profesionalni akademski glumci sposobni za brze promjene karaktera, humora i akcenta.
              </p>
            </div>
          </div>
        </div>

        {/* Global Standard Callout */}
        <div className="p-6 rounded-2xl bg-[#1b120c] border border-amber-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/70">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-studio-500 shrink-0" />
            <span>
              Svi glasovi su 100% izvorni govornici (Native speakers) sa garantovanim radio/TV autorskim pravima.
            </span>
          </div>
          <span className="font-mono text-amber-400 font-bold whitespace-nowrap">
            ISPORUKA U ROKU OD 24H
          </span>
        </div>
      </div>
    </section>
  );
}
