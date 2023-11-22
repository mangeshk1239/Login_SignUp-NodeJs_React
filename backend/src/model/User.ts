import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

class User extends Model {
    declare id: number;
    declare first_name: string;
    declare last_name: string;
    declare email: string;
    declare password: string;
}

User.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    },
    {
        sequelize,
        timestamps: false,
        tableName: "users",
    }
)

export default User;