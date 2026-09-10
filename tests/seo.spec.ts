import { expect, test } from '@playwright/test';

const siteUrl = 'https://perfectdental.kz';
const routes = [
  '/',
  '/services',
  '/services/microscope-treatment',
  '/services/implantation',
  '/services/surgery',
  '/services/orthopedics',
  '/services/orthodontics',
  '/services/periodontology',
  '/services/gnathology',
  '/services/diagnostics',
  '/services/emergency',
  '/doctors',
  '/equipment',
  '/results',
  '/reviews',
  '/contacts',
  '/privacy',
];

test('all public pages have complete and unique indexable metadata', async ({ page }) => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();

  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', 'ru-KZ');
    await expect(page.locator('h1'), `${route} must have one H1`).toHaveCount(1);

    const title = await page.title();
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(title.length, `${route} title`).toBeGreaterThanOrEqual(25);
    expect(description?.length ?? 0, `${route} description`).toBeGreaterThanOrEqual(70);
    expect(titles.has(title), `${route} duplicate title`).toBe(false);
    expect(descriptions.has(description ?? ''), `${route} duplicate description`).toBe(false);
    titles.add(title);
    descriptions.add(description ?? '');

    const canonical = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', canonical);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index, follow');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', title);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', canonical);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /^https:\/\/perfectdental\.kz\//);
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute('content', title);
  }
});

test('clinic and service structured data are valid JSON-LD', async ({ page }) => {
  await page.goto('/');
  const rootSchemas = await page.locator('script[type="application/ld+json"]').allTextContents();
  const rootGraph = rootSchemas.map((schema) => JSON.parse(schema)).find((schema) => schema['@graph'])['@graph'];
  expect(rootGraph.some((entry: { '@id'?: string }) => entry['@id'] === `${siteUrl}/#clinic`)).toBe(true);
  expect(rootGraph.some((entry: { '@id'?: string }) => entry['@id'] === `${siteUrl}/#website`)).toBe(true);

  await page.goto('/services/implantation');
  const serviceSchemas = (await page.locator('script[type="application/ld+json"]').allTextContents()).map((schema) => JSON.parse(schema));
  const serviceGraph = serviceSchemas.find((schema) => schema['@graph']?.some((entry: { '@type'?: string }) => entry['@type'] === 'Service'))['@graph'];
  expect(serviceGraph.some((entry: { '@type'?: string }) => entry['@type'] === 'Service')).toBe(true);
  expect(serviceGraph.some((entry: { '@type'?: string }) => entry['@type'] === 'BreadcrumbList')).toBe(true);
});

test('robots, sitemap and 404 expose correct crawler signals', async ({ page, request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${siteUrl}/sitemap.xml`);

  const sitemap = await request.get('/sitemap.xml');
  const sitemapXml = await sitemap.text();
  expect(sitemap.status()).toBe(200);
  for (const route of routes) {
    const canonical = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
    expect(sitemapXml, route).toContain(`<loc>${canonical}</loc>`);
  }
  expect(sitemapXml.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g)).toHaveLength(routes.length);

  const notFound = await page.goto('/seo-check-missing-page');
  expect(notFound?.status()).toBe(404);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex,\s*nofollow/);
});
