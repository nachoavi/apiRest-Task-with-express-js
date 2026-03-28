import { Router } from "express";
import { tasksControllers } from "../controllers/tasksCotrollers.js";

export const productRouter = Router();

productRouter.get("/", tasksControllers.getAllTask);
productRouter.get("/:id", tasksControllers.getTaskById);
productRouter.post("/", tasksControllers.createTask);
productRouter.put("/:id", tasksControllers.updateTask);
productRouter.delete("/:id", tasksControllers.deleteTask);
