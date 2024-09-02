import { test, expect, _baseTest } from '@playwright/test';

// URL
const loginPage = async (page) => {
    await page.goto('https://www.saucedemo.com');
};

const dashboardPage = async (page) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
};

// TEST CASE

    // LOGIN PAGE
test.describe('Login Test Case', () => {

    const loginForm = async (page, username, password) => {
        await page.locator('[data-test="username"]').fill(username);
        await page.locator('[data-test="password"]').fill(password);
    };

    test.beforeEach(async ({ page }) => {
        await loginPage(page);
    });

    test('Login invalid, username tidak terdaftar', async ({ page }) => {
        await loginForm(page, 'cobaqa', 'secret_sauce');
        await expect(page.locator('[data-test="username"]')).toHaveValue('cobaqa');
        await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    test('Login invalid, username null', async ({ page }) => {
        await loginForm(page, '', 'secret_sauce');
        await expect(page.locator('[data-test="username"]')).toBeEmpty();
        await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    test('Login invalid, password salah', async ({ page }) => {
        await loginForm(page, 'standard_user', 'cobapassword');
        await expect(page.locator('[data-test="username"]')).toHaveValue('standard_user');
        await expect(page.locator('[data-test="password"]')).toHaveValue('cobapassword');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    test('Login invalid, password null', async ({ page }) => {
        await loginForm(page, 'standard_user', '');
        await expect(page.locator('[data-test="username"]')).toHaveValue('standard_user');
        await expect(page.locator('[data-test="password"]')).toBeEmpty();
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    test('Login invalid, all null', async ({ page }) => {
        await expect(page.locator('[data-test="username"]')).toBeEmpty();
        await expect(page.locator('[data-test="password"]')).toBeEmpty();
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    test('Login valid', async ({ page }) => {
        await loginForm(page, 'standard_user', 'secret_sauce');
        await expect(page.locator('[data-test="username"]')).toHaveValue('standard_user');
        await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.context().storageState({ path: 'storageState.json' });
        await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    });
});


test.describe('Dashboard2 Test Case', () => {
    
    test.use({ storageState: 'storageState.json' }); //LOGIN SESSION
    
    test.beforeEach(async ({ page }) => {
        await dashboardPage(page);
    });

    test('Tambah item kedalam cart', async({ page }) => {
        await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
        await expect(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Backpackcarry.' }).first()).toBeVisible();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
    });

    test('Remove item dalam card', async({ page }) => {
        await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
        await expect(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Backpackcarry.' }).first()).toBeVisible();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
    });

    test('Check item didalam cart yang telah ditambah', async({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
    });
    
    test('Hapus item didalam cart yang telah ditambah', async({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();      
    });
    
    test('Check detail item', async({ page }) => {  
        await expect(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Backpackcarry.' }).first()).toBeVisible();
        await page.locator('[data-test="item-4-title-link"]').click();
        await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
    });
 
    test('Tambah item didalam detail item', async({ page }) => {   
        await expect(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Backpackcarry.' }).first()).toBeVisible();
        await page.locator('[data-test="item-4-title-link"]').click();
        await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
        await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
        await page.locator('[data-test="add-to-cart"]').click();
        await expect(page.locator('[data-test="remove"]')).toBeVisible();
    });

    test('Remove item didalam detail item', async({ page }) => {   
        await expect(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Backpackcarry.' }).first()).toBeVisible();
        await page.locator('[data-test="item-4-title-link"]').click();
        await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
        await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
        await page.locator('[data-test="add-to-cart"]').click();
        await expect(page.locator('[data-test="remove"]')).toBeVisible();
        await page.locator('[data-test="remove"]').click();
        await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
    });
    
    test('Berhasil melakukan Checkout', async({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="checkout"]')).toBeVisible();
        await page.locator('[data-test="checkout"]').click();
        await expect(page.locator('[data-test="checkout-info-container"]')).toBeVisible();
        await page.locator('[data-test="firstName"]').fill('coba');
        await expect(page.locator('[data-test="firstName"]')).toHaveValue('coba');
        await page.locator('[data-test="lastName"]').fill('checkout');
        await expect(page.locator('[data-test="lastName"]')).toHaveValue('checkout');
        await page.locator('[data-test="postalCode"]').fill('12345');
        await expect(page.locator('[data-test="postalCode"]')).toHaveValue('12345');
        await expect(page.locator('[data-test="continue"]')).toBeVisible();
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('[data-test="checkout-summary-container"]')).toBeVisible();
        await expect(page.locator('[data-test="finish"]')).toBeVisible();
        await page.locator('[data-test="finish"]').click();
        await expect(page.locator('[data-test="checkout-complete-container"]')).toBeVisible();
    });

    test('Filter item pada halaman dashboard', async({ page }) => {
        await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
        await page.locator('[data-test="product-sort-container"]').selectOption('za');
        await page.locator('[data-test="inventory-container"]').click();
        await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
        await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
        await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
        await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
        await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
    }); 
     
});