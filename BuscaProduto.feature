BuscaProduto.feature

#language: pt
@estoria_mon-02

@e2e
Funcionalidade: Buscar produtos na pagina das Americanas

Eu como consumidor quero poder realizar busca na pagina das Americanas para 
ter acesso ao produtos que necessito 

Contexto:
      Dado que a tela de login seja aberta


@e2e
Cenario: O produto buscado tenha sido encontrado e que a tela de login esteja aberta
Quando selcionar um produto valido nas Americanas
Entao devo conseguir adicionar o mesmo a minha cesta de compras

@e2e
Cenario: O produto buscado tenha sido encontrado e que a tela de login esteja aberta
Quando selcionar um produto invalido nas Americanas
Entao devo ser informado que o produto esta indisponivel para compra

@e2e
Cenario: O produto buscado tenha saido de estoque
Quando selcionar um produto invalido nas Americanas
Entao devo ser informado que o produto esta  indisponivel por falta de estoque
