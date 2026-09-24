import { When, Then } from '@wdio/cucumber-framework';

import { pages } from '../../test/fixtures/pages.fixture.ts';
import { getTestData } from '../../src/utils/testData.ts';


When('I proceed to checkout', async () => {

    await pages.yourCartPage.clickCheckout();

});


When(
    'I enter the checkout information using test data {string}',
    async (testDataFile: string) => {

        const data = getTestData<{
            checkoutInformation: {
                firstName: string;
                lastName: string;
                zipCode: string;
            };
        }>(`${testDataFile}.json`);

        await pages.checkoutInformationPage.enterCheckoutInformation(
            data.checkoutInformation.firstName,
            data.checkoutInformation.lastName,
            data.checkoutInformation.zipCode
        );

    }
);


When('I continue to the checkout overview', async () => {

    await pages.checkoutInformationPage.clickContinue();

});


When('I finish the order', async () => {

    await pages.checkoutOverviewPage.clickFinish();

});


Then('I should see the order confirmation message', async () => {

    await pages.checkoutCompletePage.verifyThankYouMessage();

});