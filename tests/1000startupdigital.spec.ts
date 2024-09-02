import { test, expect, _baseTest } from '@playwright/test';

const berandaPage = async (page) => {
    await page.goto('https://1000startupdigital.id/');
};

test.describe('Daftar', () => {

    const daftar = async (page, username, password) => {
        await page.locator('[data-test="username"]').fill(username);
        await page.locator('[data-test="password"]').fill(password);
    };

    test('Login invalid, username tidak terdaftar', async ({ page }) => {
        await loginForm(page, 'cobaqa', 'secret_sauce');
        await expect(page.locator('[data-test="username"]')).toHaveValue('cobaqa');
        await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
});