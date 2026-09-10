import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const sourceRoot = path.join(process.cwd(), 'src');
const forbidden = [
  { label: 'старый бренд DENTA', pattern: /\bDENTA\b/i },
  { label: 'старый город Алматы', pattern: /Алматы/i },
  { label: 'вымышленная цена', pattern: /\d[\d\s]*(?:₸|тенге)/i },
  { label: 'неподтверждённая гарантия', pattern: /гарантия\s+(?:на|от)\s+\d/i },
  { label: 'вымышленный врач', pattern: /Берикжанов|Смагулова|Алиев Арман|Серикова Дина/i },
  { label: 'ошибочное ограничение только для взрослых', pattern: /стоматологи(?:я|ческая помощь)\s+для взрослых/i },
];

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(absolute) : [absolute];
  }));
  return nested.flat().filter((file) => /\.(?:ts|tsx|css)$/.test(file));
}

const violations = [];
for (const file of await listFiles(sourceRoot)) {
  const text = await readFile(file, 'utf8');
  for (const rule of forbidden) if (rule.pattern.test(text)) violations.push(`${path.relative(process.cwd(), file)}: ${rule.label}`);
}

if (violations.length) {
  console.error(`Content check failed:\n${violations.join('\n')}`);
  process.exit(1);
}
console.log('Content check passed.');
