const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../data/loginData');
const { title } = require('process');



test.describe('CreateTra', () => {
  loginData.forEach(({ username, password, expectedResult }) => {
    test(`login test with username: ${username} and expectedResult: ${expectedResult}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      // Navigate to the login page
      await loginPage.navigate();

      // Perform login
      await loginPage.login(username, password);
      // Check if login was successful by verifying the page title
      const isLoggedIn = await loginPage.isLoggedIn();
      expect(isLoggedIn).toBe(expectedResult);


      const Pagetitle = await loginPage.Pagetitle();
      expect(Pagetitle).toBe(expectedResult);

      
    });
  });
});