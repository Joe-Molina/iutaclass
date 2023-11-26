import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Calificaciones = sequelize.define("calificaciones", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  puntaje: {
    type: DataTypes.INTEGER,
  },
});
