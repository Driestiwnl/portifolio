describe('Acesso à Página Inicial', () => {
    it('Deve carregar a página inicial com sucesso', () => {
      cy.visit('https://example.com');
      cy.url().should('include', 'example.com');
      cy.get('h1').should('contain', 'Bem-vindo');
    });
  });
  