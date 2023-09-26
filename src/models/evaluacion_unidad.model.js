import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";
import { Calificaciones } from "./Calificaciones.model.js";
import { Archivos_docente } from "./archivos_docente.model.js";
import { Archivos_alumno } from "./archivos_alumno.model.js";

export const Evaluacion_unidad = sequelize.define("Evaluacion_unidad", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
  },
  contenido: {
    type: DataTypes.STRING,
  },
});

crearRelacion(Evaluacion_unidad, Calificaciones, "evaluacion_id");
crearRelacion(Evaluacion_unidad, Archivos_docente, "evaluacion_id");
crearRelacion(Evaluacion_unidad, Archivos_alumno, "evaluacion_id");
