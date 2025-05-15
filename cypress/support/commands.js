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

import credentials from "../fixtures/credentials.json"

Cypress.Commands.add('loginCommand', ()=>{
    cy.get('[data-test="username"]').type(credentials.usernames.standart_user)
    cy.get('[data-test="password"]').type(credentials.password)

    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
});

Cypress.Commands.add('adicionarCarrinhoCommand', ()=>{
    cy.get('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').as('botao').then(($botao)=>{
        cy.log($botao)
        let nomeProduto = $botao[0].parentElement.parentElement.childNodes[0].childNodes[0].innerText
        cy.log(nomeProduto)
        cy.get('@botao')
            .should('have.text', 'Add to cart')
            .click()
        cy.get('button[data-test="remove-sauce-labs-bolt-t-shirt"]').should('be.visible')
        cy.get('a[data-test="shopping-cart-link"]').click()
        cy.get('div[data-test="inventory-item-name"]').should('contain', nomeProduto)
    })
});

Cypress.Commands.add('sideBarExpandCommand',  ()=>{
    cy.get('div[class="bm-menu-wrap"]').should('have.attr', 'aria-hidden', 'true');
    cy.get('button#react-burger-menu-btn').click()
    cy.get('div[class="bm-menu-wrap"]').should('have.attr', 'aria-hidden', 'false');
});