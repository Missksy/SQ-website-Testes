Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page in page duplicatesFree
  As a user
  I want to access to the URL address provided for the landing page on page duplicates
  So that I can see the list of the contacts  with duplicateFree

  Scenario: Title page should be "Duplicate Free"
    Given Access to url the duplicate free page
    Then the title of page should be "Duplicate Free"

  Scenario: Title page should be "Duplicate Free"
    Given Access to url the duplicate free page
    Then the title of page should be "Duplicate Free"

  Scenario: On submit form, with all information applied, It should redirect me to duplicate free
    Given Access to duplicates url
    When I random select values
    And I click on APLICAR button
    Then I should be to in the "Duplicate Free" Page


  Scenario: Check if ajax load on duplicateFree contacts
    Given I Access to duplicates url
    And I random select values
    And I click on APLICAR button
    And I should be to in the "Duplicate Free" Page
    Then See if table is populated

  Scenario Outline: Check if ajax load on duplicateFree contacts and search works
    Given I Access to duplicates url
    And I random select values
    And I click on APLICAR button
    And I should be to in the "Duplicate Free" Page
    And I should search for "<search>"
    Then Is table returning the correct tables, related to "<search>"

    Examples:
    | search                        |
    | keyword                       |
    | Sophia                        |
    | Lima                          |
    | 234914037                     |
    | LinkedIn                      |
    | SophiaPereiraLima@teleworm.us |
