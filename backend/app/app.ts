import express, { Request, Response } from "express";
import http from "node:http";

const app = express();

const server = http.createServer(app);

app.use(express.json()); // For Json parsing

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running!" });
});

export default server;
