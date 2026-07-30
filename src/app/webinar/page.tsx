'use client';
import Script from 'next/script'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'

export default function Page() {
  const sentLeadRef = useRef(false);

  useEffect(() => {
    const wrapper = document.querySelector('.wj-embed-wrapper');
    if (!wrapper) return;

    const fireLead = () => {
      if (sentLeadRef.current) return;
      try {
        (window as any).fbq?.('track', 'Lead', {
          content_name: 'Webinar Anmeldung (Button)',
          source: 'WebinarJam Embed',
          webinar_hash: 'nxgrlc5',
        });
        sentLeadRef.current = true;
      } catch {}
    };

    const onClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const candidate = target.closest('button, a, input[type="submit"]') as HTMLElement | null;
      if (!candidate) return;
      const txt = ((candidate.innerText || (candidate as HTMLInputElement).value || '').trim().toLowerCase());
      if (txt.includes('kostenlos anmelden')) {
        fireLead();
      }
    };

    // Delegate Click auf Wrapper (funktioniert auch bei dynamisch geladenen Buttons)
    wrapper.addEventListener('click', onClick, true);

    // Fallback: falls ein echtes <form> existiert, auch Submit tracken
    const observer = new MutationObserver(() => {
      const form = wrapper.querySelector('form');
      if (form && !(form as any).__leadBound) {
        form.addEventListener('submit', fireLead, true);
        (form as any).__leadBound = true;
      }
    });
    observer.observe(wrapper, { childList: true, subtree: true });

    return () => {
      wrapper.removeEventListener('click', onClick, true);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* HERO – auf Mobile höher */}
      <section className="relative h-[420px] sm:h-[480px]">
        {/* Hero Mobile */}
        <img
          src="/hero_webinar_mobile2.jpg"
          alt="Hero Bild Mobile"
          className="absolute inset-0 h-full w-full object-cover sm:hidden"
        />

        {/* Hero Desktop */}
        <img
          src="/hero_webinar_desktop2.jpg"
          alt="Hero Bild Desktop"
          className="absolute inset-0 hidden h-full w-full object-cover sm:block"
        />

        {/* Overlay */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="mx-auto max-w-3xl text-center text-white drop-shadow-[0_1px_8px_rgba(0,0,0,.35)] -translate-y-4 sm:-translate-y-10">
            {/* Details-Pill bleibt weiß */}
            <div className="mx-auto mb-4 inline-block rounded-full bg-white px-4 py-1.5 backdrop-blur">
              <span className="text-xs text-gray-800">
               Live-Infoabend: Fördermöglichkeiten für KMU in Österreich
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl font-medium tracking-tight">
              Bis zu <u><b>8.000€ Förderung</b></u> für Website & digitalen Vertrieb
            </h1>

            <p className="mt-3 text-white/90">
            Infoabend für kleine und mittlere Unternehmen in 🇦🇹 - Förderungen verstehen: Wofür? Wie hoch?
            </p>
            
          </div>
        </div>
      </section>

      {/* LIVE-EMBED – ersetzt das frühere Quiz */}
      <section id="live" className="quiz-wrap mt-8 sm:-mt-20 md:-mt-24">
        <div className="container">
          <div className="mx-auto w-full sm:w-fit max-w-full rounded-2xl border border-blue-200 bg-white p-5 shadow-xl sm:p-6">
            {/* WebinarJam Embed */}
            <div id="webinarjam-embed" className="w-full text-center">
              {/* Eingefügter WebinarJam-Embed (zentriert, passt sich der Breite an) */}
              <div className="wj-embed-wrapper mx-auto inline-block" data-webinar-hash="nxgrlc5">
                <Script
                  src="https://event.webinarjam.com/register/nxgrlc5/embed-form?formButtonText=Kostenlos%20anmelden&formAccentColor=%232545f0&formAccentOpacity=1&formBgColor=%23ffffff&formBgOpacity=1"
                  strategy="afterInteractive"
                />
              </div>

              {/* FB Lead Tracking im React-Stil wie im Quiz (einmalig, Guard via Ref) */}
            </div>

            {/* Disclaimer */}
            <p className="mt-4 text-center text-xs text-gray-500">
              Hinweis: Förderungen können ausschließlich für zukünftige Projekte beantragt werden, nicht für bereits abgeschlossene.
            </p>
          </div>
        </div>
      </section>

      {/* Statement unter dem Live-Embed */}
      <section className="section bg-white">
        <div className="container">
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-800 sm:text-xl">
            Finde gemeinsam mit David von der Digitalisierungshilfe heraus, welche Förderprogramme es gibt, welche Webseiten- und Neukundenprojekte überhaupt Sinn machen, und wie Du Dein Unternehmen damit <em>startklar für ein erfolgreiches 2026</em> machst.
          </p>
        </div>
      </section>

      {/* Nutzen-Sektion – hellgrauer Hintergrund */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Was du im{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Infoabend</span>{' '}
            erfährst …
          </h2>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Optionen verstehen', text: 'Website, Online‑Shop, Landingpage, Werbeanzeigen & E-Mail Marketing – welche Bausteine sind wann sinnvoll.' },
              { title: 'Projektauswahl', text: 'Welche Maßnahmen sind überhaupt zu welchem Teil förderbar? Wir erklären es.' },
              { title: 'Passende Programme', text: 'Bund, Land & regional – welche Töpfe Web & digitale Vertriebsprozesse fördern (bis zu 8.000€).' },
              { title: 'Umsetzung mit Wirkung', text: 'Von Lead‑Gewinnung bis Abschluss: digitale Vertriebsprozesse, die messbar Kunden bringen.' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-emerald-200/70 bg-emerald-50 p-4 text-center shadow-sm"
              >
                <h3 className="font-semibold text-emerald-900">{item.title}</h3>
                <p className="mt-1 text-sm text-emerald-800/80">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button asChild className="btn-brand rounded-xl">
              <a href="#live">Jetzt zum Infoabend anmelden</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Garantie-Sektion */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2">
            <div>
              <img
                src="/2.png"
                alt="Garantie Darstellung"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                Digitalstrategie & Förderexpertise verzahnt
              </p>
              <p className="mt-2 text-gray-600">
                Die Digitalisierungshilfe entwickelt für ihre Kunden die passende digitale Strategie, und sorgt zugleich für die Nutzung passender Förderprogramme.
              </p>
              <div className="mt-6 flex justify-center"></div>
            </div>
          </div>

          {/* Duplikat – spiegelverkehrt */}
          <div className="mx-auto mt-8 grid max-w-5xl items-center gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm md:order-1">
              <p className="text-xl font-extrabold text-gray-900 sm:text-2xl">Kostenloser Infoabend</p>
              <p className="mt-2 text-gray-600">
               Sei kostenlos beim Infoabend dabei und erhalte alle notwendigen Informationen, um Dein Digitalisierungsvorhaben danach bestmöglich zu planen.
              </p>
              <div className="mt-6 flex justify-center"></div>
            </div>
            <div className="md:order-2">
              <img
                src="/4.png"
                alt="Individuelle Beratung Darstellung"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ZAHLEN-SECTION – direkt über den FAQs */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Die{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Digitalisierungshilfe</span>{' '}
            in Zahlen …
          </h2>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-3">
            {[
              { value: '> 1.000.000€', label: 'Fördergelder gesichert' },
              { value: 'Über 300', label: 'Projekte umgesetzt' },
              { value: '8 Jahre', label: 'Erfahrung im Web' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-xl border border-blue-200/70 bg-blue-50 p-5 text-center shadow-sm"
              >
                <p className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base text-gray-700 sm:text-lg">
            Seit vielen Jahren setzen wir einzigartige Webprojekte aus Wels, Österreich, um und nutzen dazu bestmöglich lokale und nationale Förderprogramme. Bist du unsere nächste Erfolgsgeschichte?
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Häufige Fragen zum Infoabend</h2>
          <div className="mx-auto mt-6 max-w-5xl space-y-3">
            {[
              ['Worum geht es beim Live‑Förderabend?', 'Wir zeigen dir Schritt für Schritt, wie KMU in Österreich staatliche und lokale Förderungen speziell für die Entwicklung von Websites und digitalen Auftritten nutzen können.'],
              ['Wie hoch ist die mögliche Förderung?', 'Je nach Programm kannst du dir bis zu 8.000 € Zuschuss sichern. Wir erklären die Voraussetzungen live.'],
              ['Wie läuft die Beantragung ab?', 'Du erfährst, welche Unterlagen du brauchst, welche Stellen zuständig sind und wie du den Antrag richtig stellst.'],
              ['Was kostet die Teilnahme?', 'Die Teilnahme ist kostenfrei. Im Anschluss kannst du optional mit uns sprechen und die Umsetzung planen.'],
              ['Gibt es eine Aufzeichnung?', 'Wenn du angemeldet bist, informieren wir dich über eine mögliche Aufzeichnung oder Folgetermine.'],
            ].map(([q, a], idx) => (
              <details key={idx} className="group rounded-xl border border-gray-200 bg-white p-4 open:shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-gray-900">
                  {q}
                  <span className="float-right transition group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-2 text-gray-600">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button asChild className="btn-brand rounded-xl">
              <a href="#live">Jetzt zum Infoabend anmelden</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
