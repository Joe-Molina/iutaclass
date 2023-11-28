import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";
import { Calificaciones } from "./Calificaciones.model.js";

export const Evaluacion_estudiante = sequelize.define("evaluacion_estudiante", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  archivo_evaluacion: {
    type: DataTypes.STRING,
  },
});

crearRelacion(
  Evaluacion_estudiante,
  Calificaciones,
  "evaluacion_estudiante_id"
);
