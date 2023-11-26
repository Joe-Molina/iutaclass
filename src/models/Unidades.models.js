import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";
import { DetallesUnidades } from "./UnidadesDetails.models.js";
import { Evaluacion_estudiante } from "./Evaluacion_estudiante.model.js";

export const Unidades = sequelize.define("unidades", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

crearRelacion(Unidades, DetallesUnidades, "unidad_id");
crearRelacion(Unidades, Evaluacion_estudiante, "unidad_id");
