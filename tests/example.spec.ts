import { test, expect } from '@playwright/test';


test('first playwright', async ({ page }) => {
  await page.goto('https://opencart.nltechtrainings.com/en-gb?route=common/home');
await page.locator('.fa-solid.fa-user').click();

page.pause();

});
