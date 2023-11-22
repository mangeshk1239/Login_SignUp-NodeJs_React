import { Request, Response } from "express";
import * as userService from "../service/UserService";

export async function createUser(req: Request, res: Response) {
    try {
        // console.log("HIIII", req.body);
        // userService.exists(req.body.email)
        userService.create(req.body);
    } catch (error) {

    }
}

export  async function loginUser(req: Request, res: Response) {
    try {

    } catch (error) {

    }
}

export async function getUser(req: Request, res: Response) {
    try {

    } catch (error) {

    }
}