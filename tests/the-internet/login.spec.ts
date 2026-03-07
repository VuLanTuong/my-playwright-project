import { test, expect } from '@playwright/test';

test('Verify able to login v1', async ({ page }) => {
  // arrange
  await page.goto('https://the-internet.herokuapp.com/login');

  // act
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();

  // assert
  await expect(page.locator('#flash')).toContainText('You logged into a secure area! ×');
  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeVisible();

});

test('Verify able to login v2 CSS selector', async ({ page }) => {
  // arrange
  await page.goto('https://the-internet.herokuapp.com/login');

  // act
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator(`i:has-text("Login")`).click();

  // assert
  await expect(page.locator('#flash')).toContainText('You logged into a secure area! ×');
  await expect(page.locator(`.subheader`, { hasText: 'Welcome to the Secure Area.' })).toBeVisible();

});

test('Verify able to login v3 XPath', async ({ page }) => {
  // arrange
  await page.goto('https://the-internet.herokuapp.com/login');

  // act
  await page.locator(`//input[@id='username']`).fill('tomsmith');
  await page.locator(`//input[@id='password']`).fill('SuperSecretPassword!');
  await page.locator(`//button[@type='submit']`).click();

  // assert
  await expect(page.locator('//div[@id="flash"]')).toContainText('You logged into a secure area! ×');
  await expect(page.locator(`//h4[@class='subheader']`)).toContainText('Welcome to the Secure Area.');

});