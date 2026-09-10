import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const equipmentDir = path.join(root, 'public/images/equipment');
const brandDir = path.join(root, 'public/images/brand');

await mkdir(equipmentDir, { recursive: true });

for (const name of ['doctor-smile-pluser', 'digital-3d-diagnostics', 'intraoral-scanner']) {
  await sharp(path.join(equipmentDir, `${name}.webp`))
    .avif({ quality: 72, effort: 6 })
    .toFile(path.join(equipmentDir, `${name}.avif`));
}

const background = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="82%" cy="14%" r="70%">
        <stop offset="0" stop-color="#70c7c5" stop-opacity=".36"/>
        <stop offset="1" stop-color="#124346" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M44 0H0V44" fill="none" stroke="#ffffff" stroke-opacity=".055"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="#124346"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <rect x="64" y="52" width="206" height="70" rx="20" fill="#ffffff"/>
    <text x="68" y="205" fill="#bcebef" font-family="Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="3">СТОМАТОЛОГИЯ В АСТАНЕ</text>
    <text x="68" y="284" fill="#ffffff" font-family="Arial, sans-serif" font-size="58" font-weight="700">Точное лечение.</text>
    <text x="68" y="354" fill="#ffffff" font-family="Arial, sans-serif" font-size="58" font-weight="700">Спокойная атмосфера.</text>
    <text x="68" y="427" fill="#ffffff" fill-opacity=".72" font-family="Arial, sans-serif" font-size="23">Диагностика, микроскоп и лазерные технологии</text>
    <text x="68" y="526" fill="#ffffff" font-family="Arial, sans-serif" font-size="22" font-weight="700">perfectdental.kz</text>
    <rect x="690" y="76" width="444" height="478" rx="38" fill="#ffffff" fill-opacity=".96"/>
  </svg>`);

const logo = await sharp(path.join(brandDir, 'perfect-dental-logo.png')).resize({ width: 170, height: 58, fit: 'contain' }).png().toBuffer();
const equipment = await sharp(path.join(equipmentDir, 'doctor-smile-pluser.webp')).resize({ width: 408, height: 430, fit: 'contain', background: '#ffffff' }).png().toBuffer();

await sharp(background)
  .composite([
    { input: logo, left: 82, top: 58 },
    { input: equipment, left: 708, top: 98 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(path.join(brandDir, 'og-perfect-dental.png'));

console.log('Generated AVIF equipment assets and OG image.');
