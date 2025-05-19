
let tasks = [];
let idCounter = 1;

function a_getTasks(req, res) {
  res.json(tasks);
}

function a_createTask(req, res) {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const newTask = { id: idCounter++, text };
  tasks.push(newTask);
  res.status(201).json(newTask);
}

function a_deleteTask(req, res) {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id == id);
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  tasks.splice(index, 1);
  res.status(204).send();
}

module.exports = {
  a_getTasks,
  a_createTask,
  a_deleteTask,
};
