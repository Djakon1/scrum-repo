const locator =require('/Users/vivify/Desktop/cypressdule/cypress/fixtures/Locators.json')

describe('cypress scrum',() =>  {
    let email = 'duledjakonovic@gmail.com'
    let pass = 'Djakoneti83'

    before('visit login page',() => {
    cy.visit('https://cypress.vivifyscrum-stage.com/login'),
    cy.url().should('include','/login')
    })

    it('login',()  => {
            cy.get(locator.Login.emailInput).type(email),
            cy.get(locator.Login.passwordInput).type(pass),
            cy.get(locator.Login.submitBtn).click()
            
    })
    it('addNewOrganization',() => {
        cy.get('span[class="vs-c-my-organization__avatar"]').click()
        cy.get('input[type="text"]').type('Dule_organization'),
        cy.get('button[name="next_btn" ]').click(),
        cy.get('button[name="next_btn" ]').click()

    })



})