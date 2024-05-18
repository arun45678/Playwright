const{test,expect}=require('@playwright/test')

test("Verify Application login",async function({page}){

await page.goto('https://systemqa.asite.com/login')
//await page.viewportSize().width()
//await page.viewportSize().height()gi
 const url=await page.url()
 console.log('This is my URL' + url)
 const title=await page.title()
 console.log('This is pagetitle'+title)
 await expect(page).toHaveTitle("Login")


  await page.frameLocator('iframe[name="iFrameAsite"]').getByPlaceholder('Login (Email)').fill('akhatri@asite.com');
  await page.frameLocator('iframe[name="iFrameAsite"]').getByPlaceholder('Password').fill('Asite@123');
  await page.frameLocator('iframe[name="iFrameAsite"]').getByRole('button', { name: 'Login' }).click();

  const Pagetitle=await page.title()
  console.log("This is page title " +Pagetitle)
  await expect(page).toHaveTitle("Dashboard")
  await page.locator("//span[normalize-space()='Project Forms']").click()


}

)
