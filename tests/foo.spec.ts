import { test, expect } from '@playwright/test';

test.use({ screenshot: 'only-on-failure' });

test('test', async ({ page }) => {
  // Go to https://www.shopathome.dev/
  await page.goto('https://www.shopathome.dev/');

  // Go to https://www.shopathome.dev/home
  await page.goto('https://www.shopathome.dev/home');

  // Click text=github
  await page.click('text=github');
  expect(page.url()).toContain('https://github.com/login');

  // Click input[name="login"]
  await page.click('input[name="login"]');

  // Fill input[name="login"]
  await page.fill('input[name="login"]', 'mcflyx86');

  // Press Tab
  await page.press('input[name="login"]', 'Tab');

  // Fill input[name="password"]
  await page.fill('input[name="password"]', 'Xasiteci26');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(),
    page.press('input[name="password"]', 'Enter')
  ]);

  // Click [aria-label="My List"]
  await page.click('[aria-label="My List"]');
  expect(page.url()).toBe('https://www.shopathome.dev/products');

  // Click text=Strawberries
  const element = await page.waitForSelector('text=Strawberries');
  expect(element).toBeTruthy();
});