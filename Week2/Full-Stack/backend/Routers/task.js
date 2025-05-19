const express = require("express");
const auth = require("../middleware/auth.js");
const {
  a_getTasks,
  a_createTask,
  a_deleteTask,
} = require("../Controllers/taskController");

const router = express.Router();

router.get("/", auth, a_getTasks);
router.post("/", auth, a_createTask);
router.delete("/:id", auth, a_deleteTask);

module.exports = router;
