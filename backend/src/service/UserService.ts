import * as userRepository from "../repository/UserRepository";

export async function exists(userEmail: string) {
    userRepository.exists(userEmail);
}

// CHANGE ANYYYYYYYYYYYY
export async function create(userData: any) {
    userRepository.create(userData);
}