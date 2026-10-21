import React from "react";

interface FluxaxNetLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
}

export default function FluxaxNetLogo({ className = "", size = "md", showSubtitle = true }: FluxaxNetLogoProps) {
  const isSm = size === "sm";
  const isLg = size === "lg";

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-2">
        {/* Modern Fx Icon with Signal Beacon */}
        <div
          className={`relative rounded-xl bg-gradient-to-br from-[#172033] to-[#0b0e14] border border-cyan-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.25)] ${
            isSm ? "w-8 h-8 rounded-lg" : isLg ? "w-12 h-12 rounded-2xl" : "w-10 h-10 rounded-xl"
          }`}
        >
          <span className={`font-black tracking-tighter text-white font-mono ${isSm ? "text-xs" : isLg ? "text-xl" : "text-base"}`}>
            F<span className="text-cyan-400">x</span>
          </span>
          {/* Signal beacon dot on top-right */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
        </div>

        {/* Brand Text */}
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1">
            <span className={`font-extrabold tracking-tight text-white font-sans ${isSm ? "text-sm" : isLg ? "text-2xl" : "text-lg"}`}>
              FLUXA<span className="text-cyan-400">X</span>
            </span>
            <span className={`font-light tracking-widest text-cyan-200/90 font-mono ${isSm ? "text-xs" : isLg ? "text-lg" : "text-sm"}`}>
              NET
            </span>
          </div>

          {showSubtitle && (
            <div className="flex items-center gap-1.5 mt-1">
              <span className={`tracking-[0.25em] font-mono uppercase text-stone-400 font-bold ${isSm ? "text-[8px]" : "text-[9px]"}`}>
                STUDIOBRIDGE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
