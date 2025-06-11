// @ts-check
import { test, expect } from '@playwright/test';

test('TEST-125_To_Ensure_Another_Something_Works.test', async ({ page }) => {
  const { chromium } = require('playwright');
  const browser = await chromium.launch({ headless: false }); // launch browser visibly
  const context = await browser.newContext(); // create a new browser context
  await page.goto('https://demoqa.com/');
  await page.waitForTimeout(2000); 
  await browser.close(); 
});
