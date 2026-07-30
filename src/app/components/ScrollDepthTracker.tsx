'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

const THRESHOLDS = [25, 50, 75, 90] as const;

/**
 * Trackt Scroll-Tiefe als GA4-Event `scroll_depth` mit Parameter `percent_scrolled`.
 * Jede Schwelle wird pro Seitenaufruf nur einmal gesendet; beim Routenwechsel
 * (neue Unterseite) werden die bereits gefeuerten Schwellen zurückgesetzt.
 * Läuft global in layout.tsx – deckt automatisch alle aktuellen und künftigen
 * Unterseiten ab, ohne dass jede Seite selbst etwas einbauen muss.
 */
export default function ScrollDepthTracker() {
  const pathname = usePathname();
  const fired = useRef<Set<number>>(new Set());
  const ticking = useRef(false);

  useEffect(() => {
    fired.current = new Set();
  }, [pathname]);

  useEffect(() => {
    function computeAndTrack() {
      ticking.current = false;
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const viewport = window.innerHeight;
      const full = doc.scrollHeight;

      if (full <= viewport) return; // Seite ist kürzer als der Viewport, kein Scroll möglich

      const percent = Math.min(100, Math.round(((scrollTop + viewport) / full) * 100));

      THRESHOLDS.forEach((threshold) => {
        if (percent >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          trackEvent('scroll_depth', { percent_scrolled: threshold });
        }
      });
    }

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(computeAndTrack);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    computeAndTrack(); // falls die Seite kurz ist / initial schon weit unten geladen wird

    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return null;
}
