import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
 
test.use({ storageState: 'storageState.json' });

test('Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    await page.context().storageState({ path: 'storageState.json' });
});


test.describe('Dashboard Test Case', () => {
    test.use({ storageState: 'storageState.json' });
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
    });

    test('add and remove cart', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await page.locator('[data-test="continue-shopping"]').click();
    }); 
    
    test('add and remove in card', async ({ page }) => {    
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await expect(page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        await expect(page.locator('[data-test="remove-sauce-labs-onesie"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
        await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
        await expect(page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')).toBeVisible();
        await page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    }); 
    
    test('add cart and checkout', async ({ page }) => {
        
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').fill('test1');
        await page.locator('[data-test="lastName"]').fill('test1');
        await page.locator('[data-test="postalCode"]').fill('83947');
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('[data-test="payment-info-label"]')).toBeVisible();
        await page.locator('[data-test="finish"]').click();
        await page.locator('[data-test="back-to-products"]').click();
    });
    
    test('cek detail product', async ({ page }) => {    await page.locator('[data-test="item-4-title-link"]').click();
        await expect(page.locator('[data-test="inventory-container"] div').filter({ hasText: 'Sauce Labs Backpackcarry.' }).first()).toBeVisible();
        await page.locator('[data-test="back-to-products"]').click();
        await page.locator('[data-test="item-0-title-link"]').click();
        await expect(page.locator('[data-test="inventory-container"] div').filter({ hasText: 'Sauce Labs Bike LightA red' }).first()).toBeVisible();
        await page.locator('[data-test="back-to-products"]').click();
        await page.locator('[data-test="item-1-title-link"]').click();
        await expect(page.locator('[data-test="inventory-container"] div').filter({ hasText: 'Sauce Labs Bolt T-ShirtGet' }).first()).toBeVisible();
        await page.locator('[data-test="add-to-cart"]').click();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
        await page.locator('[data-test="remove"]').click();
        await page.locator('[data-test="back-to-products"]').click();
    });
    
    test('Filter Product', async ({ page }) => {  await page.locator('[data-test="product-sort-container"]').selectOption('za');
      await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
      await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
      await page.locator('[data-test="product-sort-container"]').selectOption('az');
    });

});