const { Console } = require("console");

// pages/LoginPage.js
class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.frameLocator('iframe[name="iFrameAsite"]').getByPlaceholder('Login (Email)');
      this.passwordInput = page.frameLocator('iframe[name="iFrameAsite"]').getByPlaceholder('Password');
      this.loginButton = page.frameLocator('iframe[name="iFrameAsite"]').getByRole('button', { name: 'Login' });
      this.Profileicon = page.locator('#userProfImg')
      this.logoutButton = page.locator('#logout')

      
      
    }
  
    async navigate() {
      await this.page.goto('https://systemqa.asite.com/login');
    }
  
    async login(username, password) {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
      await this.page.waitForNavigation();
      await this.page.waitForTimeout(10000);
      await this.Profileicon.click();
    }
    
  
    async isLoggedIn() {
      return this.logoutButton.isVisible();
    }
      
    async Pagetitle() {
      // Check the page title to verify login success
      const title = await this.page.title();
      console.log("This is your current page title  is ===" + title)
      return title === 'Dashboard'; // Replace with the actual expected title
    }
  
  
    
  }
  module.exports = { LoginPage };