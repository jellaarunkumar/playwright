import { test, expect } from '@playwright/test';
import { waitForDebugger } from 'inspector';

test('test', async ({ page }) => {
  await page.goto('https://developmentbeyondlearning.com/');
  await page.locator('(//a[@href="https://developmentbeyondlearning.com/dblelevate/"])[1]').click();
  await page.goto('https://developmentbeyondlearning.com/');
  await page.locator('(//a[text()="Learning journeys"])[1]').hover();
  await page.locator('#menu-item-1834').click();
  await expect(page).toHaveURL(/learning-journeys/);
  await page.goto('https://developmentbeyondlearning.com/');
  await page.locator('(//a[text()="Learning journeys"])[1]').hover();
  await page.locator('#menu-item-1454').click();
  await expect(page).toHaveURL(/early-career-journey/);
  await page.goto('https://developmentbeyondlearning.com/');
  await page.locator('(//a[text()="Learning journeys"])[1]').hover();
  await page.locator('#menu-item-1453').click();
  await expect(page).toHaveURL(/emerging-manager-journeys/);
  await page.goto('https://developmentbeyondlearning.com/');
  await page.locator('(//a[text()="Learning journeys"])[1]').hover();
  await page.locator('#menu-item-1452').click();
  await expect(page).toHaveURL(/future-leaders-journeys/);
  await page.goto('https://developmentbeyondlearning.com/');
  await page.locator('(//a[text()="Who we are"])[1]').hover();
  await page.locator('#menu-item-1429').click();
  await expect(page).toHaveURL(/about-us/);
  await page.goto('https://developmentbeyondlearning.com/');
  await page.locator('(//a[text()="Who we are"])[1]').hover();
  await page.locator('#menu-item-1427').click();
  await expect(page).toHaveURL(/global-coverage/);
  await page.goto('https://developmentbeyondlearning.com/');
  await page.locator('(//a[text()="Who we are"])[1]').hover();
  await page.locator('#menu-item-1428').click();
  await expect(page).toHaveURL(/facilitators/);
  await page.goto('https://developmentbeyondlearning.com/');
  await page.locator('(//a[text()="Impact"])[1]').click();
  await expect(page).toHaveURL(/impact/);
  await page.goto('https://developmentbeyondlearning.com/');
  await page.locator('(//a[text()="Resources"])[1]').hover();
  await page.locator('#menu-item-675').click();
  await expect(page).toHaveURL(/resources/);
  await page.goto('https://developmentbeyondlearning.com/')
  await page.locator('(//a[text()="Resources"])[1]').hover();
  await page.locator('#menu-item-676').click();
  await expect(page).toHaveURL(/categories=articles/);
  await page.goto('https://developmentbeyondlearning.com/')
  await page.locator('(//a[text()="Resources"])[1]').hover();
  await page.locator('#menu-item-3231').click();
  await expect(page).toHaveURL('https://developmentbeyondlearning.com/resources/?_categories=videos');
  await page.goto('https://developmentbeyondlearning.com/')
  await page.locator('(//a[text()="Resources"])[1]').hover();
  await page.locator('#menu-item-2955').click();
  await expect(page).toHaveURL('https://developmentbeyondlearning.com/category/news/');
  await page.goto('https://developmentbeyondlearning.com/')
  await page.locator('(//a[text()="Resources"])[1]').hover();
  await page.locator('#menu-item-1755').click();
  await expect(page).toHaveURL('https://developmentbeyondlearning.com/resources/?_categories=research');
  await page.goto('https://developmentbeyondlearning.com/')
  // await page.locator('(//a[text()="Resources"])[1]').hover();
  // await page.locator('#menu-item-2277').click();
  // await expect(page).toHaveURL('https://developmentbeyondlearning.com/contact/#faqs');
  // await page.goto('https://developmentbeyondlearning.com/')
});