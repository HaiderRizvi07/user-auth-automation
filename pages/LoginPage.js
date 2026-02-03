class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = 'a[href="/login"]';
    this.emailInput = 'input[data-qa="login-email"]';
    this.passwordInput = 'input[data-qa="login-password"]';
    this.loginButton = 'button[data-qa="login-button"]';
    this.loggedUser = 'a:has-text("Logged in as")';
  }

  async goToLogin() {
    await this.page.click(this.loginLink);
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = { LoginPage };
