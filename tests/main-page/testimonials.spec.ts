// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - Testimonials Section', () => {
  test('Verify testimonials content loads', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const testimonialsSection = page.locator('#testimonials');

    // Check section-tag shows 'Testimonials'
    await expect(testimonialsSection.locator('.section-tag')).toHaveText('Testimonials');

    // Find 'View All on LinkedIn' button at the bottom of the section
    const linkedInLink = testimonialsSection.locator('.btn').or(testimonialsSection.locator('a:has-text("View All on LinkedIn")'));
    await expect(linkedInLink).toBeVisible();
  });
});