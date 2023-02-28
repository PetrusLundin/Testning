Feature: Schedule app admin edit classes function

# ------ Test 1 ---------------------------------------------

    Scenario: As an admin I want to edit a class visibility
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/classes" page
    When I click the edit button for WIN19 class
    Then the url should contain "/admin/#/classes/15"

    Given I am on the edit page
    When I click the toggle "#hide" button 
    Then the save button is enabled

    Given our save button is enabled
    When I click the save button
    Then the url should contain "/admin/#/classes"

# ------- Test 2 ---------------------------------------------

    Scenario: As an admin I want to change an invoice item
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/classes" page
    When I click the edit button for WIN19 class
    Then the url should contain "/admin/#/classes/15"    

    Given I am on the edit page
    When I click the "default invoice item" field
    Then the first item should contain "Projekthandledning"

    Given I see an item containing "Projekthandledning"
    When I click the item containing "Projekthandledning"
    Then "Projekthandledning" gets selected
    And the save button is enabled

    Given the save button is enabled
    When I click the save button
    Then the url should contain "/admin/#/classes"
    
# ------- Test 3 -------------------------------------------------
    
    Scenario: As an admin I want to change the school of a class
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/classes" page
    When I click the edit button for WIN19 class
    Then the url should contain "/admin/#/classes/15"

    Given I am on the edit page
    When I click our "School" field
    Then our first item should contain "A till O"

    Given I see the item containing "A till O"
    When I click our item containing "A till O"
    Then the "A till O" gets selected
    And the save button is enabled

    Given the save button is enabled
    When I click the save button
    Then the url should contain "/admin/#/classes"

# ------ Reset changes made to database -------------------------

    Scenario: Reset invoice item
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/classes" page
    When I click the edit button for WIN19 class
    And I click the "default invoice item" field
    And I click a item containing "Öppet hus"
    And I click the save button
    Then the url should contain "/admin/#/classes"

    Scenario: Reset school
    Given I am logged in with "exempel@school.net" and "abc123"
    And is located on the "/admin/#/classes" page
    When I click the edit button for WIN19 class
    And I click our "School" field
    And I click an item containing "Kenton"
    And I click the save button
    Then the url should contain "/admin/#/classes"


    