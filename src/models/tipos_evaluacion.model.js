import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Tipos_evaluacion = sequelize.define("Tipos_evaluacion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});
