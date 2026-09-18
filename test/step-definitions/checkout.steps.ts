import { When, Then } from '@wdio/cucumber-framework';

import { pages } from '../../test/fixtures/pages.fixture.ts';

import checkoutData from '../../src/data/TC_003_CheckOut.json'
    with { type: 'json' };

When('I add the checkout product to the cart', async () => {
    await pages.productsPage.addProductToCart(
        checkoutData.productName
    );
});

When('I proceed to checkout', async () => {
    await pages.yourCartPage.clickCheckout();
});

When('I enter the checkout information', async () => {
    await pages.checkoutInformationPage.enterCheckoutInformation(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.zipCode
    );
});

When('I continue to the checkout overview', async () => {
    await pages.checkoutInformationPage.clickContinue();
});

When('I finish the order', async () => {
    await pages.checkoutOverviewPage.clickFinish();
});

Then('I should see the order confirmation message', async () => {
    await pages.checkoutCompletePage.verifyThankYouMessage();
});