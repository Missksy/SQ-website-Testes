Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page
  As a user
  I want to access to the URL address provided for the landing page
  So that I can see the list of the contacts available
  #no-error
#  Scenario: Title page should be "test"
#    Given Access to url
#    Then the title of the page should be "test"

  Scenario: Title page should be "Contactos"
    Given Access to url
    Then the title of the page should be "Contactos"

  Scenario: Test if ajax load contacts
    Given Access to url
    Then check if table is populated


  Scenario: Test if data is correctly inputed
    Given Access to url
    Then check if in random position the values are correctly

  Scenario: on click button "arrow image" should be back to top
    Given Access to url
    When I click "arrow image"
    Then the page should be back to top