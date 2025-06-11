import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stage.highlowmi.dev/');
  await page.getByRole('link', { name: 'ログインする' }).click();
  await page.locator('.TextField_textField__29eUc').first().click();
  await page.locator('#login-username').click();
  await page.locator('#login-username').fill('HLssncom286321');
  await page.locator('#login-password').click();
  await page.locator('#login-password').fill('Load12');
  await page.locator('#login-submit-button').getByText('ログイン').click();
  await expect(page.locator('#accountMenuToggleButton')).toBeVisible();
  await page.locator('#accountMenuToggleButton span').nth(2).click();
  await page.getByRole('button', { name: 'ログアウト' }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).click();
});