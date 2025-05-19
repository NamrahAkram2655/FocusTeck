const pool = require("../config/db");

exports.getTasks = async (req, res) => {
  console.log("🔍 /api/tasks called");
  try {
    const result = await pool.query("SELECT * FROM tasks ORDER BY id");
    console.log(" Rows:", result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
};

exports.createTask = async (req, res) => {
  const { text } = req.body;
  const result = await pool.query(
    "INSERT INTO tasks (text) VALUES ($1) RETURNING *",
    [text]
  );
  res.status(201).json(result.rows[0]);
};

exports.deleteTask = async (req, res) => {
  await pool.query("DELETE FROM tasks WHERE id = $1", [req.params.id]);
  res.json({ message: "Task deleted" });
};

exports.toggleTask = async (req, res) => {
  const result = await pool.query(
    "UPDATE tasks SET completed = NOT completed WHERE id = $1 RETURNING *",
    [req.params.id]
  );
  res.json(result.rows[0]);
};
