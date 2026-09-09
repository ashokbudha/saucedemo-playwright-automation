// TODO:
// TC_LOGIN_001 - Valid login
// TC_LOGIN_002 - Invalid password
// TC_LOGIN_003 - Invalid username
// TC_LOGIN_004 - Empty username
// TC_LOGIN_005 - Empty password
// TC_LOGIN_006 - Locked user
// TC_LOGIN_007 - Empty username and password

import { test, expect } from "@playwright/test";

// TC_LOGIN_001 - Valid login
test("TC_LOGIN_001 - Valid login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

// TC_LOGIN_002 - Invalid password
test("TC_LOGIN_002 - Invalid password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("abcdefg");

  await page.getByRole("button", { name: "Login" }).click();

  // await expect(page.getByRole("heading", {name:"Epic sadface: Username and password do not match any user in this service"})).toBeVisible()
  await expect(
    page.getByText(
      "Epic sadface: Username and password do not match any user in this service",
    ),
  ).toBeVisible();
});

// TC_LOGIN_003 - Invalid username
test("TC_LOGIN_003 - Invalid username", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByRole("textbox", { name: "Username" }).fill("ashokbudha");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByText(
      "Epic sadface: Username and password do not match any user in this service",
    ),
  ).toBeVisible();
});

// TC_LOGIN_004 - Empty username
test("TC_LOGIN_004 - Empty username", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByRole("textbox", { name: "Username" }).fill("");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByText("Epic sadface: Username is required"),
  ).toBeVisible();
});

// TC_LOGIN_005 - Empty password
test(" TC_LOGIN_005 - Empty password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByText("Epic sadface: Password is required"),
  ).toBeVisible();
});

// TC_LOGIN_006 - Locked user
test("TC_LOGIN_006 - Locked user", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByRole("textbox", { name: "Username" }).fill("locked_out_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByText("Epic sadface: Sorry, this user has been locked out."),
  ).toBeVisible();
});

// TC_LOGIN_007 → Empty username and password
test("TC_LOGIN_007 - Empty username and password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByRole("textbox", { name: "Username" }).fill("");
  await page.getByRole("textbox", { name: "Password" }).fill("");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByText("Epic sadface: Username is required"),
  ).toBeVisible();
});
