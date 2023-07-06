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
  } else if (error.message === "Note not found") {
    return response.status(404).json({ error: error.message });
  }  else if (error.message.startsWith("Invalid `prisma.note.update` invocation")) {

  console.log(error.name, error.message);
  next();
};
