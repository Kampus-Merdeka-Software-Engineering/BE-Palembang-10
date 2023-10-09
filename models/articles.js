import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


  const Articles = sequelize.define('Articles', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
          type: DataTypes.STRING,
          allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
    }
      
      },    {
      tableName: 'artikel',
      timestamps: false
    })

    export default Articles