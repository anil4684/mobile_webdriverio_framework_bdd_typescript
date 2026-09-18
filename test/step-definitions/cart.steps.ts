import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import { pages } from '../../test/fixtures/pages.fixture.ts';

import addProductData from '../../src/data/TC_001_AddProductToCart.json'
    with { type: 'json' };

import removeProductData from '../../src/data/TC_002_RemoveProductToCart.json'
    with { type: 'json' };


When('I open the cart', async () => {

    await pages.productsPage.clickGoToCart();

});


Then('the product should be present in the cart', async () => {

    const isPresent =
        await pages.yourCartPage.isProductPresent(
            addProductData.productName.name
        );

    await expect(isPresent).toBe(true);

});


Then('the product should not be present in the cart', async () => {

    const isPresent =
        await pages.yourCartPage.isProductPresent(
            removeProductData.productName.name
        );

    await expect(isPresent).toBe(false);

});