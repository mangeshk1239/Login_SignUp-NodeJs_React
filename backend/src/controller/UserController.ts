import { Request, Response } from "express";
import bcrypt from "bcrypt";
import * as userService from "../service/UserService";
import * as jwtService from "../service/JwtService";

export async function createUser(req: Request, res: Response) {
    try {
        const userExists: boolean | undefined = await userService.exists(req.body.email);
        if (userExists == true) return res.status(400).send({ success: false, message: "User already exits, try again..." });

        const hash = await bcrypt.hash(req.body.password, 10);
        await userService.create(req.body, hash);

        return res.status(200).send({ success: true, message: "Registered Successfully" });
    } catch (error) {
        console.log("ERROR", error);
        return res.status(500).send({ success: false, message: "Something went wrong" });
    }
}

export async function loginUser(req: Request, res: Response) {
    try {
        const userExists: boolean | undefined = await userService.exists(req.body.email);
        if (userExists == false) return res.status(400).send({ success: false, message: "Invalid Login credentials, please try again." });

        const passwordValid = await userService.valid(req.body.email, req.body.password);
        if (passwordValid == false) return res.status(400).send({ success: false, message: "Invalid Login credentials, please try again." });

        const token: string = jwtService.create(req.body.email);
        res.cookie("token", token);

        return res.status(200).send({ success: true, message: "Login Successfully" });
    } catch (error) {
        console.log("ERROR", error);
        return res.status(500).send({ success: false, message: "Something went wrong" });
    }
}

export async function getUser(req: Request, res: Response) {
    try {

    } catch (error) {
        console.log("ERROR", error);
        return res.status(500).send({ success: false, message: "Something went wrong" });
    }
}