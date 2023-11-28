import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import bodyParser from "body-parser";
import mysql from "mysql2";
import myConnection from "express-myconnection";
import session from "express-session";
import {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
} from "./config.js";
import login from "./routes/login.routes.js";
import register from "./routes/register.routes.js";
import index from "./routes/index.routes.js";
import materias from "./routes/materias.routes.js";
import crearAulas from "./routes/crear_aula.routes.js";
import asignarAulas from "./routes/asignar_aula.routes.js";
import crearUnidad from "./routes/crear_unidad.routes.js";
import subirEvaluaciones from "./routes/subir_evaluacion_estudiante.routes.js";
import calificar from "./routes/calificar.routes.js";
/*
import index from "./routes/index.routes.js";
import asignarAulas from "./routes/asignar_aula.routes.js";
import crearUnidad from "./routes/crear_unidad.routes.js";
import subirArchivo from "./routes/subir_archivos.routes.js";
*/
import methodOverride from "method-override";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(methodOverride("_method"));

//routes
app.use(register);
app.use(login);
app.use(materias);
app.use(calificar);
app.use(asignarAulas);
app.use(crearAulas);
app.use(crearUnidad);
app.use(subirEvaluaciones);
app.use(index);

//route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
