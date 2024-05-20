import { test, expect, request } from "@playwright/test";
/*
test('API Get Request', async ({ request }) => {

    const respons = await request.get('https://restful-booker.herokuapp.com/booking/:id',{
        headers:{
            Accept:"application/json"
        }
    })
    expect(respons.status()).toBe(200)
    console.log(await respons.json())
}) */

test('API Get Request', async ({ request }) => {

    const respons = await request.get('https://restful-booker.herokuapp.com/booking/2402',{
        headers:{
            Accept:"application/json"
        }
    })
    expect(respons.status()).toBe(200)
    //const test = await respons.text()
   // expect(test).toContain('Arun')
    //console.log(await respons.json())
})