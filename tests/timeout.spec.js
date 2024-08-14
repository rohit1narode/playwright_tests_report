
//import { test, expect } from '@playwright/test';

// test('cricbuzz', async ({ page }) => {
//   await page.goto('https://www.cricbuzz.com/');

//   await page.getByRole('link', { name: 'Schedule', exact: true }).click();

//   const heading = await page.getByRole('heading', { name: 'Cricket Schedule' })

//   await expect(heading).toBeVisible();
// });

// const { test: base, expect } = require('@playwright/test');
// const test = base.extend({
//   slowFixture: [async ({page}, use) => {
//     // ... perform a slow operation ...
//     await use(page);
//   }, { timeout: 10000 }]
// });

// test('example test', async ({ slowFixture }) => {

//     await slowFixture.goto('https://www.cricbuzz.com/')

//     await slowFixture.getByRole('link', { name: 'Schedule', exact: true }).click();

//     const heading = await slowFixture.getByRole('heading', { name: 'Cricket Schedule' })

//     await expect(heading).toBeVisible();
    
// });



//const {test, expect} = require('@playwright/test')

// test('filter', async ({page}) =>{

//     await page.goto('https://www.demoblaze.com/');

//     await page.getByRole("link")
//     .filter({ hasText: 'Iphone 6 32gb' })
//     .click();

//     await page.goto('https://www.demoblaze.com/prod.html?idp_=5')

//     await page.getByRole('link', {name: "Add to cart"})
//     .click()

// })