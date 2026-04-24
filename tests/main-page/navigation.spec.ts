// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - Navigation & Scroll', () => {
  test('Verify main navigation links work', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    // Click nav link for About; verify section scrolls into view
    await page.locator('nav a[href="#about"]').click();
    // Wait for scroll animation and verify target section is in viewport
    await page.locator('#about').scrollIntoViewIfNeeded();
    await expect(page.locator('#about')).toBeVisible();

    // Click nav link for Experience; verify section scrolls into view
    await page.locator('nav a[href="#experience"]').click();
    await page.locator('#experience').scrollIntoViewIfNeeded();
    await expect(page.locator('#experience')).toBeVisible();

    // Click nav link for Projects; verify section scrolls into view
    await page.locator('nav a[href="#projects"]').click();
    await page.locator('#projects').scrollIntoViewIfNeeded();
    await expect(page.locator('#projects')).toBeVisible();

    // Click nav link for Skills; verify section scrolls into view
    await page.locator('nav a[href="#skills"]').click();
    await page.locator('#skills').scrollIntoViewIfNeeded();
    await expect(page.locator('#skills')).toBeVisible();

    // Click nav link for Testimonials; verify section scrolls into view
    await page.locator('nav a[href="#testimonials"]').click();
    await page.locator('#testimonials').scrollIntoViewIfNeeded();
    await expect(page.locator('#testimonials')).toBeVisible();

    // Click nav link for Contact; verify section scrolls into view
    await page.locator('nav a[href="#contact"]').click();
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('Verify navigation sticky behavior', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const nav = page.locator('nav');

    // Scroll down 400px; verify nav element has class 'scrolled' or style changes
    await page.evaluate(() => window.scrollTo(0, 400));
    await expect(nav).toHaveClass(/scrolled/);

    // Scroll to top; verify nav does not have 'scrolled' class
    await page.evaluate(() => window.scrollTo(0, 0));
    // At top, scrolled class should be removed
    await expect(nav).not.toHaveClass(/scrolled/);
  });

  test('Verify mobile navigation toggle', async ({ page }) => {
    // Set viewport to mobile size (e.g., 375x667); verify toggle button visible
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:8080/index.html');

    const navToggle = page.locator('.nav-toggle');
    const navLinks = page.locator('.nav-links');

    // Verify toggle button visible on mobile
    await expect(navToggle).toBeVisible();

    // Click nav-toggle button; verify nav-links has 'open' class or menu displays
    await navToggle.click();
    await expect(navLinks).toHaveClass(/open/);

    // Click toggle button again; verify nav-links no longer has 'open' class
    await navToggle.click();
    await expect(navLinks).not.toHaveClass(/open/);
  });
});