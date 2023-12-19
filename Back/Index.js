
const server = require('./app')

const PORT = process.env.PORT || 3000; // Puedes usar otro puerto si este está ocupado


// Middleware para parsear el cuerpo de la solicitud

// Iniciar el servidor

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
