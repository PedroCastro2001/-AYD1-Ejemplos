/*Para ejecutar todas las pruebas utilizar el comando:

  npm run test

*/
const {validarDatosUsuario} = require('../usuarios');

describe('Validar datos de usuario', () => {
  // Prueba para verificar si se lanza un error cuando no se proporciona un objeto de usuario
  test('Debería lanzar un error si no se proporciona un objeto de usuario', () => {
    // Se espera que llamar a validarDatosUsuario sin argumentos lance un error con el mensaje específico
    expect(() => validarDatosUsuario()).toThrow('Se requiere un objeto de usuario válido');
  });

  // Prueba para verificar si se lanza un error cuando el nombre de usuario no es una cadena de caracteres
  test('Debería lanzar un error si el nombre de usuario no es una cadena de caracteres', () => {
    // Se crea un objeto de usuario con un nombre inválido (número en lugar de cadena)
    const usuario = { 
        nombre: 123, 
        apellido: 'John', 
        email: 'johndoe@gmail.com', 
        contraseña: 'password123', 
        país: 'Estados Unidos', 
        fechaNacimiento: '1990-01-01'
    };
    // Se espera que llamar a validarDatosUsuario con este usuario lance un error con el mensaje específico
    expect(() => validarDatosUsuario(usuario)).toThrow('El nombre de usuario es obligatorio y debe ser una cadena de caracteres');
  });

  test('Debería lanzar un error si el apellido de usuario no es una cadena de caracteres', () => {
    const usuario = { nombre: 'John', apellido: 123, email: 'john@example.com', contraseña: 'password123', país: 'Estados Unidos', fechaNacimiento: '1990-01-01' };
    expect(() => validarDatosUsuario(usuario)).toThrow('El apellido de usuario es obligatorio y debe ser una cadena de caracteres');
  });

  test('Debería lanzar un error si el correo electrónico no es válido', () => {
    const usuario = {
      nombre: 'John',
      apellido: 'Doe',
      email: 'johnagmail.com', // Correo electrónico inválido
      contraseña: 'password123',
      país: 'Estados Unidos',
      fechaNacimiento: '1990-01-01'
    };

    expect(() => validarDatosUsuario(usuario)).toThrow('El correo electrónico es obligatorio y debe ser una dirección de correo válida');
  });


  test('Debería lanzar un error si la contraseña no tiene al menos 8 caracteres', () => {
    const usuario = { nombre: 'John', apellido: 'Doe', email: 'john@example.com', contraseña: '1234567', país: 'Estados Unidos', fechaNacimiento: '1990-01-01' };
    expect(() => validarDatosUsuario(usuario)).toThrow('La contraseña es obligatoria y debe tener al menos 8 caracteres');
  });

  test('Debería lanzar un error si el país de usuario no es una cadena de caracteres', () => {
    const usuario = { nombre: 'John', apellido: 'Doe', email: 'john@example.com', contraseña: 'password123', país: 123, fechaNacimiento: '1990-01-01' };
    expect(() => validarDatosUsuario(usuario)).toThrow('El país de usuario es obligatorio y debe ser una cadena de caracteres');
  });

  test('Debería lanzar un error si la fecha de nacimiento de usuario no es una cadena de caracteres', () => {
    const usuario = { nombre: 'John', apellido: 'Doe', email: 'john@example.com', contraseña: 'password123', país: 'Estados Unidos', fechaNacimiento: 123 };
    expect(() => validarDatosUsuario(usuario)).toThrow('La fecha de nacimiento de usuario es obligatoria y debe ser una cadena de caracteres');
  });

  test('Debería devolver true si todos los datos de usuario son válidos', () => {
    const usuario = {
      nombre: 'John',
      apellido: 'Doe',
      email: 'john@example.com',
      contraseña: 'password123',
      país: 'Estados Unidos',
      fechaNacimiento: '1990-01-01'
    };

    expect(validarDatosUsuario(usuario)).toBe(true);
  });

});
