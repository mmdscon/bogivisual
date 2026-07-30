"use client";

import { Button } from "@/components/ui/Button";
import { BadgeCheck, CalendarCheck, Mail, Volume2 } from "lucide-react";
import React, { useEffect } from "react";
import { trackWebinarLead } from "@/lib/analytics";

const ACCENT = "#FFF6A7";
const TEXT = "#0B0B0BE6";
const MUTED = "#0B0B0BB3";
const BORDER = "#00000014";
const SURFACE = "#FFFFFF";
const SOFT = "#FFFDF5";
const LIGHT_GREY = "#F4F4F4";

function IconBadge({
  icon: Icon,
  tone = "onDefault",
  size = 18,
  className = "",
}: {
  icon: React.ElementType;
  tone?: "onDefault" | "onAccent";
  size?: number;
  className?: string;
}) {
  const bg = tone === "onAccent" ? "#000000" : ACCENT;
  const fg = tone === "onAccent" ? ACCENT : "#000000";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border ${className}`}
      style={{
        width: 40,
        height: 40,
        minWidth: 40,
        minHeight: 40,
        borderColor: "rgba(0,0,0,0.10)",
        backgroundColor: bg,
      }}
      aria-hidden="true"
    >
      <Icon size={size} color={fg} strokeWidth={1.8} />
    </span>
  );
}

const buttonClass =
  "whitespace-nowrap text-sm md:text-base text-center leading-snug rounded-full bg-black px-7 py-3 font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-black/90 active:scale-[0.99]";

export default function Page() {
  // Diese Seite wird nach erfolgreicher Webinar-Anmeldung erreicht – daher hier
  // (und nur hier) der Lead-Conversion-Event, statt zu versuchen, das Absenden
  // des externen WebinarJam-Formulars direkt abzufangen (technisch nicht zugänglich,
  // da es sich um ein eingebettetes Drittanbieter-Skript auf fremder Domain handelt).
  useEffect(() => {
    trackWebinarLead({ event_label: "webinar_signup_danke_page" });
  }, []);

  return (
    <main style={{ backgroundColor: SURFACE, color: TEXT }}>

      {/* HERO / DANKE */}
      <section className="relative overflow-hidden" style={{ backgroundColor: SOFT }}>
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 420px at 15% 10%, rgba(255,246,167,0.55) 0%, rgba(255,255,255,0) 60%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[360px] max-w-4xl flex-col items-center px-4 pb-12 pt-14 sm:px-6 sm:pt-16 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
            style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: TEXT }} />
            <span>Du bist dabei</span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: TEXT }}>
            Danke für Deine Anmeldung zum{" "}
            <span
              className="underline decoration-[4px] underline-offset-4"
              style={{ textDecorationColor: `${ACCENT}cc` }}
            >
              Leberfasten-Webinar
            </span>
            !
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base" style={{ color: MUTED }}>
            Schön, dass Du Dir diesen Raum nimmst. In Deinem Postfach wartet gleich eine
            Bestätigung mit allen Details zum <strong style={{ color: TEXT }}>Live-Webinar</strong> – inklusive Zugangslink.
          </p>

          {/* Arrow */}
          <div className="mt-8 flex justify-center">
            <img src="/arrow.png" alt="Pfeil nach unten" className="h-14 w-auto" />
          </div>
        </div>
      </section>

      {/* SO GEHT'S WEITER */}
      <section className="section" style={{ backgroundColor: LIGHT_GREY }}>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: "#0B0B0B99" }}
            >
              So geht&apos;s weiter
            </p>
            <h2
              className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{ color: TEXT }}
            >
              Damit Du optimal vorbereitet bist
            </h2>
            <p className="mt-3 text-sm sm:text-base" style={{ color: MUTED }}>
              Nutze die nächsten Minuten, um Dir einen klaren Rahmen zu schaffen – Dein zukünftiges Ich wird Dir danken.
            </p>
          </div>

          <div className="mx-auto mt-7 grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              {
                icon: Mail,
                title: "1. Postfach prüfen",
                text: "Öffne die Bestätigungsmail und speichere Dir den Termin inkl. Zugangslink ab.",
              },
              {
                icon: CalendarCheck,
                title: "2. Termin blocken",
                text: "Trage Dir den Termin bewusst in Deinen Kalender ein – ohne andere Verpflichtungen daneben.",
              },
              {
                icon: Volume2,
                title: "3. Raum schaffen",
                text: "Sorge für einen ruhigen Ort, Kopfhörer & etwas zu schreiben. Das ist Zeit nur für Dich.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col border bg-white p-5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
                style={{ borderColor: BORDER }}
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
        </div>
      </section>

      {/* REMINDER HINWEIS */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/optimize6.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(1.05)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: "rgba(0,0,0,0.60)" }}
          aria-hidden="true"
        />

        <div className="container relative z-10 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-0">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
              style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: TEXT }} />
              <span>Bis gleich im Webinar ✉️</span>
            </div>

            <h2 className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: "#fff" }}>
              Schau jetzt kurz in Dein{" "}
              <span
                className="underline decoration-[4px] underline-offset-4"
                style={{ textDecorationColor: `${ACCENT}cc` }}
              >
                Postfach
              </span>
            </h2>

            <p
              className="mt-4 text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              Dort findest Du alle Infos zum Webinar. Wenn nichts ankommt, wirf bitte auch einen Blick in
              den Spam- oder Werbe-Ordner und verschiebe die Mail in Deinen Haupt-Posteingang.
            </p>

            <p
              className="mt-5 flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-medium sm:text-base shadow-[0_10px_28px_rgba(0,0,0,0.20)]"
              style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
            >
              <IconBadge icon={BadgeCheck} tone="onAccent" className="h-[36px] w-[36px]" size={16} />
              <span>Du hast die Erlaubnis, Deinen Körper zu entlasten. Dieser Schritt zählt.</span>
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
