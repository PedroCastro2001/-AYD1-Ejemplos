/*Para ejecutar todas las pruebas utilizar el comando:

  npm run test

*/
const { getFruit } = require('../frutas');
const axios = require('axios'); // Importa Axios normalmente

// Burlamos (mock) el módulo de Axios para evitar realizar solicitudes reales
//Esto significa que cualquier llamada a axios.get será interceptada y reemplazada por una función simulada.
jest.mock('axios'); 

test('should return fruit details', async () => {
    // Configuramos la implementación de la función axios.get.mockResolvedValue()
    // Esta configuración simula una respuesta exitosa de la solicitud GET a una API
    axios.get.mockResolvedValue({
        data: { nutritions: { protein: 0.5 } }
    });

    // Llamamos a la función getFruit con un argumento 'apple'
    // Esto simulará una solicitud HTTP ficticia a una API y devolverá el resultado
    const result = await getFruit('apple'); 

    // Verificamos que los datos devueltos por la función getFruit sean los esperados
    // En este caso, estamos verificando que la propiedad 'protein' en los detalles de la fruta sea igual a 0.5
    expect(result.nutritions.protein).toBe(0.5); 
});


// Limpiar el mock de axios después de cada prueba
afterEach(() => {
    axios.get.mockClear();
});