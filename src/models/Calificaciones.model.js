import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Calificaciones = sequelize.define("Calificaciones", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Calificacion: {
    type: DataTypes.STRING,
  },
});
