import { test, expect } from '@playwright/test';

test('Register User on Automation Exercise', async ({ page }) => {
  // Step 1 & 2: Launch browser and navigate to URL
  await page.goto('https://automationexercise.com');

  // Step 3: Verify that home page is visible successfully
  await expect(page).toHaveURL('https://automationexercise.com/');
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();

  // Step 4: Click on 'Signup / Login' button
  await page.click('a[href="/login"]');

  // Step 5: Verify 'New User Signup!' is visible
  await expect(page.locator('text=New User Signup!')).toBeVisible();

  // Step 6: Enter name and email address
  await page.fill('input[data-qa="signup-name"]', 'Arun Jella');
  const randomEmail = `aj_${Date.now()}@hanasoft.com`;
  await page.fill('input[data-qa="signup-email"]', randomEmail);

  //await page.fill('input[data-qa="signup-email"]', 'aj2@hanasoft.com');

  // Step 7: Click 'Signup' button
  await page.click('button[data-qa="signup-button"]');

  // Step 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.locator('text=Enter Account Information')).toBeVisible();

  // Step 9: Fill details: Title, Name, Email, Password, Date of birth
  await page.check('#id_gender1'); // Mr.
  await page.fill('#password', 'Test@1234');
  await page.selectOption('#days', '10');
  await page.selectOption('#months', '5');
  await page.selectOption('#years', '1990');

  // Step 10: Select checkbox 'Sign up for our newsletter!'
  await page.check('#newsletter');

  // Step 11: Select checkbox 'Receive special offers from our partners!'
  await page.check('#optin');

  // Step 12: Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await page.fill('#first_name', 'John');
  await page.fill('#last_name', 'Doe');
  await page.fill('#company', 'TestCorp');
  await page.fill('#address1', '123 Test Street');
  await page.fill('#address2', 'Suite 456');
  await page.selectOption('#country', 'Canada');
  await page.fill('#state', 'Ontario');
  await page.fill('#city', 'Toronto');
  await page.fill('#zipcode', 'M5G1X5');
  await page.fill('#mobile_number', '1234567890');

  // Optional: Submit the form
  await page.click('button[data-qa="create-account"]');

  // Final Assertion (Optional): Check if account created
  await expect(page.locator('text=Account Created!')).toBeVisible();
});
