/// <reference types="cypress" />

describe('visit the app', () => {

    //Visit the website    
    beforeEach('Visit the web',() => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.url().should('include', "login.html")
    })

    it('Main Testing', () => {

    //login dengan username yang benar    
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')
    cy.get('#user_password').clear()
    cy.get('#user_password').type('password')
    cy.get('#user_remember_me').click()
    cy.get('.btn').click()

    
    //validasi masuk ke halaman dashboard dan pindah ke tab pay bill
    cy.url().should('include', 'account-summary.html')
    cy.get('#pay_bills_tab > a').click()

    //melakukan pembayaran dengan custom command
    cy.paybill()

    //validasi pembayaran telah berhasil dilakukan 
    cy.get('#alert_content').should('contain.text', 'successfully')

    })

})