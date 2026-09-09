import { test as setup,expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

setup("authenticate", async ({ page }) =>{
  const loginPage = new LoginPage(page);

await loginPage.open();
await loginPage.login("standard_user", "secret_sauce");
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

// save the login state
await page.context().storageState({
  path: "auth/auth.json",
});
})
