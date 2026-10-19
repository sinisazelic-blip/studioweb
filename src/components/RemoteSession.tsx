"use client";

import React, { useState } from "react";
import { Mic, MicOff, Volume2, Radio, CheckCircle, Sparkles, Star, MessageSquare } from "lucide-react";

export default function RemoteSession() {
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [talkbackActive, setTalkbackActive] = useState<boolean>(false);
  const [selectedTake, setSelectedTake] = useState<number>(2);

  return (
    <section id="live-session" className="py-20 md:py-28 bg-[#0b0f19] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[400px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-4">
            <Mic className="w-3.5 h-3.5 text-rose-400" />
            <span>Studio TAF Live Režija (WebRTC Opus)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Pratite snimanje uživo iz svoje kancelarije <br className="hidden sm:inline" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-400 to-amber-400">
              bez instalacije softvera i bez Zoom kompresije.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Isti kvalitet i direktna režija kao kod Source-Connect ili SessionLinkPRO servisa, 
            ali ugrađeno direktno na našem serveru — bez skupih pretplata i posrednika. 
            Klijent samo otvori link, čuje nekompresovan studijski mikrofon i vodi snimanje sa nama.
          </p>
        </div>

        {/* Live Session Interactive Mockup */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0f1422] border border-slate-800 shadow-2xl p-6 sm:p-8 md:p-10 relative">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-400">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Sesija: Kampanja „Premium Brend”</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                    P2P POVEZANO
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  Režiser: Siniša Zelić • Spiker u gluvoj sobi: Talent A • Klijent: Agencija Zagreb
                </div>
              </div>
            </div>

            {/* Recording ON AIR Light */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  isRecording
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30 animate-pulse"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>{isRecording ? "● REC / ON AIR" : "PAUZA (STANDBY)"}</span>
              </button>
            </div>
          </div>

          {/* Center Stage: Studio Monitoring & Script View */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            {/* Live Script Column */}
            <div className="md:col-span-8 space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                Scenario u toku snimanja
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3 text-sm text-slate-200 leading-relaxed font-sans">
                <p>
                  <strong className="text-amber-400">[Spiker, energično]:</strong>{" "}
                  „Zaboravite sve što ste mislili o kompromisima. Nova kolekcija donosi vrhunsku snagu i nepogrešiv stil.”
                </p>
                <p>
                  <strong className="text-amber-400">[Spiker, meki prelaz]:</strong>{" "}
                  „Pronađite svoj model u svim ovlaštenim salonima do kraja mjeseca.”
                </p>
                <p className="text-xs text-slate-400 italic pt-2 border-t border-slate-800/80">
                  Napomena režije: U Tejk 2 smo ubrzali drugi dio za 0.8 sekundi radi preciznog uklapanja u TV 20s slot.
                </p>
              </div>

              {/* Take Selector */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs font-semibold text-slate-400">Tejkovi:</span>
                {[1, 2, 3, 4].map((take) => (
                  <button
                    key={take}
                    onClick={() => setSelectedTake(take)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold cursor-pointer transition-all flex items-center gap-1 ${
                      selectedTake === take
                        ? "bg-rose-500 text-white shadow-md font-mono"
                        : "bg-slate-800 text-slate-400 hover:text-white font-mono"
                    }`}
                  >
                    <span>Tejk {take}</span>
                    {take === 2 && <Star className="w-3 h-3 fill-amber-400 text-amber-400" />}
                  </button>
                ))}
                <span className="text-[11px] text-emerald-400 ml-2 font-medium">
                  {selectedTake === 2 ? "★ Odobreno za master" : ""}
                </span>
              </div>
            </div>

            {/* Talkback & Controls Column */}
            <div className="md:col-span-4 flex flex-col justify-between p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Režijski Talkback
                </div>

                {/* Big Push-To-Talk Button */}
                <button
                  onMouseDown={() => setTalkbackActive(true)}
                  onMouseUp={() => setTalkbackActive(false)}
                  onTouchStart={() => setTalkbackActive(true)}
                  onTouchEnd={() => setTalkbackActive(false)}
                  className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-2 cursor-pointer transition-all select-none shadow-xl ${
                    talkbackActive
                      ? "bg-emerald-500 text-slate-950 scale-95 shadow-emerald-500/30"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                  }`}
                >
                  {talkbackActive ? <Mic className="w-6 h-6 animate-pulse" /> : <MicOff className="w-6 h-6 text-slate-400" />}
                  <span>{talkbackActive ? "TALKBACK AKTIVAN" : "DRŽITE ZA GOVOR (PTT)"}</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center leading-tight">
                  Dok držite taster, vaš glas ide direktno u slušalice režisera i spikera bez kašnjenja.
                </p>
              </div>

              {/* Stream Specs */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1 text-[11px] font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>Kodek:</span>
                  <span className="text-white">Opus 48kHz Stereo</span>
                </div>
                <div className="flex justify-between">
                  <span>Latencija:</span>
                  <span className="text-emerald-400 font-bold">24 ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Gubitak paketa:</span>
                  <span className="text-emerald-400 font-bold">0.0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Nema pretplata (Source-Connect štednja do 1.200 EUR/god.) • 100% vlasnički sistem</span>
            </div>
            <span className="font-mono text-amber-400 font-bold hidden sm:inline">0 KM TROŠKOVA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
