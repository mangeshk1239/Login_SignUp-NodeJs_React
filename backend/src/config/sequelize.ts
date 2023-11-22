import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USERNAME as string,
    process.env.DB_DB_PASSWORD as string,
    {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: "mysql",
        logging: false
    });

sequelize.authenticate().then(() => console.log("DB CONNECTED"));
sequelize.sync();

export default sequelize;