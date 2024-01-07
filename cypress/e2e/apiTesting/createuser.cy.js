/// <reference types="cypress" />

describe('Create new User', () => {
    it('New User', () => {
        var user = {
        "name": "Alela",
        "job": "Artist"
        }
        
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201),
            expect(response.body).to.have.property('name', 'Alela')

        })
    });
})