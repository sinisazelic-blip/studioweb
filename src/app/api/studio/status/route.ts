import { NextResponse } from "next/server";

export async function GET() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const res = await fetch("https://x.fluxa.ba/api/studio/status", {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({
        success: true,
        isOnAir: Boolean(data?.activeSession?.isOnAir),
        isOnline: Boolean(data?.isOnline),
        projectName: data?.activeSession?.projectName || "",
      });
    }
  } catch (_) {}

  return NextResponse.json({
    success: true,
    isOnAir: false,
    isOnline: false,
  });
}
