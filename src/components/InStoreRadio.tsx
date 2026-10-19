"use client";

import React from "react";
import { Radio, Wifi, Volume2, ShieldCheck, CheckCircle2, Building2, Store, Sparkles } from "lucide-react";

export default function InStoreRadio() {
  return (
    <section id="moj-radio" className="py-24 md:py-36 bg-[#0a0c12] border-t border-zinc-800/80 relative overflow-hidden">
      {/* Full Photographic Section Background from /pokaz/ */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-125"
        style={{
          backgroundImage: `url('/pokaz/studio-sound-mixing-stockcake.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c12] via-[#0a0c12]/90 to-[#0a0c12] pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151f] border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <Radio className="w-4 h-4 text-emerald-400" />
            <span>Pionirski In-Store Radio Koncept</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 font-display uppercase">
            „Moj Radio” — Akustična infrastruktura <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-orange-400">
              za lance sa stotinama objekata.
            </span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-3xl mx-auto">
            Studio TAF je još prije deceniju kreirao koncept „Moj Radio” za vodeće trgovačke lance. 
            Muzika u prodajnom prostoru nije samo ambijent — to je direktan alat prodaje, 
            psihološkog zadržavanja kupca i tačnog plasiranja marketinških akcija u sekundi.
          </p>
        </div>

        {/* References Banner: Merkator, Konzum, Tropic, Moj Market */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-[#11131c] border border-zinc-800 flex flex-wrap items-center justify-around gap-8 text-center shadow-xl">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display uppercase">Konzum & Velpro</div>
            <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">Nacionalna mreža marketa</div>
          </div>
          <div className="h-12 w-px bg-zinc-800 hidden md:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display uppercase">Merkator</div>
            <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">Hipermarketi & centri</div>
          </div>
          <div className="h-12 w-px bg-zinc-800 hidden md:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display uppercase">Tropic & Moj Market</div>
            <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">Dugogodišnji radio inženjering</div>
          </div>
          <div className="h-12 w-px bg-zinc-800 hidden md:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">Ključ u Ruke</div>
            <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">Hardver + Softver + Muzika</div>
          </div>
        </div>

        {/* 3 Dedicated Hardware Pillars of "Moj Radio" */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Hardware Feature 1 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#11131c] border border-zinc-800 hover:border-emerald-500/50 shadow-2xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Volume2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                1. Samostalni Zvučni Stubovi & Horne
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                Vlastito konstruisani zvučni stubovi za vanjske i unutrašnje prostore. 
                Vanjske horne otporne na sve vremenske prilike za parkinge i platoe, 
                i ugrađeni zvučnički sistemi za unutrašnje hodnike bez vidljivih instalacija.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 pt-6 border-t border-zinc-800 font-mono">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Otpornost na vlagu i niske temperature</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Usmerena zvučna disperzija za čist govor</span>
              </li>
            </ul>
          </div>

          {/* Hardware Feature 2 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#11131c] border border-zinc-800 hover:border-emerald-500/50 shadow-2xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Wifi className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                2. Autonomna WiFi / IP Pojačala
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                Nema razvlačenja stotina metara kablova do kase. Svaki zvučni stub ili zonsko pojačalo 
                ima sopstveni IP/WiFi modul. Dovoljno je samo napajanje, a zvuk stiže bežično 
                kroz lokalnu mrežu ili Cloud stream.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 pt-6 border-t border-zinc-800 font-mono">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nezavisno zonsko podešavanje jačine</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automatski oporavak pri padu interneta</span>
              </li>
            </ul>
          </div>

          {/* Hardware Feature 3 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#11131c] border border-zinc-800 hover:border-emerald-500/50 shadow-2xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                3. Centralni Cloud & Nivelacija
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                Muzika i džinglovi su masterizovani po EBU R128 standardu. Reklama nikada ne probija uši kupcima, 
                a tačan tajming akcija se centralno definiše za 10, 50 ili 6.000 objekata jednim klikom 
                iz kontrolnog panela.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 pt-6 border-t border-zinc-800 font-mono">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% legalna muzička prava i evidencija</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Precizna sinhronizacija marketinških blokova</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Studio TAF vs Cheap Competition Callout */}
        <div className="p-10 sm:p-14 rounded-3xl bg-[#131622] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
              Inženjerska Superiornost
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-white font-display uppercase">
              Zašto „Moj Radio” pobjeđuje nelojalnu konkurenciju?
            </h4>
            <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed font-normal">
              Dok divlji provajderi puštaju YouTube plejliste preko starih pojačala koja zuje i prekidaju, 
              Studio TAF nudi fabrički robustan industrijski sistem sa certificiranim hardverom koji radi 24/7/365 bez ijednog restarta.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 text-sm font-bold font-mono">
              Spremno za DM & Tržne Centre
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
