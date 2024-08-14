
// @ts-check
const { test, expect } = require('@playwright/test');

test("title", async ({page}) => {

    await page.goto("https://www.amazon.in/")

    await expect(page.getByLabel("amazon")).toBeTruthy()

})

// test("title", async ({page}) => {

//     await page.goto('https://www.cricbuzz.com/')

//     await page.getByRole('link', {name:"Schedule"}).click();

//     await expect(page.getByRole('heading', {name: 'Cricket schedule'})).toBeVisible();

// })


// test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
  
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();
  
//     // Expects page to have a heading with the name of Installation.
//     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//   });
