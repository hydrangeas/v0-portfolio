import { test, expect } from '@playwright/test';

test.describe('Portfolio website tests', () => {
  test('should have the correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/開発者名 - プログラマーポートフォリオ/);
    await page.screenshot({ path: 'screenshots/homepage-title.png', fullPage: false });
  });

  test('should display the hero section', async ({ page }) => {
    await page.goto('/');
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    await page.screenshot({ path: 'screenshots/hero-section.png', fullPage: false });
  });

  test('should have navigation elements', async ({ page }) => {
    await page.goto('/');
    // Check if header exists
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Take a screenshot of the navigation area
    await page.screenshot({ path: 'screenshots/navigation.png', fullPage: false });
  });

  test('should display the footer', async ({ page }) => {
    await page.goto('/');
    // Check if footer exists
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Take a screenshot of the footer
    await footer.screenshot({ path: 'screenshots/footer.png' });
  });
});