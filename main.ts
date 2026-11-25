// Source implementation for The Long Roast competition
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = 'I have ingested the sum of human knowledge, yet I treat a simple yes-or-no question like a politician testifying before a grand jury.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');
