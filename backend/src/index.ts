import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

console.log("PRO", process.env.PORT);

const app: Express = express();

app.get("/", async (req: Request, res: Response) => {
    res.send("asd");
});

app.listen(process.env.PORT);