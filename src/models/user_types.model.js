import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Users } from "./Users.model.js";

export const User_types = sequelize.define("user_types", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

User_types.hasMany(Users, {
  foreignKey: "userType_id",
  sourceKey: "id",
});

Users.belongsTo(User_types, {
  foreignKey: "userType_id",
  targetKey: "id",
});
