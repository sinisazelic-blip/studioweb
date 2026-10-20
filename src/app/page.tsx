import Header from "@/components/Header";
import HeroStudio from "@/components/HeroStudio";
import AboutUs from "@/components/AboutUs";
import ServicesShowcase from "@/components/ServicesShowcase";
import ClientsShowcase from "@/components/ClientsShowcase";
import InStoreRadio from "@/components/InStoreRadio";
import HeritageStory from "@/components/HeritageStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c1017] text-white flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      <Header />
      <HeroStudio />
      <AboutUs />
      <ServicesShowcase />
      <ClientsShowcase />
      <InStoreRadio />
      <HeritageStory />
      <Footer />
    </main>
  );
}
