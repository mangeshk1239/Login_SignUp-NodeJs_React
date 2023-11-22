import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./connectDB";

dotenv.config();
connectDB();

const app: Express = express();

app.get("/", async (req: Request, res: Response) => {
    res.send("asd");
});

app.listen(process.env.PORT);