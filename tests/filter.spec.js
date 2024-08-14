
const {test, expect} = require('@playwright/test')



test('filter', async ({page}) =>{

    await page.goto('https://www.demoblaze.com/');

    await page.getByRole("link")
    .filter({ hasText: 'Iphone 6 32gb' })
    .click();

    await page.goto('https://www.demoblaze.com/prod.html?idp_=5')

    await page.getByRole('link', {name: "Add to cart"})
    .click()

});


// test('stock items 5', async ({page}) => {

//     await page.goto("https://www.demoblaze.com/");
  
//     await expect(page.getByRole("link")
  
//    .filter({ hasText: '/' }))
  
//    .toHaveCount(5)
  
//   });


