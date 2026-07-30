'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { WebinarJamEmbed } from '@/components/WebinarJamEmbed';
import {
  BadgeCheck,
  ChevronDown,
  Droplets,
  Dumbbell,
  Leaf,
  ListChecks,
  Menu,
  Pin,
  Salad,
  Settings2,
  Sparkles,
  X,
} from 'lucide-react';

type IconTone = 'onDefault' | 'onAccent';

/**
 * IconBadge Regeln:
 * - Standard: Icon schwarz auf Brand-Gelb (#FFF6A7)
 * - Wenn auf einer Fläche mit Brand-Gelb liegt: Icon Brand-Gelb auf Schwarz
 * - Umrandung immer rund, fix (nicht responsiv)
 */
function IconBadge({
  icon: Icon,
  tone = 'onDefault',
  size = 18,
  className = '',
}: {
  icon: React.ElementType;
  tone?: IconTone;
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

function StepBadge({ n }: { n: number }) {
  const BRAND = '#FFF6A7';
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border text-sm font-semibold"
      style={{
        width: 40,
        height: 40,
        minWidth: 40,
        minHeight: 40,
        borderColor: 'rgba(0,0,0,0.10)',
        backgroundColor: BRAND,
        color: '#000000',
      }}
      aria-hidden="true"
    >
      {n}
    </span>
  );
}

/** Stars (gold) */
function Stars({ value = 5 }: { value?: number }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  const GOLD = '#D4AF37';
  return (
    <div className="flex items-center gap-1" aria-label={`${full} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="text-[14px] leading-none"
          aria-hidden="true"
          style={{ opacity: i < full ? 1 : 0.22, color: GOLD }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

type Review = {
  quote: string;
  name: string;
  rating?: number;
  image?: string;
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const ACCENT = '#FFF6A7';
  const TEXT = '#0B0B0BE6';
  const MUTED = '#0B0B0BB3';
  const BORDER = '#00000014';
  const SURFACE = '#FFFFFF';
  const SOFT = '#FFFDF5';
  const LIGHT_GREY = '#F4F4F4';

  const navItems = [
    { href: '#kennst-du-das', label: 'Symptome' },
    { href: '#benefits', label: 'Was du bekommst' },
    { href: '#warum', label: 'Warum Leberfasten' },
    { href: '#ablauf', label: 'So läuft’s' },
    { href: '#anmeldung', label: 'Webinar' },
  ];

  const buttonClass =
    'whitespace-nowrap text-[3vw] sm:text-sm md:text-base text-center leading-snug rounded-full bg-black px-4 sm:px-7 py-3 font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-black/90 active:scale-[0.99]';

  const reviews: Review[] = [
    {
      image: '/GOOPTI20009-Website-Startseite-Zitate-Kreise-Tina-Ramsau-2.jpg',
      quote:
        'Neben dem Luxus regelmäßiger Auszeiten zum Krafttanken gönne ich mir zweimal im Jahr go Optimize Leberfasten, um meinen Stoffwechsel gezielt zu entlasten und meine Gesundheit zu stärken.',
      name: 'Tina',
      rating: 5,
    },
    {
      image: '/GOOPTI20009-Website-Startseite-Zitate-Kreise-Bernd-Graz.jpg',
      quote:
        'Ich habe mit Optimize Weight Control schon über 15 kg abgenommen und es geht mir sehr gut. Alle go-Optimize-Mahlzeiten schmecken lecker und lassen sich super einfach in meinen Alltag einbauen.',
      name: 'Bernd',
      rating: 5,
    },
    {
      image: '/thispersondoesnotexist.com.jpeg',
      quote:
        'Sehr verständlich erklärt und ohne Druck. Ich habe zum ersten Mal wirklich verstanden, warum mein Körper sich gerade so anfühlt – und hatte danach einen klaren Plan statt Fragezeichen.',
      name: 'Sabine',
      rating: 5,
    },
    {
      image: '/thispersondoesnotexist.com-3.jpeg',
      quote:
        'Kein Diät-Gelaber, sondern Struktur. Das Webinar hat mir gezeigt, dass Reset nicht Verzicht heißt. Besonders gut fand ich die klare Reihenfolge: erst entlasten, dann stabilisieren.',
      name: 'Melanie',
      rating: 5,
    },
    {
      image: '/thispersondoesnotexist.com-2.jpeg',
      quote:
        'Ruhig, sachlich und trotzdem motivierend. Ich habe mich abgeholt gefühlt – nicht bewertet. Die Inhalte waren alltagstauglich und genau richtig dosiert.',
      name: 'Paul',
      rating: 5,
    },
    {
      image: '/thispersondoesnotexist.com-4.jpeg',
      quote:
        'Sehr wohltuend im Vergleich zu vielem, was man sonst hört. Kein Stress, keine Extreme. Ich nehme viel Klarheit mit und fühle mich sicher, die nächsten Schritte anzugehen.',
      name: 'Michi',
      rating: 5,
    },
  ];

  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const clamp = (n: number) => (n + reviews.length) % reviews.length;
  const nextReview = () => setReviewIndex((i) => clamp(i + 1));
  const prevReview = () => setReviewIndex((i) => clamp(i - 1));

  useEffect(() => {
    if (reviewsPaused) return;
    const id = window.setInterval(() => nextReview(), 6000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewsPaused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextReview();
      if (e.key === 'ArrowLeft') prevReview();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const dx = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(dx) > 40) {
      if (dx < 0) nextReview();
      else prevReview();
    }
  };

  const currentReview = reviews[reviewIndex];

  return (
    <>
      {/* HEADER – Desktop + Mobile */}
      <header className="border-b" style={{ backgroundColor: SURFACE, borderColor: BORDER, color: TEXT }}>
        {/* mehr vertikales Padding auf Mobile */}
        <div className="container mx-auto flex items-center justify-between px-4 py-7 sm:px-6 sm:py-5">
          <a href="#start" className="flex items-center gap-2 py-1">
            <img src="/logo-2.svg" alt="Optimize – Stoffwechsel-Reset Webinar" className="h-12 w-auto" />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  relative border-b-2 border-b-transparent pb-0.5
                  text-sm font-medium uppercase tracking-[0.10em]
                  transform transition-all duration-200 ease-out
                  hover:-translate-y-0.5
                  active:translate-y-0 active:scale-95
                "
                style={{ color: TEXT }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent';
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-full border px-3 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition"
            style={{ borderColor: BORDER, color: TEXT, backgroundColor: SURFACE }}
            aria-label="Menü öffnen"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} color="currentColor" /> : <Menu size={20} color="currentColor" />}
          </button>
        </div>

        <nav
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${isOpen ? 'max-h-80 py-4' : 'max-h-0 py-0'}
          `}
          style={{ backgroundColor: SURFACE }}
        >
          <div className="container mx-auto flex flex-col items-center gap-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-base font-medium uppercase tracking-[0.10em]
                  transform transition-all duration-200 ease-out
                  hover:-translate-y-0.5
                  active:translate-y-0 active:scale-95
                "
                style={{ color: TEXT }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="start" className="relative overflow-hidden" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(900px 420px at 15% 10%, rgba(255,246,167,0.55) 0%, rgba(255,255,255,0) 60%), radial-gradient(700px 360px at 90% 20%, rgba(0,0,0,0.06) 0%, rgba(255,255,255,0) 55%)',
          }}
        />

        <div className="relative mx-auto flex min-h-[420px] max-w-6xl flex-col items-center px-4 pb-10 pt-10 sm:min-h-[480px] sm:px-6 sm:pt-12">
          <div className="grid w-full items-center gap-8 md:grid-cols-[1.2fr_minmax(0,1fr)] md:gap-10">
            <div className="text-left" style={{ color: TEXT }}>
              <div
                className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
                style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: TEXT }} />
                <span>Kostenfreies Webinar</span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.4rem] md:leading-tight">
                Stoffwechsel-Reset durch Leberfasten: Mehr Energie. Weniger Schwere.
                <span className="block">
                  {' '}
                  <span
                    className="underline decoration-[4px] underline-offset-4"
                    style={{ textDecorationColor: `${ACCENT}cc` }}
                  >
                    Ein klarer Neustart für deinen Körper
                  </span>
                  .
                </span>
                <span className="mt-2 block text-lg font-normal sm:text-xl" style={{ color: MUTED }}>
                  Versteh, warum dein Körper gerade auf Sparflamme läuft - und wie Leberfasten ihn sanft zurück in den Rhythmus bringt.
                </span>
              </h1>

              {/* Text entfernt wie gewünscht */}

              {/* Button linksbündig auch auf Mobile */}
              <div className="mt-6 flex w-full flex-col items-start gap-2">
                <Button asChild className={buttonClass}>
                  <a href="#anmeldung">KOSTENLOSES WEBINAR FÜR DICH</a>
                </Button>

                {/* Subtext entfernt wie gewünscht */}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden border shadow-[0_24px_70px_rgba(0,0,0,0.12)]" style={{ borderColor: BORDER }}>
                <img src="/optimize5.jpg" alt="Stoffwechsel-Reset – Leberfasten Webinar" className="hidden h-full w-full object-cover md:block" />
                <img src="/optimize5.jpg" alt="Stoffwechsel-Reset – Leberfasten Webinar" className="block h-full w-full object-cover md:hidden" />
              </div>

              <div
                className="pointer-events-none absolute -left-3 top-6 flex rotate-[-8deg] items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] sm:text-[13px] font-medium shadow-md"
                style={{ color: TEXT, border: `1px solid ${BORDER}` }}
              >
                <IconBadge icon={BadgeCheck} tone="onDefault" className="h-[32px] w-[32px]" size={16} />
                <span>Dein Neustart.</span>
              </div>

              <div
                className="pointer-events-none absolute -right-4 bottom-5 flex rotate-3 items-center gap-2 rounded-full px-4 py-2 text-[12px] sm:text-[13px] font-semibold shadow-md"
                style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
              >
                <IconBadge icon={Sparkles} tone="onAccent" className="h-[32px] w-[32px]" size={16} />
                <span>Kostenloser Ratgeber</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="kennst-du-das" className="section relative overflow-hidden" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ backgroundColor: LIGHT_GREY }} />

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#0B0B0B99' }}>
              Kennst du das?
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: TEXT }}>
              Wenn dein Stoffwechsel langsamer wirkt als früher
            </h2>
            <p className="mt-3 text-sm sm:text-base" style={{ color: MUTED }}>
              Du bist nicht krank. Aber es fühlt sich nicht mehr an wie früher. Das sind typische Zeichen dafür, dass dein Stoffwechsel jetzt Entlastung braucht.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                img: '/optimize1.jpg',
                alt: 'Müdigkeit am Morgen',
                title: 'Du kommst schwer in den Tag',
                text: 'Du bist morgens müde, obwohl du eigentlich ausreichend Schlaf bekommst.',
              },
              {
                img: '/optimize2.jpg',
                alt: 'Tief nach dem Essen',
                title: 'Tief nach dem Essen',
                text: 'Nach Mahlzeiten fühlst du dich schnell träge und kannst kaum klar denken.',
              },
              {
                img: '/optimize3.jpg',
                alt: 'Schweregefühl',
                title: 'Schwere & Aufgeblähtsein',
                text: 'Abends fühlt sich alles voller an. Du wünschst dir wieder mehr Leichtigkeit im Körper.',
              },
              {
                img: '/optimize4.jpg',
                alt: 'Hartnäckige Kilos',
                title: 'Der Körper „hält fest“',
                text: 'Ein paar Kilo bleiben hartnäckig – auch wenn du nicht das Gefühl hast, „zu viel“ zu essen.',
              },
            ].map((c, i) => (
              <div
                key={i}
                className="overflow-hidden border bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
                style={{ borderColor: BORDER }}
              >
                {/* Bilder nicht beschneiden / nicht einschränken: Original-Seitenverhältnis */}
                <div className="relative w-full overflow-hidden">
                  <img src={c.img} alt={c.alt} className="block h-auto w-full" />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.00) 20%, rgba(0,0,0,0.18) 100%)' }}
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <IconBadge icon={Leaf} tone="onDefault" />
                    <h3 className="text-sm font-bold tracking-tight sm:text-base" style={{ color: TEXT }}>
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed sm:text-sm" style={{ color: MUTED }}>
                    {c.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-7 max-w-4xl">
            <p
              className="flex items-center justify-center gap-3 rounded-full px-4 py-3 text-sm font-medium sm:text-base shadow-[0_10px_28px_rgba(0,0,0,0.10)]"
              style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
            >
              <IconBadge icon={Sparkles} tone="onAccent" className="h-[36px] w-[36px]" size={16} />
              <span>Im Webinar lernen wir, wie Leberfasten dir zu einem Stoffwechsel-Reset hilft, für mehr Energie in jedem Moment.</span>
            </p>
          </div>
        </div>
      </section>

      {/* KEY POINT (statisch) */}
      <section className="relative overflow-hidden" style={{ color: TEXT, backgroundColor: '#000' }}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/shop-slider.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(1.05)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} aria-hidden="true" />

        {/* Mehr vertikales Padding + Mindesthöhe für Mobile */}
        <div className="container relative z-10 py-28 sm:py-32 lg:py-36 min-h-[70vh] flex items-center">
          <div className="mx-auto max-w-4xl text-center px-4 sm:px-0">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
              style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: TEXT }} />
              <span>Warum Leberfasten anders wirkt</span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: '#fff' }}>
              Du brauchst nicht einfach mehr Disziplin,
              <span className="block">
                sondern ein{' '}
                <span
                  className="underline decoration-[4px] underline-offset-4"
                  style={{ textDecorationColor: `${ACCENT}cc` }}
                >
                  einfaches System, das im Alltag funktioniert.
                </span>
                .
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.82)' }}>
        Genau das macht Leberfasten so spannend: Du entlastest den Körper, musst weniger entscheiden – und gibst ihm die Chance, wieder ins Gleichgewicht zu kommen.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="section" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#0B0B0B99' }}>
              Das lernen wir gemeinsam
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: TEXT }}>
              Ein Stoffwechsel-Reset muss im Alltag machbar sein.
            </h2>
            <p className="mt-3 text-sm sm:text-base" style={{ color: MUTED }}>
              Im Webinar lernst du kostenlos, wie Leberfasten ohne großen Aufwand durch kleine Veränderungen in jedem Alltag funktioniert.
            </p>
          </div>

          <div className="mx-auto mt-7 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Settings2,
                title: 'Stoffwechsel neu ausrichten',
                text: 'Welche Rolle die Leber spielt – und warum Entlastung häufig einen spürbaren Unterschied macht.',
              },
              {
                icon: Droplets,
                title: 'Leber entlasten',
                text: 'Wie Leberfasten im Kontext „Leberfett & Trägheit“ eingeordnet wird – ohne Drama, ohne Überforderung.',
              },
              {
                icon: Dumbbell,
                title: 'Substanz erhalten',
                text: 'Worauf du achtest, damit Reset nicht heißt: Muskelmasse verlieren oder dich schlapp fühlen.',
              },
              {
                icon: Salad,
                title: 'Einfach im Alltag',
                text: 'Struktur statt Regeln: Was du wann machst – und was du dir wirklich sparen kannst.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col border p-5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
                style={{ borderColor: BORDER, backgroundColor: SURFACE }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <IconBadge icon={item.icon} tone="onDefault" />
                  <h3 className="text-sm font-bold tracking-tight sm:text-base" style={{ color: TEXT }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed sm:text-sm" style={{ color: MUTED }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 text-center">
            <p className="text-sm font-medium sm:text-base" style={{ color: TEXT }}>
              Klingt nach dir? Dann lade ich dich herzlich zum kostenlosen Webinar ein.
            </p>
            <Button asChild className={buttonClass}>
              <a href="#anmeldung">KOSTENLOS ANMELDEN</a>
            </Button>
            
          </div>
        </div>
      </section>

      {/* WARUM */}
      <section id="warum" className="section" style={{ backgroundColor: SOFT, color: TEXT }}>
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
            <div className="relative order-2 md:order-1">
              <div className="relative overflow-hidden border shadow-[0_24px_70px_rgba(0,0,0,0.10)]" style={{ borderColor: BORDER }}>
                <img src="/optimize7.jpg" alt="Warum Leberfasten" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#0B0B0B99' }}>
                Warum Leberfasten?
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: TEXT }}>
               Wie die Leber deinen Stoffwechsel beeinflusst
              </h2>
              <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: MUTED }}>
               Die Leber steuert zentrale Stoffwechselprozesse. Ist sie überlastet, spüren viele das als Müdigkeit, Schwere oder fehlende Energie.
              </p>
              <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: MUTED }}>
               Leberfasten wird genutzt, um genau hier anzusetzen: Entlasten. Struktur schaffen. Prozesse wieder sortieren – ohne Crash-Diät, ohne Dauerverzicht.
              </p>

              <p
                className="mt-4 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-relaxed sm:text-base"
                style={{ backgroundColor: ACCENT, color: TEXT, borderColor: BORDER }}
              >
                <IconBadge icon={ListChecks} tone="onAccent" className="mt-0.5" size={16} />
                <span>
                  Im Webinar bekommst du eine einfache Anleitung: <strong>Was musst du beachten</strong> und wie <strong>maximierst du die Ergebnisse.</strong>
                </span>
              </p>

            
            </div>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section id="ablauf" className="section" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#0B0B0B99' }}>
                So läuft’s
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: TEXT }}>
                In 3 Schritten zum Reset-Start
              </h2>

              <ul className="mt-4 space-y-3 text-sm sm:text-base" style={{ color: TEXT }}>
                <li className="flex gap-3">
                  <StepBadge n={1} />
                  <span>
                    <strong>Anmelden</strong> und deinen Webinar-Platz sichern.
                  </span>
                </li>
                <li className="flex gap-3">
                  <StepBadge n={2} />
                  <span>
                    <strong>Live</strong> verstehen, wie Leberfasten als Stoffwechsel-Reset aufgebaut ist (ohne komplizierte Theorie).
                  </span>
                </li>
                <li className="flex gap-3">
                  <StepBadge n={3} />
                  <span>
                    Mit einem <strong>klaren</strong> Plan rausgehen: nächste Schritte, typische Fehler vermeiden, alltagstauglich starten.
                  </span>
                </li>
                <li className="flex gap-3">
                  <IconBadge icon={BadgeCheck} tone="onDefault" />
                  <span>Konkrete Empfehlungen, welche Produkte sinnvoll sind und wo es aufzupassen gilt.</span>
                </li>
              </ul>

              <div className="mt-5">
                <Button asChild className={buttonClass}>
                  <a href="#anmeldung">PLATZ SICHERN</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden border shadow-[0_24px_70px_rgba(0,0,0,0.08)]" style={{ borderColor: BORDER }}>
                <img src="/optimize8.jpg" alt="Leberfasten – Alltagstauglich" className="h-full w-full object-cover" />
              </div>
              <div
                className="pointer-events-none absolute -right-2 bottom-4 flex rotate-[-4deg] items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] sm:text-[13px] font-medium shadow-md"
                style={{ color: TEXT, border: `1px solid ${BORDER}` }}
              >
                <IconBadge icon={Pin} tone="onDefault" className="h-[32px] w-[32px]" size={16} />
                <span>Klarer Fahrplan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE PACING */}
      <section className="section bg-white pt-16 pb-40 sm:pt-20 sm:pb-24" style={{ color: TEXT }}>
        <div className="container">
          <div className="mx-auto text-center">
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: TEXT }}>
              <span className="underline decoration-[4px] underline-offset-4" style={{ textDecorationColor: `${ACCENT}cc` }}>
                Stell dir vor …
              </span>
            </h2>
            <div className="mt-5 space-y-3 text-sm leading-relaxed sm:text-base" style={{ color: MUTED }}>
              <p>… du startest morgens leichter in den Tag.</p>
              <p>… du fühlst dich nach dem Essen klarer, wacher und stabiler.</p>
              <p>… du bist endlich wieder in Kontrolle über deinen Körper & Stoffwechsel.</p>
            </div>
            <p className="mt-4 text-sm font-medium sm:text-base" style={{ color: TEXT }}>
              Leberfasten ermöglicht dir, sanft zurück in deinen Rhythmus zu finden.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild className={buttonClass}>
                <a href="#anmeldung" className="inline-flex items-center gap-2">
                  <span>WEBINAR-PLATZ SICHERN</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ANMELDUNG */}
      <section id="anmeldung" className="section relative scroll-mt-28 pt-32 sm:pt-24" style={{ backgroundColor: SOFT, color: TEXT }}>
        <img
          src="/arrow.png"
          alt=""
          className="pointer-events-none absolute left-1/2 top-0 z-30 h-14 w-auto -translate-x-1/2 -translate-y-1/2 sm:h-16 md:h-20"
        />

        <div className="container">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-4 text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: '#0B0B0B99' }}>
                Kostenloses Webinar
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: TEXT }}>
                Jetzt kostenlos anmelden
              </h2>
              <p className="mt-2 text-xs sm:text-sm" style={{ color: MUTED }}>
                Du bekommst eine klare, leicht verständliche Anleitung, wie der Stoffwechsel-Reset am besten gelingt.
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <div
                className="relative w-full max-w-xl overflow-hidden border bg-white px-4 py-6 text-left shadow-[0_16px_50px_rgba(0,0,0,0.08)] sm:px-6 sm:py-7"
                style={{ borderColor: BORDER }}
              >
                <div className="mt-3 flex justify-center">
                  <div className="w-full max-w-md">
                    <WebinarJamEmbed />
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" style={{ backgroundColor: SURFACE, color: TEXT }}>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#0B0B0B99' }}>
              Begeisterte Teilnehmer
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: TEXT }}>
              Das mögen Teilnehmer:innen am Stoffwechsel-Reset
            </h2>
           
          </div>

          <div className="mt-8">
            <div
              className="relative overflow-hidden border shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
              style={{ borderColor: BORDER, backgroundColor: SOFT }}
              onMouseEnter={() => setReviewsPaused(true)}
              onMouseLeave={() => setReviewsPaused(false)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-12"
                style={{
                  background: `linear-gradient(90deg, ${SOFT} 0%, rgba(255,255,255,0) 100%)`,
                  opacity: 0.9,
                }}
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-12"
                style={{
                  background: `linear-gradient(270deg, ${SOFT} 0%, rgba(255,255,255,0) 100%)`,
                  opacity: 0.9,
                }}
              />

              <div key={reviewIndex} className="p-6 sm:p-8 md:p-10" style={{ animation: 'reviewIn 420ms ease-out both' }}>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full border bg-white" style={{ borderColor: BORDER }} aria-hidden="true">
                      {currentReview.image ? (
                        <img src={currentReview.image} alt="" className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs font-semibold" style={{ color: MUTED }}>
                          {currentReview.name?.trim()?.charAt(0) ?? '•'}
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-semibold sm:text-base" style={{ color: TEXT }}>
                        {currentReview.name}
                      </p>
                      <div className="mt-1">
                        <Stars value={currentReview.rating ?? 5} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 md:justify-end">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={prevReview}
                        className="rounded-full border px-3 py-2 text-xs font-semibold transition hover:opacity-80 active:scale-[0.99]"
                        style={{ borderColor: BORDER, color: TEXT, backgroundColor: 'transparent' }}
                        aria-label="Vorherige Bewertung"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={nextReview}
                        className="rounded-full border px-3 py-2 text-xs font-semibold transition hover:opacity-80 active:scale-[0.99]"
                        style={{ borderColor: BORDER, color: TEXT, backgroundColor: 'transparent' }}
                        aria-label="Nächste Bewertung"
                      >
                        →
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      {reviews.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setReviewIndex(i)}
                          className="h-2.5 w-2.5 rounded-full transition"
                          aria-label={`Zu Bewertung ${i + 1}`}
                          style={{ backgroundColor: TEXT, opacity: i === reviewIndex ? 1 : 0.18 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed sm:text-[15px] md:text-base" style={{ color: MUTED }}>
                  “{currentReview.quote}”
                </p>

                <style>{`
                  @keyframes reviewIn {
                    from { opacity: 0; transform: translateX(10px); }
                    to   { opacity: 1; transform: translateX(0); }
                  }
                `}</style>
              </div>
            </div>
          </div>

          <div className="mt-9 flex justify-center">
            <Button asChild className={buttonClass}>
              <a href="#anmeldung">ZUM WEBINAR</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" style={{ color: TEXT }}>
        <div className="container">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: TEXT }}>
            FAQ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm sm:text-base" style={{ color: MUTED }}>
            Kurz &amp; klar, damit du dich sicher fühlst.
          </p>

          <div className="mx-auto mt-7 max-w-5xl space-y-3">
            {[
              [
                'Geht es beim Leberfasten um Abnehmen?',
                'Der Fokus ist Reset und Entlastung. Gewicht kann sich verändern (oft 2–5 kg), muss aber nicht das Ziel sein.',
              ],
              [
                'Ist Leberfasten „hart“ oder kompliziert?',
                'Es ist eher ein strukturierter Reset: klare Abläufe, wenig Entscheidungen, gut integrierbar. Wie es sich anfühlt, ist individuell.',
              ],
              ['Ist das medizinische Beratung?', 'Nein. Die Inhalte sind informativ. Bei Erkrankungen/Medikamenten bitte ärztlich abklären.'],
              [
                'Für wen ist das Webinar besonders passend?',
                'Wenn du dich müde, träge, „schwer“ fühlst, nach dem Essen oft ein Tief hast und präventiv gegensteuern willst.',
              ],
              [
                'Was passiert nach dem Webinar?',
                'Du hast konkrete nächste Schritte. Optional gibt es einen Ausblick auf eine strukturierte Umsetzung – du entscheidest in Ruhe.',
              ],
            ].map(([q, a], idx) => (
              <details
                key={idx}
                className="group border bg-white p-4 open:shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:p-5"
                style={{ borderColor: BORDER }}
              >
                <summary className="cursor-pointer list-none text-sm font-semibold tracking-tight sm:text-base" style={{ color: TEXT }}>
                  {q}
                  <span className="float-right inline-flex items-center transition group-open:rotate-180" style={{ color: '#0B0B0B99' }}>
                    <ChevronDown size={18} />
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                  {a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-7 flex justify-center">
            <Button asChild className={buttonClass}>
              <a href="#anmeldung">KOSTENLOS ANMELDEN</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
