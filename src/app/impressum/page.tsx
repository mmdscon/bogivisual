"use client";

import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-[#FFFFFF] text-black selection:bg-black selection:text-white min-h-screen">
      
      {/* Header */}
      <header className="px-5 sm:px-8 lg:px-12 pt-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="relative h-10 w-32 sm:h-12 sm:w-40 lg:h-14 lg:w-48">
            <Image
              src="/Logo_bogiVisual_Standard.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
            />
          </div>

          <a
            href="/"
            className="rounded-full border border-black px-4 py-2 text-sm font-medium tracking-tight hover:bg-black hover:text-white transition"
          >
            Zurück zur Startseite
          </a>
        </div>
      </header>

      {/* Content */}
      <section className="px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-20">
        <div className="mx-auto max-w-6xl">

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.02] font-semibold tracking-tight">
            Impressum
          </h1>

          <p className="mt-5 text-base sm:text-lg text-black/70 leading-relaxed max-w-3xl">
            Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB
          </p>

          {/* Alle Cards gleiche Breite */}
          <div className="mt-14 space-y-8">

            <Card title="Unternehmensdaten">
              <p>
                <strong>Webseitenbetreiber:</strong> Boglarka Czupi-Farkas
              </p>
              <p className="mt-2">
                <strong>Anschrift:</strong> Windtal 2, 4863 Seewalchen am Attersee, Österreich
              </p>
              <p className="mt-2">
                <strong>Gewerbeaufsichtbehörde:</strong> Bezirkshauptmannschaft Vöcklabruck
              </p>
              <p className="mt-2">
                <strong>Mitgliedschaften:</strong> WKÖ
              </p>
              <p className="mt-2">
                <strong>Berufsbezeichnung:</strong> Meisterbetrieb, TU Budapest
              </p>
              <p className="mt-2">
                <strong>UID-Nr.:</strong> (falls vorhanden)
              </p>
            </Card>


            <Card title="Kontakt & Rechtliches">
              <p>
                <strong>Telefon:</strong> 068120519644
              </p>
              <p className="mt-2">
                <strong>E-Mail:</strong> boglarkaczupifarkas@gmail.com
              </p>
              <p className="mt-2">
                <strong>Anwendbare Rechtsvorschrift:</strong> www.ris.bka.gv.at
              </p>
            </Card>


            <Card title="Online-Streitbeilegung">
              Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO
              niedergelassen sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen Kauf
              von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG)
              zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit:
              <br /><br />
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80 transition"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </Card>


            <Card title="Urheberrecht & Haftungsausschluss">
              Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist,
              diversen Schutzrechten (z.B dem Urheberrecht). Jegliche Verwendung oder Verbreitung
              von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf
              schriftlicher Zustimmung des Webseitenbetreibers.
              <br /><br />
              Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber
              keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten
              Seiten sind ausschließlich deren Betreiber verantwortlich.
              <br /><br />
              Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine
              Webseite mit rechtswidriger Tätigkeit oder Information verweisen, ersuchen wir
              um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir den betroffenen Inhalt umgehend entfernen.
            </Card>


            <Card title="Quelle">
              fairesRecht.at in Kooperation mit{" "}
              <a
                href="https://rechtsanwaltwien.com/arbeitsrecht"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80 transition"
              >
                Rechtsanwalt Arbeitsrecht
              </a>
            </Card>

          </div>


          {/* Buttons */}
          <div className="mt-16 flex flex-col sm:flex-row gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white text-sm font-semibold tracking-tight hover:opacity-90 transition"
            >
              Zur Startseite
            </a>

            <a
              href="mailto:boglarkaczupifarkas@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold tracking-tight hover:bg-black hover:text-white transition"
            >
              Kontakt aufnehmen
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}


function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[8px] border border-black/10 bg-white p-8 max-w-4xl">
      <div className="text-sm font-semibold tracking-tight">
        {title}
      </div>
      <div className="mt-4 text-sm text-black/70 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
