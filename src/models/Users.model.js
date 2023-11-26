import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { crearRelacion } from "./modelo.model.js";
import { Estudiantes } from "./Estudiante.model.js";
import { Docentes } from "./Docentes.model.js";
import { Administradores } from "./Administradores.model.js";

export const Users = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

crearRelacion(Users, Estudiantes, "user_id");
crearRelacion(Users, Docentes, "user_id");
crearRelacion(Users, Administradores, "user_id");
