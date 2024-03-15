describe('Agregar Película', () =>{

  it('Debería agregar una película', () =>{

    // Visita la página de inicio
    cy.visit('inicio')

    // Introduce el nombre de la película en el campo de entrada
    cy.get('input[name="nombre"]').type('Animales Nocturnos', {delay: 100});
    
    // Selecciona la categoría de la película
    cy.get('select[name="categoria"').select('4'); 
    
    // Espera un segundo antes de continuar
    cy.wait(1000)
    
    // Selecciona el género de la película
    cy.get('.genero-select').eq(0).select('3');
    
    // Introduce la hora de la película en el campo de entrada
    cy.get('input[name="Hora"').type('19:00');
    
    // Selecciona las ubicaciones de la película
    cy.get('.ubicacion-select').eq(0).select('3'); 
    cy.get('.ubicacion-select').eq(1).select('7'); 
    cy.get('.ubicacion-select').eq(2).select('9');
    
    // Adjunta el archivo de imagen de la película
    const filePath = 'animalesnocturnos.jpg'
    cy.get('#imagen').attachFile(filePath);
  
    // Selecciona el tipo de película
    cy.get('.tipo-select').select('1');
    
    // Introduce la duración de la película en el campo de entrada
    cy.get('input[name="duracion"]').type('120', { delay: 100 }); 
    
    // Introduce la descripción de la película en el área de texto
    cy.get('textarea[name="descripcion"]').type('Película de prueba e2e', { delay: 100 });
    
    // Haz clic en el botón de enviar para agregar la película
    cy.get('button[type="submit"]').click();
  
  })
})
