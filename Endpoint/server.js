const express = require('express');
const app = express();
const port = 3000;

// Endpoint Basico
app.get('/', (req, res) => {
  res.send('¡Hola! Este es mi primer servicio en Node.js 🚀');
});

// Endpoint Basico con saludo
app.get('/saludo', (req, res) => {
  res.json({ mensaje: "Hola desde el endpoint /saludo" });
});

// 404 - Recurso no encontrado
app.get('/error404',(req, res) => {
  res.status(404).json({error: "Recurso no encontrado"});
});

// 500 - Error Interno del Servidor
app.get('/error500',(req, res) => {
  res.status(500).json({error: "Error Interno del Servidor"});
});

// 400 - Peticion Incorrecta
app.get('/error400',(req, res) => {
  res.status(400).json({error: "Peticion Incorrecta"});
});

// muestra de uso de nuestro servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
