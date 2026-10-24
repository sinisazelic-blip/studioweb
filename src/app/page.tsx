"use client";

import React from "react";
import Header from "@/components/Header";
import HeroStudio from "@/components/HeroStudio";
import AboutUs from "@/components/AboutUs";
import ServicesShowcase from "@/components/ServicesShowcase";
import SwissTimingSection from "@/components/SwissTimingSection";
import ClientsShowcase from "@/components/ClientsShowcase";
import HeritageStory from "@/components/HeritageStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c1017] text-white flex flex-col selection:bg-amber-500/20 selection:text-amber-200">
      <Header />
      <HeroStudio />
      <AboutUs />
      <ServicesShowcase />
      <SwissTimingSection />
      <ClientsShowcase />
      <HeritageStory />
      <Footer />
    </main>
  );
}
