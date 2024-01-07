/// <reference types="cypress" />

context('Suacedemo Automation Test', () => {

    beforeEach('visit the website', () => {
        cy.visit('https://www.saucedemo.com')
    })

    it('Automate Feature for locked_out_user', () => {
        //login locked_out_user
        cy.get('[data-test="username"]').clear()
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').clear()
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()  

        //konfirmasi user tidak dapat masuk
        cy.get('[data-test="error"]').should('be.visible')
    });

    it('Automate Feature for standard user', () => {

        //login standard user, diambil dari json
        cy.fixture("saucedemo").then(saucedemo => {
        const id = saucedemo.id
        const pwd = saucedemo.pwd
        cy.get('[data-test="username"]').clear()
        cy.get('[data-test="username"]').type(id)
        cy.get('[data-test="password"]').clear()
        cy.get('[data-test="password"]').type(pwd)
        })
        cy.get('[data-test="login-button"]').click()

        //kofirmasi berhasil masuk ke inventory
        cy.url().should('include','inventory.html')

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

        //logout dari system
        cy.get('#react-burger-menu-btn').click({force: true} )
        cy.get('#logout_sidebar_link').should('be.visible')
        cy.get('#logout_sidebar_link').click()

        //konfirmasi berhasil logout
        cy.get('[data-test="login-button"]').should('be.visible')
    });
})
