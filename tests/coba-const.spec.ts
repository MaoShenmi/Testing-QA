import { test, expect } from '@playwright/test';

test.describe('Login', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://www.saucedemo.com');
    });

    const loginForm = async (page, username, password) => {
        await page.locator('[data-test="username"]').fill(username);
        await page.locator('[data-test="password"]').fill(password);
    };  

    test('Mengisi data dengan berbagai inputan', (async ({page}) => {
        const data = [
            ['standard_user', '1234'],
            ['abcd', 'secret_sauce'],
            ['', 'secret_sauce'],
            ['standard_user', ''],
            ['', ''],
            ['standard_user','secret_sauce'],
            ['locked_out_user','secret_sauce'],
            ['problem_user','secret_sauce'],
            ['performance_glitch_user','secret_sauce'],
            ['error_user','secret_sauce'],
            ['visual_user','secret_sauce']
        ];

        for (const [username, password] of data){
            await page.locator('[data-test="username"]').fill(username);
            await page.locator('[data-test="password"]').fill(password);

            await page.locator('[data-test="login-button"]').click();
            await expect(page).toHaveURL('/inventory.html');

        }
        
    }))


})


// 'standard_user', 'secret_sauce'