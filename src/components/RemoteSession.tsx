"use client";

import React, { useState } from "react";
import { Mic, MicOff, Volume2, Radio, CheckCircle, Sparkles, Star, Headphones, Sliders, ShieldCheck } from "lucide-react";

export default function RemoteSession() {
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [talkbackActive, setTalkbackActive] = useState<boolean>(false);
  const [selectedTake, setSelectedTake] = useState<number>(2);

  return (
    <section id="live-session" className="py-20 md:py-28 bg-[#140e0b] border-t border-amber-950/40 relative overflow-hidden">
      {/* Warm atmospheric glows */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[450px] bg-studio-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-500/15 border border-studio-500/30 text-studio-400 text-xs font-semibold mb-4">
            <Radio className="w-3.5 h-3.5 text-studio-500 animate-pulse" />
            <span>P2P WebRTC Audio Režija • Opus 48kHz Stereo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Pratite snimanje uživo iz svoje kancelarije <br className="hidden sm:inline" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-studio-400 to-amber-500">
              bez instalacije softvera i bez Zoom kompresije.
            </span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Isti besprijekoran nivo kontrole kao kod Source-Connect Now ili SessionLinkPRO servisa, 
            ali ugrađeno direktno na našem serveru — bez skupih licenci i posrednika. 
            Klijent dobija link, sluša nekompresovan studijski mikrofon u realnom vremenu i vodi sesiju direktno sa Sinišom Zelićem.
          </p>
        </div>

        {/* Live Session Interactive Console */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#1d140f] border border-amber-900/40 shadow-2xl p-6 sm:p-8 md:p-10 relative">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-950/60 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#281c15] border border-amber-800/40 flex items-center justify-center text-studio-400 shadow-inner">
                <Headphones className="w-5 h-5 text-studio-500" />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Sesija: Kampanja „Balkan Master Voice”</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                    P2P POVEZANO • 24ms
                  </span>
                </div>
                <div className="text-xs text-stone-400">
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
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/40 border border-red-500 animate-pulse"
                    : "bg-[#281c15] text-stone-400 hover:text-white border border-amber-950"
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${isRecording ? "bg-white" : "bg-stone-500"}`} />
                <span>{isRecording ? "● ON AIR / REC" : "STANDBY (PAUZA)"}</span>
              </button>
            </div>
          </div>

          {/* Center Stage: Live Script & Talkback Column */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            {/* Live Script Column */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider font-mono">
                  Scenario u toku snimanja
                </span>
                <span className="text-[11px] font-mono text-stone-400">TVC 20s • Regionalna adaptacija</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#140e0b]/90 border border-amber-950/70 space-y-3 text-sm text-stone-200 leading-relaxed">
                <p>
                  <strong className="text-studio-400">[Spiker, sigurno i toplo]:</strong>{" "}
                  „Zaboravite sve što ste mislili o kompromisima. Nova generacija donosi tihu snagu i nepogrešiv stil.”
                </p>
                <p>
                  <strong className="text-amber-400">[Spiker, meki prelaz na CTA]:</strong>{" "}
                  „Pronađite svoj model u svim ovlaštenim salonima do kraja mjeseca. Rezervišite probnu vožnju već danas.”
                </p>
                <div className="pt-2.5 border-t border-amber-950/60 flex items-center justify-between text-xs text-stone-400">
                  <span className="italic">
                    Napomena režisera (Siniša): U Tejku 2 je disanje korigovano na 0.6s, tempo savršeno leži na 19.4 sekundi.
                  </span>
                </div>
              </div>

              {/* Take Selector */}
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <span className="text-xs font-semibold text-stone-400">Snimljeni tejkovi:</span>
                {[1, 2, 3, 4].map((take) => (
                  <button
                    key={take}
                    onClick={() => setSelectedTake(take)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                      selectedTake === take
                        ? "bg-studio-500 text-white shadow-md font-mono"
                        : "bg-[#281c15] text-stone-400 hover:text-white font-mono border border-amber-950/60"
                    }`}
                  >
                    <span>Tejk {take}</span>
                    {take === 2 && <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />}
                  </button>
                ))}
                <span className="text-[11px] text-emerald-400 ml-2 font-medium">
                  {selectedTake === 2 ? "★ Odobreno za master obradu" : ""}
                </span>
              </div>
            </div>

            {/* Talkback & Controls Column */}
            <div className="md:col-span-4 flex flex-col justify-between p-5 rounded-2xl bg-[#140e0b]/90 border border-amber-950/70">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider font-mono">
                    Režijski Talkback
                  </span>
                  <Sliders className="w-3.5 h-3.5 text-stone-400" />
                </div>

                {/* Big Push-To-Talk Button */}
                <button
                  onMouseDown={() => setTalkbackActive(true)}
                  onMouseUp={() => setTalkbackActive(false)}
                  onTouchStart={() => setTalkbackActive(true)}
                  onTouchEnd={() => setTalkbackActive(false)}
                  className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-2 cursor-pointer transition-all select-none shadow-xl ${
                    talkbackActive
                      ? "bg-emerald-500 text-stone-950 scale-95 shadow-emerald-500/30"
                      : "bg-[#2a1c15] hover:bg-[#34241b] text-white border border-amber-800/40"
                  }`}
                >
                  {talkbackActive ? <Mic className="w-6 h-6 animate-pulse" /> : <MicOff className="w-6 h-6 text-stone-400" />}
                  <span>{talkbackActive ? "TALKBACK AKTIVAN" : "DRŽITE ZA GOVOR (PTT)"}</span>
                </button>

                <p className="text-[11px] text-stone-400 text-center leading-relaxed">
                  Dok držite taster, vaš glas ide direktno u slušalice režisera i spikera u kabini bez kompresije i bez kašnjenja.
                </p>
              </div>

              {/* Stream Specs */}
              <div className="pt-4 border-t border-amber-950/60 space-y-1.5 text-[11px] font-mono text-stone-400">
                <div className="flex justify-between">
                  <span>Audio format:</span>
                  <span className="text-white font-semibold">Opus 48 kHz / 320 kbps</span>
                </div>
                <div className="flex justify-between">
                  <span>Latencija veze:</span>
                  <span className="text-emerald-400 font-bold">24 ms (Direct P2P)</span>
                </div>
                <div className="flex justify-between">
                  <span>Integritet signala:</span>
                  <span className="text-emerald-400 font-bold">0.0% gubitak (Master feed)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="p-4 rounded-xl bg-[#140e0b] border border-amber-950/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Bez posredničkih licenci — Source-Connect i SessionLinkPRO ušteda do 1.200 EUR godišnje po klijentu.
              </span>
            </div>
            <span className="font-mono text-studio-400 font-bold bg-studio-500/10 px-2.5 py-1 rounded-lg border border-studio-500/30 shrink-0">
              100% IN-HOUSE SISTEM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
