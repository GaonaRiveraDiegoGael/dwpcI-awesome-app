// Importando el modulo http
import http from 'http';
// Importando Express
import express from 'express';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Ruta about
// GET /about
app.use('/about',(req, res)=>{
  console.log("📢 Sirviendo la ruta '/about'");
  // Se contesta al server
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

// Ruta Raíz
// GET /
app.use((req, res)=>{
  console.log("📢 Sirviendo la ruta '/'");
  // Se contesta al server
  res.send(`
    <h1>Welcome to Express Js</h1>
    <p>This is my awesome app! 😎</p>
  `);
});

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});