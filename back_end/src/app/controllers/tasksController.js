const express = require('express');
const authMiddleware = require('../middleware/middleware');
const router = express.Router();

const Task = require('../models/tasks');

router.use(authMiddleware);

router.get('/tasks', async (req, res) => {
  try {
    const userId = await req.userId;
  
    const tasks = await Task.find({ userId });
  
    if (!tasks) return res.status(400).send({ message: 'User has no tasks registred' });
  
    return res.send({ tasks })
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.get('/tasks/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const task = await Task.findOne({ name });
  
    if (!task) {
      return res.status(400).send({ message: 'Task not found' });
    }
    return res.send({ task });
    
  } catch (error) {
    return res.status(400).send({ error });
  }
});


router.post('/tasks', async (req, res) => { 
  try {
    const { name } = req.body;
    const userId = req.userId;
  
    if (await Task.findOne({ name })) {
      return res.status(400).send({ message: 'Task already registred' });
    }
  
    const task = await Task.create({
      ...req.body,
      userId
    });
    return res.send(task);
  }
  catch (error) {
    return res.status(400).send({ error })
  }
});

module.exports = app => app.use('/get', router);