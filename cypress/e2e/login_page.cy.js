beforeEach(() => {

  //Acessar a URL
  cy.visit('http://the-internet.herokuapp.com/login')

  //Verificar se acessou a URL correta
  cy.url().should('include', '/login')
});

describe('Login', () => {
  it('Login de usuário com sucesso', () => {

    //Digitar o nome do usuário
    cy.get('#username').type('tomsmith')

    //Digitar a senha do usuário
    cy.get('#password').type('SuperSecretPassword!')

    //Clicar no botão login
    cy.get('.radius').click()

    //Verificar se o usuário foi direcionado para pagina correta
    cy.contains('You logged into a secure area!')
  })

  it('Login com usuário invalido', () => {

    //Digitar o nome do usuário
    cy.get('#username').type('teste')

    //Digitar o nome do usuário invalido
    cy.get('#username').type('teste')

    //Digitar a senha do usuário
    cy.get('#password').type('SuperSecretPassword!')

    //Clicar no botão login
    cy.get('.radius').click()

    //Verificar mensagem de erro
    cy.contains('Your username is invalid!')
  });

  it('Login com senha invalida', () => {

    //Digitar o nome do usuário
    cy.get('#username').type('tomsmith')

    //Digitar a senha do usuário invalida
    cy.get('#password').type('teste')

    //Clicar no botão login
    cy.get('.radius').click()

    //Verificar mensagem de erro
    cy.contains('Your password is invalid!')
  });
  it('Login com usuário e senha invalido', () => {

    //Digitar o nome do usuário invalida
    cy.get('#username').type('teste')

    //Digitar a senha do usuário invalida
    cy.get('#password').type('teste')

    //Clicar no botão login
    cy.get('.radius').click()

    //Verificar mensagem de erro
    cy.contains('Your username is invalid!')
  });

  it('Não preencher os campos Login e Senha', () => {
    //Clicar no botão login
    cy.get('.radius').click()

    //Verificar mensagem de erro
    cy.contains('Your username is invalid!')
  });
})