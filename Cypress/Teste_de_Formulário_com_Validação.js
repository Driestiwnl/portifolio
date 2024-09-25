describe('Validação de Formulário', () => {
    it('Deve exibir erro ao enviar formulário sem dados', () => {
      cy.visit('/form');
      cy.get('button[type="submit"]').click();
      cy.get('.error-message').should('be.visible').and('contain', 'Campo obrigatório');
    });
  });
  