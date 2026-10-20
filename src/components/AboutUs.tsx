"use client";

import React from "react";
import { Sparkles, Shield, Cpu, Mic2 } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#faf8f3] text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      {/* Light warm ambient glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[300px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[300px] bg-orange-200/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header - Clean, Warm & Optimistic */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-600 font-bold block mb-3">
            O Studiju & TAF Timu
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-950 tracking-tight uppercase font-sans">
            ABOUT US
          </h2>
          {/* Subtle cyan underline accent */}
          <div className="w-20 h-1 bg-cyan-500 mx-auto mt-5 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
        </div>

        {/* Minimalist 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start w-full max-w-[1500px] mx-auto mb-6">
          
          {/* Left Column: Focused Studio Statement in Warm Elegant Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-stone-200 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold block mb-3">
              Četiri Decenije Zvuka
            </span>
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-stone-950 leading-snug mb-6">
              Studio TAF nije samo prostor sa mikrofonima — to je <span className="font-semibold text-orange-600">četiri decenije akumulirane discipline</span> u slušanju i obradi zvuka.
            </h3>
            <p className="text-stone-500 text-xs font-mono uppercase tracking-wider pt-4 border-t border-stone-200">
              Banja Luka • A Member of Fluxa Group
            </p>
          </div>

          {/* Right Column: Grounded, Optimistic Story */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 text-base sm:text-lg font-light leading-relaxed">
            <p>
              Nastao iz višedecenijskog rada u muzičkoj produkciji koji datira još od 1982. godine, 
              Studio TAF je 2006. formalizovan kao specijalizovani centar za autorsku muziku, radijsku i televizijsku postprodukciju, 
              te regionalnu voice-over sinhronizaciju.
            </p>

            <p>
              Danas TAF tim čine tonski inženjeri, muzički producenti i tehnički saradnici posvećeni čistoj zvučnoj slici. 
              Objekat posjeduje namjenski građenu gluvozvučnu sobu sa kontrolisanom difuzijom i linearnim monitoringom, 
              kombinujući autentične lampaške mikrofone, analogne sintisajzere i savremene digitalne radne stanice.
            </p>

            <p>
              Za nas, zvuk nije puka tehnička formalnost. Kroz više od 6.000 završenih projekata naučili smo da su pouzdanost, 
              mirnoća u realizaciji i tačnost u isporuci jedino mjerilo profesionalizma.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
