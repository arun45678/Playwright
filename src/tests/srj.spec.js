import { test, expect, request } from "@playwright/test";
const xml2js = require('xml2js');

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
test('API Post Request', async ({ request }) => {

    const response = await request.post('https://dmsqa.asite.com/apilogin/', {
        form: {
            emailId: 'akhatri@asite.com',
            password: 'Asite@123',
          },
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          }
    })
    expect(response.status()).toBe(200)
    const responseXml = await response.text();

    // Convert XML to JSON
  const parser = new xml2js.Parser();
  parser.parseString(responseXml, (err, result) => {
    if (err) {
      throw new Error('Error parsing XML');
    }
    
    const responseJson = result;
    //console.log(responseJson)

    var sessionId=responseJson.UserProfile.Sessionid[0];
    console.log("This is your Session ID " + sessionId)

    
});

});