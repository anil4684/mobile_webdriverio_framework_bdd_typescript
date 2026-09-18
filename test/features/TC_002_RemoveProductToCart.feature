Feature: Remove Product from Cart

  Background:
    Given I am on the Swag Labs login screen
    When I login with valid credentials

  @TC_002_RemoveProductToCart
  Scenario: Remove product from cart
    When I add the product to the cart
    And I remove the product from the cart
    And I open the cart
    Then the product should not be present in the cart