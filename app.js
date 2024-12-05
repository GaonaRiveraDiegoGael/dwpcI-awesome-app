// Importando Express
import express from 'express';
import httpStatus from 'http-status';

// Template Engine
import { engine } from 'express-handlebars';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';

// Importando el directorio raiz
import { ROOT_DIR } from './helpers/paths.js'

// Se importa path
import path from 'path';

// Creando la instancia de express
// que básicamente es un middleware
const app = express();

// Se crea instancia del template engine
const hbsTemplateEngine = engine({
  // Extensión de los archivos de plantillas
  extname: '.hbs',
  // Nombre del diseño por defecto
  defaultLayout: 'main',
});

// TE1. Se registra en la instancia de express
app.engine('hbs', hbsTemplateEngine);

// TE2.Se selecciona el Template Engine
app.set('view engine', 'hbs');

// TE3. Se establece la ruta de las vistas
app.set('views', path.resolve('views'));

// Registrando el primer middleware
app.use((req, res, next) => {
  console.log("📢 Middleware #1");
  next(); // Asegúrate de llamar a `next()` para continuar con los demás middlewares.
});
// Registrando el segundo middleware
app.use((req, res, next)=>{
  console.log("📢 Middleware #2");
  // Se contesta al server
  res.send(`
    <h1>Welcome to Express Js</h1>
    <p>This is my awesome app! 😎</p>
  `);
  // Se invoca al siguiente middlware
  next();
});

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se registra el middleware para el servidor
// de archivos estáticos
app.use(express.static(path.join(ROOT_DIR, 'public')));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

// Registrando el middleware para el error
// 404
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND)
    .sendFile(path.resolve('views', '404.html'));
});

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});
