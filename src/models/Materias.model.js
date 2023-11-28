import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { aulas } from "./aulas.model.js";
import { crearRelacion } from "./modelo.model.js";

export const Materias = sequelize.define("materias", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

crearRelacion(Materias, aulas, "materia_id");
