const express = require('express');
const middleware = require('../middleware/middleware');
const User = require('../models/user');
const router = express.Router();

router.use(middleware);

router.get('/info', async (req, res) => {
  const { userId } = req;
  const user = await User.findById(userId);
  
  console.log('this is the user id', userId)
  if (!user) res.status(400).send({ message: 'User not found' });

  return res.send({ user });
});


module.exports = app => app.use('/user', router);