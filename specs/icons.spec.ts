import { test, expect } from '@playwright/test';

test.describe('Brand Icons', () => {
  test('GitHub icon visible in contact section', async ({ page }) => {
    await page.goto('https://lucherlitz.me#contact');
    const githubLink = page.getByRole('link', { name: 'GitHub' });
    await expect(githubLink).toBeVisible();
    const svg = githubLink.locator('svg');
    await expect(svg).toBeVisible();
  });

  test('LinkedIn icon visible in contact section', async ({ page }) => {
    await page.goto('https://lucherlitz.me#contact');
    const linkedInLink = page.locator('#contact a.contact-card').filter({ has: page.locator('svg') }).filter({ hasText: 'LinkedIn' });
    await expect(linkedInLink).toBeVisible();
    const svg = linkedInLink.locator('svg');
    await expect(svg).toBeVisible();
  });

  test('Email icon visible in contact section', async ({ page }) => {
    await page.goto('https://lucherlitz.me#contact');
    const emailLink = page.getByRole('link', { name: 'Email' });
    await expect(emailLink).toBeVisible();
    const svg = emailLink.locator('svg');
    await expect(svg).toBeVisible();
  });

  test('LinkedIn icon visible in testimonials section', async ({ page }) => {
    await page.goto('https://lucherlitz.me#testimonials');
    const linkedInBtn = page.getByRole('link', { name: 'View All on LinkedIn' });
    await expect(linkedInBtn).toBeVisible();
    const svg = linkedInBtn.locator('svg');
    await expect(svg).toBeVisible();
  });

  test('no missing icon console warnings', async ({ page }) => {
    const warnings: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'warning' && msg.text().includes('icon name was not found')) {
        warnings.push(msg.text());
      }
    });
    await page.goto('https://lucherlitz.me');
    await page.waitForLoadState('networkidle');
    expect(warnings).toHaveLength(0);
  });
});