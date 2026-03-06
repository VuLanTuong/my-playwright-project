import { test, expect } from '@playwright/test';
import { baseUrl } from './config';

test('Verify JavaScript alert displays correctly', async ({ page }) => {
  await page.goto(baseUrl + 'javascript_alerts');

  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.dismiss();
  });

  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
});