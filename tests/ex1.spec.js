// @ts-check
const { test, expect } = require('@playwright/test');



// test("githubme", async ({page}) => {

//   await page.goto("https://github.com/aryan1403");

//   await expect(page).toHaveTitle(/aryan1403/)

// })



test("btnclick", async ({page}) => {

  await page.goto("https://www.google.co.in/");

  await expect(page.getByLabel("Search")).toBeTruthy()

}) 



