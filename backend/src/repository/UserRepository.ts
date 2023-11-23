import User from "../model/User";
import { QueryTypes } from "sequelize";
import bcrypt from "bcrypt";

export async function exists(userEmail: string) {
    const sql: string =
    `
        SELECT id 
        FROM users
        WHERE email = ?
    `;
    try {
        const response = await User.sequelize?.query(sql, {
            replacements: [userEmail],
            type: QueryTypes.SELECT
        });
        return response?.length != 0;
    } catch (error) {
        console.log("ERROR", error);
    }
}

// CHANGE ANYYYYYYYYYYYY
export async function create(userData: any, hash: string) {
    const sql: string =
    `
        INSERT INTO users
        (first_name, last_name, email, password)
        VALUES (?, ?, ?, ?)
    `;
    try {
        await User.sequelize?.query(sql, {
            replacements: [userData.firstName, userData.lastName, userData.email, hash],
            type: QueryTypes.INSERT
        });
    } catch (error) {
        console.log("ERROR", error);
    }
}

export async function valid(userEmail: string, userPassword: string) {
    const sql: string = 
    `
        SELECT password
        FROM users
        WHERE email = ?        
    `;

    try {
        // CHANGEEEEEEEEEE ANY
        const response: any = await User.sequelize?.query(sql, {
            replacements: [userEmail],
            type: QueryTypes.SELECT
        });
        return await bcrypt.compare(userPassword, response[0]?.password);
    } catch (error) {
        console.log("ERROR", error);
    }
}