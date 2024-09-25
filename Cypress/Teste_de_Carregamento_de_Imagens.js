describe('Teste de Carregamento de Imagens', () => {
    it('Deve verificar se a imagem do banner é carregada', () => {
      cy.visit('/');
      cy.get('.banner img').should('be.visible').and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    });
  });
  