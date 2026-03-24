// app/api/lead/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// --- Types ---
// Angepasst auf das neue 5-Fragen-Quiz
type Lead = {
  // Neue Quiz-Felder
  topic?: string;                 // Q1: Förderthema (Onlineshop, Webseite, Neukunden, Sonstiges)
  startTimeline?: string;         // Q2: Startzeitpunkt des Projekts
  bundesland?: string;            // Q3: Bundesland
  implementationPlan?: string;    // Q4: Umsetzungsplanung
  investmentReadiness?: string;   // Q5: Eigeninvestition ab 3.000 €

  // Kontakt
  name?: string;
  email?: string;
  phone?: string;

  // Honeypot (nur falls du ihn mal mitsenden willst)
  hp?: string;

  // Optional: Legacy-Feld, falls irgendwo noch "timeframe" verwendet wird
  timeframe?: string;
};

// ⚠️ Bei Bedarf anpassen
const WEBHOOK = 'https://hook.eu2.make.com/xo2dbae79i94xj5umvcefmpuv13lsaqp';

// --- Utils ---
function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
function isValidPhone(p: string) {
  // mind. 6 zulässige Zeichen (Ziffern, +, (), Leerzeichen, -)
  return /^[0-9+()\s-]{6,}$/.test(p);
}
function sanitize(s: unknown) {
  return String(s ?? '').trim().slice(0, 500);
}

export async function POST(req: NextRequest) {
  let body: any = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot -> still und 204 zurück
  if (body.hp) {
    return new NextResponse(null, { status: 204 });
  }

  // Normalisiertes Lead-Payload passend zum neuen Quiz
  const payload: Lead = {
    // Quiz-Felder
    topic: sanitize(body.topic),
    // timeframe (alt) und startTimeline (neu) werden zusammengeführt
    startTimeline: sanitize(body.startTimeline ?? body.timeframe),
    bundesland: sanitize(body.bundesland),
    implementationPlan: sanitize(body.implementationPlan),
    investmentReadiness: sanitize(body.investmentReadiness),

    // Kontakt
    name: sanitize(body.name),
    email: sanitize(body.email),
    phone: sanitize(body.phone),

    // Legacy-Feld optional
    timeframe: sanitize(body.timeframe ?? body.startTimeline),

    // Honeypot, falls du ihn ins Make-Szenario mitgeben willst
    hp: sanitize(body.hp),
  };

  // Validierung – im Frontend sind Name, E-Mail, Telefon required
  const emailOk = !!payload.email && isValidEmail(payload.email);
  const nameOk = !!payload.name;
  const phoneOk = !!payload.phone && isValidPhone(payload.phone!);

  if (!nameOk || !emailOk || !phoneOk) {
    return NextResponse.json(
      {
        ok: false,
        error: 'validation',
        fields: {
          name: nameOk,
          email: emailOk,
          phone: phoneOk,
        },
      },
      { status: 400 }
    );
  }

  // UTM-Parameter einsammeln (Query + Referer)
  const sp = req.nextUrl?.searchParams;
  const getUtm = (key: string) => sanitize(sp?.get(key));
  let utm_campaign = getUtm('utm_campaign');

  if (!utm_campaign) {
    const ref = req.headers.get('referer');
    try {
      if (ref) {
        const refParams = new URL(ref).searchParams;
        utm_campaign = sanitize(refParams.get('utm_campaign'));
      }
    } catch {
      // ignore invalid referer
    }
  }

  const utm = {
    source: getUtm('utm_source') || undefined,
    medium: getUtm('utm_medium') || undefined,
    campaign: utm_campaign || undefined,
    term: getUtm('utm_term') || undefined,
    content: getUtm('utm_content') || undefined,
  };

  // Timeout-Signal (10s)
  let controller: AbortController | undefined;
  let signal: AbortSignal | undefined;
  if (typeof (AbortSignal as any).timeout === 'function') {
    signal = (AbortSignal as any).timeout(10_000);
  } else {
    controller = new AbortController();
    signal = controller.signal;
    setTimeout(() => controller?.abort(), 10_000);
  }

  try {
    const res = await fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'next-quiz-foerdermittel',
        ...payload,
        meta: {
          ua: req.headers.get('user-agent') ?? undefined,
          ip: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? undefined,
          ts: new Date().toISOString(),
          utm,
        },
      }),
      signal,
    });

    if (res.ok) {
      return new NextResponse(null, { status: 204 });
    }

    return NextResponse.json({ ok: false, forwarded: true }, { status: 502 });
  } catch (e) {
    console.error('Webhook-Error', e);
    return NextResponse.json({ ok: false, forwarded: false }, { status: 502 });
  }
}

// Optional: GET zum Health-Check
export async function GET() {
  return NextResponse.json({ ok: true, route: 'lead' });
}
