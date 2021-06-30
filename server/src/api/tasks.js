const { Router } = require('express');

const Task = require('../models/Task');
const verifyToken = require('../middlewares/verifyToken');

const router = Router();

//Return all tasks created by given user
router.get('/all', verifyToken, async (req, res, next) => {
  try {
    const user_id = req.user._id;
    const tasks = await Task.find({ user_id });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

//Return completed tasks created by given user
router.get('/completed', verifyToken, async (req, res, next) => {
  try {
    const user_id = req.user._id;
    const tasks = await Task.find({ user_id, completed: true });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

//Return uncompleted tasks created by given user
router.get('/uncompleted', verifyToken, async (req, res, next) => {
  try {
    const user_id = req.user._id;
    const tasks = await Task.find({ user_id, completed: false });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

//Create new task
router.post('/', verifyToken, async (req, res, next) => {
  try {
    const user_id = req.user._id;
    const task = new Task({ user_id, ...req.body });
    const createdTask = await task.save();
    res.json(createdTask);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

//Update a task
router.put('/:id', async (req, res, next) => {
  try {
    //Find task with given id
    const { id } = req.params;
    const task = await Task.findById(id);

    //Report error if the task was not found in db
    if (!task) {
      const error = new Error('No task with given id was found');
      res.status(400);
      return next(error);
    }

    //Update the task and send it back
    const updated = await Task.updateOne({ _id: id }, req.body);
    res.json(updated);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

//Delete a task
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Task.deleteOne({ _id: id });
    res.json({
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
