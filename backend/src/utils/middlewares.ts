import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2025") {
      return response.status(400).json({ error: "Incorrect or missing id" });
    }
  }

  if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  if (
    error.message === "Incorrect or missing id" ||
    error.message === "Incorrect or missing content"
  ) {
    return response.status(400).json({ error: error.message });
  }
  if (error.message === "Note not found") {
    return response.status(404).json({ error: error.message });
  }
  next();
};
