const express = require('express');
const app = express();
const port = 3000;

// Endpoint raíz
app.get('/', (req, res) => {
  res.send('¡Hola! Este es mi primer servicio en Node.js 🚀');
});

// Endpoint adicional
app.get('/saludo', (req, res) => {
  res.json({ mensaje: "Hola desde el endpoint /saludo" });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
