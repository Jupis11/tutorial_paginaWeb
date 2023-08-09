import express from "express";
import { dirname, join } from 'path';
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js"
import ejs from 'ejs'; // Importa el paquete EJS

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configura el motor de plantillas y la extensión de archivo
app.set('view engine', 'ejs'); // Establece el motor de plantillas
app.set('views', __dirname + '/views'); 
app.use(indexRoutes)
app.use(express.static((__dirname, "public")))



const port = 3000;
app.listen(port, () => console.log('Server is listening on port', port));
