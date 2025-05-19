import React, { useState } from "react";
import Navbar from "./Navbar";

const TaskList = () => {
  const [tasks, setTasks] = useState(["Walk dog", "Write code", "Read docs"]);

  const [newTask, setNewTask] = useState("");

  const addTask = (task) => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
  };

  return (
    <>
      <Navbar />

      <div className="task">
        <h1>Task Manager</h1>

        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="list-item">
              {task} <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </>
  );
};

export default TaskList;
