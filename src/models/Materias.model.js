import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { aulas } from "./aulas.model.js";

export const Materias = sequelize.define("materias", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  seccion: {
    type: DataTypes.STRING,
  },
});

Materias.hasMany(aulas, {
  foreignKey: "materia_id",
  sourceKey: "id",
});

aulas.belongsTo(Materias, {
  foreignKey: "materia_id",
  targetKey: "id",
});
