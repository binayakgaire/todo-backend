const router = require("express").Router();

import Todo from "../model/Todo";
import verifyToken from "./verifyToken";
import { todoValidation } from "../validation";
import { checkObjectIdValid } from "../helpers/api";

// Get All
router.get("/", verifyToken, async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Create
router.post("/", verifyToken, async (req, res) => {
  // validate data before user
  const { error } = todoValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const todo = new Todo({
    name: req.body.name,
    description: req.body.description,
    deadline: req.body.deadline,
    associated_users: req.body.associated_users,
  });

  try {
    const savedTodo = await todo.save();
    res.send(savedTodo);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete
router.delete("/delete/:id", verifyToken, async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id });

  if (todo) {
    await todo.remove();
    return res.send("Sucssfully deleted");
  } else {
    return res.status(404).send("Todo Not found");
  }
});

// Update
router.put("/:id", verifyToken, async (req, res) => {
  // validate data before user
  const { error } = todoValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new : true }
    );
    res.send(updatedTodo);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get one
router.get("/:id", verifyToken, async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id });

  if (todo) {
    return res.send(todo);
  } else {
    return res.status(404).send("Todo Not found");
  }
});

module.exports = router;
