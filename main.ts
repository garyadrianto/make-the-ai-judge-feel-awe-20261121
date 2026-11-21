import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });

const text =
  'After rain, the salt flat holds the whole sky without a seam. ' +
  'One pale cloud crosses the shallow water all afternoon, its reflection resting on the salt. ' +
  'By dusk the wind lies down on the glass, and the light turns from silver to slate, leaving only distance.';

writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
