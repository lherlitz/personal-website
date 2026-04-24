// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - Footer', () => {
  test('Verify footer content', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const footer = page.locator('footer');

    // Find footer element; verify includes '2026'
    await expect(footer).toHaveText(/2026/);

    // Verify footer text includes name
    await expect(footer).toHaveText(/Luc Herlitz/);

    // Check footer-note shows 'Built with purpose'
    await expect(footer).toHaveText(/Built with purpose/);
  });
});