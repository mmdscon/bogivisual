"use client";

import { useEffect, useState } from "react";
import { Button } from '@/components/ui/Button';

export default function Page() {
  const calendlyLinks = [
    "https://calendly.com/flavius-digitalisierungshilfe/telefonat-kostenloses-kennenlerngesprach?hide_event_type_details=1&hide_gdpr_banner=1",
    "https://calendly.com/lisa-digitalisierungshilfe/telefonat-kostenloses-kennenlerngesprach?hide_event_type_details=1&hide_gdpr_banner=1",
  ];

  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [budgetPercent, setBudgetPercent] = useState(100);

  useEffect(() => {
    const randomLink = calendlyLinks[Math.floor(Math.random() * calendlyLinks.length)];
    setSelectedLink(randomLink);
  }, []);

  useEffect(() => {
    const target = 10; // 1/10 voll
    const durationMs = 2000; // kürzere Dauer für schnellere Animation
    const fps = 60;
    const stepTime = 1000 / fps;
    const steps = Math.ceil(durationMs / stepTime);
    const delta = (100 - target) / steps;

    let current = 100;
    const interval = setInterval(() => {
      current -= delta;
      if (current <= target) {
        current = target;
        clearInterval(interval);
      }
      setBudgetPercent(parseFloat(current.toFixed(1)));
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 backdrop-blur">
              <span className="text-xs text-blue-800">Du hast es fast geschafft</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900">
              Vielen Dank für Deine Teilnahme beim Infoabend!
            </h1>

            <p className="mt-3 text-gray-700">
           Wir, die <strong>Digitalisierungshilfe GmbH</strong>, realisieren authentische Webprojekte und sichern dir die bestmöglichen Förderungen. Lass uns unverbindlich sprechen – wir begleiten dich Schritt für Schritt.
            </p>

            <div className="mt-5 flex justify-center">
              <Button asChild className="btn-brand rounded-xl">
                <a href="#termin">Jetzt kostenloses Kennenlerngespräch buchen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Förderbudget – visueller Hinweis (Balkendiagramm) */}
      <section className="section bg-blue-50/50">
        <div className="container">
          <div className="mx-auto w-full max-w-3xl rounded-2xl border border-blue-200 bg-white p-5 shadow-xl sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">Förderbudget – aktuell verfügbar</h2>
                <p className="mt-1 text-sm text-gray-600">Die Kontingente werden laufend vergeben. Aktuell ist nur noch ein kleiner Rest verfügbar.</p>
              </div>
              <div className="ml-4 shrink-0 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                {budgetPercent.toFixed(0)}%
              </div>
            </div>

            {/* Balken */}
            <div className="mt-4">
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-blue-100" aria-label="Visualisierung des verbleibenden Förderbudgets" role="img">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-300 ease-out"
                  style={{ width: `${budgetPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Erklärung + Calendly */}
      <section id="termin" className="section bg-white">
        <div className="container">
          <div className="mx-auto w-full max-w-3xl rounded-2xl border border-blue-200 bg-white p-5 shadow-xl sm:p-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Lass uns die Fördermöglichkeiten Deines Projektes analysieren.
              </h2>
              <p className="mt-2 text-gray-600">
                Wähle unten eine passende Zeit. Nach der Buchung erhältst Du automatisch eine Bestätigung inkl. Kalender-Einladung.
              </p>
            </div>

            {/* Calendly Embed */}
            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
              {selectedLink ? (
                <iframe
                  title="Calendly Terminbuchung"
                  src={selectedLink}
                  width="100%"
                  height="840"
                  frameBorder="0"
                />
              ) : (
                <p className="text-center text-gray-500 py-20">Lade Terminbuchung …</p>
              )}
            </div>

            <div className="mt-4 text-center text-sm text-gray-500">
              Probleme beim Laden?{" "}
              {selectedLink && (
                <a
                  href={selectedLink.split("?")[0]}
                  className="font-medium text-blue-700 underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hier direkt in Calendly öffnen
                </a>
              )}
              .
            </div>
          </div>
        </div>
      </section>

       {/* Vertrauens-Hinweis */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Klare Agenda', text: '15–30 Minuten, fokussiert auf deine Ziele und nächsten Schritte.' },
              { title: 'Kein Risiko', text: 'Kostenlos & unverbindlich für Dich ohne versteckte Kosten.' },
              { title: 'Klare Infos', text: 'Nach dem Gespräch hast Du erste konkrete Informationen zu Förderungen.' },
              { title: 'Direkt im Kalender', text: 'Automatisch inklusive Erinnerungen, damit nichts untergeht.' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-blue-200/70 bg-blue-50 p-4 text-center shadow-sm"
              >
                <h3 className="font-semibold text-blue-900">{item.title}</h3>
                <p className="mt-1 text-sm text-blue-800/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
