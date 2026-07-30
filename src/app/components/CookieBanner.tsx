'use client';

import { useEffect, useState } from 'react';
import { useConsent } from '@/app/providers/ConsentProvider';

export default function CookieBanner() {
  const { consent, setMarketing } = useConsent();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(consent.marketing === null);
  }, [consent.marketing]);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[8px] border border-black/10 bg-white p-5 sm:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/50">
                Cookies
              </p>

              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-black/70">
                Wir verwenden Cookies und ähnliche Technologien, um diese Website
                technisch zuverlässig zu betreiben, anonyme Statistiken zu erfassen
                und – nur mit Ihrer Zustimmung – Marketing-Tools zu nutzen.
                Essenzielle Cookies setzen wir ausschließlich, soweit sie für den
                Betrieb der Website erforderlich sind.
              </p>

              <p className="mt-3 text-xs sm:text-sm text-black/55 leading-relaxed">
                Mehr Informationen finden Sie in unserer{' '}
                <a
                  href="/datenschutz"
                  className="underline underline-offset-4 hover:text-black transition"
                >
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end shrink-0">
              <button
                onClick={() => {
                  setMarketing(false);
                  setOpen(false);
                }}
                className="inline-flex items-center justify-center rounded-full border border-black px-5 py-3 text-sm font-semibold tracking-tight text-black hover:bg-black hover:text-white transition"
              >
                Nur essenziell
              </button>

              <button
                onClick={() => {
                  setMarketing(true);
                  setOpen(false);
                }}
                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold tracking-tight text-white hover:opacity-90 transition"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
