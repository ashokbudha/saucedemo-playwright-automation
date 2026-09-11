# SauceDemo QA & Playwright Automation Project

A QA testing and Playwright automation project based on the [SauceDemo](https://www.saucedemo.com/) web application.

The project demonstrates a structured software testing approach, starting from application understanding and exploratory testing, followed by test scenarios, detailed test cases, automation assessment, and Playwright implementation.

> **Project Status:** In Progress

---

## 📌 Table of Contents

* [About the Project](#about-the-project)
* [Application Under Test](#application-under-test)
* [Project Objectives](#project-objectives)
* [QA Approach](#qa-approach)
* [Application Scope](#application-scope)
* [Testing Performed](#testing-performed)
* [Test Documentation](#test-documentation)
* [Exploratory Testing](#exploratory-testing)
* [Test Scenarios](#test-scenarios)
* [Detailed Test Cases](#detailed-test-cases)
* [Playwright Automation](#playwright-automation)
* [Current Automation Practice](#current-automation-practice)
* [Automation Assessment](#automation-assessment)
* [Planned Work](#planned-work)
* [Project Limitations](#project-limitations)
* [Tools & Technologies](#tools--technologies)
* [Project Structure](#project-structure)

---

## About the Project

This project is a practical QA and test automation exercise designed to demonstrate the complete thought process involved in testing a web application.

The focus is not only on writing automated scripts, but also on understanding the application, identifying testable functionality, designing test coverage, exploring unexpected behavior, and making informed decisions about what should and should not be automated.

The project follows a gradual approach:

```text
Application Understanding
        ↓
Exploratory Testing
        ↓
Test Scenarios
        ↓
Detailed Test Cases
        ↓
Test Case Review
        ↓
Automation Assessment
        ↓
Automation Scope
        ↓
Playwright Implementation
        ↓
Test Execution & Results
        ↓
CI Execution
```

---

## Application Under Test

**Application:** SauceDemo

**URL:** https://www.saucedemo.com/

SauceDemo is a publicly available demo e-commerce application commonly used for learning and practicing software testing and test automation.

The application provides functionality such as:

* User authentication
* Product browsing
* Product details
* Product sorting
* Shopping cart
* Checkout
* Order placement
* Application navigation
* Footer and external links

The application uses predefined users with different behaviors to support testing of various scenarios.

---

## Project Objectives

The main objectives of this project are to:

* Understand the application's functionality and user flows.
* Perform exploratory testing to identify unexpected behavior and limitations.
* Design meaningful high-level test scenarios.
* Create detailed and executable test cases.
* Identify potential defects and document observations appropriately.
* Evaluate which test cases provide value for automation.
* Practice Playwright automation.
* Develop maintainable automation using appropriate Playwright practices.
* Demonstrate an understanding of real-world QA workflow and automation decision-making.

---

## QA Approach

The project uses a combination of manual testing and test automation.

### Manual Testing

Manual testing is used for:

* Initial application exploration
* Understanding application behavior
* Exploratory testing
* Identifying unexpected behavior
* Evaluating areas where automation may not provide sufficient value

### Automation

Playwright is used to automate suitable test cases based on factors such as:

* Repetition
* Frequency
* Business importance
* Stability
* Objectivity
* Execution time
* Maintenance effort
* Automation complexity
* Return on investment

The goal is **not to automate every test case**, but to automate the tests where automation provides meaningful value.

---

## Application Scope

The main functional areas covered by this project are:

1. Authentication
2. Product Catalog
3. Product Sorting
4. Shopping Cart
5. Checkout
6. Order Placement
7. Navigation and Application State
8. Footer Links and Information

---

## Testing Performed

The current QA strategy includes:

* **Functional Testing**
* **UI Testing**
* **Regression Testing**
* **Basic Compatibility Testing**
* **Exploratory Testing**

Automated browser coverage is planned across:

* Chromium
* Firefox
* WebKit

Formal performance testing, security penetration testing, and backend/API testing are outside the current project scope.

---

## Test Documentation

The QA documentation is organized into separate documents:

| Document                   | Purpose                                             | Status                 |
| -------------------------- | --------------------------------------------------- | ---------------------- |
| `application-overview.md`  | Application functionality and system understanding  | Completed              |
| `test-strategy.md`         | Testing objectives, scope, approach, and test types | Completed              |
| `exploratory-testing.md`   | Exploratory observations and potential issues       | Completed              |
| `test-scenarios.md`        | High-level testing scenarios                        | Completed              |
| `test-cases.md`            | Detailed test cases                                 | Drafted / Under Review |
| `automation-assessment.md` | Evaluation of which tests should be automated       | Planned                |
| `7.bug.md`                 | Reporting of bug identified                         | In Progess             |

---

## Exploratory Testing

Exploratory testing was performed to understand the application beyond predefined test conditions and identify unexpected behavior or feature limitations.

Some observations identified during exploration include:

* Product quantity cannot be modified after adding a product to the cart.
* An order identifier may appear to be reused across separate orders and requires further investigation.
* Checkout/order placement may be possible with an empty cart and requires investigation against the intended business rule.
* Reset App State may clear the cart while leaving a product button in the **Remove** state.

These findings are treated carefully because the application does not provide formal requirements for every behavior.

> **Observation ≠ Confirmed Defect**

Potential issues are investigated before being classified as confirmed defects.

---

## Test Scenarios

The current high-level test scenarios are:

| Scenario ID | Scenario                                              |
| ----------- | ----------------------------------------------------- |
| **TS-001**  | Verify authentication functionality                   |
| **TS-002**  | Verify product catalog and product information        |
| **TS-003**  | Verify product sorting functionality                  |
| **TS-004**  | Verify shopping cart functionality                    |
| **TS-005**  | Verify checkout functionality                         |
| **TS-006**  | Verify order placement functionality                  |
| **TS-007**  | Verify navigation and application state functionality |
| **TS-008**  | Verify footer links and information                   |

Detailed test cases are maintained separately in `test-cases.md`.

---

## Detailed Test Cases

Detailed test cases are organized according to their corresponding test scenarios.

Each test case includes:

* Test Case ID
* Test Case Title
* Priority
* Type
* Preconditions
* Test Data
* Test Steps
* Expected Result
* Remarks

The test cases are currently being reviewed and refined.

The final automation scope will **not be determined simply by the number of test cases**. Each test case will be evaluated during the automation assessment.

---

## Playwright Automation

Playwright is being used for browser automation and end-to-end testing.

The automation work will focus on appropriate and maintainable practices such as:

* Reliable locators
* Assertions
* Page navigation
* Test isolation
* Reusable actions
* Test data management
* Page Object Model where useful
* Fixtures where useful
* Appropriate framework organization
* Cross-browser execution

The framework will evolve based on actual repetition and maintenance needs rather than introducing abstractions without a practical reason.

---

## Current Automation Practice

Playwright scripting is currently being developed as a **learning and practice activity**.

At this stage, scripts are being written for selected Login, Product, and Shopping Cart test cases to strengthen Playwright skills.

These practice scripts should **not yet be considered the final automation suite**.

The current scripts were not selected through the formal automation-assessment process. They are being used to practice:

* Locators
* Actions
* Assertions
* Navigation
* Test structure
* Reusable code
* Playwright debugging
* Framework design

After the test cases are reviewed, the automation assessment will determine the final automation scope.

---

## Automation Assessment

The automation assessment is **not yet completed**.

The next stage is to review the detailed test cases and evaluate each candidate based on factors including:

* Business importance
* Frequency of execution
* Repetition
* Stability
* Objectivity
* Execution time
* Maintenance effort
* Automation complexity
* Expected lifespan
* Return on investment
* Appropriate testing level

A test may be technically automatable but still not be a good candidate for UI automation.

The final automation suite will therefore be based on **automation value rather than simply automating every available test case**.

---

## Planned Work

The remaining project work is currently planned as follows:

### 1. Review Detailed Test Cases

Review and refine the existing test cases for:

* Coverage
* Duplicates
* Missing scenarios
* Test clarity
* Expected results
* Test data
* Priority
* Consistency

### 2. Automation Assessment

Evaluate the test cases and determine:

* Automate
* Manual
* Automate at another testing level where appropriate
* Exclude

### 3. Define Final Automation Scope

Create the final list of test cases selected for Playwright automation.

### 4. Build/Refine Playwright Framework

Organize the automation project using appropriate structures such as:

```text
tests/
pages/
fixtures/
test-data/
utils/
```

The exact structure will evolve according to project needs.

### 5. Implement Final Automation Suite

Convert the selected test cases into maintainable Playwright tests.

### 6. Execute and Review Results

Run the automated suite and review:

* Passed tests
* Failed tests
* Unexpected behavior
* Automation issues
* Known application issues

### 7. CI Execution

Set up GitHub Actions to execute the Playwright test suite against the publicly hosted SauceDemo application.

---

## Project Limitations

This project has several limitations that should be considered when interpreting the results.

* SauceDemo is a publicly hosted demo application.
* The application is not developed or deployed by this project.
* The project does not control the application's source code, releases, backend, or infrastructure.
* There are no formal product requirements or acceptance criteria available for every behavior.
* Some observations therefore require further investigation before they can be classified as confirmed defects.
* The application does not represent a complete production e-commerce system.
* No real payment transaction is performed.
* Backend/database/API implementation is not available for this project.
* Formal performance and security testing are outside the current scope.
* CI execution, when implemented, will run tests against the publicly hosted application rather than controlling an application deployment pipeline.

---

## Tools & Technologies

| Tool / Technology  | Purpose                       |
| ------------------ | ----------------------------- |
| **Playwright**     | Web UI automation             |
| **TypeScript**     | Automation scripting          |
| **Node.js**        | JavaScript/TypeScript runtime |
| **Git**            | Version control               |
| **GitHub**         | Source code repository        |
| **GitHub Actions** | Planned CI test execution     |
| **Markdown**       | QA documentation              |

---

## Project Structure

The project structure is being developed incrementally.

The planned structure is:

```text
saucedemo-qa/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── docs/
│   ├── 1.application-overview.md
│   ├── 1.test-strategy.md
│   ├── 3.exploratory-testing.md
│   ├── 4.test-scenarios.md
│   ├── 5.test-cases.md
│   └── 6.automation-assessment.md
│
├── tests/
│   ├── login/
│   ├── products/
│   ├── cart/
│   ├── checkout/
│   └── order/
│
├── pages/
├── fixtures/
├── test-data/
├── utils/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

> The final structure may change as the automation framework develops. Structure and abstractions will be introduced where they provide practical value.

---

## Project Status

**Current stage:**

```text
Application Understanding       ✅
Test Strategy                   ✅
Exploratory Testing             ✅
Test Scenarios                  ✅
Detailed Test Cases             🟡 Under Review
Playwright Practice             🟡 In Progress
Automation Assessment           ⏳ Pending
Final Automation Scope          ⏳ Pending
Final Automation Suite          ⏳ Pending
Test Execution & Results        ⏳ Pending
CI Execution                    ⏳ Pending
```

The project is intentionally being developed incrementally so that the final automation suite reflects informed QA and automation decisions rather than simply maximizing the number of automated scripts.
