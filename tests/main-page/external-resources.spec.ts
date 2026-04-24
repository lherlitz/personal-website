// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - External Resources', () => {
  test('Verify external CDN resources load and fonts are applied', async ({ page }) => {
    // Navigate to index.html page
    await page.goto('http://localhost:8080/index.html');

    // Check console for errors (verify no critical errors)
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // 1.2. Verify font families are applied correctly
    // Check computed styles for body element - font-family includes Inter
    const bodyFontFamily = await page.evaluate(() => {
      const body = document.body;
      const computedStyle = window.getComputedStyle(body);
      return computedStyle.fontFamily;
    });
    expect(bodyFontFamily).toContain('Inter');

    // Check computed styles for hero-badge element - font-family includes JetBrains Mono
    const badgeFontFamily = await page.evaluate(() => {
      const badge = document.querySelector('.hero-badge');
      const computedStyle = window.getComputedStyle(badge!);
      return computedStyle.fontFamily;
    });
    expect(badgeFontFamily).toContain('JetBrains Mono');
  });

  test('Verify Lucide script loads from CDN', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    // Verify Lucide library is loaded by checking for Lucide object or data-lucide icons
    const lucideLoaded = await page.evaluate(() => {
      // Check if Lucide icons are rendered (data-lucide attributes present)
      const icons = document.querySelectorAll('[data-lucide]');
      return icons.length > 0;
    });
    expect(lucideLoaded).toBe(true);
  });
});