class CartPage {
  constructor(page) {
    this.page = page;
    this.viewCart = 'u:has-text("View Cart")';
    this.checkoutButton = 'a:has-text("Proceed To Checkout")';
  }

  async openCart() {
    await this.page.click(this.viewCart);
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = { CartPage };
