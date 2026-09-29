import { test, expect } from '@playwright/test';


test('first playwright', async ({ page }) => {
  await page.goto('https://classic.freecrm.com/register/');

let pgbtn:boolean = await page.locator('button#submitButton').isEnabled();

console.log(pgbtn);
});
