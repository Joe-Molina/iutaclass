import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Evaluacion_unidad } from "./evaluacion_unidad.model.js";

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

Tipos_evaluacion.hasMany(Evaluacion_unidad, {
  foreignKey: "Tipos_evaluacion_id",
  sourceKey: "id",
});

Evaluacion_unidad.belongsTo(Tipos_evaluacion, {
  foreignKey: "Tipos_evaluacion_id",
  targetKey: "id",
});
