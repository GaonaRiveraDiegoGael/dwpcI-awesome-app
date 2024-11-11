import { Router } from 'express';  // Importamos el enrutador de express
const router = Router();  // Creamos una instancia del enrutador

// GET /add-product
router.get('/add-product', (req, res, next) => {
  // Si la petición es POST, pasa al siguiente middleware
  if (req.method === "POST") return next();

  // Si es GET, servimos el formulario
  console.log("📢 Sirviendo formulario...");
  res.send(`
    <form action="/add-product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add product</button>
    </form>
  `);
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
