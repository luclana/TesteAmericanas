ValidaCarrinho.fiature

#language: pt
@estoria_mon-04

@e2e
Funcionalidade: Validar o produto no carrinho de compras

Eu como consumidor quero poder realizar busca na pagina das Americanas para 
ter acesso ao produtos que necessito 

Contexto:
      Dado que a tela de login esteja aberta e o produto seja valido

@e2e
Cenario: Selecionar o produto desejado
Quando o produto for direcionado ao carrinho
Entao devo  validar o produto no carrinho e finalizar ser enviado para a finalizaçao da compra




@e2e
Cenario: forma de pagamento invalida
Quando o produto for direcionado ao carrinho
Entao devo visualizar que a forma de pagamento seleciodana nao esteja disponivel na plataforma e compra nao possa ser realizada

      
@e2e
Cenario: forma de pagamento valida
Quando o produto for direcionado ao carrinho
Entao devo visualizar que a forma de pagamento seleciodana e valida na plataforma e sou enviado para a finalizaçao da compra