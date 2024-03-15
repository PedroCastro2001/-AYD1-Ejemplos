// Importamos las librerías necesarias
const request = require('supertest');
const app = require('../src/app');
const db = require('../helpers/db');

// Creamos un stub para reemplazar las consultas a la base de datos
jest.mock('../helpers/db');

describe('Pruebas de integración para la API RESTful', () => {
  // Prueba para GET /usuarios
  test('Debería devolver la lista de usuarios', async () => {

    // Mockear la consulta a la base de datos para la ruta GET /usuarios
    db.query.mockResolvedValueOnce([[{ id: 1, nombre: 'Pedro Castro', email: 'pedrocastro@gmail.com' }]]);

    // Llamamos a la ruta que queremos probar
    const response = await request(app).get('/usuarios');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].id).toBe(1);
    expect(response.body[0].nombre).toBe('Pedro Castro');
    expect(response.body[0].email).toBe('pedrocastro@gmail.com');

    // Validamos que la función query del mock db se haya llamado con la consulta correcta
    expect(db.query).toHaveBeenCalledWith('SELECT * FROM Usuario');
  });

  // Prueba para errores en GET /usuarios
  test('Debería manejar errores en la consulta a la base de datos', async () => {
    // Mockear la consulta a la base de datos para la ruta GET /usuarios
    db.query.mockRejectedValueOnce(new Error('Error en la consulta'));
    
    // Llamamos a la ruta que queremos probar
    const response = await request(app).get('/usuarios');
    
    // Validamos la respuesta recibida
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Error en la consulta' });
  });

  test('Debería crear un nuevo usuario', async () => {
    db.query.mockResolvedValueOnce([]);
    const response = await request(app)
      .post('/usuarios')
      .send({ nombre: 'Antonio Calderón', email: 'antoniocalderon@gmail.com' });

    expect(response.status).toBe(201);
    expect(response.text).toBe('Datos insertados correctamente');
    // Validamos que la función query del mock db se haya llamado con el script de inserción correcto
    expect(db.query).toHaveBeenCalledWith(
      'INSERT INTO Usuario (nombre, email) VALUES (?, ?)',
      ['Antonio Calderón', 'antoniocalderon@gmail.com']
    );
  });

  
  // Prueba para errores en POST /usuarios
  test('Debería manejar errores en la inserción de datos', async () => {
    // Simulamos un error durante la inserción de un nuevo usuario
    db.query.mockRejectedValueOnce(new Error('Error en la inserción de datos'));
    
    // Llamamos a la ruta que queremos probar
    const response = await request(app)
      .post('/usuarios')
      .send({ nombre: 'Nuevo usuario', email: 'newuser@example.com' });
    
    // Validamos la respuesta recibida
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Error en la inserción de datos' });
  });
});
