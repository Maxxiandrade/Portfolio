
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const postEmail = require('./controllers/postEmail')
const cors = require('cors');

// Middleware para parsear el cuerpo de la solicitud
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para recibir los datos del formulario
app.post('/send', postEmail)

// Iniciar el servidor
const PORT = 3000; // Puedes usar otro puerto si este está ocupado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
