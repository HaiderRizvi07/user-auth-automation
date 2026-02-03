const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/ProductsPage');

test('User can search and add product to cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await page.goto('/');
  await productsPage.openProducts();
  await productsPage.searchProduct("Dress");
  await productsPage.addFirstProductToCart();
  await expect(page.locator('text=Added!')).toBeVisible();
});
