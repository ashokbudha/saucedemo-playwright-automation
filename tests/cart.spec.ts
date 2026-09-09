// TC_CART_001 - Verify Cart page is accessible
// TC_CART_002 - Verify added product is displayed in Cart
// TC_CART_003 - Verify multiple added products are displayed in Cart
// TC_CART_004 - Verify correct products are displayed in Cart
// TC_CART_005 - Verify product information is correct in Cart
// TC_CART_006 - Verify product price matches the Products page
// TC_CART_007 - Verify product can be removed from Cart
// TC_CART_008 - Verify Cart badge updates ../ removing a product
// TC_CART_009 - Verify Cart behavior when all products are removed
// TC_CART_010 - Verify Continue Shopping button navigates to Products page
// TC_CART_011 - Verify Checkout button navigates to Checkout page
// TC_CART_012 - Verify Cart contents persist after navigating away and returning
// TC_CART_013 - Verify Cart behavior when no products are added

import {test,expect}  from "../fixtures/test"

// TC_CART_001 - Verify Cart page is accessible
test("TC_CART_001 - Verify Cart page is accessible", async({page})=>{

  // auth handles the login

  // go and check inventory page
  await page.goto("https://www.saucedemo.com/inventory.html")
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  // click on cart button
  await page.locator("[data-test='shopping-cart-link']").click();

  // check the url and title of cart page
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  await expect(page.locator("[data-test='title']")).toHaveText("Your Cart")

})

// TC_CART_002 - Verify added product is displayed in Cart
test ("TC_CART_002 - Verify added product is displayed in Cart", async({page})=>{
  
})