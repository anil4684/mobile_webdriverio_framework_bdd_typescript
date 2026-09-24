export class YourCartPage {

    private checkOut() {
        return $('~test-CHECKOUT');
    }

    async scrollToCheckout(): Promise<void> {
        await $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-CHECKOUT"))'
        );
    }

    async clickCheckout(): Promise<void> {
        await this.scrollToCheckout();
        await this.checkOut().click();
    }

async isProductPresent(productName: string): Promise<boolean> {
    const product = $(`//*[@text="${productName}"]`);

    await browser.pause(3000);

    console.log('Product name:', productName);
    console.log('Exists:', await product.isExisting());
    console.log('Displayed:', await product.isDisplayed());

    return await product.isExisting();
}
}