// Importando el enrutador de express y el gestor de rutas
import { Router } from 'express';
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

// GET /
router.get('/', (req, res) => {
  console.log("📢 Sirviendo la ruta '/'");
  res.render('shop');
});

// GET /add-product
router.get('/add-product', (req, res) => {
  console.log("📢 Sirviendo la ruta '/add-product'");
  // Enviar el archivo HTML 'add-product.html' desde la carpeta 'views'
  res.sendFile(path.resolve('views', 'add-product.html'));
});

// GET /about
router.get('/about', (req, res) => {
  console.log("📢 Sirviendo la ruta '/about'");
  // Respuesta directa con HTML en línea
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

export default router;
