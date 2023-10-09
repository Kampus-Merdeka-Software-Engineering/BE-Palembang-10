import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


  const Courses = sequelize.define('Courses', {
      course_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      course_link: {
          type: DataTypes.STRING,
          allowNull: false
      },
      course_category: {
          type: DataTypes.STRING,
          allowNull: false
      },
      course_price: {
          type: DataTypes.STRING,
          allowNull: false
      }
      },    {
      tableName: 'courses',
      timestamps: false
    })

    export default Courses