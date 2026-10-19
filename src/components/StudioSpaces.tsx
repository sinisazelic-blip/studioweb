"use client";

import React from "react";
import { Mic, Volume2, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function StudioSpaces() {
  return (
    <section id="studio-prostor" className="py-24 md:py-36 bg-[#0a0c12] border-t border-zinc-800/80 relative overflow-hidden">
      {/* Subtle Background Glow & Real Studio Photographic Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-125"
        style={{
          backgroundImage: `url('/pokaz/vibrant-audio-mixer-stockcake.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c12] via-[#0a0c12]/90 to-[#0a0c12] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151f] border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <Volume2 className="w-4 h-4 text-orange-500" />
            <span>Akustički Prostor & Režijski Pult</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 font-display uppercase">
            Mjesto gdje zvuk dobija <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              svoj stvarni karakter.
            </span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-3xl mx-auto">
            Nijedan softverski plugin ne može zamijeniti akustički tretiranu sobu od pravog drveta 
            i uho ton majstora koji prepoznaje milisekund u kome vokal leže u frekventni spektar.
          </p>
        </div>

        {/* 3 Large Showcase Spaces - Wide Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Room 1: Control Room */}
          <div className="rounded-3xl bg-[#11131c] border border-zinc-800 hover:border-orange-500/50 transition-all overflow-hidden shadow-2xl flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-85"
                style={{
                  backgroundImage: `url('/pokaz/music-studio-mixer-stockcake.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-[#11131c]/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-white text-xs font-mono font-bold">
                  REŽIJA • CONTROL ROOM
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                Glavna Režija & Analogni Pult
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                Precizno kalibrisana monitoring soba sa linearnim faznim odzivom. 
                Mjesto gdje se vodi snimanje, gdje producenti imaju punu kontrolu nad dinamikom 
                i gdje se spikeru u slušalice šalje tačan balans.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-zinc-400 pt-4 border-t border-zinc-800 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Kombinacija aktivnog analognog monitornga i referentnih slušalica</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Brzi talkback sa zvučnom izolacijom bez kašnjenja</span>
                </div>
              </div>
            </div>
          </div>

          {/* Room 2: Vocal Booth */}
          <div className="rounded-3xl bg-[#11131c] border border-zinc-800 hover:border-orange-500/50 transition-all overflow-hidden shadow-2xl flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-85"
                style={{
                  backgroundImage: `url('/pokaz/20210501_Studio_Microphone_buying_guide_1600x838_01.webp')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-[#11131c]/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-orange-400 text-xs font-mono font-bold">
                  GLUVNA SOBA • VOCAL BOOTH
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                Izolovana Gluvna Soba za Spikere
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                Pravi "dead room" tretman bez kutijastih refleksija. Spiker dobija intiman prostor, 
                zlatnu membranu mikrofona i pop filter koji hvata i najfiniji šapat bez faznih problema.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-zinc-400 pt-4 border-t border-zinc-800 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Kondenzatorski mikrofoni velikih dijafragmi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Prigušenje neželjenih sibilanata i ploziva na samom izvoru</span>
                </div>
              </div>
            </div>
          </div>

          {/* Room 3: Instrument & Synth Lab */}
          <div className="rounded-3xl bg-[#11131c] border border-zinc-800 hover:border-orange-500/50 transition-all overflow-hidden shadow-2xl flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-85"
                style={{
                  backgroundImage: `url('/pokaz/musician-s-dream-studio-stockcake.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-[#11131c]/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-amber-300 text-xs font-mono font-bold">
                  SINT ARHIVA • ANALOG LAB
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                Laboratorija Zvuka & Sintisajzeri
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                Mjesto gdje se spajaju drvo, žica i struja. Na raspolaganju je 10 hardverskih sintisajzera 
                povezanih u jedinstvenu analognu matricu, gitare i pretpojačivači za autorsku filmsku i teatarsku muziku.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-zinc-400 pt-4 border-t border-zinc-800 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Hardverski sekvenceri, MIDI sinhronizacija i CV kontrola</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Pravi analogni oscilatori i filteri koji režu kroz svaki miks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
