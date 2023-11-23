import * as userRepository from "../repository/UserRepository";

export async function exists(userEmail: string) {
    return userRepository.exists(userEmail);
}

// CHANGE ANYYYYYYYYYYYY
export async function create(userData: any, hash: string) {
    return userRepository.create(userData, hash);
}

export async function valid(userEmail: string, userPassword: string) {
    return await userRepository.valid(userEmail, userPassword);
}