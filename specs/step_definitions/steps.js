// cucumber
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

//------------------------------------------------------------

Given("I am logged in with {string} and {string}", (username, password) => {
  cy.visit("/login.html")
  cy.get('#email').type(username)
  cy.get('#password').type(password)
  cy.get('[type="submit"]').click()
  cy.wait(2000)
  cy.get('img').should('be.visible')
});


Given('I am on the edit page', () => {
  cy.url().should('contain', "/admin/#/classes/15")
});


Given('I am on its edit page', () => {
  cy.get('#react-admin-title > span').should('have.text', 'Edit Invoice Item')
});


Given('our save button is enabled', () => {
  cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').should('be.visible')  
});


Given('I see an item containing {string}', () => {
  cy.get('[data-value="7"]').should('be.visible')
});


Given('I see the item containing {string}', () => {
  cy.get('[data-value="11"]').should('be.visible')
});


Given('I am on a create page', () => {
  cy.url().should('contain', "http://localhost:7655/admin/#/invoice_items/create")
});


Given('I am on the create page', () => {
  cy.url().should('contain', "create")
});


Given('I am on the invoice items page', () => {
  cy.url().should('contain', 'invoice_items')
});


Given('I am on the teacher page', () => {
  cy.visit('/admin/#/teachers')
  cy.url().should('contain', '/admin/#/teachers') 
});


Given('That i am on the edit page for "Many Moore"', () => {
  cy.visit('/admin/#/teachers/3')  
  cy.url().should('contain', '/admin/#/teachers/3')  
});


//------------------------------------------------------------

When('I click the admin button', () => {
  cy.get('[onclick="location.href=\'/admin\'"]').click()
}); 


When('I click the schools button', () => {
  cy.get('[href="#/schools"]').click()
}); 


When('I click the create button', () => {
  cy.get('.MuiToolbar-root > a.MuiButton-root').click()
}); 


When('I check the checkbox for {string}', () => {
  cy.get('.MuiTableBody-root > :nth-child(1) > .MuiTableCell-paddingCheckbox > .MuiCheckbox-root > .PrivateSwitchBase-input').click()
  cy.wait(2000)
}); 


When('I click the teachers button', () => {
  cy.get('[href="#/teachers"]').click()
});


When('I click the classes button', () => {
  cy.get('[href="#/classes"]').click()
});


When('I click the edit button for WIN19 class', () => {
  cy.get(':nth-child(4) > .column-undefined > .MuiButton-root').click()
});


When('I click the toggle {string} button', () => {
   cy.get('#hide').click() 
});


When('I click the save button', () => {
  cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').click().wait(5000)
});


When('I click the {string} field', () => {
  cy.get('#defaultInvoiceItem').click() 
});


When('I click the item containing {string}', () => {
  cy.get('[data-value="7"]').click()
});


When('I click our {string} field', () => {
  cy.get('#school').click() 
});


When('I clear the unit field', () => {
  cy.get('#unit').clear()
});


When('I click our item containing {string}', () => {
  cy.get('[data-value="11"]').click()
});

When('I click an item containing {string}', () => {
  cy.get('[data-value="5"]').click()
});


When('I click a item containing {string}', () => {
  cy.get('[data-value="8"]').click()
});


When('I click the edit button', () => {
  cy.get(':nth-child(1) > .column-undefined > .MuiButton-root').click()
});


When('I click the sorting arrow', () => {
  cy.get('.column-id > .MuiButtonBase-root > [data-testid="ArrowDownwardIcon"]').click()
  cy.wait(2000)
});


When('I click the {string} field and type {string}', (field, text) => {
  cy.get(field).type(text)
});


When('I click on the teacher button', () => {
  cy.get('[data-testid="PersonIcon"]').click()
});


When('I click on the button #Edit for teacher "Many Moore"' , () => {
  cy.get(':nth-child(3) > .column-undefined > .MuiButton-root').click()
});


When('I click field "lastname"', () => {
  cy.get('#lastname').clear()
});


//------------------------------------------------------------


And('is located on the {string} page', (endpoint) => {
  cy.visit(endpoint)
});


And('type a random name', () => {
  cy.get('#unit').type(Math.random().toString(36).substring(2,7))
});


And('click the save button', () => {
  cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()
  cy.wait(5000)
});


And('I click the delete button', () => {
  cy.get('[data-test="bulk-actions-toolbar"] > .MuiToolbar-root > .MuiButton-root').click()
});


And('I click field #email', () => {
  cy.get('#email').click()  
});


And('I type the "Randomiser"', () => {
  cy.get('#email').clear()
  cy.get('#email').type(Math.random().toString(36).substring(2,8))  
});


And('I type "Randomiser"', () => {
  cy.get('#lastname').type(Math.random().toString(36).substring(2,7))  
});


And('I can see the schedule', () => {
  cy.visit("/")
  cy.url().should("contain", "7655")
});


//------------------------------------------------------------


Then('the delete button should be visible', () => {
  cy.get('[data-test="bulk-actions-toolbar"] > .MuiToolbar-root > .MuiButton-root').should('be.visible')
});


Then('the save button is enabled', () => {
  cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').should('be.visible')  
});


Then('the first item should contain {string}', (invoice) => {
  cy.get('[data-value="7"]').should('have.text', invoice)
});


Then('{string} gets selected', (invoice) => {
  cy.get('#defaultInvoiceItem').should('have.text', invoice)
});


Then('our first item should contain {string}', (school) => {
  cy.get('[data-value="11"]').should('have.text', school)
});


Then('the {string} gets selected', (school) => {
  cy.get('#school').should('have.text', school)
});


Then('the url should contain {string}', (text) => {
  cy.url().should('contain', text)
});


Then('I get redirected to the invoice page', () => {
  cy.url().should('equal', 'http://localhost:7655/admin/#/invoice_items')
});


Then('a confirmation message will be shown', () => {
  cy.get('.MuiSnackbarContent-message').should('be.visible')
});


Then('I get redirected to teachers page', () => {
  cy.url().should('contain','/admin/#/teachers')  
});


Then('I get redirected to the edit page for "Many Moore"', () => {
  cy.url().should('contain','/admin/#/teachers/3')  
});


Then('I will be redirected to teachers page', () => {
  cy.url().should('contain', '/admin/#/teachers')
  cy.get('[data-testid="RefreshIcon"]').click()
});


Then('the header should read {string}', () => {
  cy.get('#react-admin-title > span').should('have.text', 'Edit Invoice Item')
});


