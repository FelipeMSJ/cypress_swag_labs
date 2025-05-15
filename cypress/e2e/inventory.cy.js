beforeEach(() => {
    cy.visit('/');
    cy.loginCommand()
});

describe('Cenários referentes aos produtos do inventário', () => {
    it('Deve redirecionar com sucesso usuário para a página do produto ao clicar no título', () => {
        cy.get('div[data-test="inventory-item-name"]').eq(1).as('produto').then(($produto)=>{
            cy.log($produto)
            cy.log($produto[0].innerText)
            cy.get('@produto').click()
            cy.url().should('contain', '/inventory-item.html')
            cy.get('div[data-test="inventory-item-name"]').should('have.text', $produto[0].innerText)
        })
    });

    it('Deve redirecionar com sucesso usuário para a página do produto ao clicar na imagem', () => {
        cy.get('img.inventory_item_img').eq(3).as('produto').then(($produto)=>{
            cy.log($produto)
            cy.log($produto[0].alt)
            cy.get('@produto').click()
            cy.url().should('contain', '/inventory-item.html')
            cy.get('div[data-test="inventory-item-name"]').should('have.text', $produto[0].alt)
        })
    });

    it('Deve adicionar produto ao carrinho com sucesso', () => {
        cy.adicionarCarrinho()
    });
});