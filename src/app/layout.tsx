import type { Metadata } from 'next';
import '@/app/globals.css';
import { inter } from '@/app/fonts';

import Footer from '@/components/ui/Footer';
import { ConsentProvider } from '@/app/providers/ConsentProvider';
import CookieBanner from '@/components/CookieBanner';
import MarketingPixels from '@/components/MarketingPixels';

export const metadata: Metadata = {
  title: 'BogiVisual',
  description: 'Jetzt Immobilien-Visualisierung anfragen.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <ConsentProvider>
          <CookieBanner />
          <MarketingPixels />
          {children}
          <Footer />
        </ConsentProvider>
      </body>
    </html>
  );
}
