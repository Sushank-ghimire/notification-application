import express, { NextFunction, Request, Response } from "express";
import http from "node:http";
import { configDotenv } from "dotenv";
import { sendError } from "./utils";
import notificationRoutes from "./routes/notification.route";

configDotenv();

const app = express();

const server = http.createServer(app);

app.use(express.json()); // For Json parsing

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running!" });
});

// Error handling from the asyncHandler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  sendError(res, "Internal Server Error", 500, err);
});

// User notification routes
app.use("/api/v1/users/notification", notificationRoutes);

export default server;
