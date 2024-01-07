/// <reference types="cypress" />

describe('navbar test', () => {

    //Visit the website setiap sebelum dimuali test case
    beforeEach('Visit the web',() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    })

    //Membuka tab online banking
    it('should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });

    //Membuka tab feedback
    it('should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('be.visible')
    });

    //Membuka tab homepage
    it('should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('.active > img').should('be.visible')
    });

})
