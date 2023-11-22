import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import "./config/sequelize";

const app: Express = express();

app.get("/api/okay/okay", async (req: Request, res: Response) => {
    res.send("hello");
});

app.listen(process.env.PORT);