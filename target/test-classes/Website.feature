Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page
  As a user
  I want to access to the URL address provided for the landing page
  So that I can see the list of the contacts available
  #no-error
  Scenario: Landing page's title and text contains "Welcome to nginx!"
    Given I access the landing page of COS
    Then the title of the page should be "Welcome to nginx!"
    And I can see the text "Welcome to nginx!"
