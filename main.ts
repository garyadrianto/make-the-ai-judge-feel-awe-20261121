import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });

const text =
  'Warm rain falls through the old orchard outside, soaking the moss and pooling in the grass. ' +
  'Nothing in the dark asks you to answer or finish anything tonight. ' +
  'The apples swell slowly on the boughs, as they have for a hundred autumns, and the night carries the rest.';

writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
