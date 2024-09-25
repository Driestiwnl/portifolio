describe('Navegação', () => {
    it('Deve navegar para a página de contato', () => {
      cy.visit('/');
      cy.get('nav').contains('Contato').click();
      cy.url().should('include', '/contato');
      cy.get('h1').should('contain', 'Fale Conosco');
    });
  });
  