import User from "../model/User";
import { QueryTypes } from "sequelize";

export async function exists(userEmail: string) {
    const sql: string =
        `
        SELECT id 
        FROM users
        WHERE email = ?
    `;
    try {
        await User.sequelize?.query(sql, {
            replacements: [userEmail],
            type: QueryTypes.SELECT
        });
    } catch (error) {
        console.log("ERROR", error);
    }
}

// CHANGE ANYYYYYYYYYYYY
export async function create(userData: any) {
    const sql: string =
        `
        INSERT INTO users
        (first_name, last_name, email, password)
        VALUES (?, ?, ?, ?)
    `;
    try {
        await User.sequelize?.query(sql, {
            replacements: [userData.firstName, userData.lastName, userData.email, userData.password],
            type: QueryTypes.INSERT
        });
    } catch (error) {
        console.log("ERROR", error);
    }
}