Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page Duplicates
  As a user
  I want to access to the URL address provided for the landing page for to see duplicate contacts
  So that I can see the list of the contacts duplicates

  Scenario: Access to duplicate page and check the duplicate values
    Given Access to duplicates url
    Then the tables should contains all the duplicate values

  Scenario: Access to duplicate page and check the duplicate values
    Given Access to duplicates url
    Then the tables should contains coherent values on the duplicate table

  Scenario: On submit form, AlertBox should appear
    Given Access to duplicates url
    When I click the APPLICAR button
    Then I should see an alertBox, with the text "At least one group is blank"

  Scenario: On submit form, with all information applied, It should redirect me to duplicate free
    Given Access to duplicates url
    When I randomly select values
    And I click the APPLICAR button
    Then I should be in the "Duplicate Free" Page