import { test, expect } from '@playwright/test';
import { baseUrl } from './config';

test('Verify able to select dropdownoptions', async ({page}) => {
    await page.goto(baseUrl + 'dropdown');
    await page.locator('#dropdown').selectOption('1');
    const text = await page.locator('#dropdown').textContent();
    expect(text).toContain('Option 1');
}
)

test('Verify able to select dropdown options xpath ', async ({page}) => {
    await page.goto(baseUrl + 'dropdown');
    await page.locator(`//div//select[@id='dropdown']`).selectOption({value : '1'});
    const text = await page.locator(`//div//select[@id='dropdown']`).textContent();
    expect(text).toContain('Option 1');
}
)

