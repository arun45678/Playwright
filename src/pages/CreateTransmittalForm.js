
const { LoginPage } = require('../tests/loginakframework.spec.js');
const loginData = require('../data/loginData');


class TransmittalPage {
    constructor(page) {
    this.page = page;
    this.ProjectForms=page.locator("#navcommunications")
    this.WorkspaceSelection=page.locator("div[title='John Holland Tender Quicktext eLetter_PS'] span")
    this.Folderselect=page.locator("div[title='Correspondence'] span")
    this.Formselect=page.Formselect("div[title='Transmittal HTML'] span")
    this.CreateButton = page.locator("button[title='Create Form']");


    }
  
    async navigate() {
      await this.page.goto('https://systemqa.asite.com/login');
      test.describe('Login tests', () => {
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

      
      
    }
  
    async createTransmittal(title, description, recipient) {
      await this.ProjectForms.click();
      await this.WorkspaceSelection.click();
      await this.Folderselect.click();
      await this.Formselect.click();
      await this.CreateButton.click();
    }
  
    
  }
  
  module.exports = TransmittalPage;