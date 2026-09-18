import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import { LoginPage } from '../../src/pages/LoginPage.ts';
//import { ProductsPage } from '../../src/pages/ProductsPage.ts';
import { qaConfig } from '../../config/qa.config.ts';

const loginPage = new LoginPage();

Given('I am on the Swag Labs login screen', async () => {
await expect(
await loginPage.isLoginPageDisplayed()
).toBe(true);
});

When('I login with valid credentials', async () => {
await loginPage.login(
qaConfig.username,
qaConfig.password
);
});

Then('I should be on the Products screen', async () => {
   // await ProductsPage.verifyProductsPage();
});
