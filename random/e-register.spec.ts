import { test, expect } from '@playwright/test';

test('Valid, Register', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Coba');
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('Last Nama *').fill('Valid');
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('2113320000');
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('cobavalidqa0@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('cobavalid');
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page.getByText('Congratulations your account')).toBeVisible();
});

test('Invalid, First Name None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByRole('main').locator('div').filter({ hasText: 'Registration Mahasiswa Dosen' }).first().click();
    await expect(page.getByText('First name *Required.')).toBeVisible();
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('Last Nama *').fill('Valid');
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('2113320002');
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('valid2@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('valid1234');
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign Up' }).click();
});

test('Invalid, First Name None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Valid');
    await page.getByLabel('Last Nama *').click();
    await page.getByRole('main').locator('div').filter({ hasText: 'Registration Mahasiswa Dosen' }).first().click();
    await expect(page.getByText('Last Nama *Required.')).toBeVisible();
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('2113320003');
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('valid3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('valid1234');
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign Up' }).click();
});

test('Invalid, Last Name None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Valid');
    await page.getByLabel('Last Nama *').click();
    await page.getByRole('main').locator('div').filter({ hasText: 'Registration Mahasiswa Dosen' }).first().click();
    await expect(page.getByText('Last Nama *Required.')).toBeVisible();
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('2113320003');
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('valid3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('valid1234');
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign Up' }).click();
});

test('Invalid, NIM None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Valid');
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('Last Nama *').fill('Valid');
    await page.getByLabel('NIM *').click();
    await page.getByRole('main').locator('div').filter({ hasText: 'Registration Mahasiswa Dosen' }).first().click();
    await expect(page.getByText('NIM *Required.')).toBeVisible();
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('invalid1@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('invalid1234');
});

test('Invalid, NIM None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Valid');
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('Last Nama *').fill('Valid');
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('2113320005');
    await page.getByLabel('E-mail *').click();
    await page.getByRole('main').locator('div').filter({ hasText: 'Registration Mahasiswa Dosen' }).first().click();
    await expect(page.getByText('E-mail *Required.')).toBeVisible();
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('invalid1234');
});

test('Invalid, NIM None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Valid');
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('Last Nama *').fill('Valid');
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('2113320005');
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('invalid3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByRole('main').locator('div').filter({ hasText: 'Registration Mahasiswa Dosen' }).first().click();
    await expect(page.getByText('Passwordvisibility_offRequired.0')).toBeVisible();
});

test('Invalid, NIM None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('NIM *').click();
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('Password').click();
    await page.getByRole('main').locator('div').filter({ hasText: 'Registration Mahasiswa Dosen' }).first().click();
    await expect(page.getByText('Last Nama *Required.')).toBeVisible();
    await expect(page.getByText('Last Nama *Required.')).toBeVisible();
    await expect(page.getByText('NIM *Required.')).toBeVisible();
    await expect(page.getByText('E-mail *Required.')).toBeVisible();
    await expect(page.getByText('Passwordvisibility_offRequired.0')).toBeVisible();
});

test('Invalid, First Name None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('1234');
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('Last Nama *').fill('invalid');
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('2113320008');
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('valid8@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('valid1234');
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign Up' }).click();
});

test('Invalid, First Name None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Invalid');
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('Last Nama *').fill('1234');
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('2113320009');
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('valid9@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('valid1234');
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign Up' }).click();
});

test('Invalid, First Name None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Coba');
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('Last Nama *').fill('invalid');
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('cobacobaqa');
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('invalid10@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('valid1234');
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign Up' }).click();
});

test('Invalid, First Name None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Coba');
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('Last Nama *').fill('invalid');
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('cobacobaqa');
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('cobavalidqa0@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('valid1234');
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign Up' }).click();
});

test('Invalid, First Name None', async ({ page }) => {
    await page.goto('https://elearning.pnb.ac.id/');
    await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
    await page.getByLabel('First name *').click();
    await page.getByLabel('First name *').fill('Coba');
    await page.getByLabel('Last Nama *').click();
    await page.getByLabel('Last Nama *').fill('invalid');
    await page.getByLabel('NIM *').click();
    await page.getByLabel('NIM *').fill('cobacobaqa');
    await page.getByLabel('E-mail *').click();
    await page.getByLabel('E-mail *').fill('invalid11@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('1234567');
    await page.getByText('Min 8 characters').click();  
});
