/// <reference types="cypress" />

describe('Get User List', () => {

    it('verify users list', () => {
    cy.request({
        method: 'GET',
        url : 'https://reqres.in/api/users'
        ///?page=2&per_pages=1&delay=3' <- Parameter yg dihapus
    }).as('users')
    cy.get('@users').its('status').should('equal', 200)
    });
});