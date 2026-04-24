// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - Responsive Behavior', () => {
  test('Verify mobile layout at 375px width', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:8080/index.html');

    // Verify nav-toggle button is visible on mobile
    const navToggle = page.locator('.nav-toggle');
    await expect(navToggle).toBeVisible();

    // Check hero-title is visible and readable
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Verify tablet layout at 768px width', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('http://localhost:8080/index.html');

    // Check hero-title is visible
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Verify desktop layout at 1200px width', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('http://localhost:8080/index.html');

    // Verify nav-links is visible on desktop
    const navLinks = page.locator('.nav-links');
    await expect(navLinks).toBeVisible();

    // Verify nav-toggle is hidden on desktop
    const navToggle = page.locator('.nav-toggle');
    await expect(navToggle).not.toBeVisible();
  });
});