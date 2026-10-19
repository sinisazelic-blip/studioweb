"use client";

import React from "react";
import { Radio, Wifi, Volume2, ShieldCheck, CheckCircle2, Building2, Store, Sparkles } from "lucide-react";

export default function InStoreRadio() {
  return (
    <section id="moj-radio" className="py-20 md:py-28 bg-[#fbf9f5] border-t border-stone-200 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-emerald-100/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold mb-4">
            <Radio className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pionirski In-Store Radio Koncept</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight mb-4 font-display uppercase">
            „Moj Radio” — Akustična infrastruktura <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-orange-600">
              za lance sa stotinama objekata.
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Studio TAF je još prije deceniju kreirao koncept „Moj Radio” za vodeće trgovačke lance. 
            Muzika u prodajnom prostoru nije samo ambijent — to je direktan alat prodaje, 
            psihološkog zadržavanja kupca i tačnog plasiranja marketinških akcija u sekundi.
          </p>
        </div>

        {/* References Banner: Merkator, Konzum, Tropic, Moj Market */}
        <div className="mb-14 p-6 rounded-3xl bg-white border border-stone-200 flex flex-wrap items-center justify-around gap-6 text-center shadow-md">
          <div>
            <div className="text-xl font-bold text-stone-900 tracking-tight font-display uppercase">Konzum & Velpro</div>
            <div className="text-xs text-stone-500 font-medium">Nacionalna mreža marketa</div>
          </div>
          <div className="h-10 w-px bg-stone-200 hidden md:block" />
          <div>
            <div className="text-xl font-bold text-stone-900 tracking-tight font-display uppercase">Merkator</div>
            <div className="text-xs text-stone-500 font-medium">Hipermarketi & centri</div>
          </div>
          <div className="h-10 w-px bg-stone-200 hidden md:block" />
          <div>
            <div className="text-xl font-bold text-stone-900 tracking-tight font-display uppercase">Tropic & Moj Market</div>
            <div className="text-xs text-stone-500 font-medium">Dugogodišnji radio inženjering</div>
          </div>
          <div className="h-10 w-px bg-stone-200 hidden md:block" />
          <div>
            <div className="text-xl font-bold text-emerald-600 font-mono font-black">Ključ u Ruke</div>
            <div className="text-xs text-stone-500 font-medium">Hardver + Softver + Muzika</div>
          </div>
        </div>

        {/* 3 Dedicated Hardware Pillars of "Moj Radio" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Hardware Feature 1 */}
          <div className="p-7 rounded-3xl bg-white border border-stone-200 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
                1. Samostalni Zvučni Stubovi & Horne
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Vlastito konstruisani zvučni stubovi za vanjske i unutrašnje prostore. 
                Vanjske horne otporne na sve vremenske prilike za parkinge i platoe, 
                i ugrađeni zvučnički sistemi za unutrašnje hodnike bez vidljivih instalacija.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-stone-600 pt-4 border-t border-stone-100 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Otpornost na vlagu i niske temperature</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Usmerena zvučna disperzija za čist govor</span>
              </li>
            </ul>
          </div>

          {/* Hardware Feature 2 */}
          <div className="p-7 rounded-3xl bg-white border border-stone-200 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
                2. Autonomna WiFi / IP Pojačala
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Nema razvlačenja stotina metara kablova do kase. Svaki zvučni stub ili zonsko pojačalo 
                ima sopstveni IP/WiFi modul. Dovoljno je samo napajanje, a zvuk stiže bežično 
                kroz lokalnu mrežu ili Cloud stream.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-stone-600 pt-4 border-t border-stone-100 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Nezavisno zonsko podešavanje jačine</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automatski oporavak pri padu interneta</span>
              </li>
            </ul>
          </div>

          {/* Hardware Feature 3 */}
          <div className="p-7 rounded-3xl bg-white border border-stone-200 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
                3. Centralni Cloud & Nivelacija
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Muzika i džinglovi su masterizovani po EBU R128 standardu. Reklama nikada ne probija uši kupcima, 
                a tačan tajming akcija se centralno definiše za 10, 50 ili 6.000 objekata jednim klikom 
                iz kontrolnog panela.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-stone-600 pt-4 border-t border-stone-100 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% legalna muzička prava i evidencija</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Precizna sinhronizacija marketinških blokova</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Studio TAF vs Cheap Competition Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-stone-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
              Inženjerska Superiornost
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-stone-900 font-display">
              Zašto „Moj Radio” pobjeđuje nelojalnu konkurenciju?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              Dok divlji provajderi puštaju YouTube plejliste preko starih pojačala koja zuje i prekidaju, 
              Studio TAF nudi fabrički robustan industrijski sistem sa certificiranim hardverom koji radi 24/7/365 bez ijednog restarta.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white shadow-md text-xs font-bold font-mono">
              Spremno za DM & Tržne Centre
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
