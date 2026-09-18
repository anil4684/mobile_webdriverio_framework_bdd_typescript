Feature: Add Product to Cart

  Background:
    Given I am on the Swag Labs login screen
    When I login with valid credentials

  @TC_001_AddProductToCart
  Scenario: Add product to cart
    When I add the product to the cart
    And I open the cart
    Then the product should be present in the cart