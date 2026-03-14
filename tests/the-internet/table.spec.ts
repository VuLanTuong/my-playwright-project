import { test, expect } from '@playwright/test';
import { baseUrl } from './config';

test.describe('Table Tests', () => {

  let entries: Array<{ fullName: string; due: number }> = [];

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl + 'tables');

    const rows = await page.locator('#table1 tbody tr').all();

    const parseDue = (text: string | null) => {
      if (!text) return NaN;
      return parseFloat(text.replace(/[^0-9.-]/g, ''));
    };

    entries = [];         

    for (const row of rows) {
      const dueText = await row.locator('td:nth-child(4)').textContent();
      const lastName = await row.locator('td:nth-child(1)').textContent();
      const firstName = await row.locator('td:nth-child(2)').textContent();

      const fullName = `${firstName?.trim()} ${lastName?.trim()}`.trim();
      const due = parseDue(dueText);

      if (fullName && !Number.isNaN(due)) {
        entries.push({ fullName, due });
      }
    }
  });

  test('Verify the largest due in the table', async () => {
    expect(entries.length).toBeGreaterThan(0);

    const maxDue = Math.max(...entries.map(e => e.due));

    const maxNames = entries
      .filter(e => e.due === maxDue)
      .map(e => e.fullName);

    expect(maxNames).toEqual(
      expect.arrayContaining(['Jason Doe'])
    );
  });

  test('Verify the smallest due in the table', async () => {
    expect(entries.length).toBeGreaterThan(0);

    const minDue = Math.min(...entries.map(e => e.due));

    const minNames = entries
      .filter(e => e.due === minDue)
      .map(e => e.fullName);

    expect(minNames).toEqual(
      expect.arrayContaining(['John Smith', 'Tim Conway'])
    );
  });

});
