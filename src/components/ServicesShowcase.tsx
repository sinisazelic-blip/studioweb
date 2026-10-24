"use client";

import React from "react";

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  category: string;
  text: string;
}

// 6 ključnih audio usluga u tačnom redoslijedu odobrenom od strane studija
const servicesData: ServiceItem[] = [
  {
    id: "recording",
    icon: "/images/services/mic.png",
    title: "Recording / Snimanje",
    category: "Akustika & Glumačka Režija",
    text: "Snimanje živih instrumenata, vokala i spikera u vrhunski akustički tretiranoj gluvozvučnoj sobi. Prijenos topline preko referentnih lampaških pretpojačala i najcjenjenijih mikrofona, uz stalnu podršku iskusnog inženjera i režisera.",
  },
  {
    id: "editing",
    icon: "/images/services/editting-567.png",
    title: "Editing & Postprodukcija",
    category: "Melodyne, Timing & Restauracija",
    text: "Precizna obrada vokalnih i instrumentalnih kanala, intonativna i ritmička korekcija putem Melodyne-a bez gubitka prirodne dinamike, fazno poravnanje višestrukih mikrofona, čišćenje šuma i besprijekorna montaža dijaloga.",
  },
  {
    id: "commercials",
    icon: "/images/services/digital-advrt.png",
    title: "Commercials & Jingles",
    category: "TV, Radio & Korporativni Audio",
    text: "Četiri decenije autoriteta u kreiranju namjenske muzike, prepoznatljivih radio i TV džinglova, zvučnih brend identiteta (sound logos) i audio postprodukcije za najveće domaće i multinacionalne korporacije i brendove.",
  },
  {
    id: "songwriting",
    icon: "/images/services/songW.png",
    title: "Songwriting & Produkcija",
    category: "Kompozicija i Aranžman",
    text: "Komponovanje, aranžiranje, melodijska razrada i autorski razvoj. Kompletna produkcija muzičkog djela od početne ideje i demo skice do gotovog aranžmana, u punoj saradnji sa autorom ili klijentom kroz svaku fazu.",
  },
  {
    id: "mastering",
    icon: "/images/services/studio.png",
    title: "Mastering",
    category: "Finalni Stereo & Broadcast Standard",
    text: "Završni pečat audio produkcije. Analogni i digitalni mastering prilagođen specifičnostima medija distribucije — digitalne streaming platforme (Spotify, Apple Music), TV i radio standard (EBU R128), film ili fizički nosači zvuka.",
  },
  {
    id: "movie",
    icon: "/images/services/movie.png",
    title: "Film & Sound Design",
    category: "Kinematografski Zvuk",
    text: "Kreiranje originalne filmske muzike, atmosfere, foley efekata i zvučnog prostora za igrane i dokumentarne filmove, špice i serijski program sa snažnim dramaturgijskim nabojem.",
  },
];

export default function ServicesShowcase() {
  return (
    <section
      id="what-we-do"
      className="relative py-24 sm:py-32 bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/equipment/studio-vocal-recording.jpg')",
      }}
    >
      {/* Dark Translucent Tinted Overlay */}
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-[2px] transition-colors" />

      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold block mb-3">
            Naša Ekspertiza & Ponuda
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-sans">
            WHAT WE DO
          </h2>
          {/* Orange glowing underline accent */}
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-5 rounded-full shadow-[0_0_14px_rgba(249,115,22,0.8)]" />

          <p className="mt-6 text-stone-300 text-base sm:text-lg leading-relaxed font-light">
            Od prve kompozicijske skice do emitovanja na radiju, televiziji i streaming platformama. 
            Vrhunska oprema, namjenska akustika i 40 godina studijske prakse.
          </p>
        </div>

        {/* Floating Translucent Cards Grid - Exactly 6 audio cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1600px] mx-auto">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-[#0e141d]/85 hover:bg-[#131b26]/95 border border-white/10 hover:border-orange-500/50 backdrop-blur-md p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 shadow-2xl hover:shadow-[0_10px_35px_-10px_rgba(249,115,22,0.25)] hover:-translate-y-1.5 cursor-default"
            >
              {/* Icon Container */}
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.3)] group-hover:drop-shadow-[0_0_16px_rgba(249,115,22,0.8)] transition-all"
                />
              </div>

              {/* Sub-badge / category */}
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-orange-400/90 mb-2">
                {service.category}
              </span>

              {/* Service Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-orange-300 transition-colors">
                {service.title}
              </h3>

              {/* Service Detailed Description */}
              <p className="text-stone-300 text-sm sm:text-[14.5px] leading-relaxed font-light">
                {service.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
