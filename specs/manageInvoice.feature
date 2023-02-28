Feature: Schedule app process debit posts

# ------Scenario 1--------------------------------------

    Scenario: As an admin I want to create a new debit post
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/invoice_items" page
    When I click the create button
    Then the url should contain "/invoice_items/create"

    Given I am on a create page
    When I click the "#title" field and type "Studieledning"
    When I click the "#unit" field and type "Timmar"
    When I click the "#netPrice" field and type "42"
    And I click the save button
    Then I get redirected to the invoice page

# -----Scenario 2-----------------------------------------
    
    Scenario: As an admin I want to change the Unit of an existing invoice item
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/invoice_items" page
    When I click the edit button
    Then the header should read "Edit invoice item"


    Given I am on its edit page
    When I clear the unit field
    And type a random name
    And I click the save button
    Then I get redirected to the invoice page

# ------Scenario 3----------------------------------------

    Scenario: As an admin I want to delete an existing invoice item
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/invoice_items" page
    When I click the sorting arrow
    And I check the checkbox for "första objektet"
    And I click the delete button
    Then a confirmation message will be shown
