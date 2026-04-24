// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - Contact Section', () => {
  test('Verify contact section displays', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const contactSection = page.locator('#contact');

    // Check section-tag shows 'Contact'
    await expect(contactSection.locator('.section-tag')).toHaveText('Contact');

    // Find h2 shows 'Let's connect'
    await expect(contactSection.locator('h2')).toHaveText("Let's connect");

    // Check contact-block paragraph text exists
    const contactText = contactSection.locator('p');
    await expect(contactText.first()).toBeVisible();
  });

  test('Verify contact links', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const contactSection = page.locator('#contact');

    // Find 'GitHub' contact-card
    const githubLink = contactSection.locator('a[href*="github.com/lherlitz"]');
    await expect(githubLink).toHaveText('GitHub');
    await expect(githubLink).toHaveAttribute('target', '_blank');

    // Find 'LinkedIn' contact-card
    const linkedInLink = contactSection.locator('a[href*="linkedin.com/in/lucherlitz"]');
    await expect(linkedInLink).toHaveText('LinkedIn');
    await expect(linkedInLink).toHaveAttribute('target', '_blank');

    // Find 'Email' contact-card
    const emailLink = contactSection.locator('a:has-text("Email")');
    await expect(emailLink).toBeVisible();
  });
});