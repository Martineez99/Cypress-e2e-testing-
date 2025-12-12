describe('Prueba de Login', () => {
  it('Debería permitir el login con credenciales válidas', () => {
    cy.visit('/'); // Cambia por la URL de tu login
    
    // Introduce el usuario y la contraseña
    cy.get('input[id="user-name"]').type('standard_user'); // Cambia el selector
    cy.get('input[id="password"]').type('secret_sauce'); // Cambia el selector
    
    // Haz clic en el botón de login
    cy.get('input[id="login-button"]').click();
    
    // Verifica que el login fue exitoso
    cy.contains('Swag Labs').should('be.visible'); // Cambia 'Bienvenido' por un mensaje o elemento visible después del login
  });
});
