'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Ein globaler Klick-/Toggle-Listener statt Tracking-Code in jeder einzelnen
 * Seite – deckt automatisch alle aktuellen und künftigen Landingpage-Varianten ab.
 *
 * Trackt:
 * - cta_click:      Klicks auf Anmelde-/Webinar-CTAs (Links auf #anmeldung)
 * - outbound_click: Klicks auf externe Links (z. B. Calendly, Datenschutz-Seite)
 * - faq_open:       Öffnen einer FAQ-<details>-Box
 */
export default function InteractionTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      const linkText = (anchor.textContent || '').trim().slice(0, 80);

      if (href.includes('#anmeldung')) {
        trackEvent('cta_click', { link_text: linkText, link_href: href });
        return;
      }

      try {
        const url = new URL(href, window.location.href);
        if (url.hostname && url.hostname !== window.location.hostname) {
          trackEvent('outbound_click', { link_url: url.href, link_text: linkText });
        }
      } catch {
        // ungültige/relative Hrefs (z. B. "javascript:void(0)") ignorieren
      }
    }

    function handleToggle(e: Event) {
      const el = e.target as HTMLElement;
      if (el.tagName !== 'DETAILS') return;
      const details = el as HTMLDetailsElement;
      if (!details.open) return; // nur beim Öffnen tracken, nicht beim Schließen

      const summary = details.querySelector('summary');
      const question = (summary?.textContent || '').trim().slice(0, 120);
      trackEvent('faq_open', { question });
    }

    // `toggle` bubbelt nicht in allen Browsern zuverlässig – daher Capture-Phase
    // auf document, das funktioniert unabhängig vom Bubbling.
    document.addEventListener('click', handleClick);
    document.addEventListener('toggle', handleToggle, true);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('toggle', handleToggle, true);
    };
  }, []);

  return null;
}
