describe('Pesquisa de Produtos', () => {
    it('Deve retornar resultados ao pesquisar um produto', () => {
      cy.visit('/produtos');
      cy.get('input[name="search"]').type('Smartphone{enter}');
      cy.get('.product-list').should('contain', 'Smartphone');
    });
  });
  