const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const message = process.env.MESSAGE || '¡Hola desde el Servidor en Node.js AYD1!';
  res.send(message);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
