const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/login", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
