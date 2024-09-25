describe('Teste de Logout', () => {
    it('Deve fazer logout com sucesso', () => {
      cy.visit('/dashboard');
      cy.get('button.logout').click();
      cy.url().should('include', '/login');
    });
  });
  