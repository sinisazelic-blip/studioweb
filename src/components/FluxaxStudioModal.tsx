"use client";

import React, { useState } from "react";
import {
  Radio,
  Headphones,
  Mic,
  Sliders,
  Sparkles,
  CheckCircle2,
  X,
  Activity,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface FluxaxStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FluxaxStudioModal({ isOpen, onClose }: FluxaxStudioModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "bridge" | "hub" | "specs">("overview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0e1218] border border-amber-500/30 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] text-slate-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* TOP ACCENT HOOD (CLA WINE-RED / CHERRY METALLIC GLOW) */}
        <div className="h-2 w-full bg-gradient-to-r from-red-900 via-amber-500 to-red-900" />

        {/* MODAL HEADER */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-800/80 flex items-center justify-between bg-gradient-to-b from-[#161b24] to-[#0e1218]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500/20 to-red-500/10 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/10">
              <Radio className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                  Studio TAF & FluxaX Tehnologija
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold">
                  v1.2.0 Broadcast
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>FluxaX StudioBridge & Client HUB</span>
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* NAVIGATION TABS */}
        <div className="px-6 sm:px-8 bg-[#12161f] border-b border-slate-800/60 flex gap-2 sm:gap-4 overflow-x-auto py-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "overview"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            01 • Pregled Sistema
          </button>
          <button
            onClick={() => setActiveTab("bridge")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "bridge"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            02 • StudioBridge (Naša Režija)
          </button>
          <button
            onClick={() => setActiveTab("hub")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "hub"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            03 • Client HUB (Vaš Klijentski Pult)
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "specs"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            04 • Audio Arhitektura & RME TotalMix
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#181d27] via-[#12161f] to-[#0c0e14] border border-amber-500/20 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-2xl relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tehnologija 40 Godina Studijskog Iskustva</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Režirajte snimanje spikera iz Vaše agencije ili doma.
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Studio TAF je razvio namjensku platformu za agencije i klijente. Slušajte sirov master zvuk iz naše gluvove sobe sa <strong>18ms latencije</strong>, razgovarajte sa spikerom u realnom vremenu i ocjenjujte tejkove zvjezdicama bez instalacije bilo kakvog softvera.
                  </p>
                </div>
              </div>

              {/* Two Core Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#131720] border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      REŽIJSKA KONZOLA (PORT 4040)
                    </span>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white">FluxaX StudioBridge</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Hardverski rack procesor u režiji Studija TAF. Nativno komunicira sa RME TotalMix interfejsom preko OSC protokola (UDP 7001).
                    </p>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Zero-Bleed DSP matrica bez unutrašnjeg odjeka</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Vintage CLA cherry-metallic rek sa Fender krom logotipom</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-[#131720] border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      KLIJENTSKI WEB PULT (PORT 1991)
                    </span>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white">FluxaX Client HUB</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Klijentski interaktivni pult. Naručilac ulazi jednim klikom preko sigurnog linka sa računara, tableta ili telefona.
                    </p>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Stvarni analogni VU metri povezani na zvuk iz studija</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Nezavisni tasteri i Talkback mikrofoni za Naručioca i Klijenta</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STUDIO BRIDGE */}
          {activeTab === "bridge" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-[#131720] border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Naša Režija: Nativni RME OSC Kontroler</h4>
                    <p className="text-xs text-slate-400">Direktna hardverska integracija sa RME TotalMix FX sistemom</p>
                  </div>
                </div>

                {/* Screenshot Display */}
                <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-[#090b0e] p-2 sm:p-4 shadow-xl">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-[11px] font-mono text-amber-400 font-bold mb-3">
                    <span className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      <span>STUDIOBRIDGE CONSOLE (VINTAGE ANALOG RACK)</span>
                    </span>
                    <span className="text-slate-400">TotalMix OSC Control</span>
                  </div>
                  <div className="rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
                    <img
                      src="/photo/StudioBridge/StudioBridge UI.png"
                      alt="FluxaX StudioBridge Console"
                      className="w-full max-h-[380px] object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CLIENT HUB */}
          {activeTab === "hub" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-[#131720] border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Vaš Klijentski Pult: Chris Lord-Alge Rek</h4>
                    <p className="text-xs text-slate-400">Analogni studio u pretraživaču bez instalacije softvera</p>
                  </div>
                </div>

                {/* Screenshot Display */}
                <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-[#090b0e] p-2 sm:p-4 shadow-xl">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-[11px] font-mono text-teal-400 font-bold mb-3">
                    <span className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      <span>CLIENT HUB (CHRIS LORD-ALGE ANALOG RACK)</span>
                    </span>
                    <span className="text-slate-400">Zero-Install Web</span>
                  </div>
                  <div className="rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
                    <img
                      src="/photo/ClientHUB/ClientHUB guest.png"
                      alt="FluxaX Client HUB Console"
                      className="w-full max-h-[380px] object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SPECS */}
          {activeTab === "specs" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-[#131720] border border-slate-800 space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span>Tehničke Specifikacije i Protokoli</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <span className="font-mono text-amber-400 font-bold">AUDIO STRIMING</span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>• <strong>Format:</strong> 48.000 Hz, 24-Bit Stereo PCM / Opus</li>
                      <li>• <strong>Latencija:</strong> ~18 ms (P2P WebRTC)</li>
                      <li>• <strong>Zaštita:</strong> DTLS-SRTP end-to-end enkripcija</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <span className="font-mono text-teal-400 font-bold">HARDVERSKA VEZA</span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>• <strong>RME TotalMix FX:</strong> OSC UDP 7001</li>
                      <li>• <strong>Komande:</strong> /1/talkback, /1/volume</li>
                      <li>• <strong>DSP matrica:</strong> Zero-Bleed sabiranje bez jeke</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="px-6 sm:px-8 py-4 bg-[#12161f] border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Studio TAF omogućava besplatno testiranje sistema svim stalnim klijentima i agencijama.</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 cursor-pointer flex items-center gap-2"
          >
            <span>Zatvori Prikaz</span>
          </button>
        </div>
      </div>
    </div>
  );
}
