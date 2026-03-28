import express from "express";
import { taskRouter } from "./routes/tasksRoutes.js";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log("Server on in http://localhost:" + PORT);
});
