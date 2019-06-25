Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page Details
  As a user
  I want to access to the URL address provided for the landing page details contacts
  So that I can see the list of the contacts available

#  Scenario: Title of detail page should be "Detalhes de Contacto"
#    Given Access to url of detail
#    Then the title of the detail page should be "Detalhes de Contacto"
#
#  Scenario: On access detail page should be see photo of the contact
#    Given Access to url of detail
#    Then  I should be see photo of contact
#
#  Scenario Outline: On access detail page should be see details contact by guid
#    Given Access to url of detail by "<guid>"
#    Then  I should be see details of contact by "<guid>"
#
#    Examples:
#      | guid |
#      | 1 |
#      | 2  |
#      | 3  |
#
#  Scenario Outline: On access detail page only show the contacts that is not empty
#    Given Access to url of detail by "<guid>"
#    Then  I should be see details of contact aren't empty, by "<guid>"
#
#    Examples:
#      | guid |
#      | 1 |
#      | 2 |
#      | 3 |
#
#  Scenario Outline: on click button "voltar à listagem" should be back to index page
#    Given Access to url of detail by "<guid>"
#    When I click on button in details
#    Then the page should be back to index page
#
#    Examples:
#      | guid |
#      | 1 |
#      | 2 |
#      | 3 |
#
#    Scenario Outline: Test if data of image resize is correctly inputed
#      Given Access to url of detail by "<guid>"
#      Then check if in a position guid the image is loaded with "<width>" and "<height>" ("<guid>")
#
#      Examples:
#        | guid | width | height |
#        | 1    | 225   | 255    |
#        | 2    | 225   | 255    |