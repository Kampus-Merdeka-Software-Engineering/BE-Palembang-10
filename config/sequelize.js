import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

const sequelize = new Sequelize ("mysql://root:NlzGH6KDV7kY7kZKwFYd@containers-us-west-182.railway.app:5672/railway");

export default sequelize;