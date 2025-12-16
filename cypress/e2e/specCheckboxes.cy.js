describe('The Internet - Checkboxes', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('a', 'Checkboxes').click()
        cy.url().should('include', '/checkboxes')
    })

    it('Deja solo el checkbox 1 marcado', () => {

        cy.get('#checkboxes input[type="checkbox"]').each(($cb, index) => {

            if (index === 0) {
                // Checkbox 1 → debe quedar marcado
                cy.wrap($cb).check()
                    .should('be.checked')
            } else {
                // Cualquier otro → debe quedar desmarcado
                cy.wrap($cb).uncheck()
                    .should('not.be.checked')
            }

        })

    })

    it('Deja solo el checkbox 2 marcado', () => {

        cy.get('#checkboxes input[type="checkbox"]').each(($cb, index) => {
            if (index === 1) {
                // Checkbox 2 → debe quedar marcado
                cy.wrap($cb).check()
                    .should('be.checked')
            } else {
                // Cualquier otro → debe quedar desmarcado
                cy.wrap($cb).uncheck()
                    .should('not.be.checked')
            }
        })

    })

    it('Marca ambos checkboxes', () => {

        cy.get('#checkboxes input[type="checkbox"]').each(($cb) => {
            // Marca todos los checkboxes
            cy.wrap($cb).check()
                .should('be.checked')
        })
    })

    it('Desmarca ambos checkboxes', () => {
        cy.get('#checkboxes input[type="checkbox"]').each(($cb) => {
            // Desmarca todos los checkboxes
            cy.wrap($cb).uncheck()
                .should('not.be.checked')
        })
    })

})
