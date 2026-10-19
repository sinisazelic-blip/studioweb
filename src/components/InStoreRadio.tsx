"use client";

import React from "react";
import { Radio, Wifi, Volume2, ShieldCheck, CheckCircle2, Building2, Store, Sparkles } from "lucide-react";

export default function InStoreRadio() {
  return (
    <section id="moj-radio" className="py-24 md:py-36 border-t border-stone-200 relative overflow-hidden bg-[#faf7f2]">
      {/* Full Photographic Section Background from /pokaz/ */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-110 saturate-125"
        style={{
          backgroundImage: `url('/pokaz/studio-sound-mixing-stockcake.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/92 via-[#faf7f2]/84 to-[#faf7f2]/94 pointer-events-none" />

      {/* Wide Container with Generous Air & Breathing Room */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-emerald-300 text-emerald-950 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <Radio className="w-4 h-4 text-emerald-600" />
            <span>Pionirski In-Store Radio Koncept</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-stone-950 tracking-tight mb-6 font-display uppercase">
            „Moj Radio” — Akustična infrastruktura <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-orange-600">
              za lance sa stotinama objekata.
            </span>
          </h2>
          <p className="text-stone-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
            Studio TAF je još prije deceniju kreirao koncept „Moj Radio” za vodeće trgovačke lance. 
            Muzika u prodajnom prostoru nije samo ambijent — to je direktan alat prodaje, 
            psihološkog zadržavanja kupca i tačnog plasiranja marketinških akcija u sekundi.
          </p>
        </div>

        {/* References Banner: Merkator, Konzum, Tropic, Moj Market - Wide layout */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-white/95 border-2 border-stone-200 flex flex-wrap items-center justify-around gap-8 text-center shadow-lg">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight font-display uppercase">Konzum & Velpro</div>
            <div className="text-xs sm:text-sm text-stone-500 font-semibold mt-1">Nacionalna mreža marketa</div>
          </div>
          <div className="h-12 w-px bg-stone-200 hidden md:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight font-display uppercase">Merkator</div>
            <div className="text-xs sm:text-sm text-stone-500 font-semibold mt-1">Hipermarketi & centri</div>
          </div>
          <div className="h-12 w-px bg-stone-200 hidden md:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight font-display uppercase">Tropic & Moj Market</div>
            <div className="text-xs sm:text-sm text-stone-500 font-semibold mt-1">Dugogodišnji radio inženjering</div>
          </div>
          <div className="h-12 w-px bg-stone-200 hidden md:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">Ključ u Ruke</div>
            <div className="text-xs sm:text-sm text-stone-500 font-semibold mt-1">Hardver + Softver + Muzika</div>
          </div>
        </div>

        {/* 3 Dedicated Hardware Pillars of "Moj Radio" - Wide 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Hardware Feature 1 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-stone-200 hover:border-emerald-500 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Volume2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">
                1. Samostalni Zvučni Stubovi & Horne
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 font-medium">
                Vlastito konstruisani zvučni stubovi za vanjske i unutrašnje prostore. 
                Vanjske horne otporne na sve vremenske prilike za parkinge i platoe, 
                i ugrađeni zvučnički sistemi za unutrašnje hodnike bez vidljivih instalacija.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 pt-6 border-t border-stone-100 font-mono font-semibold">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Otpornost na vlagu i niske temperature</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Usmerena zvučna disperzija za čist govor</span>
              </li>
            </ul>
          </div>

          {/* Hardware Feature 2 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-stone-200 hover:border-emerald-500 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Wifi className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">
                2. Autonomna WiFi / IP Pojačala
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 font-medium">
                Nema razvlačenja stotina metara kablova do kase. Svaki zvučni stub ili zonsko pojačalo 
                ima sopstveni IP/WiFi modul. Dovoljno je samo napajanje, a zvuk stiže bežično 
                kroz lokalnu mrežu ili Cloud stream.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 pt-6 border-t border-stone-100 font-mono font-semibold">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Nezavisno zonsko podešavanje jačine</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automatski oporavak pri padu interneta</span>
              </li>
            </ul>
          </div>

          {/* Hardware Feature 3 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-stone-200 hover:border-emerald-500 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">
                3. Centralni Cloud & Nivelacija
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 font-medium">
                Muzika i džinglovi su masterizovani po EBU R128 standardu. Reklama nikada ne probija uši kupcima, 
                a tačan tajming akcija se centralno definiše za 10, 50 ili 6.000 objekata jednim klikom 
                iz kontrolnog panela.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 pt-6 border-t border-stone-100 font-mono font-semibold">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% legalna muzička prava i evidencija</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Precizna sinhronizacija marketinških blokova</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Studio TAF vs Cheap Competition Callout - Wide Container */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border-2 border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3">
            <div className="text-xs font-black text-emerald-800 uppercase tracking-wider font-mono">
              Inženjerska Superiornost
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-stone-900 font-display uppercase">
              Zašto „Moj Radio” pobjeđuje nelojalnu konkurenciju?
            </h4>
            <p className="text-sm sm:text-base text-stone-700 max-w-3xl leading-relaxed font-medium">
              Dok divlji provajderi puštaju YouTube plejliste preko starih pojačala koja zuje i prekidaju, 
              Studio TAF nudi fabrički robustan industrijski sistem sa certificiranim hardverom koji radi 24/7/365 bez ijednog restarta.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-7 py-3.5 rounded-2xl bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 text-sm font-black font-mono">
              Spremno za DM & Tržne Centre
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
