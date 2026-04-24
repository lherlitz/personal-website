// spec: specs/website-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Main Page - Icon Rendering (CRITICAL)', () => {
  test('Verify Lucide icons render correctly across the site', async ({ page }) => {
    // Navigate to index.html page
    await page.goto('http://localhost:8080/index.html');

    // 2.1. Verify Lucide icons render in navigation toggle
    // Find element with data-lucide='menu' and verify it's rendered as an SVG element
    // Note: menu icon is hidden on desktop via CSS (media query), so we check for attachment, not visibility
    const menuIcon = page.locator('svg[data-lucide="menu"]');
    await expect(menuIcon).toBeAttached();
    await expect(menuIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // 2.2. Verify Lucide icons render in hero section
    // Find element with data-lucide='arrow-down' in hero-actions
    const arrowDownIcon = page.locator('svg[data-lucide="arrow-down"]');
    await expect(arrowDownIcon).toBeVisible();
    await expect(arrowDownIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // 2.3. Verify Lucide icons render in Projects section
    // Find project-icon with data-lucide='music', verify SVG renders
    const musicIcon = page.locator('svg[data-lucide="music"]');
    await expect(musicIcon).toBeVisible();
    await expect(musicIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // Find project-icon with data-lucide='layout-dashboard', verify SVG renders
    const dashboardIcon = page.locator('svg[data-lucide="layout-dashboard"]');
    await expect(dashboardIcon).toBeVisible();
    await expect(dashboardIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // Find project-icon with data-lucide='type', verify SVG renders
    const typeIcon = page.locator('svg[data-lucide="type"]');
    await expect(typeIcon).toBeVisible();
    await expect(typeIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // Find project-link with data-lucide='external-link', verify SVG renders
    const externalLinkIcon = page.locator('svg[data-lucide="external-link"]');
    await expect(externalLinkIcon).toBeVisible();
    await expect(externalLinkIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // 2.4. Verify Lucide icons render in Skills section
    // Verify data-lucide='test-tubes' renders as SVG
    const testTubesIcon = page.locator('svg[data-lucide="test-tubes"]');
    await expect(testTubesIcon).toBeVisible();
    await expect(testTubesIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // Verify data-lucide='code-2' renders as SVG
    const code2Icon = page.locator('svg[data-lucide="code-2"]');
    await expect(code2Icon).toBeVisible();
    await expect(code2Icon).toHaveAttribute('viewBox', '0 0 24 24');

    // Verify data-lucide='git-branch' renders as SVG
    const gitBranchIcon = page.locator('svg[data-lucide="git-branch"]');
    await expect(gitBranchIcon).toBeVisible();
    await expect(gitBranchIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // Verify data-lucide='presentation' renders as SVG
    const presentationIcon = page.locator('svg[data-lucide="presentation"]');
    await expect(presentationIcon).toBeVisible();
    await expect(presentationIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // Verify data-lucide='award' renders as SVG
    const awardIcon = page.locator('svg[data-lucide="award"]');
    await expect(awardIcon).toBeVisible();
    await expect(awardIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // Verify data-lucide='users' renders as SVG
    const usersIcon = page.locator('svg[data-lucide="users"]');
    await expect(usersIcon).toBeVisible();
    await expect(usersIcon).toHaveAttribute('viewBox', '0 0 24 24');

    // 2.5. Verify inline SVG icons render (not using Lucide)
    // Verify inline SVG icons in contact section are visible
    const inlineIcons = page.locator('#contact svg.icon, #contact svg.icon-lg');
    await expect(inlineIcons.first()).toBeVisible();
  });
});