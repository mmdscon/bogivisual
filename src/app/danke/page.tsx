"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CalendarCheck } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/vajascsesze/30min";

export default function Page() {
  const router = useRouter();
  const widgetRef = useRef<HTMLDivElement>(null);

  // Sobald der Termin über Calendly gebucht wurde, direkt zur Bestätigungsseite weiterleiten
  useEffect(() => {
    function handleCalendlyEvent(e: MessageEvent) {
      if (
        e.data?.event &&
        typeof e.data.event === "string" &&
        e.data.event === "calendly.event_scheduled"
      ) {
        router.push("/danke-buchung");
      }
    }

    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, [router]);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black selection:bg-black selection:text-white">
      {/* Header */}
      <header className="px-5 sm:px-8 lg:px-12 pt-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="relative h-10 w-32 sm:h-12 sm:w-40 lg:h-14 lg:w-48">
            <Image
              src="/bogivisual-logo-immobilien-visualisierung.webp"
              alt="BogiVisual – Professionelle Immobilien Visualisierung"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
            />
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 text-sm font-medium tracking-tight hover:bg-black hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Text */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-xs font-medium tracking-tight text-black/60">
                <CalendarCheck className="h-3.5 w-3.5" />
                Schritt 2 von 2
              </div>

              <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
                Ein letzter Schritt noch.
              </h1>

              <p className="mt-4 text-base text-black/70 leading-relaxed">
                Ihre Anfrage ist angekommen. Damit wir zeitnah die nächsten
                Schritte besprechen können, wählen Sie sich am besten gleich
                einen passenden Termin für ein kurzes, unverbindliches
                Kennenlerngespräch aus.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:boglarkaczupifarkas@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold tracking-tight hover:bg-black hover:text-white transition"
                >
                  Lieber direkt schreiben
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight text-black/60 hover:text-black transition"
                >
                  Zur Startseite
                </Link>
              </div>

              {/* Minimalistische Collage */}
              <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
                <CollageImage src="/immobilien-visualisierung-rendering-01.webp" />
                <CollageImage src="/immobilien-visualisierung-rendering-02.webp" />
                <CollageImage src="/immobilien-visualisierung-rendering-03.webp" />
                <CollageImage src="/immobilien-visualisierung-rendering-04.webp" />
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="rounded-[8px] border border-black/10 bg-white overflow-hidden">
              <div
                ref={widgetRef}
                className="calendly-inline-widget"
                data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=000000`}
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </main>
  );
}

function CollageImage({ src }: { src: string }) {
  return (
    <div className="relative aspect-[4/5] rounded-[8px] overflow-hidden border border-black/10 bg-white">
      <Image
        src={src}
        alt="3D Immobilien Visualisierung – BogiVisual Portfolio"
        fill
        sizes="(max-width: 1024px) 50vw, 400px"
        className="object-cover"
      />
    </div>
  );
}
