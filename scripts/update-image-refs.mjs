/**
 * Replace old image paths and alt texts with SEO-optimised versions
 * across all relevant source files.
 */
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const SRC_DIR = path.resolve('src');

// ─── Ordered replacement pairs [search, replace] ────────────────────────────
// More-specific patterns first to avoid partial matches.
const REPLACEMENTS = [
  // ── Hero images ──────────────────────────────────────────────────────────
  [`{ src: "/bogi1.jpg", alt: "Hero Visual 01" }`,
   `{ src: "/immobilien-visualisierung-rendering-01.webp", alt: "3D Immobilien Visualisierung – Rendering 01 | BogiVisual" }`],
  [`{ src: "/bogi2.jpg", alt: "Hero Visual 02" }`,
   `{ src: "/immobilien-visualisierung-rendering-02.webp", alt: "3D Immobilien Visualisierung – Rendering 02 | BogiVisual" }`],
  [`{ src: "/bogi3.jpg", alt: "Hero Visual 03" }`,
   `{ src: "/immobilien-visualisierung-rendering-03.webp", alt: "3D Immobilien Visualisierung – Rendering 03 | BogiVisual" }`],
  [`{ src: "/bogi4.jpg", alt: "Hero Visual 04" }`,
   `{ src: "/immobilien-visualisierung-rendering-04.webp", alt: "3D Immobilien Visualisierung – Rendering 04 | BogiVisual" }`],

  // ── Benefit slides ────────────────────────────────────────────────────────
  [`img: { src: "/benefit1.jpg", alt: "Vorteil: Emotion" }`,
   `img: { src: "/immobilien-visualisierung-vorteil-emotion.webp", alt: "Emotion als Kaufentscheidung – 3D Immobilien Visualisierung" }`],
  [`img: { src: "/benefit2.jpg", alt: "Vorteil: Premium" }`,
   `img: { src: "/immobilien-visualisierung-vorteil-premium.webp", alt: "Premium-Qualität durch hochwertige Immobilien Visualisierung" }`],
  [`img: { src: "/benefit3.jpg", alt: "Vorteil: Geschwindigkeit" }`,
   `img: { src: "/immobilien-visualisierung-vorteil-geschwindigkeit.webp", alt: "Schnellere Vermarktung mit 3D Immobilien Renderings" }`],
  [`img: { src: "/benefit4.jpg", alt: "Vorteil: Marketing" }`,
   `img: { src: "/immobilien-visualisierung-vorteil-marketing.webp", alt: "Immobilien Marketing mit professionellen 3D Visualisierungen" }`],

  // ── Work images (template literal) ───────────────────────────────────────
  [
    "src: `/${i + 1}.jpg`,\n        alt: `Meine Arbeit ${i + 1}`,",
    "src: `/immobilien-rendering-portfolio-${String(i + 1).padStart(2, '0')}.webp`,\n        alt: `3D Immobilien Rendering Portfolio – Projekt ${i + 1} | BogiVisual`,",
  ],

  // ── Case studies – primary ────────────────────────────────────────────────
  [`primary: { src: "/primaer1.jpg", alt: "primaerbild 1" }`,
   `primary: { src: "/immobilien-3d-rendering-fallstudie-01.webp", alt: "3D Rendering Fallstudie 1 – Immobilien Visualisierung" }`],
  [`primary: { src: "/primaer2.jpg", alt: "primaerbild 2" }`,
   `primary: { src: "/immobilien-3d-rendering-fallstudie-02.webp", alt: "3D Rendering Fallstudie 2 – Immobilien Visualisierung" }`],
  [`primary: { src: "/primaer3.jpg", alt: "primaerbild 3" }`,
   `primary: { src: "/immobilien-3d-rendering-fallstudie-03.webp", alt: "3D Rendering Fallstudie 3 – Immobilien Visualisierung" }`],

  // ── Case studies – secondary ──────────────────────────────────────────────
  [`{ src: "/sekundaer1.jpg", alt: "sekundaer 1" }`,
   `{ src: "/immobilien-3d-rendering-fallstudie-01a.webp", alt: "Detailansicht Fallstudie 1 – 3D Immobilien Rendering A" }`],
  [`{ src: "/sekundaer11.jpg", alt: "sekundaer 1.1" }`,
   `{ src: "/immobilien-3d-rendering-fallstudie-01b.webp", alt: "Detailansicht Fallstudie 1 – 3D Immobilien Rendering B" }`],
  [`{ src: "/sekundaer111.jpg", alt: "sekundaer 1.11" }`,
   `{ src: "/immobilien-3d-rendering-fallstudie-01c.webp", alt: "Detailansicht Fallstudie 1 – 3D Immobilien Rendering C" }`],
  [`{ src: "/sekundaer2.jpg", alt: "sekundaer 2" }`,
   `{ src: "/immobilien-3d-rendering-fallstudie-02a.webp", alt: "Detailansicht Fallstudie 2 – 3D Immobilien Rendering A" }`],
  [`{ src: "/sekundaer22.jpg", alt: "sekundaer 2.2" }`,
   `{ src: "/immobilien-3d-rendering-fallstudie-02b.webp", alt: "Detailansicht Fallstudie 2 – 3D Immobilien Rendering B" }`],
  [`{ src: "/sekundaer222.jpg", alt: "sekundaer 2.22" }`,
   `{ src: "/immobilien-3d-rendering-fallstudie-02c.webp", alt: "Detailansicht Fallstudie 2 – 3D Immobilien Rendering C" }`],
  [`{ src: "/sekundaer3.jpg", alt: "sekundaer 3" }`,
   `{ src: "/immobilien-3d-rendering-fallstudie-03a.webp", alt: "Detailansicht Fallstudie 3 – 3D Immobilien Rendering A" }`],
  [`{ src: "/sekundaer33.jpg", alt: "sekundaer 3.3" }`,
   `{ src: "/immobilien-3d-rendering-fallstudie-03b.webp", alt: "Detailansicht Fallstudie 3 – 3D Immobilien Rendering B" }`],
  [`{ src: "/sekundaer333.jpg", alt: "sekundaer 3.33" }`,
   `{ src: "/immobilien-3d-rendering-fallstudie-03c.webp", alt: "Detailansicht Fallstudie 3 – 3D Immobilien Rendering C" }`],

  // ── Before / after ────────────────────────────────────────────────────────
  [`before: "/vorher1.jpg",\n        after: "/nachher1.jpg",\n        alt: "Vorher/Nachher 1",`,
   `before: "/immobilien-visualisierung-vorher-01.webp",\n        after: "/immobilien-visualisierung-nachher-01.webp",\n        alt: "Immobilien 3D Visualisierung: Vorher-Nachher Vergleich 1",`],
  [`before: "/vorher2.jpg",\n        after: "/nachher2.jpg",\n        alt: "Vorher/Nachher 2",`,
   `before: "/immobilien-visualisierung-vorher-02.webp",\n        after: "/immobilien-visualisierung-nachher-02.webp",\n        alt: "Immobilien 3D Visualisierung: Vorher-Nachher Vergleich 2",`],
  [`before: "/vorher3.jpg",\n        after: "/nachher3.jpg",\n        alt: "Vorher/Nachher 3",`,
   `before: "/immobilien-visualisierung-vorher-03.webp",\n        after: "/immobilien-visualisierung-nachher-03.webp",\n        alt: "Immobilien 3D Visualisierung: Vorher-Nachher Vergleich 3",`],

  // version1/2 before-after (different surrounding whitespace)
  [`{ before: "/vorher1.jpg", after: "/nachher1.jpg", alt: "Vorher/Nachher 1" }`,
   `{ before: "/immobilien-visualisierung-vorher-01.webp", after: "/immobilien-visualisierung-nachher-01.webp", alt: "Immobilien 3D Visualisierung: Vorher-Nachher Vergleich 1" }`],
  [`{ before: "/vorher2.jpg", after: "/nachher2.jpg", alt: "Vorher/Nachher 2" }`,
   `{ before: "/immobilien-visualisierung-vorher-02.webp", after: "/immobilien-visualisierung-nachher-02.webp", alt: "Immobilien 3D Visualisierung: Vorher-Nachher Vergleich 2" }`],
  [`{ before: "/vorher3.jpg", after: "/nachher3.jpg", alt: "Vorher/Nachher 3" }`,
   `{ before: "/immobilien-visualisierung-vorher-03.webp", after: "/immobilien-visualisierung-nachher-03.webp", alt: "Immobilien 3D Visualisierung: Vorher-Nachher Vergleich 3" }`],

  // ── Partner logos ─────────────────────────────────────────────────────────
  [`{ src: "/bogiref1.jpg", alt: "Partner 1" }`,
   `{ src: "/bogivisual-referenz-partner-01.webp", alt: "Referenz Partner 1 – BogiVisual Immobilien Visualisierung" }`],
  [`{ src: "/bogiref2.jpg", alt: "Partner 2" }`,
   `{ src: "/bogivisual-referenz-partner-02.webp", alt: "Referenz Partner 2 – BogiVisual Immobilien Visualisierung" }`],
  [`{ src: "/bogiref3.jpg", alt: "Partner 3" }`,
   `{ src: "/bogivisual-referenz-partner-03.webp", alt: "Referenz Partner 3 – BogiVisual Immobilien Visualisierung" }`],
  [`{ src: "/bogiref4.jpg", alt: "Partner 4" }`,
   `{ src: "/bogivisual-referenz-partner-04.webp", alt: "Referenz Partner 4 – BogiVisual Immobilien Visualisierung" }`],
  [`{ src: "/bogiref5.jpg", alt: "Partner 5" }`,
   `{ src: "/bogivisual-referenz-partner-05.webp", alt: "Referenz Partner 5 – BogiVisual Immobilien Visualisierung" }`],
  [`{ src: "/bogiref6.jpg", alt: "Partner 6" }`,
   `{ src: "/bogivisual-referenz-partner-06.webp", alt: "Referenz Partner 6 – BogiVisual Immobilien Visualisierung" }`],
  [`{ src: "/bogiref7.jpg", alt: "Partner 7" }`,
   `{ src: "/bogivisual-referenz-partner-07.webp", alt: "Referenz Partner 7 – BogiVisual Immobilien Visualisierung" }`],
  [`{ src: "/bogiref8.jpg", alt: "Partner 8" }`,
   `{ src: "/bogivisual-referenz-partner-08.webp", alt: "Referenz Partner 8 – BogiVisual Immobilien Visualisierung" }`],
  [`{ src: "/bogiref9.jpg", alt: "Partner 9" }`,
   `{ src: "/bogivisual-referenz-partner-09.webp", alt: "Referenz Partner 9 – BogiVisual Immobilien Visualisierung" }`],
  [`{ src: "/bogiref10.jpg", alt: "Partner 10" }`,
   `{ src: "/bogivisual-referenz-partner-10.webp", alt: "Referenz Partner 10 – BogiVisual Immobilien Visualisierung" }`],
  [`{ src: "/bogiref11.jpg", alt: "Partner 11" }`,
   `{ src: "/bogivisual-referenz-partner-11.webp", alt: "Referenz Partner 11 – BogiVisual Immobilien Visualisierung" }`],

  // ── Logo (JSX attribute, page.tsx / version3 / danke / datenschutz / impressum) ──
  [`src="/Logo_bogiVisual_Standard.png"`,
   `src="/bogivisual-logo-immobilien-visualisierung.webp"`],

  // ── Logo (version1/2 use logobogi.png) ───────────────────────────────────
  [`src="/logobogi.png"`,
   `src="/bogivisual-logo-horizontal.webp"`],

  // ── Portrait ──────────────────────────────────────────────────────────────
  [`src="/bogiportrait.jpg"`,
   `src="/boglarka-czupifarkas-immobilien-visualisiererin.webp"`],

  // ── Danke page collage (plain JSX props, no object literal) ──────────────
  [`src="/bogi1.jpg"`, `src="/immobilien-visualisierung-rendering-01.webp"`],
  [`src="/bogi2.jpg"`, `src="/immobilien-visualisierung-rendering-02.webp"`],
  [`src="/bogi3.jpg"`, `src="/immobilien-visualisierung-rendering-03.webp"`],
  [`src="/bogi4.jpg"`, `src="/immobilien-visualisierung-rendering-04.webp"`],
];

// ─── Files to process ────────────────────────────────────────────────────────
const FILES = [
  'src/app/page.tsx',
  'src/app/version1/page.tsx',
  'src/app/version2/page.tsx',
  'src/app/version3/page.tsx',
  'src/app/danke/page.tsx',
  'src/app/datenschutz/page.tsx',
  'src/app/impressum/page.tsx',
].map(f => path.resolve(f));

async function processFile(filePath) {
  let content = await readFile(filePath, 'utf-8');
  let changed = 0;

  for (const [search, replace] of REPLACEMENTS) {
    if (content.includes(search)) {
      content = content.split(search).join(replace);
      changed++;
    }
  }

  if (changed > 0) {
    await writeFile(filePath, content, 'utf-8');
    console.log(`  ${path.relative(process.cwd(), filePath)}: ${changed} replacement(s)`);
  } else {
    console.log(`  ${path.relative(process.cwd(), filePath)}: no changes`);
  }
}

async function main() {
  for (const f of FILES) {
    await processFile(f);
  }
  console.log('\nDone.');
}

main();
