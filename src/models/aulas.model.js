import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";
import { Alumnos } from "./alumnos.model.js";
import { Archivos_docente } from "./archivos_docente.model.js";
import { Evaluacion_unidad } from "./evaluacion_unidad.model.js";

export const Aulas = sequelize.define("aulas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

crearRelacion(Aulas, Alumnos, "aula_id");
crearRelacion(Aulas, Evaluacion_unidad, "aula_id");
crearRelacion(Aulas, Archivos_docente, "aula_id");
