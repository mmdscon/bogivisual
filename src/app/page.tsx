"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Quiz from "@/app/components/quiz";
import {
  ArrowLeft,
  ArrowRight,
  Gem,
  Layers,
  Camera,
  ChevronDown,
  Heart,
  X,
  MousePointerClick,
} from "lucide-react";

export default function Page() {
  const quizRef = useRef<HTMLElement | null>(null);

  const heroImages = useMemo(
    () => [
      { src: "/immobilien-visualisierung-rendering-01.webp", alt: "3D Immobilien Visualisierung – Rendering 01 | BogiVisual" },
      { src: "/immobilien-visualisierung-rendering-02.webp", alt: "3D Immobilien Visualisierung – Rendering 02 | BogiVisual" },
      { src: "/immobilien-visualisierung-rendering-03.webp", alt: "3D Immobilien Visualisierung – Rendering 03 | BogiVisual" },
      { src: "/immobilien-visualisierung-rendering-04.webp", alt: "3D Immobilien Visualisierung – Rendering 04 | BogiVisual" },
    ],
    []
  );

  const benefitSlides = useMemo(
    () => [
      {
        title: "Emotion schlägt Erklärung",
        text: "Kaufentscheidungen werden visuell und emotional getroffen. Realistische Renderings schaffen sofortes Vertrauen und Begehrlichkeit.",
        icon: Heart,
        img: { src: "/immobilien-visualisierung-vorteil-emotion.webp", alt: "Emotion als Kaufentscheidung – 3D Immobilien Visualisierung" },
      },
      {
        title: "Höhere Wahrnehmung von Qualität",
        text: "Eine hochwertige Visualisierung positioniert Ihre Immobilie automatisch im Premium-Segment – noch bevor sie real existiert.",
        icon: Gem,
        img: { src: "/immobilien-visualisierung-vorteil-premium.webp", alt: "Premium-Qualität durch hochwertige Immobilien Visualisierung" },
      },
      {
        title: "Schnellere Vermarktung",
        text: "Klare Bilder sorgen für Klarheit, reduzieren Rückfragen und beschleunigen Entscheidungsprozesse.",
        icon: Layers,
        img: { src: "/immobilien-visualisierung-vorteil-geschwindigkeit.webp", alt: "Schnellere Vermarktung mit 3D Immobilien Renderings" },
      },
      {
        title: "Perfekt für Marketing & Vertrieb",
        text: "Ideal für Exposés, Websites, Social Media, Präsentationen und Investorenunterlagen.",
        icon: Camera,
        img: { src: "/immobilien-visualisierung-vorteil-marketing.webp", alt: "Immobilien Marketing mit professionellen 3D Visualisierungen" },
      },
    ],
    []
  );

  const processSteps = useMemo(
    () => [
      {
        nr: "01",
        title: "Verständnis & Konzept",
        text: "Wir analysieren Projekt, Architektur, Lage und Zielgruppe. Auf dieser Basis entwickeln wir eine klare Bildsprache, die den Charakter der Immobilie präzise übersetzt und emotional anspricht.",
      },
      {
        nr: "02",
        title: "Visualisierung mit Präzision",
        text: "Licht, Materialien, Proportionen und Atmosphäre werden detailgenau ausgearbeitet. Jede Perspektive ist darauf ausgelegt, Raumqualität, Nutzungspotenzial und Wertigkeit überzeugend darzustellen.",
      },
      {
        nr: "03",
        title: "Finale Übergabe",
        text: "Sie erhalten hochauflösende Visualisierungen, konsistent im Stil und sofort einsetzbar für Exposés, Online-Marketing und Präsentationen. Die Ergebnisse sind technisch optimiert und klar auf Ihre Vermarktungsziele abgestimmt.",
      },
    ],
    []
  );

  const workImages = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        src: `/immobilien-rendering-portfolio-${String(i + 1).padStart(2, '0')}.webp`,
        alt: `3D Immobilien Rendering Portfolio – Projekt ${i + 1} | BogiVisual`,
      })),
    []
  );

  const caseSlides = useMemo(
    () => [
      {
        id: "case-1",
        primary: { src: "/immobilien-3d-rendering-fallstudie-01.webp", alt: "3D Rendering Fallstudie 1 – Immobilien Visualisierung" },
        secondary: [
          { src: "/immobilien-3d-rendering-fallstudie-01a.webp", alt: "Detailansicht Fallstudie 1 – 3D Immobilien Rendering A" },
          { src: "/immobilien-3d-rendering-fallstudie-01b.webp", alt: "Detailansicht Fallstudie 1 – 3D Immobilien Rendering B" },
          { src: "/immobilien-3d-rendering-fallstudie-01c.webp", alt: "Detailansicht Fallstudie 1 – 3D Immobilien Rendering C" },
        ],
        meta: {
          project: "Projektbeschreibung",
          projectText:
            "Kurzbeschreibung des Projekts (Lage, Zielgruppe, Tonalität, Stil).",
          situation: "Ist-Situation",
          situationText:
            "Ausgangslage, Herausforderungen, Informationsstand (Pläne, Materialien, Constraints).",
          result: "Erstellte Visualisierung",
          resultText:
            "Welche Motive/Ansichten entstanden sind und welche Wirkung damit erzielt wird (Premium, Vertrauen, Verkauf/Marketing).",
        },
      },
      {
        id: "case-2",
        primary: { src: "/immobilien-3d-rendering-fallstudie-02.webp", alt: "3D Rendering Fallstudie 2 – Immobilien Visualisierung" },
        secondary: [
          { src: "/immobilien-3d-rendering-fallstudie-02a.webp", alt: "Detailansicht Fallstudie 2 – 3D Immobilien Rendering A" },
          { src: "/immobilien-3d-rendering-fallstudie-02b.webp", alt: "Detailansicht Fallstudie 2 – 3D Immobilien Rendering B" },
          { src: "/immobilien-3d-rendering-fallstudie-02c.webp", alt: "Detailansicht Fallstudie 2 – 3D Immobilien Rendering C" },
        ],
        meta: {
          project: "Projektbeschreibung",
          projectText:
            "Kurzbeschreibung des Projekts (Lage, Zielgruppe, Tonalität, Stil).",
          situation: "Ist-Situation",
          situationText:
            "Ausgangslage, Herausforderungen, Informationsstand (Pläne, Materialien, Constraints).",
          result: "Erstellte Visualisierung",
          resultText:
            "Welche Motive/Ansichten entstanden sind und welche Wirkung damit erzielt wird (Premium, Vertrauen, Verkauf/Marketing).",
        },
      },
      {
        id: "case-3",
        primary: { src: "/immobilien-3d-rendering-fallstudie-03.webp", alt: "3D Rendering Fallstudie 3 – Immobilien Visualisierung" },
        secondary: [
          { src: "/immobilien-3d-rendering-fallstudie-03a.webp", alt: "Detailansicht Fallstudie 3 – 3D Immobilien Rendering A" },
          { src: "/immobilien-3d-rendering-fallstudie-03b.webp", alt: "Detailansicht Fallstudie 3 – 3D Immobilien Rendering B" },
          { src: "/immobilien-3d-rendering-fallstudie-03c.webp", alt: "Detailansicht Fallstudie 3 – 3D Immobilien Rendering C" },
        ],
        meta: {
          project: "Projektbeschreibung",
          projectText:
            "Kurzbeschreibung des Projekts (Lage, Zielgruppe, Tonalität, Stil).",
          situation: "Ist-Situation",
          situationText:
            "Ausgangslage, Herausforderungen, Informationsstand (Pläne, Materialien, Constraints).",
          result: "Erstellte Visualisierung",
          resultText:
            "Welche Motive/Ansichten entstanden sind und welche Wirkung damit erzielt wird (Premium, Vertrauen, Verkauf/Marketing).",
        },
      },
    ],
    []
  );

  const beforeAfterItems = useMemo(
    () => [
      {
        before: "/immobilien-visualisierung-vorher-01.webp",
        after: "/immobilien-visualisierung-nachher-01.webp",
        alt: "Immobilien 3D Visualisierung: Vorher-Nachher Vergleich 1",
      },
      {
        before: "/immobilien-visualisierung-vorher-02.webp",
        after: "/immobilien-visualisierung-nachher-02.webp",
        alt: "Immobilien 3D Visualisierung: Vorher-Nachher Vergleich 2",
      },
      {
        before: "/immobilien-visualisierung-vorher-03.webp",
        after: "/immobilien-visualisierung-nachher-03.webp",
        alt: "Immobilien 3D Visualisierung: Vorher-Nachher Vergleich 3",
      },
    ],
    []
  );

  const partnerLogos = useMemo(
    () => [
      { src: "/bogivisual-referenz-partner-01.webp", alt: "Referenz Partner 1 – BogiVisual Immobilien Visualisierung" },
      { src: "/bogivisual-referenz-partner-02.webp", alt: "Referenz Partner 2 – BogiVisual Immobilien Visualisierung" },
      { src: "/bogivisual-referenz-partner-03.webp", alt: "Referenz Partner 3 – BogiVisual Immobilien Visualisierung" },
      { src: "/bogivisual-referenz-partner-04.webp", alt: "Referenz Partner 4 – BogiVisual Immobilien Visualisierung" },
      { src: "/bogivisual-referenz-partner-05.webp", alt: "Referenz Partner 5 – BogiVisual Immobilien Visualisierung" },
      { src: "/bogivisual-referenz-partner-06.webp", alt: "Referenz Partner 6 – BogiVisual Immobilien Visualisierung" },
      { src: "/bogivisual-referenz-partner-07.webp", alt: "Referenz Partner 7 – BogiVisual Immobilien Visualisierung" },
      { src: "/bogivisual-referenz-partner-08.webp", alt: "Referenz Partner 8 – BogiVisual Immobilien Visualisierung" },
      { src: "/bogivisual-referenz-partner-09.webp", alt: "Referenz Partner 9 – BogiVisual Immobilien Visualisierung" },
      { src: "/bogivisual-referenz-partner-10.webp", alt: "Referenz Partner 10 – BogiVisual Immobilien Visualisierung" },
      { src: "/bogivisual-referenz-partner-11.webp", alt: "Referenz Partner 11 – BogiVisual Immobilien Visualisierung" },
    ],
    []
  );

  // Vorteile (Mobile Carousel)
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = benefitSlides.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((s) => (s + 1) % totalSlides);
    }, 5200);
    return () => window.clearInterval(id);
  }, [totalSlides]);

  useEffect(() => {
    const quizEl = document.getElementById("quiz");
    quizRef.current = quizEl as HTMLElement | null;
  }, []);

  const scrollToQuiz = () => {
    const el = quizRef.current ?? document.getElementById("quiz");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToNext = () => {
    const el = document.getElementById("identifikation");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const prevBenefit = () =>
    setSlideIndex((s) => (s - 1 + totalSlides) % totalSlides);
  const nextBenefit = () => setSlideIndex((s) => (s + 1) % totalSlides);

  // ✅ Modal für Marquee-Bilder (beide Reihen, durchklickbar)
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);

  const openWorkAt = (i: number) => {
    setWorkIndex(i);
    setIsWorkOpen(true);
  };

  useEffect(() => {
    if (!isWorkOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsWorkOpen(false);
      if (e.key === "ArrowLeft")
        setWorkIndex((s) => (s - 1 + workImages.length) % workImages.length);
      if (e.key === "ArrowRight")
        setWorkIndex((s) => (s + 1) % workImages.length);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isWorkOpen, workImages.length]);

  const workPrev = () =>
    setWorkIndex((s) => (s - 1 + workImages.length) % workImages.length);
  const workNext = () => setWorkIndex((s) => (s + 1) % workImages.length);

  return (
    <main className="bg-[#FFFFFF] text-black selection:bg-black selection:text-white">
      {/* Header */}
      <header className="px-5 sm:px-8 lg:px-12 pt-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
  <Link href="/" aria-label="Zur Startseite">
    <div className="relative h-10 w-32 sm:h-12 sm:w-40 lg:h-14 lg:w-48 cursor-pointer">
      <Image
        src="/bogivisual-logo-immobilien-visualisierung.webp"
        alt="BogiVisual – Professionelle Immobilien Visualisierung"
        fill
        priority
        className="object-contain"
        sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
      />
    </div>
  </Link>
</div>

          <button
            onClick={scrollToQuiz}
            className="rounded-full border border-black px-4 py-2 text-sm font-medium tracking-tight hover:bg-black hover:text-white transition"
          >
            Zum Quiz
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-0 px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-14 sm:pb-18">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Text */}
          <div className="flex flex-col justify-center py-6 lg:py-0">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.02] font-semibold tracking-tight">
              Immobilien, die begeistern – noch bevor sie gebaut sind.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-black/70 leading-relaxed max-w-xl">
              Hochwertige 3D-Visualisierungen für Immobilien, die Ästhetik,
              Präzision und emotionale Wirkung auf höchstem Niveau vereinen.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#quiz"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white text-sm font-semibold tracking-tight hover:opacity-90 transition"
              >
                Projekt anfragen
              </a>
              <button
                onClick={scrollToNext}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black px-6 py-3 text-sm font-semibold tracking-tight hover:bg-black hover:text-white transition"
              >
                Mehr erfahren <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Bilder */}
          <div className="relative z-0">
            <div className="relative bg-white/40 p-4 sm:p-5 overflow-hidden">
              <div className="grid grid-cols-2 gap-4 items-start">
                <HeroCardImage {...heroImages[0]} priority />
                <HeroCardImage {...heroImages[1]} priority />
                <HeroCardImage {...heroImages[2]} />
                <HeroCardImage {...heroImages[3]} />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 sm:h-56 z-20 bg-[linear-gradient(to_top,#FFFFFF_0%,#FFFFFF_22%,rgba(250,247,240,0)_100%)]" />
              <div
                className="pointer-events-none absolute bottom-0 z-30 h-44 sm:h-56 bg-[linear-gradient(to_top,#FFFFFF_0%,#FFFFFF_22%,rgba(250,247,240,0)_100%)]"
                style={{ left: -1, right: -1, bottom: -1 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Identifikation */}
      <section id="identifikation" className="bg-[#FFFFFF]">
        <div className="px-5 sm:px-8 lg:px-12 py-14 sm:py-18">
          <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-14 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">
                Immobilien werden nicht nur gekauft – sie werden gefühlt.
              </h2>

              <div className="mt-5 space-y-4 text-black/70 leading-relaxed max-w-xl">
                <p>Grundrisse, Zahlen und technische Daten schaffen selten Emotion.</p>
                <p>
                  Hochwertige 3D-Visualisierungen machen aus Ideen erlebbare Räume
                  – und lassen Qualität sofort spüren.
                </p>
                <p>Im Premium-Segment entscheidet dieser erste Eindruck.</p>
              </div>
            </div>

            <div className="space-y-4">
              <IconCard
                icon={Heart}
                title="Emotionale Wirkung"
                text="Atmosphäre, die sofort spürbar ist – ohne Erklärung."
              />
              <IconCard
                icon={Gem}
                title="Premium Wahrnehmung"
                text="Qualität wird sichtbar – bevor etwas gebaut ist."
              />
              <IconCard
                icon={Layers}
                title="Klarheit & Fokus"
                text="Weniger Rückfragen. Mehr Sicherheit im Entscheidungsprozess."
              />
              <IconCard
                icon={Camera}
                title="Marketing-ready"
                text="Perfekt für Exposé, Web, Social, Investorendecks."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="px-5 sm:px-8 lg:px-12 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Premium wirkt – noch bevor es existiert.
              </h2>
            </div>

            {/* Mobile Controls bleiben */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={prevBenefit}
                aria-label="Vorherige Vorteile"
                className="rounded-full border border-black p-2 hover:bg-black hover:text-white transition"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextBenefit}
                aria-label="Nächste Vorteile"
                className="rounded-full border border-black p-2 hover:bg-black hover:text-white transition"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ✅ Desktop: 4er Grid ohne Karussell */}
          <div className="mt-8 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefitSlides.map((s) => (
              <BenefitCard key={s.title} slide={s} />
            ))}
          </div>

          {/* ✅ Mobile: Karussell (wie vorher) */}
          <div className="mt-8 sm:hidden">
            <BenefitCard slide={benefitSlides[slideIndex]} />
          </div>

          {/* Mobile Dots bleiben */}
          <div className="mt-6 sm:hidden flex items-center gap-2">
            {benefitSlides.map((_, i) => (
              <div
                key={i}
                className={[
                  "h-1.5 transition-all",
                  i === slideIndex ? "w-10 bg-black" : "w-5 bg-black/20",
                ].join(" ")}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>

   {/* Ablauf */}
<section className="bg-[#FFFFFF]">
  <div className="px-5 sm:px-8 lg:px-12 py-14 sm:py-18">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Präzise geführt. Klar umgesetzt. Final veredelt.
      </h2>

      <div className="mt-10 grid lg:grid-cols-[1.05fr,0.95fr] gap-6 lg:gap-8 items-stretch">
        <div className="order-1 lg:order-2 h-full">
          <div className="rounded-[8px] border border-black/10 bg-white overflow-hidden h-full flex flex-col">
            <div className="relative w-full aspect-[5/4] overflow-hidden">
              <Image
                src="/boglarka-czupifarkas-immobilien-visualisiererin.webp"
                alt="Boglarka Czupifarkas – Immobilien Visualisiererin bei BogiVisual"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/25" />
            </div>

            <div className="p-5 sm:p-6 border-t border-black/10 flex-1">
              <div className="text-sm font-semibold tracking-tight">
                Ich bin Bogi. Schön, dass Sie sich für Immobilienvisualisierungen interessieren.
              </div>
              <div className="mt-2 text-sm text-black/70 leading-relaxed">
                Gemeinsam machen wir Ihr Projekt erlebbar.
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-1 h-full">
          <div className="h-full grid grid-rows-[repeat(3,minmax(0,1fr))] gap-4">
            {processSteps.map((step) => (
              <ProcessStepCard key={step.nr} step={step} fill center />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Meine Arbeit */}
      <section className="py-14 sm:py-18 overflow-hidden">
        <div className="px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Ästhetische Klarheit, hochwertige Details, visuelle Ruhe.
            </h2>
            <p className="mt-4 text-black/70 leading-relaxed max-w-3xl">
              Jede Visualisierung entsteht mit einem präzisen Blick für Architektur, Design und Wirkung –
              nicht nur als schönes Bild, sondern als visuelle Aussage, die Ihre Immobilie auf ein neues Niveau hebt.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <MarqueeRow
            images={workImages.slice(0, 6)}
            startIndex={0}
            direction="left"
            full
            onImageClick={openWorkAt}
          />
          <div className="h-4" />
          <MarqueeRow
            images={workImages.slice(6, 12)}
            startIndex={6}
            direction="right"
            offset
            full
            onImageClick={openWorkAt}
          />
        </div>

        <div className="mt-14 sm:mt-18 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Echte Projekte. Echte Emotionen.
            </h2>
            <p className="mt-4 text-black/70 leading-relaxed max-w-3xl">
              Kürzlich abgeschlossene Referenzprojekte, die Interessenten und Partner begeistern.
            </p>

            <div className="mt-8">
              <CaseSlideshow slides={caseSlides} />
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-18 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Zeigen Sie Ihr Projekt, bereits vor dem ersten Bauschritt.
            </h2>
            <p className="mt-4 text-black/70 leading-relaxed max-w-3xl">
              Wir erobern die Herzen von Interessenten, Investoren und Partnern noch bevor der erste Stein gesetzt is.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {beforeAfterItems.map((it, idx) => (
                <BeforeAfterSlider
                  key={idx}
                  // ✅ Vorher/Nachher tauschen
                  beforeSrc={it.after}
                  afterSrc={it.before}
                  alt={it.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-18">
          <div className="mt-6">
            <PartnerMarquee logos={partnerLogos} />
          </div>
        </div>
      </section>

      {/* Abschluss CTA */}
      <section className="bg-black">
        <div className="px-5 sm:px-8 lg:px-12 py-14 sm:py-18">
          <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.2fr,0.8fr] gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Lassen Sie Ihre Immobilie für sich sprechen.
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                Wenn der erste Eindruck Premium sein soll, muss er visuell beginnen.
                Ich helfe Ihnen, aus Plänen Begehrlichkeit zu machen.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#quiz"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-black text-sm font-semibold tracking-tight hover:opacity-90 transition"
                >
                  Projekt anfragen
                </a>
              </div>
            </div>

            <div
              id="quiz"
              className="rounded-[8px] bg-white text-black border border-white/10 p-6 sm:p-7"
            >
              <div className="mt-6">
                <Quiz />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Modal für Marquee Bilder: gleicher Stil wie Projekte */}
      {isWorkOpen && (
        <div
          className={[
            "fixed inset-0 z-[999]",
            "bg-black/80 backdrop-blur-[2px]",
            "grid place-items-center",
            "p-4 sm:p-8 lg:p-10",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label="Bildergalerie"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsWorkOpen(false);
          }}
        >
          <div
            className={[
              "relative",
              "w-[min(1200px,calc(100vw-2rem))] sm:w-[min(1200px,calc(100vw-4rem))]",
              "h-[calc(100vh-2rem)] sm:h-[calc(100vh-4rem)]",
            ].join(" ")}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={workImages[workIndex].src}
                  alt={workImages[workIndex].alt}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1280px) 1100px, 1200px"
                  className="object-contain"
                  priority
                />

                <button
                  type="button"
                  onClick={() => setIsWorkOpen(false)}
                  className="absolute right-3 top-3 rounded-full bg-white/90 text-black border border-black/10 p-2 hover:bg-white transition"
                  aria-label="Schließen"
                >
                  <X className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={workPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 text-white border border-white/15 p-2 hover:bg-black/60 transition"
                  aria-label="Vorheriges Bild"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={workNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 text-white border border-white/15 p-2 hover:bg-black/60 transition"
                  aria-label="Nächstes Bild"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-5 inset-x-0 flex items-center justify-center gap-2">
                  {workImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setWorkIndex(i)}
                      className={[
                        "h-1.5 transition-all",
                        i === workIndex
                          ? "w-10 bg-white"
                          : "w-5 bg-white/40 hover:bg-white/70",
                      ].join(" ")}
                      aria-label={`Bild ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-12 inset-x-0 flex justify-center sm:hidden">
                  <button
                    type="button"
                    onClick={() => setIsWorkOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-white/90 text-black border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-white transition"
                    aria-label="Schließen"
                  >
                    <X className="h-4 w-4" />
                    Schließen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(120%);
          }
        }

        @keyframes marqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .fade-edges {
          position: relative;
          overflow: hidden;
        }
        .fade-edges:before,
        .fade-edges:after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 90px;
          pointer-events: none;
          z-index: 20;
        }
        .fade-edges:before {
          left: 0;
          background: linear-gradient(
            to right,
            rgba(250, 247, 240, 1),
            rgba(250, 247, 240, 0)
          );
        }
        .fade-edges:after {
          right: 0;
          background: linear-gradient(
            to left,
            rgba(250, 247, 240, 1),
            rgba(250, 247, 240, 0)
          );
        }

        .ba-range {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 100%;
          background: transparent;
          opacity: 0;
          cursor: ew-resize;
        }
        .ba-range:focus {
          outline: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
          }
          .case-transition {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}

function HeroCardImage({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[8px] bg-white",
        "aspect-[4/5]",
        className ?? "",
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 50vw, 420px"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/10" />
    </div>
  );
}

function IconCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[8px] bg-white text-black border border-black/10 p-5">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-1/2 top-0 h-full w-1/2 opacity-[0.16]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,0,0,0.25), transparent)",
            animation: "shimmer 2.8s ease-in-out infinite",
          }}
        />
      </div>

      <div className="flex items-start gap-3 relative">
        <div className="h-10 w-10 rounded-[8px] bg-black text-white grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold tracking-tight">{title}</div>
          <div className="mt-1 text-sm text-black/65 leading-relaxed">{text}</div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({
  slide,
}: {
  slide: {
    title: string;
    text: string;
    icon: any;
    img: { src: string; alt: string };
  };
}) {
  const Icon = slide.icon;
  return (
    <div className="rounded-[8px] border border-black/10 bg-white overflow-hidden">
      <div className="relative aspect-[5/4]">
        <Image
          src={slide.img.src}
          alt={slide.img.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />
        <div className="absolute -bottom-6 left-5">
          <div className="h-12 w-12 rounded-[8px] bg-white border border-black/10 grid place-items-center shadow-sm">
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="pt-10 pb-6 px-5">
        <div className="text-lg font-semibold tracking-tight">{slide.title}</div>
        <div className="mt-2 text-sm text-black/70 leading-relaxed">{slide.text}</div>
      </div>
    </div>
  );
}

function ProcessStepCard({
  step,
  fill,
  center,
}: {
  step: { nr: string; title: string; text: string };
  fill?: boolean;
  center?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-[8px] border border-black/10 bg-white overflow-hidden",
        fill ? "h-full" : "",
      ].join(" ")}
    >
      <div
        className={[
          "p-5 sm:p-6",
          fill ? "h-full" : "",
          center ? "flex items-center" : "",
        ].join(" ")}
      >
        <div className="w-full flex items-start gap-3">
          
          {/* Schwarzer Container */}
          <div className="h-10 w-10 rounded-[8px] bg-black grid place-items-center shrink-0">
            {/* Weißer Kreis */}
            <div className="h-4 w-4 rounded-full bg-white" />
          </div>

          <div className="flex-1">
            <div className="text-base font-semibold tracking-tight">
              {step.title}
            </div>
            <div className="mt-2 text-sm text-black/70 leading-relaxed">
              {step.text}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


function CaseSlideshow({
  slides,
}: {
  slides: Array<{
    id: string;
    primary: { src: string; alt: string };
    secondary: Array<{ src: string; alt: string }>;
    meta: {
      project: string;
      projectText: string;
      situation: string;
      situationText: string;
      result: string;
      resultText: string;
    };
  }>;
}) {
  const [idx, setIdx] = useState(0);

  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
  const [dir, setDir] = useState<1 | -1>(1);

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const slide = slides[idx];
  const modalImages = useMemo(
    () => [slide.primary, ...slide.secondary],
    [slide.primary, slide.secondary]
  );

  const openModalAt = (i: number) => {
    setModalIndex(i);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  const modalPrev = () =>
    setModalIndex((s) => (s - 1 + modalImages.length) % modalImages.length);
  const modalNext = () => setModalIndex((s) => (s + 1) % modalImages.length);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") modalPrev();
      if (e.key === "ArrowRight") modalNext();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, modalImages.length]);

  const go = (nextIdx: number, direction: 1 | -1) => {
    if (phase !== "idle") return;
    setDir(direction);
    setPhase("out");
    window.setTimeout(() => {
      setIdx(nextIdx);
      setPhase("in");
      window.setTimeout(() => setPhase("idle"), 260);
    }, 220);
  };

  const prev = () => go((idx - 1 + slides.length) % slides.length, -1);
  const next = () => go((idx + 1) % slides.length, 1);

  const motionClass =
    phase === "idle"
      ? "opacity-100 translate-x-0"
      : phase === "out"
      ? `opacity-0 ${dir === 1 ? "-translate-x-2" : "translate-x-2"}`
      : `opacity-100 ${dir === 1 ? "translate-x-2" : "-translate-x-2"}`;

  return (
    <>
      <div>
        <div className="p-0">
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Vorheriger Slide"
                className="rounded-full border border-black p-2 hover:bg-black hover:text-white transition"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Nächster Slide"
                className="rounded-full border border-black p-2 hover:bg-black hover:text-white transition"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className={[
              "mt-5 grid lg:grid-cols-2 gap-5 lg:gap-6 items-stretch",
              "case-transition transition-all duration-[480ms] ease-[cubic-bezier(.22,1,.36,1)]",
              motionClass,
            ].join(" ")}
          >
            <div className="h-full flex flex-col gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => openModalAt(0)}
                className="relative overflow-hidden rounded-[8px] border border-black/10 bg-[#FFFFFF] aspect-[5/4] text-left cursor-pointer group"
                aria-label="Projektbilder öffnen"
              >
                <Image
                  src={slide.primary.src}
                  alt={slide.primary.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />

                <div className="absolute bottom-3 right-3">
                  <MousePointerClick className="h-6 w-6 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.65)]" />
                </div>

                <div className="absolute left-3 bottom-3 rounded-full bg-white/90 text-black border border-black/10 px-3 py-1 text-[11px] font-semibold">
                  {String(idx + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/5" />
              </button>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {slide.secondary.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => openModalAt(i + 1)}
                    className="relative overflow-hidden rounded-[8px] border border-black/10 bg-[#FFFFFF] aspect-[5/4] cursor-pointer"
                    aria-label={`Projektbild ${i + 2} öffnen`}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 640px) 33vw, 180px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <div
                className="flex-1 rounded-[8px] border border-black/10 bg-white/0"
                aria-hidden="true"
              />
            </div>

            <div className="rounded-[8px] border border-black/10 bg-[#FFFFFF] p-5 sm:p-6 h-full flex flex-col">
              <div className="space-y-5">
                <div>
                  <div className="text-sm font-semibold tracking-tight">{slide.meta.project}</div>
                  <div className="mt-2 text-sm text-black/70 leading-relaxed">
                    {slide.meta.projectText}
                  </div>
                </div>

                <div className="h-px bg-black/10" />

                <div>
                  <div className="text-sm font-semibold tracking-tight">{slide.meta.situation}</div>
                  <div className="mt-2 text-sm text-black/70 leading-relaxed">
                    {slide.meta.situationText}
                  </div>
                </div>

                <div className="h-px bg-black/10" />

                <div>
                  <div className="text-sm font-semibold tracking-tight">{slide.meta.result}</div>
                  <div className="mt-2 text-sm text-black/70 leading-relaxed">
                    {slide.meta.resultText}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 justify-start">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i, i > idx ? 1 : -1)}
                className={[
                  "h-1.5 transition-all",
                  i === idx ? "w-10 bg-black" : "w-5 bg-black/20 hover:bg-black/40",
                ].join(" ")}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={[
            "fixed inset-0 z-[999]",
            "bg-black/80 backdrop-blur-[2px]",
            "grid place-items-center",
            "p-4 sm:p-8 lg:p-10",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label="Projektbilder"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className={[
              "relative",
              "w-[min(1200px,calc(100vw-2rem))] sm:w-[min(1200px,calc(100vw-4rem))]",
              "h-[calc(100vh-2rem)] sm:h-[calc(100vh-4rem)]",
            ].join(" ")}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={modalImages[modalIndex].src}
                  alt={modalImages[modalIndex].alt}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1280px) 1100px, 1200px"
                  className="object-contain"
                  priority
                />

                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-3 top-3 rounded-full bg-white/90 text-black border border-black/10 p-2 hover:bg-white transition"
                  aria-label="Schließen"
                >
                  <X className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={modalPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 text-white border border-white/15 p-2 hover:bg-black/60 transition"
                  aria-label="Vorheriges Bild"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={modalNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 text-white border border-white/15 p-2 hover:bg-black/60 transition"
                  aria-label="Nächstes Bild"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-5 inset-x-0 flex items-center justify-center gap-2">
                  {modalImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setModalIndex(i)}
                      className={[
                        "h-1.5 transition-all",
                        i === modalIndex ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70",
                      ].join(" ")}
                      aria-label={`Bild ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-12 inset-x-0 flex justify-center sm:hidden">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex items-center gap-2 rounded-full bg-white/90 text-black border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-white transition"
                    aria-label="Schließen"
                  >
                    <X className="h-4 w-4" />
                    Schließen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(56);
  const hasPlayedRef = useRef(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animateHint = () => {
      if (prefersReduced) return;
      if (hasPlayedRef.current) return;
      hasPlayedRef.current = true;

      const start = 42;
      const end = 60;
      const duration = 900;
      const t0 = performance.now();

      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = Math.round(start + (end - start) * eased);
        setValue(v);
        if (p < 1) requestAnimationFrame(tick);
      };

      setValue(start);
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) animateHint();
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="rounded-[8px] border border-black/10 bg-white overflow-hidden">
      <div className="relative aspect-[4/5] bg-[#FFFFFF] select-none">
        <Image
          src={beforeSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            src={afterSrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/95 shadow-sm"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 bottom-0 w-[1px] bg-black/35"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        />

        <div className="absolute left-3 top-3 rounded-[8px] bg-white/90 border border-black/10 px-2 py-1 text-[11px] font-semibold">
          Vorher
        </div>
        <div className="absolute right-3 top-3 rounded-[8px] bg-white/90 border border-black/10 px-2 py-1 text-[11px] font-semibold">
          Nachher
        </div>

        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${value}%`, transform: `translate(-50%, -50%)` }}
          aria-hidden="true"
        >
          <div
            className={[
              "flex items-center gap-2",
              "rounded-full bg-white/90 border border-black/10 backdrop-blur-[4px]",
              "shadow-[0_6px_18px_rgba(0,0,0,0.18)]",
              "px-3 py-2",
              "transition",
              isFocused ? "ring-2 ring-black/70 ring-offset-2 ring-offset-white/40" : "",
            ].join(" ")}
          >
            <ArrowLeft className="h-4 w-4" />
            <div className="h-6 w-[1px] bg-black/15" />
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        <input
          className="ba-range absolute inset-0"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value, 10))}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-label="Vorher/Nachher Slider"
        />
      </div>
    </div>
  );
}

function PartnerMarquee({ logos }: { logos: { src: string; alt: string }[] }) {
  const items = [...logos, ...logos];

  return (
    <div className="fade-edges w-screen bg-white" style={{ marginLeft: "calc(50% - 50vw)" }}>
      <div
        className="marquee-track flex gap-6 sm:gap-8 p-4 w-[200%] items-center"
        style={{
          animationName: "marqueeLeft",
          animationDuration: "26s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          willChange: "transform",
        }}
      >
        {items.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative h-10 sm:h-12 md:h-14 w-[140px] sm:w-[160px] md:w-[190px] shrink-0 opacity-[0.86]"
          >
            <Image src={img.src} alt={img.alt} fill sizes="190px" className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MarqueeRow({
  images,
  startIndex,
  direction,
  offset,
  full,
  onImageClick,
}: {
  images: { src: string; alt: string }[];
  startIndex: number;
  direction: "left" | "right";
  offset?: boolean;
  full?: boolean;
  onImageClick: (absoluteIndex: number) => void;
}) {
  const items = [...images, ...images];
  const animName = direction === "left" ? "marqueeLeft" : "marqueeRight";

  return (
    <div
      className={["relative overflow-hidden bg-white", full ? "w-screen" : ""].join(" ")}
      style={full ? { marginLeft: "calc(50% - 50vw)" } : undefined}
    >
      <div
        className="marquee-track flex gap-3 p-3 w-[200%]"
        style={{
          animationName: animName,
          animationDuration: "32s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDelay: offset ? "-10s" : "0s",
          willChange: "transform",
        }}
      >
        {items.map((img, i) => {
          const localIndex = i % images.length;
          const absoluteIndex = startIndex + localIndex;

          return (
            <button
              key={`${img.src}-${i}`}
              type="button"
              onClick={() => onImageClick(absoluteIndex)}
              className="relative w-[190px] sm:w-[220px] md:w-[240px] lg:w-[260px] shrink-0 aspect-[5/4] overflow-hidden rounded-[8px] border border-black/10 bg-[#FFFFFF] cursor-pointer group text-left"
              aria-label={`Bild öffnen: ${img.alt}`}
            >
              <Image src={img.src} alt={img.alt} fill sizes="260px" className="object-cover" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/5" />
              <div className="absolute bottom-2 right-2">
                <MousePointerClick className="h-5 w-5 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.65)]" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
