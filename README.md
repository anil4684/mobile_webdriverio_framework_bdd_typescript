# Mobile Automation Framework – WebdriverIO + Appium + Cucumber BDD

A scalable mobile automation testing framework built using **WebdriverIO, Appium, Cucumber BDD, TypeScript, Page Object Model (POM), JSON test data, and Allure reporting**.

The framework currently automates the **Sauce Labs Android Sample Application** using an Android Emulator and Appium's UiAutomator2 driver.

---

## 1. Framework Overview

### Application Under Test

**Sauce Labs Mobile Sample App**

### Platform

* Android
* Android Emulator
* UiAutomator2

### Automation Framework

* WebdriverIO
* Appium
* Cucumber BDD
* TypeScript
* Page Object Model

### Reporting

* Spec Reporter
* Allure Report

---

## 2. Technology Stack

| Technology        | Purpose                            |
| ----------------- | ---------------------------------- |
| Node.js           | JavaScript/TypeScript runtime      |
| TypeScript        | Programming language               |
| WebdriverIO       | Mobile automation framework        |
| Appium            | Mobile automation server           |
| UiAutomator2      | Android automation driver          |
| Cucumber          | BDD test framework                 |
| Gherkin           | Feature/scenario specification     |
| Page Object Model | UI abstraction and maintainability |
| JSON              | External test data                 |
| Allure            | Test reporting                     |
| Android Emulator  | Android test execution             |
| VS Code           | Development and debugging          |

---

## 3. Framework Architecture

The framework follows a layered architecture:

```text
Cucumber Feature
       |
       v
Step Definitions
       |
       v
Page Objects
       |
       v
WebdriverIO
       |
       v
Appium
       |
       v
UiAutomator2
       |
       v
Android Application
```

Test data is maintained separately:

```text
Feature
   |
   v
Step Definition
   |
   +------> JSON Test Data
   |
   v
Page Object
   |
   v
Mobile Application
```

This separation keeps the framework readable, reusable, and maintainable.

---

## 4. Project Structure

```text
mobile_webdriverio_framework_bdd/
│
├── app/
│   └── android/
│       └── Android.SauceLabs.Mobile.Sample.app.2.7.1.apk
│
├── config/
│   └── qa.config.ts
│
├── env/
│   └── qa.env
│
├── src/
│   ├── data/
│   │   ├── TC_001_AddProductToCart.json
│   │   ├── TC_002_RemoveProductToCart.json
│   │   └── TC_003_CheckOut.json
│   │
│   └── pages/
│       ├── LoginPage.ts
│       ├── ProductsPage.ts
│       ├── YourCartPage.ts
│       ├── CheckoutInformationPage.ts
│       ├── CheckoutOverviewPage.ts
│       └── CheckoutCompletePage.ts
│
├── test/
│   ├── features/
│   │   ├── TC_001_AddProductToCart.feature
│   │   ├── TC_002_RemoveProductToCart.feature
│   │   └── TC_003_CheckOut.feature
│   │
│   ├── fixtures/
│   │   └── pages.fixture.ts
│   │
│   └── step-definitions/
│       ├── login.steps.ts
│       ├── products.steps.ts
│       ├── cart.steps.ts
│       └── checkout.steps.ts
│
├── allure-results/
├── allure-report/
├── package.json
├── tsconfig.json
├── wdio.conf.ts
├── .gitignore
└── README.md
```

---

# 5. Folder Responsibilities

## `app/`

Contains the mobile application used for automation.

```text
app/
└── android/
    └── Android.SauceLabs.Mobile.Sample.app.2.7.1.apk
```

The APK path is configured in `wdio.conf.ts`.

---

## `config/`

Contains environment-specific configuration.

```text
config/
└── qa.config.ts
```

Example responsibilities:

* Username
* Password
* Environment configuration

---

## `env/`

Contains environment-specific values.

```text
env/
└── qa.env
```

Example:

```text
USERNAME=<username>
PASSWORD=<password>
```

Credentials should not be committed to source control.

---

## `src/pages/`

Contains Page Object classes.

```text
src/pages/
├── LoginPage.ts
├── ProductsPage.ts
├── YourCartPage.ts
├── CheckoutInformationPage.ts
├── CheckoutOverviewPage.ts
└── CheckoutCompletePage.ts
```

Each Page Object contains:

* Locators
* Page-specific actions
* Reusable UI methods

---

## `src/data/`

Contains external test data.

