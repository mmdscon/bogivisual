import type { Metadata } from 'next';
import '@/app/globals.css';
import { inter } from '@/app/fonts';

import Footer from '@/components/ui/Footer';
import { ConsentProvider } from '@/app/providers/ConsentProvider';
import CookieBanner from '@/components/CookieBanner';
import MarketingPixels from '@/components/MarketingPixels';

export const metadata: Metadata = {
  title: {
    default: 'BogiVisual – Professionelle 3D Immobilien Visualisierung',
    template: '%s | BogiVisual',
  },
  description:
    'BogiVisual erstellt hochwertige 3D Immobilien Visualisierungen und Renderings für Architekten, Bauträger und Makler. Jetzt Anfrage stellen und Immobilien professionell vermarkten.',
  keywords: [
    'Immobilien Visualisierung',
    '3D Rendering',
    'Architektur Visualisierung',
    'Immobilien Marketing',
    'Bauträger Visualisierung',
    'Grundriss Visualisierung',
    'BogiVisual',
  ],
  authors: [{ name: 'Boglarka Czupifarkas', url: 'https://bogivisual.com' }],
  creator: 'BogiVisual',
  metadataBase: new URL('https://bogivisual.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://bogivisual.com',
    siteName: 'BogiVisual',
    title: 'BogiVisual – Professionelle 3D Immobilien Visualisierung',
    description:
      'Hochwertige 3D Immobilien Visualisierungen und Renderings für Architekten, Bauträger und Makler. Professionell. Realistisch. Wirkungsvoll.',
    images: [
      {
        url: '/bogivisual-logo-immobilien-visualisierung.webp',
        width: 1200,
        height: 630,
        alt: 'BogiVisual – Professionelle 3D Immobilien Visualisierung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BogiVisual – Professionelle 3D Immobilien Visualisierung',
    description:
      'Hochwertige 3D Immobilien Visualisierungen und Renderings für Architekten, Bauträger und Makler.',
    images: ['/bogivisual-logo-immobilien-visualisierung.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
