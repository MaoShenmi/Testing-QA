import { test, expect } from '@playwright/test';

const loginPage = async(page) => {
    await page.goto('https://demoqa.com/text-box')
}

const form = async(page, userName, userEmail, currentAddress, permanentAddress) => {
    await page.get
}



const signupPage = async (page) => {
  await page.goto('https://elearning.pnb.ac.id/');
  await page.getByRole('banner').getByRole('link', { name: 'Sign Up' }).click();
};

const fillRegistrationForm = async (page, firstName, lastName, nim, email, password) => {
  await page.getByLabel('First name *').fill(firstName);
  await page.getByLabel('Last Nama *').fill(lastName);
  await page.getByLabel('NIM *').fill(nim);
  await page.getByLabel('E-mail *').fill(email);
  await page.getByLabel('Password').fill(password);
};

test.describe('Registration Test Cases', () => {
  test('Valid Registration', async ({ page }) => {
    await signupPage(page);
    await fillRegistrationForm(page, 'Coba', 'Valid', '2113320000', 'cobavalidqa0@gmail.com', 'cobavalid');
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page.getByText('Congratulations your account')).toBeVisible();
  });

  test('Missing First Name', async ({ page }) => {
    await signupPage(page);
    await fillRegistrationForm(page, '', 'Valid', '2113320002', 'valid2@gmail.com', 'valid1234');
    await expect(page.getByText('First name *Required.')).toBeVisible();
  });

  // Similar tests for missing Last Name, NIM, etc. with adjustments to fillRegistrationForm arguments

  test('Missing Last Name', async ({ page }) => {
    await signupPage(page);
    await fillRegistrationForm(page, 'Valid', '', '2113320003', 'valid3@gmail.com', 'valid1234');
    await expect(page.getByText('Last Nama *Required.')).toBeVisible();
  });

  // ... (similar tests for other missing fields)
});

test('invalid, username wrong', async ({ page }) => {


});