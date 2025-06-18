// login.spec.js
const { test, expect } = require('@playwright/test');

test('Login User with correct email and password', async ({ page }) => {
  const baseUrl = 'https://automationexercise.com';
  const userName = 'Arun Jella';
  const userEmail = 'aj_1750227355766@hanasoft.com';
  const userPassword = 'Test@1234';

  // 1. Launch browser and navigate to site
  await page.goto(baseUrl);

  // 2. Verify that home page is visible successfully
  await expect(page).toHaveURL(baseUrl);
  //await expect(page.locator('body')).toContainText('Automation Exercise');

  // 3. Click on 'Signup / Login' button
  await page.locator('a[href="/login"]').click();

  // 4. Verify 'Login to your account' is visible
  //await expect(page.locator('h2')).toHaveText(/Login to your account/i);
  await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

  // 5. Enter correct email address and password
  await page.locator('input[data-qa="login-email"]').fill(userEmail);
  await page.locator('input[data-qa="login-password"]').fill(userPassword);

  // 6. Click 'login' button
  await page.locator('button[data-qa="login-button"]').click();

  // 7. Verify that 'Logged in as username' is visible
  await expect(
  page.locator(`a:has-text("Logged in as ${userName}")`)
).toBeVisible();

//   // 8. Click 'Delete Account' button
//   await page.locator('a[href="/delete_account"]').click();

// //   // 9. Verify that 'ACCOUNT DELETED!' is visible
// //   await expect(page.locator('h2')).toHaveText(/ACCOUNT DELETED!/i);
});
