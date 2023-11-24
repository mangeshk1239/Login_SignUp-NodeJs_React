import bcrypt from "bcrypt";

export async function generate(password: string) {
    return await bcrypt.hash(password, 10);
}