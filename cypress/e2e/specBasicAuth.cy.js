describe('The Internet - Home', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })
    it('Autenticacion basica', () => {
        cy.get('ul li a').should('exist')
        cy.get('ul li a').should('have.length.greaterThan', 1)
        cy.contains('a', 'Basic Auth').should('exist')
        cy.contains('li', 'Basic Auth (user and pass: admin)').should('exist')
        // Puedes añadir más comprobaciones según los elementos que quieras verificar
        cy.contains('li a', 'Basic Auth').then(($link) => {
            const href = $link.prop('href') // obtenemos el link
            cy.visit(href, {
                auth: {
                    username: 'admin',
                    password: 'admin'
                }
            })
        })
        cy.get('h3').should('contain', 'Basic Auth')
        cy.get('div.example p').should('contain', 'Congratulations! You must have the proper credentials.')
    })
})    