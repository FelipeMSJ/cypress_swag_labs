import credentials from "../fixtures/credentials.json"

beforeEach(() => {
    cy.visit('/')
});

describe("Cenários referentes à página de login", ()=>{
    it('Usuário deve logar com sucesso', () => {
        cy.loginCommand()
    });

    it('Falha ao inserir usuário bloqueado', () => {
        cy.get('[data-test="username"]').type(credentials.usernames.locked_out_user)
        cy.get('[data-test="password"]').type(credentials.password)

        cy.get('[data-test="login-button"]').click()
        cy.get('h3[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('Falha ao não inserir usuário', () => {
        cy.get('[data-test="password"]').type(credentials.password)

        cy.get('[data-test="login-button"]').click()
        cy.get('h3[data-test="error"]').should('contain', 'Epic sadface: Username is required')
    });

    it('Falha ao não inserir senha', () => {
        cy.get('[data-test="username"]').type(credentials.usernames.locked_out_user)

        cy.get('[data-test="login-button"]').click()
        cy.get('h3[data-test="error"]').should('contain', 'Epic sadface: Password is required')
    });
})