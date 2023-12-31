import dotenv from "dotenv";
dotenv.config();
import "./config/sequelize";
import express, { Express } from "express";
import * as userController from "./controller/UserController";
import * as middleWare from "./middleware/isAuthenticated";

const app: Express = express();

// GET
app.get("/api/user/get", middleWare.isAuthenticated, userController.getUser);

app.use(express.json());

// POST
app.post("/api/user/create", userController.createUser);
app.post("/api/user/login", userController.loginUser);


app.listen(process.env.PORT);