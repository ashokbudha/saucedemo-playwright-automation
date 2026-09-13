// TC_PRODUCT_001 — Verify Products page is displayed after successful login
// TC_PRODUCT_002 — Verify all products are displayed
// TC_PRODUCT_003 — Add one product to cart
// TC_PRODUCT_004 — Verify cart badge updates
// TC_PRODUCT_005 — Sort products by price low to high
// TC_PRODUCT_006 — Sort products by price : high to low
// TC_PRODUCT_007 — Sort products by name
// TC_PRODUCT_009 — Add multiple products
// TC_PRODUCT_0010 — Remove a product from product page

import { test, expect } from "../fixtures/test";

// TC_PRODUCT_001 — Verify Products page is displayed after successful login
test("TC_PRODUCT_001 — Verify Products page is displayed after successful login", async ({
  page,
  productPage,
}) => {
  await productPage.open();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page.getByText("Products")).toBeVisible();
});

// TC_PRODUCT_002 — Verify all products are displayed
test("TC_PRODUCT_002 — Verify all products are displayed", async ({
  page,
  productPage,
}) => {
  await productPage.open();

  await expect(productPage.productCards).toHaveCount(6);
});

// TC_PRODUCT_003 — Add one product to cart
test(" TC_PRODUCT_003 — Add one product to cart", async ({
  page,
  productPage,cartPage
}) => {
  await productPage.open();

  const backpack = await productPage.addProduct("Sauce Labs Backpack");

  await expect(backpack.getByRole("button", { name: "Remove" })).toBeVisible();
  await expect(productPage.shoppinCartBadge).toHaveText("1");

  await productPage.openCart();
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

  await expect(cartPage.cartItem).toHaveCount(1);
  await expect(
    productPage.getProductByName("Sauce Labs Backpack"),
  ).toBeVisible();
});

// TC_PRODUCT_004 — Verify cart badge updates

test("TC_PRODUCT_004 — Verify cart badge updates", async ({
  page,
  productPage,
}) => {
  //login
  // add first product and check Remove
  // check badge text 1
  // add second product and check Remove
  // check badge text 2

  await productPage.open();

  // Add first product
  await productPage.addProduct(0);
  await expect(productPage.shoppinCartBadge).toHaveText("1");

  // Add second product
  await productPage.addProduct(1);
  await expect(productPage.shoppinCartBadge).toHaveText("2");
});

// TC_PRODUCT_005 — Sort products by price: low to high
// todo i have a question here
test("TC_PRODUCT_005 — Sort products by price: low to high", async ({
  page,
  productPage,
}) => {
  // login and url of product page
  // click sort Price low to high
  // loop into all product and get all price in list
  // create another variable and sort the initial price in low to high
  // check if both list are same

  await productPage.open();

  // select low to high option
  await productPage.selectOption("lohi");

  let actualPrices: number[] = [];
  const productCount = await productPage.productCards.count();

  for (let i = 0; i < productCount; i++) {
    const rawPrice = await productPage.productPrices.nth(i).textContent();

    if (rawPrice === null) {
      throw new Error(`Price not found for product at index ${i}`);
    }

    const price = Number(rawPrice.replace("$", ""));

    if (Number.isNaN(price)) {
      throw new Error(`Invalid product price: "${rawPrice}"`);
    }

    actualPrices.push(price);
  }

  const expectedPrices = actualPrices.toSorted((a, b) => a - b);
  expect(actualPrices).toEqual(expectedPrices);
});


// TC_PRODUCT_006 — Sort products by price: high to low
test("TC_PRODUCT_006 — Sort products by price: high to low", async ({
  page,productPage
}) => {
  
  // login and url of product page
  // click sort Price low to high
  // loop into all product and get all price in list
  // create another variable and sort the initial price in low to high
  // check if both list are same

  productPage.open()

  productPage.selectOption("hilo");

  let actualPrices: number[] = [];
  const productCount = await productPage.productCards.count();

  for (let i = 0; i < productCount; i++) {
    const rawPrice = await productPage.productPrices.nth(i).textContent();

    if (rawPrice === null) {
      throw new Error(`Price not found for product at index ${i}`);
    }

    const price = Number(rawPrice.replace("$", ""));

    if (Number.isNaN(price)) {
      throw new Error(`Invalid product price: "${rawPrice}"`);
    }

    actualPrices.push(price);
  }

  const expectedPrices = actualPrices.toSorted((a, b) => b - a);
  expect(actualPrices).toEqual(expectedPrices);
});

// TODO: TC_PRODUCT_007 — Sort products by name a-z
// TODO: TC_PRODUCT_008 — Sort products by name z-a

// TODO: TC_PRODUCT_009 — Add multiple products
test.only("TC_PRODUCT_009 — Add multiple products", async({page, productPage,cartPage})=>{
// Add Product 1
//  ├─ Badge = 1
//  ├─ Cart count = 1
//  └─ Product 1 exists

// Add Product 2
//  ├─ Badge = 2
//  ├─ Cart count = 2
//  ├─ Product 1 still exists
//  └─ Product 2 exists

  productPage.open()

  // add first product
  await productPage.addProduct("Sauce Labs Backpack")
  await expect(productPage.shoppinCartBadge).toHaveText("1")
  await productPage.openCart();
  await expect(cartPage.cartItem).toHaveCount(1)
  await expect(productPage.getProductByName("Sauce Labs Backpack")).toBeVisible();
  //todo in actual we have to click back to shopping button but for now lets try using url
  productPage.open()

  // add second product
  await productPage.addProduct("Sauce Labs Fleece Jacket")
  await expect(productPage.shoppinCartBadge).toHaveText("2")
  await productPage.openCart()
  await expect(cartPage.cartItem).toHaveCount(2)
  await expect(productPage.getProductByName("Sauce Labs Fleece Jacket")).toBeVisible();
  await expect(productPage.getProductByName("Sauce Labs Backpack")).toBeVisible();

  

})



//TODO: TC_PRODUCT_0010 — Remove a product from product page
