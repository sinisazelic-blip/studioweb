"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sliders,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Radio,
  Tv,
  CheckCircle,
  Users,
  Settings,
  Layers,
  Sparkles,
  Activity,
  Headphones,
  ShieldCheck,
  FileText,
  Cpu,
  RefreshCw,
  Zap,
  Play
} from "lucide-react";

export interface ParticipantData {
  id: string;
  name: string;
  role: string;
  email: string;
  online: boolean;
  isSpeaking: boolean;
  incomingLevel: number;
  volumeCR: number;
  volumeBooth: number;
  isMuted: boolean;
  hearsStudio: boolean;
}

interface RmeInputChannel {
  id: number;
  port: string;
  name: string;
  role: string;
  gain: number;
  level: number;
  isMuted: boolean;
  toBooth: boolean;
  toStream: boolean;
  toCR: boolean;
}

interface RmeOutputChannel {
  id: number;
  port: string;
  name: string;
  role: string;
  level: number;
  isMuted: boolean;
}

interface StudioDirectorConsoleProps {
  onSyncToFluxa: (take: number) => void;
}

export default function StudioDirectorConsole({ onSyncToFluxa }: StudioDirectorConsoleProps) {
  // Navigation inside Director Console
  const [activeConsoleTab, setActiveConsoleTab] = useState<"session" | "rme_hardware" | "video_source">("session");

  // Session Master State
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [selectedTake, setSelectedTake] = useState<number>(2);

  // Outgoing Master Stream Levels (Left & Right dBFS)
  const [outgoingLeft, setOutgoingLeft] = useState<number>(84);
  const [outgoingRight, setOutgoingRight] = useState<number>(82);

  // Talkback state
  const [talkbackMode, setTalkbackMode] = useState<"all" | "booth_only">("all");
  const [talkbackActive, setTalkbackActive] = useState<boolean>(false);

  // Video window state
  const [capturedVideoName, setCapturedVideoName] = useState<string>("Vegas Pro 21 • Video Preview (Clean Feed)");
  const [isScreenSharing, setIsScreenSharing] = useState<boolean>(false);

  // =========================================================================
  // RME HARDWARE MATRIX STATE (12 IN / 8 OUT)
  // =========================================================================
  const [sampleRate, setSampleRate] = useState<string>("48000");
  const [bufferSize, setBufferSize] = useState<string>("128");

  // 12 Hardware Inputs of the RME Interface
  const [rmeInputs, setRmeInputs] = useState<RmeInputChannel[]>([
    { id: 1, port: "Analog In 1 (XLR)", name: "Mic 1: Neumann U87", role: "booth_mic", gain: 88, level: 75, isMuted: false, toBooth: true, toStream: true, toCR: true },
    { id: 2, port: "Analog In 2 (XLR)", name: "Mic 2: Režija Talkback", role: "talkback", gain: 70, level: 30, isMuted: false, toBooth: true, toStream: false, toCR: false },
    { id: 3, port: "Analog In 3 (TRS)", name: "DAW Playback L", role: "daw_l", gain: 80, level: 65, isMuted: false, toBooth: true, toStream: true, toCR: true },
    { id: 4, port: "Analog In 4 (TRS)", name: "DAW Playback R", role: "daw_r", gain: 80, level: 65, isMuted: false, toBooth: true, toStream: true, toCR: true },
    { id: 5, port: "Analog In 5 (Line)", name: "Outboard Preamp 1", role: "analog_rack", gain: 60, level: 0, isMuted: true, toBooth: false, toStream: false, toCR: true },
    { id: 6, port: "Analog In 6 (Line)", name: "Outboard Preamp 2", role: "analog_rack", gain: 60, level: 0, isMuted: true, toBooth: false, toStream: false, toCR: true },
    { id: 7, port: "Loopback 1 (DAW)", name: "RME Loopback Vegas L", role: "loopback_l", gain: 85, level: 70, isMuted: false, toBooth: true, toStream: true, toCR: true },
    { id: 8, port: "Loopback 2 (DAW)", name: "RME Loopback Vegas R", role: "loopback_r", gain: 85, level: 70, isMuted: false, toBooth: true, toStream: true, toCR: true },
    { id: 9, port: "SPDIF In L", name: "Digital In 1", role: "digital", gain: 50, level: 0, isMuted: true, toBooth: false, toStream: false, toCR: false },
    { id: 10, port: "SPDIF In R", name: "Digital In 2", role: "digital", gain: 50, level: 0, isMuted: true, toBooth: false, toStream: false, toCR: false },
    { id: 11, port: "ADAT/Aux 1", name: "Pomoćni Linijski 1", role: "aux", gain: 50, level: 0, isMuted: true, toBooth: false, toStream: false, toCR: false },
    { id: 12, port: "ADAT/Aux 2", name: "Pomoćni Linijski 2", role: "aux", gain: 50, level: 0, isMuted: true, toBooth: false, toStream: false, toCR: false },
  ]);

  // 8 Hardware Outputs of the RME Interface
  const [rmeOutputs, setRmeOutputs] = useState<RmeOutputChannel[]>([
    { id: 1, port: "Analog Out 1", name: "Control Room Monitor L", role: "cr_l", level: 85, isMuted: false },
    { id: 2, port: "Analog Out 2", name: "Control Room Monitor R", role: "cr_r", level: 85, isMuted: false },
    { id: 3, port: "Analog Out 3", name: "Booth Slušalice (Spiker) L", role: "booth_l", level: 80, isMuted: false },
    { id: 4, port: "Analog Out 4", name: "Booth Slušalice (Spiker) R", role: "booth_r", level: 80, isMuted: false },
    { id: 5, port: "Phones Out 7", name: "Režijske Slušalice L (Siniša)", role: "phones_l", level: 75, isMuted: false },
    { id: 6, port: "Phones Out 8", name: "Režijske Slušalice R (Siniša)", role: "phones_r", level: 75, isMuted: false },
    { id: 7, port: "Aux Out 5", name: "Klijentski Web Stream L", role: "stream_l", level: 90, isMuted: false },
    { id: 8, port: "Aux Out 6", name: "Klijentski Web Stream R", role: "stream_r", level: 90, isMuted: false },
  ]);

  // Live connection to local StudioBridge daemon (ws://127.0.0.1:4040/ws)
  const [isDaemonConnected, setIsDaemonConnected] = useState<boolean>(false);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket | null = null;
    try {
      ws = new WebSocket("ws://127.0.0.1:4040/ws");
      wsRef.current = ws;

      ws.onopen = () => {
        setIsDaemonConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.type === "METERS_TICK" && msg.inputs) {
            setRmeInputs((prev) =>
              prev.map((ch) => {
                const tick = msg.inputs.find((t: any) => t.id === ch.id);
                return tick ? { ...ch, level: tick.level } : ch;
              })
            );
          }
          if (msg.type === "INITIAL_STATE" || msg.type === "STATE_UPDATED") {
            if (msg.data.inputs) setRmeInputs(msg.data.inputs);
            if (msg.data.outputs) setRmeOutputs(msg.data.outputs);
          }
        } catch {}
      };

      ws.onclose = () => {
        setIsDaemonConnected(false);
      };
    } catch {
      setIsDaemonConnected(false);
    }

    return () => {
      if (ws) ws.close();
    };
  }, []);

  // Participants individual strips
  const [participants, setParticipants] = useState<ParticipantData[]>([
    {
      id: "p1",
      name: "Marko Jovanović",
      role: "Glavni Naručilac (Agencija)",
      email: "marko@agencija-media.ba",
      online: true,
      isSpeaking: false,
      incomingLevel: 25,
      volumeCR: 80,
      volumeBooth: 70,
      isMuted: false,
      hearsStudio: true,
    },
    {
      id: "p2",
      name: "Ana Marić",
      role: "Brend Menadžer (Gost)",
      email: "ana.maric@klijent-corp.com",
      online: true,
      isSpeaking: true,
      incomingLevel: 78,
      volumeCR: 85,
      volumeBooth: 75,
      isMuted: false,
      hearsStudio: true,
    },
    {
      id: "p3",
      name: "Goran Simić",
      role: "Copywriter (Gost)",
      email: "goran@agencija-media.ba",
      online: true,
      isSpeaking: false,
      incomingLevel: 0,
      volumeCR: 70,
      volumeBooth: 0,
      isMuted: true,
      hearsStudio: false,
    },
  ]);

  const activeSpeaker = participants.find((p) => p.isSpeaking);

  const toggleMute = (id: string) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isMuted: !p.isMuted } : p))
    );
  };

  const toggleHearsStudio = (id: string) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, hearsStudio: !p.hearsStudio } : p))
    );
  };

  const setCRVolume = (id: string, vol: number) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, volumeCR: vol } : p))
    );
  };

  const setBoothVolume = (id: string, vol: number) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, volumeBooth: vol } : p))
    );
  };

  // RME Input Helpers
  const toggleRmeInputMute = (id: number) => {
    setRmeInputs((prev) =>
      prev.map((ch) => (ch.id === id ? { ...ch, isMuted: !ch.isMuted } : ch))
    );
  };

  const updateRmeInputGain = (id: number, val: number) => {
    setRmeInputs((prev) =>
      prev.map((ch) => (ch.id === id ? { ...ch, gain: val } : ch))
    );
  };

  const toggleRmeInputRoute = (id: number, bus: "toBooth" | "toStream" | "toCR") => {
    setRmeInputs((prev) =>
      prev.map((ch) => (ch.id === id ? { ...ch, [bus]: !ch[bus] } : ch))
    );
  };

  // Screen Capture trigger for video window
  const requestScreenCapture = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: false,
        });
        const track = stream.getVideoTracks()[0];
        setCapturedVideoName(track.label || "Vegas Pro Video Ekran (Deljeno)");
        setIsScreenSharing(true);
        track.onended = () => {
          setIsScreenSharing(false);
          setCapturedVideoName("Vegas Pro 21 • Video Preview (Pauzirano)");
        };
      } else {
        alert("WebRTC Screen Capture API je spreman za povezivanje sa vašim Vegas Pro prozorom.");
      }
    } catch {
      // User cancelled
    }
  };

  return (
    <div className="space-y-6">
      
      {/* ========================================================================= */}
      {/* 0. DIRECTOR CONSOLE HEADER & HARDWARE BAR                                   */}
      {/* ========================================================================= */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#0e141f] border border-stone-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm font-sans">
                Studio Režija & RME Audio Interfejs
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border transition-colors ${
                  isDaemonConnected
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    : "bg-amber-500/20 text-amber-300 border-amber-500/40"
                }`}
                title="Lokalni StudioBridge servis na http://127.0.0.1:4040"
              >
                {isDaemonConnected ? "● RME BRIDGE AKTIVAN (:4040)" : "○ RME SIMULATOR"}
              </span>
            </div>
            <span className="text-[11px] font-mono text-stone-400">
              Sample Rate: <strong className="text-stone-200">48.0 kHz / 24-bit</strong> • Buffer: <strong className="text-cyan-400">128 samples (2.7ms)</strong>
            </span>
          </div>
        </div>

        {/* Console Sub-Navigation Tabs */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveConsoleTab("session")}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeConsoleTab === "session"
                ? "bg-orange-500 text-stone-950 shadow-md"
                : "bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800"
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>1. Režijski Mikser & Sesija</span>
          </button>

          <button
            onClick={() => setActiveConsoleTab("rme_hardware")}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeConsoleTab === "rme_hardware"
                ? "bg-cyan-500 text-stone-950 shadow-md"
                : "bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>2. RME Matrica Rutiranja (12 IN / 8 OUT)</span>
          </button>

          <button
            onClick={() => setActiveConsoleTab("video_source")}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeConsoleTab === "video_source"
                ? "bg-amber-400 text-stone-950 shadow-md"
                : "bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800"
            }`}
          >
            <Tv className="w-4 h-4" />
            <span>3. Video Sync Izvor</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: LIVE REŽIJSKI MIKSER & SESIJA                                      */}
      {/* ========================================================================= */}
      {activeConsoleTab === "session" && (
        <div className="space-y-6">
          
          {/* Top Status & Master Out Monitor Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-3xl bg-[#111622] border border-stone-800 shadow-2xl">
            {/* Left: Compact Outgoing Video Stream Monitor */}
            <div className="lg:col-span-4 flex gap-4 items-center bg-stone-900/90 p-4 rounded-2xl border border-stone-800">
              <div className="relative w-36 h-20 rounded-xl overflow-hidden bg-black shrink-0 border border-stone-700">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=400&q=80"
                  alt="Video Preview Out"
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono font-bold text-red-500">
                  OUT
                </div>
                <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-stone-300">
                  1080p25
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-bold text-white">Video Sync Out</span>
                </div>
                <p className="text-[11px] text-stone-400">
                  Prozor: <strong className="text-stone-200">{capturedVideoName}</strong>
                </p>
                <button
                  onClick={requestScreenCapture}
                  className="text-[10px] text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
                >
                  Promijeni prozor dijeljenja
                </button>
              </div>
            </div>

            {/* Middle: Outgoing Master VU Meter */}
            <div className="lg:col-span-5 bg-stone-900/90 p-4 rounded-2xl border border-stone-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-orange-400" />
                  <span>Outgoing Master Stream (Ka Klijentima)</span>
                </span>
                <span className="text-[10px] text-stone-400">
                  EBU R128: <strong className="text-cyan-400">-23.1 LUFS</strong>
                </span>
              </div>

              <div className="space-y-1.5 py-1">
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="w-3 text-stone-500 font-bold">L</span>
                  <div className="flex-1 h-3.5 bg-black rounded-sm overflow-hidden p-0.5 flex items-center border border-stone-800">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500 rounded-2xs transition-all duration-100"
                      style={{ width: `${outgoingLeft}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-stone-300">-2.4 dB</span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="w-3 text-stone-500 font-bold">R</span>
                  <div className="flex-1 h-3.5 bg-black rounded-sm overflow-hidden p-0.5 flex items-center border border-stone-800">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500 rounded-2xs transition-all duration-100"
                      style={{ width: `${outgoingRight}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-stone-300">-2.8 dB</span>
                </div>
              </div>

              <div className="flex justify-between text-[9px] font-mono text-stone-500 px-5 pt-0.5">
                <span>-48</span>
                <span>-36</span>
                <span>-24</span>
                <span className="text-cyan-400 font-bold">-18 (EBU)</span>
                <span>-12</span>
                <span>-6</span>
                <span>-3</span>
                <span className="text-red-400">0 dBFS</span>
              </div>
            </div>

            {/* Right: Master Session Controls & On-Air */}
            <div className="lg:col-span-3 bg-stone-900/90 p-4 rounded-2xl border border-stone-800 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400">Režijski Status</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  48kHz / 24-bit
                </span>
              </div>

              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`w-full py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isRecording
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 border border-red-500 animate-pulse"
                    : "bg-stone-800 text-stone-400 border border-stone-700"
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${isRecording ? "bg-white" : "bg-stone-500"}`} />
                <span>{isRecording ? "● REC ON AIR" : "PAUZA (STANDBY)"}</span>
              </button>
            </div>
          </div>

          {/* Active Speaker Beacon */}
          <div className="p-4 rounded-2xl bg-[#0f141d] border border-cyan-500/30 shadow-lg flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
                Detekcija Govornika:
              </span>
              {activeSpeaker ? (
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5" />
                  <span>{activeSpeaker.name} ({activeSpeaker.role})</span>
                </span>
              ) : (
                <span className="text-xs font-mono text-stone-500 italic">
                  Tišina na linijama (Niko od učesnika trenutno ne govori)
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-stone-400">Talkback:</span>
                <button
                  onClick={() => setTalkbackMode("all")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    talkbackMode === "all" ? "bg-orange-500 text-stone-950 font-bold" : "bg-stone-800 text-stone-400"
                  }`}
                >
                  Svima (All)
                </button>
                <button
                  onClick={() => setTalkbackMode("booth_only")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    talkbackMode === "booth_only" ? "bg-cyan-500 text-stone-950 font-bold" : "bg-stone-800 text-stone-400"
                  }`}
                >
                  Samo Spikeru (Booth Only)
                </button>
              </div>

              <button
                onMouseDown={() => setTalkbackActive(true)}
                onMouseUp={() => setTalkbackActive(false)}
                className={`px-5 py-2 rounded-xl font-bold transition-all select-none cursor-pointer flex items-center gap-2 ${
                  talkbackActive
                    ? "bg-emerald-500 text-stone-950 scale-95 shadow-lg shadow-emerald-500/30"
                    : "bg-stone-800 hover:bg-stone-700 text-white border border-stone-700"
                }`}
              >
                <Mic className="w-4 h-4" />
                <span>{talkbackActive ? "GOVORITE U INTERKOM..." : "HOLD TALKBACK"}</span>
              </button>
            </div>
          </div>

          {/* Multi-Channel Mixer Strip */}
          <div className="rounded-3xl bg-[#111622] border border-stone-800 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white font-sans">
                  Režijski Tonski Pult & Kontrola Učesnika
                </h3>
              </div>
              <span className="text-xs font-mono text-stone-400">
                Pojedinačni nivoi za Režiju (CR) i za Slušalice Spikera (Booth)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Channel 1: Booth Talent Mic */}
              <div className="p-4 rounded-2xl bg-stone-900/90 border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">
                      Studio Ulaz
                    </span>
                    <span className="text-[9px] font-mono text-stone-400">RME In 1</span>
                  </div>
                  <span className="text-xs font-bold text-white block truncate mb-3">
                    Gluva Soba (Neumann U87)
                  </span>

                  <div className="h-2.5 bg-black rounded-full overflow-hidden p-0.5 mb-3 border border-stone-800">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500 rounded-full transition-all duration-100"
                      style={{ width: `${rmeInputs[0].gain * 0.85}%` }}
                    />
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] text-stone-400 mb-1">
                        <span>Mic Preamp Gain</span>
                        <span className="text-amber-400 font-bold">+{rmeInputs[0].gain} dB</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={rmeInputs[0].gain}
                        onChange={(e) => updateRmeInputGain(1, Number(e.target.value))}
                        className="w-full accent-amber-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-stone-500">Routing: In 1 ➔ Booth & Stream</span>
                  <button
                    onClick={() => toggleRmeInputMute(1)}
                    className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      rmeInputs[0].isMuted ? "bg-red-600 text-white" : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                    }`}
                  >
                    {rmeInputs[0].isMuted ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Channel 2: RME Loopback DAW Master */}
              <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                      DAW Loopback
                    </span>
                    <span className="text-[9px] font-mono text-stone-400">RME In 7/8</span>
                  </div>
                  <span className="text-xs font-bold text-white block truncate mb-3">
                    Vegas / Cubase Playback
                  </span>

                  <div className="h-2.5 bg-black rounded-full overflow-hidden p-0.5 mb-3 border border-stone-800">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-100"
                      style={{ width: `${rmeInputs[6].gain * 0.8}%` }}
                    />
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] text-stone-400 mb-1">
                        <span>Playback Nivo</span>
                        <span className="text-cyan-400 font-bold">{rmeInputs[6].gain}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={rmeInputs[6].gain}
                        onChange={(e) => updateRmeInputGain(7, Number(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-stone-500">Loopback RME Feed</span>
                  <button
                    onClick={() => toggleRmeInputMute(7)}
                    className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      rmeInputs[6].isMuted ? "bg-red-600 text-white" : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                    }`}
                  >
                    {rmeInputs[6].isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Channels 3, 4, 5: Participants */}
              {participants.map((p) => (
                <div
                  key={p.id}
                  className={`p-4 rounded-2xl bg-stone-900/90 border flex flex-col justify-between transition-all duration-200 ${
                    p.isSpeaking
                      ? "border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.2)] bg-[#171c26]"
                      : "border-stone-800"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold uppercase ${p.isSpeaking ? "text-amber-400" : "text-stone-500"}`}>
                        {p.isSpeaking ? "● GOVORI" : "Online"}
                      </span>
                      <button
                        onClick={() => toggleHearsStudio(p.id)}
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded cursor-pointer ${
                          p.hearsStudio
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                            : "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}
                        title="Da li ovaj klijent sluša signal režije"
                      >
                        {p.hearsStudio ? "Sluša Režiju" : "Isključen"}
                      </button>
                    </div>

                    <span className="text-xs font-bold text-white block truncate">
                      {p.name}
                    </span>
                    <span className="text-[10px] text-stone-400 block truncate mb-3">
                      {p.role}
                    </span>

                    <div className="h-2 bg-black rounded-full overflow-hidden p-0.5 mb-3 border border-stone-800">
                      <div
                        className="h-full bg-emerald-400 rounded-full transition-all duration-100"
                        style={{ width: p.isMuted ? "0%" : `${p.incomingLevel}%` }}
                      />
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] text-stone-400 mb-1">
                          <span>CR (Režija)</span>
                          <span className="text-white font-bold">{p.volumeCR}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={p.volumeCR}
                          onChange={(e) => setCRVolume(p.id, Number(e.target.value))}
                          className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] text-stone-400 mb-1">
                          <span>Booth (Spiker)</span>
                          <span className="text-amber-400 font-bold">{p.volumeBooth}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={p.volumeBooth}
                          onChange={(e) => setBoothVolume(p.id, Number(e.target.value))}
                          className="w-full accent-amber-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-800 mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-500">Mute Učesnika:</span>
                    <button
                      onClick={() => toggleMute(p.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        p.isMuted
                          ? "bg-red-600 text-white"
                          : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                      }`}
                    >
                      {p.isMuted ? "MUTIRAN" : "MUTE"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Take Selector & One-Click Fluxa Sync */}
          <div className="p-6 rounded-3xl bg-[#111622] border border-stone-800 shadow-xl flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Odobreni Tejk za Sinhronizaciju:</span>
              </span>

              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((take) => (
                  <button
                    key={take}
                    onClick={() => setSelectedTake(take)}
                    className={`px-3.5 py-1.5 rounded-xl font-bold cursor-pointer transition-all ${
                      selectedTake === take
                        ? "bg-orange-500 text-stone-950 shadow-md"
                        : "bg-stone-800 text-stone-400 hover:text-white"
                    }`}
                  >
                    Tejk {take}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSyncToFluxa(selectedTake)}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-stone-950 font-bold text-xs font-mono tracking-wide shadow-lg shadow-emerald-500/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Kopiraj Tejk {selectedTake} u Fluxa Klijentski Folder</span>
            </button>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: RME HARDWARE MATRICA (12 IN / 8 OUT GRANULARNO RUTIRANJE)          */}
      {/* ========================================================================= */}
      {activeConsoleTab === "rme_hardware" && (
        <div className="space-y-6">
          
          {/* Header Specs of the RME Card */}
          <div className="p-6 rounded-3xl bg-[#111622] border border-cyan-500/30 shadow-2xl flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                Fizička Zvučna Karta • RME Multichannel Interface
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                RME 12 Input / 8 Output Matrica Kanala & Rutiranja
              </h3>
              <p className="text-xs text-stone-400 font-mono mt-1">
                Svaki ulaz i izlaz se pojedinačno povezuje, dodjeljuje i usmjerava prema gluvozvučnoj sobi, režijskim monitorima ili klijentskom streamu.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div>
                <label className="text-[10px] text-stone-400 block mb-1">Sample Rate</label>
                <select
                  value={sampleRate}
                  onChange={(e) => setSampleRate(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-700 text-white font-bold"
                >
                  <option value="44100">44.1 kHz (CD Audio)</option>
                  <option value="48000">48.0 kHz (Broadcast Pro)</option>
                  <option value="96000">96.0 kHz (Hi-Res Master)</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] text-stone-400 block mb-1">ASIO Buffer Size</label>
                <select
                  value={bufferSize}
                  onChange={(e) => setBufferSize(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-700 text-cyan-400 font-bold"
                >
                  <option value="64">64 samples (1.3 ms)</option>
                  <option value="128">128 samples (2.7 ms)</option>
                  <option value="256">256 samples (5.3 ms)</option>
                  <option value="512">512 samples (10.6 ms)</option>
                </select>
              </div>
            </div>
          </div>

          {/* 12 Hardware Inputs Grid */}
          <div className="rounded-3xl bg-[#111622] border border-stone-800 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
              <div className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-amber-400" />
                <h4 className="text-base font-bold text-white font-sans">
                  Fizički Ulazi (RME Inputs 1 – 12)
                </h4>
              </div>
              <span className="text-xs font-mono text-stone-400">
                Aktivno mapiranje: 12 diskretnih hardverskih kanala
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {rmeInputs.map((ch) => (
                <div
                  key={ch.id}
                  className={`p-4 rounded-2xl bg-stone-900/90 border flex flex-col justify-between text-xs font-mono ${
                    ch.isMuted ? "border-stone-800 opacity-60" : "border-stone-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        {ch.port}
                      </span>
                      <button
                        onClick={() => toggleRmeInputMute(ch.id)}
                        className={`text-[9px] px-2 py-0.5 rounded font-bold cursor-pointer ${
                          ch.isMuted ? "bg-red-600 text-white" : "bg-stone-800 text-stone-300"
                        }`}
                      >
                        {ch.isMuted ? "MUTED" : "ON"}
                      </button>
                    </div>

                    <span className="text-white font-bold block truncate mb-1">
                      {ch.name}
                    </span>

                    {/* Hardware Input VU meter */}
                    <div className="h-2 bg-black rounded-full overflow-hidden p-0.5 mb-3 border border-stone-800">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500 rounded-full transition-all duration-100"
                        style={{ width: ch.isMuted ? "0%" : `${ch.gain * 0.8}%` }}
                      />
                    </div>

                    {/* Gain Fader */}
                    <div className="mb-3">
                      <div className="flex justify-between text-[10px] text-stone-400 mb-1">
                        <span>Hardverski Gain</span>
                        <span className="text-white font-bold">{ch.gain}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={ch.gain}
                        onChange={(e) => updateRmeInputGain(ch.id, Number(e.target.value))}
                        className="w-full accent-amber-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Matrix Routing Switches: To Booth, To Stream, To Control Room */}
                  <div className="pt-3 border-t border-stone-800 space-y-1.5">
                    <span className="text-[10px] text-stone-400 block font-bold mb-1">Rutiraj u sabirnice:</span>
                    <div className="grid grid-cols-3 gap-1 text-[9px] text-center">
                      <button
                        onClick={() => toggleRmeInputRoute(ch.id, "toBooth")}
                        className={`py-1 rounded font-bold cursor-pointer transition-colors ${
                          ch.toBooth ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "bg-stone-800 text-stone-500"
                        }`}
                        title="Šalje ovaj ulaz u slušalice spikera"
                      >
                        Booth
                      </button>

                      <button
                        onClick={() => toggleRmeInputRoute(ch.id, "toStream")}
                        className={`py-1 rounded font-bold cursor-pointer transition-colors ${
                          ch.toStream ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-stone-800 text-stone-500"
                        }`}
                        title="Šalje ovaj ulaz klijentima u online stream"
                      >
                        Stream
                      </button>

                      <button
                        onClick={() => toggleRmeInputRoute(ch.id, "toCR")}
                        className={`py-1 rounded font-bold cursor-pointer transition-colors ${
                          ch.toCR ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-stone-800 text-stone-500"
                        }`}
                        title="Šalje ovaj ulaz na režijske monitore"
                      >
                        CR
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8 Hardware Outputs Grid */}
          <div className="rounded-3xl bg-[#111622] border border-stone-800 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-cyan-400" />
                <h4 className="text-base font-bold text-white font-sans">
                  Fizički Izlazi (RME Outputs 1 – 8)
                </h4>
              </div>
              <span className="text-xs font-mono text-stone-400">
                Povezivanje režijskih monitora, gluvog prostora i stream loopback-a
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {rmeOutputs.map((out) => (
                <div
                  key={out.id}
                  className="p-4 rounded-2xl bg-stone-900/90 border border-stone-700 flex flex-col justify-between text-xs font-mono"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">
                        {out.port}
                      </span>
                      <span className="text-[9px] text-stone-400">48kHz D/A</span>
                    </div>

                    <span className="text-white font-bold block truncate mb-1">
                      {out.name}
                    </span>

                    <div className="h-2 bg-black rounded-full overflow-hidden p-0.5 mb-3 border border-stone-800">
                      <div
                        className="h-full bg-cyan-400 rounded-full transition-all duration-100"
                        style={{ width: `${out.level * 0.85}%` }}
                      />
                    </div>

                    <div className="space-y-1 mb-2">
                      <div className="flex justify-between text-[10px] text-stone-400">
                        <span>Master Nivo</span>
                        <span className="text-white font-bold">{out.level}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={out.level}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setRmeOutputs((prev) =>
                            prev.map((o) => (o.id === out.id ? { ...o, level: val } : o))
                          );
                        }}
                        className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                    <span className="text-[10px] text-stone-400">Status Izlaza:</span>
                    <button
                      onClick={() => {
                        setRmeOutputs((prev) =>
                          prev.map((o) => (o.id === out.id ? { ...o, isMuted: !o.isMuted } : o))
                        );
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        out.isMuted ? "bg-red-600 text-white" : "bg-stone-800 text-stone-300"
                      }`}
                    >
                      {out.isMuted ? "MUTED" : "AKTIVAN"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preset Actions */}
          <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-between text-xs font-mono">
            <span className="text-stone-400">
              Profil: <strong className="text-white">Studio TAF • RME Master Routing (12 In / 8 Out)</strong>
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => alert("RME Matrica je sačuvana kao vaš primarni profil u sistemu!")}
                className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-stone-950 font-bold cursor-pointer"
              >
                Sačuvaj RME Profil
              </button>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: VIDEO SYNC SOURCE (DIJELJENJE RADNOG PROZORA IZ SOFTVERA)          */}
      {/* ========================================================================= */}
      {activeConsoleTab === "video_source" && (
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#111622] border border-stone-800 p-8 shadow-2xl space-y-6">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
              Video Sinhronizacija Režije
            </span>
            <h3 className="text-2xl font-bold text-white">
              Odabir Video Prozora za Klijente (Vegas Pro Preview)
            </h3>
            <p className="text-xs text-stone-400 font-mono mt-1">
              Klijenti vide samo ovaj prozor sa videom u realnom vremenu (1080p, bez timeline-a, bez alata).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-4 text-xs font-mono">
            <div className="flex items-center justify-between">
              <span className="text-stone-300 font-bold">Trenutno odabrani prozor:</span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                {capturedVideoName}
              </span>
            </div>

            <p className="text-stone-400 leading-relaxed font-light">
              Klikom na dugme ispod, pretraživač će vam ponuditi prozor koji želite podijeliti. 
              Odaberite vaš <strong>Video Preview prozor</strong> iz montažnog programa. Klijenti na svojim portalima 
              dobijaju kristalno čist video feed sinhronizovan sa audio streamom.
            </p>

            <button
              onClick={requestScreenCapture}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-bold transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Tv className="w-4 h-4" />
              <span>Odaberi Video Prozor iz Programa</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
