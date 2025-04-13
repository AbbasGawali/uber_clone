import dotenv from "dotenv"
dotenv.config();

import express from "express"
import cors from "cors"
import "./config/connection.js"
import userRoutes from "./routes/user.routes.js"
import captainRoutes from "./routes/captain.routes.js"
import cookieParser from "cookie-parser";
export const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/captain", captainRoutes);


app.get((req, res) => {
    res.send("Hello from Uber clone backend");
})


