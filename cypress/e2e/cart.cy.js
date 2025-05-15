beforeEach(() => {
    cy.visit('/');
    cy.loginCommand()
    cy.adicionarCarrinhoCommand()
});

describe('Cenários referentes à página de carrinho', () => {
    it('Redirecionar com sucesso para a página de inventário', () => {
        cy.get('button[data-test="continue-shopping"]').click()
        cy.url().should('contain', '/inventory.html')
    });

    it('Remover item do carrinho', () => {
        cy.get('div[data-test="inventory-item"]').should('be.visible')
        cy.get('div[data-test="inventory-item"]').as('produto')
        cy.get('@produto')
            .children('div[class="cart_item_label"]')
            .children('div[class="item_pricebar"]')
            .children('button[class="btn btn_secondary btn_small cart_button"]')
            .should('have.text', 'Remove')
            .click()
    });
});