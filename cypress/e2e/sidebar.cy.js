beforeEach(() => {
    cy.visit('/');
    cy.loginCommand()
});

describe('Cenários referentes ao Side Bar', () => {
    it('Expandir com sucesso side bar', () => {
        //Command para expandir side bar para reaproveitamento de código
        cy.sideBarExpandCommand()
    });

    it('Redirecionar com sucesso para página de inventário', () => {
        cy.sideBarExpandCommand()
        cy.get('a[data-test="inventory-sidebar-link"]')
            .should('have.text', 'All Items')
            .click()
        //Após clique redirecionar para a página de inventário
        cy.url().should('contain', '/inventory.html')
    });

    it('Redirecionar com sucesso para página de Sobre', () => {
        cy.sideBarExpandCommand()
        cy.get('a[data-test="about-sidebar-link"]')
            .should('have.text', 'About')
            .click()
        cy.origin('https://saucelabs.com/', ()=>{
            cy.url().should('be.eql', 'https://saucelabs.com/')
        })
    });

    it('Deslogar com sucesso da aplicação', () => {
        cy.sideBarExpandCommand()
        cy.get('a[data-test="logout-sidebar-link"]')
            .should('have.text', 'Logout')
            .click()
        cy.url().should('eql', Cypress.config().baseUrl)
    });

    it('Limpar carrinho com sucesso', () => {
        //Adiciona item ao carrinho e retorna para a página de inventário
        cy.redirectCarrinhoCommand()
        cy.get('button[data-test="continue-shopping"]').click()
        
        //Valida se o carrinho possui mais de um item
        cy.get('span[data-test="shopping-cart-badge"]').should('exist')
        cy.sideBarExpandCommand()
        //Reseta o carrinho de compras
        cy.get('a[data-test="reset-sidebar-link"]')
            .should('have.text', 'Reset App State')
            .click()
        cy.get('span[data-test="shopping-cart-badge"]').should('not.exist')
    });
});