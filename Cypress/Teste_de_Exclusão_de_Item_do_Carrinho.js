describe('Remoção de Item do Carrinho', () => {
    it('Deve remover um item do carrinho', () => {
      cy.visit('/carrinho');
      cy.get('button.remover-item').click();
      cy.get('.carrinho').should('not.contain', 'item');
    });
  });
  