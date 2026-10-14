import { readdir, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const root = process.cwd();
const publicRoot = join(root, 'public');
const entries = await readdir(publicRoot, { recursive: true, withFileTypes: true });
const paths = entries.filter(entry => entry.isFile()).map(entry =>
  '/' + relative(publicRoot, join(entry.parentPath, entry.name)).split(sep).join('/')
);
await writeFile(join(root, 'lib/public-assets.json'), JSON.stringify(paths, null, 2) + '\n');
