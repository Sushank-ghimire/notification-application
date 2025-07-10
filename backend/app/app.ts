import express, { NextFunction, Request, Response } from "express";
import http from "node:http";
import { configDotenv } from "dotenv";
import { sendError } from "./utils";

configDotenv();

const app = express();

const server = http.createServer(app);

app.use(express.json()); // For Json parsing

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running!" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  sendError(res, "Internal Server Error", 500, err);
});

export default server;
