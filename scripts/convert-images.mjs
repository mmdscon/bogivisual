import sharp from 'sharp';
import { readdir, rename, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');

// Mapping: old filename → new SEO-friendly WebP filename
const FILE_MAP = {
  // Hero / showcase images
  'bogi1.jpg':    'immobilien-visualisierung-rendering-01.webp',
  'bogi2.jpg':    'immobilien-visualisierung-rendering-02.webp',
  'bogi3.jpg':    'immobilien-visualisierung-rendering-03.webp',
  'bogi4.jpg':    'immobilien-visualisierung-rendering-04.webp',

  // Benefit slides
  'benefit1.jpg': 'immobilien-visualisierung-vorteil-emotion.webp',
  'benefit2.jpg': 'immobilien-visualisierung-vorteil-premium.webp',
  'benefit3.jpg': 'immobilien-visualisierung-vorteil-geschwindigkeit.webp',
  'benefit4.jpg': 'immobilien-visualisierung-vorteil-marketing.webp',

  // Portfolio work (1.jpg–12.jpg)
  '1.jpg':  'immobilien-rendering-portfolio-01.webp',
  '2.jpg':  'immobilien-rendering-portfolio-02.webp',
  '3.jpg':  'immobilien-rendering-portfolio-03.webp',
  '4.jpg':  'immobilien-rendering-portfolio-04.webp',
  '5.jpg':  'immobilien-rendering-portfolio-05.webp',
  '6.jpg':  'immobilien-rendering-portfolio-06.webp',
  '7.jpg':  'immobilien-rendering-portfolio-07.webp',
  '8.jpg':  'immobilien-rendering-portfolio-08.webp',
  '9.jpg':  'immobilien-rendering-portfolio-09.webp',
  '10.jpg': 'immobilien-rendering-portfolio-10.webp',
  '11.jpg': 'immobilien-rendering-portfolio-11.webp',
  '12.jpg': 'immobilien-rendering-portfolio-12.webp',

  // Case studies – primary
  'primaer1.jpg': 'immobilien-3d-rendering-fallstudie-01.webp',
  'primaer2.jpg': 'immobilien-3d-rendering-fallstudie-02.webp',
  'primaer3.jpg': 'immobilien-3d-rendering-fallstudie-03.webp',

  // Case studies – secondary (detail views)
  'sekundaer1.jpg':   'immobilien-3d-rendering-fallstudie-01a.webp',
  'sekundaer11.jpg':  'immobilien-3d-rendering-fallstudie-01b.webp',
  'sekundaer111.jpg': 'immobilien-3d-rendering-fallstudie-01c.webp',
  'sekundaer2.jpg':   'immobilien-3d-rendering-fallstudie-02a.webp',
  'sekundaer22.jpg':  'immobilien-3d-rendering-fallstudie-02b.webp',
  'sekundaer222.jpg': 'immobilien-3d-rendering-fallstudie-02c.webp',
  'sekundaer3.jpg':   'immobilien-3d-rendering-fallstudie-03a.webp',
  'sekundaer33.jpg':  'immobilien-3d-rendering-fallstudie-03b.webp',
  'sekundaer333.jpg': 'immobilien-3d-rendering-fallstudie-03c.webp',

  // Before / after
  'vorher1.jpg':  'immobilien-visualisierung-vorher-01.webp',
  'vorher2.jpg':  'immobilien-visualisierung-vorher-02.webp',
  'vorher3.jpg':  'immobilien-visualisierung-vorher-03.webp',
  'nachher1.jpg': 'immobilien-visualisierung-nachher-01.webp',
  'nachher2.jpg': 'immobilien-visualisierung-nachher-02.webp',
  'nachher3.jpg': 'immobilien-visualisierung-nachher-03.webp',

  // Partner / reference logos
  'bogiref1.jpg':  'bogivisual-referenz-partner-01.webp',
  'bogiref2.jpg':  'bogivisual-referenz-partner-02.webp',
  'bogiref3.jpg':  'bogivisual-referenz-partner-03.webp',
  'bogiref4.jpg':  'bogivisual-referenz-partner-04.webp',
  'bogiref5.jpg':  'bogivisual-referenz-partner-05.webp',
  'bogiref6.jpg':  'bogivisual-referenz-partner-06.webp',
  'bogiref7.jpg':  'bogivisual-referenz-partner-07.webp',
  'bogiref8.jpg':  'bogivisual-referenz-partner-08.webp',
  'bogiref9.jpg':  'bogivisual-referenz-partner-09.webp',
  'bogiref10.jpg': 'bogivisual-referenz-partner-10.webp',
  'bogiref11.jpg': 'bogivisual-referenz-partner-11.webp',

  // Portrait
  'bogiportrait.jpg': 'boglarka-czupifarkas-immobilien-visualisiererin.webp',

  // Logos
  'Logo_bogiVisual_Standard.png': 'bogivisual-logo-immobilien-visualisierung.webp',
  'logobogi.png':                 'bogivisual-logo-horizontal.webp',
  'logobogi.jpg':                 'bogivisual-logo-horizontal-alt.webp',

  // Process images (not referenced in code but convert anyway)
  'process1.jpg': 'immobilien-visualisierung-prozess-01.webp',
  'process2.jpg': 'immobilien-visualisierung-prozess-02.webp',
  'process3.jpg': 'immobilien-visualisierung-prozess-03.webp',
};

async function main() {
  let converted = 0;
  let skipped = 0;

  for (const [oldName, newName] of Object.entries(FILE_MAP)) {
    const src = path.join(PUBLIC_DIR, oldName);
    const dest = path.join(PUBLIC_DIR, newName);

    if (!existsSync(src)) {
      console.log(`  SKIP (not found): ${oldName}`);
      skipped++;
      continue;
    }

    try {
      await sharp(src)
        .webp({ quality: 85, effort: 6 })
        .toFile(dest);
      console.log(`  OK  ${oldName} → ${newName}`);
      converted++;
    } catch (err) {
      console.error(`  ERR ${oldName}: ${err.message}`);
    }
  }

  console.log(`\nDone: ${converted} converted, ${skipped} skipped.`);
}

main();
