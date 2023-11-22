import { Dialect } from "sequelize";

export interface IConnect {
    dbName: string | undefined,
    username: string | undefined,
    password: string | undefined
}

export interface IOptions {
    host: string | undefined,
    port: number | undefined,
    dialect: Dialect,
    logging: boolean
}