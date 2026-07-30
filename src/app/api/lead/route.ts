// app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Lead = {
  // Quiz-Felder
  presentationReady?: "Ja" | "Noch unsicher" | string;
  assetType?: string;

  // Kontakt
  name?: string;
  email?: string;
  phone?: string;

  // Bot-Schutz
  hp?: string; // optionales Honeypot-Feld
};

const WEBHOOK = "https://hook.eu2.make.com/qpubqmscp986q42jvcqrtpgauj0uoppv";

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
function sanitize(s: unknown, max = 500) {
  return String(s ?? "").trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  let body: Lead = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: wenn gesetzt -> Bot
  if (body.hp) {
    // 204 sollte eigentlich keinen Body haben – wir geben trotzdem ok zurück, aber ohne Content.
    return new NextResponse(null, { status: 204 });
  }

  // Lead-Payload (sanitized)
  const payload: Lead = {
    presentationReady: sanitize(body.presentationReady, 50),
    assetType: sanitize(body.assetType, 120),
    name: sanitize(body.name, 120),
    email: sanitize(body.email, 180),
    phone: sanitize(body.phone, 80),
  };

  // Validation
  if (!payload.name || !payload.email || !payload.phone || !isValidEmail(payload.email)) {
    return NextResponse.json(
      {
        ok: false,
        error: "validation",
        fields: {
          name: !!payload.name,
          email: isValidEmail(payload.email || ""),
          phone: !!payload.phone,
        },
      },
      { status: 400 }
    );
  }

  // 🔎 UTM-Parameter einsammeln (Query + Referer als Fallback)
  const sp = req.nextUrl?.searchParams;
  const getUtm = (key: string) => sanitize(sp?.get(key));
  let utm_campaign = getUtm("utm_campaign");

  if (!utm_campaign) {
    const ref = req.headers.get("referer");
    try {
      if (ref) {
        const refParams = new URL(ref).searchParams;
        utm_campaign = sanitize(refParams.get("utm_campaign"));
      }
    } catch {
      // ignore invalid referer
    }
  }

  const utm = {
    source: getUtm("utm_source") || undefined,
    medium: getUtm("utm_medium") || undefined,
    campaign: utm_campaign || undefined,
    term: getUtm("utm_term") || undefined,
    content: getUtm("utm_content") || undefined,
  };

  // Timeout handling (10s)
  let controller: AbortController | undefined;
  let signal: AbortSignal | undefined;

  if (typeof (AbortSignal as any).timeout === "function") {
    signal = (AbortSignal as any).timeout(10_000);
  } else {
    controller = new AbortController();
    signal = controller.signal;
    setTimeout(() => controller?.abort(), 10_000);
  }

  try {
    const res = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "next-quiz",
        ...payload,
        meta: {
          ua: req.headers.get("user-agent") ?? undefined,
          ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? undefined,
          ts: new Date().toISOString(),
          utm,
        },
      }),
      signal,
    });

    const ok = res.ok;
    return NextResponse.json({ ok, forwarded: true }, { status: ok ? 200 : 502 });
  } catch (e) {
    console.error("Webhook-Error", e);
    return NextResponse.json({ ok: false, forwarded: false }, { status: 502 });
  }
}
