import { Request, Response, NextFunction } from "express";
export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (
    error.message === "Incorrect or missing id" ||
    error.message === "Incorrect or missing content"
  ) {
    return response.status(400).json({ error: error.message });
  }

  console.error(error.message);
  next();
};
