beforeEach(() => {
    cy.visit('/');
    cy.loginCommand()
});

describe('Cenários referentes aos produtos do inventário', () => {
    it('Deve redirecionar com sucesso usuário para a página do produto ao clicar no título', () => {
        //Busca sempre o item que estiver na segunda posição da página, independente da ordenação
        cy.get('div[data-test="inventory-item-name"]').eq(1)
            .as('produto')
            .then(($produto)=>{
                cy.log($produto)
                cy.log($produto[0].innerText)
                cy.get('@produto').click()
                //Valida se usuário foi redirecionado para a página do produto
                cy.url().should('contain', '/inventory-item.html')
                //Valida se o nome do produto é o mesmo interagido no início do cenário
                cy.get('div[data-test="inventory-item-name"]').should('have.text', $produto[0].innerText)
            })
    });

    it('Deve redirecionar com sucesso usuário para a página do produto ao clicar na imagem', () => {
        cy.get('img.inventory_item_img').eq(3)
            .as('produto')
            .then(($produto)=>{
                cy.log($produto)
                cy.log($produto[0].alt)
                cy.get('@produto').click()
                cy.url().should('contain', '/inventory-item.html')
                cy.get('div[data-test="inventory-item-name"]').should('have.text', $produto[0].alt)
            })
    });

    it('Deve adicionar produto ao carrinho com sucesso', () => {
        //Utilização de Command para adicionar produto no carrinho para reaproveitamento de código
        cy.redirectCarrinhoCommand()
    });

    it('Remover produto do carrinho com sucesso', () => {
        cy.get('div[data-test="inventory-item-description"]').eq(4)
            .children('div[class="pricebar"]')
            .as('divPriceBar')
            .children('button[class="btn btn_primary btn_small btn_inventory "]')
            .should('have.text', 'Add to cart')
            .click()
            .then(()=>{
                cy.get('@divPriceBar')
                .children('button[class="btn btn_secondary btn_small btn_inventory "]')
                .should('have.text', 'Remove')
                .click()
            })
        cy.get('span[data-test="shopping-cart-badge"]').should('not.exist')
    });
});