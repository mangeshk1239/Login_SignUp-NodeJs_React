import * as jwtRepository from "../repository/JwtRepository";

export function create(userEmail: string): string {
    return jwtRepository.create(userEmail);
}

export function verify(token: string) {
    return jwtRepository.verify(token);
}