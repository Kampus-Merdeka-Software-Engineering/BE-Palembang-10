import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const Email = sequelize.define("Email", {
    email: DataTypes.STRING,

  }, {
    tableName: 'email',
    timestamps: false
  })

  export default Email