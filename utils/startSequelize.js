import { Sequelize }from "sequelize";

export const startSequelize = async (sequelize) =>  {
    try{
        await sequelize.authenticate();
             console.log('Connection has been established successfully.'); 
        } catch (e) {
            console.error(error);
        }
}