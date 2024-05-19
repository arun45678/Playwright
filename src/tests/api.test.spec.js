import { test, expect, request } from "@playwright/test";


test('API Post Request', async ({ request }) => {

    const respons = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Arun",
            "job": "Sr.QA"
        }
    })
    expect(respons.status()).toBe(201)
    const test = await respons.text()
    expect(test).toContain('Arun')
    console.log(await respons.json())
})

test('API Put Request', async ({ request }) => {

    const respons = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Arun",
            "job": "Sr.QA"
        }
    })
    expect(respons.status()).toBe(200)
    const test = await respons.text()
    expect(test).toContain('Arun')
    console.log(await respons.json())
})

test('API Get Request', async ({ request }) => {

    const respons = await request.get('https://reqres.in/api/users/2')
    expect(respons.status()).toBe(200)
    const test = await respons.text()
    expect(test).toContain('Arun')
    console.log(await respons.json())
}) 