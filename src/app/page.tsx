"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import HeroStudio from "@/components/HeroStudio";
import AboutUs from "@/components/AboutUs";
import ServicesShowcase from "@/components/ServicesShowcase";
import ClientsShowcase from "@/components/ClientsShowcase";
import InStoreRadio from "@/components/InStoreRadio";
import HeritageStory from "@/components/HeritageStory";
import Footer from "@/components/Footer";
import FluxaxStudioShowcase from "@/components/FluxaxStudioShowcase";
import FluxaxStudioModal from "@/components/FluxaxStudioModal";

export default function Home() {
  const [fluxaxModalOpen, setFluxaxModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0c1017] text-white flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      <Header />
      <HeroStudio />
      <AboutUs />
      <ServicesShowcase />
      <FluxaxStudioShowcase onOpenModal={() => setFluxaxModalOpen(true)} />
      <ClientsShowcase />
      <InStoreRadio />
      <HeritageStory />
      <Footer />

      {/* Dedicated Fluxax Showcase Window / Modal */}
      <FluxaxStudioModal
        isOpen={fluxaxModalOpen}
        onClose={() => setFluxaxModalOpen(false)}
      />
    </main>
  );
}
