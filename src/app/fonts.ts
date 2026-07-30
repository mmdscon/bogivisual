// fonts.ts
import localFont from 'next/font/local';

export const inter = localFont({
  src: '../../public/fonts/Helvetica.ttf', // Pfad zu deiner Datei
  display: 'swap',
  variable: '--font-inter', // Wir behalten den Namen bei, damit dein CSS weiter funktioniert
});
