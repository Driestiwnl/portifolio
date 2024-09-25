describe('Carrinho de Compras', () => {
    it('Deve adicionar um item ao carrinho', () => {
      cy.visit('/produtos');
      cy.get('.product').first().click();
      cy.get('button.adicionar-ao-carrinho').click();
      cy.get('.carrinho').should('contain', '1 item');
    });
  });
  