import { test, expect } from '@playwright/test';
import { baseUrl } from './config';

test('Verify name label appears when hovering on user 1 avatar', async ({ page }) => {

  // Open browser and navigate to page
  await page.goto(baseUrl + 'hovers');
  await page.getByRole('img', { name: 'User Avatar' }).first().hover();
  await expect(page.locator('div.figure').nth(0).locator('h5')).toHaveText('name: user1');
});


test('dropdown test', async ({ page }) => {
  // Go to the dropdown page
  await page.goto(baseUrl + 'hovers');

  await page.locator('div.figure').nth(0).hover();
  await expect(page.locator('div.figure').nth(0).locator('h5')).toHaveText('name: user1');
});
