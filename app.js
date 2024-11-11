// Importando Express
import express from 'express';

// Creando la instancia de express
const app = express();

// Middleware para manejar datos del formulario
app.use(express.urlencoded({ extended: true })); // Procesa los datos del formulario

// GET /add-product
app.get('/add-product', (req, res, next) => {
  // Si la petición es POST, pasa al siguiente middleware
  if (req.method === "POST") return next();

  // Sirve el formulario si la petición es GET
  console.log("📢 Sirviendo formulario...");
  res.send(`
    <form action="/add-product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add product</button>
    </form>
  `);
});

// POST /add-product
app.post('/add-product', (req, res) => {
  // Mostrar los datos del cuerpo de la solicitud (req.body)
  console.log("📢 Datos recibidos:", req.body);

  // Redirecciona a la página principal después de procesar la solicitud
  res.redirect('/');
});

// Ruta Raíz
// GET /
app.get('/', (req, res) => {
  console.log("📢 Sirviendo la ruta '/'");
  res.send(`
    <h1>Welcome to Express Js</h1>
    <p>This is my awesome app! 😎</p>
    <a href="/add-product">Go to Add Product</a>
  `);
});

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});
