// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - Hero Section', () => {
  test('Verify hero content displays correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    // Check hero-badge element contains correct text
    await expect(page.getByText('Engineer · Builder · Advocate')).toBeVisible();

    // Check hero-title element contains 'Luc Herlitz'
    await expect(page.getByRole('heading', { name: 'Luc Herlitz' })).toBeVisible();

    // Check hero-subtitle element exists
    const heroSubtitle = page.locator('.hero-subtitle, .hero p');
    await expect(heroSubtitle.first()).toBeVisible();
  });

  test('Verify hero CTA buttons', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    // Click Get in Touch button; verify it scrolls to contact section
    await page.locator('.hero-actions a[href="#contact"]').click();
    // Wait for smooth scroll to complete and verify contact section is in view
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeInViewport();

    // Click See My Work button; verify it scrolls to experience section
    await page.locator('.hero-actions a[href="#experience"]').click();
    // Wait for smooth scroll to complete and verify experience section is in view
    const experienceSection = page.locator('#experience');
    await expect(experienceSection).toBeInViewport();
  });
});