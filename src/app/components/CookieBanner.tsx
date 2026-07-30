'use client';

import { useEffect, useState } from 'react';
import { useConsent } from '@/app/providers/ConsentProvider';

export default function CookieBanner() {
  const { consent, setMarketing } = useConsent();
  const [open, setOpen] = useState(false);

  // Brand tokens (wie in deiner Page)
  const ACCENT = '#FFF6A7';
  const TEXT = '#0B0B0BE6';
  const MUTED = '#0B0B0BB3';
  const BORDER = '#00000014';
  const SURFACE = '#FFFFFF';
  const SOFT = '#FFFDF5';

  useEffect(() => {
    setOpen(consent.marketing === null);
  }, [consent.marketing]);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 sm:px-0">
      <div
        className="mx-auto mb-4 max-w-3xl rounded-[24px] border p-4 shadow-[0_18px_60px_rgba(0,0,0,0.12)] sm:p-5"
        style={{
          borderColor: BORDER,
          backgroundColor: SURFACE,
        }}
      >
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            {/* Tag wie im Hero */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
              style={{ backgroundColor: ACCENT, color: TEXT, border: `1px solid ${BORDER}` }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: TEXT }} />
              <span>Cookies</span>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Wir verwenden Cookies und ähnliche Technologien, um diese Seite stabil zu betreiben,
              anonyme Statistiken zu erstellen und – nur mit Deiner Zustimmung – Marketing-Tools
              (z.&nbsp;B. Meta Pixel) zu nutzen. Du entscheidest, was sich für Dich stimmig anfühlt.
              Essenzielle Cookies setzen wir nur technisch erforderlich.
            </p>

            <p className="text-[11px] leading-relaxed" style={{ color: '#0B0B0B99' }}>
              Mehr Infos findest Du in unserer{' '}
              <a
                href="http://weltkind.at/impressum"
                className="underline underline-offset-2"
                style={{ textDecorationColor: `${ACCENT}cc`, color: TEXT }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.8')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          {/* Buttons im Brand-Pattern */}
          <div className="flex flex-wrap items-center justify-end gap-2 shrink-0">
            <button
              onClick={() => {
                setMarketing(false);
                setOpen(false);
              }}
              className="rounded-full border px-4 py-2 text-xs font-medium transition hover:opacity-80 active:scale-[0.99] sm:text-sm"
              style={{
                borderColor: BORDER,
                backgroundColor: SURFACE,
                color: TEXT,
              }}
            >
              Nur essenziell
            </button>

            <button
              onClick={() => {
                setMarketing(false);
                setOpen(false);
              }}
              className="rounded-full border px-4 py-2 text-xs font-medium transition hover:opacity-90 active:scale-[0.99] sm:text-sm"
              style={{
                borderColor: 'transparent',
                backgroundColor: SOFT,
                color: TEXT,
              }}
            >
              Ablehnen
            </button>

            <button
              onClick={() => {
                setMarketing(true);
                setOpen(false);
              }}
              className="rounded-full px-4 py-2 text-xs font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:bg-black/90 active:scale-[0.99] sm:text-sm"
              style={{
                backgroundColor: '#000000',
              }}
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
