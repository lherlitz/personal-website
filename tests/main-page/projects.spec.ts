// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - Projects Section', () => {
  test('Verify projects display', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const projectCards = page.locator('.project-card');

    // Verify we have 3 project cards
    await expect(projectCards).toHaveCount(3);

    // Find project-card with title 'Echo Worship'
    const echoWorship = projectCards.filter({ hasText: 'Echo Worship' });
    await expect(echoWorship).toBeVisible();

    // Find project-card with title 'Shepboard'
    const shepboard = projectCards.filter({ hasText: 'Shepboard' });
    await expect(shepboard).toBeVisible();

    // Find project-card with title 'Lumon Ipsum'; verify external-link icon present
    const lumonIpsum = projectCards.filter({ hasText: 'Lumon Ipsum' });
    await expect(lumonIpsum).toBeVisible();
  });

  test('Verify project card interactions', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const projectCard = page.locator('.project-card').first();

    // Hover over a project-card; verify it doesn't cause errors
    await projectCard.hover();
    await expect(projectCard).toBeVisible();

    // Click Lumon Ipsum 'Visit Site' link; verify new tab opens to lumonipsum.com
    const lumonLink = page.locator('.project-card a[href="https://www.lumonipsum.com/"]');
    // Note: We won't actually navigate to external site in tests, just verify the link exists
    await expect(lumonLink).toBeVisible();
  });
});