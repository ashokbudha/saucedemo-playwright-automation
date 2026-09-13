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

import { test, expect } from "../fixtures/test";

// TC_CART_001 - Verify Cart page is accessible
test("TC_CART_001 - Verify Cart page is accessible", async ({
  page,
  cartPage,
  productPage,
}) => {
  // auth handles the login

  // go and check inventory page
  await productPage.open();
  await expect(page).toHaveURL(/\/inventory\.html/);

  // click on cart button
  await productPage.shoppingCartBtn.click();

  // check the url and title of cart page
  await expect(page).toHaveURL(/\/cart\.html$/);
  await expect(cartPage.title).toHaveText("Your Cart");
});

// TC_CART_002 - Verify added product is displayed in Cart
test("TC_CART_002 - Verify added product is displayed in Cart", async ({
  page,
  cartPage,
  productPage,
}) => {
  // Go to inventory page
  await productPage.open();

  await expect(page).toHaveURL(/\/inventory\.html$/);

  // Select the product by name
  const product = productPage.getProductByName("Sauce Labs Fleece Jacket");

  // Get the expected product name before navigating away
  const productName = await product
    .locator('[data-test="inventory-item-name"]')
    .textContent();

  if (productName === null) {
    throw new Error("Product name was not found");
  }

  // Add product to cart
  await product.getByRole("button", { name: "Add to cart" }).click();

  // Check cart badge count
  await expect(productPage.shoppinCartBadge).toHaveText("1");

  // Click shopping cart button
  await productPage.shoppingCartBtn.click();

  // Verify Cart page
  await expect(page).toHaveURL(/\/cart\.html$/);

  // Verify the added product is displayed in Cart
  await expect(
    cartPage.cartItem.nth(0).locator('[data-test="inventory-item-name"]'),
  ).toHaveText(productName);
});

// TC_CART_003 - Verify multiple added products are displayed in Cart correctly
test("TC_CART_003 - Verify multiple added products are displayed correctly in Cart", async ({
  page,
  productPage,
  cartPage,
}) => {
  await productPage.open();

  await productPage.addProduct("Sauce Labs Backpack");
  await productPage.addProduct("Sauce Labs Bolt T-Shirt");

  await expect(productPage.shoppinCartBadge).toHaveText("2");

  await productPage.openCart();

  await expect(cartPage.cartItem).toHaveCount(2);

  await expect(
    cartPage.cartItem.filter({ hasText: "Sauce Labs Backpack" }),
  ).toBeVisible();

  await expect(
    cartPage.cartItem.filter({ hasText: "Sauce Labs Bolt T-Shirt" }),
  ).toBeVisible();
});

// TC_CART_005 - Verify product information is correct in Cart
test.only("Verify product information is preserved correctly in Cart", async ({
  productPage,
  cartPage,
}) => {

  productPage.open() 

  // Select the product
  const product = productPage.getProductByName("Sauce Labs Backpack");

  // requireValue funtion to confirm output is not null
  function requireValue(value: string | null, fieldName: string): string {
    if (value === null) {
      throw new Error(`${fieldName} was not found`);
    }
    return value;
  }

  // Capture product information from Products page
  const productName = requireValue(
    await product.locator('[data-test="inventory-item-name"]').textContent(),
    "Product Name",
  );

  const productDescription = requireValue(
    await product.locator('[data-test="inventory-item-desc"]').textContent(),
    "Product Descripton",
  );

  const productPrice = requireValue(
    await product.locator('[data-test="inventory-item-price"]').textContent(),
    "Product Price",
  );

  // Add product to Cart
  // await product.getByRole("button", { name: "Add to cart" }).click();
  await productPage.addProduct("Sauce Labs Backpack");

  // Open Cart
  await productPage.openCart();

  // Locate the product in Cart
  const cartProduct = cartPage.cartItem.filter({
    hasText: productName,
  });

  // Verify product information was preserved
  await expect(
    cartProduct.locator('[data-test="inventory-item-name"]'),
  ).toHaveText(productName);

  await expect(
    cartProduct.locator('[data-test="inventory-item-desc"]'),
  ).toHaveText(productDescription);

  await expect(
    cartProduct.locator('[data-test="inventory-item-price"]'),
  ).toHaveText(productPrice);
});

// TC_CART_006 - Verify product price matches the Products page


// TC_CART_007 - Verify product can be removed from Cart
// TC_CART_008 - Verify Cart badge updates ../ removing a product
// TC_CART_009 - Verify Cart behavior when all products are removed
// TC_CART_010 - Verify Continue Shopping button navigates to Products page
// TC_CART_011 - Verify Checkout button navigates to Checkout page
// TC_CART_012 - Verify Cart contents persist after navigating away and returning
// TC_CART_013 - Verify Cart behavior when no products are added
