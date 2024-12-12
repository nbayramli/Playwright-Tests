class LoginPage {
    constructor(page) {
      this.page = page;
      this.userName = '#username'; // Replace with the actual selector for the email field
      this.passwordField = '#password'; // Replace with the actual selector for the password field
      this.loginButton = 'button[type="submit"]'; // Replace with the actual selector for the login button
    }
  
    async login(email, password) {
      await this.page.fill(this.userName, email);
      await this.page.fill(this.passwordField, password);
      await this.page.click(this.loginButton);
  
      // Wait for navigation after login
      await this.page.waitForURL(); // Update the URL pattern as needed
    }
  }
  
  module.exports = LoginPage;
  