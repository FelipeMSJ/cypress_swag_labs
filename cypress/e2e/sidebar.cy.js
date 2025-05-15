beforeEach(() => {
    cy.visit('/');
    cy.loginCommand()
});

describe('Cenários referentes ao Side Bar', () => {
    it('Expandir com sucesso side bar', () => {
        cy.sideBarExpandCommand()
    });

    it('Redirecionar com sucesso para página de inventário', () => {
        cy.sideBarExpandCommand()
        cy.get('a[data-test="inventory-sidebar-link"]').click()
        cy.url().should('contain', '/inventory.html')
    });

    it('Redirecionar com sucesso para página de Sobre', () => {
        cy.sideBarExpandCommand()
        cy.get('a[data-test="about-sidebar-link"]').click()
        cy.origin('https://saucelabs.com/', ()=>{
            cy.url().should('be.eql', 'https://saucelabs.com/')
        })
    });

    it('Deslogar com sucesso da aplicação', () => {
        cy.sideBarExpandCommand()
        cy.get('a[data-test="logout-sidebar-link"]').click()
        cy.url().should('eql', Cypress.config().baseUrl)
    });

    it('Limpar carrinho com sucesso', () => {
        cy.adicionarCarrinhoCommand()
        cy.get('button[data-test="continue-shopping"]').click()
        
        cy.get('span[data-test="shopping-cart-badge"]').should('exist')
        cy.sideBarExpandCommand()
        cy.get('a[data-test="reset-sidebar-link"]').click()
        cy.get('span[data-test="shopping-cart-badge"]').should('not.exist')
    });
});