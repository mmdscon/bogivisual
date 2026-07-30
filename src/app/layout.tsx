import type { Metadata } from 'next';
import '@/app/globals.css';
import { inter } from '@/app/fonts';

import Footer from '@/components/ui/Footer';
import { ConsentProvider } from '@/app/providers/ConsentProvider';
import CookieBanner from '@/components/CookieBanner';
import MarketingPixels from '@/components/MarketingPixels';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ScrollDepthTracker from '@/components/ScrollDepthTracker';
import InteractionTracker from '@/components/InteractionTracker';

export const metadata: Metadata = {
  title: 'Leberfasten mit GO OPTIMIZE',
  description: 'Melde Dich jetzt für das Webinar an.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <ConsentProvider>
          <CookieBanner />
          <GoogleAnalytics />
          <MarketingPixels />
          {/* Scroll-Tiefe & Interaktionen (CTA/Outbound/FAQ) laufen auf allen Seiten;
              sie senden erst Daten, sobald GoogleAnalytics oben geladen ist (Consent erteilt). */}
          <ScrollDepthTracker />
          <InteractionTracker />
          {children}
          <Footer />
        </ConsentProvider>
      </body>
    </html>
  );
}
