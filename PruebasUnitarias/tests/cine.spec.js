/*Para ejecutar todas las pruebas utilizar el comando:

  npm run test

*/
const {comprarEntradas, obtenerDetallesPelicula} = require('../cine');

describe('Comprar Entradas', () => {
  test('debería calcular el precio total sin descuento correctamente', () => {
    const entradas = [
      { precio: 10, cantidad: 2 },
      { precio: 15, cantidad: 3 },
    ];

    const precioTotal = comprarEntradas(entradas);

    expect(precioTotal).toBe(10 * 2 + 15 * 3);
  });

  test('debería aplicar el descuento correctamente', () => {
    const entradas = [
      { precio: 10, cantidad: 2 },
      { precio: 15, cantidad: 3 },
    ];

    const descuento = 10; // 10% de descuento

    const precioTotal = comprarEntradas(entradas, descuento);

    const precioSinDescuento = 10 * 2 + 15 * 3;
    const precioConDescuento = precioSinDescuento - (precioSinDescuento * (descuento / 100));

    expect(precioTotal).toBe(precioConDescuento);
  });

});

describe('Obtener Detalles de Película', () => {
  test('debería obtener los detalles de la película correctamente', () => {
    const peliculaId = 1;

    const detallesPelicula = obtenerDetallesPelicula(peliculaId);

    expect(detallesPelicula.id).toBe(peliculaId);
    expect(detallesPelicula.titulo).toBe('Zona de Interés');
    expect(detallesPelicula.duracion).toBe('116 minutos');
    expect(detallesPelicula.clasificacion).toBe('B');
    expect(detallesPelicula.genero).toEqual(['Belico', 'Crimen']);
    expect(detallesPelicula.director).toBe('Jonathan Glazer');
  });
});
