import { Request, Response } from "express";
import bcrypt from "bcrypt";
import * as userService from "../service/UserService";

export async function createUser(req: Request, res: Response) {
    try {

        const userExists: boolean | undefined = await userService.exists(req.body.email);
        if (userExists == true) return res.status(400).send({ success: false, message: "User already exits, try again..." });

        const hash = await bcrypt.hash(req.body.password, 10);
        console.log("hash", hash);

        await userService.create(req.body, hash);
    } catch (error) {

    }
}

export async function loginUser(req: Request, res: Response) {
    try {

    } catch (error) {

    }
}

export async function getUser(req: Request, res: Response) {
    try {

    } catch (error) {

    }
}