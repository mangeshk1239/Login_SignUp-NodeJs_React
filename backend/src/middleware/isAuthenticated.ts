import { Request, Response, NextFunction } from "express";
import * as jwtService from "../service/JwtService";

// CHANGE ANYYYYYYYYYY
export async function isAuthenticated(req: any, res: Response, next: NextFunction) {
    const cookies = req.headers.cookie;
    try {
        if (cookies?.includes("token") == false) {
            return res.status(401).send({ success: false, message: "Unauthorized" });
        }

        const token = getToken(cookies?.split('; '));
        if (token.length <= 1) {
            return res.status(401).send({ success: false, message: "Unauthorized" });
        }

        const decoded = await jwtService.verify(token);
        if (decoded == false) {
            return res.status(401).send({ success: false, message: "Unauthorized" });
        }

        req.userEmail = decoded;
        return next();
    } catch (error) {
        console.log("ERROR", error);
        return res.status(401).send({ success: false, message: "Unauthorized" });
    }
}

function getToken(cookies: any) {
    let token = "";
    for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].includes("token=") == true) {
            token = cookies[i].split("token=")[1];
            break;
        }
    }
    return token;
}