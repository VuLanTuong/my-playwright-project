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

test('Verify able to select multiple options css selector ', async ({page}) => {
    await page.goto('https://output.jsbin.com/osebed/1');
    await page.locator('#fruits').selectOption(['apple', 'banana']);
    await expect(page.locator('#fruits > option:checked')).toHaveText(['Banana','Apple']); 
});