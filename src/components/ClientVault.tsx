"use client";

import React, { useState } from "react";
import { Server, Play, Pause, Download, Share2, Check, Lock, ShieldCheck, FileAudio, ArrowRight, Copy } from "lucide-react";

interface AudioTrack {
  id: string;
  market: "bih" | "cro" | "srb";
  title: string;
  duration: string;
  type: string;
  format: string;
  fileSize: string;
}

const DEMO_TRACKS: AudioTrack[] = [
  // BiH
  { id: "bih-tv", market: "bih", title: "Regionalna Kampanja TV 30s (Ijekavica • KM)", duration: "0:30", type: "Full Broadcast Mix", format: "WAV 24-bit / 48kHz", fileSize: "8.4 MB" },
  { id: "bih-radio", market: "bih", title: "Radio Spot 20s (Ijekavica • Akcija)", duration: "0:20", type: "Radio Master EBU R128", format: "WAV 24-bit / 48kHz", fileSize: "5.6 MB" },
  { id: "bih-dry", market: "bih", title: "Suvi Glas / Dry Voiceover (Talent 1)", duration: "0:45", type: "Dry Voiceover", format: "WAV 24-bit / 48kHz", fileSize: "12.8 MB" },
  // CRO
  { id: "cro-tv", market: "cro", title: "Regionalna Kampanja TV 30s (Zagrebački naglasak • EUR)", duration: "0:30", type: "Full Broadcast Mix", format: "WAV 24-bit / 48kHz", fileSize: "8.4 MB" },
  { id: "cro-radio", market: "cro", title: "Radio Spot 20s (CRO Tržište • EUR)", duration: "0:20", type: "Radio Master EBU R128", format: "WAV 24-bit / 48kHz", fileSize: "5.6 MB" },
  { id: "cro-dry", market: "cro", title: "Suvi Glas / Dry Voiceover (CRO Spiker)", duration: "0:40", type: "Dry Voiceover", format: "WAV 24-bit / 48kHz", fileSize: "11.2 MB" },
  // SRB
  { id: "srb-tv", market: "srb", title: "Regionalna Kampanja TV 30s (Ekavica • RSD)", duration: "0:30", type: "Full Broadcast Mix", format: "WAV 24-bit / 48kHz", fileSize: "8.4 MB" },
  { id: "srb-radio", market: "srb", title: "Radio Spot 20s (SRB Tržište • RSD)", duration: "0:20", type: "Radio Master EBU R128", format: "WAV 24-bit / 48kHz", fileSize: "5.6 MB" },
  { id: "srb-dry", market: "srb", title: "Suvi Glas / Dry Voiceover (SRB Spiker)", duration: "0:42", type: "Dry Voiceover", format: "WAV 24-bit / 48kHz", fileSize: "11.8 MB" },
];

export default function ClientVault() {
  const [activeMarket, setActiveMarket] = useState<"bih" | "cro" | "srb">("bih");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [pinInput, setPinInput] = useState<string>("TAF-2026");
  const [isUnlocked, setIsUnlocked] = useState<boolean>(true);

  const tracks = DEMO_TRACKS.filter((t) => t.market === activeMarket);

  const togglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  const copyShareLink = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section id="vault" className="py-20 md:py-28 bg-[#0c101d] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 text-xs font-semibold mb-4">
            <Server className="w-3.5 h-3.5 text-sky-400" />
            <span>Klijentski Distributivni Hab</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Zaboravite WeTransfer linkove koji ističu. <br className="hidden sm:inline" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-400 to-blue-500">
              Vaš trajni radni audio trezor.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Preslušajte mastere odmah u browseru bez preuzimanja gigabajta na telefon. 
            Segmentirajte materijale po tržištima (BiH, CRO, SRB) i jednim klikom proslijedite 
            namjenske linkove radio stanicama ili partnerskim studijima u Zagrebu i Beogradu.
          </p>
        </div>

        {/* Vault Main Container */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-8 md:p-10 max-w-5xl mx-auto">
          {/* Top Project Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Aktivna Kampanja</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Projekat: Jesenja Akcija — 3 Tržišta (Master Hub)
              </h3>
              <p className="text-xs text-slate-400">
                Klijent: Marketing Agencija • Snimanje: Studio TAF • Mastered: 24-bit Broadcast
              </p>
            </div>

            {/* Quick Share Pill */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => copyShareLink(`https://studiotaf.ba/share/${activeMarket}-master-pkg`)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? "Link kopiran!" : `Kopiraj link (${activeMarket.toUpperCase()})`}</span>
              </button>
            </div>
          </div>

          {/* Market Switcher Tabs */}
          <div className="flex items-center gap-2 mb-6 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800 w-fit">
            <button
              onClick={() => { setActiveMarket("bih"); setPlayingId(null); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeMarket === "bih"
                  ? "bg-sky-500 text-slate-950 shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🇧🇦</span>
              <span>BiH Tržište (KM)</span>
            </button>

            <button
              onClick={() => { setActiveMarket("cro"); setPlayingId(null); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeMarket === "cro"
                  ? "bg-sky-500 text-slate-950 shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🇭🇷</span>
              <span>Hrvatska (EUR)</span>
            </button>

            <button
              onClick={() => { setActiveMarket("srb"); setPlayingId(null); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeMarket === "srb"
                  ? "bg-sky-500 text-slate-950 shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🇷🇸</span>
              <span>Srbija (RSD)</span>
            </button>
          </div>

          {/* Tracklist & Instant Player */}
          <div className="space-y-3 mb-8">
            {tracks.map((track) => (
              <div
                key={track.id}
                className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  playingId === track.id
                    ? "bg-sky-950/30 border-sky-500/50 shadow-lg"
                    : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <button
                    onClick={() => togglePlay(track.id)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 cursor-pointer transition-all ${
                      playingId === track.id
                        ? "bg-sky-500 text-slate-950 shadow-md scale-105"
                        : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    }`}
                  >
                    {playingId === track.id ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{track.title}</span>
                      {playingId === track.id && (
                        <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>0:14 / {track.duration}</span>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                      <span className="text-sky-400 font-medium">{track.type}</span>
                      <span>•</span>
                      <span>{track.format}</span>
                      <span>•</span>
                      <span>{track.fileSize}</span>
                    </div>
                  </div>
                </div>

                {/* Track Action Buttons */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => copyShareLink(`https://studiotaf.ba/file/${track.id}`)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                    title="Kopiraj direktan share link samo za ovaj fajl"
                  >
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>Share</span>
                  </button>

                  <button
                    onClick={() => alert(`Preuzimanje ${track.title} započeto (simulacija).`)}
                    className="px-3 py-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer border border-sky-500/20"
                  >
                    <Download className="w-3 h-3" />
                    <span>Preuzmi</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Granular Studio Distribution Cards */}
          <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-left">
              <div className="text-xs font-bold text-sky-400 mb-1">Za Radio Stanice</div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Šalje se samo finalni miks normiran po EBU R128 (-23 LUFS), spreman za trenutno emitovanje u etar.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-left">
              <div className="text-xs font-bold text-amber-400 mb-1">Za Eksterne Studije (ZG/BG)</div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Šalje se samo suvi vokal (Dry Voiceover) u 24-bit 48kHz za montažu u njihovom finalnom miksu.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-left">
              <div className="text-xs font-bold text-emerald-400 mb-1">Za Klijente & Agencije</div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Jedan zbirni paket sa svim formatima, tekstualnim skriptama i potvrdom o autorskim pravima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
