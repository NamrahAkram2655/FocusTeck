const express = require("express");
const router = express.Router();
const authToken = require("../middleware/authToken");
const taskController = require("../controllers/taskController");

router.get("/", authToken, taskController.getTasks);
router.post("/", authToken, taskController.createTask);
router.delete("/:id", authToken, taskController.deleteTask);
router.put("/:id/toggle", authToken, taskController.toggleTask);

module.exports = router;
