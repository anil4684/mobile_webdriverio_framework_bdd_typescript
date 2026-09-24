Feature: Remove Product from Cart

  Background:
    Given I am on the Swag Labs login screen
    When I login with valid credentials

  @TC_002_RemoveProductToCart
  Scenario: Remove product from cart
    When I add the product using test data "TC_002_RemoveProductToCart"
    And I remove the product using test data "TC_002_RemoveProductToCart"
    And I open the cart
    Then the product should not be present in the cart using test data "TC_002_RemoveProductToCart"