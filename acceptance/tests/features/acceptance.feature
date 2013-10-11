Feature: Example feature
  As a user of cucumber.js
  I want to have documentation on cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the MoneySupermarket home page
    When I select car insurance
    Then the title should be "Compare Cheap Car Insurance Quotes - MoneySuperMarket"