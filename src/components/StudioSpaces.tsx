"use client";

import React from "react";
import { Mic, Volume2, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function StudioSpaces() {
  return (
    <section id="studio-prostor" className="py-20 md:py-28 bg-white border-t border-stone-200 relative overflow-hidden">
      {/* Light Creative Ambient Glows */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-orange-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold mb-4">
            <Volume2 className="w-3.5 h-3.5 text-orange-600" />
            <span>Akustički Prostor & Režijski Pult</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight mb-4 font-display uppercase">
            Mjesto gdje zvuk dobija <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              svoj stvarni karakter.
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Nijedan softverski plugin ne može zamijeniti akustički tretiranu sobu od pravog drveta 
            i uho ton majstora koji prepoznaje milisekund u kome vokal leže u frekventni spektar.
          </p>
        </div>

        {/* 3 Large Showcase Spaces */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {/* Room 1: Control Room */}
          <div className="rounded-3xl bg-stone-50 border border-stone-200 hover:border-orange-500 transition-all overflow-hidden shadow-lg hover:shadow-xl flex flex-col justify-between group">
            <div className="relative h-60 sm:h-72 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold">
                  REŽIJA • CONTROL ROOM
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                Glavna Režija & Analogni Pult
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Precizno kalibrisana monitoring soba sa linearnim faznim odzivom. 
                Mjesto gdje se vodi snimanje, gdje producenti imaju punu kontrolu nad dinamikom 
                i gdje se spikeru u slušalice šalje tačan balans.
              </p>
              <div className="space-y-1.5 text-xs text-stone-700 pt-3 border-t border-stone-200 font-mono font-medium">
                <div>• Kalibrisan stereo monitoring</div>
                <div>• Analogni i digitalni suming</div>
                <div>• Talkback sistem bez latencije</div>
              </div>
            </div>
          </div>

          {/* Room 2: Vocal Booth */}
          <div className="rounded-3xl bg-stone-50 border border-stone-200 hover:border-orange-500 transition-all overflow-hidden shadow-lg hover:shadow-xl flex flex-col justify-between group">
            <div className="relative h-60 sm:h-72 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-mono font-bold">
                  GLUVA SOBA • VOCAL BOOTH
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                Akustička Komora & Mikrofoni
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Potpuno izolovana gluva soba bez sobnih refleksija i eha. 
                Glas spikera ulazi u mikrofon 100% čist, što omogućava kristalno jasnu 
                kompresiju i vrhunsko uklapanje u radijski ili televizijski miks.
              </p>
              <div className="space-y-1.5 text-xs text-stone-700 pt-3 border-t border-stone-200 font-mono font-medium">
                <div>• Vrhunski kondenzatorski mikrofoni</div>
                <div>• Lampaški pretpojačivači za toplinu</div>
                <div>• Bešumni ventilacioni sistem</div>
              </div>
            </div>
          </div>

          {/* Room 3: Synth & Mastering Rack */}
          <div className="rounded-3xl bg-stone-50 border border-stone-200 hover:border-orange-500 transition-all overflow-hidden shadow-lg hover:shadow-xl flex flex-col justify-between group">
            <div className="relative h-60 sm:h-72 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-amber-300 text-[11px] font-mono font-bold">
                  MASTERING & 10 SINTOVA
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                Hardverski Synth Rack & Master
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Riznica autentičnih sintisajzera iz zlatne ere muzičke produkcije. 
                Od masnih analognih bas linija do grandioznih pozorišnih orkestracija, 
                završeno na analognom master lancu sa tačnom EBU R128 glasnoćom.
              </p>
              <div className="space-y-1.5 text-xs text-stone-700 pt-3 border-t border-stone-200 font-mono font-medium">
                <div>• 10 hardverskih sintisajzera</div>
                <div>• Klasični sempleri i ritam mašine</div>
                <div>• TC Electronic & Lexicon procesori</div>
              </div>
            </div>
          </div>
        </div>

        {/* Direction Authority Quote Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-orange-50 via-amber-50 to-stone-50 border border-orange-200/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold font-mono text-orange-700 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Zanat, Režija & Povjerenje</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
              Zašto agencije regiona snimaju kod nas?
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed max-w-2xl">
              Kada klijent prati snimanje preko našeg linka, on se ne mora nervirati oko intonacije spikera. 
              Naše četiri decenije iskustva u radu sa talentima znače da znamo kako da iz svakog glasa izvučemo 
              maksimum — pravu energiju, ritam i emociju koja prodaje brend.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-right bg-white p-6 rounded-2xl border border-orange-200 shadow-md">
            <div className="text-3xl font-black text-orange-600 font-mono">40+</div>
            <div className="text-xs text-stone-600 font-medium">godina za režijskim pultom</div>
          </div>
        </div>
      </div>
    </section>
  );
}
