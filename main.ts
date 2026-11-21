import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });

const text =
  'Warm rain falls through an old orchard all evening, soaking the moss on the bark and pooling in the grass. ' +
  'Nobody is out to watch it, and nothing in the trees asks to be answered or kept. ' +
  'The apples swell slowly in the dark, as they have for a hundred autumns.';

writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
