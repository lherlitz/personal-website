// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - About Section', () => {
  test('Verify about section content', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    // Check section-tag in #about section shows 'About'
    const aboutSection = page.locator('#about');
    await expect(aboutSection.locator('.section-tag')).toHaveText('About');

    // Check h2 element in #about section
    await expect(aboutSection.locator('h2')).toHaveText('The short version');

    // Check about-text element has paragraph content
    const aboutText = aboutSection.locator('.about-text, .section-content');
    await expect(aboutText.first()).toBeVisible();
  });

  test('Verify about statistics cards', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const statCards = page.locator('.stat-card');

    // Verify we have 4 stat cards
    await expect(statCards).toHaveCount(4);

    // Find stat-card with '15+' and verify label shows 'Years in Tech'
    await expect(statCards.filter({ hasText: '15+' })).toBeVisible();
    await expect(statCards.filter({ hasText: 'Years in Tech' })).toBeVisible();

    // Find stat-card with '35%' and verify label
    await expect(statCards.filter({ hasText: '35%' })).toBeVisible();
    await expect(statCards.filter({ hasText: 'Certification Rate Improvement' })).toBeVisible();

    // Find stat-card with '4' and verify label
    await expect(statCards.filter({ hasText: '4 Industries' })).toBeVisible();

    // Find stat-card with '20+' and verify label
    await expect(statCards.filter({ hasText: '20+' })).toBeVisible();
    await expect(statCards.filter({ hasText: 'Leadership' })).toBeVisible();
  });
});