// index.js (or server.js)
const authRouter = require("./middleware/auth");
const tasksRouter = require("./routers/tasks");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api", authRouter);
app.use("/api/tasks", tasksRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
