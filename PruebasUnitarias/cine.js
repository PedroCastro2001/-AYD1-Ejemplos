function comprarEntradas(entradas, descuento) {
    let precioTotal = 0;
  
    // Calcular el precio total de las entradas
    for (const entrada of entradas) {
      precioTotal += entrada.precio * entrada.cantidad;
    }
  
    // Aplicar descuento si está disponible
    if (descuento) {
      precioTotal -= precioTotal * (descuento / 100);
    }
  
    return precioTotal;
  }
  
function obtenerDetallesPelicula(peliculaId) {
    // Lógica para obtener los detalles de la película específica
    // Esta función podría interactuar con una base de datos u otro sistema externo
    // para recuperar los detalles de la película
  
    // En este ejemplo, simplemente devolvemos un objeto que representa los detalles de la película
    return {
      id: peliculaId,
      titulo: 'Zona de Interés',
      duracion: '116 minutos',
      clasificacion: 'B',
      genero: ['Belico', 'Crimen'],
      director: 'Jonathan Glazer',
    };
  }
  
  module.exports = {
    comprarEntradas,
    obtenerDetallesPelicula
  }
  
  