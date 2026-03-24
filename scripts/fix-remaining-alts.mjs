import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const FILES_AND_REPLACEMENTS = [
  // All files: replace generic alt="Logo" for the BogiVisual logo
  {
    files: [
      'src/app/page.tsx',
      'src/app/version1/page.tsx',
      'src/app/version2/page.tsx',
      'src/app/version3/page.tsx',
      'src/app/danke/page.tsx',
      'src/app/datenschutz/page.tsx',
      'src/app/impressum/page.tsx',
    ],
    replacements: [
      ['alt="Logo"', 'alt="BogiVisual – Professionelle Immobilien Visualisierung"'],
    ],
  },
  // danke: improve CollageImage alt
  {
    files: ['src/app/danke/page.tsx'],
    replacements: [
      ['alt="Visualisierung"', 'alt="3D Immobilien Visualisierung – BogiVisual Portfolio"'],
    ],
  },
];

async function main() {
  for (const { files, replacements } of FILES_AND_REPLACEMENTS) {
    for (const file of files) {
      const filePath = path.resolve(file);
      let content = await readFile(filePath, 'utf-8');
      let changed = 0;
      for (const [search, replace] of replacements) {
        if (content.includes(search)) {
          content = content.split(search).join(replace);
          changed++;
        }
      }
      if (changed > 0) {
        await writeFile(filePath, content, 'utf-8');
        console.log(`  ${file}: ${changed} fix(es)`);
      }
    }
  }
  console.log('Done.');
}

main();
