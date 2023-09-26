import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";
import { Calificaciones } from "./Calificaciones.model.js";
import { Archivos_alumno } from "./archivos_alumno.model.js";

export const Alumnos = sequelize.define("alumnos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

crearRelacion(Alumnos, Calificaciones, "alumno_id");
crearRelacion(Alumnos, Archivos_alumno, "alumno_id");
