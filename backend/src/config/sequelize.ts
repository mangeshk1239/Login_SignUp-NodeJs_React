import { Sequelize } from "sequelize";
import { IConnect, IOptions } from "./interface";

const config: IConnect = {
    dbName: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
}

const options: IOptions = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
    logging: false
}

const sequelize = new Sequelize(
    config.dbName as string,
    config.username as string,
    config.password as string,
    {
        host: options.host,
        port: options.port,
        dialect: options.dialect,
        logging: options.logging
    }
);

sequelize.authenticate().then(() => console.log("DB CONNECTED"));
sequelize.sync();

export default sequelize;