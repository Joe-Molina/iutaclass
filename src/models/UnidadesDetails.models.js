import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";

export const DetallesUnidades = sequelize.define("unidades_details", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  tipo_evaluacion: {
    type: DataTypes.STRING,
  },
  archivo_evaluacion: {
    type: DataTypes.STRING,
  },
});
