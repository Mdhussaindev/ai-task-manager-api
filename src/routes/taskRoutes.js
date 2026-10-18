
const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.route("/")
  .post(createTask)
  .get(getTasks);

router.route("/:id")
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;
