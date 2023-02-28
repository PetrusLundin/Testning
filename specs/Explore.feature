# gherkin

Feature: Exploring the Schedule App

#------------------------------------------------------------------

    Scenario: Navigate to the admin page
    Given I am logged in with "exempel@school.net" and "abc123"
    When I click the admin button
    Then the url should contain "admin"

#------------------------------------------------------------------

    Scenario: Navigate to the teachers page
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/" page
    When I click the teachers button
    Then the url should contain "teachers"

#------------------------------------------------------------------

    Scenario: Navigate to the classes page from the teachers page
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/teachers" page
    When I click the classes button
    Then the url should contain "classes"

#------------------------------------------------------------------

    Scenario: As an admin I want to click the 'Schools' link in the hamburger menu
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/" page
    When I click the schools button
    Then the url should contain "schools"

#------------------------------------------------------------------

    Scenario: As an admin I want to click the 'create' button in 'Schools' page
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/schools" page
    When I click the create button
    Then the url should contain "create"

#------------------------------------------------------------------

    Scenario: As an admin I want to click the checkbox for a school
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/schools" page
    And I check the checkbox for 'Systemskolan Göteborg'
    Then the delete button should be visible

#------------------------------------------------------------------