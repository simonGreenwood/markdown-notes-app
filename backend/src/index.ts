import express from "express";
import notesRouter from "./routes/notes";
import { PORT } from "./utils/config";
import "express-async-errors";
import { errorHandler } from "./utils/middlewares";
const app = express();
app.use(express.json());
app.use("/api/notes", notesRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
