Feature: Product Checkout

Background:
Given I am on the Swag Labs login screen
When I login with valid credentials

@TC_003_CheckOut
Scenario: Complete checkout successfully
When I add the checkout product to the cart
And I open the cart
And I proceed to checkout
And I enter the checkout information
And I continue to the checkout overview
And I finish the order
Then I should see the order confirmation message
