describe('Disappearing Elements - Recarga múltiple', () => {

  const recargas = 10 // número de veces que recargamos
  let galleryCount = 0 // contador de cuántas veces aparece Gallery

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('a', 'Disappearing Elements').click()
    cy.url().should('include', '/disappearing_elements')
  })

  it(`Cuenta cuántas veces aparece Gallery en ${recargas} recargas`, () => {

    for (let i = 0; i < recargas; i++) {
      cy.log(`Recarga #${i + 1}`)

      // Obtenemos los links visibles
      cy.get('.example')
        .find('a')
        .then(($links) => {
          const texts = $links.toArray().map(el => el.innerText.trim())
          cy.log(`Links visibles: ${texts.join(' | ')}`)

          // Contamos si Gallery aparece
          if (texts.includes('Gallery')) {
            galleryCount++
          }

          // Home siempre debe existir
          expect(texts).to.include('Home')
        })

      // Recargamos la página antes de la siguiente iteración
      if (i < recargas - 1) {
        cy.reload()
      }
    }

    // Al final del test mostramos cuántas veces apareció Gallery
    cy.then(() => {
      cy.log(`Gallery apareció ${galleryCount} veces de ${recargas}`)
      console.log(`Gallery apareció ${galleryCount} veces de ${recargas}`)
    })
  })

})
