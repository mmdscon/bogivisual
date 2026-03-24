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
            Datenschutzerklärung
          </h1>

          <p className="mt-5 text-base sm:text-lg text-black/70 leading-relaxed max-w-3xl">
            Erklärung zur Informationspflicht
          </p>

          <div className="mt-14 space-y-8">

            <Card title="Allgemeines zur Datenverarbeitung">
              In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der
              Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten
              personenbezogene Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen
              (Datenschutzgrundverordnung – DSGVO, Telekommunikationsgesetz 2003).
              <br /><br />
              Sobald Sie unsere Webseite besuchen, werden Ihre IP-Adresse sowie Beginn und Ende
              der Sitzung erfasst. Dies ist technisch bedingt und stellt ein berechtigtes Interesse
              im Sinne des Art 6 Abs 1 lit f DSGVO dar.
            </Card>


            <Card title="Kontakt mit uns">
              Wenn Sie uns über das Kontaktformular auf unserer Webseite oder per E-Mail
              kontaktieren, werden die von Ihnen übermittelten Daten zwecks Bearbeitung Ihrer Anfrage
              oder für den Fall von Anschlussfragen für sechs Monate gespeichert.
              <br /><br />
              Eine Weitergabe Ihrer Daten erfolgt ohne Ihre Einwilligung nicht.
            </Card>


            <Card title="Cookies">
              Unsere Website verwendet sogenannte Cookies. Dabei handelt es sich um kleine
              Textdateien, die mit Hilfe Ihres Browsers auf Ihrem Endgerät gespeichert werden.
              Cookies richten keinen Schaden an.
              <br /><br />
              Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies
              bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns,
              Ihren Browser beim nächsten Besuch wiederzuerkennen.
              <br /><br />
              Wenn Sie dies nicht wünschen, können Sie Ihren Browser so einrichten, dass er Sie über
              das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.
              <br /><br />
              Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
            </Card>


            <Card title="Ihre Rechte als betroffene Person">
              Sie haben grundsätzlich das Recht auf:
              <ul className="list-disc pl-6 mt-4 space-y-1">
                <li>Auskunft</li>
                <li>Löschung der Daten</li>
                <li>Berichtigung der Daten</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerruf und Widerspruch zur Datenverarbeitung</li>
                <li>Einschränkung der Verarbeitung</li>
              </ul>
              <br />
              Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen das
              Datenschutzrecht verstößt, können Sie sich bei uns unter
              {" "}
              <a
                href="mailto:boglarkaczupifarkas@gmail.com"
                className="underline underline-offset-4 hover:opacity-80 transition"
              >
                boglarkaczupifarkas@gmail.com
              </a>
              {" "}
              oder bei der zuständigen Datenschutzbehörde beschweren.
            </Card>


            <Card title="Kontaktdaten des Verantwortlichen">
              <strong>Webseitenbetreiber:</strong> Boglarka Czupi-Farkas
              <br /><br />
              <strong>Telefon:</strong> 068120519644
              <br /><br />
              <strong>E-Mail:</strong>{" "}
              <a
                href="mailto:boglarkaczupifarkas@gmail.com"
                className="underline underline-offset-4 hover:opacity-80 transition"
              >
                boglarkaczupifarkas@gmail.com
              </a>
            </Card>


            <Card title="Quelle">
              Rechtstext von fairesRecht.at in Kooperation mit{" "}
              <a
                href="https://kredit123.at/home"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80 transition"
              >
                Immobilienkredit Online
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
              href="/impressum"
              className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-sm font-semibold tracking-tight hover:bg-black hover:text-white transition"
            >
              Zum Impressum
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
