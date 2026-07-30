// GA4-Konfiguration + kleine Helper, die überall im Projekt importiert werden können.
// GA wird erst geladen, wenn Cookie-Consent (Marketing) erteilt wurde – siehe GoogleAnalytics.tsx.
// Alle trackEvent()-Aufrufe sind daher "no-op", solange kein Consent vorliegt (window.gtag existiert nicht).

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-REPYQH7MR7';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sendet ein GA4-Event. Läuft ins Leere, falls gtag (noch) nicht verfügbar ist,
 * z. B. weil der Nutzer dem Marketing-/Statistik-Cookie noch nicht zugestimmt hat.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, {
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...params,
  });
}

/** Sendet einen expliziten Page-View (für SPA-Navigation im App Router). */
export function trackPageview(pathname: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: pathname,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Convenience-Helper speziell für Webinar-Anmeldungen (Lead-Conversion). */
export function trackWebinarLead(params: Record<string, unknown> = {}) {
  trackEvent('generate_lead', {
    event_category: 'webinar',
    event_label: 'webinar_signup',
    ...params,
  });
}
