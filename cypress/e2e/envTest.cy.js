

describe('variables d\'environnement', () => {
    it('Test variable d\'environnement', () => {
      cy.log(`Base URL : ${Cypress.env('baseURL')}`);

      cy.visit(Cypress.env('baseURL'));
      cy.get('h1').should('be.visible').and('contain', 'Kitchen Sink');
    });
});

// 