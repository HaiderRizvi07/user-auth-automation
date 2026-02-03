const { test, expect } = require('@playwright/test');

test('Validate products API', async ({ request }) => {
  const response = await request.get('https://automationexercise.com/api/productsList');
  const body = await response.json();
  expect(response.status()).toBe(200);
  expect(body.products.length).toBeGreaterThan(0);
});
