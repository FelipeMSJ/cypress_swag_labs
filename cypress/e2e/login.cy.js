import credentials from "../fixtures/credentials.json"
import { faker } from '@faker-js/faker/locale/en';

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

    it('Falha ao inserir usuário ou senha incorretos', () => {
        cy.get('[data-test="username"]').type(faker.internet.username())
        cy.get('[data-test="password"]').type(faker.internet.password())

        cy.get('[data-test="login-button"]').click()
        cy.get('h3[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
})