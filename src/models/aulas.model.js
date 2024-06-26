import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";
import { Unidades } from "./Unidades.models.js";
import { IntegrantesAulas } from "./integrantes_aulas.models.js";

export const aulas = sequelize.define("aulas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

crearRelacion(aulas, IntegrantesAulas, "aula_id");
crearRelacion(aulas, Unidades, "aula_id");
