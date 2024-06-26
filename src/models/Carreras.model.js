import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Materias } from "./Materias.model.js";
import { crearRelacion } from "./modelo.model.js";
import { Estudiantes } from "./Estudiante.model.js";

export const Carreras = sequelize.define("carreras", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

Carreras.hasMany(Materias, {
  foreignKey: "carrera_id",
  sourceKey: "id",
});

Materias.belongsTo(Carreras, {
  foreignKey: "carrera_id",
  targetKey: "id",
});

crearRelacion(Carreras, Estudiantes, "carrera_id");
