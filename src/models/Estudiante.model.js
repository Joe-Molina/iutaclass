import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";
import { IntegrantesAulas } from "./integrantes_aulas.models.js";

export const Estudiantes = sequelize.define("estudiantes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
});

crearRelacion(Estudiantes, IntegrantesAulas, "estudiante_id");
