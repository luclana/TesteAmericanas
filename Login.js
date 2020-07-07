// / <reference types="Cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
  Given('que a tela de login é aberta', () => {
    cy.visit('/');
  });

  cy.server();
  cy.route('POST', '/login').as('login');
  cy.fixture('users.json').as('users');
});

When('realizar login com e-mail e senha válidos', () => {
  cy.get('@users').then((users) => {
    cy.get('[data-cy=input_email]').type(users[0].email);
    cy.get('[data-cy=input_password]').type(users[0].password);
  });
  cy.get('[data-cy=button_entrar]').click();
});

Then('deve ser redirecionado para a página inicial da área do consumidor', () => {
  cy.wait('@login').its('status').should('be', 200);
  cy.url().should('eq', `${Cypress.config().baseUrl}/meu-carrinho`);
});


When('realizar login com e-mail inválido', () => {
  cy.get('@users').then((users) => {
    cy.get('[data-cy=input_email]').type(users[1].email);
    cy.get('[data-cy=input_password]').type(users[1].password);
  });
  cy.get('[data-cy=button_entrar]').click();
});

Then('deve ser exibido mensagem alertando que o campo deve ser preenchido corretamente', () => {
  cy.contains('Por favor, preencha o e-mail corretamente.').should('be.visible');
  cy.get('[data-cy=button_entrar]').contains('Entrar').should('be.visible');
});


When('realizar login com senha inválida', () => {
  cy.get('@users').then((users) => {
    cy.get('[data-cy=input_email]').type(users[2].email);
    cy.get('[data-cy=input_password]').type(users[2].password);
  });
  cy.get('[data-cy=button_entrar]').click();
});

Then('deve ser exibido mensagem informando que o campo deve ser preenchido corretamente', () => {
  cy.contains('Por favor, preencha a senha corretamente.').should('be.visible');
  cy.get('[data-cy=button_entrar]').contains('Entrar').should('be.visible');
});

When('realizar login com e-mail não cadastrado', () => {
  cy.get('@users').then((users) => {
    cy.get('[data-cy=input_email]').type(users[3].email);
    cy.get('[data-cy=input_password]').type(users[3].password);
  });
  cy.get('[data-cy=button_entrar]').click();
});

Then('deve ser exibido mensagem alertando que o e-mail ou senha estão incorretos', () => {
  cy.wait('@login').its('status').should('be', 401);
  cy.contains('E-mail ou Senha incorreto(s).').should('be.visible');
  cy.get('[data-cy=button_entrar]').contains('Entrar').should('be.visible');
});

When('realizar login com senha incorreta', () => {
  cy.get('@users').then((users) => {
    cy.get('[data-cy=input_email]').type(users[4].email);
    cy.get('[data-cy=input_password]').type(users[4].password);
  });
  cy.get('[data-cy=button_entrar]').click();
});

Then('deve ser exibido mensagem alertando que o e-mail ou senha estão incorretos', () => {
  cy.wait('@login').its('status').should('be', 401);
  cy.contains('E-mail ou Senha incorreto(s).').should('be.visible');
  cy.get('[data-cy=button_entrar]').contains('Entrar').should('be.visible');
});

When('realizar login sem preencher os campos obrigatórios', () => {
  cy.get('[data-cy=button_entrar]').click();
});

Then('deve ser exibido mensagem alertando que os campos devem ser preenchidos', () => {
  cy.contains('Por favor, preencha o e-mail corretamente.').should('be.visible');
  cy.contains('Por favor, preencha a senha corretamente.').should('be.visible');
  cy.get('[data-cy=button_entrar]').contains('Entrar').should('be.visible');
});

When('clicar no ícone para visualizar a senha', () => {
  cy.get('[data-cy=input_password]').type('password');
  cy.get('.v-input__append-inner').click();
});

Then('os caracteres da senha devem ser exibidos', () => {
  cy.get('[data-cy=input_password]').type('text');
});


When('clicar no ícone do facebook', () => {
  Then('deve ser redirecionado para a página da Monetizze no facebook', () => {
    cy.get('[data-cy=icon_facebook]')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://www.facebook.com/Americanas.com/');
  });
});

When('acessar a opção não sei minha senha', () => {
  cy.get('[data-cy=button_esqueciSenha]').click();
});

Then('deve ser exibido a página de solicitação de recuperação de senha', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/nao-sei-minha-senha`);
});

When('acessar o link guia de segurança', () => {
  Then('deve ser redirecionado para a página de guia de segurança da Americanas', () => {
    cy.get('[data-cy=link_guia_de_segurança]')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://www.americanas.com.br/hotsite/guia-de-seguranca?chave=brd_hm_bt_0_footer_guiaseguranca');
  });
});
