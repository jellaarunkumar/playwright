import { test, expect } from '@playwright/test';


test('launchbrowser', async ({ }) => {
    const { chromium } = require ('playwright');
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.hanasoft.com/");
    await browser.close();
});