import { Router } from "express";
import { tasksControllers } from "../controllers/tasksCotrollers.js";

export const taskRouter = Router();

taskRouter.get("/", tasksControllers.getAllTask);
taskRouter.get("/lapsed", tasksControllers.getLapsedTask);
taskRouter.get("/:id", tasksControllers.getTaskById);
taskRouter.post("/", tasksControllers.createTask);
taskRouter.put("/:id", tasksControllers.updateTask);
taskRouter.delete("/:id", tasksControllers.deleteTask);
