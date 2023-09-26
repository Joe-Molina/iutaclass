import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";
import { Alumnos } from "./alumnos.model.js";
import { Archivos_docente } from "./archivos_docente.model.js";
import { Evaluacion_unidad } from "./evaluacion_unidad.model.js";

export const aulas = sequelize.define("aulas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

crearRelacion(aulas, Alumnos, "aula_id");
crearRelacion(aulas, Evaluacion_unidad, "aula_id");
crearRelacion(aulas, Archivos_docente, "aula_id");
