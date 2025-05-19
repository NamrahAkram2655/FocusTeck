const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  a_getTasks,
  a_createTask,
  a_deleteTask,
  a_toggleTask,
} = require("../Controllers/taskController");

router.get("/", auth, a_getTasks);
router.post("/", auth, a_createTask);
router.delete("/:id", auth, a_deleteTask);
router.put("/:id/toggle", auth, a_toggleTask);

module.exports = router;
