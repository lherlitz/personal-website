// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Contact Page - Basic Tests', () => {
  test('Verify contact page loads', async ({ page }) => {
    await page.goto('http://localhost:8080/contact/index.html');

    // Check page title includes 'Contact'
    await expect(page).toHaveTitle(/Contact/);

    // Find h1 element; verify shows 'Luc Herlitz'
    await expect(page.locator('h1')).toHaveText('Luc Herlitz');

    // Find title element; verify shows 'Product Specialist'
    await expect(page.locator('.title, .subtitle')).toHaveText('Product Specialist');
  });

  test('Verify contact page links', async ({ page }) => {
    await page.goto('http://localhost:8080/contact/index.html');

    // Find call quick action button
    const callLink = page.locator('a[href^="tel:"]').first();
    await expect(callLink).toHaveAttribute('href', /^tel:/);

    // Find email quick action button
    const emailLink = page.locator('a[href^="mailto:"]').first();
    await expect(emailLink).toHaveAttribute('href', /^mailto:/);

    // Find map quick action button
    const mapLink = page.locator('a[href*="maps.google.com"]').first();
    await expect(mapLink).toHaveAttribute('href', /maps\.google\.com/);
  });

  test('Verify contact information list', async ({ page }) => {
    await page.goto('http://localhost:8080/contact/index.html');

    const contactItems = page.locator('.contact-item');

    // Verify we have 4 contact items
    await expect(contactItems).toHaveCount(4);
  });

  test('Verify location section', async ({ page }) => {
    await page.goto('http://localhost:8080/contact/index.html');

    // Verify address contains Rossford, OH
    await expect(page.locator('body')).toHaveText(/Rossford/);
  });

  test('Verify organization section', async ({ page }) => {
    await page.goto('http://localhost:8080/contact/index.html');

    // Verify organization link exists
    const orgLink = page.locator('a[href*="campingworld"]');
    await expect(orgLink.first()).toBeVisible();
  });
});