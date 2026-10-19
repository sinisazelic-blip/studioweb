import Header from "@/components/Header";
import HeroStudio from "@/components/HeroStudio";
import HardwareVault from "@/components/HardwareVault";
import InStoreRadio from "@/components/InStoreRadio";
import ClientVault from "@/components/ClientVault";
import RemoteSession from "@/components/RemoteSession";
import HeritageTimeline from "@/components/HeritageTimeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <HeroStudio />
      <HardwareVault />
      <InStoreRadio />
      <ClientVault />
      <RemoteSession />
      <HeritageTimeline />
      <Footer />
    </main>
  );
}
