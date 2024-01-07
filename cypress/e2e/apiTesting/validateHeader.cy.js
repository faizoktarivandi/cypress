/// <reference types="cypress" />

describe('Validate Pokemon API', () => {
    it('Successfully Validate header & body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')

        ///Validate the header
        cy.get('@pokemon').its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8');

        //Validate the body
        cy.get('@pokemon').its('body').then((body) => {
        expect(body.base_experience).to.equal(101);
        expect(body.forms[0].name).to.equal('ditto');
        expect(body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/');    
    });
});
});