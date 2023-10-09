import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


  const Videos = sequelize.define('Videos', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
          type: DataTypes.STRING,
          allowNull: false
      }
      
      },    {
      tableName: 'video',
      timestamps: false
    })

    export default Videos