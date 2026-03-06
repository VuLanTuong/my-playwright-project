import { test, expect } from '@playwright/test';
import { baseUrl } from './config';

test('Verify the largest due in the table', async ({ page }) => {
  await page.goto(baseUrl + 'tables');

  const rows = await page.locator('#table1 tbody tr').all();

  let longestLength = 0;
  let personName = '';

  for (const row of rows) {
    const dueText = await row.locator('td:nth-child(4)').textContent();
    const lastName = await row.locator('td:nth-child(1)').textContent();
    const firstName = await row.locator('td:nth-child(2)').textContent();


    if (dueText) {
      const length = dueText.trim().length;

      if (length > longestLength) {
        longestLength = length;
        personName = `${lastName?.trim()} ${firstName?.trim()}`;
      }
    }
  }

  expect(longestLength).toBe(7);
  expect(personName).toBe('Doe Jason');
});