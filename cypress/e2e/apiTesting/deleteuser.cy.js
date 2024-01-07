/// <reference types="cypress" />

describe('Delete New User', () => {
    it('Delete User', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204);
            expect(response.body).to.be.empty;
        });
    });
});
