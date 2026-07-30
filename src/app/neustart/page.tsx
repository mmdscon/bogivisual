'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { WebinarJamEmbed } from '@/components/WebinarJamEmbed';
import { BadgeCheck, HeartHandshake, Sparkles, Zap } from 'lucide-react';

/**
 * KURZ-VARIANTE „Neustart"
 * ------------------------------------------------------------
 * Ziel: gleiche Marke, gleiches Design-System wie die Haupt-Landingpage,
 * aber deutlich kürzer, emotionaler und mit zugespitztem Werteversprechen.
 * Kein Menü, keine Ablenkung – ein einziger Weg: Anmeldung.
 * Neue eigenständige Route (/neustart), Hauptseite bleibt unverändert.
 */

function IconBadge({
  icon: Icon,
  tone = 'onDefault',
  size = 18,
  className = '',
}: {
  icon: React.ElementType;
  tone?: 'onDefault' | 'onAccent';
  size?: number;
  className?: string;
}) {
  const BRAND = '#FFF6A7';
  const bg = tone === 'onAccent' ? '#000000' : BRAND;
  const fg = tone === 'onAccent' ? BRAND : '#000000';
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border ${className}`}
      style={{
        width: 40,
        height: 40,
        minWidth: 40,
        minHeight: 40,
        borderColor: 'rgba(0,0,0,0.10)',
        backgroundColor: bg,
      }}
      aria-hidden="true"
    >
      <Icon size={size} color={fg} strokeWidth={1.8} />
    </span>
  );
}

function Stars() {
  const GOLD = '#D4AF37';
  return (
    <div className="flex items-center gap-1" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-[14px] leading-none" aria-hidden="true" style={{ color: GOLD }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function NeustartPage() {
  const ACCENT = '#FFF6A7';
  const TEXT = '#0B0B0BE6';
  const MUTED = '#0B0B0BB3';
  const BORDER = '#00000014';
  const SURFACE = '#FFFFFF';
  const SOFT = '#FFFDF5';

  const buttonClass =
    'whitespace-nowrap text-[3.4vw] sm:text-sm md:text-base text-center leading-snug rounded-full bg-black px-6 sm:px-8 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-black/90 active:scale-[0.99]';

  return (
    <>
      {/* HEADER – bewusst minimal: Logo + ein CTA, keine Navigation, keine Ablenkung */}
      <header className="border-b" style={{ backgroundColor: SURFACE, borderColor: BORDER, color: TEXT }}>
        <div className="container mx-auto flex items-center justify-between px-4 py-5 sm:px-6">
          <a href="#start" className="flex items-center gap-2 py-1">
            <img src="/logo-2.svg" alt="Optimize – Stoffwechsel-Reset Webinar" className="h-10 w-auto sm:h-12" />
          </a>
          <Button asChild className={buttonClass + ' !px-4 !py-2.5 text-xs sm:!px-6 sm:!py-3 sm:text-sm'}>
            <a href="#anmeldung">PLATZ SICHERN</a>
          </Button>
        </div>
      </header>

      {/* HERO – emotionaler Einstieg, ein Versprechen, ein CTA */}
      <section id="start" className="relative overflow-hidden" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(1000px 480px at 20% 0%, rgba(255,246,167,0.65) 0%, rgba(255,255,255,0) 60%)',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-10 pt-12 text-center sm:px-6 sm:pt-16">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
            style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: TEXT }} />
            <span>Kostenloses Webinar</span>
          </div>

          <h1 className="text-[2rem] font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Deutlich mehr Energie im Alltag durch{' '}
            <span className="underline decoration-[4px] underline-offset-4" style={{ textDecorationColor: `${ACCENT}cc` }}>
              Leberfasten
            </span>
            .
            <span className="block">Deine kostenlose Anleitung im Webinar.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
            Im kostenlosen Leberfasten-Webinar zeigen wir dir in 30 Minuten, wie du deinen Stoffwechsel zurücksetzt –
            für spürbar mehr Energie, ohne Diät, ohne Verzicht, ohne Druck.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Button asChild className={buttonClass}>
              <a href="#anmeldung">JA, ICH WILL MEINEN NEUSTART</a>
            </Button>
            <p className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: MUTED }}>
              <IconBadge icon={BadgeCheck} size={14} className="!h-6 !w-6 !min-h-6 !min-w-6" />
              100% kostenlos · Kein Risiko · Jederzeit abmeldbar
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-2xl">
            <div className="relative aspect-[5/4] overflow-hidden border shadow-[0_24px_70px_rgba(0,0,0,0.14)] sm:aspect-video" style={{ borderColor: BORDER }}>
              <img src="/optimize6.jpg" alt="Stoffwechsel-Reset – dein Neustart" className="h-full w-full object-cover" />
            </div>
            <div
              className="pointer-events-none absolute -right-3 bottom-4 flex rotate-3 items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold shadow-md sm:text-[13px]"
              style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
            >
              <IconBadge icon={Sparkles} tone="onAccent" className="h-[32px] w-[32px]" size={16} />
              <span>Dein Reset beginnt heute</span>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONALE BRÜCKE – kurz, ohne Kartenraster */}
      <section className="section" style={{ backgroundColor: SOFT, color: TEXT }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg leading-relaxed sm:text-xl" style={{ color: TEXT }}>
              Müde am Morgen. Schwer nach dem Essen. Kilos, die einfach bleiben – egal wie sehr du dich anstrengst.
            </p>
            <p className="mt-4 text-lg font-semibold leading-relaxed sm:text-xl" style={{ color: TEXT }}>
              Das ist keine Frage von Disziplin. Das ist deine Leber, die um Entlastung bittet.
            </p>
          </div>
        </div>
      </section>

      {/* WERTEVERSPRECHEN – zugespitzt, 4 knappe Punkte statt lange Erklärtexte */}
      <section id="versprechen" className="section" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#0B0B0B99' }}>
              Unser Versprechen an dich
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              In 30 Minuten weißt du genau, was dein Körper braucht.
            </h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              { icon: Zap, text: 'Warum du dich schwer und energielos fühlst – und was wirklich dahintersteckt.' },
              { icon: HeartHandshake, text: 'Wie Leberfasten deinen Stoffwechsel entlastet, ohne Verzicht oder Crash-Diät.' },
              { icon: Sparkles, text: 'Ein klarer Plan für die ersten Schritte – alltagstauglich, ohne Überforderung.' },
              { icon: BadgeCheck, text: 'Ehrliche Antworten: für wen es passt – und für wen (noch) nicht.' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border p-5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
                style={{ borderColor: BORDER, backgroundColor: SURFACE }}
              >
                <IconBadge icon={item.icon} />
                <p className="text-sm leading-relaxed sm:text-base" style={{ color: TEXT }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild className={buttonClass}>
              <a href="#anmeldung">JETZT KOSTENLOS ANMELDEN</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FUTURE PACING – kurz und bildhaft */}
      <section className="relative aspect-square overflow-hidden sm:aspect-auto" style={{ color: '#fff', backgroundColor: '#000' }}>
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: "url('/shop-slider.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(0,0,0,0.62)' }} aria-hidden="true" />
        <div className="relative z-10 flex h-full items-center justify-center py-16 sm:h-auto sm:py-20 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Stell dir vor, wie es sich anfühlt,{' '}
                <span className="underline decoration-[4px] underline-offset-4" style={{ textDecorationColor: `${ACCENT}cc` }}>
                  wieder leicht aufzustehen.
                </span>
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Kein Nachmittagstief. Kein Aufgeblähtsein am Abend. Nur ein Körper, der wieder mit dir arbeitet – statt gegen dich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EIN STARKES TESTIMONIAL statt Karussell – kürzer, genauso glaubwürdig */}
      <section className="section" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div className="container">
          <div
            className="mx-auto max-w-2xl border p-6 text-center shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-8"
            style={{ borderColor: BORDER, backgroundColor: SOFT }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="h-14 w-14 overflow-hidden rounded-full border bg-white" style={{ borderColor: BORDER }}>
                <img src="/GOOPTI20009-Website-Startseite-Zitate-Kreise-Tina-Ramsau.jpg" alt="Tina" className="h-full w-full object-cover" />
              </div>
              <Stars />
            </div>
            <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: TEXT }}>
              „Neben dem Luxus regelmäßiger Auszeiten gönne ich mir zweimal im Jahr go Optimize Leberfasten, um meinen
              Stoffwechsel gezielt zu entlasten und meine Gesundheit zu stärken.“
            </p>
            <p className="mt-3 text-sm font-semibold" style={{ color: MUTED }}>
              — Tina
            </p>
          </div>
        </div>
      </section>

      {/* ANMELDUNG – zentrales, einziges Ziel der Seite */}
      <section id="anmeldung" className="section scroll-mt-24" style={{ backgroundColor: SOFT, color: TEXT }}>
        <div className="container">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: '#0B0B0B99' }}>
              Kostenloses Webinar
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">Sichere dir jetzt deinen Platz</h2>
            <p className="mt-2 text-sm sm:text-base" style={{ color: MUTED }}>
              Unser Leberfasten-Webinar ist eine kostenlose Anleitung für deinen Reset.
            </p>

            <div className="mt-6 flex justify-center">
              <div
                className="relative w-full overflow-hidden border bg-white px-4 py-6 text-left shadow-[0_16px_50px_rgba(0,0,0,0.08)] sm:px-6 sm:py-7"
                style={{ borderColor: BORDER }}
              >
                <WebinarJamEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINI-FAQ – nur die 3 wichtigsten Einwände, statt vollständiger Liste */}
      <section className="section bg-white" style={{ color: TEXT }}>
        <div className="container">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">Fragen & Antworten</h2>

          <div className="mx-auto mt-7 max-w-2xl space-y-3">
            {[
              [
                'Ist das medizinische Beratung?',
                'Nein. Die Inhalte sind informativ. Bei Erkrankungen oder Medikamenten sprich bitte vorher mit deiner Ärztin oder deinem Arzt.',
              ],
              [
                'Muss ich dafür extrem verzichten?',
                'Nein. Es geht um Entlastung und Struktur – nicht um Crash-Diät oder Dauerverzicht.',
              ],
              [
                'Was, wenn ich live nicht dabei sein kann?',
                'Du bekommst nach der Anmeldung alle Infos zum Ablauf und zu deinen Optionen direkt zugeschickt.',
              ],
            ].map(([q, a], idx) => (
              <details key={idx} className="group border bg-white p-4 open:shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:p-5" style={{ borderColor: BORDER }}>
                <summary className="cursor-pointer list-none text-center text-sm font-semibold tracking-tight sm:text-base" style={{ color: TEXT }}>
                  {q}
                </summary>
                <p className="mt-2 text-center text-sm leading-relaxed" style={{ color: MUTED }}>
                  {a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild className={buttonClass}>
              <a href="#anmeldung">KOSTENLOS ANMELDEN</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
