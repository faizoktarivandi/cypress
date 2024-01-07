/// <reference types="cypress" />

describe('visit the app', () => {

    //Visit the website    
    beforeEach('Visit the web',() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', "index.html")
    cy.get('#signin_button').click()
    })

    it('Main Testing', () => {

    //login dengan username yg salah 
    cy.get('#user_login').clear()
    cy.get('#user_login').type('invalid_username', { delay: 100 })
    cy.get('#user_password').clear()
    cy.get('#user_password').type('invalid_password', { delay: 100 })
    cy.get('#user_remember_me').click()
    cy.get('.btn').click()

    //verifikasi login gagal
    cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')

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

    //logout dari aplikasi
    cy.contains('username').click()
    cy.get('#logout_link').click()    

    //verifikasi logout dan kembali ke halaman awal
    cy.get('strong').should('contain.text', 'Home')

    cy.get('#signin_button').should('be.visible')

    })

})
