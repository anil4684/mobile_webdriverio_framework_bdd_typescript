import { When } from '@wdio/cucumber-framework';

import { pages } from '../../test/fixtures/pages.fixture.ts';

import addProductData from '../../src/data/TC_001_AddProductToCart.json'
    with { type: 'json' };

import removeProductData from '../../src/data/TC_002_RemoveProductToCart.json'
    with { type: 'json' };


When('I add the product to the cart', async () => {

    await pages.productsPage.addProductToCart(
        addProductData.productName.name
    );

});


When('I remove the product from the cart', async () => {

    await pages.productsPage.removeProductfromCart(
        removeProductData.productName.name
    );

});