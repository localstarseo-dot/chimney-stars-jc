/* Regenerate delivery PNGs from untouched brand masters. Exact filenames are preserved. */
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('/Users/radznasaudia/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');

const project = path.resolve(__dirname, '..');
const sourceRoot = '/Users/radznasaudia/Desktop/Chimney Stars Brand Assets';
const targetRoot = path.join(project, 'assets/photos');

async function main() {
  const relativePaths = fs.readdirSync(targetRoot, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .flatMap(entry => fs.readdirSync(path.join(targetRoot, entry.name))
      .filter(name => name.endsWith('.png'))
      .map(name => path.join(entry.name, name)));
  const hero = 'Black Uniform/chimney_star_rooftop_repair_crew.png';
  if (!relativePaths.includes(hero)) relativePaths.push(hero);
  const manifest = [];
  for (const relativePath of relativePaths.sort()) {
    const sourcePath = path.join(sourceRoot, relativePath);
    const optimizedPath = path.join(targetRoot, relativePath);
    if (sourcePath === optimizedPath) throw new Error('Source master must never be overwritten.');
    const original = await sharp(sourcePath).metadata();
    const maxEdge = relativePath === hero ? 1440 : relativePath.endsWith('chimney-star-team-photo-01.png') ? 1200 : 900;
    const resize = relativePath.startsWith('Before And After/')
      ? { width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true }
      : { width: maxEdge, withoutEnlargement: true };
    const result = await sharp(sourcePath).rotate().resize(resize)
      .png({ palette: true, quality: 85, effort: 10, compressionLevel: 9 })
      .toFile(optimizedPath);
    manifest.push({
      filename: path.basename(relativePath),
      source_path: sourcePath,
      optimized_path: 'assets/photos/' + relativePath,
      original_width: original.width,
      original_height: original.height,
      width: result.width,
      height: result.height,
      original_bytes: fs.statSync(sourcePath).size,
      optimized_bytes: result.size,
      wp_url: null
    });
  }
  process.stdout.write(JSON.stringify({
    note: 'Exact source filenames retained. Delivery PNGs are resized and palette-quantized; original brand masters are unchanged. Replace wp_url after WordPress upload because WordPress may sanitize spaces, colons and ampersands.',
    images: manifest
  }, null, 2));
}

main().catch(error => { console.error(error); process.exitCode = 1; });
