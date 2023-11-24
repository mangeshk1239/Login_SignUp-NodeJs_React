import * as hashingRepository from "../repository/HashingRepository";

export async function generate(password: string) {
    return await hashingRepository.generate(password);
}