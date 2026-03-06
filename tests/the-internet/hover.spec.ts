import { test, expect } from '@playwright/test';
import { baseUrl } from './config';

test('Verify name label appears when hovering on user 1 avatar', async ({ page }) => {

  // Open browser and navigate to page
  await page.goto(baseUrl + 'hovers');
  await page.getByRole('img', { name: 'User Avatar' }).first().hover();
  await expect(page.getByRole('heading', { name: 'name: user1' })).toBeVisible();
});