'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { WebinarJamEmbed } from '@/components/WebinarJamEmbed';
import { BadgeCheck, Stethoscope, Users } from 'lucide-react';

/**
 * VARIANTE „NEUSTART – SOCIAL-PROOF-WINKEL"
 * ------------------------------------------------------------
 * Werbepsychologie: Konsens-/Autoritätsprinzip (Cialdini) kombiniert –
 * "500+ Ärzte empfehlen" wirkt sowohl als Autoritäts- als auch als
 * Bandwagon-Signal. Mehrere echte Testimonials statt eines einzelnen
 * erhöhen die wahrgenommene Beweislast (Konsens).
 * WICHTIG: Die Aussage „500+ Ärzte in Österreich empfehlen" muss vor
 * Schaltung durch belegbare Fakten gedeckt sein (siehe Hinweis im Chat).
 * Eigenständige Route (/neustart-socialproof).
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

type Testimonial = { quote: string; name: string; image: string };

export default function NeustartSocialProofPage() {
  const ACCENT = '#FFF6A7';
  const TEXT = '#0B0B0BE6';
  const MUTED = '#0B0B0BB3';
  const BORDER = '#00000014';
  const SURFACE = '#FFFFFF';
  const SOFT = '#FFFDF5';

  const buttonClass =
    'whitespace-nowrap text-[3.4vw] sm:text-sm md:text-base text-center leading-snug rounded-full bg-black px-6 sm:px-8 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-black/90 active:scale-[0.99]';

  const testimonials: Testimonial[] = [
    {
      image: '/GOOPTI20009-Website-Startseite-Zitate-Kreise-Tina-Ramsau.jpg',
      quote:
        'Neben dem Luxus regelmäßiger Auszeiten gönne ich mir zweimal im Jahr go Optimize Leberfasten, um meinen Stoffwechsel gezielt zu entlasten und meine Gesundheit zu stärken.',
      name: 'Tina',
    },
    {
      image: '/GOOPTI20009-Website-Startseite-Zitate-Kreise-Bernd-Graz.jpg',
      quote:
        'Ich habe mit Optimize Weight Control schon über 15 kg abgenommen und es geht mir sehr gut. Alle Mahlzeiten schmecken lecker und lassen sich super einfach in meinen Alltag einbauen.',
      name: 'Bernd',
    },
    {
      image: '/thispersondoesnotexist.com-2.jpeg',
      quote:
        'Ruhig, sachlich und trotzdem motivierend. Ich habe mich abgeholt gefühlt – nicht bewertet. Die Inhalte waren alltagstauglich und genau richtig dosiert.',
      name: 'Paul',
    },
  ];

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

      {/* HERO – Konsens + Autorität als erstes Signal, noch vor der Headline */}
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
            Entdecke das Leberfasten-System,
            <span className="block">
              das{' '}
              <span className="underline decoration-[4px] underline-offset-4" style={{ textDecorationColor: `${ACCENT}cc` }}>
                500+ Ärzte in Österreich
              </span>{' '}
              empfehlen.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
            In 60 Minuten erfährst du, worauf dieses Vertrauen basiert – und wie der Stoffwechsel-Reset auch bei
            dir ansetzen kann.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Button asChild className={buttonClass}>
              <a href="#anmeldung">JETZT KOSTENLOS ENTDECKEN</a>
            </Button>
            <p className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: MUTED }}>
              <IconBadge icon={BadgeCheck} size={14} className="!h-6 !w-6 !min-h-6 !min-w-6" />
              100% kostenlos · Kein Risiko · Jederzeit abmeldbar
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-2xl">
            <div className="relative aspect-[5/4] overflow-hidden border shadow-[0_24px_70px_rgba(0,0,0,0.14)] sm:aspect-video" style={{ borderColor: BORDER }}>
              <img src="/optimize8.jpg" alt="Leberfasten-System, empfohlen von Ärzt:innen" className="h-full w-full object-cover" />
            </div>
            <div
              className="pointer-events-none absolute -right-3 bottom-4 flex rotate-3 items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold shadow-md sm:text-[13px]"
              style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
            >
              <IconBadge icon={Users} tone="onAccent" className="h-[32px] w-[32px]" size={16} />
              <span>Tausende Teilnehmer:innen</span>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONALE BRÜCKE – Konsens als Beruhigung: "du bist nicht die erste, die zweifelt" */}
      <section className="section" style={{ backgroundColor: SOFT, color: TEXT }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg leading-relaxed sm:text-xl" style={{ color: TEXT }}>
              Du hast schon einiges probiert. Vielleicht bist du deshalb vorsichtig geworden – zurecht.
            </p>
            <p className="mt-4 text-lg font-semibold leading-relaxed sm:text-xl" style={{ color: TEXT }}>
              Deshalb geht es hier nicht um ein Versprechen von uns, sondern um das, was viele Ärzt:innen und
              Teilnehmer:innen bereits bestätigen.
            </p>
          </div>
        </div>
      </section>

      {/* WERTEVERSPRECHEN – konsens-gerahmt: "das bestätigen auch..." */}
      <section id="versprechen" className="section" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#0B0B0B99' }}>
              Das bestätigen Ärzt:innen & Teilnehmer:innen
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Deshalb wird dieses System so oft weiterempfohlen.
            </h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              { icon: Stethoscope, text: 'Ein Ansatz, der auf nachvollziehbaren Zusammenhängen rund um Leber & Stoffwechsel basiert.' },
              { icon: Users, text: 'Tausende Teilnehmer:innen haben den Reset bereits durchlaufen – mit echten Erfahrungsberichten.' },
              { icon: BadgeCheck, text: 'Keine Crash-Diät, kein Dauerverzicht – ein strukturierter, alltagstauglicher Ablauf.' },
              { icon: BadgeCheck, text: 'Ehrliche Einordnung im Webinar: für wen es passt – und für wen (noch) nicht.' },
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

      {/* SOCIAL PROOF BAND – mehrere Stimmen statt einer einzelnen, für höhere Beweislast */}
      <section className="section" style={{ backgroundColor: SOFT, color: TEXT }}>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#0B0B0B99' }}>
              Begeisterte Teilnehmer:innen
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Das sagen Menschen, die den Reset schon gemacht haben
            </h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col border bg-white p-5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
                style={{ borderColor: BORDER }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 overflow-hidden rounded-full border bg-white" style={{ borderColor: BORDER }}>
                    <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: TEXT }}>
                      {t.name}
                    </p>
                    <Stars />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                  „{t.quote}“
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANMELDUNG */}
      <section id="anmeldung" className="section scroll-mt-24" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div className="container">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: '#0B0B0B99' }}>
              Kostenloses Webinar
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">Schließ dich Tausenden an</h2>
            <p className="mt-2 text-sm sm:text-base" style={{ color: MUTED }}>
              Wenige Plätze pro Termin – für einen persönlichen, fokussierten Rahmen.
            </p>

            <div className="mt-6 flex justify-center">
              <div
                className="relative w-full overflow-hidden border bg-white px-4 py-6 text-left shadow-[0_16px_50px_rgba(0,0,0,0.08)] sm:px-6 sm:py-7"
                style={{ borderColor: BORDER, backgroundColor: SOFT }}
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
                'Ist das wirklich von Ärzt:innen empfohlen?',
                'Ja – das Leberfasten-System wird von zahlreichen Ärzt:innen in Österreich empfohlen. Im Webinar ordnen wir den Hintergrund dazu ein.',
              ],
              [
                'Ist das medizinische Beratung?',
                'Nein. Die Inhalte sind informativ. Bei Erkrankungen oder Medikamenten sprich bitte vorher mit deiner Ärztin oder deinem Arzt.',
              ],
              [
                'Was, wenn ich unsicher bin, ob das zu mir passt?',
                'Das Webinar ist unverbindlich und kostenlos – du hörst dir alles in Ruhe an und entscheidest danach selbst.',
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
