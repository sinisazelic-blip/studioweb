"use client";

import React from "react";
import { Disc, Radio, Mic, Server, Sparkles, Layers, Cpu, ArrowDown } from "lucide-react";

interface TimelineMilestone {
  period: string;
  badge: string;
  title: string;
  context: string;
  decision: string;
  highlight?: string;
}

const milestones: TimelineMilestone[] = [
  {
    period: "1982.",
    badge: "Početak & Analogni Entuzijazam",
    title: "Muzička Produkcija na Magnetofonskoj Traci",
    context:
      "Sve je počelo 1982. godine kada je Siniša Zelić, tada student mašinstva i aktivni muzičar, ušao u svijet studijskog snimanja. Rad u analognim studijima osamdesetih godina zahtijevao je sirovu disciplinu i besprijekoran sluh — svaka greška na magnetofonskoj traci bila je skupa, bez mogućnosti softverskog brisanja ili 'undo' funkcije.",
    decision:
      "Taj rani inženjerski i zanatski pristup postavio je temelj: zvuk mora imati karakter i težinu na samom izvoru, prije bilo kakve dalje obrade.",
    highlight:
      "Zlatno doba saradnji sa regionalnim autorima: Massimo Savić, Sanja Čolić Zelić, Dino Dvornik, Denis & Denis, Đavoli, Oliver Mandić, bend Big Bang, Boris Relja (Revelation), BasDans, Radio, Kovalsky project...",
  },
  {
    period: "2006.",
    badge: "Prekretnica & Specijalizacija",
    title: "Osnivanje Studija TAF — Fokus na Komercijalni Audio",
    context:
      "Nakon godina rada na albumima i aranžmanima, TAF tim prepoznaje ključni trenutak: tržištu marketinga i emitovanja nedostajao je studio koji razumije stroge broadcast normative i donosi nepokolebljivu brzinu isporuke.",
    decision:
      "Donijeta je odluka o jasnoj specijalizaciji: umjesto rasplinjavanja, Studio TAF se pozicionira kao visokospecijalizovani centar za radijski i televizijski zvuk, zvučne brend identitete i profesionalnu glumačku režiju sa bazom spikera za 6 regionalnih tržišta.",
    highlight:
      "Izgrađena namjenska gluvozvučna komora i hibridni analogni/digitalni lanac koji garantuje tačan EBU R128 standard glasnoće.",
  },
  {
    period: "2012.",
    badge: "B2B Poslovni Model",
    title: "Koncept 'MojRadio' — Vlastiti Radio za Svakog Klijenta",
    context:
      "Sa širenjem trgovačkih i poslovnih centara, javila se potreba za eliminacijom tuđih reklama i neprimjerenog programa na prodajnim mjestima. TAF tim koncipira 'MojRadio' — ne kao jednu radio stanicu, već kao naprednu B2B platformu.",
    decision:
      "Svaki klijent dobija svoj sopstveni, personalizovani radio kanal nazvan po njegovom brendu. Muzika skrojena prema kupcima, a poruke i akcije se plasiraju u tačnu sekundu, pod punom kontrolom klijenta.",
    highlight:
      "Potpuna autonomija programa: muzička dinamika i profesionalne govorne poruke direktno iz TAF produkcije.",
  },
  {
    period: "2016.",
    badge: "Hardverska Inovacija",
    title: "Autonomni Audio Stubovi — Zvuk Bez Kablova",
    context:
      "Klasične instalacije u velikim marketima zahtijevale su stotine metara kabliranja, bušenje i skupe prekide u radu objekata. Pored toga, jeftine razglasne 'trube' za alarm pružale su neugodan i tanak zvuk.",
    decision:
      "TAF tim in-house projektuje i proizvodi vlastito rješenje: samostalne dvosistemske audio stubove sa muzičkim hornama. Sistem zahtijeva samo dovod struje (220V) i kvalitetnu WiFi infrastrukturu. Svaki stub je potpuno autonoman, poveziv na jedan ili više paralelnih izvora zvuka, a upravljanje je centralizovano sa jednog mjesta.",
    highlight:
      "Dvosistemski akustički dizajn koji spaja dubok bas i kristalnu razumljivost govora, bez ijednog metra audio kabla kroz prostor.",
  },
  {
    period: "Danas",
    badge: "A Member of Fluxa Group",
    title: "6.000+ Projekata i Sinergija Tehnologije",
    context:
      "Nakon četiri decenije kontinuiteta, Studio TAF predstavlja čvrsto uporište zvuka, mirnoće i studijskog autoriteta. Iskustvo građeno kroz 6.000 završenih projekata prirodno je preraslo u širi tehnološki ekosistem.",
    decision:
      "Studio TAF danas ponosno djeluje kao audio grana unutar Fluxa Group, dok sestrinski FluxaCore razvija savremeni poslovni i fiskalni softver. Dva svijeta se savršeno dopunjuju: inženjerska disciplina i autorski senzibilitet.",
    highlight:
      "Mirna ostavština bez lova na poslove — reputacija izgrađena na povjerenju dugogodišnjih partnera.",
  },
];

