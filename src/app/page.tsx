import Header from "@/components/Header";
import HeroStudio from "@/components/HeroStudio";
import StudioSpaces from "@/components/StudioSpaces";
import BalkanVoiceNetwork from "@/components/BalkanVoiceNetwork";
import HardwareVault from "@/components/HardwareVault";
import InStoreRadio from "@/components/InStoreRadio";
import ClientVault from "@/components/ClientVault";
import RemoteSession from "@/components/RemoteSession";
import HeritageTimeline from "@/components/HeritageTimeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col selection:bg-orange-500/30 selection:text-orange-200">
      <Header />
      <HeroStudio />
      <StudioSpaces />
      <BalkanVoiceNetwork />
      <HardwareVault />
      <InStoreRadio />
      <ClientVault />
      <RemoteSession />
      <HeritageTimeline />
      <Footer />
    </main>
  );
}
