'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { WebinarJamEmbed } from '@/components/WebinarJamEmbed';
import { BadgeCheck, BookOpenCheck, FlaskConical, ListChecks } from 'lucide-react';

/**
 * VARIANTE „NEUSTART – WISSENSCHAFTS-WINKEL"
 * ------------------------------------------------------------
 * Werbepsychologie: Autoritätsprinzip (Cialdini) + „Reason-why"-Copy
 * (Claude Hopkins) – wir erklären den Mechanismus (Leber → Stoffwechsel),
 * weil Verstehen selbst emotional wirkt: es reduziert Unsicherheit und
 * gibt das Gefühl von Kontrolle. Bewusst keine erfundenen Studien/Zahlen –
 * Autorität entsteht hier durch nachvollziehbare Erklärung, nicht durch
 * Behauptung. Eigenständige Route (/neustart-wissenschaft).
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

export default function NeustartWissenschaftPage() {
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
      {/* HEADER – minimal, keine Ablenkung von der Anmeldung */}
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

      {/* HERO – Autorität durch Erklärung, nicht durch Behauptung */}
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
            Warum empfehlen{' '}
            <span className="underline decoration-[4px] underline-offset-4" style={{ textDecorationColor: `${ACCENT}cc` }}>
              500+ Ärzte in Österreich
            </span>{' '}
            bereits OPTIMIZE Leberfasten?
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
            Im kostenlosen Webinar erklären wir dir, wie Leberfasten den Zusammenhang zwischen Leber und
            Stoffwechsel nutzt – nachvollziehbar, ohne Fachchinesisch, ohne leere Versprechen.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Button asChild className={buttonClass}>
              <a href="#anmeldung">JETZT VERSTEHEN, WAS DAHINTERSTECKT</a>
            </Button>
            <p className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: MUTED }}>
              <IconBadge icon={BadgeCheck} size={14} className="!h-6 !w-6 !min-h-6 !min-w-6" />
              100% kostenlos · Kein Risiko · Jederzeit abmeldbar
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-2xl">
            <div className="relative aspect-[5/4] overflow-hidden border shadow-[0_24px_70px_rgba(0,0,0,0.14)] sm:aspect-video" style={{ borderColor: BORDER }}>
              <img src="/optimize7.jpg" alt="Wie die Leber den Stoffwechsel beeinflusst" className="h-full w-full object-cover" />
            </div>
            <div
              className="pointer-events-none absolute -right-3 bottom-4 flex rotate-3 items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold shadow-md sm:text-[13px]"
              style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
            >
              <IconBadge icon={FlaskConical} tone="onAccent" className="h-[32px] w-[32px]" size={16} />
              <span>Einfach erklärt</span>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONALE BRÜCKE – Verstehen als Entlastung, nicht nur Information */}
      <section className="section" style={{ backgroundColor: SOFT, color: TEXT }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg leading-relaxed sm:text-xl" style={{ color: TEXT }}>
              Müde am Morgen. Schwer nach dem Essen. Kilos, die bleiben, egal wie sehr du dich anstrengst. Die
              meisten Erklärungen dafür sind vage – „Stress“, „Alter“, „einfach so“.
            </p>
            <p className="mt-4 text-lg font-semibold leading-relaxed sm:text-xl" style={{ color: TEXT }}>
              Es gibt einen konkreteren Zusammenhang. Und sobald du ihn verstehst, hast du wieder etwas in der Hand.
            </p>
          </div>
        </div>
      </section>

      {/* WERTEVERSPRECHEN – mechanismus-basiert statt behauptungs-basiert */}
      <section id="versprechen" className="section" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#0B0B0B99' }}>
              Was du im Webinar verstehst
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Vier Zusammenhänge, die vieles erklären.
            </h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              { icon: BookOpenCheck, text: 'Welche Rolle die Leber im Stoffwechsel spielt – einfach und nachvollziehbar erklärt.' },
              { icon: FlaskConical, text: 'Warum viele Diäten am falschen Hebel ansetzen und Symptome statt Ursache behandeln.' },
              { icon: ListChecks, text: 'Wie Leberfasten als strukturierter Reset aufgebaut ist – Schritt für Schritt.' },
              { icon: BadgeCheck, text: 'Ehrliche Einordnung: für wen der Ansatz sinnvoll ist – und wo Grenzen liegen.' },
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

      {/* FUTURE PACING – Klarheit statt Rätselraten */}
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
                Stell dir vor, du weißt genau,{' '}
                <span className="underline decoration-[4px] underline-offset-4" style={{ textDecorationColor: `${ACCENT}cc` }}>
                  warum sich dein Körper so anfühlt.
                </span>
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Kein Rätselraten mehr zwischen widersprüchlichen Diät-Trends. Nur ein klarer, nachvollziehbarer
                Zusammenhang – und ein Plan, der darauf aufbaut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL – strukturiert/rational statt rein emotional */}
      <section className="section" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div className="container">
          <div
            className="mx-auto max-w-2xl border p-6 text-center shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-8"
            style={{ borderColor: BORDER, backgroundColor: SOFT }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="h-14 w-14 overflow-hidden rounded-full border bg-white" style={{ borderColor: BORDER }}>
                <img src="/thispersondoesnotexist.com-3.jpeg" alt="Melanie" className="h-full w-full object-cover" />
              </div>
              <Stars />
            </div>
            <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: TEXT }}>
              „Kein Diät-Gelaber, sondern Struktur. Das Webinar hat mir gezeigt, dass Reset nicht Verzicht heißt.
              Besonders gut fand ich die klare Reihenfolge: erst entlasten, dann stabilisieren.“
            </p>
            <p className="mt-3 text-sm font-semibold" style={{ color: MUTED }}>
              — Melanie
            </p>
          </div>
        </div>
      </section>

      {/* ANMELDUNG */}
      <section id="anmeldung" className="section scroll-mt-24" style={{ backgroundColor: SOFT, color: TEXT }}>
        <div className="container">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: '#0B0B0B99' }}>
              Kostenloses Webinar
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">Sei jetzt mit dabei!</h2>
            <p className="mt-2 text-sm sm:text-base" style={{ color: MUTED }}>
              Du lernst das Prinzip Leberfasten kennen und verstehst, wie es funktioniert.
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

      {/* MINI-FAQ */}
      <section className="section bg-white" style={{ color: TEXT }}>
        <div className="container">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">Kurz beantwortet</h2>

          <div className="mx-auto mt-7 max-w-2xl space-y-3">
            {[
              [
                'Ist das wissenschaftlich fundiert?',
                'Wir erklären dir die physiologischen Zusammenhänge rund um Leber und Stoffwechsel verständlich und nachvollziehbar – ohne Fachchinesisch.',
              ],
              [
                'Ist das medizinische Beratung?',
                'Nein. Die Inhalte sind informativ. Bei Erkrankungen oder Medikamenten sprich bitte vorher mit deiner Ärztin oder deinem Arzt.',
              ],
              [
                'Warum reicht „einfach weniger essen" nicht?',
                'Weil der Stoffwechsel mehr ist als reine Kalorienbilanz. Die Rolle der Leber wird dabei oft übersehen – genau da setzen wir an.',
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
