// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - Experience Section', () => {
  test('Verify experience timeline entries', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const experienceSection = page.locator('#experience');
    const timelineItems = experienceSection.locator('.timeline-item');

    // Verify we have 4 timeline entries
    await expect(timelineItems).toHaveCount(4);

    // Find timeline entry for 'Camping World' with date '2026'
    const campingWorld = timelineItems.filter({ hasText: 'Camping World' });
    await expect(campingWorld).toBeVisible();
    await expect(campingWorld).toHaveText(/2026/);

    // Find timeline entry for 'Planning Center'
    const planningCenter = timelineItems.filter({ hasText: 'Planning Center' });
    await expect(planningCenter).toBeVisible();

    // Find timeline entry for 'Arise Virtual Solutions'
    const arise = timelineItems.filter({ hasText: 'Arise Virtual Solutions' });
    await expect(arise).toBeVisible();

    // Find timeline entry for 'Ministry'
    const ministry = timelineItems.filter({ hasText: 'Ministry' });
    await expect(ministry).toBeVisible();
  });

  test('Verify experience timeline styling', async ({ page }) => {
    await page.goto('http://localhost:8080/index.html');

    const timeline = page.locator('#experience .timeline');
    const timelineMarkers = page.locator('.timeline-marker');

    // Verify timeline element exists
    await expect(timeline).toBeVisible();

    // Verify timeline-marker elements exist for each entry (4 entries)
    await expect(timelineMarkers).toHaveCount(4);

    // Hover over a timeline-content card and verify it's interactive
    const firstTimelineItem = page.locator('.timeline-item').first();
    await firstTimelineItem.hover();
    // Just verify hover doesn't cause errors
    await expect(firstTimelineItem).toBeVisible();
  });
});