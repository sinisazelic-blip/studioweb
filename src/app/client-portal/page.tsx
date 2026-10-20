"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import StudioDirectorConsole from "@/components/StudioDirectorConsole";
import { APP_CONFIG } from "@/config/appConfig";
import {
  Lock,
  ShieldCheck,
  Video,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Upload,
  Calendar,
  Users,
  Download,
  Share2,
  CheckCircle,
  Play,
  Pause,
  Sliders,
  Settings,
  Plus,
  Send,
  MessageSquare,
  Clock,
  Sparkles,
  ArrowLeft,
  Tv,
  FileText,
  FileVideo,
  Key
} from "lucide-react";

type UserRole = "agency_tenant" | "guest_participant" | "studio_director";

interface Participant {
  id: string;
  name: string;
  role: string;
  email: string;
  confirmed: boolean;
  online: boolean;
  volume: number;
  isMuted: boolean;
}

export default function ClientPortalPage() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [tenantCodeInput, setTenantCodeInput] = useState<string>("TAF-AGENCY-2026");
  
  // Current active preview role
  const [currentRole, setCurrentRole] = useState<UserRole>("agency_tenant");

  // Session state
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [talkActive, setTalkActive] = useState<boolean>(false);
  const [selectedTake, setSelectedTake] = useState<number>(2);
  const [activeTab, setActiveTab] = useState<"live" | "new_session" | "archive">("live");

  // Video stream simulation
  const [isVideoStreaming, setIsVideoStreaming] = useState<boolean>(true);
  const [videoWindowName, setVideoWindowName] = useState<string>("Studio Video Sync • Broadcast Feed (1080p25)");

  // Participants list (controlled by Agency Tenant & Studio)
  const [participants, setParticipants] = useState<Participant[]>([
    {
      id: "p1",
      name: "Marko Jovanović",
      role: "Glavni Naručilac (Agencija)",
      email: "marko@agencija-media.ba",
      confirmed: true,
      online: true,
      volume: 80,
      isMuted: false,
    },
    {
      id: "p2",
      name: "Ana Marić",
      role: "Brend Menadžer (Gost)",
      email: "ana.maric@klijent-corp.com",
      confirmed: true,
      online: true,
      volume: 75,
      isMuted: false,
    },
    {
      id: "p3",
      name: "Goran Simić",
      role: "Copywriter (Gost)",
      email: "goran@agencija-media.ba",
      confirmed: true,
      online: true,
      volume: 70,
      isMuted: true,
    },
  ]);

  // Chat messages
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string; time: string; isDirector?: boolean }[]>([
    { sender: "Siniša Zelić (Režija)", text: "Dobar dan svima. Spiker je u gluvozvučnoj sobi, Studio Video preview je povezan.", time: "10:02", isDirector: true },
    { sender: "Marko (Agencija)", text: "Odlično, čujemo vas kristalno. Možemo krenuti sa Tejkom 1 po scenariju.", time: "10:03" },
    { sender: "Ana (Brend)", text: "Molim vas samo da u drugom dijelu naglasimo datum akcije.", time: "10:04" },
  ]);
  const [newChatText, setNewChatText] = useState("");

  // New Project / Session Form state
  const [newProject, setNewProject] = useState({
    title: "",
    date: "2026-10-25",
    time: "11:00",
    duration: "45 min",
    guestEmails: "direktor@klijent.com, marketing@klijent.com",
    notes: "",
  });

  const sendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatText.trim()) return;
    const senderName =
      currentRole === "agency_tenant"
        ? "Marko (Agencija)"
        : currentRole === "guest_participant"
        ? "Ana (Gost)"
        : "Siniša Zelić (Režija)";

    setChatMessages((prev) => [
      ...prev,
      {
        sender: senderName,
        text: newChatText.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isDirector: currentRole === "studio_director",
      },
    ]);
    setNewChatText("");
  };

  const toggleParticipantMute = (id: string) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isMuted: !p.isMuted } : p))
    );
  };

  const changeParticipantVolume = (id: string, vol: number) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, volume: vol } : p))
    );
  };

  // If not authenticated, show sleek tenant login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0b0e14] text-white flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
        <div className="p-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-400 hover:text-white text-xs font-mono transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Povratak na Studio TAF Glavni Sajt</span>
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto p-8 rounded-3xl bg-[#11161f] border border-stone-800 shadow-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Lock className="w-7 h-7" />
          </div>

          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold block mb-2">
            Privatni Klijentski Hab
          </span>
          <h1 className="text-2xl font-bold text-white mb-2">
            Prijava u Klijentsku Zonu
          </h1>
          <p className="text-xs text-stone-400 leading-relaxed mb-6 font-light">
            Unesite jedinstveni Tenant Kod koji vam je dodijeljen iz Fluxa sistema za pristup vašim terminima, 
            materijalima i online video režiji.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (tenantCodeInput.trim()) setIsAuthenticated(true);
            }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                value={tenantCodeInput}
                onChange={(e) => setTenantCodeInput(e.target.value)}
                placeholder="Unesite Tenant Kod (npr. TAF-AGENCY-2026)"
                className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-700 text-white font-mono text-center text-sm tracking-wider focus:outline-hidden focus:border-cyan-400 transition-colors uppercase"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              Pristupi Klijentskom Portalu
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-stone-800 text-[11px] text-stone-500 font-mono">
            Studio TAF • A Member of Fluxa Group • Zaštićena Enkripcija
          </div>
        </div>

        <div className="p-6 text-center text-xs text-stone-600 font-mono">
          Tehnička podrška: +387 (0) 51 456 456
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Universal Portal Header */}
      <header className="border-b border-stone-800/80 bg-[#0e131b]/95 backdrop-blur-md sticky top-0 z-50 px-6 sm:px-10 py-3.5">
        <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between flex-wrap gap-4">
          
          {/* Left Brand & Tenant Name */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
              title="Nazad na javni sajt"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white font-sans">
                  Studio <span className="text-orange-500">TAF</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold uppercase">
                  Klijent Portal
                </span>
              </div>
              <div className="text-[11px] text-stone-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Naručilac: Agencija Media Focus (Tenant: {tenantCodeInput})</span>
              </div>
            </div>
          </div>

          {/* Center Simulator Role Switcher (Prekidač Uloga za Testiranje) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-900 border border-stone-800 text-xs">
            <span className="px-2.5 text-[11px] font-mono text-stone-400 font-semibold uppercase">
              Uloga:
            </span>
            <button
              onClick={() => setCurrentRole("agency_tenant")}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                currentRole === "agency_tenant"
                  ? "bg-cyan-500 text-stone-950 font-bold shadow-xs"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              1. Naručilac (Agencija)
            </button>
            <button
              onClick={() => setCurrentRole("guest_participant")}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                currentRole === "guest_participant"
                  ? "bg-amber-400 text-stone-950 font-bold shadow-xs"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              2. Pozvani Gost
            </button>
            <button
              onClick={() => setCurrentRole("studio_director")}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                currentRole === "studio_director"
                  ? "bg-orange-500 text-stone-950 font-bold shadow-xs"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              3. Studio Režija (Siniša)
            </button>
          </div>

          {/* Right Session Status & Exit */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="hidden md:inline-block px-2.5 py-1 rounded-lg bg-stone-900 border border-stone-800 text-[11px] font-mono text-stone-400">
              Build: <span className="text-orange-400 font-bold">{APP_CONFIG.build}</span>
            </span>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>LIVE ON AIR • VIDEO SYNC ACTIVE</span>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition-colors"
            >
              Odjavi se
            </button>
          </div>

        </div>
      </header>

      {/* Portal Navigation Tabs (Samo za Naručioca i Režiju; Gost ima samo Live ekran) */}
      {currentRole !== "guest_participant" && (
        <div className="border-b border-stone-800/80 bg-[#0e131b]/60 px-6 sm:px-10">
          <div className="w-full max-w-[1720px] mx-auto flex items-center gap-6 text-xs font-mono">
            <button
              onClick={() => setActiveTab("live")}
              className={`py-3.5 border-b-2 font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === "live"
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-stone-400 hover:text-stone-200"
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Aktivna Sesija & Video Sync</span>
            </button>

            <button
              onClick={() => setActiveTab("new_session")}
              className={`py-3.5 border-b-2 font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === "new_session"
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-stone-400 hover:text-stone-200"
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Novi Projekat & Zakazivanje Termina</span>
            </button>

            <button
              onClick={() => setActiveTab("archive")}
              className={`py-3.5 border-b-2 font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === "archive"
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-stone-400 hover:text-stone-200"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Fluxa Master Arhiva (Završeni Projekti)</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1720px] mx-auto p-6 sm:p-10">
        
        {/* ===================================================================== */}
        {/* TAB 1: LIVE SESSION (REŽIJSKA KONZOLA ILI VIDEO PREVIEW ZA KLIJENTA)  */}
        {/* ===================================================================== */}
        {(activeTab === "live" || currentRole === "guest_participant") && (
          currentRole === "studio_director" ? (
            <StudioDirectorConsole
              onSyncToFluxa={(take) => {
                alert(`Tejk ${take} je automatski sinhronizovan u klijentski Fluxa folder! Agencija odmah ima pristup za preuzimanje.`);
              }}
            />
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 Columns: Big Screen Video Stream (Studio Video) + Script */}
            <div className="xl:col-span-8 space-y-6">
              
              {/* Studio Video Video Preview Player Card */}
              <div className="rounded-3xl bg-[#11161f] border border-stone-800 overflow-hidden shadow-2xl relative">
                
                {/* Video Sync Stream Header Bar */}
                <div className="p-4 bg-stone-900/90 border-b border-stone-800 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Tv className="w-4 h-4 text-cyan-400" />
                    <span className="font-bold text-white">Stream: {videoWindowName}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      SINHRONIZOVANO • 18ms LATENCIJA
                    </span>
                  </div>

                  {currentRole === "studio_director" && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert("Screen Capture API: Odaberite video prozor za dijeljenje.")}
                        className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 text-[11px] cursor-pointer"
                      >
                        Promijeni Video Prozor
                      </button>
                    </div>
                  )}
                </div>

                {/* Simulated Video Sync Video Screen Area (Čist spot bez timeline-a i traka!) */}
                <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
                  {/* Atmospheric Video Background Mock */}
                  <img
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80"
                    alt="Video Sync Video Frame"
                    className="w-full h-full object-cover filter brightness-75 contrast-110"
                  />

                  {/* On-Screen Professional Timecode & Rec Indicator */}
                  <div className="absolute top-4 left-4 flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-red-500 font-mono font-bold text-xs flex items-center gap-2 border border-red-500/30">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>REC 00:00:19:12</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-stone-300 font-mono text-xs border border-white/10">
                      TC: 10:24:19:00 (25 fps)
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-amber-300 font-mono text-xs border border-amber-400/30 font-bold">
                      Tejk 2 u toku (Spiker čita)
                    </span>
                  </div>

                  {/* Big Central Overlay on Pause */}
                  {!isRecording && (
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-xs flex flex-col items-center justify-center text-stone-300 font-mono space-y-2">
                      <Pause className="w-12 h-12 text-amber-400 animate-pulse" />
                      <span className="text-sm font-bold">VIDEO PREGLED JE PAUZIRAN</span>
                      <span className="text-xs text-stone-500">Čeka se priprema sledećeg tejka u režiji</span>
                    </div>
                  )}
                </div>

                {/* Bottom Stream Controls Bar */}
                <div className="p-4 bg-stone-900/90 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-stone-400">Audio Feed:</span>
                    <span className="text-emerald-400 font-bold">Neumann U87 • 24-bit / 48kHz Stereo</span>
                  </div>

                  {/* Push To Talk Button for Participant / Agency */}
                  <div className="flex items-center gap-3">
                    <button
                      onMouseDown={() => setTalkActive(true)}
                      onMouseUp={() => setTalkActive(false)}
                      className={`px-6 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-lg flex items-center gap-2 select-none cursor-pointer ${
                        talkActive
                          ? "bg-emerald-500 text-stone-950 scale-95 shadow-emerald-500/50"
                          : "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                      }`}
                    >
                      <Mic className="w-4 h-4" />
                      <span>{talkActive ? "PRIČATE U REŽIJU..." : "TALKBACK (DRŽI DOK GOVORIŠ)"}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Synchronized Script Card */}
              <div className="p-6 rounded-3xl bg-[#11161f] border border-stone-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                      Scenario sesije • TVC 30s (Jesenja Kampanja)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">
                    Trajanje: 30 sekundi • Ciljano: 28.5s + 1.5s logo
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3 text-sm text-stone-200 leading-relaxed font-sans">
                  <p className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                    <strong className="text-orange-400 font-mono">[00:00 - 00:10 • Spiker, toplo i autoritativno]:</strong>{" "}
                    „Zaboravite sve što ste mislili o kompromisima. Nova sezona donosi više stila i nepogrešivu sigurnost u svakom trenutku.”
                  </p>
                  <p className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                    <strong className="text-amber-400 font-mono">[00:10 - 00:25 • Spiker, jasan i dinamičan tempo]:</strong>{" "}
                    „Potražite označene modele u svim ovlaštenim salonima širom regije. Iskoristite posebne pogodnosti do kraja ovog mjeseca.”
                  </p>
                  <p className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                    <strong className="text-cyan-400 font-mono">[00:25 - 00:30 • Zvučni logo & CTA]:</strong>{" "}
                    „Vaš pouzdan partner na svakom putu.”
                  </p>
                </div>

                {/* Take Approval Bar (Samo Glavni Naručilac i Režija mogu potvrditi!) */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-400">Snimljeni tejkovi:</span>
                    {[1, 2, 3, 4].map((take) => (
                      <button
                        key={take}
                        onClick={() => setSelectedTake(take)}
                        className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-all ${
                          selectedTake === take
                            ? "bg-cyan-500 text-stone-950 shadow-md shadow-cyan-500/20"
                            : "bg-stone-900 text-stone-300 hover:text-white border border-stone-700"
                        }`}
                      >
                        Tejk {take}
                      </button>
                    ))}
                  </div>

                  {currentRole !== "guest_participant" && (
                    <button
                      onClick={() => alert(`Tejk ${selectedTake} je označen kao FINALNI! Siniša Zelić kopira master fajl u Fluxa klijentski folder.`)}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                    >
                      <CheckCircle className="w-4 h-4 text-stone-950" />
                      <span>Odobri Tejk {selectedTake} kao Final</span>
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Right 4 Columns: Participants Audio Mixer & Live Chat */}
            <div className="xl:col-span-4 space-y-6">
              
              {/* Participants & Studio Mixer Box */}
              <div className="p-6 rounded-3xl bg-[#11161f] border border-stone-800 shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                      Učesnici Sesije ({participants.length})
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">
                    Svi Povezani
                  </span>
                </div>

                {/* Participants list with individual volume & mute */}
                <div className="space-y-3">
                  {participants.map((p) => (
                    <div
                      key={p.id}
                      className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2 text-xs font-mono"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-white font-bold block">{p.name}</span>
                          <span className="text-[10px] text-stone-400">{p.role}</span>
                        </div>

                        {/* Mute toggle button (Only director or agency can mute others) */}
                        {currentRole === "studio_director" ? (
                          <button
                            onClick={() => toggleParticipantMute(p.id)}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                              p.isMuted
                                ? "bg-red-600 text-white"
                                : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                            }`}
                          >
                            {p.isMuted ? "MUTIRAN" : "MUTE"}
                          </button>
                        ) : (
                          <span className={`text-[10px] font-bold ${p.isMuted ? "text-red-400" : "text-emerald-400"}`}>
                            {p.isMuted ? "MUTED" : "AKTIVAN"}
                          </span>
                        )}
                      </div>

                      {/* Studio Director Volume Fader for each participant */}
                      {currentRole === "studio_director" && (
                        <div className="flex items-center gap-2 pt-1">
                          <Volume2 className="w-3.5 h-3.5 text-stone-500" />
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={p.volume}
                            onChange={(e) => changeParticipantVolume(p.id, Number(e.target.value))}
                            className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                          />
                          <span className="text-[10px] text-stone-400 w-8 text-right">{p.volume}%</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* If Agency Tenant, show button to invite more guests */}
                {currentRole === "agency_tenant" && (
                  <button
                    onClick={() => setActiveTab("new_session")}
                    className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Plus className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Dodaj / Pozovi Još Jednog Učesnika</span>
                  </button>
                )}
              </div>

              {/* Live Chat & Notes Box */}
              <div className="p-6 rounded-3xl bg-[#11161f] border border-stone-800 shadow-xl flex flex-col justify-between h-[360px]">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-3">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-orange-400" />
                      <span className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                        Live Režijski Chat & Sugestije
                      </span>
                    </div>
                  </div>

                  {/* Messages Scroll Area */}
                  <div className="space-y-3 overflow-y-auto max-h-[220px] pr-2 text-xs font-mono">
                    {chatMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded-xl ${
                          msg.isDirector
                            ? "bg-orange-950/40 border border-orange-500/30 text-orange-200"
                            : "bg-stone-900 border border-stone-800 text-stone-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1 text-[10px] text-stone-400">
                          <span className="font-bold text-white">{msg.sender}</span>
                          <span>{msg.time}</span>
                        </div>
                        <p className="font-sans text-[13px] leading-relaxed">{msg.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Input */}
                <form onSubmit={sendChatMessage} className="pt-3 border-t border-stone-800 flex gap-2">
                  <input
                    type="text"
                    value={newChatText}
                    onChange={(e) => setNewChatText(e.target.value)}
                    placeholder="Napišite sugestiju ili napomenu..."
                    className="flex-1 p-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs font-mono focus:outline-hidden focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-xl bg-cyan-500 text-stone-950 hover:bg-cyan-400 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>

          </div>
          )
        )}

        {/* ===================================================================== */}
        {/* TAB 2: NOVI PROJEKAT & ZAKAZIVANJE TERMINA (SAMO NARUČILAC / AGENCIJA) */}
        {/* ===================================================================== */}
        {activeTab === "new_session" && currentRole !== "guest_participant" && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#11161f] border border-stone-800 p-8 sm:p-12 shadow-2xl">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2">
                Upravljanje Snimanjem • Agencija / Tenant
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Kreirajte Novi Projekat & Zakažite Termin Sesije
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
                Kao glavni naručilac projekta, ovdje definišete detalje sesije, unosite materijale za Studio Video 
                i određujete spisak učesnika koji će dobiti pozivnice za online režiju.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Projekat je sačuvan i poslat Studiju TAF na potvrdu termina! Nakon potvrde, pozivnice se šalju učesnicima.");
                setActiveTab("live");
              }}
              className="space-y-6 font-mono text-xs"
            >
              <div>
                <label className="text-stone-300 block mb-2 font-bold uppercase tracking-wider">
                  Naziv Projekta / Kampanje:
                </label>
                <input
                  type="text"
                  required
                  placeholder="npr. Jesenja Rasprodaja 2026 - TVC 30s & Radio 20s"
                  className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-700 text-white font-sans text-sm focus:outline-hidden focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-stone-300 block mb-2 font-bold uppercase tracking-wider">
                    Datum Snimanja:
                  </label>
                  <input
                    type="date"
                    value={newProject.date}
                    onChange={(e) => setNewProject({ ...newProject, date: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-700 text-white"
                  />
                </div>

                <div>
                  <label className="text-stone-300 block mb-2 font-bold uppercase tracking-wider">
                    Željeno Vrijeme:
                  </label>
                  <input
                    type="time"
                    value={newProject.time}
                    onChange={(e) => setNewProject({ ...newProject, time: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-700 text-white"
                  />
                </div>

                <div>
                  <label className="text-stone-300 block mb-2 font-bold uppercase tracking-wider">
                    Procjena Trajanja:
                  </label>
                  <select
                    value={newProject.duration}
                    onChange={(e) => setNewProject({ ...newProject, duration: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-700 text-white"
                  >
                    <option>30 min</option>
                    <option>45 min</option>
                    <option>60 min</option>
                    <option>90 min</option>
                  </select>
                </div>
              </div>

              {/* Upload Materials Box */}
              <div className="p-6 rounded-2xl bg-stone-900/60 border border-dashed border-stone-700 text-center space-y-3">
                <Upload className="w-8 h-8 text-cyan-400 mx-auto" />
                <span className="text-sm font-bold text-white block">
                  Priložite Radne Materijale za Sesiju
                </span>
                <p className="text-stone-400 text-[11px] max-w-md mx-auto">
                  Prevucite video spot za Studio Video (.mp4, .mov), tekst scenarija (.pdf, .docx) ili audio demo. 
                  Materijali se odmah automatski smještaju u vaš interni Fluxa projektni folder.
                </p>
                <button
                  type="button"
                  onClick={() => alert("Odaberite fajlove sa računara...")}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-cyan-300 border border-stone-600 text-xs font-bold cursor-pointer"
                >
                  Odaberi Fajlove sa Diska
                </button>
              </div>

              {/* Guest Invitations */}
              <div>
                <label className="text-stone-300 block mb-2 font-bold uppercase tracking-wider">
                  Email Adrese Ostalih Učesnika (Gostiju koji prate snimanje):
                </label>
                <textarea
                  rows={2}
                  value={newProject.guestEmails}
                  onChange={(e) => setNewProject({ ...newProject, guestEmails: e.target.value })}
                  placeholder="Unesite email adrese odvojene zarezom (npr. direktor@klijent.com, ana@brend.com)"
                  className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-700 text-white font-sans text-xs focus:outline-hidden focus:border-cyan-400"
                />
                <span className="text-[10px] text-stone-500 mt-1 block">
                  Učesnici će dobiti pozivni email tek nakon što Studio TAF u svom kalendaru potvrdi termin.
                </span>
              </div>

              <div className="pt-4 border-t border-stone-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("live")}
                  className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold"
                >
                  Odustani
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-stone-950 font-bold uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  Zakaži Sesiju & Pošalji Studiju
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 3: FLUXA MASTER ARHIVA (ZAVRŠENI PROJEKTI I DOWNLOAD)             */}
        {/* ===================================================================== */}
        {activeTab === "archive" && currentRole !== "guest_participant" && (
          <div className="max-w-5xl mx-auto rounded-3xl bg-[#11161f] border border-stone-800 p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                  Fluxa Master Folder • Agencija Media Focus
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Završeni Projekti & Preuzimanje Mastera
                </h2>
              </div>
              <div className="text-xs font-mono text-stone-400 bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-800">
                Ukupno arhivirano: 14 projekata
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "Ljetna Akcija 2026 (TVC 30s + Radio 20s)", date: "14.08.2026.", files: ["TVC_Final_24bit.wav", "Radio_EBU_R128.wav", "Suvi_Vokal_Dry.wav"], size: "28.4 MB" },
                { title: "Proljetna Kampanja - Brending Zvuk", date: "22.04.2026.", files: ["Sound_Logo_Stereo.wav", "TVC_Mix_Master.wav"], size: "16.2 MB" },
                { title: "Novogodišnji Paketić - Radio Serijal", date: "28.12.2025.", files: ["Radio_Epizoda_1.wav", "Radio_Epizoda_2.wav", "Radio_Epizoda_3.wav"], size: "42.1 MB" },
              ].map((proj, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-stone-900/70 border border-stone-800 hover:border-cyan-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-sm font-bold text-white block">{proj.title}</span>
                    <span className="text-xs font-mono text-stone-400">
                      Snimljeno: {proj.date} • Veličina: {proj.size}
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {proj.files.map((f, fi) => (
                        <span key={fi} className="px-2 py-0.5 rounded bg-stone-800 text-[10px] font-mono text-cyan-300">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Preuzimanje ZIP paketa za projekat: ${proj.title}`)}
                      className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono font-bold flex items-center gap-1.5 border border-stone-700 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Preuzmi Paket</span>
                    </button>
                    <button
                      onClick={() => alert("Privatni link za klijenta kopiran!")}
                      className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 cursor-pointer"
                      title="Podijeli link"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 text-center text-xs font-mono text-stone-500">
              Svi masteri su verifikovani na -23 LUFS (EBU R128) i trajno zaštićeni na Fluxa Cloud serveru.
            </div>
          </div>
        )}

      </main>

    </div>
  );
}
