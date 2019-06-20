Feature: Access to the Contacts Orchestrator Solution's (COS) Landing Page
  As a user
  I want to access to the URL address provided for the landing page
  So that I can see the list of the contacts available

 #############################################################
#  Scenario: Title page should be "test"
#    Given Access to url
#    Then the title of the page should be "test"

#  Scenario: Test if data is correctly inputed
#    Given Access to url
#    Then check if in random position the values are correctly
 #############################################################


#  Scenario: Title page should be "Contactos"
#    Given Access to url
#    Then the title of the page should be "Contactos"
#
#  Scenario: Test if ajax load contacts
#    Given Access to url
#    Then check if table is populated
#
#
#  Scenario Outline: Test if data is correctly inputed
#    Given Access to url
#    Then check if in random position the values are correctly "<Position>"
#
#     Examples:
#        | Position  |
#        | First     |
#        | Middle    |
#        | Last      |
#
#  Scenario: on click button "arrow image" should be back to top
#    Given Access to url
#    When I click arrow image
#    Then the page should be back to top

#  Scenario Outline:  On select option should filter by source
#    Given Access to url
#    Then the table should be filter by option selected "<Filter>"
#
#        Examples:
#        | Filter   |
#        | 0        |
#        | Facebook |
#        | LinkedIn |
#        | Twitter  |
#        | Skype    |
#
#
#  Scenario Outline: On search input in page
#    Given Access to url
#    When I search "<keyword>"
#    Then the result on table should be only the values in columns that just searched, related to "<keyword>"
#
#    Examples:
#      | keyword                       |
#      | Sophia                        |
#      | Lima                          |
#      | 234914037                     |
#      | LinkedIn                      |
#      | SophiaPereiraLima@teleworm.us |

  Scenario: on click button "ver mais" on table should be go details contact
    Given Access to url
    When I click button "ver mais"
    Then Should be go details page and show the details of contact by request "guid"


 #############################################################
 #  DETAILS TESTS                                            #
 #############################################################

#  Scenario: Title of detail page should be "Detalhes de Contacto"
#    Given Access to url of detail
#    Then the title of the detail page should be "Detalhes de Contacto"