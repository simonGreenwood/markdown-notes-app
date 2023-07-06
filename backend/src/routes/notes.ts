import { Router } from "express";
const router = Router();

import { PrismaClient } from "@prisma/client";
import { parseContent, parseUUID } from "../utils/validators";
import "express-async-errors";
const prisma = new PrismaClient();

router.get("/", (req, res) => {
  const notes = prisma.note.findMany();
  res.send(notes);
});

router.post("/", (req, res) => {
  const content = parseContent(req.body.content);
  console.log(content);
  const note = prisma.note.create({
    data: {
      content,
    },
  });
  return res.send(note);
});

router.put("/:id", (req, res) => {
  const content = parseContent(req.body.content);
  const id = parseUUID(req.params.id);
  const note = prisma.note.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });
  if (!note) {
    return res.status(404).send("Note not found");
  }
  return res.send(note).status(204);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const note = prisma.note.delete({
    where: {
      id,
    },
  });
  if (!note) {
    return res.status(404).send("Note not found");
  }
  return res.send(note).status(204);
});
export default router;
