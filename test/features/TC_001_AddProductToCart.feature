Feature: Add Product to Cart

  Background:
    Given I am on the Swag Labs login screen
    When I login with valid credentials

  @TC_001_AddProductToCart
  Scenario: Add product to cart
    When I add the product using test data "TC_001_AddProductToCart"
    And I open the cart
    Then the product should be present in the cart using test data "TC_001_AddProductToCart"