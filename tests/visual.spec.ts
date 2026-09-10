import { expect, test } from '@playwright/test';

const routes = [
  { path: '/', name: 'home' },
  { path: '/services', name: 'services' },
  { path: '/services/microscope-treatment', name: 'microscope-treatment' },
  { path: '/services/implantation', name: 'implantation' },
  { path: '/services/periodontology', name: 'periodontology' },
  { path: '/services/gnathology', name: 'gnathology' },
  { path: '/services/diagnostics', name: 'diagnostics' },
  { path: '/services/emergency', name: 'emergency' },
  { path: '/equipment', name: 'equipment' },
  { path: '/doctors', name: 'doctors' },
  { path: '/results', name: 'results' },
  { path: '/reviews', name: 'reviews' },
  { path: '/contacts', name: 'contacts' },
  { path: '/privacy', name: 'privacy' },
];
const viewports = [
  { width: 360, height: 800 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1024, height: 900 },
  { width: 1440, height: 1000 },
];

for (const route of routes) {
  for (const viewport of viewports) {
    test(`${route.name} ${viewport.width}px visual`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto(route.path);
      await page.addStyleTag({ content: 'iframe { visibility: hidden !important; }' });
      await page.evaluate(() => document.fonts.ready);
      for (const image of await page.locator('main img').all()) {
        await image.scrollIntoViewIfNeeded();
        await expect(image).toHaveJSProperty('complete', true);
        expect(await image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await expect(page).toHaveScreenshot(`${route.name}-${viewport.width}.png`, { fullPage: true, animations: 'disabled', maxDiffPixelRatio: 0.02 });
    });
  }
}
