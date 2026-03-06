import { test, expect } from '@playwright/test';
import { baseUrl } from './config';

test('Verify content of the nested frames', async ({ page }) => {
  await page.goto(baseUrl + 'nested_frames');
  await page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-left"]').contentFrame().getByText('LEFT').click();
  await expect(page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-left"]').contentFrame().locator('body')).toContainText('LEFT');
  await expect(page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-right"]').contentFrame().locator('body')).toContainText('RIGHT');
  await expect(page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-middle"]').contentFrame().locator('#content')).toContainText('MIDDLE');
  await expect(page.locator('frame[name="frame-bottom"]').contentFrame().locator('body')).toContainText('BOTTOM');
});