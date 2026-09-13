import {Page, Locator} from "@playwright/test"

export class ProductPage{
  readonly page : Page;
  readonly pageTitle : Locator;
  readonly productCards : Locator;
  readonly productNames: Locator;
  readonly productPrices:Locator;
  readonly productDescriptions:Locator;
  // readonly productImages:Locator;
  readonly addToCartBtn : Locator;
  readonly removeFromCartBtn : Locator;
  readonly shoppinCartBadge : Locator;
  readonly shoppingCartBtn : Locator;
  readonly selectDropdown : Locator;


  constructor(page:Page){
    this.page = page;
    this.pageTitle = page.getByText("Products");
    this.productCards = page.locator('[data-test="inventory-item"]')
    this.productNames = page.locator("[data-test='inventory-item-name']")
    this.productPrices =page.locator("[data-test='inventory-item-price']")
    this.productDescriptions = page.locator("[data-test='inventory-item-desc']")
    // this.productImages =page.locator("[data-test='inventory-item-name']")
    this.addToCartBtn = page.getByRole("button", { name: "Add to cart" })
    this.removeFromCartBtn = page.getByRole("button", {name:"Remove"})
    this.shoppinCartBadge = page.locator("[data-test='shopping-cart-badge']")
    this.shoppingCartBtn = page.locator("[data-test='shopping-cart-link']")

    this.selectDropdown = page.locator("select");
    

  }

  // open a product page
  async open(){
    await this.page.goto("https://www.saucedemo.com/inventory.html");
  }

  // choose a select option
  async selectOption(option:string){
    await this.selectDropdown.selectOption(option)
  }

  // get product by product name
  getProductByName(name:string){
    return this.productCards.filter({hasText:name});
  }

  // add a product by index or name    //this code is better than that of remove product but both works
  async addProduct(nameorindex:string | number){
    const product = typeof nameorindex === "string"? this.productCards.filter({hasText:nameorindex}):this.productCards.nth(nameorindex);
    await product.getByRole("button", { name: "Add to cart" }).click();
    return product;
  }

  // remove a product by name or index
  async removeProduct(nameorindex:string | number){
    if(typeof nameorindex === "string"){
      await this.productCards.filter({hasText:nameorindex}).getByRole("button", { name: "Remove" }).click()
    }
    else{
      await this.productCards.nth(nameorindex).getByRole("button", { name: "Remove" }).click()
    }
  }

  // click the cart icon
  async openCart(){
    await this.shoppingCartBtn.click();
  }

}