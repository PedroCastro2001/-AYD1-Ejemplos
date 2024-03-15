const express = require('express');
const db = require('../helpers/db');

const app = express();
app.use(express.json())



// Rutas de la API
app.get('/usuarios', async(req,res) =>{
    const query = 'SELECT * FROM Usuario'
    try{
        const [rows] = await db.query(query)   
        res.status(200).json(rows);
    }catch(err){
        res.status(500).json({error: 'Error en la consulta'})
    }
})

app.post('/usuarios', async (req, res) => {

  const { nombre, email } = req.body;
  const query = 'INSERT INTO Usuario (nombre, email) VALUES (?, ?)';
  try{
    await db.query(query, [nombre, email]);
    res.status(201).send("Datos insertados correctamente");
}catch(err){
    res.status(500).json({ error: 'Error en la inserción de datos' });
}
  
});


module.exports = app