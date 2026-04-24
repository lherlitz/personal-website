// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - Skills Section', () => {
  test('Verify all skill groups display', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const skillGroups = page.locator('.skill-group');

    // Verify we have 6 skill groups
    await expect(skillGroups).toHaveCount(6);

    // Find skill-group for 'Testing & QA'
    const testingQa = skillGroups.filter({ hasText: 'Testing & QA' });
    await expect(testingQa).toBeVisible();
    await expect(testingQa).toHaveText(/Cypress|Playwright|Selenium/);

    // Find skill-group for 'Languages & Frameworks'
    const languagesFrameworks = skillGroups.filter({ hasText: 'Languages & Frameworks' });
    await expect(languagesFrameworks).toBeVisible();

    // Find skill-group for 'DevOps & Tools'
    const devops = skillGroups.filter({ hasText: 'DevOps & Tools' });
    await expect(devops).toBeVisible();

    // Find skill-group for 'Training & Enablement'
    const training = skillGroups.filter({ hasText: 'Training & Enablement' });
    await expect(training).toBeVisible();

    // Find skill-group for 'Certifications'
    const certifications = skillGroups.filter({ hasText: 'Certifications' });
    await expect(certifications).toBeVisible();

    // Find skill-group for 'Leadership'
    const leadership = skillGroups.filter({ hasText: 'Leadership' });
    await expect(leadership).toBeVisible();
  });
});