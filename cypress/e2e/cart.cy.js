beforeEach(() => {
    cy.visit('/');
    cy.loginCommand()
    cy.redirectCarrinhoCommand()
});

describe('Cenários referentes à página de carrinho', () => {
    it('Redirecionar com sucesso para a página de inventário', () => {
        cy.get('button[data-test="continue-shopping"]')
            .should('have.text', 'Continue Shopping')
            .click()
        cy.url().should('contain', '/inventory.html')
    });

    it('Remover item do carrinho', () => {
        //Para garantir que o teste não seja restrito à um produto específico, foi preciso navegar pelas divs até chegar na funcionalidade
        cy.get('div[data-test="inventory-item"]')
            .should('be.visible')
            .children('div[class="cart_item_label"]')
            .children('div[class="item_pricebar"]')
            .children('button[class="btn btn_secondary btn_small cart_button"]')
            .should('have.text', 'Remove')
            .click()
    });
});