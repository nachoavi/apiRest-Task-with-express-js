import data from "../data/data.json" with { type: "json" };

let tasks = data;

export class taskModel {
  static getAllTask = async (completed, priority) => {
    if (completed) {
      return tasks.filter((task) => task.completed === completed);
    }
    if (priority) {
      return tasks.filter((task) => task.priority === priority);
    }
    return tasks;
  };

  static getTaskById = async (id) => {
    return tasks.find((task) => task.id === Number(id));
  };

  static getLapsedTask = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return tasks.filter((task) => {
      const dueDate = new Date(task.dueDate + "T00:00:00");

      return dueDate < today && task.completed === false;
    });
  };

  static createTask = async (task) => {
    tasks.push(task);
    return task;
  };

  static updateTask = async (id, task) => {
    const taskToUpdate = tasks.findIndex(
      (taskIndex) => taskIndex.id === Number(id),
    );
    if (taskToUpdate !== -1) {
      tasks[taskToUpdate] = task;
      return task;
    }
    return null;
  };

  static deleteTask = async (id) => {
    const taskToDelete = tasks.findIndex(
      (taskIndex) => taskIndex.id === Number(id),
    );
    if (taskToDelete !== -1) {
      tasks.splice(taskToDelete, 1);
      return true;
    }
    return false;
  };
}
