import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Aulas } from "./aulas.model.js";
import { Alumnos } from "./alumnos.model.js";
import { crearRelacion } from "./modelo.model.js";

export const Users = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

crearRelacion(Users, Aulas, "user_id");
crearRelacion(Users, Alumnos, "user_id");
