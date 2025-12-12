describe('The Internet - Home', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Debe mostrar el listado de elementos', () => {
        cy.get('ul li a').should('exist')
        cy.get('ul li a').should('have.length.greaterThan', 1)
        cy.contains('a', 'A/B Testing').should('exist')
        cy.contains('a', 'Add/Remove Elements').should('exist')
        // Puedes añadir más comprobaciones según los elementos que quieras verificar
    })

    describe('Seccion A/B Testing', () => {
        
        it('El título de A/B Testing es una de las variantes posibles', () => {
            cy.visit('https://the-internet.herokuapp.com/abtest')
            cy.get('h3').invoke('text').then((titulo) => {
                expect([
                    'A/B Test Control',
                    'A/B Test Variation 1'
                ]).to.include(titulo.trim())
            })
        })
        beforeEach(() => {
            cy.contains('a', 'A/B Testing').click()
        })

        it('Debe navegar a A/B Testing correctamente', () => {
            cy.url().should('include', '/abtest')
            cy.get('h3').should('contain', 'A/B Test')
        })

        it('Debe mostrar el título principal', () => {
            cy.get('h3').should('contain', 'A/B Test')
        })

        it('Debe mostrar el texto introductorio', () => {
            cy.get('.example p').should('exist')
        })

        it('La URL debe ser la correcta', () => {
            cy.url().should('include', '/abtest')
        })
    })

    describe('Add/Remove Elements', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
    })

    it('Añade 5 botones y elimina el 4º y el 2º', () => {
        // Añadir 5 botones
        for (let i = 0; i < 5; i++) {
            cy.contains('Add Element').click()
        }
        cy.get('#elements button').should('have.length', 5)

        // Eliminar el 4º botón (índice 3)
        cy.get('#elements button').eq(3).click()
        cy.get('#elements button').should('have.length', 4)

        // Eliminar el 2º botón (índice 1)
        cy.get('#elements button').eq(1).click()
        cy.get('#elements button').should('have.length', 3)
        })
    })
})
