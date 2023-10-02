// @ts-check
const { test, expect } = require('@playwright/test');


/*test.beforeAll(async ({ page }) => {
  //console.log(`Running ${testInfo.title}`);
  await page.goto('http://127.0.0.1:3000');
});*/

test.describe('two tests', () => {

  test('homepage has expected title', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/StackDemo/);
  });

  test('signin link functions', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000/signin');

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();

    await page.getByText('Select Username').click();
    await page.getByText('demouser', { exact: true }).click();

    await page.getByText('Select Password').click();
    await page.getByText('testingisfun99', { exact: true }).click();

    await page.getByRole('button', { name: 'Log In' }).click();

    await expect(page.getByText('demouser')).toBeVisible();

  });

});
