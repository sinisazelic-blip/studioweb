"use client";

import React, { useState } from "react";
import { Server, Play, Pause, Download, Share2, Check, Lock, ShieldCheck, FileAudio, ArrowRight, Copy, Disc, Volume2, Sparkles } from "lucide-react";

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
  const [playingId, setPlayingId] = useState<string | null>("bih-tv");
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

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
    <section id="vault" className="py-24 md:py-36 border-t border-stone-200 relative overflow-hidden bg-[#faf7f2]">
      {/* Full Photographic Section Background from /pokaz/ */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-110 saturate-125"
        style={{
          backgroundImage: `url('/pokaz/20150326191142_StudioMasterDigiliveFrontWeb.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/92 via-[#faf7f2]/84 to-[#faf7f2]/94 pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-orange-300 text-orange-950 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <Server className="w-4 h-4 text-orange-600" />
            <span>Klijentski Distributivni Hab</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-stone-950 tracking-tight mb-6 font-display uppercase">
            Zaboravite WeTransfer linkove koji ističu. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
              Vaš trajni radni audio trezor.
            </span>
          </h2>
          <p className="text-stone-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
            Preslušajte mastere odmah u browseru bez preuzimanja gigabajta na telefon. 
            Segmentirajte materijale po tržištima (BiH, CRO, SRB) i jednim klikom proslijedite 
            namjenske linkove radio stanicama ili partnerskim studijima u Zagrebu i Beogradu.
          </p>
        </div>

        {/* Vault Main Container Styled Like a Premium Mastering Console - Wide Spacious Container */}
        <div className="rounded-3xl bg-white border-2 border-stone-200/90 shadow-2xl p-8 sm:p-14 mb-16">
          {/* Top Project Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-stone-100 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-mono text-orange-600 font-bold uppercase tracking-wider">
                  Aktivna Kampanja • 3 Tržišta
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-display uppercase">
                Projekat: Jesenja Akcija — Master Hub
              </h3>
              <p className="text-sm text-stone-600 font-medium">
                Klijent: Regionalna Marketing Agencija • Snimanje: Studio TAF • Master: 24-bit Broadcast
              </p>
            </div>

            {/* Quick Share Pill */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => copyShareLink(`https://studiotaf.ba/share/${activeMarket}-master-pkg`)}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-black flex items-center gap-2.5 transition-all cursor-pointer shadow-lg shadow-orange-500/25"
              >
                {copiedLink ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                <span>{copiedLink ? "Link kopiran!" : `Podijeli Paket (${activeMarket.toUpperCase()})`}</span>
              </button>
            </div>
          </div>

          {/* Market Switcher Tabs */}
          <div className="flex items-center gap-3 mb-8 p-2 rounded-2xl bg-stone-100/80 border border-stone-200 w-fit shadow-xs">
            <button
              onClick={() => { setActiveMarket("bih"); setPlayingId("bih-tv"); }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeMarket === "bih"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md font-extrabold"
                  : "text-stone-700 hover:text-stone-950"
              }`}
            >
              <span className="text-base">🇧🇦</span>
              <span>BiH Tržište (KM)</span>
            </button>

            <button
              onClick={() => { setActiveMarket("cro"); setPlayingId("cro-tv"); }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeMarket === "cro"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md font-extrabold"
                  : "text-stone-700 hover:text-stone-950"
              }`}
            >
              <span className="text-base">🇭🇷</span>
              <span>Hrvatska (EUR)</span>
            </button>

            <button
              onClick={() => { setActiveMarket("srb"); setPlayingId("srb-tv"); }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeMarket === "srb"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md font-extrabold"
                  : "text-stone-700 hover:text-stone-950"
              }`}
            >
              <span className="text-base">🇷🇸</span>
              <span>Srbija (RSD)</span>
            </button>
          </div>

          {/* Tracklist & Instant Player */}
          <div className="space-y-4 mb-10">
            {tracks.map((track) => (
              <div
                key={track.id}
                className={`p-5 sm:p-6 rounded-2xl border-2 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  playingId === track.id
                    ? "bg-orange-50/70 border-orange-400 shadow-md"
                    : "bg-stone-50/70 border-stone-200/90 hover:border-stone-300 shadow-xs"
                }`}
              >
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => togglePlay(track.id)}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 cursor-pointer transition-all ${
                      playingId === track.id
                        ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg scale-105"
                        : "bg-white text-stone-800 hover:bg-stone-100 border border-stone-200"
                    }`}
                  >
                    {playingId === track.id ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    )}
                  </button>

                  <div>
                    <div className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-3">
                      <span>{track.title}</span>
                      {playingId === track.id && (
                        <span className="text-xs text-emerald-800 font-mono flex items-center gap-1.5 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 font-bold">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                          <span>REPRODUKCIJA • 0:14 / {track.duration}</span>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-500 mt-1.5 font-mono font-medium">
                      <span className="text-orange-600 font-bold">{track.type}</span>
                      <span>•</span>
                      <span>{track.format}</span>
                      <span>•</span>
                      <span>{track.fileSize}</span>
                    </div>
                  </div>
                </div>

                {/* Track Action Buttons */}
                <div className="flex items-center gap-3 self-end sm:self-center">
                  <button
                    onClick={() => copyShareLink(`https://studiotaf.ba/file/${track.id}`)}
                    className="px-4 py-2.5 rounded-xl bg-white text-stone-700 hover:text-stone-900 hover:bg-stone-100 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer border border-stone-200 shadow-xs"
                    title="Kopiraj direktan share link samo za ovaj fajl"
                  >
                    <Copy className="w-4 h-4 text-orange-600" />
                    <span>Share</span>
                  </button>

                  <button
                    onClick={() => alert(`Preuzimanje ${track.title} započeto u punom 24-bit kvalitetu.`)}
                    className="px-5 py-2.5 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer border border-orange-200"
                  >
                    <Download className="w-4 h-4 text-orange-600" />
                    <span>Preuzmi WAV</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Granular Studio Distribution Cards - Wide 3-Column Layout */}
          <div className="pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-left shadow-xs">
              <div className="text-sm font-black text-orange-600 mb-2 font-display uppercase tracking-wider">
                Za Radio Stanice
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                Šalje se samo finalni miks normiran po EBU R128 (-23 LUFS), spreman za trenutno emitovanje u etar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-left shadow-xs">
              <div className="text-sm font-black text-amber-600 mb-2 font-display uppercase tracking-wider">
                Za Studije u ZG & BG
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                Šalje se samo suvi vokal (Dry Voiceover) u 24-bit 48kHz za montažu u njihovom finalnom miksu.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-left shadow-xs">
              <div className="text-sm font-black text-emerald-600 mb-2 font-display uppercase tracking-wider">
                Za Klijente & Agencije
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                Jedan zbirni paket sa svim formatima, tekstualnim skriptama i potvrdom o autorskim pravima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
