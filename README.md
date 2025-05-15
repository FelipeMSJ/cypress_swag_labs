Cenários de Teste

--------------------------

Página de Login (login.cy.js)

Cenário: Realizar login com sucesso no sistema
    DADO que estou na página principal
    QUANDO digito um usuário com acesso válido
    E digito a senha correta
    E pressiono o botão 'Login'
    ENTÃO devo ser redirecinado para a página principal

Cenário: Falha ao inserir usuário bloqueado
    DADO que estou na página principal
    QUANDO digito um usuário com acesso bloqueado
    E digito a senha correta
    E pressiono o botão 'Login'
    ENTÃO deve ser exibida a mensagem 'Epic sadface: Sorry, this user has been locked out.'

Cenário: Falha ao não inserir usuário
    DADO que estou na página principal
    QUANDO digito uma senha correta com usuário em branco
    E pressiono o botão 'Login'
    ENTÃO deve ser exibida a mensagem 'Epic sadface: Username is required'
    
Cenário: Falha ao não inserir senha
    DADO que estou na página principal
    QUANDO digito um usuário com acesso válido com senha em branco
    E pressiono o botão 'Login'
    ENTÃO deve ser exibida a mensagem 'Epic sadface: Password is required'

Cenário: Falha ao inserir senha incorreta
    DADO que estou na página principal
    QUANDO digito um usuário com acesso válido
    E digito a senha incorreta
    E pressiono o botão 'Login'
    ENTÃO deve ser exibida a mensagem 'Epic sadface: Username and password do not match any user in this service'

---------------------

Página de Inventário (inventory.cy.js)

Cenário: Acessar o produto "Sauce Labs Backpack" a partir do seu título
    DADO que estou na página de inventário
    QUANDO clico no título do produto "Sauce Labs Backpack"
    ENTÃO devo ser redirecionado para a página do produto "Sauce Labs Backpack"

Cenário: Acessar o produto "Sauce Labs Backpack" a partir de sua imagem
    DADO que estou na página de inventário
    QUANDO clico na imagem do produto "Sauce Labs Backpack"
    ENTÃO devo ser redirecionado para a página do produto "Sauce Labs Backpack"

Cenário: Adicionar o produto "Sauce Labs Bike Light" no carrinho
    DADO que estou na página de inventário
    QUANDO clico no carrinho no produto "Sauce Labs Bike Light"
    ENTÃO o botão deve mudar para "Remove"
    E a quantidade de itens no carrinho deve somar um

Cenário: Remover o produto "Sauce Labs Bolt T-Shirt" do carrinho
    DADO que estou na página de inventário
    E possua o produto "Sauce Labs Bolt T-Shirt" adicionado ao carrinho
    QUANDO clico no botão "Remove"
    ENTÃO o botão deve mudar para "Add to cart"

-------------------------

Página de Carrinho (cart.cy.js)

Cenário: Redirecionar com sucesso para a página de inventário
    DADO que estou na página de carrinho
    QUANDO clico no botão "Continue Shopping"
    ENTÃO devo ser redirecionado para de inventário

Cenário: Remover com sucesso item "Sauce Labs Backpack" do carrinho
    DADO que estou na página de carrinho
    E possua o iten "Sauce Labs Backpack" adicionado
    QUANDO clico no botão "Remover"
    ENTÃO o item não deve estar mais disponível na lista de compras

------------

Side Bar (sidebar.cy.js)

Cenário: Expandir com sucesso barra lateral
    DADO que estou autenticado com sucesso
    QUANDO clico no ícone da barra lateral
    ENTÃO deve ser possível visualizar as opções do menu lateral

Cenário: Redirecionar com sucesso para a página de inventário
    DADO que estou autenticado com sucesso
    E a barra lateral está expandida
    QUANDO clico na opção "All Items"
    ENTÃO devo ser redirecionado para a página de inventário

Cenário: Redirecionar com sucesso para a página de Sobre
    DADO que estou autenticado com sucesso
    E a barra lateral está expandida
    QUANDO clico na opção "About"
    ENTÃO devo ser redirecionado para a página de Sobre

Cenário: Realizar logout com sucesso do sistema
    DADO que estou autenticado com sucesso
    E a barra lateral está expandida
    QUANDO clico na opção "Logout"
    ENTÃO devo ser redirecionado para a página de login

Cenário: Limpar carrinho com sucesso
    DADO que estou autenticado com sucesso
    E a barra lateral está expandida
    E possua itens adicionado no carrinho
    QUANDO clico na opção "Reset App State"
    ENTÃO todos os itens do carrinho devem ser removidos
