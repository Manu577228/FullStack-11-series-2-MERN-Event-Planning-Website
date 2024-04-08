import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./Router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./.env" });

app.use(
  cors({
    origin: [process.env.URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;
