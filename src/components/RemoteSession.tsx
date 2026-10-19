"use client";

import React, { useState } from "react";
import { Mic, MicOff, Volume2, Radio, CheckCircle, Sparkles, Star, Headphones, Sliders, ShieldCheck } from "lucide-react";

export default function RemoteSession() {
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [talkbackActive, setTalkbackActive] = useState<boolean>(false);
  const [selectedTake, setSelectedTake] = useState<number>(2);

  return (
    <section id="live-session" className="py-24 md:py-36 bg-[#08090d] border-t border-zinc-800/80 relative overflow-hidden">
      {/* Full Photographic Section Background from /pokaz/ */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-125"
        style={{
          backgroundImage: `url('/pokaz/DSC_2653.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090d] via-[#08090d]/90 to-[#08090d] pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151f] border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <Radio className="w-4 h-4 text-orange-500 animate-pulse" />
            <span>P2P WebRTC Audio Režija • Opus 48kHz Stereo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 font-display uppercase">
            Pratite snimanje uživo iz svoje kancelarije <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
              bez instalacije softvera i bez Zoom kompresije.
            </span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-3xl mx-auto">
            Isti besprijekoran nivo kontrole kao kod Source-Connect Now ili SessionLinkPRO servisa, 
            ali ugrađeno direktno na našem serveru — bez skupih licenci i posrednika. 
            Klijent dobija link, sluša nekompresovan studijski mikrofon u realnom vremenu i vodi sesiju direktno sa Sinišom Zelićem.
          </p>
        </div>

        {/* Live Session Interactive Console - Wide Layout */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#11131c] border border-zinc-800 shadow-2xl p-8 sm:p-14 relative mb-16">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-zinc-800 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1a1e2c] border border-zinc-700 flex items-center justify-center text-orange-400 shadow-xs">
                <Headphones className="w-7 h-7 text-orange-400" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                  <span>Sesija: Kampanja „Balkan Master Voice”</span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 font-bold">
                    P2P POVEZANO • 24ms
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-0.5">
                  Režija & Vođenje: Siniša Zelić • Vokalna soba: Talent A (Neumann U87) • Agencija: Zagreb / Sarajevo
                </div>
              </div>
            </div>

            {/* Studio On-Air Jewel Light */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`px-5 py-2.5 rounded-2xl font-mono text-xs sm:text-sm font-bold flex items-center gap-2.5 cursor-pointer transition-all ${
                  isRecording
                    ? "bg-red-600 text-white shadow-xl shadow-red-600/30 border border-red-500 animate-pulse"
                    : "bg-[#181c28] text-zinc-400 hover:text-white border border-zinc-700"
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${isRecording ? "bg-white" : "bg-zinc-500"}`} />
                <span>{isRecording ? "● ON AIR / REC" : "STANDBY (PAUZA)"}</span>
              </button>
            </div>
          </div>

          {/* Center Stage: Live Script & Talkback Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            {/* Live Script Column */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-zinc-300 uppercase tracking-wider font-mono">
                  Scenario u toku snimanja
                </span>
                <span className="text-xs font-mono text-zinc-400 font-semibold">TVC 20s • Regionalna adaptacija</span>
              </div>
              <div className="p-7 rounded-2xl bg-[#161924] border border-zinc-800 space-y-4 text-base text-zinc-200 leading-relaxed font-normal">
                <p>
                  <strong className="text-orange-400 font-bold">[Spiker, sigurno i toplo]:</strong>{" "}
                  „Zaboravite sve što ste mislili o kompromisima. Nova generacija donosi tihu snagu i nepogrešiv stil.”
                </p>
                <p>
                  <strong className="text-amber-400 font-bold">[Spiker, meki prelaz na CTA]:</strong>{" "}
                  „Pronađite svoj model u svim ovlaštenim salonima do kraja mjeseca. Rezervišite probnu vožnju već danas.”
                </p>
                <div className="pt-3.5 border-t border-zinc-800 flex items-center justify-between text-xs sm:text-sm text-zinc-400 font-medium">
                  <span className="italic">
                    Napomena režisera (Siniša): U Tejku 2 je disanje korigovano na 0.6s, tempo savršeno leži na 19.4 sekundi.
                  </span>
                </div>
              </div>

              {/* Take Selector */}
              <div className="flex items-center gap-3 pt-2 flex-wrap">
                <span className="text-xs sm:text-sm font-semibold text-zinc-400">Snimljeni tejkovi:</span>
                {[1, 2, 3, 4].map((take) => (
                  <button
                    key={take}
                    onClick={() => setSelectedTake(take)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all flex items-center gap-2 ${
                      selectedTake === take
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md font-mono"
                        : "bg-[#181c28] text-zinc-300 hover:text-white font-mono border border-zinc-700"
                    }`}
                  >
                    <span>Tejk {take}</span>
                    {take === 2 && <Star className="w-4 h-4 fill-amber-300 text-amber-300" />}
                  </button>
                ))}
                <span className="text-xs sm:text-sm text-emerald-400 ml-2 font-bold">
                  {selectedTake === 2 ? "★ Odobreno za master obradu" : ""}
                </span>
              </div>
            </div>

            {/* Talkback & Controls Column */}
            <div className="lg:col-span-4 flex flex-col justify-between p-7 rounded-2xl bg-[#161924] border border-zinc-800">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-zinc-300 uppercase tracking-wider font-mono">
                    Režijski Talkback
                  </span>
                  <Sliders className="w-4 h-4 text-zinc-400" />
                </div>

                {/* Big Push-To-Talk Button */}
                <button
                  onMouseDown={() => setTalkbackActive(true)}
                  onMouseUp={() => setTalkbackActive(false)}
                  onTouchStart={() => setTalkbackActive(true)}
                  onTouchEnd={() => setTalkbackActive(false)}
                  className={`w-full py-7 rounded-2xl font-black text-sm uppercase tracking-wider flex flex-col items-center justify-center gap-3 cursor-pointer transition-all select-none shadow-xl ${
                    talkbackActive
                      ? "bg-emerald-600 text-white scale-95 shadow-emerald-500/30"
                      : "bg-[#1e2332] hover:bg-[#252b3e] text-white border border-zinc-700"
                  }`}
                >
                  {talkbackActive ? <Mic className="w-8 h-8 animate-pulse" /> : <MicOff className="w-8 h-8 text-zinc-400" />}
                  <span>{talkbackActive ? "TALKBACK AKTIVAN" : "DRŽITE ZA GOVOR (PTT)"}</span>
                </button>

                <p className="text-xs text-zinc-400 text-center leading-relaxed font-normal">
                  Dok držite taster, vaš glas ide direktno u slušalice režisera i spikera u kabini bez kompresije i bez kašnjenja.
                </p>
              </div>

              {/* Stream Specs */}
              <div className="pt-6 border-t border-zinc-800 space-y-2 text-xs sm:text-sm font-mono text-zinc-400">
                <div className="flex justify-between">
                  <span>Audio format:</span>
                  <span className="text-white font-bold">Opus 48 kHz / 320 kbps</span>
                </div>
                <div className="flex justify-between">
                  <span>Latencija veze:</span>
                  <span className="text-emerald-400 font-bold">24 ms (Direct P2P)</span>
                </div>
                <div className="flex justify-between">
                  <span>Integritet signala:</span>
                  <span className="text-emerald-400 font-bold">0.0% gubitak (Master)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="p-6 rounded-2xl bg-[#161924] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="font-normal text-zinc-300">
                Bez posredničkih licenci — Source-Connect i SessionLinkPRO ušteda do 1.200 EUR godišnje po klijentu.
              </span>
            </div>
            <span className="font-mono text-orange-400 font-bold bg-orange-950/70 px-3.5 py-1.5 rounded-xl border border-orange-500/40 shrink-0 text-xs">
              100% IN-HOUSE SISTEM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
