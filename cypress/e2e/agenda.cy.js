describe('Testes na Agenda de Contatos', () => {
  const url = 'https://agenda-contatos-react.vercel.app/'

  beforeEach(() => {
    cy.visit(url)
  })

  it('Deve adicionar um contato', () => {
    cy.get('input[placeholder="Nome"]').type('João Teste')
    cy.get('input[placeholder="E-mail"]').type('joao@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11999999999')

    cy.get('button[type="submit"]').click()

    cy.get('.contato').contains('João Teste', { timeout: 10000 }).should('exist')
  })

  it('Deve editar um contato', () => {
    cy.get('.contato').contains('João Teste', { timeout: 10000 }).should('exist')
      .closest('.contato')
      .within(() => {
        cy.contains(/editar/i).click()
      })

    cy.get('input[placeholder="Nome"]').clear().type('João Alterado')
    cy.get('input[placeholder="E-mail"]').clear().type('alterado@teste.com')
    cy.get('input[placeholder="Telefone"]').clear().type('11888888888')

    cy.get('button[type="submit"]').click()

    cy.get('.contato').contains('João Alterado', { timeout: 10000 }).should('exist')
    // NÃO vamos mais testar se "João Teste" sumiu!
  })

  it('Deve remover um contato', () => {
    cy.get('.contato').contains('João Alterado', { timeout: 10000 }).should('exist')
      .closest('.contato')
      .within(() => {
        cy.contains(/deletar/i).click()
      })

    cy.get('.contato').should('not.contain', 'João Alterado')
  })
})
