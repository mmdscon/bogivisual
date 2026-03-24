"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, HelpCircle, Building2, Home, Store, Sofa } from "lucide-react";

type Answers = {
  presentationReady?: "Ja" | "Noch unsicher";
  assetType?: string;
  name?: string;
  email?: string;
  phone?: string;
};

type Option = {
  label: string;
  value: string;
  sub: string; // kurzer Sekundärtext (max 5 Wörter)
  Icon: React.ComponentType<any>;
};

const Q1_OPTIONS: Option[] = [
  { label: "Ja", value: "Ja", sub: "Startklar für starke Bilder", Icon: CheckCircle2 },
  { label: "Noch unsicher", value: "Noch unsicher", sub: "Wir evaluiere noch", Icon: HelpCircle },
];

const ASSET_OPTIONS: Option[] = [
  { label: "Wohnbau)", value: "Wohnbau (Mehrfamilienhaus)", sub: "Mehr Einheiten, klare Wirkung", Icon: Building2 },
  { label: "Einfamilienhaus", value: "Einfamilienhaus / Villa", sub: "Premium Look für Käufer", Icon: Home },
  { label: "Gewerbe", value: "Gewerbe / Mixed-Use", sub: "Nutzung sichtbar erklären", Icon: Store },
  { label: "Sonstiges", value: "Interior / Innenraum", sub: "Projekte anderer Art", Icon: Sofa },
];

const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.432.008L3.29 9.302a1 1 0 1 1 1.42-1.406l3.03 3.062 6.54-6.607a1 1 0 0 1 1.424-.06z"
      clipRule="evenodd"
    />
  </svg>
);

function LoadingCard() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-black/10 bg-white p-6 text-center"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-black/10 border-t-black" />
      <p className="text-sm text-black/70">Einen Moment …</p>
    </div>
  );
}

