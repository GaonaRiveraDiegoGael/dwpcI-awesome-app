// Importando el enrutador de express
import { Router } from 'express';
// Importando el gestor de rutas
import path from 'path';
import { ROOT_DIR } from '../helpers/paths.js';

// Creando una instancia del enrutador de express
const router = Router();

// GET /add-product
router.get('/add-product', (req, res, next) => {
  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  res.sendFile(path.join(ROOT_DIR, 'views', 'add-product.html'));
});

// POST /add-product
router.post('/add-product', (req, res) => {
  // Realizamos la extracción de los parámetros dentro de la petición
  console.log("📢 Procesando formulario...");
  console.log(req.body);  // Mostramos los datos del formulario en la consola

  // Redirigimos a la ruta raíz después de procesar el formulario
  res.redirect('/');
});

// Exportando el enrutador para que pueda ser usado en otro archivo
export default router;
