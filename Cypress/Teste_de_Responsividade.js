describe('Teste de Responsividade', () => {
    it('Deve adaptar o layout no modo mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/');
      cy.get('.menu-mobile').should('be.visible');
    });
  });
  