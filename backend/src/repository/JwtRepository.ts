import jwt from "jsonwebtoken";

export function create(userEmail: string): string {
    return jwt.sign({ user_email: userEmail }, process.env.SECRET_KEY as string);
}

export async function verify() {
}