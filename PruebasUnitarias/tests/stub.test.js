/*Para ejecutar todas las pruebas utilizar el comando:

  npm run test

*/
const { getFruit } = require('../frutas');
const axios = require('axios');

// Definición de un stub de Axios para simular llamadas a la función get
//El propósito de jest.fn() es crear una nueva función que actúa como un stub,
//es decir, una función simulada que puede ser controlada durante la prueba.
const axiosStub = jest.fn();

// Definición del objeto de respuesta simulada para la solicitud HTTP
const axiosResponse = { data: { nutritions: { protein: 0.5 } } };

// Configuración del stub para la función get de Axios para que devuelva la respuesta simulada
axios.get = axiosStub.mockResolvedValue(axiosResponse);

test('debería retornar los detalles de la fruta', async () => {
        // Llamamos a la función getFruit con el argumento 'apple'
    const result = await getFruit('apple'); // Llamamos a la función que utiliza Axios

    // Verificamos que la función get de Axios haya sido llamada con la URL correcta
    expect(axiosStub).toHaveBeenCalledWith('https://www.fruityvice.com/api/fruit/apple'); 
    
    // Verificamos que los datos devueltos por la función getFruit sean los esperados
    expect(result.nutritions.protein).toBe(0.5); // Verificamos que los datos sean los esperados
});

// Limpiar el stub de axios después de cada prueba
afterEach(() => {
    axios.get.mockClear();
});
