Feature: Smoke
    Scenario: Default login
        Given I open login page
        And I log in with credentials
        When I open the filters page
        Then Filters page is opened

    Scenario: Filter widgets
       Given I open login page
       And I open the filters page
       When I filter widgets by 'Demo Api Tests' name
       Then  10 widgets is displayed

