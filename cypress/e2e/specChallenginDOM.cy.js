describe('The Internet - Home', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('a', 'Challenging DOM').click()
        cy.url().should('include', '/challenging_dom')
    })

    it('Challenging DOM - Verificar botones por clases', () => {

        cy.get('#content .large-2.columns').within(() => {
            cy.get('a.button').should('have.length', 3)
            
            //Boton azul
            cy.get('a.button').eq(0)
                .should('not.have.class', 'alert')
                .and('not.have.class', 'success')
            //Boton rojo
            cy.get('a.button.alert')
                
            //Boton verde
            cy.get('a.button.success')
               
            
        })
    })

    it('Challenging DOM - Verificar botones por clases y colores', () => {
        

        cy.get('#content .large-2.columns').within(() => {

            cy.get('a.button').should('have.length', 3)

            // Azul (default)
            cy.get('a.button:not(.alert):not(.success)').first().then(($btn) => {
                expect($btn.css('background-color')).to.include('43, 166, 203')
            })

            // Rojo
            cy.get('a.button.alert').then(($btn) => {
                expect($btn.css('background-color')).to.include('198, 15, 19')
            })

            // Verde
            cy.get('a.button.success').then(($btn) => {
                expect($btn.css('background-color')).to.include('93, 164, 35')
            })
        })
    })

    it('Challenging DOM - Verificar respuesta distintas', () => {
        

        cy.get('#canvas').then(($canvas) => {
            const canvas = $canvas[0]
            let previousData = canvas.toDataURL()
            cy.log('Initial canvas data URL: ' + previousData)
            console.log('Initial canvas data URL:', previousData)

            const buttons = [
                'a.button:not(.alert):not(.success)', // azul
                'a.button.alert',                     // rojo
                'a.button.success'                    // verde
            ]

            buttons.forEach((btnSelector, index) => {
                cy.get(btnSelector).click()
                cy.get('#canvas').then(($c) => {
                    const newData = $c[0].toDataURL()
                    cy.log(`Canvas after button ${index + 1} click: ${newData}`)
                    console.log(`Canvas after button ${index + 1} click:`, newData)
                    expect(newData).not.to.eq(previousData)
                    previousData = newData
                })
            })
        })
    })

})