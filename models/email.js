import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Email = sequelize.define('email', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'email',
    timestamps: false
});

export default Email;
