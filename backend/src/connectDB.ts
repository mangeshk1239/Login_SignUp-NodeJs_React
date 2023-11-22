import mysql from "mysql2";

export default function connectDB() {
    try {
        mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log("DB CONNECTED");
    } catch (error) {
        console.log("ERROR", error);
    }
}

