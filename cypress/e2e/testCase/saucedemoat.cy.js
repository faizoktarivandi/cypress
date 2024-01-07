/// <reference types="cypress" />

context('Suacedemo standard_user feature test', () => {
    beforeEach('visit the website', () => {
        cy.visit('https://www.saucedemo.com')
    })

    it('Automate Feature for standard user', () => {

        //login standard_user dengan fixture
        cy.fixture("saucedemo").then(saucedemo => {
        const id = saucedemo.id
        const pwd = saucedemo.pwd
        cy.get('[data-test="username"]').clear()
        cy.get('[data-test="username"]').type(id)
        cy.get('[data-test="password"]').clear()
        cy.get('[data-test="password"]').type(pwd)
        })
        cy.get('[data-test="login-button"]').click()

        //buka halaman produk, tambah ke cart dan kembali ke inventory
        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="back-to-products"]').click()

        //mengganti barang yang ingin dibeli dari halaman inventory
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()

        //masuk ke cart
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        
        //isi informasi pembeli & menyelesaikan pembelian
        cy.get('[data-test="firstName"]').type('Faiz')
        cy.get('[data-test="lastName"]').type('Oktarivandi')
        cy.get('[data-test="postalCode"]').type('15416')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()

        //memastikan pesanan berhasil
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
    })
})
