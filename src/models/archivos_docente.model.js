import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Archivos_docente = sequelize.define("Archivos_docente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  archivo: {
    type: DataTypes.STRING,
  },
});
