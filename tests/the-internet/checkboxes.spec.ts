import { test, expect } from '@playwright/test';

test('verify able to check checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.getByRole('checkbox').first().check();

    expect(await page.getByRole('checkbox').first()).toBeChecked()

    await page.getByRole('checkbox').nth(1).check();

    expect(await page.getByRole('checkbox').nth(1)).toBeChecked()



});