/// <reference types="cypress" />

    describe('visit the app', () => {

    //Visit the website    
    beforeEach('Visit the web',() => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.url().should('include', "login.html")
    })

    it('Main Testing', () => {
        
    //Login ke akun 
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')
    cy.get('#user_password').clear()
    cy.get('#user_password').type('password')
    cy.get('#user_remember_me').click()
    cy.get('.btn').click()
    
    //validasi masuk ke halaman dashboard
    cy.url().should('include', 'account-summary.html')
    })
})