import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartItem : Locator;
  readonly continueShoppingBtn :Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator("[data-test='title']");
    this.cartItem = page
      .locator("[data-test='cart-list']")
      .locator("[data-test='inventory-item']");   
    this.continueShoppingBtn = page.getByRole("button", {name:"Continue Shopping"})

  }

  async open() {
    await this.page.goto("/cart.html");
  }
  
}
