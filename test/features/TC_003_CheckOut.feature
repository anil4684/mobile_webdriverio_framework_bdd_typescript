Feature: Product Checkout

  Background:
    Given I am on the Swag Labs login screen
    When I login with valid credentials

  @TC_003_CheckOut
  Scenario: Complete checkout successfully
    When I add the product using test data "TC_003_CheckOut"
    And I open the cart
    And I proceed to checkout
    And I enter the checkout information using test data "TC_003_CheckOut"
    And I continue to the checkout overview
    And I finish the order
    Then I should see the order confirmation message