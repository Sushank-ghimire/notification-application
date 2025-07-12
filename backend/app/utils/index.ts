import { Request, Response, NextFunction } from "express";
import { AsyncFunction } from "../types";

const asyncHandler = (fn: AsyncFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

const sendSuccess = (
  res: Response,
  data: any,
  message = "Success",
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const sendError = (
  res: Response,
  message = "Something went wrong",
  statusCode = 500,
  error: any = null
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error:
      process.env.NODE_ENV as string === "development" ? error : "Internal server error",
  });
};

export { asyncHandler, sendSuccess, sendError };
