import { test, expect } from '@playwright/test';

test('Verify able to check checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.getByRole('checkbox').first().check();

    expect(await page.getByRole('checkbox').first()).toBeChecked()

    await page.getByRole('checkbox').nth(1).check();

    expect(await page.getByRole('checkbox').nth(1)).toBeChecked()

});

test('Verify able to check checkboxes v2 CSS selector', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    
    await page.locator(`#checkboxes input`).first().check();
    expect(await page.locator(`#checkboxes input`).first()).toBeChecked()

    await page.locator(`#checkboxes input`).nth(1).check();
    expect(await page.locator(`#checkboxes input`).nth(1)).toBeChecked()

});

test('Verify able to check checkboxes v3 XPath', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.locator(`//form[@id='checkboxes']/input[1]`).check();

    expect(await page.locator(`//form[@id='checkboxes']/input[1]`)).toBeChecked()

    await page.locator(`//form[@id='checkboxes']/input[2]`).check();

    expect(await page.locator(`//form[@id='checkboxes']/input[2]`)).toBeChecked()

});
