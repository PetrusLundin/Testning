
Feature: Log in to application and edit profile "Many Moore"
     
   Scenario: Log in to app and go to teachers
   Given I am logged in with "exempel@school.net" and "abc123"
   And I can see the schedule
   When I click the admin button
   And is located on the "admin" page
   When I click on the teacher button
   Then I get redirected to teachers page

   Scenario: Go to edit page for "Many Moore"
   Given I am logged in with "exempel@school.net" and "abc123"
   And I am on the teacher page
   When I click on the button #Edit for teacher "Many Moore" 
   Then I get redirected to the edit page for "Many Moore"

   Scenario: Edit "Many Moore" lastname, email and visibility
   Given I am logged in with "exempel@school.net" and "abc123"
   And That i am on the edit page for "Many Moore"
   When I click field "lastname"
   And I type "Randomiser"
   And I click field #email
   And I type the "Randomiser"
   And I click the toggle "hide" button
   And I click the save button
   Then I will be redirected to teachers page
