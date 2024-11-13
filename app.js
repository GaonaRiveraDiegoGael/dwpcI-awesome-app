// Importando Express
import express from 'express';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';

// Creando la instancia de express
const app = express();

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);

// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

// Registrando middleware para el error 404 sin http-status-codes
app.use((req, res) => {
  res.status(404).send(`
    <h1 
      style="color: crimson; text-align: center; font-size: 400%; margin: 3em 0 0 0">
    🤷 404 RESOURCE NOT FOUND 🤷
    </h1>
  `);
});

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});
