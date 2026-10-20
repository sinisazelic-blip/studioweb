"use client";

import React, { useState } from "react";
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
  FileText
} from "lucide-react";

export interface ParticipantData {
  id: string;
  name: string;
  role: string;
  email: string;
  online: boolean;
  isSpeaking: boolean;
  incomingLevel: number; // 0 - 100 VU
  volumeCR: number;       // Control Room fader
  volumeBooth: number;    // Booth fader
  isMuted: boolean;
  hearsStudio: boolean;
}

interface StudioDirectorConsoleProps {
  onSyncToFluxa: (take: number) => void;
}

export default function StudioDirectorConsole({ onSyncToFluxa }: StudioDirectorConsoleProps) {
  // Session Master State
  const [isRecording, setIsRecording] = useState<boolean>(true);
  const [selectedTake, setSelectedTake] = useState<number>(2);

  // Outgoing Master Stream Levels (Left & Right dBFS)
  const [outgoingLeft, setOutgoingLeft] = useState<number>(84);
  const [outgoingRight, setOutgoingRight] = useState<number>(82);

  // Talkback state
  const [talkbackMode, setTalkbackMode] = useState<"all" | "booth_only">("all");
  const [talkbackActive, setTalkbackActive] = useState<boolean>(false);

  // Master Studio Channels
  const [boothMicGain, setBoothMicGain] = useState<number>(88);
  const [boothMicMuted, setBoothMicMuted] = useState<boolean>(false);
  const [dawPlaybackLevel, setDawPlaybackLevel] = useState<number>(65);
  const [dawMuted, setDawMuted] = useState<boolean>(false);

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
      isSpeaking: true, // Currently speaking!
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

  // Active speaker detection
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

  return (
    <div className="space-y-6">
      
      {/* ========================================================================= */}
      {/* 1. TOP STATUS & MASTER OUT MONITOR BAR (COMPACT VIDEO + STEREO VU METER)  */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-3xl bg-[#111622] border border-stone-800 shadow-2xl">
        
        {/* Left: Compact Outgoing Video Stream Monitor (Mini Thumbnail) */}
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
              Prozor: <strong className="text-stone-200">Video Preview</strong>
            </p>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>WebRTC Stream Aktivan</span>
            </div>
          </div>
        </div>

        {/* Center: Live Outgoing Mastering Stereo VU Meter (Signal koji šaljemo njima) */}
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

          {/* Dual Stereo VU Meter Display */}
          <div className="space-y-1.5 py-1">
            {/* Left Channel */}
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

            {/* Right Channel */}
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

          {/* Scale markers */}
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

      {/* ========================================================================= */}
      {/* 2. ACTIVE SPEAKER LIVE BEACON ("KO TRENUTNO GOVORI")                      */}
      {/* ========================================================================= */}
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
            <span className="text-stone-400">Talkback Režija:</span>
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

      {/* ========================================================================= */}
      {/* 3. MULTI-CHANNEL MIXER STRIP (STUDIO MIC + TALKBACK + EACH PARTICIPANT)    */}
      {/* ========================================================================= */}
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

        {/* Grid of Mixer Strips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Channel 1: Booth Talent Mic (Neumann U87) */}
          <div className="p-4 rounded-2xl bg-stone-900/90 border border-amber-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">
                  Studio Ulaz
                </span>
                <span className="text-[9px] font-mono text-stone-400">In 1 • Apollo</span>
              </div>
              <span className="text-xs font-bold text-white block truncate mb-3">
                Gluva Soba (Talent)
              </span>

              {/* VU Meter */}
              <div className="h-2.5 bg-black rounded-full overflow-hidden p-0.5 mb-3 border border-stone-800">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500 rounded-full transition-all duration-100"
                  style={{ width: boothMicMuted ? "0%" : `${boothMicGain * 0.9}%` }}
                />
              </div>

              {/* Fader */}
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-[10px] font-mono text-stone-400">
                  <span>Režija Fader</span>
                  <span>{boothMicGain}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={boothMicGain}
                  onChange={(e) => setBoothMicGain(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                />
              </div>
            </div>

            <button
              onClick={() => setBoothMicMuted(!boothMicMuted)}
              className={`w-full py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                boothMicMuted ? "bg-red-600 text-white" : "bg-stone-800 text-stone-300 hover:bg-stone-700"
              }`}
            >
              {boothMicMuted ? "MUTED" : "MUTE TALENT"}
            </button>
          </div>

          {/* Channels 2, 3, 4: Individual Participants Strips */}
          {participants.map((p) => (
            <div
              key={p.id}
              className={`p-4 rounded-2xl transition-all duration-200 flex flex-col justify-between ${
                p.isSpeaking
                  ? "bg-[#141b27] border-2 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]"
                  : "bg-stone-900/80 border border-stone-800"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase truncate max-w-[100px]">
                    {p.role}
                  </span>
                  {p.isSpeaking && (
                    <span className="px-1.5 py-0.2 rounded bg-emerald-500 text-stone-950 text-[9px] font-mono font-extrabold animate-pulse">
                      TALK
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold text-white block truncate mb-3" title={p.name}>
                  {p.name}
                </span>

                {/* Participant Incoming Mic VU */}
                <div className="h-2.5 bg-black rounded-full overflow-hidden p-0.5 mb-3 border border-stone-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-100"
                    style={{ width: p.isMuted ? "0%" : `${p.incomingLevel}%` }}
                  />
                </div>

                {/* CR Fader (Koliko ga čujem ja u režiji) */}
                <div className="space-y-1 mb-2">
                  <div className="flex justify-between text-[10px] font-mono text-stone-400">
                    <span>U Režiji (CR)</span>
                    <span>{p.volumeCR}%</span>
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

                {/* Booth Feed Fader (Koliko ga spiker čuje u sobi) */}
                <div className="space-y-1 mb-3">
                  <div className="flex justify-between text-[10px] font-mono text-stone-400">
                    <span>Spikeru u Sobu</span>
                    <span>{p.volumeBooth}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={p.volumeBooth}
                    onChange={(e) => setBoothVolume(p.id, Number(e.target.value))}
                    className="w-full accent-orange-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                  />
                </div>
              </div>

              {/* Action buttons: Mute + Hear Studio Toggle */}
              <div className="space-y-2 pt-2 border-t border-stone-800">
                <button
                  onClick={() => toggleMute(p.id)}
                  className={`w-full py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    p.isMuted ? "bg-red-600 text-white" : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                  }`}
                >
                  {p.isMuted ? "MUTIRAN" : "MUTE"}
                </button>

                <button
                  onClick={() => toggleHearsStudio(p.id)}
                  className={`w-full py-1 rounded text-[10px] font-mono font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    p.hearsStudio
                      ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                      : "bg-stone-800 text-stone-500 border border-stone-700"
                  }`}
                >
                  <Headphones className="w-3 h-3" />
                  <span>{p.hearsStudio ? "Čuje Studio: DA" : "Čuje Studio: NE"}</span>
                </button>
              </div>
            </div>
          ))}

          {/* Channel 5: DAW / Playback Feed */}
          <div className="p-4 rounded-2xl bg-stone-900/90 border border-purple-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-purple-400 font-bold uppercase">
                  Playback
                </span>
                <span className="text-[9px] font-mono text-stone-400">DAW Ch 1-2</span>
              </div>
              <span className="text-xs font-bold text-white block truncate mb-3">
                Muzika & Matrica
              </span>

              {/* VU Meter */}
              <div className="h-2.5 bg-black rounded-full overflow-hidden p-0.5 mb-3 border border-stone-800">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-purple-400 rounded-full transition-all duration-100"
                  style={{ width: dawMuted ? "0%" : `${dawPlaybackLevel * 0.8}%` }}
                />
              </div>

              {/* Fader */}
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-[10px] font-mono text-stone-400">
                  <span>Playback Fader</span>
                  <span>{dawPlaybackLevel}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={dawPlaybackLevel}
                  onChange={(e) => setDawPlaybackLevel(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                />
              </div>

              <div className="p-2 rounded bg-stone-950 border border-stone-800 text-[10px] font-mono text-stone-400 mb-2">
                Auto-Duck: <span className="text-emerald-400">-20dB na Talkback</span>
              </div>
            </div>

            <button
              onClick={() => setDawMuted(!dawMuted)}
              className={`w-full py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                dawMuted ? "bg-red-600 text-white" : "bg-stone-800 text-stone-300 hover:bg-stone-700"
              }`}
            >
              {dawMuted ? "MUTED" : "MUTE PLAYBACK"}
            </button>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. TAKE SELECTION & FLUXA FOLDER SYNC ACTION BAR                          */}
      {/* ========================================================================= */}
      <div className="p-6 rounded-3xl bg-[#111622] border border-stone-800 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-stone-400 font-bold">Aktivni Tejk:</span>
          {[1, 2, 3, 4].map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTake(t)}
              className={`px-3.5 py-1.5 rounded-xl font-bold cursor-pointer transition-all ${
                selectedTake === t
                  ? "bg-cyan-500 text-stone-950 shadow-md shadow-cyan-500/20"
                  : "bg-stone-900 text-stone-300 hover:text-white border border-stone-700"
              }`}
            >
              Tejk {t}
            </button>
          ))}
          <span className="text-emerald-400 text-[11px] ml-2">
            Tejk {selectedTake} odobren za finalni master
          </span>
        </div>

        <button
          onClick={() => onSyncToFluxa(selectedTake)}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 font-bold font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/25 flex items-center gap-2"
        >
          <CheckCircle className="w-4 h-4 text-stone-950" />
          <span>Kopiraj Tejk {selectedTake} u Fluxa Klijentski Folder</span>
        </button>
      </div>

    </div>
  );
}
