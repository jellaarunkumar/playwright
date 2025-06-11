// @ts-check
import { test, expect } from '@playwright/test';

test('TEST-123_To_Ensure_Something.spec', async ({ page }) => {
  const { chromium } = require('playwright');
  const browser = await chromium.launch({ headless: false }); // launch browser visibly
  const context = await browser.newContext(); // create a new browser context
  await page.goto('https://www.hanasoft.com/');
  await page.waitForTimeout(2000); 
  await browser.close(); 
});