export default function HeritageStory() {
  return (
    <section
      id="heritage"
      className="relative py-28 sm:py-36 bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/equipment/studio-heritage-warm.jpg')",
      }}
    >
      {/* Warm Translucent Tint - Clear, sharp studio backdrop, no DJ lasers */}
      <div className="absolute inset-0 bg-stone-950/70 backdrop-blur-[1px] pointer-events-none" />

      {/* Decorative ambient lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block mb-3">
            Hronologija, Entuzijazam & Odluke
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-sans">
            OUR STORY
          </h2>
          {/* Cyan glowing underline accent */}
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

          <p className="mt-6 text-stone-300 text-base sm:text-lg leading-relaxed font-light">
            Od magnetofonske trake 1982. i ranih saradnji sa muzičkim velikanima, 
            do specijalizacije za komercijalni audio, razvoja autonomnih zvučnih stubova i članstva u Fluxa Group.
          </p>
        </div>

        {/* Timeline Flow (Central Line on Desktop, Left Line on Mobile) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-stone-600 to-cyan-500/40 pointer-events-none hidden sm:block" />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "sm:flex-row-reverse text-left" : "text-left"
                }`}
              >
                {/* Timeline Center Node Dot */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-stone-950 border-2 border-cyan-400 items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.8)] z-20">
                  <span className="w-2 h-2 rounded-full bg-cyan-300" />
                </div>

                {/* Floating Content Card (Width 50% on desktop) */}
                <div className="w-full sm:w-[calc(50%-2.5rem)]">
                  <div className="group rounded-3xl bg-[#0e141d]/85 hover:bg-[#131b26]/95 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md p-8 transition-all duration-300 shadow-2xl hover:shadow-[0_10px_35px_-10px_rgba(34,211,238,0.25)]">
                    
                    {/* Period and Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl sm:text-3xl font-mono font-light text-cyan-400 tracking-tight">
                        {item.period}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-300 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        {item.badge}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* Context & What Pushed the Decision */}
                    <p className="text-stone-300 text-sm leading-relaxed font-light mb-3">
                      {item.context}
                    </p>

                    {/* The Strategic Decision */}
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300 leading-relaxed font-light mb-4">
                      <span className="text-cyan-400 font-semibold font-mono block mb-1 uppercase tracking-wider text-[10px]">
                        Prekretnica & Odluka:
                      </span>
                      {item.decision}
                    </div>

                    {/* Highlights */}
                    {item.highlight ? (
                      <div className="pt-3 border-t border-white/10 text-xs font-sans italic text-stone-400">
                        <span className="text-cyan-400 font-bold not-italic mr-1.5">•</span>
                        {item.highlight}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Empty Half Space for Balancing opposite side on Desktop */}
                <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Signature Bottom Stamp */}
        <div className="text-center max-w-xl mx-auto mt-20 pt-8 border-t border-white/15">
          <p className="text-xs font-mono text-stone-400 uppercase tracking-widest">
            Studio TAF • A Member of Fluxa Group • 1982–Danas
          </p>
        </div>

      </div>
    </section>
  );
}
