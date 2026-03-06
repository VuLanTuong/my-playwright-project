import { test, expect } from '@playwright/test';
import { baseUrl } from './config';

test('Verify context menu appears when right clicking on hot spot', async ({ page }) => {
  await page.goto(baseUrl + 'context_menu');
  page.once('dialog', dialog => {
    expect(dialog.message()).toBe('You selected a context menu');
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#hot-spot').click({
    button: 'right'
  });
});