import { test, expect } from '@playwright/test';

test('Verify able to calculate BMI', async ({ page }) => {
    await page.goto('https://www.calculator.net/bmi-calculator.html');
    await page.getByRole('link', { name: 'Metric Units' }).click();
    await page.locator('#cage').click();
    await page.locator('#cage').fill('32');
    await page.locator('#cheightmeter').click();
    await page.locator('#cheightmeter').fill('169');
    await page.locator('#ckg').click();
    await page.locator('#ckg').fill('78');
    await page.getByRole('button', { name: 'Calculate' }).click();

    const bmi = 78 / ((169 / 100) ** 2);
    await expect(page.getByText(`BMI = ${bmi.toFixed(1)} kg/m2`)).toBeVisible();
    await expect(page.locator('font').getByText('Overweight')).toBeVisible();
});