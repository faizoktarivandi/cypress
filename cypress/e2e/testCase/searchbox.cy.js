/// <reference types="cypress" />

describe('searchbox test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/')
    });

    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
        cy.get('.top_offset').should('contain.text', 'online')
    });
})
