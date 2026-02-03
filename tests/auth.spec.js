const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const data = require('../utils/testData');

test('User should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.goToLogin();
  await loginPage.login(data.user.email, data.user.password);
  await expect(page.locator(loginPage.loggedUser)).toBeVisible();
});
