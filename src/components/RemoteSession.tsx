"use client";

import React, { useState } from "react";
import { Mic, MicOff, Volume2, Radio, CheckCircle, Sparkles, Star, Headphones, Sliders, ShieldCheck } from "lucide-react";

export default function RemoteSession() {
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [talkbackActive, setTalkbackActive] = useState<boolean>(false);
  const [selectedTake, setSelectedTake] = useState<number>(2);

  return (
    <section id="live-session" className="py-24 md:py-36 border-t border-stone-200 relative overflow-hidden bg-[#faf7f2]">
      {/* Full Photographic Section Background from /pokaz/ */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-110 saturate-125"
        style={{
          backgroundImage: `url('/pokaz/DSC_2653.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/92 via-[#faf7f2]/84 to-[#faf7f2]/94 pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-orange-300 text-orange-950 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <Radio className="w-4 h-4 text-orange-600 animate-pulse" />
            <span>P2P WebRTC Audio Režija • Opus 48kHz Stereo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-stone-950 tracking-tight mb-6 font-display uppercase">
            Pratite snimanje uživo iz svoje kancelarije <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600">
              bez instalacije softvera i bez Zoom kompresije.
            </span>
          </h2>
          <p className="text-stone-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
            Isti besprijekoran nivo kontrole kao kod Source-Connect Now ili SessionLinkPRO servisa, 
            ali ugrađeno direktno na našem serveru — bez skupih licenci i posrednika. 
            Klijent dobija link, sluša nekompresovan studijski mikrofon u realnom vremenu i vodi sesiju direktno sa Sinišom Zelićem.
          </p>
        </div>

        {/* Live Session Interactive Console - Wide Layout */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-white border-2 border-stone-200/90 shadow-2xl p-8 sm:p-14 relative mb-16">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-stone-100 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-300 flex items-center justify-center text-orange-600 shadow-xs">
                <Headphones className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-3">
                  <span>Sesija: Kampanja „Balkan Master Voice”</span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                    P2P POVEZANO • 24ms
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-stone-500 font-medium mt-0.5">
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
                    : "bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-300"
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${isRecording ? "bg-white" : "bg-stone-400"}`} />
                <span>{isRecording ? "● ON AIR / REC" : "STANDBY (PAUZA)"}</span>
              </button>
            </div>
          </div>

          {/* Center Stage: Live Script & Talkback Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            {/* Live Script Column */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-stone-700 uppercase tracking-wider font-mono">
                  Scenario u toku snimanja
                </span>
                <span className="text-xs font-mono text-stone-500 font-semibold">TVC 20s • Regionalna adaptacija</span>
              </div>
              <div className="p-7 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-base text-stone-800 leading-relaxed font-medium">
                <p>
                  <strong className="text-orange-600 font-bold">[Spiker, sigurno i toplo]:</strong>{" "}
                  „Zaboravite sve što ste mislili o kompromisima. Nova generacija donosi tihu snagu i nepogrešiv stil.”
                </p>
                <p>
                  <strong className="text-amber-700 font-bold">[Spiker, meki prelaz na CTA]:</strong>{" "}
                  „Pronađite svoj model u svim ovlaštenim salonima do kraja mjeseca. Rezervišite probnu vožnju već danas.”
                </p>
                <div className="pt-3.5 border-t border-stone-200 flex items-center justify-between text-xs sm:text-sm text-stone-500 font-medium">
                  <span className="italic">
                    Napomena režisera (Siniša): U Tejku 2 je disanje korigovano na 0.6s, tempo savršeno leži na 19.4 sekundi.
                  </span>
                </div>
              </div>

              {/* Take Selector */}
              <div className="flex items-center gap-3 pt-2 flex-wrap">
                <span className="text-xs sm:text-sm font-semibold text-stone-600">Snimljeni tejkovi:</span>
                {[1, 2, 3, 4].map((take) => (
                  <button
                    key={take}
                    onClick={() => setSelectedTake(take)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all flex items-center gap-2 ${
                      selectedTake === take
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md font-mono"
                        : "bg-white text-stone-700 hover:text-stone-900 font-mono border border-stone-200"
                    }`}
                  >
                    <span>Tejk {take}</span>
                    {take === 2 && <Star className="w-4 h-4 fill-amber-300 text-amber-300" />}
                  </button>
                ))}
                <span className="text-xs sm:text-sm text-emerald-700 ml-2 font-bold">
                  {selectedTake === 2 ? "★ Odobreno za master obradu" : ""}
                </span>
              </div>
            </div>

            {/* Talkback & Controls Column */}
            <div className="lg:col-span-4 flex flex-col justify-between p-7 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-stone-700 uppercase tracking-wider font-mono">
                    Režijski Talkback
                  </span>
                  <Sliders className="w-4 h-4 text-stone-500" />
                </div>

                {/* Big Push-To-Talk Button */}
                <button
                  onMouseDown={() => setTalkbackActive(true)}
                  onMouseUp={() => setTalkbackActive(false)}
                  onTouchStart={() => setTalkbackActive(true)}
                  onTouchEnd={() => setTalkbackActive(false)}
                  className={`w-full py-7 rounded-2xl font-black text-sm uppercase tracking-wider flex flex-col items-center justify-center gap-3 cursor-pointer transition-all select-none shadow-lg ${
                    talkbackActive
                      ? "bg-emerald-600 text-white scale-95 shadow-emerald-500/30"
                      : "bg-stone-900 hover:bg-stone-800 text-white"
                  }`}
                >
                  {talkbackActive ? <Mic className="w-8 h-8 animate-pulse" /> : <MicOff className="w-8 h-8 text-stone-400" />}
                  <span>{talkbackActive ? "TALKBACK AKTIVAN" : "DRŽITE ZA GOVOR (PTT)"}</span>
                </button>

                <p className="text-xs text-stone-500 text-center leading-relaxed font-medium">
                  Dok držite taster, vaš glas ide direktno u slušalice režisera i spikera u kabini bez kompresije i bez kašnjenja.
                </p>
              </div>

              {/* Stream Specs */}
              <div className="pt-6 border-t border-stone-200 space-y-2 text-xs sm:text-sm font-mono text-stone-600">
                <div className="flex justify-between">
                  <span>Audio format:</span>
                  <span className="text-stone-950 font-bold">Opus 48 kHz / 320 kbps</span>
                </div>
                <div className="flex justify-between">
                  <span>Latencija veze:</span>
                  <span className="text-emerald-700 font-bold">24 ms (Direct P2P)</span>
                </div>
                <div className="flex justify-between">
                  <span>Integritet signala:</span>
                  <span className="text-emerald-700 font-bold">0.0% gubitak (Master)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-600">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-medium">
                Bez posredničkih licenci — Source-Connect i SessionLinkPRO ušteda do 1.200 EUR godišnje po klijentu.
              </span>
            </div>
            <span className="font-mono text-orange-700 font-bold bg-orange-100 px-3.5 py-1.5 rounded-xl border border-orange-200 shrink-0 text-xs">
              100% IN-HOUSE SISTEM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
