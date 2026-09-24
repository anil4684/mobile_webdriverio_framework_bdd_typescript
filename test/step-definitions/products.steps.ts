import { When } from '@wdio/cucumber-framework';

import { pages } from '../../test/fixtures/pages.fixture.ts';
import { getTestData } from '../../src/utils/testData.ts';


When(
    'I add the product using test data {string}',
    async (testDataFile: string) => {

        const data = getTestData<{
            productName: {
                name: string;
            };
        }>(`${testDataFile}.json`);

        await pages.productsPage.addProductToCart(
            data.productName.name
        );

    }
);


When(
    'I remove the product using test data {string}',
    async (testDataFile: string) => {

        const data = getTestData<{
            productName: {
                name: string;
            };
        }>(`${testDataFile}.json`);

        await pages.productsPage.removeProductfromCart(
            data.productName.name
        );

    }
);