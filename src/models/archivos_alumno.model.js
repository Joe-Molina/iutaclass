import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Archivos_alumno = sequelize.define("Archivos_alumno", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  archivo: {
    type: DataTypes.STRING,
  },
});