Each test case has its own JSON file.

```text
src/data/
├── TC_001_AddProductToCart.json
├── TC_002_RemoveProductToCart.json
└── TC_003_CheckOut.json
```

This prevents test data from being hard-coded in Gherkin feature files.

---

## `test/features/`

Contains Cucumber feature files.

Each feature represents a business scenario/test case.

```text
test/features/
├── TC_001_AddProductToCart.feature
├── TC_002_RemoveProductToCart.feature
└── TC_003_CheckOut.feature
```

---

## `test/step-definitions/`

Contains implementations of Gherkin steps.

```text
test/step-definitions/
├── login.steps.ts
├── products.steps.ts
├── cart.steps.ts
└── checkout.steps.ts
```

Step definitions connect the Gherkin scenarios to the Page Objects.

---

## `test/fixtures/`

Contains reusable framework fixtures.

```text
test/fixtures/
└── pages.fixture.ts
```

The fixture provides access to Page Objects from step definitions.

---

# 6. Login as a Precondition

Login is treated as a **common precondition** rather than a separate business test.

The feature files use a Cucumber `Background`:

```gherkin
Background:
  Given I am on the Swag Labs login screen
  When I login with valid credentials
```

The login implementation is maintained in:

```text
test/step-definitions/login.steps.ts
```

The UI implementation is maintained in:

```text
src/pages/LoginPage.ts
```

Therefore, a separate `login.feature` is not required for the current framework.

The architecture is:

```text
Feature
   |
   +-- Background
          |
          v
    login.steps.ts
          |
          v
     LoginPage.ts
          |
          v
      Login Screen
```

---

# 7. Test Cases

## TC_001 – Add Product to Cart

Feature:

```text
TC_001_AddProductToCart.feature
```

Flow:

```text
Login
  ↓
Add Product
  ↓
Open Cart
  ↓
Verify Product
```

Expected result:

```text
Sauce Labs Backpack is present in the cart
```

---

## TC_002 – Remove Product from Cart

Feature:

```text
TC_002_RemoveProductToCart.feature
```

Flow:

```text
Login
  ↓
Add Product
  ↓
Remove Product
  ↓
Open Cart
  ↓
Verify Product is absent
```

Expected result:

```text
Sauce Labs Backpack is not present in the cart
```

---

## TC_003 – Checkout

Feature:

```text
TC_003_CheckOut.feature
```

Flow:

```text
Login
  ↓
Add Product
  ↓
Open Cart
  ↓
Checkout
  ↓
Enter Customer Information
  ↓
Continue
  ↓
Checkout Overview
  ↓
Finish Order
  ↓
Verify Order Confirmation
```

Expected result:

```text
Order confirmation message is displayed
```

---

# 8. Cucumber Feature Example

Example `TC_001_AddProductToCart.feature`:

```gherkin
Feature: Add Product to Cart

  Background:
    Given I am on the Swag Labs login screen
    When I login with valid credentials

  @TC_001_AddProductToCart
  Scenario: Add product to cart
    When I add the product to the cart
    And I open the cart
    Then the product should be present in the cart
```

Notice that the product name is **not hard-coded** in the feature.

The product is retrieved from:

```text
src/data/TC_001_AddProductToCart.json
```

---

# 9. Test Data Strategy

Test data is maintained separately from the test scenarios.

## TC_001

`src/data/TC_001_AddProductToCart.json`

```json
{
    "productName": "Sauce Labs Backpack"
}
```

## TC_002

`src/data/TC_002_RemoveProductToCart.json`

```json
{
    "productName": "Sauce Labs Backpack"
}
```

## TC_003

`src/data/TC_003_CheckOut.json`

```json
{
    "productName": "Sauce Labs Backpack",
    "firstName": "Anil",
    "lastName": "Kumar",
    "zipCode": "560001"
}
```

The step definitions import the appropriate JSON file for each test case.

---

# 10. Page Object Model

The framework follows the Page Object Model pattern.

For example:

```text
TC_001_AddProductToCart.feature
             |
             v
products.steps.ts
             |
             v
ProductsPage.ts
             |
             v
Appium / WebdriverIO
```

The feature file contains business-readable steps.

The step definition contains the test implementation.

The Page Object contains UI interaction and locators.

This provides a clear separation of responsibilities.

---

# 11. Locator Strategy

The framework primarily uses:

### Accessibility ID

Example:

```typescript
$('~test-Username')
```

```typescript
$('~test-Password')
```

