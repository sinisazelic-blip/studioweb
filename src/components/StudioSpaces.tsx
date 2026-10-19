"use client";

import React from "react";
import { Mic, Volume2, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function StudioSpaces() {
  return (
    <section id="studio-prostor" className="py-24 md:py-36 border-t border-stone-200 relative overflow-hidden bg-[#faf7f2]">
      {/* Full Photographic Section Background from /pokaz/ */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-35 filter contrast-105"
        style={{
          backgroundImage: `url('/pokaz/vibrant-audio-mixer-stockcake.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/85 via-[#faf7f2]/60 to-[#faf7f2]/85 pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-orange-300 text-orange-950 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <Volume2 className="w-4 h-4 text-orange-600" />
            <span>Akustički Prostor & Režijski Pult</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-stone-950 tracking-tight mb-6 font-display uppercase">
            Mjesto gdje zvuk dobija <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
              svoj stvarni karakter.
            </span>
          </h2>
          <p className="text-stone-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
            Nijedan softverski plugin ne može zamijeniti akustički tretiranu sobu od pravog drveta 
            i uho ton majstora koji prepoznaje milisekund u kome vokal leže u frekventni spektar.
          </p>
        </div>

        {/* 3 Large Showcase Spaces - Wide Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Room 1: Control Room */}
          <div className="rounded-3xl bg-white border-2 border-stone-200/90 hover:border-orange-500 transition-all overflow-hidden shadow-xl hover:shadow-2xl flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('/pokaz/music-studio-mixer-stockcake.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-white text-xs font-mono font-bold">
                  REŽIJA • CONTROL ROOM
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                Glavna Režija & Analogni Pult
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6 font-medium">
                Precizno kalibrisana monitoring soba sa linearnim faznim odzivom. 
                Mjesto gdje se vodi snimanje, gdje producenti imaju punu kontrolu nad dinamikom 
                i gdje se spikeru u slušalice šalje tačan balans.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-stone-700 pt-4 border-t border-stone-200 font-mono font-semibold">
                <div>• Kalibrisan stereo monitoring</div>
                <div>• Analogni i digitalni suming</div>
                <div>• Talkback sistem bez latencije</div>
              </div>
            </div>
          </div>

          {/* Room 2: Vocal Booth */}
          <div className="rounded-3xl bg-white border-2 border-stone-200/90 hover:border-orange-500 transition-all overflow-hidden shadow-xl hover:shadow-2xl flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('/pokaz/20210501_Studio_Microphone_buying_guide_1600x838_01.webp')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-orange-400 text-xs font-mono font-bold">
                  GLUVA SOBA • VOCAL BOOTH
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                Akustička Komora & Mikrofoni
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6 font-medium">
                Potpuno izolovana gluva soba bez sobnih refleksija i eha. 
                Glas spikera ulazi u mikrofon 100% čist, što omogućava kristalno jasnu 
                kompresiju i vrhunsko uklapanje u radijski ili televizijski miks.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-stone-700 pt-4 border-t border-stone-200 font-mono font-semibold">
                <div>• Vrhunski kondenzatorski mikrofoni</div>
                <div>• Lampaški pretpojačivači za toplinu</div>
                <div>• Bešumni ventilacioni sistem</div>
              </div>
            </div>
          </div>

          {/* Room 3: Synth & Mastering Rack */}
          <div className="rounded-3xl bg-white border-2 border-stone-200/90 hover:border-orange-500 transition-all overflow-hidden shadow-xl hover:shadow-2xl flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('/pokaz/musician-s-dream-studio-stockcake.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-amber-300 text-xs font-mono font-bold">
                  MASTERING & 10 SINTOVA
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                Hardverski Synth Rack & Master
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6 font-medium">
                Riznica autentičnih sintisajzera iz zlatne ere muzičke produkcije. 
                Od masnih analognih bas linija do grandioznih pozorišnih orkestracija, 
                završeno na analognom master lancu sa tačnom EBU R128 glasnoćom.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-stone-700 pt-4 border-t border-stone-200 font-mono font-semibold">
                <div>• 10 hardverskih sintisajzera</div>
                <div>• Klasični sempleri i ritam mašine</div>
                <div>• TC Electronic & Lexicon procesori</div>
              </div>
            </div>
          </div>
        </div>

        {/* Direction Authority Quote Box - Wide Spacious Container */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-orange-100/90 via-amber-100/80 to-white border-2 border-orange-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold font-mono text-orange-800 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Zanat, Režija & Povjerenje</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-950 font-display uppercase">
              Zašto agencije regiona snimaju kod nas?
            </h3>
            <p className="text-base sm:text-lg text-stone-800 leading-relaxed max-w-4xl font-medium">
              Kada klijent prati snimanje preko našeg linka, on se ne mora nervirati oko intonacije spikera. 
              Naše četiri decenije iskustva u radu sa talentima znače da znamo kako da iz svakog glasa izvučemo 
              maksimum — pravu energiju, ritam i emociju koja prodaje brend.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-right bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-md">
            <div className="text-5xl font-black text-orange-600 font-mono">40+</div>
            <div className="text-sm text-stone-700 font-bold mt-1">godina za režijskim pultom</div>
          </div>
        </div>
      </div>
    </section>
  );
}
