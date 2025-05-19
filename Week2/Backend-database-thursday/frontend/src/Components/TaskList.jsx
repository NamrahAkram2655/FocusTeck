import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(null);

  // Fetch tasks on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to view tasks.");
      return;
    }

    fetch("http://localhost:5000/api/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch tasks: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setTasks(data);
        } else {
          throw new Error("Tasks data is not an array");
        }
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
        setError(err.message);
      });
  }, []);

  // Add new task
  const addTask = (task) => {
    if (task.trim() === "") return;

    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text: task }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add task");
        return res.json();
      })
      .then((createdTask) => {
        setTasks((prevTasks) => [...prevTasks, createdTask]);
        setNewTask("");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  // Remove task by ID
  const removeTask = (id) => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        } else {
          throw new Error("Failed to delete task");
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}{" "}
            <button onClick={() => removeTask(task.id)}>Remove</button>
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
  );
};

export default TaskList;
