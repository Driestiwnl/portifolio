describe('Teste de Login', () => {
    it('Deve fazer login com credenciais válidas', () => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('usuario');
      cy.get('input[name="password"]').type('senha');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
    });
  });
  