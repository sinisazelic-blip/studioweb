"use client";

import React, { useState } from "react";
import { Mic, MicOff, Volume2, Radio, CheckCircle, Sparkles, Star, Headphones, Sliders, ShieldCheck } from "lucide-react";

export default function RemoteSession() {
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [talkbackActive, setTalkbackActive] = useState<boolean>(false);
  const [selectedTake, setSelectedTake] = useState<number>(2);

  return (
    <section id="live-session" className="py-20 md:py-28 bg-[#fbf9f5] border-t border-stone-200 relative overflow-hidden">
      {/* Light Warm Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[350px] bg-rose-100/50 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[300px] bg-orange-100/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold mb-4">
            <Radio className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
            <span>P2P WebRTC Audio Režija • Opus 48kHz Stereo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight mb-4 font-display uppercase">
            Pratite snimanje uživo iz svoje kancelarije <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600">
              bez instalacije softvera i bez Zoom kompresije.
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Isti besprijekoran nivo kontrole kao kod Source-Connect Now ili SessionLinkPRO servisa, 
            ali ugrađeno direktno na našem serveru — bez skupih licenci i posrednika. 
            Klijent dobija link, sluša nekompresovan studijski mikrofon u realnom vremenu i vodi sesiju direktno sa Sinišom Zelićem.
          </p>
        </div>

        {/* Live Session Interactive Console */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-stone-200/90 shadow-xl p-6 sm:p-8 md:p-10 relative">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shadow-xs">
                <Headphones className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <span>Sesija: Kampanja „Balkan Master Voice”</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                    P2P POVEZANO • 24ms
                  </span>
                </div>
                <div className="text-xs text-stone-500">
                  Režija & Vođenje: Siniša Zelić • Vokalna soba: Talent A (Neumann U87) • Agencija: Zagreb / Sarajevo
                </div>
              </div>
            </div>

            {/* Studio On-Air Jewel Light */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  isRecording
                    ? "bg-red-600 text-white shadow-md shadow-red-600/30 border border-red-500 animate-pulse"
                    : "bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-300"
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${isRecording ? "bg-white" : "bg-stone-400"}`} />
                <span>{isRecording ? "● ON AIR / REC" : "STANDBY (PAUZA)"}</span>
              </button>
            </div>
          </div>

          {/* Center Stage: Live Script & Talkback Column */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            {/* Live Script Column */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                  Scenario u toku snimanja
                </span>
                <span className="text-[11px] font-mono text-stone-500">TVC 20s • Regionalna adaptacija</span>
              </div>
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 text-sm text-stone-800 leading-relaxed">
                <p>
                  <strong className="text-orange-600">[Spiker, sigurno i toplo]:</strong>{" "}
                  „Zaboravite sve što ste mislili o kompromisima. Nova generacija donosi tihu snagu i nepogrešiv stil.”
                </p>
                <p>
                  <strong className="text-amber-700">[Spiker, meki prelaz na CTA]:</strong>{" "}
                  „Pronađite svoj model u svim ovlaštenim salonima do kraja mjeseca. Rezervišite probnu vožnju već danas.”
                </p>
                <div className="pt-2.5 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                  <span className="italic">
                    Napomena režisera (Siniša): U Tejku 2 je disanje korigovano na 0.6s, tempo savršeno leži na 19.4 sekundi.
                  </span>
                </div>
              </div>

              {/* Take Selector */}
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <span className="text-xs font-semibold text-stone-600">Snimljeni tejkovi:</span>
                {[1, 2, 3, 4].map((take) => (
                  <button
                    key={take}
                    onClick={() => setSelectedTake(take)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                      selectedTake === take
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md font-mono"
                        : "bg-white text-stone-700 hover:text-stone-900 font-mono border border-stone-200"
                    }`}
                  >
                    <span>Tejk {take}</span>
                    {take === 2 && <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />}
                  </button>
                ))}
                <span className="text-[11px] text-emerald-700 ml-2 font-bold">
                  {selectedTake === 2 ? "★ Odobreno za master obradu" : ""}
                </span>
              </div>
            </div>

            {/* Talkback & Controls Column */}
            <div className="md:col-span-4 flex flex-col justify-between p-5 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                    Režijski Talkback
                  </span>
                  <Sliders className="w-3.5 h-3.5 text-stone-500" />
                </div>

                {/* Big Push-To-Talk Button */}
                <button
                  onMouseDown={() => setTalkbackActive(true)}
                  onMouseUp={() => setTalkbackActive(false)}
                  onTouchStart={() => setTalkbackActive(true)}
                  onTouchEnd={() => setTalkbackActive(false)}
                  className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-2 cursor-pointer transition-all select-none shadow-md ${
                    talkbackActive
                      ? "bg-emerald-600 text-white scale-95 shadow-emerald-500/30"
                      : "bg-stone-900 hover:bg-stone-800 text-white"
                  }`}
                >
                  {talkbackActive ? <Mic className="w-6 h-6 animate-pulse" /> : <MicOff className="w-6 h-6 text-stone-400" />}
                  <span>{talkbackActive ? "TALKBACK AKTIVAN" : "DRŽITE ZA GOVOR (PTT)"}</span>
                </button>

                <p className="text-[11px] text-stone-500 text-center leading-relaxed font-medium">
                  Dok držite taster, vaš glas ide direktno u slušalice režisera i spikera u kabini bez kompresije i bez kašnjenja.
                </p>
              </div>

              {/* Stream Specs */}
              <div className="pt-4 border-t border-stone-200 space-y-1.5 text-[11px] font-mono text-stone-600">
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
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Bez posredničkih licenci — Source-Connect i SessionLinkPRO ušteda do 1.200 EUR godišnje po klijentu.
              </span>
            </div>
            <span className="font-mono text-orange-700 font-bold bg-orange-100 px-2.5 py-1 rounded-lg border border-orange-200 shrink-0">
              100% IN-HOUSE SISTEM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
