import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = ['/', '/services', '/services/microscope-treatment', '/services/implantation', '/services/surgery', '/services/orthodontics', '/services/orthopedics', '/services/periodontology', '/services/gnathology', '/services/diagnostics', '/services/emergency', '/doctors', '/equipment', '/results', '/reviews', '/contacts', '/privacy'];

for (const route of routes) {
  test(`${route} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(route);
    // Instagram owns the embed document; audit the accessible iframe title and our surrounding UI here.
    const results = await new AxeBuilder({ page }).exclude('iframe').analyze();
    const serious = results.violations.filter((violation) => violation.impact === 'critical' || violation.impact === 'serious');
    expect(serious).toEqual([]);
  });
}
