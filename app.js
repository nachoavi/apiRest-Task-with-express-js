import express from "express";
import tasksRoutes from "./routes/taskRoutes.js";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use("/tasks", tasksRoutes);

app.listen(PORT, () => {
  console.log("Server on in http://localhost:" + PORT);
});
