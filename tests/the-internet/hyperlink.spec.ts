import { test, expect } from '@playwright/test';
import { baseUrl } from './config';

test('Verify user can open status code pages', async ({ page }) => {
    await page.goto(`${baseUrl}status_codes`);

    const statusCodes = ['200', '301', '404', '500'];

    for (const code of statusCodes) {

        // Click status code link
        await page.getByRole('link', { name: code }).click();

        // Verify URL
        await expect(page).toHaveURL(`${baseUrl}status_codes/${code}`);

        // Verify message
        await expect(page.locator('p'))
            .toContainText(`This page returned a ${code} status code.`);

        // Go back to list page
        await page.getByRole('link', { name: 'here' }).click();
    }
});

test('Verify user can open status code pages v2 xpath', async ({ page }) => {
    await page.goto(`${baseUrl}status_codes`);

    const statusCodes = ['200', '301', '404', '500'];

    for (const code of statusCodes) {
    await page.locator(`//a[@href='status_codes/${code}']`).click();

    await expect(page).toHaveURL(`${baseUrl}status_codes/${code}`);
    await expect(page.locator('p')).toContainText(`This page returned a ${code} status code.`);
    await page.locator(`//a[@href='/status_codes']`).click();
    }
})