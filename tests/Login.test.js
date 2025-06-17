import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => 
{
  await page.goto('https://wastage.highlowmi.dev/login');
  await page.fill('#login-username', 'HLSSNCOM288292');
  await page.fill('#login-password', 'Load12');
  await page.locator('#login-submit-button').click();
  await expect(page).toHaveURL('https://stage.highlowmi.dev/my-account/dashboard');
});
