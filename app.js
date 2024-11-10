// Importando el modulo http
import http from 'http';
// Importando Express
import express from 'express';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Registrando el primer middleware
app.use((req, res, next) => {
  console.log("📢 Middleware #1");
  next(); // Llama a next() para que la solicitud continúe al siguiente middleware o ruta
});

// Registrando el segundo middleware
app.use((req, res) => {
  console.log("📢 Middleware #2");
  // Se contesta al server
  res.send(`
    <h1>Welcome to Express Js</h1>
    <p>This is my awesome app! 😎</p>
  `);
});

// Asignando el middleware de express
// al servidor http
const server = http.createServer(app);

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancando el servidor
server.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});
