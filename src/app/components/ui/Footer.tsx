"use client";
import React from "react";

export default function Footer() {
  const ACCENT = '#FFF6A7';
  const BG = '#171A1C';
  const TEXT = '#FFFFFFE6';
  const MUTED = '#FFFFFFB3';
  const BORDER = '#FFFFFF14';

  const linkClass =
    'transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  return (
    <footer
      className="py-8 text-center text-sm"
      style={{
        backgroundColor: BG,
        color: TEXT,
        borderTop: `1px solid ${BORDER}`,
      }}
    >
      <div className="space-x-4">
        <a
          href="https://www.go-optimize.com/impressum/"
          className={linkClass}
          style={
            {
              color: TEXT,
              textDecorationColor: `${ACCENT}cc`,
              '--tw-ring-color': `${ACCENT}66`,
              '--tw-ring-offset-color': BG,
            } as React.CSSProperties
          }
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = ACCENT)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = TEXT)}
        >
          Impressum
        </a>

        <a
          href="https://shop.go-optimize.com/cms/allgemeine-geschaeftsbedingungen.html"
          className={linkClass}
          style={
            {
              color: TEXT,
              textDecorationColor: `${ACCENT}cc`,
              '--tw-ring-color': `${ACCENT}66`,
              '--tw-ring-offset-color': BG,
            } as React.CSSProperties
          }
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = ACCENT)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = TEXT)}
        >
          AGB
        </a>

        <a
          href="https://www.go-optimize.com/datenschutz/"
          className={linkClass}
          style={
            {
              color: TEXT,
              textDecorationColor: `${ACCENT}cc`,
              '--tw-ring-color': `${ACCENT}66`,
              '--tw-ring-offset-color': BG,
            } as React.CSSProperties
          }
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = ACCENT)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = TEXT)}
        >
          Datenschutz
        </a>
      </div>

      <p className="mt-3" style={{ color: MUTED }}>
        © {new Date().getFullYear()} GO OPTIMIZE. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}
