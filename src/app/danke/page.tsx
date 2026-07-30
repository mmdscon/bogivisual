"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
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
      <section className="px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-20">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
              Vielen Dank für Ihre Anfrage.
            </h1>

            <p className="mt-4 text-base text-black/70 leading-relaxed">
              Ihre Anfrage ist angekommen.  
              Ich melde mich zeitnah mit den nächsten Schritten.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white text-sm font-semibold tracking-tight hover:opacity-90 transition"
              >
                Zur Startseite
              </Link>

              <a
                href="mailto:boglarkaczupifarkas@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold tracking-tight hover:bg-black hover:text-white transition"
              >
                Direkt schreiben
              </a>
            </div>

          
          </div>

          {/* Minimalistische Collage */}
          <div className="grid grid-cols-2 gap-4">
            <CollageImage src="/immobilien-visualisierung-rendering-01.webp" />
            <CollageImage src="/immobilien-visualisierung-rendering-02.webp" />
            <CollageImage src="/immobilien-visualisierung-rendering-03.webp" />
            <CollageImage src="/immobilien-visualisierung-rendering-04.webp" />
          </div>
        </div>
      </section>
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
