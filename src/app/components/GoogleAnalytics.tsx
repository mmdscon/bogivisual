'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useConsent } from '@/app/providers/ConsentProvider';
import { GA_MEASUREMENT_ID, trackEvent, trackPageview } from '@/lib/analytics';

/**
 * Feuert bei jedem Routenwechsel (App Router = SPA-Navigation) einen page_view.
 * gtag('config', ...) sendet selbst KEINEN automatischen Page-View mehr
 * (send_page_view: false), damit clientseitige Navigation nicht doppelt zählt.
 */
function PageviewOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageview(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

/**
 * Google Analytics (GA4) – wird erst geladen/initialisiert, NACHDEM der Nutzer
 * dem Marketing-/Statistik-Cookie im CookieBanner zugestimmt hat
 * (gleiches Muster wie MarketingPixels/MetaPixel im Projekt).
 *
 * Alle anderen Tracking-Komponenten (ScrollDepthTracker, InteractionTracker,
 * generate_lead auf /danke) rufen lediglich trackEvent() auf, was ohnehin
 * wirkungslos bleibt, solange window.gtag nicht existiert – Consent-Gating
 * ist also durchgängig, ohne dass jede einzelne Tracking-Komponente selbst
 * den Consent-Status kennen muss.
 */
export default function GoogleAnalytics() {
  const { consent } = useConsent();

  // Initialisiert dataLayer/gtag direkt per Effect statt per <Script>-Inline-Content:
  // Ein Inline-Script ohne `src` feuert kein zuverlässiges `load`-Event, ein Effect schon.
  useEffect(() => {
    if (consent.marketing !== true) return;
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });

    // Erstes bestätigendes Event nach erteiltem Consent.
    trackEvent('consent_granted', { event_category: 'consent' });
  }, [consent.marketing]);

  if (consent.marketing !== true) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <PageviewOnRouteChange />
    </>
  );
}