```typescript
$('~test-Cart')
```

### XPath

Dynamic product locator:

```typescript
`//*[@content-desc="test-Item"][.//*[@text="${productName}"]]`
```

The product name is passed dynamically from the JSON test data.

This avoids hard-coding test data inside Page Objects.

---

# 12. Dynamic Product Handling

Products are located dynamically using the product name.

Example:

```typescript
async addProductToCart(productName: string): Promise<void> {
    await this.scrollToProduct(productName);
    await this.addToCartButton(productName).click();
}
```

The product name comes from:

```text
TC_001_AddProductToCart.json
```

or:

```text
TC_003_CheckOut.json
```

This allows the same Page Object method to work with different products.

---

# 13. Android Scrolling

The framework uses Android `UiScrollable` for products that are not immediately visible.

Example:

```typescript
await $(
    `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${productName}")`
);
```

This allows the framework to dynamically scroll to a product based on JSON test data.

---

# 14. Appium Configuration

The framework currently uses a manually started Appium server.

Start Appium using:

```bash
appium --address 127.0.0.1 --port 4723
```

Current configuration:

```text
Host: 127.0.0.1
Port: 4723
Path: /
```

Check Appium:

```bash
appium --version
```

---

# 15. Android Configuration

Current execution environment:

```text
Platform: Android
Automation: UiAutomator2
Device: emulator-5554
Android Version: 8.0
Application: Sauce Labs Mobile Sample App
```

Example capability configuration:

```typescript
{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:platformVersion': '8.0',
    'appium:deviceName': 'emulator-5554',
    'appium:udid': 'emulator-5554',
    'appium:appPackage': 'com.swaglabsmobileapp',
    'appium:appActivity': '.SplashActivity'
}
```

---

# 16. Prerequisites

Install the following software:

* Node.js
* npm
* Java JDK
* Android SDK
* Android Emulator
* Appium
* Appium UiAutomator2 Driver
* Git
* VS Code

Verify Node.js:

```bash
node --version
```

Verify npm:

```bash
npm --version
```

Verify Java:

```bash
java --version
```

Verify Appium:

```bash
appium --version
```

Verify ADB:

```bash
adb version
```

Check Android devices:

```bash
adb devices
```

The emulator should be displayed as:

```text
emulator-5554    device
```

---

# 17. Install Project Dependencies

Navigate to the project:

```bash
cd D:\Automation\Projects\mobile_webdriverio_framework_bdd
```

Install dependencies:

```bash
npm install
```

If Allure dependencies are not installed:

```bash
npm install --save-dev @wdio/allure-reporter allure-commandline
```

If `rimraf` is not installed:

```bash
npm install --save-dev rimraf
```

---

# 18. Test Execution

## Execute all test cases

```bash
npm run execute_all
```

This executes:

```text
TC_001_AddProductToCart.feature
TC_002_RemoveProductToCart.feature
TC_003_CheckOut.feature
```

---

## Execute TC_001

```bash
npm run execute_tc001
```

---

## Execute TC_002

```bash
npm run execute_tc002
```

---

## Execute TC_003

```bash
npm run execute_tc003
```

---

## Execute using WDIO

```bash
npm run wdio
```

---

# 19. NPM Scripts

The framework uses the following scripts:

```json
{
    "test": "npm run wdio",

    "wdio": "wdio run ./wdio.conf.ts",

    "execute_tc001": "npx wdio run wdio.conf.ts --spec test/features/TC_001_AddProductToCart.feature",

    "execute_tc002": "npx wdio run wdio.conf.ts --spec test/features/TC_002_RemoveProductToCart.feature",

    "execute_tc003": "npx wdio run wdio.conf.ts --spec test/features/TC_003_CheckOut.feature",

    "execute_all": "npx wdio run wdio.conf.ts",

    "clean-allure": "rimraf allure-results allure-report",

    "allure-generate": "npx allure-commandline generate allure-results --clean -o allure-report",

    "allure-open": "npx allure-commandline open allure-report",

    "allure-report": "npm run allure-generate && npm run allure-open",

    "test-with-report": "npm run clean-allure && npm run execute_all && npm run allure-report"
}
```

---

# 20. Allure Reporting

The framework uses **Allure Reporter** for test execution reporting.

The WDIO configuration should contain:

```typescript
reporters: [
    'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
    }]
],
```

The Spec Reporter provides console output.

Allure provides a detailed HTML report.

---

## Generate Allure Report

```bash
npm run allure-generate
```

This generates:

```text
allure-report/
```

from:

```text
allure-results/
```

---

## Open Allure Report

```bash
npm run allure-open
```

---

## Generate and Open Allure Report

```bash
npm run allure-report
```

---

## Execute Tests and Open Report

The complete workflow is:

```bash
npm run test-with-report
```

This performs:

```text
Clean previous Allure results
          ↓
