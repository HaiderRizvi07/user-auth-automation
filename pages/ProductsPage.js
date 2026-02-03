class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsLink = 'a[href="/products"]';
    this.searchInput = '#search_product';
    this.searchButton = '#submit_search';
    this.firstAddToCart = '(//a[contains(text(),"Add to cart")])[1]';
  }

  async openProducts() {
    await this.page.click(this.productsLink);
  }

  async searchProduct(product) {
    await this.page.fill(this.searchInput, product);
    await this.page.click(this.searchButton);
  }

  async addFirstProductToCart() {
    await this.page.click(this.firstAddToCart);
  }
}

module.exports = { ProductsPage };
