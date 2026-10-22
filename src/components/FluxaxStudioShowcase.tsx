"use client";

import React from "react";
import {
  Radio,
  Headphones,
  Sliders,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Zap,
  Activity,
  Layers,
} from "lucide-react";

interface FluxaxStudioShowcaseProps {
  onOpenModal: () => void;
}

export default function FluxaxStudioShowcase({ onOpenModal }: FluxaxStudioShowcaseProps) {
  return (
    <section id="fluxax" className="py-20 md:py-28 bg-[#090c12] border-t border-slate-800/80 relative overflow-hidden text-white font-sans">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-wider shadow-sm">
            <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>FLUXAX AUDIO BROADCAST SUITE • ULTRA-LOW LATENCY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Režirajte snimanje spikera iz <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">Vaše Kancelarije</span>.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Zaboravite gubljenje vremena na vožnju kroz grad ili loše Zoom pozive koji kvare zvuk i prave mikrofoniju. 
            Stavite slušalice u vašoj agenciji, otvorite siguran link i slušajte nekomprimovan zvuk iz gluvove sobe sa <strong>18ms latencije</strong>.
          </p>
        </div>

        {/* Big Dual-Showcase Hardware Rack Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card A: StudioBridge (Režija) */}
          <div className="bg-[#11151e] border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between hover:border-amber-500/40 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <Sliders className="w-3 h-3" />
                  <span>NAŠA REŽIJA • STUDIO PROCESSOR</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500">RME TotalMix OSC</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  FluxaX StudioBridge
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Hardverski most povezan sa RME TotalMix digitalnim mikserom preko internog UDP porta 7001. Upravlja talkback sabiranjem bez jeke i šalje sirov 48kHz audio.
                </p>
              </div>

              {/* Real Photo Thumbnail */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-black/60 p-2 shadow-inner group-hover:border-slate-700 transition-all">
                <img
                  src="/photo/StudioBridge/StudioBridge UI.png"
                  alt="StudioBridge UI"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero-Bleed DSP sabirnica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Fender metalik retro izgled</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card B: Client HUB (Vaš Pult) */}
          <div className="bg-[#11151e] border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between hover:border-teal-500/40 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] font-mono text-teal-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <Headphones className="w-3 h-3" />
                  <span>VAŠA AGENCIJA • KLIJENTSKI PULT</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500">Zero-Install Web</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                  FluxaX Client HUB
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Chris Lord-Alge vintage analogni rek pult u vašem pretraživaču. Slušajte spikera i matricu, pričajte sa režijom i ocjenjujte tejkove uživo.
                </p>
              </div>

              {/* Real Photo Thumbnail */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-black/60 p-2 shadow-inner group-hover:border-slate-700 transition-all">
                <img
                  src="/photo/ClientHUB/ClientHUB guest.png"
                  alt="Client HUB Console"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Stereo LED VU metri uživo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Auto-Duck & Tejk Zvjezdice (★)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Strip & Call to Action Buttons */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141923] via-[#0f131a] to-[#141923] border border-slate-800 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Standard Vrhunskih Advertajzing Produkcija</span>
            </div>
            <p className="text-xs text-slate-300 max-w-xl">
              Nema instalacije programa kod klijenta. Sistem radi na računaru, Mac-u, tabletu i telefonu.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 cursor-pointer flex items-center gap-2"
            >
              <span>Otvori Detaljan FluxaX Prozor</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="http://localhost:1991"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-xs tracking-wider border border-slate-700 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Isprobajte Klijentski HUB Demo</span>
              <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
