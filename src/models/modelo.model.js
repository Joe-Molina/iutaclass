import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

// export const name = sequelize.define("name", {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey:true,
//         autoIncrement: true,
//     }
// })

export const crearRelacion = (PK, FK, FKname) => {
  PK.hasMany(FK, {
    foreignKey: FKname,
    sourceKey: "id",
    onDelete: "CASCADE",
  });

  FK.belongsTo(PK, {
    foreignKey: FKname,
    targetKey: "id",
    onDelete: "CASCADE",
  });
};
