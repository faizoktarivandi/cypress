// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('paybill', () => {
    //automation setiap form yang harus diisi
    cy.get('#sp_payee').select('Apple')
    cy.get('#sp_payee').should('have.value', 'apple')
    cy.get('#sp_account').select('1')
    cy.get('#sp_account').should('have.value', '1')
    cy.get('#sp_amount').type(200)
    cy.get('#sp_date').click()
    cy.get('.ui-state-default').contains('28').click()
    cy.get('#sp_description').type('Cicilan iPhone 15 Pro Max 512GB Titanium Original iBox 35juta', { delay: 100 })
    cy.get('#pay_saved_payees').click()
});

Cypress.Commands.add('loginViaAPI', (email = Cypress.env('email'), password = Cypress.env('password')) => {
    failOnStatusCode: false
    cy.request({
        method: 'POST',
        url: '/authentications', // Path endpoint, base URL akan ditambahkan otomatis
        body: {
            email: email,
            password: password,
        },
    });
    ///.then((response) => {
    ///    cy.setCookie('sessionId', response.body.sessionId);
    ///    cy.setCookie('userId', response.body.userId);
    ///    cy.setCookie('userName', response.body.userName);
    ///    cy.visit('/#!/main');
    ///});
});
