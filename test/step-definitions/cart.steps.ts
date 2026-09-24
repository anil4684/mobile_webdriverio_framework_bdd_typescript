import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import { pages } from '../../test/fixtures/pages.fixture.ts';
import { getTestData } from '../../src/utils/testData.ts';


When('I open the cart', async () => {

    await pages.productsPage.clickGoToCart();

});


Then(
    'the product should be present in the cart using test data {string}',
    async (testDataFile: string) => {

        const data = getTestData<{
            productName: {
                name: string;
            };
        }>(`${testDataFile}.json`);

        const isPresent =
            await pages.yourCartPage.isProductPresent(
                data.productName.name
            );

        await expect(isPresent).toBe(true);

    }
);


Then(
    'the product should not be present in the cart using test data {string}',
    async (testDataFile: string) => {

        const data = getTestData<{
            productName: {
                name: string;
            };
        }>(`${testDataFile}.json`);

        const isPresent =
            await pages.yourCartPage.isProductPresent(
                data.productName.name
            );

        await expect(isPresent).toBe(false);

    }
);