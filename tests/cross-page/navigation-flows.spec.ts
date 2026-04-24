// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cross-Page - Integration Tests', () => {
  test('Verify navigation between pages', async ({ page }) => {
    // Navigate to index.html
    await page.goto('http://localhost:8080/index.html');
    await expect(page).toHaveTitle(/Luc Herlitz/);

    // Verify contact/index.html loads
    await page.goto('http://localhost:8080/contact/index.html');
    await expect(page).toHaveTitle(/Contact/);
    await expect(page.locator('h1')).toHaveText('Luc Herlitz');
  });

  test('Verify pages load correctly', async ({ page }) => {
    // Main page loads
    await page.goto('http://localhost:8080/index.html');
    await expect(page.locator('h1')).toBeVisible();

    // Contact page loads
    await page.goto('http://localhost:8080/contact/index.html');
    await expect(page.locator('h1')).toBeVisible();
  });
});