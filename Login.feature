#language: pt
@estoria_mon-01

@e2e
Funcionalidade: Login na área do consumidor

Eu como consumidor quero logar na área do consumidor para 
ter acesso a  tela e a todos os recursos oferecidos pela Americanas

Contexto:
      Dado que a tela de login seja aberta


@funcional
Cenario: Realizar login com dados válidos
   Quando eu realizar login com dados validos de acesso
   Entao  devo ser encaminhado diretamente para a pagina inicial das Americanas


@funcional
Cenario: Realizar login com dados inválidos
   Quando eu realizar login com dados de acesso invalidos
   Entao devo ser informado de que o acesso a tela do consumidor está negado por preenchimento de dados incorretos



