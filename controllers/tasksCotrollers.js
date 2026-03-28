import { taskModel } from "../models/taskModel.js";

export class tasksControllers {
  static getAllTask = async (req, res) => {
    const { limit, offset, completed, priority } = req.query;
    const tasks = taskModel.getAllTask(completed, priority);
    if (!tasks) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json(tasks);
  };

  static getTaskById = async (req, res) => {
    const { id } = req.params;
    const task = await taskModel.getTaskById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json(task);
  };

  static createTask = async (req, res) => {
    const { title, priority } = req.body;
    if (!title && !priority) {
      return res
        .status(400)
        .json({ message: "Title and priority is required" });
    }
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
      priority: priority,
      dueDate: new Date(),
    };
    const task = await taskModel.createTask(newTask);
    if (!task) {
      return res.status(500).json({ message: "Failed to create product" });
    }
    return res.status(201).json(task);
  };

  static updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, priority } = req.body;
    const task = await taskModel.updateTask(id, { title, priority });
    if (!task) {
      return res.status(404).json("Task not found");
    }
    res.status(201).json("Task is updated");
  };

  static deleteTask = async (req, res) => {
    const { id } = req.params;
    const task = taskModel.deleteTask(id);
    if (task == false) {
      return res.status(404).json("Task not found");
    }
    res.status(201).json("Task is deleted");
  };
}
