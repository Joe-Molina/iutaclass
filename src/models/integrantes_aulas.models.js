import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";
import { Evaluacion_estudiante } from "./Evaluacion_estudiante.model.js";

export const IntegrantesAulas = sequelize.define("integrantes_aulas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

crearRelacion(IntegrantesAulas, Evaluacion_estudiante, "integrante_aula_id");
