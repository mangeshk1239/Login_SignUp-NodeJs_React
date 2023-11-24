import jwt from "jsonwebtoken";

export function create(userEmail: string): string {
    return jwt.sign(userEmail, process.env.SECRET_KEY as string);
}

export async function verify(token: string) {
    try {
        return jwt.verify(token, process.env.SECRET_KEY as string);
    } catch (error) {
        return false;
    }
}