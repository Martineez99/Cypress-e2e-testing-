describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Acceder a la pagina de cypress', () => {
    // Ya se visita la página en beforeEach
  })

  it('Comprueba que existe un enlace get', () => {
    cy.contains('a', 'get').should('exist')
  })

  describe('Seccion query', () => {
    beforeEach(() => {
      // Abre el menú "Commands" y navega a "Querying"
      cy.get('#navbar').contains('a', 'Commands').click()
      cy.get('#navbar').contains('a', 'Querying').click()
    })

    it('Debe encontrar el div con data-test-id="test-example"', () => {
      cy.get('[data-test-id="test-example"]').should('exist')
      cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    })
  })

  describe('Barra de navegación superior', () => {
        it('Accede a Querying desde el menú y verifica el contenido', () => {
          // Abre el menú "Commands" y haz clic en "Querying"
          cy.get('#navbar').contains('a', 'Commands').click()
          cy.get('#navbar').contains('a', 'Querying').click()

          // Verifica que la URL cambió correctamente
          cy.url().should('include', '/commands/querying')

          // Verifica que el título de la sección es correcto
          cy.get('h1').should('contain', 'Querying')

          // Verifica que existe el contenedor principal de la sección
          cy.get('#querying').should('exist')
        })
    it('Debe contener los enlaces principales', () => {
      cy.get('#navbar').within(() => {
        cy.contains('a', 'Commands').should('exist')
        cy.contains('a', 'Utilities').should('exist')
        cy.contains('a', 'Cypress API').should('exist')
        cy.contains('a', 'GitHub').should('exist')
      })
    })

    it('Debe contener todos los enlaces de Commands', () => {
      const enlaces = [
        'Querying',
        'Traversal',
        'Actions',
        'Window',
        'Viewport',
        'Location',
        'Navigation',
        'Assertions',
        'Misc',
        'Connectors',
        'Aliasing',
        'Waiting',
        'Network Requests',
        'Files',
        'Storage',
        'Cookies',
        'Spies, Stubs & Clocks'
      ];
      cy.get('#navbar').within(() => {
        enlaces.forEach(texto => {
          cy.contains('a', texto).should('exist')
        });
      });
    })
  })
})