import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch("https://app.fluxa.ba/api/public/stats/projects", {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (res.ok) {
      const data = await res.json();
      if (typeof data.count === "number") {
        return NextResponse.json({
          ok: true,
          count: data.count,
        });
      }
    }
  } catch (_) {}

  // Sigurni fallback na zadnji poznati stvarni broj iz baze
  return NextResponse.json({
    ok: true,
    count: 6017,
  });
}
