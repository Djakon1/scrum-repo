

class NewOrganization {
    get emailField(){
        return cy.get('input[type="email"]')
    }
    get passwordField(){
        return cy.get("input[type='password']")
    }
    get submitBtn(){
        return cy.get("button[type='submit']")
    }
    




}
export const newOrganization = new NewOrganization()