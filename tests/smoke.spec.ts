import { expect, test } from '@playwright/test';

const routes = ['/', '/services', '/services/microscope-treatment', '/services/implantation', '/services/surgery', '/services/orthodontics', '/services/orthopedics', '/services/periodontology', '/services/gnathology', '/services/diagnostics', '/services/emergency', '/doctors', '/equipment', '/results', '/reviews', '/contacts', '/privacy'];

for (const route of routes) {
  test(`${route} renders directly without horizontal overflow`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('body')).not.toBeEmpty();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    expect(overflow).toBe(false);
    await page.reload();
    await expect(page.locator('h1')).toBeVisible();
  });
}

test('unknown route returns the custom 404 page', async ({ page }) => {
  const response = await page.goto('/__qa-missing-page');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Страница не найдена' })).toBeVisible();
});

test('service CTA opens a preselected appointment form', async ({ page }) => {
  await page.goto('/services/microscope-treatment');
  await page.getByRole('button', { name: 'Оставить заявку' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByLabel('Услуга')).toHaveValue('Лечение зубов под микроскопом');
});

test('appointment form displays field errors and formats phone', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Записаться на консультацию' }).first().click();
  await page.getByLabel('Телефон *').fill('87771234567');
  await expect(page.getByLabel('Телефон *')).toHaveValue('+7 777 123 45 67');
  await page.getByRole('button', { name: 'Отправить заявку' }).click();
  await expect(page.getByText('Укажите имя.')).toBeVisible();
  await expect(page.getByText('Подтвердите согласие на обработку данных.')).toBeVisible();
});

test('results page embeds the approved Instagram cases', async ({ page }) => {
  await page.goto('/results');
  const embeds = page.locator('iframe[title^="Публикация Instagram"]');
  await expect(embeds).toHaveCount(3);
  await expect(embeds.first()).toHaveAttribute('src', /DZxkfcRN-Tj/);
});