Execute all BDD tests
          ↓
Generate Allure report
          ↓
Open Allure report
```

---

# 21. Cucumber Tags

Each test scenario has a unique tag.

Example:

```gherkin
@TC_001_AddProductToCart
Scenario: Add product to cart
```

Current tags:

```text
@TC_001_AddProductToCart
@TC_002_RemoveProductToCart
@TC_003_CheckOut
```

Tags can later be used for selective execution.

---

# 22. Debugging

The framework can be executed through the WDIO configuration from VS Code.

The recommended approach is to launch the test through:

```text
wdio.conf.ts
```

rather than directly executing the TypeScript feature/step-definition files.

Appium should be running before starting the WDIO test when using the manual Appium server approach.

---

# 23. Reporting and Test Results

The framework provides two levels of reporting.

### Console

The Spec Reporter displays:

```text
✓ Given I am on the Swag Labs login screen
✓ When I login with valid credentials
✓ When I add the product to the cart
✓ And I open the cart
✓ Then the product should be present in the cart
```

### Allure

Allure provides:

* Feature-level results
* Scenario-level results
* Step-level results
* Passed/failed status
* Execution duration
* Failure details
* Test history when configured

---

# 24. Current Test Execution

The current framework contains three feature files:

```text
TC_001_AddProductToCart.feature
TC_002_RemoveProductToCart.feature
TC_003_CheckOut.feature
```

Example successful execution:

```text
TC_001_AddProductToCart
5 steps

TC_002_RemoveProductToCart
6 steps

TC_003_CheckOut
9 steps
```

The TC_002 negative assertion is currently under investigation when the product remains detected after the remove action.

---

# 25. Design Principles

The framework follows these principles:

### Separation of Concerns

Feature files, step definitions, test data, and Page Objects are maintained separately.

### Reusability

Common operations such as login, product handling, cart navigation, and checkout are implemented as reusable methods.

### Maintainability

UI locators are centralized in Page Objects.

### Data Driven Testing

Test data is maintained externally in JSON files.

### Readable BDD

Business scenarios remain readable without exposing implementation details.

### Scalability

The structure can be extended for additional test cases, environments, devices, and platforms.

---

# 26. Future Enhancements

Planned enhancements include:

* Failure screenshots
* Allure screenshots and attachments
* Environment-specific execution
* QA/UAT configuration
* Cucumber tag-based execution
* Parallel execution
* Retry mechanism
* Enhanced logging
* CI/CD integration
* Jenkins integration
* GitHub Actions
* iOS automation using XCUITest
* IPA application support
* API integration
* Test execution history
* Allure environment information
* Automated report publishing

---

# 27. Git Ignore

Generated files and sensitive information should not be committed.

Recommended `.gitignore`:

```text
node_modules/
allure-results/
allure-report/
.env
```

The APK can also be excluded if the repository policy does not permit storing binaries:

```text
*.apk
*.ipa
```

---

# 28. End-to-End Execution Flow

```text
Developer
    |
    v
npm run test-with-report
    |
    v
Clean Allure Results
    |
    v
WDIO Test Runner
    |
    v
Cucumber Feature
    |
    v
Background Login
    |
    v
Step Definition
    |
    v
Page Object
    |
    v
WebdriverIO
    |
    v
Appium
    |
    v
UiAutomator2
    |
    v
Android Emulator
    |
    v
Test Result
    |
    v
Allure Results
    |
    v
Allure HTML Report
```

---

# 29. Framework Benefits

The framework provides:

* Cucumber BDD implementation
* Gherkin-based scenarios
* Page Object Model
* Reusable step definitions
* JSON-based test data
* Environment-based configuration
* Android Appium automation
* UiAutomator2 support
* Cucumber test tags
* Individual test execution
* Full-suite execution
* Spec reporting
* Allure reporting
* Clear separation of responsibilities
* Foundation for Android and iOS automation

---

# 30. Author

**Anil Kumar J**

QA Automation | Mobile Automation | WebdriverIO | Appium | Cucumber | TypeScript
