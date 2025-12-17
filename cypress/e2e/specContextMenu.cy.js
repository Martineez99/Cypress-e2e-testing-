describe('Context Menu Tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.contains('a', 'Context Menu').click();
    cy.url().should('include', '/context_menu');
  });
    it('Verifica la existencia del área de contexto', () => {
        cy.get('#hot-spot').should('exist');
    });
    it('Realiza clic derecho y verifica la alerta', () => {
        cy.get('#hot-spot').rightclick();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('You selected a context menu');
        });
    });
});