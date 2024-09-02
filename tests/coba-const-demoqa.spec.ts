import { test, expect } from '@playwright/test';

const textboxPage = async (page) => {
    await page.goto('https://demoqa.com/text-box');
  };

const textboxForm = async (page, fullname, email, currentAddress, permanentAddress) => {
  await page.getByPlaceholder('Full Name').fill(fullname);
  await page.getByPlaceholder('name@example.com').fill(email);
  await page.getByPlaceholder('Current Address').fill(currentAddress);
  await page.locator('#permanentAddress').fill(permanentAddress);
};

test.describe('Textbox Test Case', () => {
    test('Input data Valid', async ({ page }) => {
      await textboxPage(page);
      await textboxForm(page, 'cobaqa', 'coba@gmail.com', 'jl. Mencoba', 'jl. cobacoba');
      await page.getByRole('button', { name: 'Submit' }).click();
      await expect(page.getByText('Name:cobaqa')).toBeVisible();
    });
  
})


