const locator =require('/Users/vivify/Desktop/cypressdule/cypress/fixtures/Locators.json')
import{newOrganization} from '/Users/vivify/Desktop/cypressdule/cypress/e2e/pageObjects/newOrganization.js'



describe('cypress scrum',() =>  {
    let email = 'duledjakonovic@gmail.com'
    let pass = 'Djakoneti83'

    before('visit login page',() => {
    cy.visit('https://cypress.vivifyscrum-stage.com/login'),
    cy.url().should('include','/login')
    })

    it('login',()  => {
            newOrganization.emailfield,
            newOrganization.passwordField,
            newOrganization.submitBtn//.should('include','/my-organization')
            

    })

})