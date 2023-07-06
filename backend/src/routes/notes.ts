import { Router } from "express";
const router = Router();

import { PrismaClient } from "@prisma/client";
import { parseContent, parseUUID } from "../utils/validators";
import "express-async-errors";
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const notes = await prisma.note.findMany();
  res.json(notes);
});

router.get("/:id", async (req, res) => {
  const id = parseUUID(req.params.id);
  const note = await prisma.note.findUnique({
    where: {
      id,
    },
  });
  if (!note) {
    throw new Error("Note not found");
  }
  return res.json(note);
});
router.post("/", async (req, res) => {
  const content = parseContent(req.body.content);
  const note = await prisma.note.create({
    data: {
      content,
    },
  });
  return res.json(note);
});

router.put("/:id", async (req, res) => {
  const content = parseContent(req.body.content);
  const id = parseUUID(req.params.id);
  const note = await prisma.note.update({
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

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const note = await prisma.note.delete({
    where: {
      id,
    },
  });
  if (!note) {
    return res.status(404).send("Note not found");
  }
  return res.status(204).send(note);
});
export default router;
