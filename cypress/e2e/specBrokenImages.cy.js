describe('The Internet - Home', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Broken Images - Verificar imágenes rotas', () => {
        
        cy.contains('a', 'Broken Images').click()
        cy.url().should('include', '/broken_images')

        cy.get('div.example').within(() => {
            cy.get('img').should('have.length', 3)

            // Imagen 1 rota
            cy.get('img').eq(0)
            .should('have.prop', 'naturalWidth', 0)

            // Imagen 2 rota
            cy.get('img').eq(1)
            .should('have.prop', 'naturalWidth', 0)

            // Imagen 3 correcta
            cy.get('img').eq(2).then(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
        })
    })

})