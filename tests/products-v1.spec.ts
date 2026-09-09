// TC_PRODUCT_001 — Verify Products page is displayed after successful login
// TC_PRODUCT_002 — Verify all products are displayed
// TC_PRODUCT_003 — Add one product to cart
// TC_PRODUCT_004 — Verify cart badge updates
// TC_PRODUCT_005 — Sort products by price low to high
// TC_PRODUCT_006 — Sort products by price : high to low
// TC_PRODUCT_007 — Sort products by name
// TC_PRODUCT_009 — Add multiple products
// TC_PRODUCT_0010 — Remove a product

import { test, expect } from "../fixtures/test";


// TC_PRODUCT_001 — Verify Products page is displayed after successful login

test("TC_PRODUCT_001 — Verify Products page is displayed after successful login", async ({
  page
}) => {

  await page.goto("https://www.saucedemo.com/inventory.html")

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  await expect(page.getByText("Products")).toBeVisible()
});

// TC_PRODUCT_002 — Verify all products are displayed

test("TC_PRODUCT_002 — Verify all products are displayed", async ({ page}) => {
  

  await page.goto("https://www.saucedemo.com/inventory.html");
  // await expect(page.locator(".inventory_item")).toHaveCount(6);
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6); //this is better
});

// TC_PRODUCT_003 — Add one product to cart

test(" TC_PRODUCT_003 — Add one product to cart", async({page})=>{



  await page.goto("https://www.saucedemo.com/inventory.html");
  const backpack = page
    .locator('[data-test="inventory-item"]')
    .filter({ hasText: "Sauce Labs Backpack" });

  await backpack.getByRole("button", { name: "Add to cart" }).click();
  await expect(backpack.getByRole("button", {name:"Remove"})).toBeVisible()
  await expect(page.locator("[data-test='shopping-cart-badge']")).toHaveText("1")

  await page.locator("[data-test='shopping-cart-link']").click()
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

  await expect(page.locator("[data-test='cart-list']").locator("[data-test='inventory-item']")).toHaveCount(1)
  await expect(page.getByRole("link", {name:"Sauce Labs Backpack"})).toBeVisible();

})

// TC_PRODUCT_004 — Verify cart badge updates

test("TC_PRODUCT_004 — Verify cart badge updates", async ({ page }) => {
  //login
  // add first product and check Remove
  // check badge text 1
  // add second product and check Remove
  // check badge text 2



  await page.goto("https://www.saucedemo.com/inventory.html");

  const product = page.locator("[data-test='inventory-item']");
  const cartBadge = page.locator("[data-test='shopping-cart-badge']");

  // Add first product
  await product.first().getByRole("button", { name: "Add to cart" }).click();
  await expect(cartBadge).toHaveText("1");

  // Add second product
  await product.nth(1).getByRole("button", { name: "Add to cart" }).click();
  await expect(cartBadge).toHaveText("2");
});

// TC_PRODUCT_005 — Sort products by price: low to high

test("TC_PRODUCT_005 — Sort products by price: low to high", async({page})=>{
  // login and url of product page
  // click sort Price low to high
  // loop into all product and get all price in list
  // create another variable and sort the initial price in low to high
  // check if both list are same


  await page.goto("https://www.saucedemo.com/inventory.html");

  await page.locator("select").selectOption("lohi")

  const product = page.locator("[data-test='inventory-list']").locator("[data-test='inventory-item']")
  const prices = page.locator("[data-test='inventory-item-price']")

  let actualPrices:number[] =[];

  const productCount = await product.count();

  for (let i = 0; i < productCount; i++) {
    const rawPrice = await prices.nth(i).textContent();

    if (rawPrice === null) {
      throw new Error(`Price not found for product at index ${i}`);
    }

    const price = Number(rawPrice.replace("$", ""));

    if (Number.isNaN(price)) {
      throw new Error(`Invalid product price: "${rawPrice}"`);
    }

    actualPrices.push(price);
  }
  // console.log(actualPrices)

  const expectedPrices = actualPrices.toSorted((a, b) => a - b);
  expect(actualPrices).toEqual(expectedPrices); 

})


// TC_PRODUCT_006 — Sort products by price: high to low

test("TC_PRODUCT_006 — Sort products by price: high to low", async({page})=>{
  // login and url of product page
  // click sort Price low to high
  // loop into all product and get all price in list
  // create another variable and sort the initial price in low to high
  // check if both list are same




  await page.goto("https://www.saucedemo.com/inventory.html");

  await page.locator("select").selectOption("hilo")

  const product = page.locator("[data-test='inventory-list']").locator("[data-test='inventory-item']")
  const prices = page.locator("[data-test='inventory-item-price']")

  let actualPrices:number[] =[];

  const productCount = await product.count();

  for (let i = 0; i < productCount; i++) {
    const rawPrice = await prices.nth(i).textContent();

    if (rawPrice === null) {
      throw new Error(`Price not found for product at index ${i}`);
    }

    const price = Number(rawPrice.replace("$", ""));

    if (Number.isNaN(price)) {
      throw new Error(`Invalid product price: "${rawPrice}"`);
    }

    actualPrices.push(price);
  }
  // console.log(actualPrices)

  const expectedPrices = actualPrices.toSorted((a, b) => b-a);
  expect(actualPrices).toEqual(expectedPrices); 

})


// TODO: TC_PRODUCT_007 — Sort products by name
// TODO: TC_PRODUCT_009 — Add multiple products

// test("TC_PRODUCT_009 — Add multiple products" async({page})=>{
//   // login and check url 
//   //add 3 product to cart
//   // verify if all the expected product are in cart or not
// })


//TODO: TC_PRODUCT_0010 — Remove a product