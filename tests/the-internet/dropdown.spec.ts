import { test, expect } from '@playwright/test';
import { baseUrl } from './config';

test('Verify able to select dropdownoptions', async ({page}) => {
    await page.goto(baseUrl + 'dropdown');
    await page.click('#dropdown');
    await page.locator('#dropdown').selectOption('1');
    const text = await page.locator('#dropdown').textContent();
    expect(text).toContain('Option 1');
}
)