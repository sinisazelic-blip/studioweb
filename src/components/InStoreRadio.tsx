"use client";

import React from "react";
import { Radio, Wifi, Volume2, ShieldCheck, CheckCircle2, Building2, Store, Sparkles } from "lucide-react";

export default function InStoreRadio() {
  return (
    <section id="moj-radio" className="py-20 md:py-28 bg-[#0b0f19] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
            <Radio className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pionirski In-Store Radio Koncept</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            „Moj Radio” — Akustična infrastruktura <br className="hidden sm:inline" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-400">
              za lance sa stotinama objekata.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Studio TAF je još prije deceniju kreirao koncept „Moj Radio” za vodeće trgovačke lance. 
            Muzika u prodajnom prostoru nije samo ambijent — to je direktan alat prodaje, 
            psihološkog zadržavanja kupca i tačnog plasiranja marketinških akcija u sekundi.
          </p>
        </div>

        {/* References Banner: Merkator, Konzum, Tropic, Moj Market */}
        <div className="mb-14 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-lg font-bold text-white tracking-tight">Konzum & Velpro</div>
            <div className="text-[11px] text-slate-400">Nacionalna mreža marketa</div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden md:block" />
          <div>
            <div className="text-lg font-bold text-white tracking-tight">Merkator</div>
            <div className="text-[11px] text-slate-400">Hipermarketi & centri</div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden md:block" />
          <div>
            <div className="text-lg font-bold text-white tracking-tight">Tropic & Moj Market</div>
            <div className="text-[11px] text-slate-400">Dugogodišnji radio inženjering</div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden md:block" />
          <div>
            <div className="text-lg font-bold text-emerald-400 font-mono">Ključ u Ruke</div>
            <div className="text-[11px] text-slate-400">Hardver + Softver + Muzika</div>
          </div>
        </div>

        {/* 3 Dedicated Hardware Pillars of "Moj Radio" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Hardware Feature 1 */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                1. Samostalni Stubovi & Horne
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Vlastito konstruisani zvučni stubovi za vanjske i unutrašnje prostore. 
                Vanjske horne otporne na sve vremenske prilike za parkinge i platoe, 
                i ugrađeni zvučnički sistemi za unutrašnje hodnike bez vidljivih instalacija.
              </p>
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-400 pt-4 border-t border-slate-800">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Otpornost na vlagu i niske temperature</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Usmerena zvučna disperzija za čist govor</span>
              </li>
            </ul>
          </div>

          {/* Hardware Feature 2 */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                2. Autonomna WiFi / IP Pojačala
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Nema razvlačenja stotina metara kablova do kase. Svaki zvučni stub ili zonsko pojačalo 
                ima sopstveni IP/WiFi modul. Dovoljno je samo napajanje, a zvuk stiže bežično 
                kroz lokalnu mrežu ili Cloud stream.
              </p>
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-400 pt-4 border-t border-slate-800">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Nezavisno zonsko podešavanje jačine</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Automatski oporavak pri padu interneta</span>
              </li>
            </ul>
          </div>

          {/* Hardware Feature 3 */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                3. Centralni Cloud & Nivelacija
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Muzika i džinglovi su masterizovani po EBU R128 standardu. Reklama nikada ne probija uši kupcima, 
                a tačan tajming akcija se centralno definiše za 10, 50 ili 6.000 objekata jednim klikom 
                iz kontrolnog panela.
              </p>
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-400 pt-4 border-t border-slate-800">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% legalna muzička prava i evidencija</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Precizna sinhronizacija marketinških blokova</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Studio TAF vs Cheap Competition Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
              Inženjerska Superiornost
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Zašto „Moj Radio” pobjeđuje nelojalnu konkurenciju?
            </h4>
            <p className="text-xs text-slate-400 max-w-2xl">
              Dok divlji provajderi puštaju YouTube plejliste preko starih pojačala koja zuje i prekidaju, 
              Studio TAF nudi fabrički robustan industrijski sistem sa certificiranim hardverom koji radi 24/7/365 bez ijednog restarta.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-mono">
              Spremno za DM & Tržne Centre
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
