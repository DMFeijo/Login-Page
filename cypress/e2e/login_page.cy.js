beforeEach(() => {
  cy.visit('http://the-internet.herokuapp.com/login')
  cy.url().should('include', '/login')
});
describe('Login', () => {
  it('Login de usuário com sucesso', () => {
  
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.contains('You logged into a secure area!')
  })
  it('Login com usuário invalido', () => {

    cy.get('#username').type('teste')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.contains('Your username is invalid!')
  });
  it('Login com senha invalida', () => {

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('teste')
    cy.get('.radius').click()
    cy.contains('Your password is invalid!')
  });
  it('Login com usuário e senha invalido', () => {

    cy.get('#username').type('teste')
    cy.get('#password').type('teste')
    cy.get('.radius').click()
    cy.contains('Your username is invalid!')
  });
  it('Não preencher os campos Login e Senha', () => {

    cy.get('.radius').click()
    cy.contains('Your username is invalid!')
  });
})