function PrimaryButton({
  children,
  type = "button",
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        "h-11 w-full rounded-full bg-black px-5 text-sm font-semibold text-white",
        "transition hover:opacity-95 active:scale-[0.99]",
        "focus:outline-none focus:ring-4 focus:ring-black/15",
        disabled ? "opacity-60 pointer-events-none" : "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function OptionList({
  options,
  value,
  onPick,
}: {
  options: Option[];
  value?: string;
  onPick: (opt: Option) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((opt) => {
        const selected = value === opt.value;
        const isYes = opt.value === "Ja";
        const Icon = opt.Icon;

        // sanfteres Grün für "Ja"
        const yesBase = "border-emerald-100 hover:border-emerald-200 bg-emerald-50/40";
        const yesSelected = "border-emerald-200 bg-emerald-50 ring-4 ring-emerald-100/70";

        const normalBase = "border-black/10 hover:border-black/20 bg-white";
        const normalSelected = "border-black/20 bg-white ring-4 ring-black/10";

        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onPick(opt)}
            className={[
              "relative w-full rounded-2xl border p-4 text-left shadow-sm",
              "transition active:scale-[0.99]",
              isYes ? yesBase : normalBase,
              selected ? (isYes ? yesSelected : normalSelected) : "",
            ].join(" ")}
            aria-pressed={selected}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={[
                    "grid h-11 w-11 place-items-center rounded-2xl border bg-white",
                    isYes ? "border-emerald-100" : "border-black/10",
                    selected ? (isYes ? "border-emerald-200" : "border-black/20") : "",
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5 text-black" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-semibold text-gray-900">{opt.label}</div>
                  <div className="mt-0.5 text-xs text-black/60 font-normal">{opt.sub}</div>
                </div>
              </div>

              {selected && (
                <div
                  className={[
                    "grid h-7 w-7 place-items-center rounded-full shrink-0",
                    isYes ? "bg-emerald-200/70 text-emerald-950" : "bg-black text-white",
                  ].join(" ")}
                >
                  <Check className="h-4 w-4" />
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function Quiz() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [checking, setChecking] = useState(false);

  const sentLeadRef = useRef(false);
  const handledSubmitRef = useRef(false);

  const router = useRouter();

  const back = () => setStep((s) => (s === 1 ? 1 : ((s - 1) as 1 | 2 | 3)));

  // Frage 1: KEINE Ladeanimation
  const choosePresentationReady = (opt: Option) => {
    setAnswers((a) => ({ ...a, presentationReady: opt.value as Answers["presentationReady"] }));
    setStep(2);
  };

  // Frage 2: NUR hier Ladeanimation -> dann Kontakt
  const chooseAssetType = (opt: Option) => {
    setAnswers((a) => ({ ...a, assetType: opt.value }));
    setChecking(true);
    window.setTimeout(() => {
      setChecking(false);
      setStep(3);
    }, 900);
  };

  const submitLead = async (form: FormData) => {
    if (handledSubmitRef.current) return;
    handledSubmitRef.current = true;

    const payload: Answers = {
      ...answers,
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.phone) {
      alert("Bitte Name, E-Mail & Telefon ausfüllen.");
      handledSubmitRef.current = false;
      return;
    }

    if (!sentLeadRef.current) {
      try {
        (window as any).fbq?.("track", "Lead", {
          content_name: "Quiz Lead (Visualisierung)",
          presentationReady: payload.presentationReady,
          assetType: payload.assetType,
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
        });
        sentLeadRef.current = true;
      } catch {}
    }

    try {
      const json = JSON.stringify(payload);
      let sent = false;

      try {
        const blob = new Blob([json], { type: "application/json" });
        // @ts-ignore
        sent =
          typeof navigator !== "undefined" && navigator.sendBeacon
            ? navigator.sendBeacon("/api/lead", blob)
            : false;
      } catch {
        sent = false;
      }

      if (!sent) {
        try {
          void fetch("/api/lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: json,
            keepalive: true,
          });
        } catch {}
      }
    } finally {
      router.push("/danke");
    }
  };

  const progressTotal = 3;

  return (
    <div className="quiz space-y-4">
      <div className="space-y-2 text-center">
        <h3 className="text-center text-xl font-semibold sm:text-2xl tracking-tight">
          {step === 1 && "Bereit, Ihre Immobilie im besten Licht zu präsentieren?"}
          {step === 2 && "Um welche Art von Objekt handelt es sich?"}
          {step === 3 && "Ihr Vorhaben verdient einzigartige Visualisierung."}
        </h3>

    

        <div className="mt-2 flex items-center justify-center gap-2" aria-hidden="true">
          {Array.from({ length: progressTotal }).map((_, i) => {
            const active = i + 1 <= step;
            return (
              <div
                key={i}
                className={[
                  "h-1.5 transition-all",
                  active ? "w-10 bg-black" : "w-5 bg-black/15",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <OptionList
          options={Q1_OPTIONS}
          value={answers.presentationReady}
          onPick={choosePresentationReady}
        />
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-4">
          {!checking ? (
            <>
              <OptionList
                options={ASSET_OPTIONS}
                value={answers.assetType}
                onPick={chooseAssetType}
              />

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={back}
                  className="mt-2 text-sm underline underline-offset-4 text-black/60 hover:text-black"
                >
                  Zurück
                </button>
              </div>
            </>
          ) : (
            <LoadingCard />
          )}
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-3">
          <form action={submitLead} className="mx-auto max-w-3xl space-y-3 text-center">
            <div className="mx-auto max-w-2xl rounded-2xl border border-black/10 bg-white p-5 text-center">
           
              <p className="mt-2 text-sm text-black/70 leading-relaxed">
                Sie sind einen Schritt davon entfernt, Ihr Immobilienprojekt zum Leben zu erwecken und Interessenten & Partner schin heute zu überzeugen.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <input
                className="h-12 rounded-2xl border border-black/15 bg-white px-4 focus:outline-none focus:ring-4 focus:ring-black/10"
                name="name"
                placeholder="Vor- und Nachname"
                required
                autoComplete="name"
                aria-required="true"
              />
              <input
                className="h-12 rounded-2xl border border-black/15 bg-white px-4 focus:outline-none focus:ring-4 focus:ring-black/10"
                type="email"
                name="email"
                placeholder="E-Mail"
                required
                autoComplete="email"
                aria-required="true"
              />
              <input
                className="h-12 rounded-2xl border border-black/15 bg-white px-4 focus:outline-none focus:ring-4 focus:ring-black/10"
                type="tel"
                name="phone"
                placeholder="Telefon"
                required
                inputMode="tel"
                autoComplete="tel"
                aria-required="true"
                pattern="^[0-9+()\\s-]{6,}$"
                title="Bitte eine gültige Telefonnummer eingeben."
              />
            </div>

            <PrimaryButton type="submit">Unverbindliches Angebot anfordern</PrimaryButton>

            <button
              type="button"
              onClick={back}
              className="mt-2 text-sm underline underline-offset-4 text-black/60 hover:text-black"
            >
              Zurück
            </button>

            <p className="text-center text-sm text-black/50">
              Mit Absenden erklären Sie sich mit der Verarbeitung Ihrer Angaben einverstanden.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
