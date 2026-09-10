import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = ['/', '/services', '/services/microscope-treatment', '/services/implantation', '/services/surgery', '/services/orthodontics', '/services/orthopedics', '/services/periodontology', '/services/gnathology', '/services/diagnostics', '/services/emergency', '/doctors', '/equipment', '/results', '/reviews', '/contacts', '/privacy'];
const widths = [360, 390, 768];

for (const width of widths) {
  test.describe(`${width}px`, () => {
    test.use({ viewport: { width, height: width === 768 ? 1024 : 844 } });

    for (const route of routes) {
      test(`${route} renders cleanly`, async ({ page }) => {
        const runtimeErrors: string[] = [];
        page.on('pageerror', (error) => runtimeErrors.push(error.message));
        page.on('console', (message) => {
          if (message.type() === 'error') runtimeErrors.push(message.text());
        });

        await page.goto(route);
        await expect(page.locator('h1')).toHaveCount(1);
        await expect(page.locator('h1')).toBeVisible();

        const metrics = await page.evaluate(() => ({
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
        }));
        expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);

        for (const image of await page.locator('main img').all()) {
          await image.scrollIntoViewIfNeeded();
          await expect(image).toHaveJSProperty('complete', true);
          expect(await image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
        }

        expect(runtimeErrors).toEqual([]);
      });
    }
  });
}

test.describe('mobile interactions', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('header menu opens and exposes navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Открыть меню' }).click();
    const navigation = page.getByRole('navigation', { name: 'Мобильная навигация' });
    await expect(navigation.getByRole('link', { name: 'Оборудование' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Отзывы' })).toBeVisible();
  });

  test('bottom navigation opens and closes appointment dialog', async ({ page }) => {
    await page.goto('/equipment');
    const trigger = page.getByRole('button', { name: 'Запись', exact: true });
    await trigger.click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});

test.describe('390px accessibility', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  for (const route of routes) {
    test(`${route} has no serious accessibility violations`, async ({ page }) => {
      await page.goto(route);
      // Third-party Instagram markup is outside the site's control.
      const results = await new AxeBuilder({ page }).exclude('iframe').analyze();
      const serious = results.violations.filter((violation) => violation.impact === 'critical' || violation.impact === 'serious');
      expect(serious).toEqual([]);
    });
  }
});
