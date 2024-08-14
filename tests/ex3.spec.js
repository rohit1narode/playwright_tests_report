
const { test, expect } = require('@playwright/test');


// test('my test', async ({page}) => {

//     await page.goto('https://playwright.dev/')
    
//     const h1 = await page.locator('.highlight_gXVj').first()

//     await expect(h1).toHaveText(/Playwright/)    
//   })



//   test('cloud that', async ({page}) => {

//     await page.goto("https://testprep.cloudthat.com/login/index.php");
  
//     await page.getByPlaceholder("Username or email").fill('xyz@gmail.com');
  
//     await page.getByPlaceholder("Password").fill("123");
  
//     await page.locator("#loginbtn").click()
  
  
  
//     // T&C
  
//     // checkbox
  
//     // await page.getByLabel("I agree to the terms & conditions").check()
  
//     // radio btn
  
//     // await expect(page.getByLabel("I agree to the terms & conditions")).toBeChecked()
  
//   });
  
  
test('sales force', async ({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in");
  
    await page.locator("#username").fill('xyz@gmail.com');
    
    await page.locator("#password").fill("123");
  
    await expect(page.locator("#Login")).toBeVisible();

    
  });
  