import { test, expect, request } from "@playwright/test";
const xml2js = require('xml2js');
let sessionId;
/*
test('API Get Request', async ({ request }) => {

    const respons = await request.post('https://dmsqa.asite.com/apilogin/',{
        headers:{
            Accept:"application/json"
        }
    })
    expect(respons.status()).toBe(200)
    console.log(await respons.json())
}) */
/*
test('API Get Request', async ({ request }) => {
   const respons = await request.get('https://restful-booker.herokuapp.com/booking/2402',{
        headers:{
            Accept:"application/json"
        }
    })
    expect(respons.status()).toBe(200)
    //const test = await respons.text()
   // expect(test).toContain('Arun')
    console.log(await respons.json())
}
)
*/
test.describe.serial('Login API', () => {

  // Test to get session ID
  test('Login API ASesssionID', async ({ request }) => {
    const response = await request.post('https://dmsqa.asite.com/apilogin/', {
      form: {
        emailId: 'akhatri@asite.com',
        password: 'Asite@123',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    expect(response.status()).toBe(200);
    const responseXml = await response.text();

    // Convert XML to JSON
    const parser = new xml2js.Parser();
    const responseJson = await new Promise((resolve, reject) => {
      parser.parseString(responseXml, (err, result) => {
        if (err) {
          return reject(new Error('Error parsing XML'));
        }
        resolve(result);
      });
    });

    sessionId = responseJson.UserProfile.Sessionid[0];
    console.log("This is your Session ID== " + sessionId);
  });

  // Test to use session ID
  test('API Get Workspace-list', async ({ request }) => {
    if (!sessionId) {
      throw new Error('Session ID is not set. Ensure the login test runs before this test.');
    }

    const response = await request.get('https://dmsqaak.asite.com/api/workspace/workspacelist', {
      headers: {
        ASessionID: sessionId,
      },
    });

    expect(response.status()).toBe(200);
    console.log(await response.text());
  });

});